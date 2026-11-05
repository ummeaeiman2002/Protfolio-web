import Link from "next/link";
import { ProjectGrid } from "@/components/projects/project-grid";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { Notice } from "@/components/ui/notice";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFeaturedProjects } from "@/data/projects";
import { PLACEHOLDER_NOTICE } from "@/data/site";

export async function SelectedWork() {
  const projects = (await getFeaturedProjects()).slice(0, 3);
  const hasPlaceholders = projects.some((project) => project.placeholder);

  return (
    <Section id="selected-work" labelledBy="selected-work-title">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="02"
            label="Selected work"
            headingId="selected-work-title"
            title="Systems I've engineered."
            description="Case studies describe the problem, the approach, what was engineered and what was verified."
          />

          <Link
            href="/work"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md text-sm font-medium text-purple-soft transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
          >
            All work
            <ArrowUpRightIcon className="text-[1.05rem]" />
          </Link>
        </div>

        {projects.length > 0 ? (
          <div className="flex flex-col gap-5">
            <ProjectGrid projects={projects} />
            {hasPlaceholders ? <Notice>{PLACEHOLDER_NOTICE}</Notice> : null}
          </div>
        ) : (
          <p className="rounded-xl border border-dashed border-border bg-surface/50 px-6 py-10 text-sm text-ink-secondary">
            Case studies are being prepared. Verified project write-ups will appear here once the
            owner confirms the details.
          </p>
        )}

        <Button href="/contact" variant="secondary" className="self-start">
          Discuss a similar project
        </Button>
      </Container>
    </Section>
  );
}
