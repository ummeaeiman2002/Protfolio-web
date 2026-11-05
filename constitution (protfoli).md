# Constitution — Umm E Aeiman Portfolio Website

**Project:** Personal portfolio and freelance lead-generation website  
**Owner / Brand:** Umm E Aeiman  
**Professional positioning:** Agentic AI Engineer · Freelance Problem Solver  
**Primary message:** “I build AI agents that solve real problems.”  
**Design direction:** Premium dark technical aesthetic with purple accents  
**Status:** Authoritative project rules for all human developers and AI coding agents

---

## 1. Mission and Product Goals

Build a polished, responsive, accessible portfolio that presents Umm E Aeiman as an Agentic AI Engineer who designs and fully codes AI agents, intelligent automation systems, and complete AI-powered applications. The website must demonstrate engineering capability through real projects, architecture explanations, and clear problem-to-solution storytelling—not generic AI claims or a list of tools alone.

The website must help a potential client quickly answer:

1. Who is Umm E Aeiman?
2. What kinds of AI systems can she build?
3. Has she built relevant projects?
4. How does she approach engineering and delivery?
5. How can a client discuss a project or hire her?

### Success criteria

- The main value proposition is understandable within 10–15 seconds.
- Featured projects are prominent and explain the problem, approach, contribution, stack, and verified outcome.
- Contact actions are clear on desktop and mobile.
- The site is fast, responsive, accessible, SEO-friendly, and easy to maintain.
- The visual language consistently follows the purple-on-dark design system.
- No fabricated clients, testimonials, metrics, project outcomes, credentials, or repository links are shown.

---

## 2. Non-Negotiable Rules

1. **Use Next.js 16 with the App Router and TypeScript** for the frontend.
2. **Use Tailwind CSS** for layout and component styling, with global design tokens and base styles in `frontend/app/globals.css`.
3. **Build reusable, typed components.** Do not duplicate the same UI pattern across pages.
4. **Use Sanity (headless CMS) as the content source and the application backend substitute.** Project/case-study content is authored in Sanity Studio and read by the site through the Sanity Content Lake. There is no separate Python backend.
5. **Do not build a custom API backend** unless a future requirement genuinely cannot be met by Sanity plus Next.js server-side routes. If such a requirement appears, document the reason before adding it.
6. Use JavaScript/TypeScript functions and small, single-purpose modules. Prefer clear functions over unnecessary abstractions.
7. Keep all application code inside the single top-level `frontend/` project. Sanity schemas live in `frontend/sanity/` and the embedded Studio serves at `/studio`.
8. **Do not create a `repositories/` folder.**
9. Do not claim that an agent, project, integration, deployment, or feature exists unless it has actually been implemented and verified.
10. Do not invent metrics, testimonials, client logos, or outcomes. Use clearly marked placeholders in development and remove them before launch.
11. Every button, link, form, filter, menu, and interactive control must work as advertised. No decorative controls that appear functional but do nothing.
12. Preserve the existing design system when adding features. Do not introduce a new palette or inconsistent component style without a documented reason.
13. Do not expose API keys, dataset tokens, SMTP credentials, or private environment variables to the browser. Sanity read credentials may be public only when the dataset itself is public.
14. Prefer server components by default; add client components only where interactivity requires them.
15. Avoid unnecessary dependencies, over-engineering, and animation that harms readability or performance.

---

## 3. Audience and Brand Voice

### Primary audience

- Founders and small businesses with workflows worth automating
- Teams seeking custom AI agents or multi-agent systems
- Clients who need AI-powered SaaS MVPs or full-stack AI applications
- Businesses that need AI integrated with existing APIs, databases, or internal processes
- Freelance clients evaluating technical capability and communication

### Brand voice

- Clear, direct, confident, practical, and engineering-focused
- Explain technical concepts in client-friendly language
- Lead with business problems and system outcomes, then show the engineering
- Avoid hype such as “magic AI,” “revolutionary,” or unsupported claims of full autonomy
- Avoid overusing buzzwords; explain what an agent actually does

### Core message

> You bring the problem. I engineer the AI system.

Supporting copy may communicate that the owner builds fully coded AI agents, automation workflows, and complete AI applications. Keep claims aligned with real capabilities and portfolio evidence.

---

## 4. Information Architecture and Routes

The site has **three main public pages** plus dynamic project case-study routes.

### Required routes

- `/` — Home
- `/work` — Projects listing
- `/contact` — Contact / Hire Me
- `/work/[slug]` — Dynamic project case study
- `/studio` — Embedded Sanity Studio for content authoring (not part of public navigation, excluded from the sitemap and `robots.txt`)

### Global navigation

- Brand mark / `Umm E Aeiman`
- Work
- Services
- About
- Process
- Contact
- Primary CTA: `Let's Work ↗`

Navigation items that refer to sections on the home page should use valid anchor links (for example, `/#services`) or route to the appropriate page. Do not leave dead navigation links.

### Home page section order

1. Navbar
2. Hero
3. Expertise strip / capabilities keywords
4. Capabilities
5. Selected work
6. Problem solver: problem → AI system → outcome
7. Behind the agent: architecture visualization
8. Services
9. Development process
10. Technology stack
11. About
12. Currently building / selected GitHub projects (only verified items)
13. Final project CTA
14. Footer

The layout may adapt for viewport size, but the section hierarchy and conversion path must remain clear.

### Work page

- Page title and concise introduction
- Project filters only if there are enough projects for filtering to be useful
- Responsive project grid/list with meaningful screenshots or diagrams
- Project category, title, short description, relevant stack, and case-study link
- Useful empty state if no projects match a selected filter
- Do not create fake projects to fill empty space

### Dynamic case-study page

Each project detail page should support these fields where relevant:

1. Project title and category
2. Short summary
3. Project status (only if useful and accurate)
4. Problem / context
5. Goals and constraints
6. Proposed solution
7. What was personally engineered
8. Workflow or agent behavior
9. Architecture diagram
10. Tech stack
11. Challenges and trade-offs
12. Verified results or learnings
13. Screenshots / demo video where available
14. Live demo and source repository links, only if public and valid
15. Next/previous project or return-to-work link
16. CTA to discuss a similar project

Do not render empty sections. Do not disclose client-confidential information, private source code, credentials, or private data.

### Contact page

- Short headline focused on solving a problem
- Project inquiry form
- Email link and verified professional social links
- What happens after submission / expected response note, only if the owner can honor it
- Clear validation, loading, success, and failure states

---

## 5. Visual Design System

### Overall style

Premium dark editorial + technical product design. The interface should feel like a serious engineer's portfolio, not a generic AI landing page.

### Color tokens

Define tokens in `frontend/app/globals.css` and consume them consistently through Tailwind utilities or CSS variables.

| Token | Value | Usage |
|---|---|---|
| `--background` | `#09090B` | Main page background |
| `--surface` | `#111113` | Cards and panels |
| `--surface-raised` | `#18181B` | Hovered or elevated surfaces |
| `--border` | `#27272A` | Borders and dividers |
| `--text-primary` | `#FAFAFA` | Main text |
| `--text-secondary` | `#A1A1AA` | Supporting copy |
| `--text-muted` | `#71717A` | Low-emphasis labels |
| `--purple-primary` | `#8B5CF6` | Primary brand accent |
| `--purple-deep` | `#6D28D9` | Dark purple accent |
| `--purple-soft` | `#A78BFA` | Highlight text and secondary accents |
| `--success` | `#34D399` | Availability / successful state |
| `--danger` | `#F87171` | Errors and destructive states |

Use purple for primary CTAs, key words, focus states, small icons, active indicators, diagram highlights, and subtle glows. Purple must not overwhelm the whole page. Maintain contrast for all text and controls.

### Typography

- Use a modern sans-serif such as Geist or Inter for UI/body text.
- Use a strong display weight for headings; avoid excessive font mixing.
- Hero heading should be bold, compact, and responsive, with selected words highlighted in purple.
- Body text should remain comfortably readable and not be reduced merely to fit a screenshot-like design.
- Use uppercase micro-labels sparingly for section numbering and categories.
- Use fluid typography where useful, for example `clamp()` values in CSS.

### Layout and spacing

- Desktop content max-width: approximately `1200–1280px`.
- Use a consistent spacing scale based on Tailwind spacing tokens.
- Maintain generous separation between major sections.
- Use a subtle grid/noise texture only where it improves depth; keep it low contrast.
- Cards should have restrained borders, medium corner radii, and clear internal spacing.
- Use consistent alignment and grid gaps across the site.

### Hero visual

- Headline: `I BUILD AI AGENTS THAT SOLVE REAL PROBLEMS.`
- Supporting copy: describe fully coded AI agents, automation systems, and AI-powered applications.
- Primary CTA: `View My Work ↗`
- Secondary CTA: `Start a Project`
- Availability line: show only when the owner is genuinely accepting projects.
- Optional hero illustration: a polished agent-system panel showing Reasoning → Tool Selection → API Execution → Data Analysis → Result.
- If using a portrait, use an owner-approved image; do not fabricate a real-looking personal photo or imply generated imagery is an authentic photograph.
- Do not use clichéd robot heads, giant glowing brains, or excessive neon effects.

### Components and interaction styling

- Primary button: purple fill, accessible contrast, clear hover/focus/disabled states.
- Secondary button: dark surface or transparent fill with visible border.
- Cards: dark surfaces, thin borders, restrained purple hover glow, and slight elevation only when useful.
- Tags: compact neutral/dark pills with readable text.
- Forms: visible labels, clear help/error text, focus ring, and keyboard support.
- Diagrams: meaningful labels, consistent nodes, visible directional relationships, and responsive fallback.
- Use icons consistently from one icon library; do not mix unrelated icon styles.

---

## 6. Responsive Behavior

Build mobile-first and test at small phones, large phones, tablets, laptops, and wide desktop screens.

### Desktop

- Horizontal navigation
- Large hero typography and optional side-by-side agent visualization
- Multi-column project/capability layouts where readable
- Architecture diagram can use wider horizontal relationships

### Tablet

- Reduce hero heading size fluidly
- Allow grids to collapse from four columns to two
- Prevent horizontal overflow from technology tags or diagrams

### Mobile

- Compact navbar with accessible menu button and expanded menu
- Hero content stacks vertically; CTA buttons remain easy to tap
- Projects become single-column cards
- Diagrams stack vertically or provide a clearly readable simplified view
- Services and process become vertical lists/timelines
- Contact form uses full-width inputs
- Do not rely on hover to reveal critical information
- Keep tap targets around 44×44 CSS pixels where practical
- Avoid horizontal scrolling except for a deliberately labelled, accessible carousel

---

## 7. Motion and Interaction Rules

Use motion to support hierarchy and feedback, not as decoration for its own sake.

Allowed where appropriate:

- Gentle hero text reveal
- Subtle fade/slide reveal as sections enter view
- Project image scale of a few percent on hover
- Soft purple glow on active/hovered cards
- Small arrow movement on links
- Subtle animated connection lines in the agent visualization
- A restrained expertise marquee if it does not harm readability

Requirements:

- Respect `prefers-reduced-motion`.
- Keep animations short and smooth; avoid continuous motion in every section.
- Do not block interaction while animations run.
- Avoid custom cursor behavior on touch devices and ensure it never replaces a normal pointer affordance.
- Use CSS transitions for simple effects; add a motion library only if its value justifies the dependency.
- Do not use scroll hijacking or force users through a fixed sequence.

---

## 8. Content and Project Data Rules

Store project content in typed data objects rather than hard-coding repeated markup into each page.

Suggested project model:

```ts
export type Project = {
  slug: string;
  title: string;
  category: string;
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

### Initial candidate projects

Use only projects the owner has actually built and can demonstrate. Candidate themes from the portfolio plan include:

- AI Lead Generation Agent
- AI Research Agent
- Business Automation System

These are content candidates, not permission to claim unimplemented features. For every project, the owner must confirm what exists before publication. If a feature, result, demo, or repository is not available, omit it or label it accurately as a prototype/in progress.

### Case-study writing format

For each project, use:

- **Problem:** what needed to improve
- **Constraints:** relevant business or technical limitations
- **Approach:** why the architecture/workflow was chosen
- **Engineering:** what the owner implemented
- **Reliability:** validation, failure handling, security, and testing considerations
- **Outcome:** only verified impact; otherwise explain what was completed or learned

Never fabricate percentages, revenue impact, time saved, customer counts, testimonials, or client endorsements.

---

## 9. Frontend Architecture

### Required stack

- Next.js 16 App Router
- TypeScript with strict mode
- React Server Components by default
- Tailwind CSS
- `frontend/app/globals.css` for design tokens, resets, base styles, and shared global effects
- Reusable typed components
- ESLint and formatter configuration

### Suggested folder structure

```text
portfolio/
├── constitution.md
├── README.md
├── .gitignore
├── .editorconfig
├── frontend/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   ├── work/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── studio/
│   │   │   └── [[...tool]]/
│   │   │       └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── select.tsx
│   │   │   ├── form-field.tsx
│   │   │   ├── section-heading.tsx
│   │   │   ├── container.tsx
│   │   │   └── status-indicator.tsx
│   │   ├── layout/
│   │   │   ├── navbar.tsx
│   │   │   ├── mobile-nav.tsx
│   │   │   ├── footer.tsx
│   │   │   └── page-shell.tsx
│   │   ├── home/
│   │   │   ├── hero.tsx
│   │   │   ├── expertise-strip.tsx
│   │   │   ├── capabilities.tsx
│   │   │   ├── selected-work.tsx
│   │   │   ├── problem-solver.tsx
│   │   │   ├── agent-architecture.tsx
│   │   │   ├── services.tsx
│   │   │   ├── process.tsx
│   │   │   ├── technology-stack.tsx
│   │   │   ├── about.tsx
│   │   │   ├── currently-building.tsx
│   │   │   └── final-cta.tsx
│   │   ├── projects/
│   │   │   ├── project-card.tsx
│   │   │   ├── project-grid.tsx
│   │   │   ├── project-filters.tsx
│   │   │   └── case-study-section.tsx
│   │   └── contact/
│   │       ├── contact-form.tsx
│   │       └── contact-methods.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   ├── services.ts
│   │   ├── navigation.ts
│   │   └── site.ts
│   ├── lib/
│   │   ├── constants.ts
│   │   ├── metadata.ts
│   │   ├── sanity/
│   │   │   ├── client.ts
│   │   │   ├── env.ts
│   │   │   ├── queries.ts
│   │   │   └── schemas/
│   │   │       ├── index.ts
│   │   │       └── project.ts
│   │   ├── validation.ts
│   │   └── utils.ts
│   ├── public/
│   │   ├── images/
│   │   ├── projects/
│   │   └── icons/
│   ├── tests/
│   ├── sanity.config.ts
│   ├── next.config.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
└── docs/
    ├── architecture.md
    ├── content-checklist.md
    └── deployment.md
```

Rules for this structure:

- Do not create a `repositories/` directory.
- Keep components grouped by purpose and feature; do not put every component into one file.
- Keep page files focused on composition and route metadata.
- Keep authored content in Sanity and shared site copy in `data/`; keep Sanity access in `lib/sanity/`.
- Do not add folders that contain only one unnecessary wrapper or empty placeholder files.
- The frontend must still render its public pages when Sanity is unreachable or unconfigured: data-backed sections fall back to honest empty states instead of failing the build or the page.

---

## 10. Reusable Component Standards

At minimum, implement reusable components for:

- `Button` with variants: primary, secondary, outline, ghost, and link
- `Container` / `PageShell`
- `SectionHeading`
- `Card`
- `Badge` / technology tag
- `Input`, `Textarea`, `Select`, `FormField`
- `Navbar`, `MobileNav`, `Footer`
- `ProjectCard`
- `StatusIndicator`
- `LoadingState`, `Skeleton`, `EmptyState`, and `ErrorState` where data fetching requires them

### Component rules

- Type all props and exported data structures.
- Prefer composition over complex boolean-prop combinations.
- Use semantic HTML (`nav`, `main`, `section`, `article`, `form`, `footer`).
- Include accessible names and labels.
- Ensure buttons declare the correct `type` inside forms.
- Keep styling consistent through shared tokens and component variants.
- Avoid copying a card or button implementation into each page.
- Use client-side state only when required for menus, filters, form state, or interactive diagrams.

---

## 11. Content Source and Contact Form

Sanity is the content source and the substitute for an application backend. There is no custom API server.

### Sanity usage

- Project/case-study content is authored in the embedded Studio at `/studio` and read by the site through the Sanity Content Lake.
- Read access goes through `lib/sanity/`; queries are tagged and cached with Next.js cache directives so pages stay static/fast.
- The site must render honest empty states when Sanity is unconfigured, empty, or unreachable. A content outage must never crash or blank the public pages.
- Only a public dataset may be read with public (non-secret) configuration. A private dataset requires a server-side-only token that never reaches the browser.
- Draft content must not be published to production unless a preview mode is deliberately implemented and documented.
- Define content schemas matching the typed `Project` model (see section 12). Do not invent fields that the UI cannot render.

### Contact workflow (email-only)

There is no backend, so the contact form does not persist anything. It composes an email.

1. Visitor completes the form.
2. The form validates required fields client-side and shows inline errors.
3. On submit, the site builds a `mailto:` URL from the validated values and opens the visitor's email client.
4. Tell the visitor plainly that their email app will open and that nothing is sent until they send it themselves.

Requirements:

- Never show a "message sent" or "saved" confirmation, because nothing has been sent or stored by the site.
- Never claim an inquiry was received until the visitor actually sends the email.
- Validate and trim values, enforce length limits, and encode the `mailto:` parameters safely (`encodeURIComponent`).
- Keep the contact details and address configurable; until a real address is set, render a visible placeholder notice and do not pretend the form can deliver mail.
- Do not collect sensitive personal data, and do not add trackers or analytics.

---

## 12. Content Model (Sanity)

`Project` documents are the single source of truth for case studies. Keep the Sanity schema and the TypeScript `Project` type in sync.

Suggested `project` fields:

- `title` — required, short
- `slug` — required, stable, readable, unique (`current` from the slug type)
- `category` — required, controlled value
- `status` — optional, only when accurate
- `summary` — required, short description
- `stack` — array of technology labels
- `problem` — required
- `solution` — required
- `contributions` — array of strings (what was personally engineered)
- `workflow` — array of strings (workflow / agent behaviour), optional
- `outcome` — optional; only verified results, never estimates
- `lessons` — array of strings, optional
- `architectureImage` — image, optional
- `screenshots` — array of images, optional
- `liveUrl` / `repositoryUrl` — optional; render only when present and valid
- `featured` — boolean, controls whether the project appears in the home "Selected work" section
- `published` — boolean, controls whether the project is listed and indexed
- `order` — number for stable ordering

Requirements:

- Placeholder or draft projects must be excluded from `/work`, from `sitemap.xml`, and from structured metadata. Never publish hidden or draft content.
- Do not fabricate clients, metrics, outcomes, or repository links inside content. Mark anything unverified visibly.
- Images come from Sanity's image pipeline with an explicitly set width, height, and descriptive `alt`.
- Keep the environment variable names documented in `frontend/.env.example`.

---

## 13. Environment Configuration

Commit `.env.example` files containing names and safe example placeholders only. Never commit real secrets.

### Frontend `.env.example`

```dotenv
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

- `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are not secrets; they identify a public dataset.
- If the dataset is private, read it through a server-only variable (for example `SANITY_API_READ_TOKEN`) that is **not** prefixed with `NEXT_PUBLIC_` and never reaches the browser.
- Never put a Sanity write token in a `NEXT_PUBLIC_` variable. Content authoring happens through the Studio's own authentication.

### Configuration rules

- Validate required settings when Sanity is first used and fall back to honest empty states rather than crashing when configuration is missing.
- Do not print secret values in logs.
- Keep local `.env` files gitignored.

---

## 14. Data Fetching and Error Handling Standards

- Keep Sanity queries in `lib/sanity/queries.ts` with explicit projections; do not fetch whole documents into components.
- Type query results and validate their shape; do not trust unchecked `any`.
- Cache reads with Next.js cache directives and define a sensible revalidation window so content updates appear without a redeploy.
- Handle Sanity network failures, timeouts, and empty results safely; return empty collections instead of throwing into the page.
- The frontend must handle loading, empty, and error states for every data-backed section.
- Validate `mailto:` inputs client-side and encode parameters; never trust or render user input as markup.
- Do not silently swallow errors. Log them server-side without secrets or unnecessary personal data.
- Never show a success state for an action that did not actually succeed.

---

## 15. Security and Privacy

- HTTPS in production.
- Use least-privilege, read-only Sanity access on the public site. Never expose a write token to the browser.
- Validate and encode all user input used to build `mailto:` links.
- Do not expose the write-capable Studio to anonymous users; it relies on Sanity authentication.
- Keep secrets out of source code, browser bundles, logs, screenshots, and Git history.
- Do not include personal data in URLs or analytics events.
- Do not expose environment configuration or debug routes in production.
- Escape user content when rendering; never inject arbitrary HTML from content or forms.
- Do not collect or transmit personal data anywhere the site does not need it; the contact form sends nothing on its own.
- If a privacy notice is required by anything the site actually does (cookies, analytics, storage), add one; otherwise do not invent one.

---

## 16. SEO and Social Sharing

- Set a meaningful site title and description using Next.js metadata.
- Provide page-specific metadata for Home, Work, Contact, and project case studies.
- Add canonical URLs based on `NEXT_PUBLIC_SITE_URL` in production.
- Include Open Graph and social preview metadata.
- Use a proper favicon and owner-approved social preview image.
- Use semantic headings in a logical order; normally one primary `h1` per page.
- Add `robots.txt` and sitemap generation when the public pages are ready.
- Use descriptive alt text for meaningful images; decorative images should have empty alt text.
- Ensure project slugs are stable, readable, and unique.
- Never publish hidden or draft projects in the sitemap.

---

## 17. Accessibility

Target WCAG 2.2 AA practices where feasible.

- Full keyboard navigation for links, buttons, menu, filters, and forms.
- Visible focus indicators using the purple accent with sufficient contrast.
- Correct semantic landmarks and heading order.
- Form fields must have persistent labels; placeholders are not labels.
- Error messages must identify the field and explain how to correct it.
- Do not communicate status through color alone.
- Respect reduced-motion preferences.
- Maintain sufficient color contrast, especially muted copy and purple buttons.
- Provide text alternatives or simplified mobile versions for complex diagrams.
- Ensure mobile navigation opens, closes, and exposes its state accessibly.
- Do not trap keyboard focus except in a true modal, and restore focus appropriately.

---

## 18. Performance and Reliability

- Prefer server rendering/static generation for portfolio content that does not need client state.
- Use Next.js image optimization for raster images and provide appropriate sizes/alt text.
- Lazy-load below-the-fold media where appropriate.
- Avoid oversized video backgrounds and heavy 3D libraries unless explicitly approved and measured.
- Minimize client JavaScript and unnecessary state libraries.
- Prevent layout shifts by reserving image/media dimensions.
- Use optimized font loading and avoid unnecessary font families/weights.
- Avoid loading animation libraries on every page if CSS is sufficient.
- Keep the initial hero fast and readable before animations initialize.
- Ensure a Sanity outage or bad configuration does not prevent static portfolio pages from loading.
- Cache Sanity reads so pages remain static/fast and content updates do not require a heavy rebuild.

---

## 19. Testing and Quality Gates

### Frontend checks

- TypeScript strict type checking passes.
- ESLint passes.
- Production build succeeds.
- Test navbar and mobile menu.
- Test every navigation item and CTA.
- Test project cards, filters (if present), and case-study routes.
- Test contact form validation, loading, success, and failure states.
- Check responsive layouts and horizontal overflow.
- Check keyboard navigation, visible focus, and reduced motion.
- Check image loading, alt text, metadata, and 404 handling.
- Verify that draft/unpublished projects never appear on `/work` or in `sitemap.xml`.

### Content checks

- Sanity queries return typed, expected shapes.
- Missing or empty content renders an honest empty state, not a broken page.
- A Sanity failure or missing configuration does not crash the public pages.
- `mailto:` links are built from validated, safely encoded values.
- No success confirmation is shown for an email that the visitor has not sent.

### Suggested commands

Use the scripts actually configured in `package.json`; expected checks include:

```bash
cd frontend
npm run lint
npm run typecheck
npm run test
npm run build
```

Do not claim a check passed unless it was actually run and passed.

---

## 20. Deployment

### Frontend

- Deploy `frontend/` to Vercel or another supported Next.js host.
- Set `NEXT_PUBLIC_SITE_URL` to the production domain.
- Set the Sanity variables (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`) in the hosting dashboard. Add a server-only read token only if the dataset is private.
- Configure custom domain and HTTPS.
- Confirm build output and all route paths after deployment.
- Confirm `/studio` loads and content edits appear on the public pages after the revalidation window.

### Sanity

- Create the project and dataset in the Sanity dashboard before deploying.
- Keep the dataset public, or read it through a server-only token; never expose a write token to the browser.
- Publish only verified content. Drafts must never reach production pages or the sitemap.
- The Studio at `/studio` is authenticated by Sanity's own sign-in; it is not linked from public navigation.

### Release checklist

- Production domain and HTTPS work.
- Sanity content loads on the home and `/work` pages, and case-study routes resolve.
- Draft/unpublished projects are absent from `/work` and `sitemap.xml`.
- Contact form opens the visitor's email client with correctly encoded values and shows no false success message.
- No secrets are exposed in client bundles or repository history.
- All live demo, GitHub, email, and social links are verified.
- Mobile and desktop layouts are reviewed on the deployed site.

---

## 21. Git and Repository Hygiene

- Use clear, conventional commit messages.
- Keep a single `frontend/` project; there is no separate backend to separate concerns from.
- Keep `.env`, local caches, build outputs, and secrets out of Git.
- Maintain a useful README with setup, environment, test, and deployment instructions.
- Do not commit generated build artifacts or unapproved personal images.
- Do not create a `repositories/` folder.
- Remove dead code, unused dependencies, debug prints, and commented-out experimental blocks before release.
- Never overwrite user-created content or configuration without inspecting it first.

---

## 22. AI Coding Agent Rules

Any AI coding agent working on this repository must follow these rules:

1. Read this `constitution.md` before implementing or changing the project.
2. Inspect the existing file tree and package configuration before proposing structural changes.
3. Do not replace the established design direction with a generic template.
4. Implement one coherent feature at a time and keep changes scoped.
5. Reuse existing components and design tokens before creating new ones.
6. Keep TypeScript strict; do not use `any` to silence type errors unless there is a documented, justified boundary.
7. Do not leave TODOs for required core functionality or claim incomplete functionality is complete.
8. Do not fabricate content, project results, links, or credentials.
9. Do not add a dependency without explaining its purpose and considering a simpler alternative.
10. Do not add backend, database, or CMS complexity beyond Sanity for content that the CMS already covers.
11. Keep secrets server-side and use environment variables.
12. Add or update tests for meaningful behavior changes.
13. Run the relevant lint, type-check, test, and build commands after implementation.
14. Report exactly which checks ran and any remaining failures; never pretend they passed.
15. If a requirement is ambiguous, choose the smallest maintainable interpretation consistent with this constitution and document the assumption.
16. Never remove existing working features without explicit authorization.
17. Do not use inaccessible hover-only interactions.
18. Verify that every visible control performs the action its label promises.
19. Preserve the three main routes and dynamic case-study route pattern unless the owner explicitly changes the information architecture.
20. Keep copy and visuals focused on the owner's identity as an Agentic AI Engineer and freelance problem solver.

---

## 23. Definition of Done

A feature or release is complete only when all relevant items below are satisfied:

- [ ] The feature matches the agreed design and content intent.
- [ ] It is responsive across phone, tablet, and desktop layouts.
- [ ] It uses shared components and established design tokens where appropriate.
- [ ] All buttons, links, forms, filters, and menus work.
- [ ] Loading, success, empty, and error states are implemented where relevant.
- [ ] Accessibility and keyboard behavior have been checked.
- [ ] TypeScript, lint, tests, and production build pass where configured.
- [ ] Sanity content is queried with typed, cached reads and safe error handling; missing content falls back to honest empty states.
- [ ] No secret, private user data, or fabricated project claim is included.
- [ ] Documentation and environment examples are updated if needed.
- [ ] The developer reports any untested areas honestly.

---

## 24. Initial Implementation Order

Build the project in this order to avoid polishing incomplete architecture:

1. Set up the `frontend/` structure, configuration, linting, and README.
2. Define global color/typography/spacing tokens in `frontend/app/globals.css` and implement shared UI primitives.
3. Build the global layout, navbar, mobile menu, and footer.
4. Implement the Home page sections in the prescribed order using responsive reusable components.
5. Create typed project data and reusable project cards.
6. Implement `/work` and `/work/[slug]` using the shared project data.
7. Implement `/contact` and accessible form states.
8. Connect Sanity: schemas, client, typed queries, the embedded Studio at `/studio`, and cached reads.
9. Replace static project data with Sanity content and verify empty/error states when content is missing.
10. Add metadata, social sharing, sitemap/robots, accessibility checks, and performance improvements.
11. Run all tests and production builds, then fix issues before deploying.
12. Deploy the frontend, publish real content in Sanity, and review every route on mobile and desktop.

---

## 25. Final Product Principle

The portfolio must not merely say that Umm E Aeiman knows AI technologies. It must show how she identifies real problems, engineers agentic workflows, builds the complete software around them, and communicates the solution clearly to clients.

**Every design and engineering decision should reinforce this message:**

> **I build AI agents that solve real problems. You bring the problem; I engineer the system.**
