"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

const GITHUB_URL = "https://github.com/infrabeam1927";

function scrollToProjects() {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
}

const CODE_LINES = [
  { key: "role", value: '"Software Developer"' },
  { key: "background", value: '"Mechatronics Engineering"' },
  { key: "focus", value: '["Full-Stack", "Automation", "Fintech"]' },
  { key: "stack", value: '["Python", "TypeScript", "SQL", "React"]' },
  { key: "status", value: '"Building reliable systems"' },
];

function HeroCodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full max-w-md overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 shadow-2xl shadow-accent-500/10 dark:border-zinc-800"
    >
      <div className="flex items-center gap-1.5 border-b border-zinc-800 bg-zinc-900 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-amber-500/80" />
        <span className="h-3 w-3 rounded-full bg-accent-500/80" />
        <span className="ml-3 font-mono text-xs text-zinc-500">about.ts</span>
      </div>

      <div className="space-y-1.5 p-6 font-mono text-sm leading-relaxed">
        <p className="text-zinc-500">
          <span className="text-fuchsia-400">const</span> aaditya = {"{"}
        </p>
        {CODE_LINES.map((line, index) => (
          <motion.p
            key={line.key}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.12 }}
            className="pl-4"
          >
            <span className="text-sky-400">{line.key}</span>
            <span className="text-zinc-500">: </span>
            <span className="text-accent-400">{line.value}</span>
            <span className="text-zinc-500">,</span>
          </motion.p>
        ))}
        <p className="text-zinc-500">
          {"}"}
          <motion.span
            aria-hidden
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-accent-500 align-middle"
          />
        </p>
      </div>
    </motion.div>
  );
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

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col gap-8">
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
            Hi, I&apos;m <span className="text-gradient">Aaditya</span>. I
            bridge the gap between hardware precision and intelligent
            software automation.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
          >
            I&apos;m a Mechatronics graduate and developer specializing in
            building clean data automation and full-stack software solutions.
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

        <div className="flex justify-center lg:justify-end">
          <HeroCodeCard />
        </div>
      </div>
    </section>
  );
}
