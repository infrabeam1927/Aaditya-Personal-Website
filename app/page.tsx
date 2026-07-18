import { Aaditya } from "@/components/Aaditya/Aaditya";
import { About } from "@/components/About/About";
import { Experience } from "@/components/Experience/Experience";
import { Education } from "@/components/Education/Education";
import { Projects } from "@/components/Projects/Projects";
import { Contact } from "@/components/Contact/Contact";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/70 backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/70">
        <nav className="section-padding mx-auto flex max-w-6xl items-center justify-between py-4">
          <a href="#home" className="font-mono text-sm font-semibold tracking-tight">
            aaditya<span className="text-accent-500">.dev</span>
          </a>

          <div className="hidden items-center gap-8 sm:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-accent-600 dark:text-zinc-400 dark:hover:text-accent-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <ThemeToggle />
        </nav>
      </header>

      <main>
        <Aaditya />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      <footer className="section-padding border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
        &copy; {new Date().getFullYear()} Aaditya. Built with Next.js, Tailwind CSS, and Framer Motion.
      </footer>
    </>
  );
}
