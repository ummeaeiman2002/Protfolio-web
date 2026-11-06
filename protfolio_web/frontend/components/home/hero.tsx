import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/icons";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { RESUME_LABEL, RESUME_URL } from "@/data/site";
import { getHomeContent, getSiteSettings, type StudioPanel } from "@/lib/sanity/content";

export async function Hero() {
  const [home, site] = await Promise.all([getHomeContent(), getSiteSettings()]);
  const { hero } = home;
  const resumeUrl = site.resumeUrl ?? RESUME_URL;

  return (
    <section className="relative overflow-hidden pb-20 pt-14 sm:pt-20 lg:pb-28 lg:pt-24">
      <div
        aria-hidden="true"
        className="grid-texture pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-60"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="animate-fade-up flex items-center gap-4">
              <Image
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                width={64}
                height={64}
                priority
                className="size-16 shrink-0 rounded-xl border border-border object-cover"
              />
              <span className="flex flex-col gap-1">
                <span className="text-sm font-medium text-ink">{hero.byline.name}</span>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-muted">
                  {hero.byline.role}
                </span>
                {site.location ? (
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-muted">
                    {site.location}
                  </span>
                ) : null}
              </span>
            </div>

            {site.availability ? <StatusIndicator status={site.availability} /> : null}

            <h1 className="animate-fade-up text-[clamp(2.25rem,7vw,4.25rem)] font-bold uppercase leading-[1.03] tracking-tight text-ink">
              {hero.headlineLead}{" "}
              <span className="text-purple">{hero.headlineHighlight}</span> {hero.headlineTail}
            </h1>

            <p
              className="animate-fade-up max-w-xl text-base leading-relaxed text-ink-secondary sm:text-lg"
              style={{ animationDelay: "0.08s" }}
            >
              {hero.supporting}
            </p>

            <div
              className="animate-fade-up flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              style={{ animationDelay: "0.16s" }}
            >
              <Button href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.label}
                <ArrowUpRightIcon className="text-[1.1rem]" />
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
                {hero.secondaryCta.label}
                <ArrowRightIcon className="text-[1.1rem]" />
              </Button>
              {resumeUrl ? (
                <Button href={resumeUrl} variant="outline" size="lg">
                  {RESUME_LABEL}
                  <ArrowRightIcon className="text-[1.1rem]" />
                </Button>
              ) : null}
            </div>
          </div>

          <StudioPanelView panel={hero.panel} />
        </div>
      </Container>
    </section>
  );
}

function StudioPanelView({ panel }: { panel: StudioPanel }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="inline-flex self-start rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-purple-soft">
        {panel.eyebrow}
      </span>

      <div className="rounded-xl border border-border bg-surface/80 p-5 shadow-[0_40px_90px_-70px_rgba(139,92,246,0.75)]">
        <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            {panel.title}
          </p>
          <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-success">
            <span aria-hidden="true" className="animate-pulse-dot size-1.5 rounded-full bg-success" />
            {panel.status}
          </p>
        </div>

        <div className="mt-5">
          <p className="font-mono text-[clamp(2.25rem,6vw,3.25rem)] font-semibold uppercase leading-none tracking-[0.06em] text-ink">
            {panel.name}
          </p>
          <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-purple-soft">
            {panel.tagline}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-secondary">
            {panel.description}
          </p>
        </div>

        <ul className="mt-5 flex flex-col divide-y divide-border border-y border-border">
          {panel.builds.map((item) => (
            <li key={item.index} className="flex items-start gap-3 py-3">
              <span className="font-mono text-[0.7rem] leading-5 text-purple-soft">
                {item.index}
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-ink">{item.title}</span>
                <span className="text-xs leading-relaxed text-ink-muted">
                  {item.description}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <ul className="mt-4 flex flex-wrap gap-2">
          {panel.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
