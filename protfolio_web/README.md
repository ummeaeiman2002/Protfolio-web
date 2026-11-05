# Protfolio Web

Personal portfolio and freelance lead-generation site for Umm E Aeiman, Agentic AI Engineer.

- **Frontend:** Next.js 16 (App Router), TypeScript (strict), Tailwind CSS v4
- **Content:** Sanity headless CMS, with the Studio embedded at `/studio`
- **Contact:** email-only `mailto:` flow — the site stores and sends nothing

## Project structure

```text
frontend/    Next.js application (deploy this directory)
docs/        Design references
spec/        Architecture, deployment and content checklists
```

## Local development

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` and
`NEXT_PUBLIC_SANITY_API_VERSION` in `frontend/.env.local`. Never commit `.env.local` or any secret.

## Checks

```bash
cd frontend
npm run lint
npm run typecheck
npm run test
npm run build
```

## Deployment

Deploy the `frontend/` directory to Vercel (or another Next.js host) and set the environment
variables in the host dashboard. Before launch, replace the placeholder contact email and publish
verified content in Sanity. See `spec/deployment.md` and `spec/content-checklist.md`.
