import Image from "next/image";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getHomeContent, getSiteSettings } from "@/lib/sanity/content";

export async function About() {
  const [home, site] = await Promise.all([getHomeContent(), getSiteSettings()]);
  const { about } = home;

  return (
    <Section id="about" labelledBy="about-title">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.6fr_1.15fr] lg:gap-12">
          <SectionHeading
            index="08"
            label="About"
            headingId="about-title"
            title={
              <>
                {about.titleLead} <span className="text-purple">{about.titleHighlight}</span>{" "}
                {about.titleTail}
              </>
            }
          />

          <figure className="flex flex-col gap-3">
            <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-[0_40px_90px_-70px_rgba(139,92,246,0.75)]">
              <Image
                src={about.portrait.src}
                alt={about.portrait.alt}
                width={480}
                height={600}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <figcaption className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-muted">
              {about.caption}
            </figcaption>
          </figure>

          <div className="flex flex-col gap-5 text-base leading-relaxed text-ink-secondary">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <p className="rounded-lg border border-border bg-surface/60 px-4 py-3 text-sm text-ink">
              {about.callout || site.coreMessage}
            </p>

            <ul className="mt-1 flex flex-col gap-2.5">
              {about.principles.map((principle) => (
                <li key={principle} className="flex gap-3 text-sm text-ink-muted">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-purple/70" />
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
