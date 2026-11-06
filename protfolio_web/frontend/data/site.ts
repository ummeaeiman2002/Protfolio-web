export const SITE_NAME = "Umm E Aeiman";
export const SITE_ROLE = "Python Developer · AI Automation Engineer · Agentic AI Engineer";
export const SITE_SHORT_ROLE = "Python Developer & AI Automation Engineer";
export const SITE_TAGLINE = "I build Python systems and AI automation that solve real problems.";
export const SITE_CORE_MESSAGE = "You bring the problem. I engineer the Python and AI automation system.";

/**
 * Profile photo.
 * Drop your own file at `public/images/profile.jpg` (same filename) and it
 * replaces the placeholder automatically — no code change needed.
 */
export const PROFILE_PHOTO = {
  src: "/images/profile.jpg",
  alt: `${SITE_NAME} — Python developer and AI automation engineer`,
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
  alt: `${SITE_NAME} — Python and AI systems that solve real problems`,
} as const;

export const SITE_DESCRIPTION =
  "Umm E Aeiman is a Python developer and AI automation engineer who designs and fully codes Python services, AI agents, intelligent automation systems and complete AI-powered applications for teams and growing businesses.";

export const HERO = {
  headlineLead: "I BUILD",
  headlineHighlight: "PYTHON & AI AUTOMATION",
  headlineTail: "THAT SOLVES REAL PROBLEMS.",
  supporting:
    "I design and fully code Python services, AI automation and AI agents that turn complex workflows into practical, production-ready software.",
  primaryCta: { label: "View My Work", href: "/work" },
  secondaryCta: { label: "Get in Touch", href: "/contact" },
} as const;

/**
 * Availability is shown in the hero when set. Edit it from Sanity →
 * Site Settings → Availability status. Set to null to hide it.
 */
export const AVAILABILITY: string | null =
  "Open to Python Developer & AI Automation Engineer roles";

/**
 * Résumé/CV file URL. Prefer uploading the PDF in Sanity → Site Settings →
 * Résumé / CV; this static value is only a fallback.
 */
export const RESUME_URL: string | null = null;
export const RESUME_LABEL = "Download CV";

/**
 * Location line shown with contact details, for example
 * "Lahore, Pakistan · Remote". Leave null to hide it.
 */
export const LOCATION: string | null = null;

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
