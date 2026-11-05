import { defineType, defineField } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "For example: AI Agent, Automation, AI Application.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      description: "Optional short label, for example 'In progress'.",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
      description: "One or two sentences shown on cards and as the meta description.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "problem",
      title: "Problem",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "solution",
      title: "Approach / solution",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "contributions",
      title: "What was engineered",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "stack",
      title: "Tech stack",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "workflow",
      title: "Workflow / agent steps",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "architectureImage",
      title: "Architecture image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "outcome",
      title: "Outcome",
      type: "text",
      rows: 3,
      description: "Only verified results. Never estimate numbers you cannot stand behind.",
    }),
    defineField({
      name: "lessons",
      title: "What the build taught me",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "liveUrl",
      title: "Live URL",
      type: "url",
      description: "Only if a working demo exists.",
    }),
    defineField({
      name: "repositoryUrl",
      title: "Repository URL",
      type: "url",
      description: "Only if the repository is public.",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first.",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
      description: "Featured projects appear on the home page.",
    }),
    defineField({
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: false,
      description: "Only published projects appear on the site.",
    }),
    defineField({
      name: "placeholder",
      title: "Placeholder content",
      type: "boolean",
      initialValue: false,
      description:
        "Marks a structural outline that still needs real details. Placeholders are labelled on the public site.",
    }),
  ],
  orderings: [
    {
      title: "Manual order",
      name: "orderAsc",
      by: [
        { field: "order", direction: "asc" },
        { field: "_createdAt", direction: "desc" },
      ],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "architectureImage" },
  },
});
