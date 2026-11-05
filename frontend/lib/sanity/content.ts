import { cacheLife, cacheTag } from "next/cache";
import {
  ABOUT_CONTENT,
  ARCHITECTURE_NODES,
  CAPABILITIES,
  CURRENTLY_BUILDING,
  EXPERTISE_KEYWORDS,
  PROCESS_STEPS,
  PROBLEM_ROWS,
  SECTION_HEADINGS,
  STUDIO_PANEL,
  TECH_STACK,
  type ArchitectureNode,
  type BuildingItem,
  type Capability,
  type ProcessStep,
  type ProblemRow,
  type StackGroup,
} from "@/data/content";
import { SERVICES, type Service } from "@/data/services";
import {
  AVAILABILITY,
  CONTACT,
  HERO,
  OG_IMAGE,
  PROFILE_PHOTO,
  SITE_CORE_MESSAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_ROLE,
  SITE_SHORT_ROLE,
  SITE_TAGLINE,
} from "@/data/site";
import { sanityClient } from "@/lib/sanity/client";
import { homePageQuery, siteSettingsQuery } from "@/lib/sanity/queries";

export type Cta = { label: string; href: string };
export type ImageField = { src: string; alt: string };

export type StudioPanel = {
  eyebrow: string;
  title: string;
  status: string;
  name: string;
  tagline: string;
  description: string;
  builds: { index: string; title: string; description: string }[];
  tags: string[];
};

export type HeroContent = {
  headlineLead: string;
  headlineHighlight: string;
  headlineTail: string;
  supporting: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  portrait: ImageField;
  byline: { name: string; role: string };
  panel: StudioPanel;
};

export type HomeContent = {
  hero: HeroContent;
  expertise: { title: string; keywords: string[] };
  capabilities: { title: string; description: string; items: Capability[] };
  problemSolver: { title: string; description: string; rows: ProblemRow[] };
  architecture: { title: string; description: string; note: string; nodes: ArchitectureNode[] };
  services: { title: string; description: string; items: Service[] };
  process: { title: string; description: string; steps: ProcessStep[] };
  technologyStack: { title: string; description: string; groups: StackGroup[] };
  about: {
    titleLead: string;
    titleHighlight: string;
    titleTail: string;
    description: string;
    paragraphs: string[];
    callout: string;
    principles: string[];
    caption: string;
    portrait: ImageField;
  };
  building: { title: string; description: string; items: BuildingItem[] };
  finalCta: {
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
};

export type SiteSettings = {
  siteName: string;
  role: string;
  shortRole: string;
  tagline: string;
  coreMessage: string;
  description: string;
  email: string;
  availability: string | null;
  socials: { label: string; href: string }[];
  profilePhoto: ImageField;
  ogBanner: ImageField;
};

type RawSocial = { label?: string; href?: string };
type RawImage = { url?: string; alt?: string } | null;

type RawSettings = {
  siteName?: string;
  role?: string;
  shortRole?: string;
  tagline?: string;
  coreMessage?: string;
  description?: string;
  email?: string;
  availability?: string;
  socials?: RawSocial[];
  profilePhoto?: RawImage;
  ogBanner?: RawImage;
};

type RawCta = { label?: string; href?: string };

type RawHero = {
  headlineLead?: string;
  headlineHighlight?: string;
  headlineTail?: string;
  supporting?: string;
  primaryCta?: RawCta;
  secondaryCta?: RawCta;
  portrait?: RawImage;
  byline?: { name?: string; role?: string };
  panel?: Partial<StudioPanel>;
};

type RawHomePage = {
  hero?: RawHero;
  expertise?: { title?: string; keywords?: string[] };
  capabilities?: { title?: string; description?: string; items?: Capability[] };
  problemSolver?: { title?: string; description?: string; rows?: ProblemRow[] };
  architecture?: { title?: string; description?: string; note?: string; nodes?: ArchitectureNode[] };
  services?: { title?: string; description?: string; items?: Service[] };
  process?: { title?: string; description?: string; steps?: ProcessStep[] };
  technologyStack?: { title?: string; description?: string; groups?: StackGroup[] };
  about?: {
    titleLead?: string;
    titleHighlight?: string;
    titleTail?: string;
    description?: string;
    paragraphs?: string[];
    callout?: string;
    principles?: string[];
    caption?: string;
    portrait?: RawImage;
  };
  building?: { title?: string; description?: string; items?: BuildingItem[] };
  finalCta?: {
    title?: string;
    description?: string;
    primaryLabel?: string;
    secondaryLabel?: string;
  };
};

function text(value: string | undefined | null, fallback: string): string {
  const trimmed = (value ?? "").trim();
  return trimmed.length > 0 ? trimmed : fallback;
}

function optionalText(value: string | undefined | null, fallback: string | null): string | null {
  const trimmed = (value ?? "").trim();
  return trimmed.length > 0 ? trimmed : fallback;
}

function list<T>(value: readonly T[] | undefined | null, fallback: readonly T[]): T[] {
  return Array.isArray(value) && value.length > 0 ? [...value] : [...fallback];
}

function cta(value: RawCta | undefined, fallback: Cta): Cta {
  return {
    label: text(value?.label, fallback.label),
    href: text(value?.href, fallback.href),
  };
}

/**
 * Site identity, contact details and shared images.
 *
 * Sanity is the source of truth when the `siteSettings` document exists.
 * Until then the approved static copy in `data/site.ts` is used, so the site
 * never renders an empty shell.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  "use cache";
  cacheLife("hours");
  cacheTag("site-settings");

  let raw: RawSettings | null = null;

  if (sanityClient) {
    try {
      raw = await sanityClient.fetch<RawSettings | null>(siteSettingsQuery);
    } catch (error) {
      console.error("[sanity] Failed to load site settings:", error);
    }
  }

  const socials = list(raw?.socials, CONTACT.socials)
    .filter((social) => social.label && social.href)
    .map((social) => ({ label: social.label as string, href: social.href as string }));

  return {
    siteName: text(raw?.siteName, SITE_NAME),
    role: text(raw?.role, SITE_ROLE),
    shortRole: text(raw?.shortRole, SITE_SHORT_ROLE),
    tagline: text(raw?.tagline, SITE_TAGLINE),
    coreMessage: text(raw?.coreMessage, SITE_CORE_MESSAGE),
    description: text(raw?.description, SITE_DESCRIPTION),
    email: text(raw?.email, CONTACT.email),
    availability: optionalText(raw?.availability, AVAILABILITY),
    socials,
    profilePhoto: {
      src: text(raw?.profilePhoto?.url, PROFILE_PHOTO.src),
      alt: text(raw?.profilePhoto?.alt, PROFILE_PHOTO.alt),
    },
    ogBanner: {
      src: text(raw?.ogBanner?.url, OG_IMAGE.src),
      alt: text(raw?.ogBanner?.alt, OG_IMAGE.alt),
    },
  };
}

/**
 * Every editable block of the home page.
 *
 * Falls back to the approved static copy in `data/` for every field that has
 * not been authored in Sanity yet.
 */
export async function getHomeContent(): Promise<HomeContent> {
  "use cache";
  cacheLife("hours");
  cacheTag("home-page");

  let raw: RawHomePage | null = null;

  if (sanityClient) {
    try {
      raw = await sanityClient.fetch<RawHomePage | null>(homePageQuery);
    } catch (error) {
      console.error("[sanity] Failed to load home page content:", error);
    }
  }

  const hero = raw?.hero;
  const panel = hero?.panel;

  return {
    hero: {
      headlineLead: text(hero?.headlineLead, HERO.headlineLead),
      headlineHighlight: text(hero?.headlineHighlight, HERO.headlineHighlight),
      headlineTail: text(hero?.headlineTail, HERO.headlineTail),
      supporting: text(hero?.supporting, HERO.supporting),
      primaryCta: cta(hero?.primaryCta, HERO.primaryCta),
      secondaryCta: cta(hero?.secondaryCta, HERO.secondaryCta),
      portrait: {
        src: text(hero?.portrait?.url, PROFILE_PHOTO.src),
        alt: text(hero?.portrait?.alt, PROFILE_PHOTO.alt),
      },
      byline: {
        name: text(hero?.byline?.name, SITE_NAME),
        role: text(hero?.byline?.role, SITE_SHORT_ROLE),
      },
      panel: {
        eyebrow: text(panel?.eyebrow, STUDIO_PANEL.eyebrow),
        title: text(panel?.title, STUDIO_PANEL.title),
        status: text(panel?.status, STUDIO_PANEL.status),
        name: text(panel?.name, STUDIO_PANEL.name),
        tagline: text(panel?.tagline, STUDIO_PANEL.tagline),
        description: text(panel?.description, STUDIO_PANEL.description),
        builds: list(panel?.builds, STUDIO_PANEL.builds),
        tags: list(panel?.tags, STUDIO_PANEL.tags),
      },
    },
    expertise: {
      title: text(raw?.expertise?.title, SECTION_HEADINGS.expertise.title),
      keywords: list(raw?.expertise?.keywords, EXPERTISE_KEYWORDS),
    },
    capabilities: {
      title: text(raw?.capabilities?.title, SECTION_HEADINGS.capabilities.title),
      description: text(
        raw?.capabilities?.description,
        SECTION_HEADINGS.capabilities.description,
      ),
      items: list(raw?.capabilities?.items, CAPABILITIES),
    },
    problemSolver: {
      title: text(raw?.problemSolver?.title, SECTION_HEADINGS.problemSolver.title),
      description: text(
        raw?.problemSolver?.description,
        SECTION_HEADINGS.problemSolver.description,
      ),
      rows: list(raw?.problemSolver?.rows, PROBLEM_ROWS),
    },
    architecture: {
      title: text(raw?.architecture?.title, SECTION_HEADINGS.architecture.title),
      description: text(
        raw?.architecture?.description,
        SECTION_HEADINGS.architecture.description,
      ),
      note: text(raw?.architecture?.note, SECTION_HEADINGS.architecture.note),
      nodes: list(raw?.architecture?.nodes, ARCHITECTURE_NODES),
    },
    services: {
      title: text(raw?.services?.title, SECTION_HEADINGS.services.title),
      description: text(raw?.services?.description, SECTION_HEADINGS.services.description),
      items: list(raw?.services?.items, SERVICES),
    },
    process: {
      title: text(raw?.process?.title, SECTION_HEADINGS.process.title),
      description: text(raw?.process?.description, SECTION_HEADINGS.process.description),
      steps: list(raw?.process?.steps, PROCESS_STEPS),
    },
    technologyStack: {
      title: text(raw?.technologyStack?.title, SECTION_HEADINGS.technologyStack.title),
      description: text(
        raw?.technologyStack?.description,
        SECTION_HEADINGS.technologyStack.description,
      ),
      groups: list(raw?.technologyStack?.groups, TECH_STACK),
    },
    about: {
      titleLead: text(raw?.about?.titleLead, SECTION_HEADINGS.about.titleLead),
      titleHighlight: text(
        raw?.about?.titleHighlight,
        SECTION_HEADINGS.about.titleHighlight,
      ),
      titleTail: text(raw?.about?.titleTail, SECTION_HEADINGS.about.titleTail),
      description: text(raw?.about?.description, ""),
      paragraphs: list(raw?.about?.paragraphs, [...ABOUT_CONTENT.paragraphs]),
      callout: text(raw?.about?.callout, ABOUT_CONTENT.callout),
      principles: list(raw?.about?.principles, [...ABOUT_CONTENT.principles]),
      caption: text(raw?.about?.caption, ABOUT_CONTENT.caption),
      portrait: {
        src: text(raw?.about?.portrait?.url, PROFILE_PHOTO.src),
        alt: text(raw?.about?.portrait?.alt, PROFILE_PHOTO.alt),
      },
    },
    building: {
      title: text(raw?.building?.title, SECTION_HEADINGS.building.title),
      description: text(raw?.building?.description, SECTION_HEADINGS.building.description),
      items: list(raw?.building?.items, CURRENTLY_BUILDING),
    },
    finalCta: {
      title: text(raw?.finalCta?.title, SECTION_HEADINGS.finalCta.title),
      description: text(raw?.finalCta?.description, SECTION_HEADINGS.finalCta.description),
      primaryLabel: text(raw?.finalCta?.primaryLabel, SECTION_HEADINGS.finalCta.primaryLabel),
      secondaryLabel: text(
        raw?.finalCta?.secondaryLabel,
        SECTION_HEADINGS.finalCta.secondaryLabel,
      ),
    },
  };
}
