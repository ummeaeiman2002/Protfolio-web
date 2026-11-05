# AGENT.md - Umm E Aeiman Portfolio Website

This file provides guidance to AI coding agents working on this repository. It is based on the project constitution (`E:\Protfolio\protfolio_web\constitution (protfoli).md`) and the portfolio-constitution skill.

## Project Context
- Project: Personal portfolio + freelance lead-gen site for Umm E Aeiman, Agentic AI Engineer.
- Core message: "I build AI agents that solve real problems. You bring the problem; I engineer the system."
- Design: Premium dark technical aesthetic with purple accents.

## Tech Stack (Non-Negotiable)
- **Frontend:** Next.js 16 + App Router + TypeScript (strict) + Tailwind CSS
- **Content / backend substitute:** Sanity (headless CMS). Studio embedded at `/studio`. No custom API backend.
- **Contact form:** email-only `mailto:` — the site stores and sends nothing.
- **Folder:** a single `frontend/` project. Do NOT create `backend/` or `repositories/`.

## Setup
1. Read this file and the constitution before making changes.
2. Inspect the file tree and package configs before structural changes.
3. Run `cd frontend && npm run lint && npm run typecheck && npm run test && npm run build` after frontend changes.
4. Sanity needs `NEXT_PUBLIC_SANITY_PROJECT_ID` + `NEXT_PUBLIC_SANITY_DATASET`; without them pages render honest empty states (build must still pass).

## Build Order (Follow)
1. Scaffold frontend, config, linting, README
2. Global tokens/typography/spacing in `frontend/app/globals.css` + shared UI primitives
3. Global layout, navbar, mobile menu, footer
4. Home page sections in prescribed order
5. Typed project data + reusable ProjectCard
6. `/work` + `/work/[slug]`
7. `/contact` + accessible form states
8. Connect Sanity: schemas, client, typed queries, embedded `/studio`, cached reads
9. Replace static project data with Sanity content; verify empty/error states
10. Metadata/social sharing/sitemap/robots/a11y/perf
11. Run all tests/builds, fix issues
12. Deploy frontend, publish real content in Sanity, review all routes

## Design System
Defined in `frontend/app/globals.css`:
- Background: `#09090B`, Surface: `#111113`, Surface-raised: `#18181B`, Border: `#27272A`
- Text: `#FAFAFA` (primary), `#A1A1AA` (secondary), `#71717A` (muted)
- Purple: `#8B5CF6` (primary), `#6D28D9` (deep), `#A78BFA` (soft)
- States: `#34D399` (success), `#F87171` (danger)
- Max-width: ~1200-1280px; use Tailwind tokens; prefer Geist/Inter.

## Routes & IA
Routes: `/`, `/work`, `/work/[slug]`, `/contact`, `/studio` (authoring, not in nav/sitemap). Nav: Brand (Umm E Aeiman), Work, Services, About, Process, Contact, CTA "Let's Work ↗". Preserve these unless explicitly changed.

## Project Data
Sanity `project` documents are the source of truth. TypeScript `Project` model (slug, title, category, summary, problem, solution, contributions[], stack[], workflow?, architectureImage?, screenshots?, outcome?, lessons?, liveUrl?, repositoryUrl?, featured, published, order?). Queries live in `lib/sanity/queries.ts`, are typed and cached, and return empty collections on failure. Never fabricate clients, testimonials, metrics, outcomes, credentials, or repo links. Omit unverified items or label accurately.

## Development Rules
- One feature at a time; scoped changes.
- Reuse components and design tokens before creating new ones.
- Prefer Server Components; client only for interactivity.
- Strict TypeScript; avoid `any` unless justified boundary.
- No TODOs for required core functionality; don’t claim incomplete as complete.
- No fabricated content/links/credentials. Don’t add deps without purpose/simpler alternative.
- Keep secrets server-side. Use env vars; never expose to browser.
- Update tests for meaningful behavior.
- Run lint/typecheck/tests/build after changes; report exact checks/failures.
- Never remove working features without explicit authorization.
- Don’t use inaccessible hover-only interactions. All controls must work as advertised.
- Maintain accessibility (keyboard, focus, labels, reduced motion) and responsive design.

## Contact / Content Rules
- Contact is email-only: validate + trim client-side, build an encoded `mailto:` URL, and say plainly that nothing is sent until the visitor sends it. Never show a false "message sent" state.
- Sanity reads: tagged GROQ queries, typed results, cached with a revalidation window; `published: false` documents never reach public pages or the sitemap.
- Never expose a Sanity write token to the browser; authoring authenticates through the Studio. A read token for a private dataset stays server-side.
- Missing Sanity configuration or a content outage must render honest empty states, not crash the page.

## DoD
- Matches design/content intent; shared components + tokens
- Responsive (phone/tablet/desktop), no horizontal overflow
- All controls work; loading/success/empty/error states where relevant
- A11y/keyboard + reduced motion ok
- TS/lint/tests/build pass; exact runs reported
- Sanity reads typed/cached/safe; missing content handled honestly
- No secrets/private data/fabricated claims
- Docs/env updated if needed; untested areas reported honestly

## Quick Reference
- Constitution: `E:\Protfolio\protfolio_web\constitution (protfoli).md`
- Design tokens: `frontend/app/globals.css`
- Skill: `.opencode/skills/portfolio-constitution/SKILL.md`