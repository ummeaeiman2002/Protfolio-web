import { altImageSchema } from "@/lib/sanity/schemas/altImage";
import { homePageSchema } from "@/lib/sanity/schemas/homePage";
import { projectSchema } from "@/lib/sanity/schemas/project";
import { siteSettingsSchema } from "@/lib/sanity/schemas/siteSettings";

export const schemaTypes = [siteSettingsSchema, homePageSchema, projectSchema, altImageSchema];
