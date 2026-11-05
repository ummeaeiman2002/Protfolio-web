import { Container, Section } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { CURRENTLY_BUILDING } from "@/data/content";

export function CurrentlyBuilding() {
  return (
    <Section id="building" labelledBy="building-title">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          index="09"
          label="Currently building"
          headingId="building-title"
          title="Always building something."
          description="Only work that is verified and ready to be shown publicly is listed here."
        />

        {CURRENTLY_BUILDING.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CURRENTLY_BUILDING.map((item) => (
              <li
                key={item.title}
                className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-6"
              >
                <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-secondary">{item.description}</p>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {item.stack.map((tech) => (
                    <li key={tech} className="rounded-md border border-border bg-background px-2 py-1 font-mono text-xs text-ink-muted">
                      {tech}
                    </li>
                  ))}
                </ul>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-soft transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
                  >
                    View repository
                    <ArrowUpRightIcon className="text-[1.05rem]" />
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            title="Nothing public at the moment"
            description="Verified repositories and in-progress builds will be listed here once they are ready to share. Nothing is listed until it can actually be shown."
            action={
              <Button href="/work" variant="secondary" size="sm" className="mt-2">
                See completed work
              </Button>
            }
          />
        )}
      </Container>
    </Section>
  );
}
