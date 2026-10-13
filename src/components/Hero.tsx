"use client";

import Image from "next/image";
import { ArrowRight, Baby, Clock, Phone, Users, UtensilsCrossed } from "lucide-react";
import { SITE } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Balloon, Cloud, KindergartenIllustration, Rainbow, Sparkle, Star, Sun } from "./Decorations";
import { Reveal } from "./Reveal";

export function Hero({ image }: { image: string | null }) {
  const { t } = useLanguage();

  const stats = [
    { icon: Baby, value: SITE.ageRange, label: t.stats.age, bg: "bg-sky", shape: "rounded-[2rem_2rem_2rem_0.75rem]" },
    { icon: Users, value: String(SITE.groups), label: t.stats.groups, bg: "bg-sun", shape: "rounded-[2rem_0.75rem_2rem_2rem]" },
    { icon: UtensilsCrossed, value: String(SITE.mealsPerDay), label: t.stats.meals, bg: "bg-mint", shape: "rounded-[0.75rem_2rem_2rem_2rem]" },
    { icon: Clock, value: SITE.workingHours, label: t.stats.hours, bg: "bg-coral/70", shape: "rounded-[2rem_2rem_0.75rem_2rem]" },
  ];

  return (
    <section id="home" aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-[72px]">
      {/* Фоновые формы */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] shape-blob bg-sky/60 blur-2xl" />
        <div className="absolute top-40 -right-32 h-[360px] w-[360px] shape-blob bg-sun/50 blur-3xl" />
        <Cloud className="absolute top-28 left-[42%] hidden w-28 animate-drift opacity-90 lg:block" />
        <Cloud className="absolute bottom-40 left-6 w-20 animate-float-slow opacity-80" />
      </div>

      <div className="container-site grid items-center gap-10 pt-8 pb-12 md:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-16">
        {/* Текст */}
        <div className="relative text-center lg:text-left">
          <Reveal>
            <span className="eyebrow">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-sun">
                <Star className="h-3.5 w-3.5 text-ink" />
              </span>
              {t.hero.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id="hero-title"
              className="mt-5 font-display text-[2.1rem] leading-[1.15] font-bold text-ink sm:text-5xl lg:text-[3.1rem]"
            >
              {t.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-soft lg:mx-0">
              {t.hero.subtitle}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a href="#contacts" className="btn btn-primary">
                <Phone size={18} aria-hidden="true" />
                {t.hero.contact}
              </a>
              <a href="#about" className="btn btn-secondary group">
                {t.hero.about}
                <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Фото */}
        <Reveal delay={150} className="relative mx-auto w-full max-w-[480px] lg:max-w-none">
          <div className="relative aspect-[1/1] w-full sm:aspect-[5/4.6]">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-4 animate-blob bg-sun"
            />
            <div className="absolute inset-0 animate-blob overflow-hidden bg-sky-100 shadow-glow ring-8 ring-white">
              {image ? (
                <Image
                  src={image}
                  alt={t.hero.photoAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, (min-width: 640px) 480px, 90vw"
                  className="object-cover"
                />
              ) : (
                <KindergartenIllustration className="h-full w-full" />
              )}
            </div>

            <Sun className="absolute -top-6 -right-2 w-20 animate-float sm:w-24" />
            <Cloud className="absolute top-10 -left-8 w-24 animate-float-slow sm:w-28" />
            <Cloud className="absolute -bottom-3 right-6 w-20 animate-float" />
            <Rainbow className="absolute -bottom-6 -left-4 w-24 sm:w-28" />
            <Balloon color="#FFB4A2" className="absolute top-1/3 -right-5 hidden w-9 animate-float-slow sm:block" />
            <Star className="absolute top-2 left-1/4 w-6 animate-twinkle text-sun-400" />
            <Sparkle className="absolute bottom-1/4 -left-4 w-5 animate-twinkle text-sky-500 [animation-delay:1s]" />
            <Sparkle className="absolute right-1/4 -bottom-2 w-4 animate-twinkle text-sun-600 [animation-delay:1.6s]" />
          </div>
        </Reveal>
      </div>

      {/* Карточки-показатели */}
      <div className="container-site pb-14 md:pb-20">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, bg, shape }, i) => (
            <Reveal as="li" key={label} delay={i * 80}>
              <div
                className={`group flex h-full items-center gap-3 bg-white p-4 shadow-soft transition-transform duration-300 hover:-translate-y-1 sm:gap-4 sm:p-5 ${shape}`}
              >
                <span className={`grid h-11 w-11 shrink-0 place-items-center shape-pebble sm:h-14 sm:w-14 ${bg}`}>
                  <Icon className="h-5 w-5 text-ink sm:h-6 sm:w-6" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-lg leading-tight font-bold whitespace-nowrap text-ink sm:text-2xl">
                    {value}
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug font-semibold text-ink-soft sm:text-sm">
                    {label}
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
