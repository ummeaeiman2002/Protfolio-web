export const SITE_NAME = "Umm E Aeiman";
export const SITE_ROLE = "Agentic AI Engineer · Freelance Problem Solver";
export const SITE_SHORT_ROLE = "Agentic AI Engineer";
export const SITE_TAGLINE = "I build AI agents that solve real problems.";
export const SITE_CORE_MESSAGE = "You bring the problem. I engineer the AI system.";

/**
 * Profile photo.
 * Drop your own file at `public/images/profile.jpg` (same filename) and it
 * replaces the placeholder automatically — no code change needed.
 */
export const PROFILE_PHOTO = {
  src: "/images/profile.jpg",
  alt: `${SITE_NAME} — agentic AI engineer`,
} as const;

/**
 * Social / link-preview banner (1200x630).
 * Replace the file at `public/og.jpg` to change how the site looks when
 * shared on WhatsApp, LinkedIn, X and similar.
 */
export const OG_IMAGE = {
  src: "/og.jpg",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — AI agents that solve real problems`,
} as const;

export const SITE_DESCRIPTION =
  "Umm E Aeiman designs and fully codes AI agents, intelligent automation systems and complete AI-powered applications for founders, teams and growing businesses.";

export const HERO = {
  headlineLead: "I BUILD",
  headlineHighlight: "AI AGENTS",
  headlineTail: "THAT SOLVE REAL PROBLEMS.",
  supporting:
    "I design and fully code AI agents, intelligent automation systems and AI-powered applications that turn complex workflows into practical software solutions.",
  primaryCta: { label: "View My Work", href: "/work" },
  secondaryCta: { label: "Start a Project", href: "/contact" },
} as const;

/**
 * Availability is only rendered when the owner confirms she is accepting work.
 * Set to a short status string (for example "Available for new projects") or null.
 */
export const AVAILABILITY: string | null = null;

/**
 * PLACEHOLDER — replace with owner-verified contact details before launch.
 * Values still pointing at example.com are rendered with a visible notice.
 */
export const CONTACT = {
  email: "hello@example.com",
  socials: [] as { label: string; href: string }[],
} as const;

export const PLACEHOLDER_NOTICE =
  "Development placeholder — replace with verified details before launch.";

export const FOOTER_NOTE =
  "Built with Next.js, TypeScript, Tailwind CSS and Sanity.";
