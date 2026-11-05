import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[var(--container-max)] px-5 sm:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  labelledBy?: string;
  divided?: boolean;
};

export function Section({ children, id, className, labelledBy, divided = true }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "scroll-mt-24 py-20 sm:py-24 lg:py-28",
        divided && "border-t border-border",
        className,
      )}
    >
      {children}
    </section>
  );
}
