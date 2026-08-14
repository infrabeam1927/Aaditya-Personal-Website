"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import projectsData from "@/data/projects.json";
import type { Project } from "@/lib/types";
import { PROJECT_FILTERS, filterProjects, ProjectFilter } from "@/lib/filterProjects";
import { GITHUB_URL } from "@/lib/config";
import { ProjectCard } from "./ProjectCard";

const projects = projectsData as Project[];

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");

  const visibleProjects = useMemo(
    () => filterProjects(projects, filter),
    [filter]
  );

  return (
    <section
      id="projects"
      className="section-padding scroll-mt-24 bg-zinc-50/70 py-24 dark:bg-white/[0.02] sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          Projects
        </motion.h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {PROJECT_FILTERS.map((option) => {
            const active = option === filter;
            return (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all active:scale-95 ${
                  active
                    ? "text-white"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-accent-500"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{option}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>

          <motion.a
            layout
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="group relative flex flex-col items-start justify-between gap-4 overflow-hidden rounded-2xl border border-accent-500/30 bg-gradient-to-br from-accent-500/10 via-zinc-50 to-zinc-50 p-8 dark:from-accent-500/10 dark:via-zinc-900 dark:to-zinc-900 sm:col-span-2 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent-500 text-white">
                <Github className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  More Open-Source Projects
                </h3>
                <p className="mt-1 max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
                  This is home to all my active repositories, resume
                  projects, and open-source contributions — explore the full
                  history of what I&apos;ve built.
                </p>
              </div>
            </div>

            <span className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-accent-500 px-5 py-2.5 font-medium text-white transition-transform group-hover:translate-x-1">
              Visit GitHub
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
