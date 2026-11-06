import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { OG_IMAGE, SITE_NAME, SITE_TAGLINE } from "@/data/site";
import { stripTrailingSlash } from "@/lib/utils";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
};

export function buildMetadata({
  title,
  description,
  path = "/",
  type = "website",
}: MetadataInput): Metadata {
  const url = `${stripTrailingSlash(SITE_URL)}${path === "/" ? "/" : path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: "en_US",
      images: [
        {
          url: OG_IMAGE.src,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: OG_IMAGE.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.src],
    },
  };
}

export const defaultDescription =
  `${SITE_NAME} — ${SITE_TAGLINE} Python development, AI automation, custom agents and AI-powered applications for teams and businesses.`;
