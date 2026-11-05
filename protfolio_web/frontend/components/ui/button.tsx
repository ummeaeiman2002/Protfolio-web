import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple disabled:pointer-events-none disabled:opacity-55";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-purple text-white hover:bg-purple-deep",
  secondary: "border border-border bg-surface-raised text-ink hover:border-purple hover:text-purple-soft",
  outline: "border border-border bg-transparent text-ink hover:border-purple hover:text-purple-soft",
  ghost: "bg-transparent text-ink-secondary hover:bg-surface hover:text-ink",
  link: "bg-transparent text-purple-soft underline-offset-4 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  fullWidth?: boolean;
  "aria-label"?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: () => void;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const { children, variant = "primary", size = "md", className, fullWidth } = props;

  const classes = cn(
    base,
    variantClasses[variant],
    variant !== "link" && sizeClasses[size],
    variant === "link" && "h-auto p-0",
    fullWidth && "w-full",
    className,
  );

  if (props.href !== undefined) {
    const href = props.href;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");

    if (isExternal) {
      const opensNewTab = href.startsWith("http");
      return (
        <a
          href={href}
          className={classes}
          aria-label={props["aria-label"]}
          onClick={props.onClick}
          {...(opensNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={props["aria-label"]} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
      aria-label={props["aria-label"]}
    >
      {children}
    </button>
  );
}
