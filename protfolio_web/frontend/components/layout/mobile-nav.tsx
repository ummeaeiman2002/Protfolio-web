"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import type { NavItem } from "@/data/navigation";

type MobileNavProps = {
  items: NavItem[];
  cta: NavItem;
};

export function MobileNav({ items, cta }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid size-10 place-items-center rounded-md border border-border bg-surface text-ink transition-colors hover:border-purple focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
      >
        {open ? <CloseIcon className="text-[1.25rem]" /> : <MenuIcon className="text-[1.25rem]" />}
      </button>

      {open ? (
        <div
          id={panelId}
          className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background px-5 pb-8 pt-4 shadow-[0_24px_48px_-32px_rgba(0,0,0,0.9)] sm:px-8"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3.5 text-base text-ink-secondary transition-colors hover:bg-surface hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button href={cta.href} fullWidth className="mt-4" onClick={() => setOpen(false)}>
            {cta.label}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
