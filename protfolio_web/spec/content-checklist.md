# Content Checklist — Umm E Aeiman Portfolio

Derived from `constitution (protfoli).md`. Use before publishing any page or project. If an item cannot be verified, omit it or label it clearly (prototype / in progress) — never fabricate.

## Global truthfulness rules

- [ ] No invented clients, testimonials, metrics, credentials, logos, or repository links.
- [ ] Every claimed agent, integration, deployment, or feature is actually implemented and verified.
- [ ] Every live demo / GitHub / email / social link has been clicked and verified.
- [ ] Development placeholders are marked and removed before launch.
- [ ] No client-confidential info, private source code, credentials, or private data exposed.

## Navigation

- [ ] Brand mark: `Umm E Aeiman`.
- [ ] Items: Work, Services, About, Process, Contact.
- [ ] Primary CTA: `Let's Work ↗`.
- [ ] Section links use valid anchors (e.g. `/#services`) or real routes — no dead links.

## Home page (order must be preserved)

1. [ ] Navbar
2. [ ] Hero
3. [ ] Expertise strip / capability keywords
4. [ ] Capabilities
5. [ ] Selected work
6. [ ] Problem solver: problem → AI system → outcome
7. [ ] Behind the agent: architecture visualization
8. [ ] Services
9. [ ] Development process
10. [ ] Technology stack
11. [ ] About
12. [ ] Currently building / selected GitHub projects (verified only)
13. [ ] Final project CTA
14. [ ] Footer

### Hero

- [ ] Headline: `I BUILD AI AGENTS THAT SOLVE REAL PROBLEMS.`
- [ ] Supporting copy describes fully coded AI agents, automation systems, AI-powered applications.
- [ ] Primary CTA: `View My Work ↗`; Secondary CTA: `Start a Project`.
- [ ] Availability line shown only if the owner is genuinely accepting projects.
- [ ] No robot heads, glowing brains, or excessive neon; any portrait is owner-approved.

## Work page (`/work`)

- [ ] Title + concise intro.
- [ ] Filters only if enough projects to justify them.
- [ ] Each card: category, title, short description, stack, case-study link.
- [ ] Meaningful screenshots or diagrams (with alt text).
- [ ] Empty state when no project matches a filter.
- [ ] No fake projects created to fill space.

## Case study (`/work/[slug]`) — render only sections that exist

- [ ] Title + category, short summary, status (if accurate).
- [ ] Problem / context; goals and constraints.
- [ ] Proposed solution; what was personally engineered.
- [ ] Workflow / agent behavior; architecture diagram (with responsive fallback).
- [ ] Tech stack; challenges and trade-offs.
- [ ] Verified results or learnings (no invented percentages, revenue, time saved).
- [ ] Screenshots / demo video where available.
- [ ] Live demo + repo links only if public and valid.
- [ ] Next/previous project or return-to-work link.
- [ ] CTA to discuss a similar project.

## Contact page (`/contact`)

- [ ] Headline focused on solving a problem.
- [ ] Inquiry form with visible labels, help text, focus ring, keyboard support.
- [ ] Validation errors and an honest "opens your email app" behaviour — never a false "message sent" state.
- [ ] Email link + only verified professional social links.
- [ ] "What happens next" note only if the owner can honor it.

## Project data (Sanity `project` documents)

- [ ] All documents conform to the schema (`title`, `slug`, `category`, optional `status`, `summary`, `stack[]`, `problem`, `solution`, `contributions[]`, optional `workflow[]`/`outcome`/`lessons[]`/`architectureImage`/`screenshots[]`/`liveUrl`/`repositoryUrl`, `featured`, `published`, `order`).
- [ ] The Sanity schema and the TypeScript `Project` type are in sync.
- [ ] Slugs are stable, readable, unique.
- [ ] `published: false` documents never appear in public lists, case-study routes, or the sitemap.
- [ ] Images use Sanity's pipeline with explicit width, height, and descriptive `alt`.
- [ ] Unverified outcomes are omitted, not estimated.

## Case-study writing format

- [ ] Problem — what needed to improve.
- [ ] Constraints — business/technical limits.
- [ ] Approach — why this architecture/workflow.
- [ ] Engineering — what the owner implemented.
- [ ] Reliability — validation, failure handling, security, testing.
- [ ] Outcome — verified impact only, otherwise completed/learned.

## Voice

- [ ] Clear, direct, confident, practical, engineering-focused.
- [ ] Leads with business problems and outcomes, then the engineering.
- [ ] No hype ("magic AI", "revolutionary", unsupported autonomy claims).
- [ ] Buzzwords explained — says what the agent actually does.
- [ ] Core message present: "You bring the problem. I engineer the AI system."

## SEO / a11y content

- [ ] One primary `h1` per page; logical heading order.
- [ ] Page-specific metadata + canonical URLs + Open Graph.
- [ ] Descriptive alt text for meaningful images; empty alt for decorative.
- [ ] Hidden/draft projects excluded from sitemap.
