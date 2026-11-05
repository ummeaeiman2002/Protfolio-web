import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
};

export function EmptyState({ title, description, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 rounded-xl border border-dashed border-border bg-surface/50 px-6 py-14 text-center",
        className,
      )}
    >
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="max-w-md text-sm leading-relaxed text-ink-secondary">{description}</p>
      {action}
    </div>
  );
}
