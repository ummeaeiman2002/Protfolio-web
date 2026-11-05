import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type FieldRenderProps = {
  id: string;
  describedBy?: string;
  invalid: boolean;
};

type FormFieldProps = {
  id: string;
  label: string;
  children: (field: FieldRenderProps) => ReactNode;
  error?: string;
  description?: string;
  required?: boolean;
  className?: string;
};

export function FormField({
  id,
  label,
  children,
  error,
  description,
  required = false,
  className,
}: FormFieldProps) {
  const descriptionId = description ? `${id}-description` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [descriptionId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {required ? (
          <span className="ml-1 text-danger" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1 text-xs font-normal text-ink-muted">(optional)</span>
        )}
      </label>

      {description ? (
        <p id={descriptionId} className="text-xs leading-relaxed text-ink-muted">
          {description}
        </p>
      ) : null}

      {children({ id, describedBy, invalid: Boolean(error) })}

      {error ? (
        <p id={errorId} className="text-xs font-medium text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
