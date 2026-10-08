# RB Portfolio

Portfolio project built with the current Next.js App Router stack.

## Stack

- Next.js 16.4
- React 19.3
- TypeScript 6
- Tailwind CSS 4.3
- shadcn/ui CLI 4.21
- ESLint 10

## Development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## shadcn/ui

The project is initialized with shadcn/ui conventions and aliases.

Add components with:

```bash
npx shadcn@latest add card
```


## Environment

Create a local `.env.local` only when you have a public canonical URL:

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
```

The app deliberately omits canonical URL and sitemap entries until this value is configured.


## Portfolio content

Editable portfolio content lives in `content/portfolio.ts`.

Project entries use a publication status:

- `draft` — stored in content but not linked, generated, or indexed.
- `published` — appears in the Projects section and generates `/projects/[slug]`.

A published project should include a unique slug, title, subtitle, track, tags, and completed context/role/approach/outcome fields.


## Content validation

Run the same publication checks used by CI:

```bash
npm run validate:content
```

Validation rejects duplicate or malformed project slugs, incomplete published case studies, invalid contact links, malformed optional dates, duplicate keywords, broken navigation anchors, and invalid `NEXT_PUBLIC_SITE_URL` values.


## Production hardening

The app sends baseline security headers for all routes, keeps the full portfolio content out of the client-side navigation bundle, defers rendering work for below-the-fold sections where supported, and releases animation `will-change` hints after reveals complete.

A strict Content Security Policy is intentionally not hard-coded yet because Next.js runtime scripts require a nonce/hash strategy; adding a permissive CSP would create the appearance of security without meaningful protection.


## Manual deployment

This repository intentionally disables automatic Vercel deployments from Git pushes. Run:

```bash
npm run release:check
npx vercel --prod
```

For the full first-deploy, staged-release, promotion, environment, and rollback workflow, see [DEPLOYMENT.md](./DEPLOYMENT.md).
