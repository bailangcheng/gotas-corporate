# Decisions

## 2026-05-20: Initial stack

- Use Next.js App Router, TypeScript, Tailwind CSS, and Vercel-oriented deployment.
- Use Notion as the first CMS candidate for Magazine/news.
- Do not introduce Firebase or Supabase for the initial corporate site unless the
  content model grows beyond Notion's practical range.

## 2026-05-20: Sitemap-first implementation

- Build all known sitemap routes with dummy content before lower wireframes are final.
- Keep page content centralized in `src/content/site.ts` to make sitemap changes cheap.

