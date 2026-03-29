import { ThemeToggle } from "@/components/theme-toggle";
import { Hero } from "@/components/hero";

export default function Page() {
  return (
    <div className="relative flex min-h-svh items-center justify-center p-6 font-open-runde">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-base">
        <Hero />
      </div>
    </div>
  );
}
