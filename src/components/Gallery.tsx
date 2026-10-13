"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, ImageIcon, X, ZoomIn } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Cloud, Star } from "./Decorations";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const INITIAL_COUNT = 6;

// Чередующиеся плавные формы для фотографий
const shapes = [
  "rounded-[2.5rem_2.5rem_2.5rem_0.9rem]",
  "rounded-[50%_50%_2rem_2rem/40%_40%_2rem_2rem]",
  "rounded-[0.9rem_2.5rem_2.5rem_2.5rem]",
  "rounded-[2.5rem_0.9rem_2.5rem_2.5rem]",
  "rounded-[2rem_2rem_50%_50%/2rem_2rem_35%_35%]",
  "rounded-[2.5rem_2.5rem_0.9rem_2.5rem]",
];

export function Gallery({ images }: { images: string[] }) {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const [current, setCurrent] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const visible = expanded ? images : images.slice(0, INITIAL_COUNT);
  const hasMore = images.length > INITIAL_COUNT;

  const close = useCallback(() => {
    setCurrent(null);
    lastTrigger.current?.focus();
  }, []);
  const prev = useCallback(
    () => setCurrent((c) => (c === null ? c : (c - 1 + images.length) % images.length)),
    [images.length],
  );
  const next = useCallback(
    () => setCurrent((c) => (c === null ? c : (c + 1) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (current === null) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [current, close, prev, next]);

  // Свайп на мобильных
  const touchX = useRef<number | null>(null);

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="relative isolate overflow-hidden bg-white py-16 md:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 -left-24 h-72 w-72 shape-blob bg-sun/30 blur-2xl" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 shape-blob bg-sky/50 blur-2xl" />
      </div>

      <div className="container-site">
        <Reveal>
          <SectionHeading id="gallery-title" eyebrow={t.gallery.eyebrow} title={t.gallery.title} subtitle={t.gallery.subtitle} />
        </Reveal>

        {images.length === 0 ? (
          <Reveal delay={100}>
            <div className="relative mx-auto mt-12 flex max-w-md flex-col items-center rounded-[2.5rem_2.5rem_2.5rem_0.9rem] bg-sky-50 px-6 py-12 text-center">
              <Cloud className="absolute -top-6 -left-4 w-24" />
              <Star className="absolute top-6 right-8 w-6 animate-twinkle text-sun-400" />
              <span className="grid h-16 w-16 place-items-center shape-pebble bg-sky">
                <ImageIcon className="h-7 w-7 text-ink" aria-hidden="true" />
              </span>
              <p className="mt-5 font-display text-lg font-bold text-ink">{t.gallery.empty}</p>
            </div>
          </Reveal>
        ) : (
          <>
            <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
              {visible.map((src, i) => (
                <Reveal
                  as="li"
                  key={src}
                  delay={(i % INITIAL_COUNT) * 70}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      lastTrigger.current = e.currentTarget;
                      setCurrent(i);
                    }}
                    aria-label={`${t.gallery.open}: ${t.gallery.photo} ${i + 1}`}
                    className={`group relative block aspect-[4/3.4] w-full overflow-hidden bg-sky-100 shadow-soft ${shapes[i % shapes.length]}`}
                  >
                    <Image
                      src={src}
                      alt={`${t.gallery.photo} ${i + 1}`}
                      fill
                      sizes="(min-width: 1024px) 380px, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute inset-0 grid place-items-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/25">
                      <span className="grid h-12 w-12 scale-75 place-items-center rounded-full bg-white/95 text-ink opacity-0 shadow-soft transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                        <ZoomIn size={20} aria-hidden="true" />
                      </span>
                    </span>
                  </button>
                </Reveal>
              ))}
            </ul>

            {hasMore && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  aria-expanded={expanded}
                  className="btn btn-sky"
                >
                  {expanded ? t.gallery.less : t.gallery.more}
                  {expanded ? <ChevronUp size={18} aria-hidden="true" /> : <ChevronDown size={18} aria-hidden="true" />}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Лайтбокс */}
      {current !== null &&
        createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${t.gallery.photo} ${current + 1} / ${images.length}`}
          className="fixed inset-0 z-[60] flex animate-fade-in items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
            touchX.current = null;
          }}
        >
          <figure
            className="relative h-[78vh] w-full max-w-5xl animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={images[current]}
              src={images[current]}
              alt={`${t.gallery.photo} ${current + 1}`}
              fill
              sizes="100vw"
              className="rounded-[2rem] object-contain"
            />
            <figcaption className="absolute -bottom-9 left-1/2 -translate-x-1/2 rounded-full bg-white/15 px-3 py-1 text-sm font-bold text-white">
              {current + 1} / {images.length}
            </figcaption>
          </figure>

          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label={t.gallery.close}
            className="absolute top-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-white text-ink shadow-soft transition-transform hover:scale-105"
          >
            <X size={22} />
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label={t.gallery.prev}
                className="absolute top-1/2 left-3 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-soft transition-transform hover:scale-105 sm:left-6"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label={t.gallery.next}
                className="absolute top-1/2 right-3 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-soft transition-transform hover:scale-105 sm:right-6"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>,
          document.body,
        )}
    </section>
  );
}
