"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import type { ExperienceItem } from "@/lib/types";
import { EXPERIENCE_TYPE_STYLES } from "@/lib/colors";

export function TimelineCard({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const Icon = item.type === "education" ? GraduationCap : Briefcase;
  const styles = EXPERIENCE_TYPE_STYLES[item.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.05 }}
      className="relative pl-16"
    >
      <span
        className={`absolute left-4 top-1.5 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 bg-white dark:bg-zinc-950 ${styles.ring} ${styles.icon}`}
      >
        <Icon className="h-4 w-4" />
      </span>

      <div
        className={`rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-colors dark:border-zinc-800 dark:bg-zinc-900 ${styles.hoverBorder}`}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {item.role}
          </h3>
          <span
            className={`font-mono text-xs uppercase tracking-widest ${styles.period}`}
          >
            {item.period}
          </span>
        </div>
        <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {item.organization}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {item.description}
        </p>
        <ul className="mt-4 space-y-2">
          {item.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400"
            >
              <span
                className={`mt-2 h-1 w-1 flex-shrink-0 rounded-full ${item.type === "education" ? "bg-sky-500" : "bg-accent-500"}`}
              />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
