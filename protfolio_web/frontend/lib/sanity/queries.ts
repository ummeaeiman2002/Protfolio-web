import { defineQuery } from "next-sanity";

/**
 * Projection that resolves image assets to their CDN URLs, so the rest of the
 * app can keep treating those fields as plain strings.
 */
const projectFields = /* groq */ `{
  "slug": slug.current,
  title,
  category,
  status,
  summary,
  problem,
  solution,
  "contributions": coalesce(contributions, []),
  "stack": coalesce(stack, []),
  workflow,
  "architectureImage": architectureImage.asset->url,
  "screenshots": screenshots[].asset->url,
  outcome,
  lessons,
  liveUrl,
  repositoryUrl,
  featured,
  published,
  "placeholder": coalesce(placeholder, false)
}`;

export const publishedProjectsQuery = defineQuery(
  `*[_type == "project" && published == true] | order(order asc, _createdAt desc) ${projectFields}`,
);

/**
 * Singleton: the identity of the site. Images are resolved to CDN URLs so the
 * rest of the app can keep treating those fields as plain strings.
 */
export const siteSettingsQuery = defineQuery(
  `*[_type == "siteSettings"][0]{
    siteName,
    role,
    shortRole,
    tagline,
    coreMessage,
    description,
    email,
    availability,
    location,
    "resumeUrl": resume.asset->url,
    "socials": coalesce(socials, []),
    "profilePhoto": profilePhoto{ "url": asset->url, alt },
    "ogBanner": ogBanner{ "url": asset->url, alt }
  }`,
);

/**
 * Singleton: every editable block of the home page.
 */
export const homePageQuery = defineQuery(
  `*[_type == "homePage"][0]{
    hero{
      headlineLead,
      headlineHighlight,
      headlineTail,
      supporting,
      primaryCta{ label, href },
      secondaryCta{ label, href },
      "portrait": portrait{ "url": asset->url, alt },
      byline{ name, role },
      panel{
        eyebrow,
        title,
        status,
        name,
        tagline,
        description,
        "builds": coalesce(builds, []),
        "tags": coalesce(tags, [])
      }
    },
    expertise{
      title,
      "keywords": coalesce(keywords, [])
    },
    capabilities{
      title,
      description,
      "items": coalesce(items, [])
    },
    problemSolver{
      title,
      description,
      "rows": coalesce(rows, [])
    },
    architecture{
      title,
      description,
      "nodes": coalesce(nodes, []),
      note
    },
    services{
      title,
      description,
      "items": coalesce(items, [])
    },
    process{
      title,
      description,
      "steps": coalesce(steps, [])
    },
    technologyStack{
      title,
      description,
      "groups": coalesce(groups, [])
    },
    about{
      titleLead,
      titleHighlight,
      titleTail,
      description,
      "paragraphs": coalesce(paragraphs, []),
      callout,
      "principles": coalesce(principles, []),
      "portrait": portrait{ "url": asset->url, alt },
      caption
    },
    building{
      title,
      description,
      "items": coalesce(items, [])
    },
    finalCta{
      title,
      description,
      primaryLabel,
      secondaryLabel
    }
  }`,
);
