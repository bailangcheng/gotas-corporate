# Deployment

## Target

- GitHub repository: `https://github.com/bailangcheng/gotas-corporate`
- Hosting candidate: Vercel
- Domain/DNS owner: monora or client

## Required environment variables

- `NEXT_PUBLIC_SITE_URL`
- `NOTION_TOKEN`
- `NOTION_MAGAZINE_DATABASE_ID`
- `CONTACT_TO_EMAIL`
- `RESEND_API_KEY`

## CI

GitHub Actions runs:

- `npm ci`
- `npm run lint`
- `npm run typecheck`
- `npm run build`

## Release policy

- Preview deploys should be used for review.
- Production domain connection should happen only after account ownership and DNS
  responsibilities are confirmed.

