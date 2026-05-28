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
`env.production` block before pointing the production domain at it.

## CI

GitHub Actions runs:

- `npm ci`
- `npm run lint`
- `npm run typecheck`
- `npm run build`

OpenNext + wrangler deploy steps run manually until account ownership is
confirmed.

## Release policy

- Preview deploys (Workers staging) are used for review.
- Production domain connection only after account ownership and DNS
  responsibilities are confirmed.
