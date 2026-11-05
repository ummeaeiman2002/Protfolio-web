import { cn } from "@/lib/utils";

type StatusIndicatorProps = {
  status: string;
  tone?: "success" | "muted";
  className?: string;
};

export function StatusIndicator({ status, tone = "success", className }: StatusIndicatorProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-ink-secondary",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-2 rounded-full animate-pulse-dot",
          tone === "success" ? "bg-success" : "bg-ink-muted",
        )}
      />
      {status}
    </p>
  );
}
