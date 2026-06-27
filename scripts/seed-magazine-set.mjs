#!/usr/bin/env node
/**
 * seed-magazine-set.mjs — 複数のテスト記事をまとめて投入する。
 *
 * - 想定タグ(カテゴリ)を categories エンドポイントに用意（無ければ作成）
 * - 各カテゴリに rich text 本文（見出し/箇条書き/引用/太字/リンク）の記事を投入
 * - 記事は【テスト】タイトル＋ test- スラッグで明確にマーキング（後で一括削除しやすい）
 *
 * 画像について:
 *   microCMS の image フィールド/richEditor は「管理メディア(microcms-assets)」しか
 *   受け付けない。外部/相対URLは 400/除去される（検証済み）。媒体アップロードは
 *   Management API 権限が必要で、Content用キーでは 403。よって本文/カバー画像は
 *   ここでは設定せず、各記事に推奨カバー画像のパスだけ出力する（エディタ投入用）。
 *
 * 使い方:
 *   MICROCMS_SERVICE_DOMAIN=go-tas MICROCMS_MANAGEMENT_API_KEY=＜POST可能キー＞ \
 *   node scripts/seed-magazine-set.mjs           # 投入
 *   node scripts/seed-magazine-set.mjs --dry-run # 内容確認のみ
 */

const DRY = process.argv.includes("--dry-run");
const DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const KEY =
  process.env.MICROCMS_MANAGEMENT_API_KEY || process.env.MICROCMS_API_KEY;

if (!DOMAIN || !KEY) {
  console.error("❌ MICROCMS_SERVICE_DOMAIN と書き込み可能な API キーが必要です。");
  process.exit(1);
}

const base = `https://${DOMAIN}.microcms.io/api/v1`;
const headers = { "X-MICROCMS-API-KEY": KEY, "Content-Type": "application/json" };

async function api(method, path, body) {
  const res = await fetch(`${base}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${method} ${path} → ${res.status}: ${text}`);
  return text ? JSON.parse(text) : {};
}

// 想定タグ（= 画像で示されたカテゴリ）。name 表示 / slug は ascii。
const CATEGORY_DEFS = [
  { name: "コーポレート", slug: "corporate" },
  { name: "飲食", slug: "food" },
  { name: "IT", slug: "it" },
  { name: "人材支援", slug: "hr" },
  { name: "不動産", slug: "realestate" },
  { name: "お知らせ", slug: "oshirase" },
  { name: "レポート", slug: "report" },
];

/** rich text 本文を組み立てる（richEditor が通すタグのみ使用）。 */
function render(a) {
  const links = a.links
    .map((l) => `<li>${l.label}: <a href="${l.href}">${l.href}</a></li>`)
    .join("");
  return [
    `<p>${a.lead}</p>`,
    `<h2>${a.h2}</h2>`,
    ...a.paras.map((p) => `<p>${p}</p>`),
    `<ul>${a.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>`,
    `<h3>${a.h3}</h3>`,
    `<p>${a.h3body}</p>`,
    `<blockquote><p>${a.quote}</p></blockquote>`,
    `<p><strong>${a.closeBold}</strong>${a.closeText}</p>`,
    `<ul>${links}</ul>`,
  ].join("");
}

// 8本（コーポレートだけ2本＝同一カテゴリ複数も検証）。cover は推奨画像（API では設定不可）。
const ARTICLES = [
  {
    slug: "test-corporate-rebrand",
    title: "【テスト】GO-TAsグループ、2026年度の新体制を発表",
    category: "コーポレート",
    tags: ["Corporate"],
    excerpt: "（テストデータ）2026年度より新体制を発足し、グループ横断の連携をさらに強化します。",
    cover: "/images/business/it/hero.png",
    lead: "GO-TAsグループは2026年度より新たな経営体制を発足し、飲食・IT・人材・不動産の各事業を横断した連携体制を強化します。",
    h2: "新体制のねらい",
    paras: [
      "事業承継で培ったノウハウを核に、グループ各社の強みを掛け合わせて地域に新しい価値を生み出すことを目指します。",
    ],
    bullets: ["事業横断のプロジェクト推進体制を新設", "意思決定の高速化", "人材育成プログラムの拡充"],
    h3: "今後の展開",
    h3body: "沖縄を起点に、デジタルとリアルの両面から事業領域をさらに広げていきます。",
    quote: "個の力を組織の力へ。GO-TAsは挑戦を続けます。",
    closeBold: "詳細は順次お知らせします。",
    closeText: "最新情報は各事業ページをご覧ください。",
    links: [{ label: "事業案内", href: "/business" }, { label: "企業情報", href: "/company" }],
  },
  {
    slug: "test-corporate-award",
    title: "【テスト】GO-TAs、地域貢献企業として表彰されました",
    category: "コーポレート",
    tags: ["Corporate", "Press"],
    excerpt: "（テストデータ）地域経済への貢献が評価され、表彰をいただきました。",
    cover: "/images/company/media/tv-1.png",
    lead: "このたびGO-TAsは、地域経済の活性化と雇用創出への取り組みが評価され、地域貢献企業として表彰されました。",
    h2: "評価されたポイント",
    paras: ["地元食材の活用と、若手人材の育成・定着への継続的な取り組みが評価されました。"],
    bullets: ["地元生産者との直接取引", "未経験者向けの研修制度", "地域イベントへの協賛"],
    h3: "受賞にあたって",
    h3body: "これからも事業を通じて地域に還元し続けてまいります。",
    quote: "地域に根ざし、地域とともに成長する。",
    closeBold: "応援ありがとうございます。",
    closeText: "引き続きよろしくお願いいたします。",
    links: [{ label: "GO-TAs+", href: "/gotas-plus" }],
  },
  {
    slug: "test-food-gosei-menu",
    title: "【テスト】海鮮丼五星、夏の季節限定メニューが登場",
    category: "飲食",
    tags: ["Business"],
    excerpt: "（テストデータ）沖縄×北海道の旬を詰め込んだ夏限定の海鮮丼が登場します。",
    cover: "/images/business/food-beverage/hero.png",
    lead: "海鮮丼専門店「五星」より、夏の季節限定メニューが登場します。沖縄と北海道、2つの海の旬を一杯に詰め込みました。",
    h2: "夏限定メニューの特徴",
    paras: ["北海道魚連との直接取引による鮮度と、沖縄県産食材の彩りを両立させた一杯です。"],
    bullets: ["ウニ・イクラの数量限定丼", "沖縄そばとのセット", "テイクアウト対応"],
    h3: "提供期間",
    h3body: "数量限定のため、なくなり次第終了となります。お早めにご来店ください。",
    quote: "ただ食べるだけではない体験を、五感で。",
    closeBold: "ご予約はお早めに。",
    closeText: "詳しくは公式サイト・Instagramをご覧ください。",
    links: [
      { label: "事業詳細", href: "/business/food-beverage" },
      { label: "公式サイト", href: "https://www.5sei.com/" },
      { label: "Instagram", href: "https://www.instagram.com/gosei_kaisen/" },
    ],
  },
  {
    slug: "test-it-signage-case",
    title: "【テスト】デジタルサイネージ導入で回遊率が向上した事例",
    category: "IT",
    tags: ["Business", "Project"],
    excerpt: "（テストデータ）商業施設へのサイネージ導入で、来館者の回遊率が向上しました。",
    cover: "/images/business/digital-signage/hero.png",
    lead: "ある商業施設にデジタルサイネージを導入し、コンテンツ配信を最適化したところ、来館者の回遊率が向上しました。",
    h2: "課題と取り組み",
    paras: ["紙の掲示では更新が遅く、館内の回遊を促せていないという課題がありました。"],
    bullets: ["時間帯別の自動配信", "フロアごとの最適化", "効果測定ダッシュボード"],
    h3: "導入効果",
    h3body: "館内滞在時間と特定フロアへの来訪が増加し、テナント満足度も向上しました。",
    quote: "伝えたい情報を、伝えたい瞬間に。",
    closeBold: "サイネージ導入のご相談を承ります。",
    closeText: "詳しくは事業ページをご覧ください。",
    links: [{ label: "事業詳細", href: "/business/digital-signage" }],
  },
  {
    slug: "test-hr-results",
    title: "【テスト】医療人材紹介、2026年上半期の支援実績レポート",
    category: "人材支援",
    tags: ["Business"],
    excerpt: "（テストデータ）医療従事者の転職・キャリア支援の上半期実績をまとめました。",
    cover: "/images/business/recruitment-school/hero.png",
    lead: "医療人材紹介事業における2026年上半期の支援実績をご報告します。丁寧なヒアリングでミスマッチの防止に努めました。",
    h2: "上半期のハイライト",
    paras: ["求職者・医療機関双方への継続的なフォローにより、定着率の高いマッチングを実現しました。"],
    bullets: ["業界特化型データベースの拡充", "面談前後のフォロー強化", "復職支援プログラム"],
    h3: "下半期に向けて",
    h3body: "地域医療を支える人材の循環を、さらに丁寧に支えてまいります。",
    quote: "人と職場の、最適な出会いを。",
    closeBold: "ご相談はお気軽に。",
    closeText: "採用・転職のご相談を承ります。",
    links: [{ label: "事業詳細", href: "/business/recruitment-school" }, { label: "採用情報", href: "/recruit" }],
  },
  {
    slug: "test-realestate-seminar",
    title: "【テスト】沖縄不動産投資セミナーを開催しました",
    category: "不動産",
    tags: ["Business", "Project"],
    excerpt: "（テストデータ）沖縄エリアの不動産投資をテーマにしたセミナーを開催しました。",
    cover: "/images/business/real-estate/hero.png",
    lead: "沖縄県内の不動産投資をテーマにしたセミナーを開催し、多くの方にご参加いただきました。",
    h2: "セミナーの内容",
    paras: ["エリア特性や利回りの考え方、リスク管理まで、実例を交えて解説しました。"],
    bullets: ["沖縄エリアの市場動向", "投資判断のポイント", "個別相談会"],
    h3: "参加者の声",
    h3body: "「具体的な事例が参考になった」との声を多くいただきました。",
    quote: "数字の先にある、暮らしと地域を見据えて。",
    closeBold: "次回開催も予定しています。",
    closeText: "個別相談も随時受け付けています。",
    links: [{ label: "事業詳細", href: "/business/real-estate" }],
  },
  {
    slug: "test-notice-holiday",
    title: "【テスト】年末年始の営業についてのお知らせ",
    category: "お知らせ",
    tags: ["Corporate"],
    excerpt: "（テストデータ）年末年始の各事業の営業スケジュールについてご案内します。",
    cover: "/images/business/gushi/hero.png",
    lead: "平素より格別のご愛顧を賜り、誠にありがとうございます。年末年始の営業についてご案内いたします。",
    h2: "営業スケジュール",
    paras: ["各事業・店舗により営業日が異なります。詳細は各店舗ページをご確認ください。"],
    bullets: ["本社業務：12/29〜1/3 休業", "飲食店舗：店舗により異なる", "お問い合わせ対応：1/4より順次"],
    h3: "お問い合わせについて",
    h3body: "休業期間中のお問い合わせは、営業開始後に順次対応いたします。",
    quote: "本年も大変お世話になりました。",
    closeBold: "良いお年をお迎えください。",
    closeText: "来年も変わらぬご愛顧をお願いいたします。",
    links: [{ label: "お問い合わせ", href: "/contact" }],
  },
  {
    slug: "test-report-ai",
    title: "【テスト】社内勉強会レポート：生成AIの業務活用",
    category: "レポート",
    tags: ["Project"],
    excerpt: "（テストデータ）生成AIを業務にどう活かすか、社内勉強会の内容をレポートします。",
    cover: "/images/business/isunoki/hero.png",
    lead: "社内勉強会「生成AIの業務活用」を開催しました。各事業での具体的な活用アイデアを共有しました。",
    h2: "勉強会のテーマ",
    paras: ["制作・運用・人材・飲食の各現場で、生成AIをどう取り入れるかを議論しました。"],
    bullets: ["原稿・コピーの下書き作成", "問い合わせ対応の効率化", "データ分析の補助"],
    h3: "今後の取り組み",
    h3body: "現場の知見とAIを組み合わせ、サービス品質の向上につなげていきます。",
    quote: "道具は使い手次第。学び続けるチームでありたい。",
    closeBold: "次回も継続して開催します。",
    closeText: "社内ナレッジとして蓄積していきます。",
    links: [{ label: "GO-TAs+", href: "/gotas-plus" }],
  },
];

async function ensureCategories() {
  const existing = await api("GET", "/categories?limit=100");
  const byName = new Map((existing.contents || []).map((c) => [c.name, c.id]));
  for (const def of CATEGORY_DEFS) {
    if (byName.has(def.name)) {
      console.log(`  = カテゴリ既存: ${def.name} (${byName.get(def.name)})`);
      continue;
    }
    if (DRY) {
      console.log(`  + [dry] カテゴリ作成: ${def.name}`);
      byName.set(def.name, `(dry-${def.slug})`);
      continue;
    }
    const res = await api("POST", "/categories", { name: def.name, slug: def.slug });
    byName.set(def.name, res.id);
    console.log(`  + カテゴリ作成: ${def.name} (${res.id})`);
  }
  return byName;
}

async function slugExists(slug) {
  const r = await api("GET", `/magazine?filters=slug[equals]${slug}&limit=1`);
  return (r.contents || []).length > 0;
}

async function main() {
  console.log(`▶ seed-magazine-set — domain=${DOMAIN}${DRY ? " (dry-run)" : ""}\n`);
  console.log("◼ カテゴリを用意:");
  const catId = await ensureCategories();

  console.log("\n◼ 記事を投入:");
  const created = [];
  for (const a of ARTICLES) {
    if (!DRY && (await slugExists(a.slug))) {
      console.log(`  = スキップ(既存): ${a.slug}`);
      continue;
    }
    const payload = {
      title: a.title,
      slug: a.slug,
      category: catId.get(a.category),
      tags: a.tags,
      excerpt: a.excerpt,
      body: render(a),
    };
    if (DRY) {
      console.log(`  + [dry] ${a.slug}  [${a.category}]  body ${payload.body.length}文字`);
      continue;
    }
    const res = await api("POST", "/magazine", payload);
    created.push({ slug: a.slug, id: res.id, category: a.category, cover: a.cover });
    console.log(`  + 投入: ${a.slug}  id=${res.id}  [${a.category}]`);
  }

  console.log("\n◼ 推奨カバー画像（エディタで設定 / public 配下）:");
  for (const a of ARTICLES) console.log(`  ${a.slug}  →  ${a.cover}`);

  if (created.length) {
    console.log("\n一括削除用スラッグ:", created.map((c) => c.slug).join(", "));
  }
  console.log("\n完了。");
}

main().catch((e) => {
  console.error("❌ 失敗:", e.message);
  process.exit(1);
});
