import type { ReactNode } from "react";
import { AlertIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type NoticeProps = {
  children: ReactNode;
  className?: string;
};

export function Notice({ children, className }: NoticeProps) {
  return (
    <p
      className={cn(
        "inline-flex items-start gap-2 rounded-lg border border-dashed border-purple-soft/50 bg-purple/5 px-3 py-2 text-xs leading-relaxed text-purple-soft",
        className,
      )}
    >
      <AlertIcon className="mt-0.5 shrink-0 text-[1rem]" />
      <span>{children}</span>
    </p>
  );
}
