import { Container, Section } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { getHomeContent } from "@/lib/sanity/content";

export async function CurrentlyBuilding() {
  const { building } = await getHomeContent();

  return (
    <Section id="building" labelledBy="building-title">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          index="09"
          label="Python & AI"
          headingId="building-title"
          title={building.title}
          description={building.description}
        />

        {building.items.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {building.items.map((item) => (
              <li
                key={item.title}
                className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  {item.type ? <Badge variant="purple">{item.type}</Badge> : null}
                </div>
                {item.period ? (
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-muted">
                    {item.period}
                  </p>
                ) : null}
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
            title="Python & AI activity log is being updated"
            description="Current Python projects, internships, learning and automation work will be listed here once they are verified and ready to share. Nothing is listed until it can actually be shown."
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
