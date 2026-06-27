# 公開前 TODO（交付チェックリスト）

普通の中小企業コーポレートサイトとして**公開に必要な範囲**に絞ったリスト。
過剰な機能追加は含めない。各項目に対象ファイルを明記。

凡例: 🔴 公開ブロッカー（やらないと壊れる/表示できない） ／ 🟡 内容確定（差し替え必須） ／ 🟢 任意（小規模サイトなら後回し可）

---

## A. インフラ・環境変数 🔴

### A-1. 本番ドメインと `NEXT_PUBLIC_SITE_URL`
- 未設定だと `siteConfig.url` が `https://gotas.example.com` にフォールバックし、
  **canonical / OGP / sitemap / robots がすべてダミードメインを指す**。
- 対象: `src/content/site.ts:54`（コードは環境変数で上書きする設計。コード変更は不要）。
- 対応: Cloudflare Workers 本番環境に `NEXT_PUBLIC_SITE_URL=https://<本番ドメイン>` を設定。

### A-2. Resend（お問い合わせメール）
お問い合わせフォームは送信時に `/api/inquiry` を呼ぶ。**メール設定が無いと送信が 500
「メール送信設定が未完了です」になる**（`src/app/api/inquiry/route.ts:72`）。

手順:
1. Resend アカウント作成 → **送信ドメインを認証**（DNS に SPF / DKIM / DMARC を追加）。
2. 環境変数（Workers の secret として登録）:
   - `RESEND_API_KEY` … Resend の API キー
   - `INQUIRY_FROM_EMAIL` … 認証済みドメインの差出人（例 `no-reply@<ドメイン>`）
   - `INQUIRY_TO_EMAIL` … 受信先（社内の問い合わせ受けアドレス）
   - （任意）`CONTACT_*` / `MEETING_*` のチャネル別上書き。通常は不要。
3. `wrangler secret put RESEND_API_KEY`（等）で本番に登録。
4. `/contact` から実際に送信し、受信できることを確認。
- 参考: `.env.example` にキー一覧あり。

### A-3. microCMS（Magazine / News）
未設定だと Magazine はモック記事「GO-TAsコーポレートサイト準備中」1件に
フォールバックする（`src/lib/cms/mock-posts.ts`）。

- `MICROCMS_SERVICE_DOMAIN`（例 `go-tas`）と `MICROCMS_API_KEY` を本番に設定。
- microCMS 管理画面で `magazine` / `news-pin` エンドポイントを作成し、**実記事を投入**。
  スキーマは [CMS_SCHEMA.md](CMS_SCHEMA.md)、投入手順は [cms-test-content/README.md](cms-test-content/README.md)。
- 記事を載せない方針なら、ヘッダー/フッターの Magazine・ニュース導線の扱いを決める。

### A-4. Cloudflare 本番デプロイ
- `wrangler.jsonc` は現状 `gotas-corporate-staging` のみ。**本番 worker / 独自ドメインの
  routes（または `env.production`）を追加**。
- CI のデプロイジョブ（`.github/workflows/ci.yml`）は `CLOUDFLARE_API_TOKEN` を要求 →
  **GitHub の Secrets に登録**。account id（`c19933...`）は設定済み。
- ドメインは別制作会社所有の想定 → **NS / CNAME の委任を依頼**（[DEPLOYMENT.md](DEPLOYMENT.md)）。

---

## B. 壊れたリンク・プレースホルダリンク 🔴

### B-1. `/privacy-policy` への壊れたリンク ✅ 修正済み
- お問い合わせフォームの「プライバシーポリシー」リンクが `/privacy-policy`（404）を
  指していたのを `/privacy` に修正済み（`src/components/sections/ContactForm.tsx:231`）。
  フッター・ヘッダーは元から正しく `/privacy`。

### B-2. `href="#"` のダミーリンク（実 URL 設定 or 非表示）
| 箇所 | 対象 | 内容 |
| --- | --- | --- |
| ヘッダー | `src/components/layout/HeaderNav.tsx:468,477` | 会社説明資料 / 異業種M&A… |
| フッター | `src/content/site.ts:320-321`（`footerColumns`） | 会社説明資料 / 異業種M&A…（同2本） |
| 会社トップ | `src/app/company/page.tsx:161,178` | 外部リンク2本 |
| 嵐々亭 | `src/app/business/ranrantei/page.tsx:100,104` | Google マップ / Instagram |
| 具志冷凍食品 | `src/app/business/gushi/page.tsx:100,104,112` | Google マップ / Instagram / 他 |
| いすの木惣菜館 | `src/app/business/isunoki/page.tsx:100,104` | Google マップ / Instagram |
| 海鮮丼 五星 | `src/app/business/food-beverage/page.tsx:101,105` | Google マップ / Instagram |

→ 各店舗・資料の**実 URL を入れる**。URL が用意できないものは**アイコン/リンク自体を非表示**にする
（`#` のまま公開しない）。

### B-3. 「準備中」表示のページ
- `/recruit/part-time` が `PlaceholderContent`（"コンテンツ準備中"）のまま
  （`src/components/sections/StaticPageContent.tsx:491`）。中途採用には専用ページがある。
- → パート採用の内容を入れる、または公開時はヘッダー/フッターの
  「パート・アルバイト採用」リンクを一旦外す。

---

## C. ダミーテキスト・内容の確定 🟡

### C-1. siteConfig のダミー値（`src/content/site.ts`）
- `contactEmail: "info@example.com"`（L55）→ 実アドレスに。**現状コードからは未参照**だが確定推奨。
- `url` のフォールバック値 → A-1 で対応。

### C-2. 会社概要のプレースホルダ
- `src/content/site.ts` の `companyOverview`（L362〜）が「所在地: 沖縄県内」
  「備考: 正式情報は…確定後に更新」等の仮値。
- `src/content/company-overview.ts` も同様にローカル管理。
- → 正式な会社情報（会社名 / 住所 / 設立 / 資本金 / 代表者 / 事業内容）に差し替え。
  フッター住所は実値（浦添市仲西…）が入っているので**整合を確認**。

### C-3. 法務テキストの確認
- プライバシーポリシー（`src/app/privacy/page.tsx`）は汎用文面が入済み。
  会社名・連絡先・利用目的を最終チェック（必要なら法務確認）。
- 特商法表記（`/legal/tokushoho`）の内容確認（有料の物販/サービスがある場合は必須）。

### C-4. 本文の最終コピー（任意の差し替え）
- トップの「10の約束」は `site.ts` の `facts` に4件（最終10件想定）。
- 各事業ページの文言・写真が確定版かを確認。

---

## D. 反映運用（更新の即時反映が要るなら）🟡

- 現状 `open-next.config.ts` の `incrementalCache` が `"dummy"` のため、
  **microCMS で記事を公開しても再デプロイするまでサイトに反映されない**。
- 更新頻度が低ければ**現状のまま（再デプロイで反映）でも可**。
- 即時反映が必要なら [DATA_FRESHNESS.md](DATA_FRESHNESS.md) の方式A（R2 キャッシュ＋
  microCMS Webhook → `/api/revalidate`）を有効化し、`MICROCMS_WEBHOOK_SECRET` を設定。

---

## E. 仕上げ（任意・小規模サイトなら後回し可）🟢

- **favicon / アプリアイコン**: `src/app/` に `favicon.ico` / `icon.png` / `apple-icon.png` が無く、
  タブアイコンが出ない。最低限 favicon を追加推奨。
- **OGP 画像**: `layout.tsx` の metadata に `og:image` / `twitter:image` が未設定。SNS 共有時の
  プレビュー画像が出ない。1枚用意して `app/opengraph-image.png` を置くと自動適用。
- **アクセス解析（GA4 / GTM）**: 未設置。必要なら導入。
- **スパム対策（Cloudflare Turnstile）**: 未実装。公開後にフォームスパムが来たら検討。

---

## 公開前の最終確認（受け入れ）

- [ ] 全ルートが 200 で表示される（`/recruit/part-time` 含む）
- [ ] ヘッダー / フッターの全リンクが正しい遷移先（`#` が残っていない）
- [ ] `/contact` から実送信 → 受信できる（Resend 本番設定）
- [ ] Magazine に実記事が表示される（モック記事ではない）
- [ ] 375px 幅でレイアウト崩れ・横スクロールが無い
- [ ] canonical / OGP / sitemap が本番ドメインを指す
- [ ] `npm run check`（lint + typecheck + build）が通る
- [ ] サーバーシークレットがクライアントに露出していない
