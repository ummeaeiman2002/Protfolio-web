import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  index?: string;
  align?: "left" | "center";
  className?: string;
  headingId?: string;
  level?: "h1" | "h2";
};

export function SectionHeading({
  label,
  title,
  description,
  index,
  align = "left",
  className,
  headingId,
  level = "h2",
}: SectionHeadingProps) {
  const Heading = level;

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
        {index ? <span className="text-purple-soft">{index}</span> : null}
        <span>{label}</span>
      </p>
      <Heading
        id={headingId}
        className={cn(
          "max-w-3xl text-2xl font-semibold text-ink sm:text-3xl lg:text-4xl",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <div
          className={cn(
            "max-w-2xl text-base leading-relaxed text-ink-secondary",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
