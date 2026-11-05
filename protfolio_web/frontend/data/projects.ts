import { cacheLife, cacheTag } from "next/cache";
import { sanityClient } from "@/lib/sanity/client";
import { publishedProjectsQuery } from "@/lib/sanity/queries";

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  contributions: string[];
  stack: string[];
  workflow?: string[];
  architectureImage?: string;
  screenshots?: string[];
  outcome?: string;
  lessons?: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
  published: boolean;
  status?: string;
  /**
   * Marks a structural outline that still needs real details. Placeholder
   * entries are clearly labelled in the UI and MUST be replaced or removed
   * before launch.
   */
  placeholder?: boolean;
};

/**
 * Published projects from Sanity, ordered by the author's manual order.
 *
 * Cached with a time-based profile and the `projects` tag so it can be
 * revalidated on demand. When Sanity is not configured (or is unreachable)
 * this resolves to an empty list so pages render an honest empty state
 * instead of crashing.
 */
export async function getPublishedProjects(): Promise<Project[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("projects");

  if (!sanityClient) return [];

  try {
    const projects = await sanityClient.fetch<Project[]>(publishedProjectsQuery);
    return projects ?? [];
  } catch (error) {
    console.error("[sanity] Failed to load published projects:", error);
    return [];
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getPublishedProjects();
  return projects.filter((project) => project.featured);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const projects = await getPublishedProjects();
  return projects.find((project) => project.slug === slug);
}

export async function getAdjacentProjects(slug: string): Promise<{
  previous?: Project;
  next?: Project;
}> {
  const projects = await getPublishedProjects();
  const index = projects.findIndex((project) => project.slug === slug);

  if (index === -1) return {};

  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
