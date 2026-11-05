import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface p-6",
        interactive &&
          "transition-colors duration-200 hover:border-purple/50 hover:bg-surface-raised focus-within:border-purple/60",
        className,
      )}
    >
      {children}
    </div>
  );
}
