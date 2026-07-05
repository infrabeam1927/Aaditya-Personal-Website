export type ProjectTag = "AI/Python" | "Full-Stack";

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  tag: ProjectTag;
  codeUrl: string;
}

export type ExperienceType = "work" | "education";

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: ExperienceType;
  description: string;
  highlights: string[];
}

export type Theme = "light" | "dark";
