# CMS Schema

CMS provider: **microCMS** (server-side only). Workspace: `go-tas`.
Adapter: [src/lib/cms/microcms.ts](../src/lib/cms/microcms.ts). Wrappers per
endpoint live under `src/lib/cms/`.

When `MICROCMS_SERVICE_DOMAIN` or `MICROCMS_API_KEY` is unset, every adapter
returns `null` and wrappers fall back to mocks in `src/lib/cms/mock-*.ts`. Local
dev and preview builds run without secrets.

## Phase split

- **Phase 1 (implemented + wired)**: `categories`, `magazine`, `news-pin`, `facts`
- **Phase 2 (data layer implemented, not wired to UI)**: `history`, `business-detail`, `group-companies`, `recruit-job`, `privacy-policy`, `terms` — adapters, mocks, and wrappers exist. UI swaps land when design / copy from the client arrive.
- **Local-only (intentionally outside microCMS)**: `company-overview` — see [Local content](#local-content)

## Phase 1 endpoints

### `categories` (list, referenced)

Used as the `category` reference target on `magazine`.

| Field | Type | Notes |
| --- | --- | --- |
| `name` | text | required |
| `slug` | text | required, unique |
| `description` | textArea | optional |

### `magazine` (list)

| Field | Type | Notes |
| --- | --- | --- |
| `title` | text | required |
| `slug` | text | required, unique; route segment |
| `category` | reference(`categories`) | optional. Adapter also accepts plain string for back-compat. |
| `tags` | multipleSelect | predefined: e.g. `Corporate` / `Business` / `Project` / `Press` |
| `excerpt` | textArea | optional, used on list cards |
| `coverImage` | image | optional |
| `body` | richEditor | required, HTML rendered server-side |
| `seoTitle` | text | optional |
| `seoDescription` | textArea | optional |
| `isPinned` | boolean | optional. Reserved as a fallback to `news-pin` (TBD with monora) |

### `news-pin` (list, intended ≤ 2 active rows)

Drives the header "News" strip and the top row of `NewsList`. Wrapper filters
out inactive / out-of-window items.

| Field | Type | Notes |
| --- | --- | --- |
| `label` | text | required |
| `linkUrl` | text | required, internal path or external URL |
| `displayFrom` | iso8601 | optional |
| `displayTo` | iso8601 | optional |
| `active` | boolean | required |

### `facts` (list, up to 10)

Drives `/company/facts`. Currently 4 items in mock; expand to 10 once copy lands.

| Field | Type | Notes |
| --- | --- | --- |
| `number` | text | required, e.g. `01`〜`10` |
| `title` | text | required |
| `body` | textArea | required |
| `order` | number | optional, lower first |

## Local content

### `company-overview` (local TypeScript file)

Source of truth: [src/content/company-overview.ts](../src/content/company-overview.ts).
Edit that file when the official company information is finalized. The data
updates rarely and is simpler to keep alongside the code than to ship a CMS
endpoint for it. Shape matches `CmsCompanyOverview` so it can be migrated to
microCMS later without touching consumers.

## Phase 2 endpoints (data layer ready, awaiting client content)

The adapter, mocks, and wrapper functions are already shipped. Each wrapper
falls back to mocks until the corresponding microCMS endpoint is created and
populated. UI consumers are still placeholders today and will be swapped over
when copy + design land.

### `history` (list)

Drives `/company/gotas-history` and `/company/igarashi-history` via `track`.

| Field | Type | Notes |
| --- | --- | --- |
| `track` | select(`gotas` / `igarashi`) | required |
| `year` | text | required (e.g. `1978年`) |
| `title` | text | required |
| `body` | textArea | optional |
| `photo` | image | optional |
| `order` | number | optional, lower first |

Wrapper: `getHistoryItems(track?)` in [src/lib/cms/history.ts](../src/lib/cms/history.ts).

### `business-detail` (list)

Drives `/business/[slug]` (sub-pages such as `/business/digital-signage`).

| Field | Type | Notes |
| --- | --- | --- |
| `slug` | text | required, unique (matches the route) |
| `title` | text | required |
| `eyebrow` | text | optional |
| `lead` | textArea | optional |
| `body` | richEditor | optional |
| `heroImage` | image | optional |
| `gallery` | 複数画像 | optional |
| `features` | 繰り返しフィールド (`title: text`, `description: textArea`) | optional |
| `relatedLinks` | 繰り返しフィールド (`label: text`, `url: text`) | optional |

Wrappers: `getBusinessDetails()` / `getBusinessDetailBySlug(slug)` in [src/lib/cms/business-detail.ts](../src/lib/cms/business-detail.ts).

### `group-companies` (list)

Drives `/group/companies` and `/group/partners` via `type`.

| Field | Type | Notes |
| --- | --- | --- |
| `name` | text | required |
| `type` | select(`group` / `partner`) | required |
| `logo` | image | optional |
| `summary` | textArea | optional |
| `url` | text | optional |
| `order` | number | optional |

Wrapper: `getGroupCompanies(type?)` in [src/lib/cms/group-companies.ts](../src/lib/cms/group-companies.ts).

### `recruit-job` (list)

Drives `/recruit/mid-career` and `/recruit/part-time` via `employmentType`.

| Field | Type | Notes |
| --- | --- | --- |
| `title` | text | required |
| `employmentType` | select(`mid-career` / `part-time`) | required |
| `location` | text | optional |
| `description` | richEditor | optional |
| `requirements` | textArea | optional |
| `salary` | text | optional |
| `published` | boolean | default `false` |

Wrapper: `getRecruitJobs({ employmentType?, publishedOnly? })` in [src/lib/cms/recruit-jobs.ts](../src/lib/cms/recruit-jobs.ts). `publishedOnly` defaults to true so unpublished drafts never reach the site.

### `privacy-policy` / `terms` (object each)

Drives `/privacy-policy` and `/terms` (routes not yet wired).

| Field | Type | Notes |
| --- | --- | --- |
| `title` | text | optional (falls back to a Japanese default) |
| `body` | richEditor | required |
| `updatedAt` | date | optional |

Wrappers: `getPrivacyPolicy()` / `getTermsOfService()` in [src/lib/cms/legal.ts](../src/lib/cms/legal.ts).

### microCMS dashboard creation order (when content arrives)

Build the endpoints in this order to satisfy dependencies (custom fields must
exist before they can be referenced by a repeating field):

1. **カスタムフィールド** — `BusinessFeature` (`title: text`, `description: textArea`), `BusinessRelatedLink` (`label: text`, `url: text`)
2. `history`
3. `business-detail` (uses the two custom fields above for `features` / `relatedLinks`)
4. `group-companies`
5. `recruit-job`
6. `privacy-policy` (object)
7. `terms` (object)

## Rendering support (phase 1)

Body content from `richEditor` is rendered as HTML (`bodyHtml` on `CmsPost`).
Phase 1 styling supports paragraphs, headings, bulleted lists, and images.
Additional block types are out of scope until a content brief requires them.

## Security

- `MICROCMS_API_KEY` is server-side only. Do not expose to client components.
- Do not pass raw microCMS responses to client components; always normalize via
  the adapter.
- `next.config.ts` already allows `images.microcms-assets.io` in
  `images.remotePatterns`.

## Open questions

1. **Pinned news mechanism** — `news-pin` endpoint vs `magazine.isPinned`. Default plan keeps the dedicated endpoint.
2. **Category master list** — initial values (`お知らせ` / `制作メモ` / `事業` / `プレス`?) need confirmation from monora / GO-TAs.
3. **`facts` final count** — mock has 4 entries; final copy expected to be 10.
4. **Recruit visibility** — Phase 2 ships disabled-by-default (`published: false`) until openings are real.
5. **Legal text source** — `privacy-policy` and `terms` body drafts are owed by the client.
