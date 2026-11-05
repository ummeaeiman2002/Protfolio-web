import { createClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId } from "@/lib/sanity/env";

/**
 * Read-only Content Lake client. `null` when no project id is configured, so
 * callers can fall back to an honest empty state rather than throwing.
 */
export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
    })
  : null;
