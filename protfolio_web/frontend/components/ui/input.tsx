import type { InputHTMLAttributes } from "react";
import { fieldClasses } from "@/components/ui/field-styles";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClasses, className)} {...props} />;
}
