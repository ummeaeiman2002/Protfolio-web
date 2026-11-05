import Link from "next/link";
import { SITE_NAME } from "@/data/site";
import { cn } from "@/lib/utils";

export function Brand({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple",
        className,
      )}
      aria-label={`${SITE_NAME} — home`}
    >
      <span
        aria-hidden="true"
        className="grid size-8 place-items-center rounded-md border border-border bg-surface font-mono text-xs font-semibold text-purple-soft transition-colors group-hover:border-purple"
      >
        UA
      </span>
      <span className="text-sm font-semibold tracking-tight text-ink">{SITE_NAME}</span>
    </Link>
  );
}
