import type { ExperienceType, ProjectTag } from "./types";

export const PROJECT_TAG_STYLES: Record<ProjectTag, string> = {
  "Full-Stack":
    "bg-accent-100 text-accent-700 dark:bg-accent-900/40 dark:text-accent-300",
  Automation:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  Games:
    "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-300",
};

export const EXPERIENCE_TYPE_STYLES: Record<
  ExperienceType,
  { icon: string; ring: string; period: string; hoverBorder: string }
> = {
  work: {
    icon: "text-accent-600 dark:text-accent-400",
    ring: "border-accent-500",
    period: "text-accent-600 dark:text-accent-400",
    hoverBorder: "hover:border-accent-400 dark:hover:border-accent-500",
  },
  education: {
    icon: "text-sky-600 dark:text-sky-400",
    ring: "border-sky-500",
    period: "text-sky-600 dark:text-sky-400",
    hoverBorder: "hover:border-sky-400 dark:hover:border-sky-500",
  },
};

export const INTEREST_ACCENTS = [
  "text-accent-500",
  "text-sky-500",
  "text-amber-500",
  "text-fuchsia-500",
];
