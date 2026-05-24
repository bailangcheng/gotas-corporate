# Design System

## Source of truth

- Primary visual reference: Figma `Gotas Corporate`, especially the shared/common area referred to as `共有用`.
- Figma MCP hit the Starter plan limit during audit, so the first token pass uses the visible WF structure and existing repo assumptions. Re-audit `共有用` when MCP access is available.
- Figma is treated as a component and rhythm reference, not a strict pixel-perfect contract until lower pages are fixed.

## Token mapping

Tokens live in `src/app/globals.css` as CSS variables and are exposed to Tailwind v4 through `@theme inline`.

- Color: `--color-canvas`, `--color-ink`, `--color-ink-soft`, `--color-line`, `--color-surface`, `--color-brand`, `--color-accent`.
- Typography: `--font-size-xs` through `--font-size-5xl`; do not scale type with viewport width.
- Layout: `--space-page-x`, `--space-section-y`, `--layout-container`, `--layout-wide`.
- Shape/elevation: `--radius-xs`, `--radius-sm`, `--radius-md`, `--shadow-soft`, `--shadow-card`.

## Component policy

- UI primitives live in `src/components/ui` and must not contain GO-TAs-specific content.
- Sections live in `src/components/sections` and compose UI primitives.
- Pages select content and compose sections only.
- Avoid raw hex colors, arbitrary shadows, and one-off spacing in page files. Add or adjust a token first.

## Implemented primitives

- `Container`
- `ButtonLink`
- `SectionHeading`
- `Badge`
- `Card`
- `ImageFrame`
- `TextLink`

## Current deviations

- Logo and imagery are placeholders until final Figma assets are exported.
- Lower-page body content is structured but partially dummy until client copy and materials are final.
- Mobile navigation uses native `details` for the first implementation; replace with a richer client menu only if required.
