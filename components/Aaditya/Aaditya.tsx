"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

const GITHUB_URL = "https://github.com/infrabeam1927";

function scrollToProjects() {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
}

export function Aaditya() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden section-padding"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl animate-blob [animation-delay:2s]" />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm uppercase tracking-widest text-accent-600 dark:text-accent-400"
        >
          Software Developer &middot; Mechatronics Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          Hi, I&apos;m <span className="text-gradient">Aaditya</span>. I bridge
          the gap between hardware precision and intelligent software
          automation.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
        >
          Coming from a Mechatronics Engineering background at McMaster
          University, I&apos;m transitioning into a developer role in
          fintech — applying an engineer&apos;s discipline to building
          reliable, automated software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <button
            onClick={scrollToProjects}
            className="group inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 font-medium text-white shadow-lg shadow-accent-500/20 transition-all hover:bg-accent-600 hover:shadow-accent-500/30 active:scale-95"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 font-medium text-zinc-800 transition-all hover:border-accent-500 hover:text-accent-600 active:scale-95 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-accent-400 dark:hover:text-accent-400"
          >
            <Github className="h-4 w-4" />
            View GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
