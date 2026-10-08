# Manual Vercel Deployment

This project is intentionally configured for **manual Vercel deployments**.

`vercel.json` disables Git-triggered Vercel deployments:

```json
{
  "git": {
    "deploymentEnabled": false
  }
}
```

GitHub Actions remains responsible only for quality checks. It does not deploy.

## 1. Pre-deployment check

From the repository root:

```bash
npm install
npm run release:check
```

This runs:

- portfolio content validation
- ESLint
- TypeScript typecheck
- production Next.js build

Do not deploy if any of these fail.

## 2. Configure the canonical production URL

The portfolio uses `NEXT_PUBLIC_SITE_URL` for:

- canonical metadata
- Open Graph URLs
- sitemap entries
- structured project URLs

For a first deployment using only the generated `.vercel.app` URL, you can initially deploy without this value, then add the final production URL after Vercel creates the project.

Once the production URL is known, add this environment variable to the Vercel project:

```text
NEXT_PUBLIC_SITE_URL=https://your-production-domain.example
```

Use the origin only:

- valid: `https://example.com`
- invalid: `https://example.com/`
- invalid: `https://example.com/portfolio`
- invalid: `https://example.com?preview=1`

Then redeploy production so metadata, robots, and sitemap use the final URL.

## 3. First manual deployment

Authenticate once:

```bash
npx vercel login
```

From the repository root, create/link the Vercel project:

```bash
npx vercel
```

Review the detected settings. This is a standard Next.js project located at the repository root.

The command creates a preview deployment and stores the local project link under `.vercel/`. That directory must remain uncommitted.

## 4. Manual production deployment

After the release check is green:

```bash
npm run release:check
npx vercel --prod
```

This is the normal production release path for this repository.

## 5. Safer staged production release

For a release you want to verify before assigning the production domain:

```bash
npm run release:check
npx vercel --prod --skip-domain
```

Open and test the returned deployment URL. When satisfied:

```bash
npx vercel promote <deployment-url>
```

This promotes the tested production build without rebuilding it.

## 6. Rollback

If a production release has a problem:

```bash
npx vercel rollback
```

Or target a specific deployment:

```bash
npx vercel rollback <deployment-url-or-id>
```

## 7. Recommended Vercel project settings

After the first deployment:

- Framework Preset: Next.js
- Root Directory: repository root
- Production environment: configure `NEXT_PUBLIC_SITE_URL`
- Git automatic deployments: disabled by `vercel.json`
- Ignored Build Step: leave on Automatic unless there is a separate reason to change it
- Do not add Vercel deployment steps to GitHub Actions for this project

## 8. Release checklist

Before each manual production deployment:

- `main` contains the intended release
- GitHub Quality workflow is green
- `npm run release:check` passes locally
- published portfolio content is verified
- contact URLs are correct
- `NEXT_PUBLIC_SITE_URL` matches the intended production domain
- preview/staged deployment looks correct on desktop and mobile
- only then promote or run `npx vercel --prod`
