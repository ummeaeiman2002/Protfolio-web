import { Card } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getHomeContent } from "@/lib/sanity/content";

export async function Services() {
  const { services } = await getHomeContent();

  return (
    <Section id="services" labelledBy="services-title">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          index="05"
          label="Services"
          headingId="services-title"
          title={services.title}
          description={services.description}
        />

        <ul className="grid gap-5 sm:grid-cols-2">
          {services.items.map((service) => (
            <li key={service.slug} className="flex">
              <Card interactive className="flex h-full w-full flex-col gap-4">
                <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
                <p className="text-sm leading-relaxed text-ink-secondary">{service.summary}</p>

                <ul className="flex flex-col gap-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-ink-muted">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-purple/70" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-auto border-t border-border pt-4 text-xs text-ink-muted">
                  <span className="font-mono uppercase tracking-[0.16em] text-purple-soft">
                    Best for{" "}
                  </span>
                  {service.bestFor}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
