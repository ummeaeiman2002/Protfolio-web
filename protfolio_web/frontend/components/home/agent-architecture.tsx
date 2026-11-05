import { Card } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getHomeContent } from "@/lib/sanity/content";

export async function AgentArchitecture() {
  const { architecture } = await getHomeContent();

  return (
    <Section id="architecture" labelledBy="architecture-title">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          index="04"
          label="Behind the agent"
          headingId="architecture-title"
          title={architecture.title}
          description={architecture.description}
        />

        <Card className="bg-surface/60">
          <ol className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
            {architecture.nodes.map((node, index) => (
              <li
                key={node.title}
                className="relative flex-1 rounded-lg border border-border bg-background/60 p-4 after:absolute after:-bottom-4 after:left-1/2 after:-translate-x-1/2 after:text-ink-muted after:content-['↓'] last:after:hidden lg:after:-right-5 lg:after:bottom-1/2 lg:after:left-auto lg:after:translate-x-0 lg:after:translate-y-1/2 lg:after:content-['→']"
              >
                <p className="font-mono text-xs text-purple-soft">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-sm font-semibold text-ink">{node.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">{node.description}</p>
              </li>
            ))}
          </ol>
        </Card>

        <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">
          {architecture.note}
        </p>
      </Container>
    </Section>
  );
}
