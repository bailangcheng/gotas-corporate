# GO-TAs Corporate

Initial scaffold for the GO-TAs corporate website.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19
- TypeScript, Tailwind CSS v4
- microCMS (`magazine` endpoint) with mock fallback when env unset
- Resend for `/api/inquiry` (contact / meeting shared route)
- Cloudflare Workers via `@opennextjs/cloudflare`
- GitHub Actions CI (lint / typecheck / build)

Stack matches monora-web so monora operates both sites from the same consoles.

## Scripts

```bash
npm run dev          # next dev
npm run lint
npm run typecheck
npm run build        # next build
npm run check        # lint + typecheck + build
npm run cf:build     # OpenNext bundle for Cloudflare
npm run cf:preview   # wrangler dev against the OpenNext bundle
npm run cf:deploy    # build + wrangler deploy
```

## Project docs

- `docs/PROJECT_CONTEXT.md`
- `docs/SCOPE.md`
- `docs/SITEMAP.md`
- `docs/FUNCTIONAL_REQUIREMENTS.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/CMS_SCHEMA.md`
- `docs/COMPONENT_ARCHITECTURE.md`
- `docs/DEPLOYMENT.md`
- `docs/QA_CHECKLIST.md`
- `docs/OPEN_QUESTIONS.md`
- `docs/DECISIONS.md`

## Current status

Lower page Figma/wireframes are still pending, so this repository starts with
sitemap-based dummy pages, common components, and CMS boundaries.

