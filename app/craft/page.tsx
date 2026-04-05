"use client";

import Link from "next/link";
import { IconArrowUndoUp} from "@central-icons-react/round-filled-radius-3-stroke-2";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

import { ProjectShowcase } from "@/components/showcase";

export default function CraftPage() {
  return (
    <div className="dark relative flex min-h-svh flex-col font-open-runde text-white" style={{ backgroundColor: "#111110", colorScheme: "dark" }}>

      <main className="flex flex-1 flex-col">
        <section className="px-6 pt-12 pb-8 sm:px-10 md:px-16 lg:px-20">
          <motion.div
            initial={{ opacity: 0, filter: "blur(5px)", y: 8 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ ease: "easeOut", duration: 0.8, bounce: 0 }}
          >
            <Button variant="ghost" className="rounded-full" asChild>
              <Link href="/">
                <IconArrowUndoUp /> Back
              </Link>
            </Button>
          </motion.div>
        </section>

        <section className="pb-16">
          <ProjectShowcase />
        </section>
      </main>
    </div>
  );
}
