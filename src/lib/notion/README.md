# Notion adapter

This directory is reserved for the production Notion API adapter.

Initial implementation intentionally uses `src/lib/cms/mock-posts.ts` until the
client provides:

- Notion workspace access
- Integration secret
- Magazine/news database ID
- Agreed database schema
- Preview/publication workflow

The Notion token must stay server-side only and must never be exposed to client
components.

