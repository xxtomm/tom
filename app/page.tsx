"use client";

import { useState } from "react";
import Link from "next/link";
import { SlideUpText } from "@/components/slide-up-text";
import { Button } from "@/components/ui/button";
import {
  IconCheckmark1,
  IconEmail1,
  IconTelegram,
} from "@central-icons-react/round-filled-radius-3-stroke-2";
import { AnimatePresence, motion } from "motion/react";
import { siteConfig } from "@/config/site";

export default function Page() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(siteConfig.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  return (
    <div className="flex min-h-svh items-center justify-center p-6 font-open-runde">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-base">
        <div className="gap-3 flex flex-col">
          <SlideUpText
            split="lines"
            className="font-medium"
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
          >
            {`${siteConfig.name} - ${siteConfig.title}`}
          </SlideUpText>
          <div>
            <p>You may now add components and start building.</p>
            <p>We&apos;ve already added the button component for you.</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-2">
          <Button
            variant={"default"}
            aria-label="Send Message via Telegram"
            className="shimmer-hover pr-3! cursor-pointer rounded-full transition-transform duration-150 ease-out will-change-transform active:scale-[0.97] flex items-center gap-1.5"
            asChild
          >
            <Link href={siteConfig.links.telegram} target="_blank">
            <IconTelegram aria-hidden />
            <span className="shimmer-text font-medium">Send Message</span>
            </Link>
          </Button>
          <Button
            variant={"secondary"}
            aria-label="Copy email address"
            onClick={handleCopy}
            className="pr-3! cursor-pointer rounded-full transition-transform duration-150 ease-out will-change-transform active:scale-[0.97] flex items-center gap-1.5"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={isCopied ? "check" : "copy"}
                initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  bounce: 0,
                }}
              >
                {isCopied ? <IconCheckmark1 /> : <IconEmail1 aria-hidden />}
              </motion.div>
            </AnimatePresence>
            <span className="font-medium">Copy Email</span>
          </Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  );
}
