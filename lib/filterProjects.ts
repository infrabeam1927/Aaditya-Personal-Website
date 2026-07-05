import type { Project, ProjectTag } from "./types";

export type ProjectFilter = "All" | ProjectTag;

export const PROJECT_FILTERS: ProjectFilter[] = [
  "All",
  "Full-Stack",
  "Automation",
  "Games",
];

export function filterProjects(
  projects: Project[],
  filter: ProjectFilter
): Project[] {
  if (filter === "All") return projects;
  return projects.filter((project) => project.tag === filter);
}
