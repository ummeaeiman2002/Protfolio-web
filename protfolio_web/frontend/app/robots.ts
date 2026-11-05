import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { stripTrailingSlash } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  const base = stripTrailingSlash(SITE_URL);

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/studio",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
