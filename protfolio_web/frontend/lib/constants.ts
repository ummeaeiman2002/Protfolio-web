export const SITE_URL = stripEnv(process.env.NEXT_PUBLIC_SITE_URL) || "http://localhost:3000";

export const CONTENT_MAX_WIDTH = "1240px";

function stripEnv(value: string | undefined): string {
  return (value ?? "").trim().replace(/\/+$/, "");
}
