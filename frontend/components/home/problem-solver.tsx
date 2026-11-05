import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Container, Section } from "@/components/ui/container";
import { Notice } from "@/components/ui/notice";
import { SectionHeading } from "@/components/ui/section-heading";
import { PLACEHOLDER_NOTICE } from "@/data/site";
import { getHomeContent } from "@/lib/sanity/content";
import { cn } from "@/lib/utils";

export async function ProblemSolver() {
  const { problemSolver } = await getHomeContent();
  const rows = problemSolver.rows;
  const hasPlaceholderOutcome = rows.some((row) => row.outcomeIsPlaceholder);

  return (
    <Section id="problem-solver" labelledBy="problem-solver-title">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          index="03"
          label="Problem solver"
          headingId="problem-solver-title"
          title={problemSolver.title}
          description={problemSolver.description}
        />

        <ul className="flex flex-col gap-4">
          {rows.map((row) => (
            <li key={row.problem}>
              <Card className="grid gap-6 md:grid-cols-3">
                <Cell label="Problem">{row.problem}</Cell>
                <Cell label="AI system" accent>
                  {row.system}
                </Cell>
                <Cell label="Outcome" muted={row.outcomeIsPlaceholder}>
                  {row.outcome}
                </Cell>
              </Card>
            </li>
          ))}
        </ul>

        {hasPlaceholderOutcome ? <Notice>{PLACEHOLDER_NOTICE}</Notice> : null}
      </Container>
    </Section>
  );
}

function Cell({
  label,
  children,
  accent = false,
  muted = false,
}: {
  label: string;
  children: ReactNode;
  accent?: boolean;
  muted?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <p
        className={cn(
          "font-mono text-xs uppercase tracking-[0.18em]",
          accent ? "text-purple-soft" : "text-ink-muted",
        )}
      >
        {label}
      </p>
      <p className={cn("text-sm leading-relaxed", muted ? "text-ink-muted" : "text-ink-secondary")}>
        {children}
      </p>
    </div>
  );
}
