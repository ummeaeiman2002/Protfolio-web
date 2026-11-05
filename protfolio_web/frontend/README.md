# Portfolio Frontend

The frontend for Umm E Aeiman's AI engineering portfolio: a Next.js 16 App Router site built with TypeScript and Tailwind CSS v4.

This app is intentionally honest: every case study, service and contact detail is either verified or visibly marked as a placeholder. Nothing is claimed that cannot be demonstrated.

## Requirements

- Node.js 20.9 or newer (Node 24 is used for the zero-dependency test runner)
- npm

## Setup

```bash
npm install
```

Copy the example environment file and adjust the values:

```bash
cp .env.example .env.local
```

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute site origin used for metadata, canonical URLs, `robots.txt` and `sitemap.xml`. | `http://localhost:3000` |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project id. When unset, pages render honest empty states and `/studio` reports that it is not configured. | _(unset)_ |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset name. | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Sanity API version used by the read client. | `2025-01-01` |

All of these values are public by definition. Never put secrets in `NEXT_PUBLIC_*` values. If the dataset is private, add a server-only `SANITY_API_READ_TOKEN` (never prefixed with `NEXT_PUBLIC_`).

## Scripts

| Script | Command | Purpose |
| --- | --- | --- |
| `npm run dev` | `next dev` | Start the development server on http://localhost:3000 |
| `npm run build` | `next build` | Create a production build |
| `npm run start` | `next start` | Serve the production build |
| `npm run lint` | `eslint` | Lint the codebase |
| `npm run typecheck` | `next typegen && tsc --noEmit` | Generate route types and type-check |
| `npm run test` | `node --test` | Run unit tests with the built-in Node runner |

## Structure

```text
app/            Routes: /, /work, /work/[slug], /contact, /studio, robots.txt, sitemap.xml
components/     UI primitives (ui/), layout shell (layout/), page sections
data/           Approved fallback copy used when Sanity has no content yet
lib/sanity/     Client, GROQ queries, schemas and typed content accessors
tests/          Node test runner unit tests
```

Published Sanity documents are the source of truth for site settings, home page copy and projects. The files in `data/` are the approved static fallbacks: when Sanity is not configured or a field has not been authored, the site renders that copy instead of fabricating content. The contact form is email-only — it validates locally and opens the visitor's email client via `mailto:`; nothing is sent or stored by the site.

## Content honesty rules

- Published Sanity documents are the source of truth; unset fields fall back to the approved copy in `data/`.
- `data/site.ts` — `AVAILABILITY`, `CONTACT` and social links reflect reality. Unfilled values render as visible placeholders or are omitted entirely.
- Projects marked `placeholder: true` in Sanity are structural outlines. They render a "Placeholder" badge and a notice, and claim no client, metric or outcome.
- Case studies only link out (`liveUrl`, `repositoryUrl`) when a real URL exists.
- `published: false` documents never reach public pages or the sitemap.

Before publishing, work through `../spec/content-checklist.md`.

## Deployment

See `../spec/deployment.md`. The short version: set `NEXT_PUBLIC_SITE_URL` and the Sanity variables in the hosting provider's environment settings, run `npm run build`, and deploy. All public routes are statically prerendered; the embedded Studio is served at `/studio`.
