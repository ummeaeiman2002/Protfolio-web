import Link from "next/link";
import { Brand } from "@/components/layout/brand";
import { Container } from "@/components/ui/container";
import { MailIcon } from "@/components/ui/icons";
import { Notice } from "@/components/ui/notice";
import { FOOTER_NAV } from "@/data/navigation";
import { FOOTER_NOTE, PLACEHOLDER_NOTICE } from "@/data/site";
import { getSiteSettings } from "@/lib/sanity/content";
import { isPlaceholderEmail } from "@/lib/utils";

export async function Footer() {
  const site = await getSiteSettings();
  const emailIsPlaceholder = isPlaceholderEmail(site.email);

  return (
    <footer className="border-t border-border bg-surface/40">
      <Container className="flex flex-col gap-10 py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-sm flex-col gap-4">
            <Brand />
            <p className="text-sm leading-relaxed text-ink-secondary">{site.role}</p>
            <p className="text-sm leading-relaxed text-ink-muted">{site.coreMessage}</p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-14">
            <nav aria-label="Footer" className="flex flex-col gap-3">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Pages</h2>
              {FOOTER_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-ink-secondary transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">Contact</h2>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-ink-secondary transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
              >
                <MailIcon className="text-[1rem]" />
                {site.email}
              </a>
              {emailIsPlaceholder ? <Notice>{PLACEHOLDER_NOTICE}</Notice> : null}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {site.siteName}</p>
          <p>{FOOTER_NOTE}</p>
        </div>
      </Container>
    </footer>
  );
}
