# Handoff — 2026-05-28

Snapshot of the GO-TAs corporate site after Phase 1 + Phase 2 (data layer) of
the microCMS rollout. Updated when the next chunk of design / copy / assets
lands.

## Current state of data sources

Each row says where a given block of content lives **today** and how the wrapper
function falls back when microCMS is unconfigured.

| Page area | Source today | When `MICROCMS_*` is set | Wrapper |
| --- | --- | --- | --- |
| Magazine list / detail | microCMS `magazine` (test data) | microCMS | [src/lib/cms/posts.ts](../src/lib/cms/posts.ts) |
| Header pin "News" strip | microCMS `news-pin` | microCMS | [src/lib/cms/news-pin.ts](../src/lib/cms/news-pin.ts) |
| Home "News" section list | microCMS `news-pin` + `magazine` | microCMS | combined in [NewsList.tsx](../src/components/sections/NewsList.tsx) |
| `/company/facts` cards | microCMS `facts` | microCMS | [src/lib/cms/facts.ts](../src/lib/cms/facts.ts) |
| `/company/overview` table | **Local TS file** | (no microCMS) | [src/content/company-overview.ts](../src/content/company-overview.ts) |
| `/company/gotas-history` & `igarashi-history` body | Hardcoded in `StaticPageContent.tsx` | microCMS `history` (after UI swap) | [src/lib/cms/history.ts](../src/lib/cms/history.ts) (mock today) |
| `/business/[slug]` per-business pages | `PlaceholderContent` (generic) | microCMS `business-detail` (after UI swap) | [src/lib/cms/business-detail.ts](../src/lib/cms/business-detail.ts) (mock today) |
| `/group/companies` & `/group/partners` | Hardcoded `groupPages` in `site.ts` | microCMS `group-companies` (after UI swap) | [src/lib/cms/group-companies.ts](../src/lib/cms/group-companies.ts) (mock today) |
| `/recruit/mid-career` & `/recruit/part-time` | `PlaceholderContent` | microCMS `recruit-job` (after UI swap) | [src/lib/cms/recruit-jobs.ts](../src/lib/cms/recruit-jobs.ts) (mock today) |
| `/privacy-policy`, `/terms` | Routes do not exist yet | microCMS `privacy-policy` / `terms` (after route + UI swap) | [src/lib/cms/legal.ts](../src/lib/cms/legal.ts) (mock today) |
| Home "10の事実" carousel (`PromisesSection`) | Hardcoded `facts` in `site.ts` + 6 extras in component | (no swap yet — see Assumptions) | n/a |
| Header / Footer text / Hero copy | Hardcoded in `siteConfig` / per-component | (no plan to CMS-ify) | n/a |

## Assumptions baked into the current implementation

These are our calls, not the client's instructions. Revisit each when the
design / proposal is finalized.

1. **microCMS as the headless CMS provider** — matches monora-web so monora can
   operate both sites from one console. Confirmed verbally; no formal sign-off.
2. **Cloudflare Workers + OpenNext** — same rationale. Cloudflare account being
   created under `it.5plustaff@gmail.com` (GO-TAs IT 部門). Still awaiting
   invite.
3. **Resend** for the inquiry mail. Same account ownership pattern as above.
4. **Production domain** is owned by another web-production agency. The current
   plan is to have them delegate the NS records to Cloudflare. Not yet
   confirmed.
5. **News pin** is a separate `news-pin` endpoint, not `magazine.isPinned`.
   Chosen for operability (period control). If the editor finds it confusing,
   collapse to `isPinned` and delete the endpoint.
6. **Categories** are managed as a referenced API (`categories`), not as a
   `multipleSelect`. Chosen for editability. Counter-argument: only matters if
   the client renames categories often.
7. **`facts` endpoint instead of just hardcoding 10 promises** — chosen because
   "10 の事実" is a flagship page the client may want to update. If the final
   copy is fixed forever, drop the endpoint and move to a local TS file.
8. **`company-overview` as a local TS file** — explicitly opted out of microCMS
   per Kota's call. Edit `src/content/company-overview.ts` directly.
9. **Recruit jobs default to `published: false`** — defensive default until real
   openings exist.
10. **Phase 2 UI is intentionally not wired** — `history`, `business-detail`,
    `group-companies`, `recruit-job`, `privacy-policy`, `terms` all have
    adapter + mock + wrapper but the components still render hardcoded /
    placeholder content. UI swap happens when design + copy land.

## When design / copy lands — step-by-step

### To wire Phase 2 endpoints into the UI

For each endpoint that's chosen to remain CMS-driven:

1. **In microCMS dashboard**: create the endpoint with the fields documented
   in [docs/CMS_SCHEMA.md](CMS_SCHEMA.md). For repeating fields
   (`business-detail.features` / `business-detail.relatedLinks`), create the
   custom field first.
2. **In the dashboard**: populate it with real content. While `MICROCMS_*` env
   vars are unset locally, the site keeps showing the current mocks.
3. **In the codebase**: replace the hardcoded UI with a wrapper call. Example
   for history:

   ```tsx
   // Before (hardcoded in StaticPageContent.tsx)
   const historyItems = [["1978年", "..."], ...];

   // After
   import { getHistoryItems } from "@/lib/cms/history";
   const items = await getHistoryItems(page.href.includes("igarashi") ? "igarashi" : "gotas");
   ```

4. **Run `npm run check`** to confirm SSG still produces all 32 pages.

The same recipe applies to `business-detail`, `group-companies`, `recruit-job`,
`privacy-policy`, `terms`.

### To remove an item from CMS

If the design review concludes a given block does **not** need CMS (e.g. the
`facts` page turns out to be fixed content), the path is:

1. Move the source of truth into `src/content/<name>.ts` (the same shape that
   the `Cms*` type defines — see `src/content/company-overview.ts` as the
   reference pattern).
2. Delete the `getXxxFromMicroCMS` function in `src/lib/cms/microcms.ts`.
3. Delete the mock file (`mock-<name>.ts`).
4. Simplify the wrapper to `return localData;` (see
   `src/lib/cms/company-overview.ts` for the pattern).
5. Update [docs/CMS_SCHEMA.md](CMS_SCHEMA.md) — move the endpoint into the
   "Local content" section.
6. The microCMS endpoint can stay or be deleted in the dashboard; deleting is
   cleaner.

### To stop using microCMS entirely

(Worst-case rollback path, in case the client rejects the CMS choice.)

1. Set `MICROCMS_SERVICE_DOMAIN` to empty in the production environment.
   All wrappers fall back to mocks. The site keeps running.
2. Either keep the mocks as the source of truth, or migrate each to
   `src/content/<name>.ts`.
3. Delete `src/lib/cms/microcms.ts` and the adapter call sites if a clean cut
   is desired.

## Things that need client input to unblock further work

- **Cloudflare / Resend account invites** (`it.5plustaff@gmail.com` user).
- **Production domain** name + permission to delegate NS to Cloudflare.
- **Final copy** for: history (both tracks), business details (10+ pages),
  group / partner descriptions, recruit content, privacy / terms.
- **Design** for: `/business/[slug]` page layout, `/recruit/*`, history page
  layout, group page layout, privacy / terms page styling.
- **OGP image** and final logo / hero artwork.
- **GA4 / GTM** measurement IDs.
- **Cloudflare Turnstile** site keys if the contact form needs bot mitigation
  pre-launch.

See [docs/OPEN_QUESTIONS.md](OPEN_QUESTIONS.md) for the running list.

## Verification recipe

```sh
npm install
npm run check        # lint + typecheck + build (must pass 32 pages)
npm run dev          # local preview, falls back to mocks if no .env.local
```

With `.env.local`:

```
MICROCMS_SERVICE_DOMAIN=go-tas
MICROCMS_API_KEY=<from microCMS dashboard>
```

Visit:

- `/` — header pin + News section
- `/magazine`, `/magazine/<slug>` — list + detail
- `/company/facts` — CMS-driven
- `/company/overview` — local TS file
- `/contact` — form (will POST to `/api/inquiry`; requires Resend env)

For Resend testing also set `RESEND_API_KEY` / `INQUIRY_FROM_EMAIL` /
`INQUIRY_TO_EMAIL` per `.env.example`.
