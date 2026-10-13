"use client";

import { SITE } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageProvider";

export function Logo({ light = false }: { light?: boolean }) {
  const { locale } = useLanguage();
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative grid h-11 w-11 place-items-center shape-pebble bg-sun shadow-softer">
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <circle cx="16" cy="17" r="10" fill="#fff" />
          <circle cx="12.5" cy="16" r="1.6" fill="#25465C" />
          <circle cx="19.5" cy="16" r="1.6" fill="#25465C" />
          <path d="M12.8 20.2c1.8 1.7 4.6 1.7 6.4 0" stroke="#25465C" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <path d="M16 7c-1-3 2-5 4-3.5" stroke="#25465C" strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <circle cx="10" cy="19.5" r="1.6" fill="#FFB4A2" />
          <circle cx="22" cy="19.5" r="1.6" fill="#FFB4A2" />
        </svg>
        <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-sky-300" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-2xl font-bold ${light ? "text-white" : "text-ink"}`}>
          {SITE.shortName}
        </span>
        <span className={`mt-1 text-[0.7rem] font-bold ${light ? "text-sky" : "text-ink-soft"}`}>
          {locale === "kz" ? "балабақша" : "детский сад"}
        </span>
      </span>
    </span>
  );
}
