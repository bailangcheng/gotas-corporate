# プロジェクト概要（Stack & 構成）

GO-TAs コーポレートサイト。沖縄を拠点に複数事業（配達弁当・食品卸・惣菜・飲食・
不動産・IT・デジタルサイネージ・人材紹介）を展開する GO-TAs の会社案内サイト。

普通の中小企業のコーポレートサイトであり、過剰な機能は持たない。中心は
「会社・事業・採用の静的ページ」＋「Magazine（記事 CMS）」＋「お問い合わせフォーム」。

---

## 技術スタック

| 区分 | 採用 | 補足 |
| --- | --- | --- |
| フレームワーク | **Next.js 16.2.6（App Router）** | React 19.2。`next/font` は使わず `<head>` の `<link>` でフォント読込 |
| 言語 | **TypeScript 5** | `npm run typecheck` で `tsc --noEmit` |
| スタイル | **Tailwind CSS v4** | `tailwind.config.js` 不要。トークンは `globals.css` の `@theme inline {}` |
| ビルド | **Turbopack**（dev / build） | ただし Cloudflare バンドル時のみ webpack（`open-next.config.ts`） |
| CMS | **microCMS**（`microcms-js-sdk`、サーバー側のみ） | 未設定時はモックにフォールバック |
| メール | **Resend** | `/api/inquiry` 経由でお問い合わせ送信 |
| ホスティング | **Cloudflare Workers**（`@opennextjs/cloudflare` + `wrangler`） | monora-web と同じ構成 |
| Lint | **ESLint 9** / `eslint-config-next` | |
| 補助 | `playwright`（devDep） | テストランナーは未設定。`scripts/` の検証用途 |

### スクリプト（package.json）

```bash
npm run dev        # ローカル開発 (http://localhost:3000)
npm run build      # next build
npm run lint
npm run typecheck
npm run check      # lint + typecheck + build をまとめて実行
npm run cf:build   # opennextjs-cloudflare build
npm run cf:deploy  # cf:build + wrangler deploy
npm run cf:preview # cf:build + wrangler dev
```

---

## ディレクトリ構成

```
src/
├─ app/                      # ルート（App Router）
│  ├─ layout.tsx             # 共通レイアウト・metadata/OGP・フォント<link>
│  ├─ page.tsx               # トップページ
│  ├─ [...slug]/page.tsx     # site.ts の staticPages を解決する汎用ルート
│  ├─ company/               # 企業情報（/, members, gotas-history, group）
│  ├─ business/              # 事業案内（/ + 各事業の専用ページ）
│  ├─ recruit/               # 採用（/, mid-career）
│  ├─ magazine/              # 記事一覧 + /[slug] 詳細
│  ├─ news/                  # ニュース一覧（記事は magazine に統合）
│  ├─ contact/               # お問い合わせフォーム
│  ├─ privacy/               # プライバシーポリシー
│  ├─ legal/tokushoho/       # 特定商取引法に基づく表記
│  ├─ api/inquiry/           # Resend メール送信
│  ├─ api/revalidate/        # microCMS Webhook 受け口（オンデマンド再生成）
│  ├─ sitemap.ts             # /sitemap.xml
│  └─ robots.ts              # /robots.txt
├─ components/
│  ├─ layout/                # SiteHeader / HeaderNav / SiteFooter / FooterMarquee
│  ├─ sections/              # ページのセクション（1機能=1ファイル）
│  └─ ui/                    # プリミティブ（Button/Card/Container/SectionHeading 等）
├─ content/
│  ├─ site.ts                # ★ナビ・フッター・ページ定義・会社情報の集中管理
│  ├─ company-overview.ts    # 会社概要（ローカル TS、microCMS 非対象）
│  └─ branch-offices.ts      # 拠点情報
└─ lib/
   ├─ page-registry.ts       # staticPages からパス解決
   └─ cms/                   # microCMS アダプタ + ラッパ + モック + 型
```

`src/content/site.ts` が**最重要ファイル**。ヘッダー/フッターのリンク、静的ページ一覧、
会社名・URL・連絡先などがすべてここに集約されている。ナビやリンクの変更は基本ここを編集する。

---

## ルーティング（現状の実体）

| パス | 内容 | 実装 |
| --- | --- | --- |
| `/` | トップ | `app/page.tsx` |
| `/company` | 企業情報トップ | 専用ページ |
| `/company/members` | メンバー紹介 | 専用ページ |
| `/company/gotas-history` | 会社沿革 | 専用ページ |
| `/company/group` | グループ＆連携企業 | 専用ページ |
| `/company/message` | 代表メッセージ | `[...slug]` → `StaticPageContent` |
| `/business` | 事業案内トップ | 専用ページ |
| `/business/ranrantei` 他8件 | 各事業（gushi / isunoki / okinawa-specialty / food-beverage / real-estate / it / digital-signage / recruitment-school） | 専用ページ |
| `/recruit` | 採用トップ | 専用ページ |
| `/recruit/mid-career` | 中途採用 | 専用ページ |
| `/recruit/part-time` | パート・アルバイト採用 | **「準備中」プレースホルダのまま**（要対応） |
| `/gotas-plus` | もっと GO-TAs（10の約束・語録） | `[...slug]` → `GotasPlusContent` |
| `/group/partners` | 提携企業 | `[...slug]` → グループindex |
| `/magazine`, `/magazine/[slug]` | 記事一覧・詳細 | microCMS（未設定時モック） |
| `/news` | ニュース一覧 | 記事は magazine に統合 |
| `/contact` | お問い合わせフォーム | `/api/inquiry` に POST |
| `/privacy` | プライバシーポリシー | 専用ページ |
| `/legal/tokushoho` | 特商法表記 | 専用ページ |

**リダイレクト**（`next.config.ts`）:
`/group/companies → /company/group` ／ `/company/overview → /company` ／ `/news/:slug → /magazine/:slug`（いずれも 301）。

---

## データの出どころ（CMS / ローカル）

| エリア | 現状の出どころ | microCMS 設定時 |
| --- | --- | --- |
| Magazine 一覧・詳細 | microCMS `magazine`（未設定ならモック1件） | microCMS |
| ヘッダー News ピン / トップ News | microCMS `news-pin`（未設定ならモック） | microCMS |
| 事業ページ / 沿革 / グループ / 採用 / 法務 | **各ページに実装済みの内容**（専用ページ） | `history`・`business-detail`・`group-companies`・`recruit-job`・`privacy-policy`・`terms` のアダプタ＋モック＋ラッパは用意済みだが UI は未接続 |
| 会社概要 | ローカル `src/content/company-overview.ts` | （microCMS 非対象） |

- microCMS は `MICROCMS_SERVICE_DOMAIN` と `MICROCMS_API_KEY` が両方無いと、全ラッパが
  `null` を返し**モック/ローカル内容にフォールバック**する。ローカル開発・プレビューは
  シークレット無しで動く。
- API キーは**サーバー側のみ**。クライアントコンポーネントには渡さない。
- microCMS のスキーマ詳細・エンドポイント作成順は [CMS_SCHEMA.md](CMS_SCHEMA.md) を参照。

---

## デザインシステム

- トークンは `src/app/globals.css` の `@theme inline {}` に集約（Tailwind v4）。
- 色・フォント・余白の**正しいクラス名はリポジトリ直下の `CLAUDE.md` の早見表**を参照
  （存在しないクラスの推測使用を禁止しているのはそこ）。
- フォントはローカルの Futura / Zen Kaku Gothic New ＋ Google Noto Sans JP（`<link>` 読込）。
  `next/font` は Turbopack 非互換のため**使わない**。
- 多くのセクションは SP / PC で別 JSX ブロック（`hidden md:flex` / `flex md:hidden`）を持つ。
  片方を変えたらもう片方も合わせる。

---

## セキュリティ

- `next.config.ts` で CSP ほかセキュリティヘッダを全パスに付与済み
  （`img-src` は self / data / microCMS / Figma のみ許可）。
- `/api/revalidate` は `MICROCMS_WEBHOOK_SECRET` の署名検証必須（未設定なら 503）。
- お問い合わせ本文は HTML エスケープしてメール生成（`/api/inquiry`）。

---

## 関連ドキュメント

- [PRE_LAUNCH_TODO.md](PRE_LAUNCH_TODO.md) — **公開前にやることリスト（最優先）**
- [DEPLOYMENT.md](DEPLOYMENT.md) — デプロイ手順・環境変数・CI
- [CMS_SCHEMA.md](CMS_SCHEMA.md) — microCMS スキーマ定義
- [DATA_FRESHNESS.md](DATA_FRESHNESS.md) — 記事更新の即時反映（R2 キャッシュ）
- [DECISIONS.md](DECISIONS.md) — 技術選定の経緯（ADR）
- [cms-test-content/](cms-test-content/) — microCMS 表示テストキット
