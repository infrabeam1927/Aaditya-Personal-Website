"use client";

import { motion } from "framer-motion";
import educationData from "@/data/education.json";
import type { ExperienceItem } from "@/lib/types";
import { TimelineCard } from "@/components/Timeline/TimelineCard";

const education = educationData as ExperienceItem[];

export function Education() {
  return (
    <section id="education" className="section-padding scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          Education
        </motion.h2>

        <div className="relative mt-12 space-y-10 before:absolute before:left-4 before:top-2 before:h-full before:w-px before:-translate-x-1/2 before:bg-zinc-200 dark:before:bg-zinc-800">
          {education.map((item, index) => (
            <TimelineCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
