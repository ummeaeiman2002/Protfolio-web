import { defineType, defineField } from "sanity";

/**
 * Image with a required alternative text, so every picture the owner uploads
 * ships with an accessible description instead of a silent empty alt.
 */
export const altImageSchema = defineType({
  name: "altImage",
  title: "Image",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({
      name: "alt",
      title: "Alternative text",
      type: "string",
      description: "Describe the image for people who cannot see it.",
      validation: (rule) => rule.required(),
    }),
  ],
});
