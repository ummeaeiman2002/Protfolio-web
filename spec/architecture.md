# Architecture Specification — Umm E Aeiman Portfolio

Derived from `constitution (protfoli).md`. This document describes the target system architecture. Do not claim a component exists until it is implemented and verified.

## Overview

```text
Browser
  └─ frontend/ (Next.js 16 App Router + TypeScript + Tailwind)
        ├─ Server Components (default)
        ├─ Client Components (interactivity only)
        ├─ lib/sanity/  ──►  Sanity Content Lake (content source / backend substitute)
        │                        ├─ project documents (case studies)
        │                        └─ images via Sanity image pipeline
        └─ /studio  ──►  embedded Sanity Studio (authoring, Sanity sign-in)
```

There is no custom API backend. Sanity provides the content and the storage; the contact form is email-only.

## Folders

```text
protfolio_web/
├── constitution (protfoli).md
├── agent.md
├── spec/                  <- this folder (architecture, content checklist, deployment)
├── docs/
│   └── UI design.png      <- approved design reference
└── frontend/
    ├── app/               # routes: / , /work , /work/[slug] , /contact , /studio
    ├── components/
    │   ├── ui/            # Button, Card, Badge, Input, Textarea, Select, FormField, SectionHeading, Container, StatusIndicator
    │   ├── layout/        # Navbar, MobileNav, Footer, PageShell
    │   ├── home/          # hero, expertise-strip, capabilities, selected-work, problem-solver, agent-architecture, services, process, technology-stack, about, currently-building, final-cta
    │   ├── projects/      # project-card, project-grid, case-study-section
    │   └── contact/       # contact-form, contact-methods
    ├── data/              # services.ts, navigation.ts, site.ts, content.ts (shared static copy)
    ├── lib/
    │   ├── sanity/        # client.ts, env.ts, queries.ts, schemas/
    │   ├── constants.ts   # metadata.ts, validation.ts, utils.ts
    ├── public/            # images/, projects/, icons/
    ├── tests/
    └── sanity.config.ts
```

Rules:
- Never create a `repositories/` folder.
- Keep page files focused on composition and route metadata.
- Authored content lives in Sanity; shared static copy lives in `data/`; Sanity access lives in `lib/sanity/`.
- The frontend must render public pages when Sanity is unreachable or unconfigured; data-backed sections fall back to honest empty states.

## Data flow: content

1. Owner signs in to `/studio` and authors a `project` document.
2. The site reads published documents through `lib/sanity/queries.ts` using a tagged GROQ query.
3. Reads are cached (`use cache` + a revalidation window), so pages stay fast and updates appear without a redeploy.
4. Draft/unpublished documents never appear on `/work`, `/work/[slug]`, the home page, or `sitemap.xml`.
5. If Sanity is unconfigured, empty, or failing, the query layer returns an empty collection and the UI shows an honest empty state.

## Data flow: contact form

1. Visitor submits the form on `/contact`.
2. Client-side validation shows inline errors.
3. On valid input the site builds a `mailto:` URL from trimmed, length-limited, `encodeURIComponent`-encoded values and opens the visitor's email client.
4. The site tells the visitor plainly that nothing is sent until they send the email themselves.

There is no success/"message received" state, because the site sends and stores nothing.

## Content model

| Document | Purpose |
|---|---|
| `project` | Case study rendered on `/work` and `/work/[slug]` |

`project` fields: `title`, `slug`, `category`, `status?`, `summary`, `stack[]`, `problem`, `solution`, `contributions[]`, `workflow[]?`, `outcome?`, `lessons[]?`, `architectureImage?`, `screenshots[]?`, `liveUrl?`, `repositoryUrl?`, `featured`, `published`, `order`.

The Sanity schema and the TypeScript `Project` type must stay in sync.

## Rendering strategy

- Server Components by default; Client Components only for the mobile menu and form state.
- Content pages are statically prerendered and revalidate on a fixed window.
- `frontend/app/` also provides `layout.tsx`, `globals.css`, `not-found.tsx`, `error.tsx`, `loading.tsx`, `robots.ts`, `sitemap.ts`.
- `/studio` is excluded from `sitemap.xml` and disallowed in `robots.txt`.

## Security boundary

- Only `NEXT_PUBLIC_*` vars (site URL, Sanity project id/dataset/api version) reach the browser; they are not secrets.
- A Sanity read token is only needed for a private dataset and stays server-side.
- A Sanity write token must never reach the browser; authoring uses the Studio's own authentication.
- Never render user input or content as raw HTML.
