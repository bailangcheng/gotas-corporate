# Decisions

## 2026-05-20: Initial stack

- Use Next.js App Router, TypeScript, Tailwind CSS.
- Initial CMS candidate: Notion.
- Initial hosting candidate: Vercel.

## 2026-05-20: Sitemap-first implementation

- Build all known sitemap routes with dummy content before lower wireframes are final.
- Keep page content centralized in `src/content/site.ts` to make sitemap changes cheap.

## 2026-05-26: Align stack with monora-web

GO-TAs is a kota (monora) tenant. Operational accounts (CMS, hosting, mail) sit
on the same providers monora-web already uses so monora operates both sites
through one set of consoles.

- CMS: **microCMS** (supersedes Notion). `src/lib/cms/` keeps its adapter shape;
  only the implementation swaps. `microcms-js-sdk` runs server-side.
- Hosting: **Cloudflare Workers** via `@opennextjs/cloudflare` (supersedes
  Vercel). ISR/tag cache stay `dummy` for now; revisit R2-backed cache when
  content volume warrants it.
- Mail: **Resend** via `app/api/inquiry/route.ts` (contact / meeting shared
  handler, ported from monora-web).
- Fonts: load Google Fonts via `<link>`. Do **not** use `next/font` — Next 16 +
  Turbopack still breaks on it (see monora-web AGENTS.md).
- Bot mitigation: Cloudflare Turnstile (planned, not yet wired) once the form
  goes live.

Revisit Vercel / R2 / D1 / KV only if ISR, full-text search, or auth-gated
routes become required; do not pre-build for those scenarios.
