import { ProjectCard } from "@/components/projects/project-card";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectGridProps = {
  projects: Project[];
  className?: string;
};

export function ProjectGrid({ projects, className }: ProjectGridProps) {
  return (
    <ul className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {projects.map((project) => (
        <li key={project.slug} className="flex">
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
