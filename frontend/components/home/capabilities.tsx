import { Card } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getHomeContent } from "@/lib/sanity/content";

export async function Capabilities() {
  const { capabilities } = await getHomeContent();

  return (
    <Section id="capabilities" labelledBy="capabilities-title" divided={false}>
      <Container className="flex flex-col gap-12">
        <SectionHeading
          index="01"
          label="Capabilities"
          headingId="capabilities-title"
          title={capabilities.title}
          description={capabilities.description}
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.items.map((capability) => (
            <li key={capability.index} className="flex">
              <Card interactive className="flex h-full w-full flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="font-mono text-xs text-purple-soft">
                    {capability.index}
                  </span>
                  <span aria-hidden="true" className="h-px flex-1 bg-border" />
                </div>

                <h3 className="text-lg font-semibold text-ink">{capability.title}</h3>
                <p className="text-sm leading-relaxed text-ink-secondary">{capability.description}</p>

                <ul className="mt-1 flex flex-col gap-2">
                  {capability.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-ink-muted">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-purple/70" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
