"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Hero } from "@/components/hero";

export default function Page() {
  return (
    <div className="relative flex min-h-svh flex-col font-open-runde">
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      <main className="flex flex-1 flex-col items-center justify-center">
        <section className="px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="max-w-md text-base">
            <Hero />
          </div>
        </section>
      </main>

    </div>
  );
}
