import { defineType, defineField } from "sanity";

/**
 * Singleton document: the identity of the site — name, role, contact details
 * and the images that are reused in several places (profile photo, social
 * share banner). Create exactly one document of this type.
 */
export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Name",
      type: "string",
      description: "Shown in the navbar, footer and browser tab.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role line",
      type: "string",
      description: "Full role, for example: Agentic AI Engineer · Freelance Problem Solver.",
    }),
    defineField({
      name: "shortRole",
      title: "Short role",
      type: "string",
      description: "Short role used next to the photo in the hero, for example: Agentic AI Engineer.",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short line used in page titles and social previews.",
    }),
    defineField({
      name: "coreMessage",
      title: "Core message",
      type: "string",
      description: "The one sentence the site is built around.",
    }),
    defineField({
      name: "description",
      title: "SEO description",
      type: "text",
      rows: 3,
      description: "Used for search results and link previews.",
    }),
    defineField({
      name: "email",
      title: "Contact email",
      type: "string",
      description: "The address the contact form opens. A placeholder address is flagged on the site.",
    }),
    defineField({
      name: "availability",
      title: "Availability status",
      type: "string",
      description: "Leave empty to hide the status indicator in the hero.",
    }),
    defineField({
      name: "socials",
      title: "Social links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "URL", type: "url" }),
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        },
      ],
    }),
    defineField({
      name: "profilePhoto",
      title: "Profile photo",
      type: "altImage",
      description: "Square image. Used in the hero and in the About section.",
    }),
    defineField({
      name: "ogBanner",
      title: "Social share banner",
      type: "altImage",
      description: "1200x630 image used when the site link is shared (WhatsApp, LinkedIn, X).",
    }),
  ],
  preview: {
    select: { title: "siteName", subtitle: "role", media: "profilePhoto" },
  },
});
