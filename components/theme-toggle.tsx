"use client";

import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  IconAppearanceDarkMode,
  IconAppearanceLightMode,
} from "@central-icons-react/round-filled-radius-3-stroke-2";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <motion.div
      animate={{ rotate: resolvedTheme === "dark" ? -180 : 0 }}
      transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
    >
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle theme"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className="cursor-pointer rounded-full"
      >
        <IconAppearanceLightMode aria-hidden className="size-5 dark:hidden" />
        <IconAppearanceDarkMode
          aria-hidden
          className="size-5 hidden dark:block"
        />
      </Button>
    </motion.div>
  );
}
