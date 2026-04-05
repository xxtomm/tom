"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  IconAudio,
  IconCheckmark1,
  IconDiscord,
  IconDotGrid1x3HorizontalTight,
  IconEmail1,
  IconGithub,
  IconPaintBrush,
  IconPencilLine,
  IconPullRequest,
  IconRocket,
  IconTelegram,
  IconThinkingBubble,
  IconWindowCursor,
  IconX,
} from "@central-icons-react/round-filled-radius-3-stroke-2";
import { AnimatePresence, motion } from "motion/react";
import { Menu } from "@base-ui/react/menu";
import { Button } from "@/components/ui/button";
import { getAge, siteConfig } from "@/config/site";

const heroIcons = [
  IconPaintBrush,
  IconPencilLine,
  IconAudio,
  IconRocket,
  IconThinkingBubble,
  IconPullRequest,
];

export function Hero() {
  const [isCopied, setIsCopied] = useState(false);
  const [iconIndex, setIconIndex] = useState(0);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    setIconIndex(Math.floor(Math.random() * heroIcons.length));
  }, []);

  const RandomIcon = heroIcons[iconIndex];

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(siteConfig.email);
    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    setIsCopied(true);
    copyTimeoutRef.current = setTimeout(() => setIsCopied(false), 2000);
  }, []);

  return (
    <div className="gap-4 flex flex-col">
      <h1 className="flex gap-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 items-center">
        <span className="font-medium">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, filter: "blur(5px)", y: 8 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ ease: "easeOut", duration: 0.8, bounce: 0 }}
          >
            <Link href={siteConfig.links.x} target="_blank">
              {siteConfig.name},&nbsp;
            </Link>
          </motion.span>
          <motion.span
            className="inline-block text-accent-foreground/75"
            initial={{ opacity: 0, filter: "blur(5px)", y: 8 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              ease: "easeOut",
              duration: 0.8,
              bounce: 0,
            }}
          >
            {siteConfig.title}
          </motion.span>
        </span>
        <motion.div
          className="font-medium"
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            type: "spring",
            duration: 1,
            bounce: 0,
            delay: 0.8,
          }}
        >
          <RandomIcon className="text-blue-500" />
        </motion.div>
        <Menu.Root>
          <Menu.Trigger
            render={
              <Button
                variant={"ghost"}
                size={'icon'}
                aria-label="Links"
                className="ml-auto cursor-pointer rounded-full transition-transform duration-150 ease-out will-change-transform active:scale-[0.97] flex items-center gap-1.5"
              >
                <IconDotGrid1x3HorizontalTight />
              </Button>
            }
          />
          <Menu.Portal>
            <Menu.Positioner sideOffset={8} align="end">
              <Menu.Popup className="menu-popup z-50 min-w-36 overflow-hidden rounded-xl border bg-popover p-1 text-popover-foreground shadow-md">
                <Menu.Item
                  render={<Link href={siteConfig.links.x} target="_blank" />}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm font-medium outline-none hover:bg-muted focus:bg-muted [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                >
                  <IconX /> X (Twitter)
                </Menu.Item>
                <Menu.Item
                  render={<Link href={siteConfig.links.github} target="_blank" />}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm font-medium outline-none hover:bg-muted focus:bg-muted [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                >
                  <IconGithub /> GitHub
                </Menu.Item>
                <Menu.Item
                  render={<Link href={siteConfig.links.discord} target="_blank" />}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm font-medium outline-none hover:bg-muted focus:bg-muted [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
                >
                  <IconDiscord /> Discord
                </Menu.Item>
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        </Menu.Root>
      </h1>
      <div
        className="gap-1 flex flex-col"
      >
        <motion.p
         initial={{ opacity: 0, filter: "blur(5px)", y: 8 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{
          ease: "easeOut",
          duration: 0.8,
          bounce: 0,
          delay: 0.1,
        }} className="font-medium text-muted-foreground">
          I&apos;m a {getAge()} y/o{" "}
          <span className="text-primary">design engineer</span>{" "}
          who cares deeply about craft, detail, and the{" "}
          <span className=" font-bold font-caveat text-xl pr-1 leading-0 whitespace-nowrap bg-clip-text text-transparent bg-[linear-gradient(180deg,oklch(0.40_0.29_291),oklch(0.74_0.15_19))]">
            little things
          </span>{" "}
          that make a{" "}
          <span className="font-serif text-primary text-[17px] leading-0">difference</span>.
        </motion.p>
        <motion.p
         initial={{ opacity: 0, filter: "blur(5px)", y: 8 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{
          ease: "easeOut",
          duration: 0.8,
          bounce: 0,
          delay: 0.2,
        }} className="font-medium text-muted-foreground">
          I created{" "}
          <Link
            href={siteConfig.links.spell_repo}
            target="_blank"
            className="text-primary underline underline-offset-2"
          >
            @spell_ui
          </Link>, and I spend most of my time blending design and code to make
          {" "}
          <Link
            href="/craft"
            className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 gap-1 items-baseline inline-flex align-baseline text-primary underline underline-offset-2"
          >
            <IconWindowCursor className="my-auto" />interfaces
          </Link>{" "}
          that feel right.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, filter: "blur(5px)", y: 8 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{
          ease: "easeOut",
          duration: 0.8,
          bounce: 0,
          delay: 0.3,
        }}
        className="flex justify-start items-center gap-2"
      >
        <Button
          variant={"default"}
          aria-label="Send Message via Telegram"
          className="shimmer-hover text-[15px] pr-3! cursor-pointer rounded-full transition-transform duration-150 ease-out will-change-transform active:scale-[0.97] flex items-center gap-1.5"
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
          className="pr-3! text-[15px] cursor-pointer rounded-full transition-transform duration-150 ease-out will-change-transform active:scale-[0.97] flex items-center gap-1.5"
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
      </motion.div>
    </div>
  );
}
