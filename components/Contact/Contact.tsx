"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/config";

const LINKS = [
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: GITHUB_URL,
    icon: Github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400"
        >
          Always open to conversations about fintech, software engineering,
          or anything at the intersection of hardware and code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="group flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 shadow-sm transition-all hover:-translate-y-1 hover:border-accent-500 hover:bg-accent-500 hover:text-white hover:shadow-lg hover:shadow-accent-500/30 active:scale-90 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
            >
              <link.icon className="h-6 w-6" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
