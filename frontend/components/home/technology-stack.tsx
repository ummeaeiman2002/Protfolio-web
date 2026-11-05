import { Card } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getHomeContent } from "@/lib/sanity/content";

export async function TechnologyStack() {
  const { technologyStack } = await getHomeContent();

  return (
    <Section id="stack" labelledBy="stack-title">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          index="07"
          label="Technology stack"
          headingId="stack-title"
          title={technologyStack.title}
          description={technologyStack.description}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {technologyStack.groups.map((group) => (
            <Card key={group.label} className="flex flex-col gap-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
                {group.label}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
