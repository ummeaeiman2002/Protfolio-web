import { defineType, defineField } from "sanity";

const ctaFields = [
  defineField({ name: "label", title: "Label", type: "string" }),
  defineField({ name: "href", title: "Link", type: "string" }),
];

/**
 * Singleton document: every editable block of the home page — hero copy and
 * imagery, section headings, lists and the closing call to action. Create
 * exactly one document of this type.
 */
export const homePageSchema = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "headlineLead", title: "Headline — first part", type: "string" }),
        defineField({
          name: "headlineHighlight",
          title: "Headline — highlighted part",
          type: "string",
          description: "Rendered in purple.",
        }),
        defineField({ name: "headlineTail", title: "Headline — last part", type: "string" }),
        defineField({ name: "supporting", title: "Supporting text", type: "text", rows: 3 }),
        defineField({
          name: "primaryCta",
          title: "Primary button",
          type: "object",
          fields: ctaFields,
        }),
        defineField({
          name: "secondaryCta",
          title: "Secondary button",
          type: "object",
          fields: ctaFields,
        }),
        defineField({
          name: "portrait",
          title: "Portrait",
          type: "altImage",
          description: "Square photo shown next to the byline in the hero.",
        }),
        defineField({
          name: "byline",
          title: "Byline",
          type: "object",
          fields: [
            defineField({ name: "name", title: "Name", type: "string" }),
            defineField({ name: "role", title: "Role", type: "string" }),
          ],
        }),
        defineField({
          name: "panel",
          title: "Studio panel",
          type: "object",
          description: "The card on the right of the hero.",
          fields: [
            defineField({ name: "eyebrow", title: "Eyebrow label", type: "string" }),
            defineField({ name: "title", title: "Panel title", type: "string" }),
            defineField({ name: "status", title: "Status", type: "string" }),
            defineField({ name: "name", title: "Large wordmark", type: "string" }),
            defineField({ name: "tagline", title: "Tagline", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({
              name: "builds",
              title: "Rows",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "index", title: "Index", type: "string" }),
                    defineField({ name: "title", title: "Title", type: "string" }),
                    defineField({ name: "description", title: "Description", type: "string" }),
                  ],
                  preview: { select: { title: "title", subtitle: "index" } },
                },
              ],
            }),
            defineField({
              name: "tags",
              title: "Tags",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: "expertise",
      title: "Expertise strip",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({
          name: "keywords",
          title: "Keywords",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),

    defineField({
      name: "capabilities",
      title: "Capabilities",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
        defineField({
          name: "items",
          title: "Cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "index", title: "Index", type: "string" }),
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
                defineField({
                  name: "points",
                  title: "Points",
                  type: "array",
                  of: [{ type: "string" }],
                }),
              ],
              preview: { select: { title: "title", subtitle: "index" } },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "problemSolver",
      title: "Problem solver",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
        defineField({
          name: "rows",
          title: "Rows",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "problem", title: "Problem", type: "text", rows: 2 }),
                defineField({ name: "system", title: "AI system", type: "text", rows: 2 }),
                defineField({ name: "outcome", title: "Outcome", type: "text", rows: 2 }),
                defineField({
                  name: "outcomeIsPlaceholder",
                  title: "Outcome still unverified",
                  type: "boolean",
                  initialValue: false,
                  description: "Marks the outcome as pending so the site labels it honestly.",
                }),
              ],
              preview: { select: { title: "problem", subtitle: "system" } },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "architecture",
      title: "Behind the agent",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
        defineField({
          name: "nodes",
          title: "Nodes",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
              ],
              preview: { select: { title: "title" } },
            },
          ],
        }),
        defineField({
          name: "note",
          title: "Closing note",
          type: "text",
          rows: 3,
          description: "Paragraph shown under the node list.",
        }),
      ],
    }),

    defineField({
      name: "services",
      title: "Services",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
        defineField({
          name: "items",
          title: "Services",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "slug", title: "Slug", type: "slug" }),
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "summary", title: "Summary", type: "text", rows: 3 }),
                defineField({
                  name: "includes",
                  title: "What is included",
                  type: "array",
                  of: [{ type: "string" }],
                }),
                defineField({ name: "bestFor", title: "Best for", type: "string" }),
              ],
              preview: { select: { title: "title", subtitle: "bestFor" } },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "process",
      title: "Development process",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
        defineField({
          name: "steps",
          title: "Steps",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "index", title: "Index", type: "string" }),
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
                defineField({ name: "deliverable", title: "Output", type: "string" }),
              ],
              preview: { select: { title: "title", subtitle: "index" } },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "technologyStack",
      title: "Technology stack",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
        defineField({
          name: "groups",
          title: "Groups",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "label", title: "Label", type: "string" }),
                defineField({
                  name: "items",
                  title: "Items",
                  type: "array",
                  of: [{ type: "string" }],
                }),
              ],
              preview: { select: { title: "label" } },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "about",
      title: "About",
      type: "object",
      fields: [
        defineField({ name: "titleLead", title: "Title — first part", type: "string" }),
        defineField({
          name: "titleHighlight",
          title: "Title — highlighted part",
          type: "string",
          description: "Rendered in purple.",
        }),
        defineField({ name: "titleTail", title: "Title — last part", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
        defineField({
          name: "paragraphs",
          title: "Paragraphs",
          type: "array",
          of: [{ type: "text", rows: 4 }],
        }),
        defineField({
          name: "callout",
          title: "Callout box",
          type: "string",
          description: "Highlighted line between the paragraphs and the principles.",
        }),
        defineField({
          name: "principles",
          title: "Working principles",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "portrait",
          title: "Portrait",
          type: "altImage",
          description: "Portrait shown in the About section. Falls back to the profile photo.",
        }),
        defineField({
          name: "caption",
          title: "Portrait caption",
          type: "string",
          description: "Small line under the portrait.",
        }),
      ],
    }),

    defineField({
      name: "building",
      title: "Python & AI activities",
      type: "object",
      description:
        "Current Python projects, internships, learning, open-source and automation work. Only add verified activities.",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
        defineField({
          name: "items",
          title: "Items",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "title", title: "Title", type: "string" }),
                defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
                defineField({
                  name: "stack",
                  title: "Stack",
                  type: "array",
                  of: [{ type: "string" }],
                }),
                defineField({
                  name: "href",
                  title: "Repository URL",
                  type: "url",
                  description: "Only if the repository is public.",
                }),
                defineField({
                  name: "type",
                  title: "Activity type",
                  type: "string",
                  description: "For example: Project, Internship, Learning, Open source, Automation.",
                }),
                defineField({
                  name: "period",
                  title: "Period / status",
                  type: "string",
                  description: "For example: 2026, Current, In progress.",
                }),
              ],
              preview: { select: { title: "title" } },
            },
          ],
        }),
      ],
    }),

    defineField({
      name: "finalCta",
      title: "Final call to action",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
        defineField({ name: "primaryLabel", title: "Primary button label", type: "string" }),
        defineField({ name: "secondaryLabel", title: "Secondary button label", type: "string" }),
      ],
    }),
  ],
  preview: {
    select: { title: "hero.headlineHighlight", media: "hero.portrait" },
    prepare: ({ title, media }) => ({ title: title ? `Home Page — ${title}` : "Home Page", media }),
  },
});
