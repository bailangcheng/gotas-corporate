# GO-TAs Corporate Project Context

## Purpose

Build the GO-TAs corporate website as a lightweight, maintainable corporate site.
The implementation should move before all lower page Figma designs are final by
creating stable routes, shared components, CMS integration boundaries, and
deployment foundations.

## Current assumptions

- Primary language is Japanese.
- Figma is a visual reference, not a strict pixel-perfect contract at this stage.
- Lower page wireframes are still being collected and refined.
- Magazine/news content is managed through **microCMS**, matching monora-web so
  one editor operates both sites.
- Hosting target is **Cloudflare Workers** via `@opennextjs/cloudflare`,
  matching monora-web. Domain, Cloudflare account, microCMS workspace, Resend
  account, legal text, copy, and final assets are provided by monora/client.

## Implementation stance

- Prefer static/server-rendered pages with minimal client JavaScript.
- Keep CMS tokens server-side only.
- Use dummy content for routes whose wireframes are not fixed.
- Avoid custom admin, custom database, and long-term maintenance scope unless
  separately agreed.

