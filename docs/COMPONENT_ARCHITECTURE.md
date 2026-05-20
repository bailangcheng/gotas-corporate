# Component Architecture

## Directories

- `src/app`: Next.js App Router routes.
- `src/components/layout`: Header, footer, and site chrome.
- `src/components/sections`: Page sections composed from UI primitives.
- `src/components/ui`: Reusable primitives.
- `src/content`: Site config, navigation, and route registry content.
- `src/lib/cms`: CMS abstraction and mock implementation.
- `src/lib/notion`: Future Notion adapter.
- `src/lib`: Small server-safe helpers.

## Parent/child model

- Pages own route-level data selection.
- Sections own display-level composition.
- UI primitives do not know project content.
- CMS adapters normalize external data before components render it.

