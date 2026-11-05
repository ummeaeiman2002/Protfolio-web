import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "neutral" | "purple" | "success" | "danger" | "placeholder";

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "border-border bg-surface text-ink-secondary",
  purple: "border-purple/40 bg-purple/10 text-purple-soft",
  success: "border-success/40 bg-success/10 text-success",
  danger: "border-danger/40 bg-danger/10 text-danger",
  placeholder: "border-dashed border-purple-soft/60 bg-transparent text-purple-soft",
};

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export function Badge({ children, variant = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium leading-none",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-ink-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}
