# CMS Schema

## Notion database: Magazine

Recommended properties:

- `Title` title
- `Slug` rich text
- `Status` select: Draft, Review, Published
- `Published At` date
- `Category` select
- `Tags` multi-select
- `Excerpt` rich text
- `Cover Image` files or URL
- `SEO Title` rich text
- `SEO Description` rich text

## Rendering support for phase 1

Support only:

- Paragraph
- Heading
- Bulleted list
- Image

Additional Notion blocks are out of scope until needed.

## Security

- `NOTION_TOKEN` must only be read from server-side code.
- Never pass raw Notion responses directly to client components.
- Normalize Notion data into local `CmsPost` objects.

