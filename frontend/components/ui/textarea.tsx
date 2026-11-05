import type { TextareaHTMLAttributes } from "react";
import { fieldClasses } from "@/components/ui/field-styles";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(fieldClasses, "min-h-40 resize-y", className)} {...props} />;
}
