import fs from "node:fs";
import path from "node:path";

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);
const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGES_DIR = path.join(PUBLIC_DIR, "images");

export type SiteImages = {
  hero: string | null;
  about: string | null;
  gallery: string[];
};

/** Файлы-изображения в папке (пустой список, если папки нет) */
function listImages(dir: string): string[] {
  try {
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((d) => d.isFile() && IMAGE_EXT.has(path.extname(d.name).toLowerCase()))
      .map((d) => d.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch {
    return [];
  }
}

const baseName = (f: string) => path.parse(f).name.toLowerCase();

/** Путь от корня сайта: /images/a.jpeg или /a.jpeg */
function toPublicSrc(dir: string, file: string) {
  const rel = path.relative(PUBLIC_DIR, path.join(dir, file)).split(path.sep);
  return "/" + rel.map(encodeURIComponent).join("/");
}

/**
 * Читает фотографии во время сборки:
 * main-page.*  → главный экран,
 * main-page2.* → раздел «Біз туралы»
 * (ищутся сначала в public/images, затем в public),
 * остальные из public/images → галерея (без повторов).
 */
export function getSiteImages(): SiteImages {
  const imageFiles = listImages(IMAGES_DIR);
  const rootFiles = listImages(PUBLIC_DIR);

  const find = (name: string) => {
    const inImages = imageFiles.find((f) => baseName(f) === name);
    if (inImages) return toPublicSrc(IMAGES_DIR, inImages);
    const inRoot = rootFiles.find((f) => baseName(f) === name);
    return inRoot ? toPublicSrc(PUBLIC_DIR, inRoot) : null;
  };

  // Убираем дубликаты с одинаковым именем, но разным расширением
  const seen = new Set<string>(["main-page", "main-page2"]);
  const gallery: string[] = [];
  for (const f of imageFiles) {
    const name = baseName(f);
    if (seen.has(name)) continue;
    seen.add(name);
    gallery.push(toPublicSrc(IMAGES_DIR, f));
  }

  return { hero: find("main-page"), about: find("main-page2"), gallery };
}
