import { ProjectGrid } from "@/components/projects/project-grid";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { EmptyState } from "@/components/ui/empty-state";
import { Notice } from "@/components/ui/notice";
import { SectionHeading } from "@/components/ui/section-heading";
import { getPublishedProjects } from "@/data/projects";
import { PLACEHOLDER_NOTICE } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Work",
  description:
    "Selected AI agent, automation and AI application case studies, describing the problem, the engineering and what was verified.",
  path: "/work",
});

export default async function WorkPage() {
  const projects = await getPublishedProjects();
  const hasPlaceholders = projects.some((project) => project.placeholder);

  return (
    <Section divided={false} className="pt-16 sm:pt-20 lg:pt-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          level="h1"
          label="Work"
          headingId="work-title"
          title="Problems, systems and what was engineered"
          description="Each case study follows the same structure: the problem, the approach, what was personally built, and only the results that can be verified."
        />

        {projects.length > 0 ? (
          <div className="flex flex-col gap-5">
            <ProjectGrid projects={projects} />
            {hasPlaceholders ? <Notice>{PLACEHOLDER_NOTICE}</Notice> : null}
          </div>
        ) : (
          <EmptyState
            title="No published case studies yet"
            description="Project write-ups appear here once the owner confirms the details. Nothing is published until it can be demonstrated."
            action={
              <Button href="/contact" variant="secondary" size="sm" className="mt-2">
                Discuss your project
              </Button>
            }
          />
        )}
      </Container>
    </Section>
  );
}
