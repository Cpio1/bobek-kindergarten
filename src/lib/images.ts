import fs from "node:fs";
import path from "node:path";

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const IMAGES_DIR = path.join(process.cwd(), "public", "images");

export type SiteImages = {
  hero: string | null;
  about: string | null;
  gallery: string[];
};

function toPublicSrc(file: string) {
  return `/images/${encodeURIComponent(file)}`;
}

/**
 * Читает public/images во время сборки:
 * main-page.*  → главный экран,
 * main-page2.* → раздел «Біз туралы»,
 * остальные   → галерея (без повторов).
 */
export function getSiteImages(): SiteImages {
  let files: string[] = [];
  try {
    files = fs
      .readdirSync(IMAGES_DIR, { withFileTypes: true })
      .filter((d) => d.isFile() && IMAGE_EXT.has(path.extname(d.name).toLowerCase()))
      .map((d) => d.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    return { hero: null, about: null, gallery: [] };
  }

  const baseName = (f: string) => path.parse(f).name.toLowerCase();
  const heroFile = files.find((f) => baseName(f) === "main-page") ?? null;
  const aboutFile = files.find((f) => baseName(f) === "main-page2") ?? null;

  // Убираем дубликаты с одинаковым именем, но разным расширением
  const seen = new Set<string>(["main-page", "main-page2"]);
  const gallery: string[] = [];
  for (const f of files) {
    const name = baseName(f);
    if (seen.has(name)) continue;
    seen.add(name);
    gallery.push(toPublicSrc(f));
  }

  return {
    hero: heroFile ? toPublicSrc(heroFile) : null,
    about: aboutFile ? toPublicSrc(aboutFile) : null,
    gallery,
  };
}
