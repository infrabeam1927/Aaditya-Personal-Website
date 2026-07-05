import type { Project, ProjectTag } from "./types";

export type ProjectFilter = "All" | ProjectTag;

export const PROJECT_FILTERS: ProjectFilter[] = ["All", "AI/Python", "Full-Stack"];

export function filterProjects(
  projects: Project[],
  filter: ProjectFilter
): Project[] {
  if (filter === "All") return projects;
  return projects.filter((project) => project.tag === filter);
}
