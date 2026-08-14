"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="relative flex h-9 w-16 items-center rounded-full border border-zinc-300 bg-zinc-100 px-1 transition-all active:scale-95 dark:border-zinc-700 dark:bg-zinc-800"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md dark:bg-zinc-950"
        style={{ marginLeft: isDark ? "auto" : 0 }}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-accent-400" />
        ) : (
          <Sun className="h-4 w-4 text-accent-500" />
        )}
      </motion.span>
    </button>
  );
}
