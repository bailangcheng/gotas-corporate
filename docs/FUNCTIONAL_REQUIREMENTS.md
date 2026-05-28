# Functional Requirements

## Website

- Users can browse company, business, group, magazine, recruit, more, and contact pages.
- Unfinalized lower pages display stable placeholder sections without blocking route implementation.
- Header and footer provide access to major sitemap categories.
- Pages expose title and description metadata.

## Magazine CMS

- Article list and article detail pages exist.
- Production CMS is **microCMS** (`magazine` endpoint).
- When microCMS env vars are unset, the adapter falls back to mocked posts.
- microCMS API key is server-side only; never exposed to client components.

## Contact

- The contact page UI is still a placeholder; copy and design land later.
- Submission target is the `/api/inquiry` route, which sends mail via Resend.
- The route supports two channels (`type: "contact" | "meeting"`) with optional
  per-channel `From:` / `To:` overrides.
- Persisting inquiry payloads to storage is out of scope and requires a separate
  data-handling agreement.

