"use client";

import { motion } from "framer-motion";
import {
  CircleDot,
  UtensilsCrossed,
  Trophy,
  Dumbbell,
} from "lucide-react";
import { INTEREST_ACCENTS } from "@/lib/colors";

interface Interest {
  label: string;
  icon: typeof CircleDot;
}

const INTERESTS: Interest[] = [
  { label: "Football", icon: Trophy },
  { label: "Squash", icon: Dumbbell },
  { label: "Table Tennis", icon: CircleDot },
  { label: "Vegetarian Cooking Experiments", icon: UtensilsCrossed },
];

export function About() {
  return (
    <section
      id="about"
      className="section-padding scroll-mt-24 bg-zinc-50/70 py-24 dark:bg-white/[0.02] sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          About Me
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              I approach software with an engineering mindset — one built on
              rigor, systems thinking, and a bias toward precision. That
              mindset now drives my work in full-stack development, data
              automation, and modernizing legacy technical stacks. I work
              primarily in{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                Python
              </span>
              ,{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                SQL
              </span>
              , and{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                React
              </span>
              , focusing on turning manual, error-prone processes into
              reliable, automated systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="font-mono text-sm uppercase tracking-widest text-accent-600 dark:text-accent-400">
                Beyond the Code
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {INTERESTS.map((interest, index) => (
                  <div
                    key={interest.label}
                    className="flex flex-col items-start gap-2 rounded-xl border border-zinc-200 bg-white p-4 transition-colors hover:border-accent-400 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-accent-500"
                  >
                    <interest.icon
                      className={`h-5 w-5 ${INTEREST_ACCENTS[index % INTEREST_ACCENTS.length]}`}
                    />
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {interest.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
