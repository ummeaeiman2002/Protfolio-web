function readEnv(value: string | undefined): string {
  return (value ?? "").trim();
}

/**
 * Public Sanity configuration. These values are safe to expose to the browser
 * (the embedded Studio and the read-only Content Lake client both need them).
 * They are never secrets — the dataset is expected to be publicly readable.
 */
export const projectId = readEnv(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

export const dataset = readEnv(process.env.NEXT_PUBLIC_SANITY_DATASET) || "production";

export const apiVersion = readEnv(process.env.NEXT_PUBLIC_SANITY_API_VERSION) || "2025-01-01";

/**
 * When no project id is configured (for example a fresh clone with only
 * `.env.example`), the site must still build and render honest empty states
 * instead of crashing or fabricating content.
 */
export const isSanityConfigured = projectId.length > 0;
