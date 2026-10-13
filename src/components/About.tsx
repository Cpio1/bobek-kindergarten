"use client";

import Image from "next/image";
import { HeartHandshake, Home, Sprout } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Balloon, Cloud, KindergartenIllustration, Sparkle, Star } from "./Decorations";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const cardStyles = [
  { icon: HeartHandshake, bg: "bg-coral/40", iconBg: "bg-white", shape: "rounded-[2rem_2rem_2rem_0.75rem]" },
  { icon: Sprout, bg: "bg-sky/70", iconBg: "bg-white", shape: "rounded-[0.75rem_2rem_2rem_2rem]" },
  { icon: Home, bg: "bg-sun/80", iconBg: "bg-white", shape: "rounded-[2rem_0.75rem_2rem_2rem]" },
];

export function About({ image }: { image: string | null }) {
  const { t } = useLanguage();

  return (
    <section id="about" aria-labelledby="about-title" className="relative bg-white py-16 md:py-24">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Фото */}
          <Reveal className="relative mx-auto w-full max-w-[460px] lg:max-w-none">
            <div className="relative aspect-[4/4.4] w-full">
              <div aria-hidden="true" className="absolute -inset-3 rounded-[46%_54%_42%_58%/52%_44%_56%_48%] bg-sky/60" />
              <div className="absolute inset-0 overflow-hidden rounded-[42%_58%_55%_45%/46%_42%_58%_54%] bg-sky-100 shadow-soft">
                {image ? (
                  <Image
                    src={image}
                    alt={t.about.photoAlt}
                    fill
                    sizes="(min-width: 1024px) 520px, (min-width: 640px) 460px, 90vw"
                    className="object-cover"
                  />
                ) : (
                  <KindergartenIllustration className="h-full w-full" />
                )}
              </div>
              <Cloud className="absolute -top-4 right-4 w-24 animate-float-slow drop-shadow-sm" />
              <Balloon color="#FFE680" className="absolute -bottom-2 -left-4 w-10 animate-float" />
              <Balloon color="#B8E4F9" className="absolute bottom-6 left-5 w-8 animate-float-slow [animation-delay:1.2s]" />
              <Star className="absolute top-1/4 -right-3 w-7 animate-twinkle text-sun-400" />
            </div>
          </Reveal>

          {/* Текст */}
          <div>
            <Reveal>
              <SectionHeading id="about-title" eyebrow={t.about.eyebrow} title={t.about.title} align="left" />
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">{t.about.text}</p>
            </Reveal>
            <Reveal delay={180}>
              <div className="relative mt-7 flex items-center gap-2 text-sun-600" aria-hidden="true">
                <Sparkle className="h-4 w-4" />
                <svg viewBox="0 0 160 12" className="h-3 w-40 text-sky-300">
                  <path d="M2 6c12-8 24 8 36 0s24-8 36 0 24 8 36 0 24-8 36 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </Reveal>
          </div>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {t.about.cards.map((card, i) => {
            const { icon: Icon, bg, iconBg, shape } = cardStyles[i];
            return (
              <Reveal as="li" key={i} delay={i * 100}>
                <div
                  className={`flex h-full items-start gap-4 p-5 transition-transform duration-300 hover:-translate-y-1 sm:flex-col sm:p-6 ${bg} ${shape}`}
                >
                  <span className={`grid h-12 w-12 shrink-0 place-items-center shape-pebble shadow-softer ${iconBg}`}>
                    <Icon className="h-6 w-6 text-ink" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{card.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{card.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
