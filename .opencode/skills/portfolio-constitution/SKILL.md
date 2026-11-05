---
name: portfolio-constitution
description: Use when building, editing, refactoring, or reviewing the Umm E Aeiman portfolio website. Enforces Next.js 16 App Router + TypeScript + Tailwind + Sanity (content/backend substitute) + email-only contact rules from constitution. Covers structure, design tokens, routes, content model, Sanity Studio, security, accessibility, quality gates, and build order.
---

# Portfolio Constitution Skill

You are working on the **Umm E Aeiman Portfolio Website**. You MUST follow the constitution located at `E:\Protfolio\protfolio_web\constitution (protfoli).md`. If anything is ambiguous, choose the smallest maintainable interpretation consistent with it.

## 0. Non-Negotiables
- Use **Next.js 16 with App Router + TypeScript** for the frontend.
- Use **Tailwind CSS**; keep global design tokens and base styles in `frontend/app/globals.css`.
- Use **Sanity (headless CMS)** as the content source and the backend substitute. Studio is embedded at `/studio`.
- **Do not build a custom API backend.** No FastAPI, no Neon Postgres, no custom endpoints.
- Contact is **email-only** (`mailto:`) — the site stores and sends nothing; never show a false "message sent" state.
- A single `frontend/` top-level project. **Do not create `backend/` or a `repositories/` folder.**
- Never claim unimplemented features, clients, testimonials, metrics, credentials, repo links, or outcomes.
- Every button/link/form/filter/menu/interactive control must work as advertised.
- Keep secrets server-side; never expose dataset tokens or write tokens to the browser.
- Prefer Server Components; only use client components for true interactivity.
- Reuse existing components/tokens. Follow conventions and security best practices.

## 1. Structure & Organization
Structure:
- `frontend/` (`app/` incl. `studio/`, `components/ui`, `components/layout`, `components/home`, `components/projects`, `components/contact`, `data/`, `lib/sanity/`, `public/`, `tests/`, `sanity.config.ts`)
- `spec/` (`architecture.md`, `content-checklist.md`, `deployment.md`)
- `docs/` (includes the approved `UI design.png`)
- Root: `constitution (protfoli).md`, `agent.md`

Conventions:
- Keep page files composition-focused. Group components by purpose. Don’t put everything in one file.
- Authored content in Sanity; shared static copy in `data/`; Sanity access in `lib/sanity/`.
- No `repositories/` directory. No empty placeholder folders.
- Frontend must render public pages when Sanity is unavailable or unconfigured: fall back to honest empty states.

## 2. Design System (Strict)
Define in `frontend/app/globals.css`:
| Token | Value | Usage |
|---|---|---|
| `--background` | `#09090B` | Main background |
| `--surface` | `#111113` | Cards/panels |
| `--surface-raised` | `#18181B` | Hovered/elevated |
| `--border` | `#27272A` | Borders/dividers |
| `--text-primary` | `#FAFAFA` | Main text |
| `--text-secondary` | `#A1A1AA` | Supporting |
| `--text-muted` | `#71717A` | Low-emphasis |
| `--purple-primary` | `#8B5CF6` | Primary accent |
| `--purple-deep` | `#6D28D9` | Dark accent |
| `--purple-soft` | `#A78BFA` | Highlight |
| `--success` | `#34D399` | Success |
| `--danger` | `#F87171` | Errors/destructive |

Use purple for primary CTAs, keywords, focus, highlights. Maintain contrast. Type: Geist/Inter. Hero: compact responsive with purple-highlighted words; copy readable (don’t shrink to fit). Max-width ~1200-1280px. Reuse tokens; don’t introduce new palette without documented reason.

## 3. Routes & IA
Routes: `/`, `/work`, `/work/[slug]`, `/contact`, and `/studio` (Sanity Studio; excluded from nav, sitemap, and indexing). Global nav includes: Brand (Umm E Aeiman), Work, Services, About, Process, Contact, primary CTA `Let’s Work ↗`. Home sections in prescribed order (navbar through footer, including expertise, capabilities, selected work, problem-solver, agent architecture, services, process, tech stack, about, currently building, final CTA). Project case-study must cover relevant fields (problem/context, goals/constraints, solution, what was personally engineered, workflow/agent behavior, architecture diagram, tech stack, challenges/trade-offs, verified results/lessons, screenshots/demo, live/source only if valid, prev/next, CTA). Don’t render empty sections; don’t disclose confidential/private info. The approved visual design is `docs/UI design.png`; match its copy and structure.

## 4. Content Model (Sanity)
`project` documents are the source of truth. Fields: `title`, `slug`, `category`, `status?`, `summary`, `stack[]`, `problem`, `solution`, `contributions[]`, `workflow[]?`, `outcome?`, `lessons[]?`, `architectureImage?`, `screenshots[]?`, `liveUrl?`, `repositoryUrl?`, `featured`, `published`, `order`.

The Sanity schema and the TypeScript type must stay in sync:
```ts
export type Project = {
  slug: string;
  title: string;
  category: string;
  status?: string;
  summary: string;
  problem: string;
  solution: string;
  contributions: string[];
  stack: string[];
  workflow?: string[];
  architectureImage?: string;
  screenshots?: string[];
  outcome?: string;
  lessons?: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
  published: boolean;
};
```
Query through `lib/sanity/queries.ts` with typed projections and cached reads. `published: false` documents must never reach public pages or the sitemap. Never fabricate outcomes/metrics/testimonials. If not available, omit or label accurately.

## 5. Contact (email-only)
There is no backend. On valid submit the site builds an encoded `mailto:` URL (trim + length limits + `encodeURIComponent`) and opens the visitor's email client. Say plainly that nothing is sent until they send it. Never render a "message sent"/"saved" confirmation, since the site sends and stores nothing. Keep the contact address configurable; until a real address is set, show a visible placeholder notice and don't imply delivery works. Do not collect sensitive data or add trackers.

## 6. Responsive, Motion, A11y
Mobile-first. Handle small phones → large phones → tablets → laptops → wide desktop. Don’t rely on hover for critical info; tap targets ~44x44px where practical. Respect `prefers-reduced-motion`. Keep animations short; no scroll hijacking. Avoid continuous/forced sequences. WCAG 2.2 AA where feasible: keyboard nav, visible focus (purple), semantic landmarks/headings, persistent labels (not placeholders), field-specific errors, don’t rely on color alone, provide text alternatives for complex diagrams/mobile simplified view, proper mobile menu state. Ensure no hover-only inaccessible interactions.

## 7. Quality Gates & DoD
Check before marking complete:
- [ ] Matches design/content intent; uses shared components + established tokens
- [ ] Responsive across phone/tablet/desktop; no horizontal overflow
- [ ] All controls work (buttons/links/forms/filters/menus)
- [ ] Loading/success/empty/error states where relevant
- [ ] A11y/keyboard behavior checked; reduced motion respected
- [ ] TypeScript strict, lint, tests, production build pass (run actual commands; report exact runs/failures)
- [ ] Sanity reads typed/cached/safe; missing content renders an honest empty state
- [ ] No secrets/private data/fabricated claims
- [ ] Docs/env examples updated if needed; untested areas reported honestly

Suggested: `cd frontend && npm run lint && npm run typecheck && npm run test && npm run build`.

## 8. Build Order (Follow Stepwise)
1. Scaffold frontend, config, linting, README
2. Global tokens/typography/spacing in `globals.css` + shared UI primitives
3. Global layout, navbar, mobile menu, footer
4. Home page sections in prescribed order
5. Typed project data + reusable `ProjectCard`
6. `/work` + `/work/[slug]`
7. `/contact` + accessible form states
8. Connect Sanity: schemas, client, typed queries, embedded `/studio`, cached reads
9. Replace static project data with Sanity content; verify empty/error states
10. Metadata/social sharing/sitemap/robots/a11y/perf
11. Run all tests/builds, fix issues
12. Deploy frontend, publish real content in Sanity, review all routes

## 9. Agent Rules
When implementing: read this skill + constitution first. Inspect existing tree/config before structural changes. Don’t replace design direction with generic template. One coherent feature at a time; scoped changes. Reuse components/tokens. Strict TS; avoid `any` unless justified boundary. Don’t leave TODOs for required core functionality; don’t claim incomplete as complete. Don’t fabricate content/links/credentials. Don’t add deps without purpose/simpler alternative. Don’t add backend/database complexity beyond Sanity. Keep secrets server-side. Update tests for meaningful behavior. Run lint/typecheck/tests/build after changes; report exact checks/failures. If ambiguous, use smallest maintainable consistent interpretation. Never remove working features without explicit authorization. Preserve the public routes + `[slug]` unless the owner changes IA. Keep copy/visuals aligned to "I build AI agents that solve real problems. You bring the problem; I engineer the system."

## References
- Constitution: `E:\Protfolio\protfolio_web\constitution (protfoli).md`
- Approved visual design: `E:\Protfolio\protfolio_web\docs\UI design.png`
- Next.js 16 App Router, Tailwind CSS, Sanity (Studio + Content Lake)
- Design tokens: `frontend/app/globals.css`