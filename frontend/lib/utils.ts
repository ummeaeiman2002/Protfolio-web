export type ClassValue = string | false | null | undefined;

export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(" ");
}

export function isPlaceholderEmail(email: string): boolean {
  const normalized = email.trim().toLowerCase();
  return normalized.endsWith("@example.com") || normalized.endsWith("@example.org");
}

export function stripTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}
