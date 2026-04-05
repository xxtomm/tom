/**
 * Generate project JSON from a CDN image or video URL.
 *
 * Usage:
 *   pnpm placeholder <url>
 *
 * Examples:
 *   pnpm placeholder https://cdn.tomm.page/spell-cropped.png
 *   pnpm placeholder https://cdn.tomm.page/early-access.mp4
 *
 * For videos, ffmpeg is required to extract the first frame.
 * Copy the output and paste it into config/projects.ts
 */

import { execSync } from "node:child_process";
import { readFileSync, unlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import sharp from "sharp";
import { getPlaiceholder } from "plaiceholder";

const url = process.argv[2];

if (!url) {
  console.error("Usage: pnpm placeholder <image-or-video-url>");
  process.exit(1);
}

const isVideo = /\.(mp4|webm|mov|avi)(\?|#|$)/i.test(url);

let buffer;

if (isVideo) {
  const tmpVideo = join(tmpdir(), `placeholder-video-${Date.now()}.mp4`);
  const tmpFrame = join(tmpdir(), `placeholder-frame-${Date.now()}.png`);

  try {
    execSync(`curl -sL -o "${tmpVideo}" "${url}"`);
    execSync(
      `ffmpeg -y -i "${tmpVideo}" -vframes 1 -f image2 "${tmpFrame}" 2>/dev/null`
    );
    buffer = readFileSync(tmpFrame);
  } finally {
    try { unlinkSync(tmpVideo); } catch {}
    try { unlinkSync(tmpFrame); } catch {}
  }
} else {
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed to fetch ${url}: ${res.status}`);
    process.exit(1);
  }
  buffer = Buffer.from(await res.arrayBuffer());
}

const [meta, { base64 }] = await Promise.all([
  sharp(buffer).metadata(),
  getPlaiceholder(buffer, { size: 32 }),
]);

// Extract filename from URL for alt/title
const filename = new URL(url).pathname.split("/").pop().replace(/\.[^.]+$/, "");

const project = {
  type: isVideo ? "video" : "image",
  title: "",
  date: new Date().getFullYear().toString(),
  src: url,
  alt: filename,
  ratio: `${meta.width} / ${meta.height}`,
  placeholder: base64,
};

console.log(JSON.stringify(project, null, 2));
