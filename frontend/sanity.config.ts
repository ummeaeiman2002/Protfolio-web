"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "@/lib/sanity/env";
import { schemaTypes } from "@/lib/sanity/schemas";

export default defineConfig({
  name: "portfolio",
  title: "Umm E Aeiman Portfolio",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
