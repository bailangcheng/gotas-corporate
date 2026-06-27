#!/usr/bin/env node
/**
 * seed-cms.mjs — microCMS への記事「投放」（自動投入）スクリプト
 *
 * microCMS の Management(Write) API を使って、テスト記事を直接 POST する。
 * 画面ぽちぽちせずに、画像・青リンク入りの本文を一発で投入できる。
 *
 * 必要な環境変数:
 *   MICROCMS_SERVICE_DOMAIN        例: gotas   (go-tas.microcms.io の "go-tas")
 *   MICROCMS_MANAGEMENT_API_KEY    書き込み(POST)権限のある API キー
 *                                  ※読み取り専用キーでは 401/403 になる
 *
 * 使い方:
 *   MICROCMS_SERVICE_DOMAIN=go-tas \
 *   MICROCMS_MANAGEMENT_API_KEY=xxxxxxxx \
 *   node scripts/seed-cms.mjs              # magazine にテスト記事を投入
 *
 *   node scripts/seed-cms.mjs --dry-run    # 送信せず内容だけ表示
 *   node scripts/seed-cms.mjs --news       # news エンドポイントにも投入(存在する場合)
 *
 * 重要な仕様:
 *   - body(richEditor) は「HTMLの文字列」をそのまま送れる。本文中の <img src>
 *     は外部URLでも相対パスでもOK（生の <img> としてブラウザが解決する）。
 *   - coverImage(画像フィールド) は Management API から URL 直指定できない
 *     （メディアの事前アップロードが必要）。このスクリプトでは設定しない。
 *     カバー画像が要る場合だけ管理画面で1枚アップロードする。
 *   - category は categories への参照のため contentId が要る。ここでは省略し、
 *     tags(multipleSelect) のみ設定する。
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, "..", "docs", "cms-test-content");

const DRY_RUN = process.argv.includes("--dry-run");
const SEED_NEWS = process.argv.includes("--news");

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY =
  process.env.MICROCMS_MANAGEMENT_API_KEY || process.env.MICROCMS_API_KEY;

if (!SERVICE_DOMAIN || !API_KEY) {
  console.error(
    "❌ MICROCMS_SERVICE_DOMAIN と MICROCMS_MANAGEMENT_API_KEY を環境変数で渡してください。",
  );
  process.exit(1);
}

function html(file) {
  // microCMS の richEditor は Write API 経由でも HTML をサニタイズし、
  // 外部/相対 src の <img> と <figure> を除去する（管理画像のみ許可）。
  // そのため figure/img は事前に外しておく（孤立キャプション段落を残さない）。
  // 画像は管理画面のエディタ（画像ボタン）か media API で挿入する想定。
  return readFileSync(join(CONTENT_DIR, file), "utf8")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<figure>[\s\S]*?<\/figure>/g, "")
    .replace(/<img[^>]*>/g, "")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

/** 1件 POST する。microCMS は { id } を返す。 */
async function post(endpoint, payload) {
  const url = `https://${SERVICE_DOMAIN}.microcms.io/api/v1/${endpoint}`;
  if (DRY_RUN) {
    console.log(`\n[dry-run] POST ${url}`);
    console.log(JSON.stringify(payload, null, 2).slice(0, 600) + " …");
    return { id: "(dry-run)" };
  }
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "X-MICROCMS-API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`POST ${endpoint} → ${res.status}: ${text}`);
  }
  return JSON.parse(text);
}

const magazineArticle = {
  title: "海鮮丼五星オープン",
  slug: "gosei-kaisendon-open",
  // category は categories への参照（contentId 文字列で指定）。
  // プレス(g-3zr_wje6q) にすると News 統合ビュー(/news・トップ)にも載る。
  category: "g-3zr_wje6q",
  excerpt:
    "沖縄県那覇市にて琉球海鮮丼専門店「五星」をオープン。沖縄×北海道の海の魅力を掛け合わせた海鮮丼を提供します。",
  tags: ["Press"],
  body: html("magazine-article-body.html"),
};

const newsArticle = {
  title: "嵐々亭本店、新ブランドの販売を始めました",
  slug: "arashitei-new-brand",
  excerpt: "嵐々亭本店にて新ブランドの販売を開始いたしました。",
  body: html("news-article-body.html"),
};

async function main() {
  console.log(
    `▶ microCMS seed — domain=${SERVICE_DOMAIN}${DRY_RUN ? " (dry-run)" : ""}`,
  );

  const mag = await post("magazine", magazineArticle);
  console.log(`✅ magazine 投入: id=${mag.id} → /magazine/${magazineArticle.slug}`);

  if (SEED_NEWS) {
    try {
      const news = await post("news", newsArticle);
      console.log(`✅ news 投入: id=${news.id} → /news/${newsArticle.slug}`);
    } catch (e) {
      console.warn(
        `⚠ news 投入をスキップ（エンドポイント未作成？）: ${e.message}`,
      );
    }
  }

  console.log(
    "\n完了。microCMS 管理画面で「下書き」になっている場合は『公開』に変更してください。",
  );
}

main().catch((e) => {
  console.error("❌ 失敗:", e.message);
  process.exit(1);
});
