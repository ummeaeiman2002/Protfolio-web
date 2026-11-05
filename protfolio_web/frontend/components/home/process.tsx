import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getHomeContent } from "@/lib/sanity/content";

export async function Process() {
  const { process } = await getHomeContent();

  return (
    <Section id="process" labelledBy="process-title">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          index="06"
          label="Development process"
          headingId="process-title"
          title={process.title}
          description={process.description}
        />

        <ol className="flex flex-col">
          {process.steps.map((step, index) => (
            <li
              key={step.index}
              className="grid gap-4 border-t border-border py-6 first:border-t-0 first:pt-0 md:grid-cols-[auto_1fr_1fr] md:gap-8"
            >
              <p aria-hidden="true" className="font-mono text-xs text-purple-soft">
                {step.index}
              </p>

              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-ink">
                  {step.title}
                  <span className="sr-only"> (step {index + 1})</span>
                </h3>
                <p className="text-sm leading-relaxed text-ink-secondary">{step.description}</p>
              </div>

              <p className="text-xs text-ink-muted md:pt-1">
                <span className="font-mono uppercase tracking-[0.16em] text-purple-soft">
                  Output{" "}
                </span>
                {step.deliverable}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
