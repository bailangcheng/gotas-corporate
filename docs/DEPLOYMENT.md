# Deployment

## Target

- GitHub repository: `https://github.com/bailangcheng/gotas-corporate`
- Hosting: Cloudflare Workers (via `@opennextjs/cloudflare`).
- Domain/DNS owner: monora or client.

monora operates monora-web on the same stack; reuse the same Cloudflare account
and Resend sending domain where possible.

## Required environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (metadata / og). |
| `MICROCMS_SERVICE_DOMAIN` | microCMS subdomain (e.g. `gotas`). Server-side only. |
| `MICROCMS_API_KEY` | microCMS API key. Server-side only. |
| `RESEND_API_KEY` | Default Resend API key for `/api/inquiry`. |
| `INQUIRY_FROM_EMAIL` | Default `From:` for inquiry mail. |
| `INQUIRY_TO_EMAIL` | Default `To:` for inquiry mail. |

Per-channel overrides (optional, fall back to the defaults above):

- `CONTACT_RESEND_API_KEY` / `CONTACT_INQUIRY_FROM_EMAIL` / `CONTACT_INQUIRY_TO_EMAIL`
- `MEETING_RESEND_API_KEY` / `MEETING_INQUIRY_FROM_EMAIL` / `MEETING_INQUIRY_TO_EMAIL`

When `MICROCMS_*` is not set, the CMS adapter returns `null` and pages render
static fallback content — local dev and previews work without secrets.

## Build & deploy

```sh
npm run build                       # next build → .next/
npx opennextjs-cloudflare build     # OpenNext bundle → .open-next/
npx wrangler deploy                 # ship Worker + assets
```

`wrangler.jsonc` ships with a `gotas-corporate-staging` worker. Add an
`env.production` block (or a custom-domain `routes` entry) before pointing the
production domain at it.

## CI / CD

`.github/workflows/ci.yml` has two jobs:

1. **check** (every PR + push to `main`): `npm ci` → `npm run lint` →
   `npm run typecheck` → `npm run build`.
2. **deploy** (push to `main` only, `environment: production`): `npm run cf:build`
   → `npx wrangler deploy`.

The deploy job needs:

- `CLOUDFLARE_API_TOKEN` — **add to GitHub repo Secrets** (not yet guaranteed set).
- `CLOUDFLARE_ACCOUNT_ID` — already hardcoded in the workflow (`c19933...`, GO-TAs IT account).
- Production runtime env / secrets (`NEXT_PUBLIC_SITE_URL`, `MICROCMS_*`, `RESEND_*`,
  `MICROCMS_WEBHOOK_SECRET`) set on the Worker via `wrangler secret put` / dashboard.

## Release policy

- Pushes to `main` auto-deploy to the Worker once `CLOUDFLARE_API_TOKEN` is set.
- Production domain connection only after account ownership and DNS
  responsibilities are confirmed.

See [PRE_LAUNCH_TODO.md](PRE_LAUNCH_TODO.md) for the full go-live checklist.
