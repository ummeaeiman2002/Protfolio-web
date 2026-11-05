import Link from "next/link";
import { Badge, Tag } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const href = `/work/${project.slug}`;

  return (
    <Card interactive className="group flex h-full w-full flex-col gap-5">
      <div className="flex items-center justify-between gap-3">
        <Badge variant="purple">{project.category}</Badge>
        {project.placeholder ? <Badge variant="placeholder">Placeholder</Badge> : null}
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-ink">
          <Link
            href={href}
            className="rounded-sm transition-colors hover:text-purple-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
          >
            {project.title}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-ink-secondary">{project.summary}</p>
      </div>

      <ul className="flex flex-wrap gap-1.5" aria-label={`${project.title} stack`}>
        {project.stack.slice(0, 4).map((item) => (
          <li key={item}>
            <Tag>{item}</Tag>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-1.5 self-start text-sm font-medium text-purple-soft transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple"
      >
        Read case study
        <ArrowUpRightIcon className="text-[1.05rem] transition-transform duration-200 motion-safe:group-hover:translate-x-0.5" />
      </Link>
    </Card>
  );
}
