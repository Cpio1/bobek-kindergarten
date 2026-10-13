"use client";

import Image from "next/image";
import { HeartHandshake, Home, Sprout } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { SizedImage } from "@/lib/images";
import { Balloon, Cloud, KindergartenIllustration, Sparkle, Star } from "./Decorations";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const cardStyles = [
  { icon: HeartHandshake, bg: "bg-coral/40", iconBg: "bg-white", shape: "rounded-[2rem_2rem_2rem_0.75rem]" },
  { icon: Sprout, bg: "bg-sky/70", iconBg: "bg-white", shape: "rounded-[0.75rem_2rem_2rem_2rem]" },
  { icon: Home, bg: "bg-sun/80", iconBg: "bg-white", shape: "rounded-[2rem_0.75rem_2rem_2rem]" },
];

export function About({ image }: { image: SizedImage | null }) {
  const { t } = useLanguage();

  return (
    <section id="about" aria-labelledby="about-title" className="relative bg-white py-16 md:py-24">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Фото: контейнер повторяет пропорции снимка, поэтому он виден целиком */}
          <Reveal className="relative mx-auto w-full max-w-[540px] px-2 py-4 sm:px-4 lg:max-w-none">
            <div className="relative">
              {/* Жёлтое органическое пятно позади */}
              <div
                aria-hidden="true"
                className="absolute -inset-x-3 -inset-y-5 -rotate-3 rounded-[46%_54%_42%_58%/52%_44%_56%_48%] bg-sun/70 sm:-inset-x-5 sm:-inset-y-7"
              />
              {/* Голубая пунктирная обводка */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rotate-2 rounded-[3.5rem_1.75rem_3.5rem_1.75rem/3rem_2rem_3rem_2rem] border-2 border-dashed border-sky-300 sm:-inset-3"
              />
              {/* Рамка */}
              <div className="relative rounded-[3rem_1.5rem_3rem_1.5rem/2.6rem_1.75rem_2.6rem_1.75rem] bg-white p-2 shadow-glow sm:p-2.5">
                <div
                  className="relative w-full overflow-hidden rounded-[2.6rem_1.1rem_2.6rem_1.1rem/2.2rem_1.3rem_2.2rem_1.3rem] bg-sky-100"
                  style={{ aspectRatio: image ? `${image.width} / ${image.height}` : "4 / 3" }}
                >
                  {image ? (
                    <Image
                      src={image.src}
                      alt={t.about.photoAlt}
                      fill
                      sizes="(min-width: 1024px) 540px, (min-width: 640px) 500px, 92vw"
                      className="object-contain"
                    />
                  ) : (
                    <KindergartenIllustration className="h-full w-full" />
                  )}
                </div>
              </div>
              <Cloud className="absolute -top-9 right-6 w-20 animate-float-slow drop-shadow-sm sm:w-24" />
              <Balloon color="#FFE680" className="absolute -bottom-8 -left-3 w-9 animate-float sm:w-10" />
              <Balloon color="#B8E4F9" className="absolute -bottom-5 left-6 w-7 animate-float-slow [animation-delay:1.2s] sm:w-8" />
              <Star className="absolute top-1/4 -right-4 w-7 animate-twinkle text-sun-400" />
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
