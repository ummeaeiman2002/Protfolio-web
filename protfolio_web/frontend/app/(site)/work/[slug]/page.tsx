import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BulletList, CaseStudySection } from "@/components/projects/case-study-section";
import { Badge, Tag } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from "@/components/ui/icons";
import { Notice } from "@/components/ui/notice";
import { getAdjacentProjects, getProjectBySlug } from "@/data/projects";
import { PLACEHOLDER_NOTICE } from "@/data/site";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/work/${project.slug}`,
    type: "article",
  });
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = await getAdjacentProjects(project.slug);

  return (
    <article>
      <Section divided={false} className="pt-12 sm:pt-16">
        <Container className="flex flex-col gap-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 self-start rounded-md text-sm text-ink-secondary transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
          >
            <ArrowLeftIcon className="text-[1.05rem]" />
            All work
          </Link>

          <header className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="purple">{project.category}</Badge>
              {project.status ? <Badge>{project.status}</Badge> : null}
              {project.placeholder ? <Badge variant="placeholder">Placeholder</Badge> : null}
            </div>

            <h1
              id="case-study-title"
              className="max-w-3xl text-3xl font-semibold text-ink sm:text-4xl"
            >
              {project.title}
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-ink-secondary">
              {project.summary}
            </p>

            {project.placeholder ? (
              <Notice>
                {PLACEHOLDER_NOTICE} This case study is a structural outline and claims no client,
                metric or outcome.
              </Notice>
            ) : null}

            <ul className="flex flex-wrap gap-1.5" aria-label="Technology stack">
              {project.stack.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </header>
        </Container>
      </Section>

      <Section divided={false}>
        <Container className="flex max-w-3xl flex-col gap-10">
          <CaseStudySection title="Problem">
            <p>{project.problem}</p>
          </CaseStudySection>

          <CaseStudySection title="Approach">
            <p>{project.solution}</p>
          </CaseStudySection>

          <CaseStudySection title="What I engineered">
            <BulletList items={project.contributions} />
          </CaseStudySection>

          {project.workflow && project.workflow.length > 0 ? (
            <CaseStudySection title="Workflow / agent behaviour">
              <ol className="flex flex-col gap-3">
                {project.workflow.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span aria-hidden="true" className="font-mono text-xs text-purple-soft">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </CaseStudySection>
          ) : null}

          {project.architectureImage ? (
            <CaseStudySection title="Architecture">
              <Image
                src={project.architectureImage}
                alt={`Architecture diagram for ${project.title}`}
                width={1200}
                height={720}
                className="w-full rounded-lg border border-border"
              />
            </CaseStudySection>
          ) : null}

          {project.screenshots && project.screenshots.length > 0 ? (
            <CaseStudySection title="Screenshots">
              <ul className="grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((screenshot, index) => (
                  <li key={screenshot}>
                    <Image
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={960}
                      height={600}
                      className="w-full rounded-lg border border-border"
                    />
                  </li>
                ))}
              </ul>
            </CaseStudySection>
          ) : null}

          {project.outcome ? (
            <CaseStudySection title="Outcome">
              <p>{project.outcome}</p>
            </CaseStudySection>
          ) : null}

          {project.lessons && project.lessons.length > 0 ? (
            <CaseStudySection title="What the build taught me">
              <BulletList items={project.lessons} />
            </CaseStudySection>
          ) : null}

          {project.liveUrl || project.repositoryUrl ? (
            <CaseStudySection title="Links">
              <ul className="flex flex-col gap-2">
                {project.liveUrl ? (
                  <li>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-soft transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
                    >
                      Live demo
                      <ArrowUpRightIcon className="text-[1.05rem]" />
                    </a>
                  </li>
                ) : null}
                {project.repositoryUrl ? (
                  <li>
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-soft transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
                    >
                      Source repository
                      <ArrowUpRightIcon className="text-[1.05rem]" />
                    </a>
                  </li>
                ) : null}
              </ul>
            </CaseStudySection>
          ) : null}
        </Container>
      </Section>

      <Section>
        <Container className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Button href="/contact" size="lg">
              Discuss a similar project
              <ArrowUpRightIcon className="text-[1.1rem]" />
            </Button>

            <div className="flex flex-wrap gap-3">
              {previous ? (
                <Link
                  href={`/work/${previous.slug}`}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm text-ink-secondary transition-colors hover:border-purple hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
                >
                  <ArrowLeftIcon className="text-[1.05rem]" />
                  {previous.title}
                </Link>
              ) : null}
              {next ? (
                <Link
                  href={`/work/${next.slug}`}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-3.5 py-2 text-sm text-ink-secondary transition-colors hover:border-purple hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
                >
                  {next.title}
                  <ArrowRightIcon className="text-[1.05rem]" />
                </Link>
              ) : null}
            </div>
          </div>
        </Container>
      </Section>
    </article>
  );
}
