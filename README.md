# Aaditya — Personal Portfolio

A personal portfolio site built with Next.js 14 (App Router, TypeScript), Tailwind CSS, and Framer Motion.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (dark-mode-first, emerald accent)
- **Animation:** Framer Motion
- **Content:** Local JSON in `/data` (`projects.json`, `experience.json`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
/app            layout, page, global styles
/components     Aaditya (hero), About, Experience, Projects, Contact, ThemeToggle
/data           projects.json, experience.json
/lib            ThemeContext, types, filter logic
```

## Editing Content

Update `/data/projects.json` and `/data/experience.json` — no component code changes required.
