# データ更新の反映（Data Freshness）

## 現状

magazine の一覧/詳細ページは **ビルド時に静的生成 (SSG)** される。
`open-next.config.ts` の `incrementalCache` が `"dummy"` のため、
**microCMS で記事を公開/更新しても、再デプロイするまでサイトに反映されない。**

コード側は再生成に対応済み:

- magazine の fetch は `tags: ["magazine"]` ＋ `revalidate: 3600` を付与済み
  （[src/lib/cms/microcms.ts](../src/lib/cms/microcms.ts) `MAGAZINE_CACHE`）。
- Webhook 受け口 [src/app/api/revalidate/route.ts](../src/app/api/revalidate/route.ts) が
  `revalidateTag("magazine")` ＋ `revalidatePath("/")/("/magazine")/("/news")` を実行。

あとは **キャッシュ層を有効化する1ステップ**で「数分で反映」が動く。

---

## 反映方式は2択

### 方式A — オンデマンド再生成（推奨・即時）

microCMS Webhook → `/api/revalidate` → 該当キャッシュだけ破棄。フルビルド不要。

有効化手順:

1. **Cloudflare R2 バケットを作成**（例: `gotas-corporate-cache`）。
2. `open-next.config.ts` の incrementalCache / tagCache を dummy から差し替え:
   ```ts
   import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";
   import doShardedTagCache from "@opennextjs/cloudflare/overrides/tag-cache/do-sharded-tag-cache";
   // default.override:
   //   incrementalCache: r2IncrementalCache,
   //   tagCache: doShardedTagCache(),
   //   queue: "direct",
   ```
3. `wrangler.jsonc` に R2 バインディング（`NEXT_INC_CACHE_R2_BUCKET`）と
   タグ用 Durable Object を追加（OpenNext ドキュメント参照）。
4. 環境変数 `MICROCMS_WEBHOOK_SECRET` を設定（Worker secret）。
5. microCMS 管理画面 → API設定 → Webhook → 「カスタム通知」:
   - URL: `https://＜本番ドメイン＞/api/revalidate`
   - 署名シークレット: 上の `MICROCMS_WEBHOOK_SECRET` と同じ値
   - 対象: `magazine` / `news-pin` の公開・更新・削除

手動テスト:
```sh
curl -X POST "https://＜ドメイン＞/api/revalidate?secret=＜MICROCMS_WEBHOOK_SECRET＞"
# → {"revalidated":true,...}
```

### 方式B — Webhook → CI 再デプロイ（シンプル・数分）

R2 を使わず、公開時に GitHub Actions のフルビルド&デプロイを叩く。

- microCMS Webhook → GitHub の `repository_dispatch`（要 PAT）→
  `npm run build && npm run cf:deploy`。
- インフラが軽い反面、毎回フルビルド（数分）になる。更新頻度が低いサイト向き。

> 現状 CI のデプロイ手順は「アカウント確定まで手動」（[DEPLOYMENT.md](./DEPLOYMENT.md)）。
> 本番ドメイン/Cloudflare アカウントが確定してから方式A or Bを有効化するのが安全。

---

## まとめ

| 状態 | 反映タイミング |
| --- | --- |
| 今（dummy cache） | 再デプロイ時のみ |
| 方式A 有効化後 | 公開 → Webhook → 数秒〜数十秒 |
| 方式B 有効化後 | 公開 → 再ビルド → 数分 |
