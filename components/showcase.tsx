/* eslint-disable @next/next/no-img-element */
"use client"

import { useSyncExternalStore } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  IconSquareArrowTopRight2,
  IconStar,
} from "@central-icons-react/round-filled-radius-3-stroke-2"
import { motion } from "motion/react"
import { projects } from "@/config/projects"

// Breakpoints mirror Tailwind's `sm` / `lg` so the column count matches the padding steps.
const COLUMN_QUERIES = [
  { query: "(min-width: 1024px)", columns: 3 },
  { query: "(min-width: 640px)", columns: 2 },
]

function subscribeToColumns(onChange: () => void) {
  const lists = COLUMN_QUERIES.map(({ query }) => window.matchMedia(query))
  lists.forEach((list) => list.addEventListener("change", onChange))
  return () =>
    lists.forEach((list) => list.removeEventListener("change", onChange))
}

function getColumnCount() {
  return (
    COLUMN_QUERIES.find(({ query }) => window.matchMedia(query).matches)
      ?.columns ?? 1
  )
}

function useColumnCount() {
  return useSyncExternalStore(subscribeToColumns, getColumnCount, () => 3)
}

export function ProjectShowcase() {
  const columnCount = useColumnCount()

  // Round-robin so `projects` order reads left-to-right, top-to-bottom.
  const columns = Array.from({ length: columnCount }, (_, c) =>
    projects
      .map((project, index) => ({ project, index }))
      .filter(({ index }) => index % columnCount === c)
  )

  return (
    <div
      className="grid gap-4 px-6 sm:px-10 md:px-16 lg:px-20"
      style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
    >
      {columns.map((column, c) => (
        <div key={c} className="flex flex-col gap-4">
          {column.map(({ project, index: i }) => (
            <motion.div
              key={project.src}
              initial={{ opacity: 0, filter: "blur(5px)", y: 8 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                ease: "easeOut",
                duration: 0.8,
                bounce: 0,
                delay: 0.4 + i * 0.1,
              }}
              className="overflow-hidden rounded-xl border"
            >
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: `${project.ratio} / 1`,
                  transform: "translateZ(0)",
                }}
              >
                {project.type === "video" ? (
                  <>
                    <div
                      aria-hidden
                      className="absolute inset-0 size-full bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url("${project.placeholder}")`,
                        filter: "blur(20px)",
                      }}
                    />
                    <video
                      src={`${project.src}#t=0.01`}
                      aria-label={project.alt}
                      loop
                      muted
                      autoPlay
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 size-full object-cover"
                    />
                  </>
                ) : (
                  <Image
                    src={project.src}
                    alt={project.alt}
                    width={1600}
                    height={Math.round(1600 / project.ratio)}
                    placeholder="blur"
                    blurDataURL={project.placeholder}
                    className="relative size-full object-cover"
                    unoptimized
                  />
                )}
              </div>
              <div className="flex items-center justify-between border-t px-3.5 py-2.5 text-sm">
                <div className="flex items-center gap-2">
                  {project.href ? (
                    <Link
                      href={project.href}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 font-medium [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5"
                    >
                      {project.title}
                      <IconSquareArrowTopRight2 className="text-muted-foreground" />
                    </Link>
                  ) : (
                    <span className="font-medium">{project.title}</span>
                  )}
                  {project.stars && (
                    <span
                      aria-label={`${project.stars} GitHub stars`}
                      className="inline-flex items-center gap-1 font-medium text-yellow-400 [&_svg]:size-3.5 [&_svg]:shrink-0"
                    >
                      <IconStar aria-hidden />
                      {project.stars}
                    </span>
                  )}
                </div>
                <span className="text-muted-foreground">{project.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  )
}
