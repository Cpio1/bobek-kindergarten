"use client";

import { Baby, Clock, Languages, MapPin, Users, UtensilsCrossed, type LucideIcon } from "lucide-react";
import { SITE } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Cloud, Sparkle, Wave } from "./Decorations";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Card = {
  icon: LucideIcon;
  label: string;
  value: string;
  note: string;
  tone: "sky" | "sun" | "white";
  shape: string;
  small?: boolean;
};

const tones = {
  sky: { card: "bg-sky", icon: "bg-white", blob: "bg-white/40" },
  sun: { card: "bg-sun", icon: "bg-white", blob: "bg-white/45" },
  white: { card: "bg-white", icon: "bg-sky", blob: "bg-sun/40" },
} as const;

export function Info() {
  const { t, locale } = useLanguage();

  const cards: Card[] = [
    { icon: Clock, label: t.info.hours.label, value: SITE.workingHours, note: t.info.hours.note, tone: "sun", shape: "rounded-[2.5rem_2.5rem_2.5rem_0.9rem]" },
    { icon: Users, label: t.info.groups.label, value: String(SITE.groups), note: t.info.groups.note, tone: "white", shape: "rounded-[0.9rem_2.5rem_2.5rem_2.5rem]" },
    { icon: Baby, label: t.info.age.label, value: t.info.age.value, note: t.info.age.note, tone: "sky", shape: "rounded-[2.5rem_0.9rem_2.5rem_2.5rem]" },
    { icon: Languages, label: t.info.language.label, value: t.info.language.value, note: t.info.language.note, tone: "white", shape: "rounded-[2.5rem_2.5rem_0.9rem_2.5rem]" },
    { icon: UtensilsCrossed, label: t.info.meals.label, value: t.info.meals.value, note: t.info.meals.note, tone: "sky", shape: "rounded-[0.9rem_2.5rem_2.5rem_2.5rem]" },
    { icon: MapPin, label: t.info.address.label, value: SITE.address.short[locale], note: t.info.address.note, tone: "sun", shape: "rounded-[2.5rem_2.5rem_2.5rem_0.9rem]", small: true },
  ];

  return (
    <section id="info" aria-labelledby="info-title" className="relative isolate overflow-hidden bg-sky-50">
      <Wave fill="#fff" flip />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Cloud className="absolute top-24 right-[8%] w-24 animate-drift opacity-90" />
        <Cloud className="absolute bottom-28 left-[4%] w-20 animate-float-slow opacity-80" />
      </div>

      <div className="container-site py-14 md:py-20">
        <Reveal>
          <SectionHeading id="info-title" eyebrow={t.info.eyebrow} title={t.info.title} subtitle={t.info.subtitle} />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {cards.map((c, i) => {
            const tone = tones[c.tone];
            const Icon = c.icon;
            return (
              <Reveal as="li" key={c.label} delay={(i % 3) * 90} className={i % 3 === 1 ? "lg:translate-y-6" : ""}>
                <article
                  className={`group relative h-full overflow-hidden p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 sm:p-7 ${tone.card} ${c.shape}`}
                >
                  <span aria-hidden="true" className={`absolute -top-10 -right-10 h-32 w-32 shape-blob transition-transform duration-500 group-hover:scale-110 ${tone.blob}`} />
                  <div className="relative flex items-center justify-between">
                    <span className={`grid h-14 w-14 place-items-center shape-pebble shadow-softer ${tone.icon}`}>
                      <Icon className="h-6 w-6 text-ink" aria-hidden="true" />
                    </span>
                    <Sparkle aria-hidden="true" className={`h-5 w-5 ${c.tone === "sun" ? "text-white" : "text-sun-400"}`} />
                  </div>
                  <h3 className="relative mt-5 text-sm font-bold text-ink-soft">{c.label}</h3>
                  <p
                    className={`relative mt-1 font-display leading-tight font-bold text-ink ${
                      c.small ? "text-xl sm:text-[1.35rem]" : "text-3xl sm:text-[2.1rem]"
                    }`}
                  >
                    {c.value}
                  </p>
                  <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">{c.note}</p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
      <Wave fill="#fff" className="lg:mt-6" />
    </section>
  );
}
