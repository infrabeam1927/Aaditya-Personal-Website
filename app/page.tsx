import { Aaditya } from "@/components/Aaditya/Aaditya";
import { About } from "@/components/About/About";
import { Experience } from "@/components/Experience/Experience";
import { Education } from "@/components/Education/Education";
import { Projects } from "@/components/Projects/Projects";
import { Contact } from "@/components/Contact/Contact";
import { Nav } from "@/components/Nav/Nav";

export default function Home() {
  return (
    <>
      <Nav />

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
