export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

export const PRIMARY_CTA: NavItem = { label: "Let's Work", href: "/contact" };

export const FOOTER_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];
