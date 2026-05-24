# Component Architecture

## Directories

- `src/app`: Next.js App Router routes and metadata.
- `src/components/layout`: site chrome such as header and footer.
- `src/components/sections`: page sections composed from shared UI primitives.
- `src/components/ui`: reusable primitives driven by design tokens.
- `src/content`: site config, navigation, route registry content, and temporary structured copy.
- `src/lib/cms`: CMS abstraction and mock implementation.

## Layering rules

- Pages own route-level data selection and metadata.
- Sections own display composition and may know GO-TAs content intent.
- UI primitives are content-agnostic and receive labels/children through props.
- CMS adapters normalize external data before components render it.

## Design-system workflow

1. Extract Figma shared token values into `globals.css`.
2. Update or add UI primitives only when repeated structure appears in Figma.
3. Build sections by composing primitives, not by copying Tailwind class strings across pages.
4. Keep placeholder pages on the same component system so final content replacement is low-risk.

## Current implementation

- Global layout uses shared `SiteHeader` and `SiteFooter`.
- Home uses `Hero`, `ServiceGrid`, `SitemapPreview`, `NewsList`, and `ContactCta`.
- Static pages use `StaticPageContent`, which selects specialized sections for company, facts, overview, history, group, and business pages.
