#!/usr/bin/env node
/**
 * upload-covers.mjs — テスト記事のカバー画像を public/images から microCMS に
 * アップロードして coverImage に設定する。
 *
 * ⚠ 画像アップロードは microCMS の Management API 権限が必要。
 *   通常の Content 用キーでは media エンドポイントが 403 になる（検証済み）。
 *   先に microCMS 管理画面で「マネジメントAPI」にメディアのアップロード権限がある
 *   キーを用意し、それを MICROCMS_MEDIA_KEY に渡すこと。
 *
 * 使い方:
 *   MICROCMS_SERVICE_DOMAIN=go-tas \
 *   MICROCMS_MEDIA_KEY=＜メディアアップロード可能なキー＞ \
 *   MICROCMS_API_KEY=＜記事をPATCHできるキー＞ \
 *   node scripts/upload-covers.mjs
 *
 * 仕組み:
 *   1) public 配下の画像を management API の /media に multipart で POST → 資産URL取得
 *   2) その資産URL文字列を記事の coverImage に PATCH（image フィールドは資産URL文字列を受け付ける）
 *
 * ※ media API のレスポンス形は環境差があるため、url の取り出しは緩めに実装。
 *   うまく動かない場合はレスポンスのログを見て調整してください（未検証コード）。
 */

import { readFileSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const MEDIA_KEY = process.env.MICROCMS_MEDIA_KEY;
const CONTENT_KEY = process.env.MICROCMS_API_KEY || process.env.MICROCMS_MANAGEMENT_API_KEY;

if (!DOMAIN || !MEDIA_KEY || !CONTENT_KEY) {
  console.error(
    "❌ MICROCMS_SERVICE_DOMAIN / MICROCMS_MEDIA_KEY / MICROCMS_API_KEY が必要です。",
  );
  process.exit(1);
}

// slug → public 画像（seed-magazine-set.mjs の cover と対応）
const COVERS = {
  "test-corporate-rebrand": "public/images/business/it/hero.png",
  "test-corporate-award": "public/images/company/media/tv-1.png",
  "test-food-gosei-menu": "public/images/business/food-beverage/hero.png",
  "test-it-signage-case": "public/images/business/digital-signage/hero.png",
  "test-hr-results": "public/images/business/recruitment-school/hero.png",
  "test-realestate-seminar": "public/images/business/real-estate/hero.png",
  "test-notice-holiday": "public/images/business/gushi/hero.png",
  "test-report-ai": "public/images/business/isunoki/hero.png",
  "gosei-kaisendon-open": "public/images/business/food-beverage/gallery-1.png",
};

const contentBase = `https://${DOMAIN}.microcms.io/api/v1`;
const mgmtBase = `https://${DOMAIN}.microcms-management.io/api/v1`;

async function uploadMedia(relPath) {
  const buf = readFileSync(join(ROOT, relPath));
  const fd = new FormData();
  fd.append("file", new Blob([buf], { type: "image/png" }), basename(relPath));
  const res = await fetch(`${mgmtBase}/media`, {
    method: "POST",
    headers: { "X-MICROCMS-API-KEY": MEDIA_KEY },
    body: fd,
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`media upload ${res.status}: ${text}`);
  const json = JSON.parse(text);
  // 形のゆらぎに対応: {url} / {url:[...]} / [{url}] など
  const url =
    json.url ||
    (Array.isArray(json.url) && json.url[0]) ||
    (Array.isArray(json) && json[0]?.url);
  if (!url) throw new Error(`url が取れない: ${text}`);
  return url;
}

async function findContentId(slug) {
  const res = await fetch(
    `${contentBase}/magazine?filters=slug[equals]${slug}&limit=1`,
    { headers: { "X-MICROCMS-API-KEY": CONTENT_KEY } },
  );
  const json = await res.json();
  return json.contents?.[0]?.id ?? null;
}

async function setCover(id, assetUrl) {
  const res = await fetch(`${contentBase}/magazine/${id}`, {
    method: "PATCH",
    headers: { "X-MICROCMS-API-KEY": CONTENT_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ coverImage: assetUrl }),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`PATCH cover ${res.status}: ${text}`);
}

async function main() {
  console.log(`▶ upload-covers — domain=${DOMAIN}\n`);
  for (const [slug, img] of Object.entries(COVERS)) {
    try {
      const id = await findContentId(slug);
      if (!id) {
        console.log(`  = スキップ(記事なし): ${slug}`);
        continue;
      }
      const url = await uploadMedia(img);
      await setCover(id, url);
      console.log(`  ✅ ${slug} ← ${img}`);
    } catch (e) {
      console.log(`  ❌ ${slug}: ${e.message}`);
    }
  }
  console.log("\n完了。");
}

main().catch((e) => {
  console.error("❌ 失敗:", e.message);
  process.exit(1);
});
