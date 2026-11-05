# Deployment Specification — Umm E Aeiman Portfolio

Derived from `constitution (protfoli).md`. Deploy `frontend/` (which includes the embedded Sanity Studio). There is no backend service. Never commit real secrets.

## Environment files

Commit `.env.example` with names + safe placeholders only. Keep local `.env.local` gitignored.

### `frontend/.env.example`

```dotenv
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

- `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are not secrets; they identify a public dataset.
- Add a server-only `SANITY_API_READ_TOKEN` only if the dataset is private. Never prefix a token with `NEXT_PUBLIC_`.
- Never place a Sanity write token in a frontend variable. Authoring authenticates through Sanity's own sign-in.

Configuration rules:
- Validate Sanity configuration before first use; if it is missing, pages render honest empty states instead of failing.
- Never print secret values in logs.

## Sanity setup (before deploying)

Host: Sanity Content Lake (sanity.io).

1. Create the project and a `production` dataset in the Sanity dashboard.
2. Keep the dataset public, or read it with a server-only token.
3. Publish only verified content. Drafts must never reach production pages or the sitemap.
4. The Studio is served at `/studio` inside the frontend and is not linked from public navigation.

## Frontend (Next.js)

Host: Vercel or another supported Next.js host.

1. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
2. Set the Sanity variables in the hosting dashboard.
3. Configure custom domain + HTTPS.
4. Verify build output and every route path: `/`, `/work`, `/work/[slug]`, `/contact`, `/studio`.
5. Confirm a content edit in Sanity appears on the public pages after the revalidation window.

## Release checklist

- [ ] Production domain and HTTPS work.
- [ ] Sanity content loads on `/` and `/work`; case-study routes resolve.
- [ ] Draft/unpublished projects are absent from `/work` and `sitemap.xml`.
- [ ] `/studio` loads and requires Sanity sign-in.
- [ ] Contact form opens the visitor's email client with correctly encoded values and shows no false success message.
- [ ] No secrets exposed in client bundles or git history.
- [ ] All live demo, GitHub, email, and social links verified.
- [ ] Mobile and desktop layouts reviewed on the deployed site.
- [ ] Missing/empty content renders an honest empty state.
- [ ] robots.txt / sitemap present; `/studio` excluded and drafts excluded.

## Post-deploy verification commands

```bash
cd frontend
npm run lint
npm run typecheck
npm run test
npm run build
```

Report exactly which checks ran and any failures — never claim a check passed unless it actually ran and passed.

## Rollback / failure notes

- A Sanity outage or bad configuration must not prevent static portfolio pages from loading; data-backed sections fall back to honest empty states.
- Never show a success confirmation for an email that the visitor did not send.
