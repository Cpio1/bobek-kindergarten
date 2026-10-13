"use client";

import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { MAP_EMBED_URL, MAP_LINK_URL, SITE } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { InstagramIcon } from "./InstagramIcon";
import { Cloud, Sun, Wave } from "./Decorations";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contacts() {
  const { t, locale } = useLanguage();

  const items = [
    {
      icon: MapPin,
      title: t.contacts.address,
      bg: "bg-sky",
      content: <p className="leading-relaxed">{SITE.address[locale]}</p>,
    },
    {
      icon: Phone,
      title: t.contacts.phones,
      bg: "bg-sun",
      content: (
        <ul className="space-y-1">
          {SITE.phones.map((p) => (
            <li key={p.tel}>
              <a href={`tel:${p.tel}`} className="font-bold whitespace-nowrap underline-offset-4 hover:text-sky-500 hover:underline">
                {p.display}
              </a>
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: InstagramIcon,
      title: t.contacts.instagram,
      bg: "bg-coral/60",
      content: (
        <a
          href={SITE.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline-offset-4 hover:text-sky-500 hover:underline"
        >
          {SITE.instagram.handle}
        </a>
      ),
    },
    {
      icon: Clock,
      title: t.contacts.hours,
      bg: "bg-mint",
      content: <p className="font-bold">{SITE.workingHours}</p>,
    },
  ];

  return (
    <section id="contacts" aria-labelledby="contacts-title" className="relative isolate overflow-hidden bg-sky-50">
      <Wave fill="#fff" flip />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Sun className="absolute top-24 -left-6 w-24 opacity-70 md:left-[3%]" />
        <Cloud className="absolute top-40 right-[6%] w-24 animate-drift" />
      </div>

      <div className="container-site py-14 md:py-20">
        <Reveal>
          <SectionHeading id="contacts-title" eyebrow={t.contacts.eyebrow} title={t.contacts.title} subtitle={t.contacts.subtitle} />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-8">
          <Reveal>
            <div className="flex h-full flex-col rounded-[2.5rem_2.5rem_2.5rem_0.9rem] bg-white p-6 shadow-soft sm:p-8">
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {items.map(({ icon: Icon, title, bg, content }) => (
                  <li key={title} className="flex gap-4">
                    <span className={`grid h-12 w-12 shrink-0 place-items-center shape-pebble ${bg}`}>
                      <Icon className="h-5 w-5 text-ink" size={20} aria-hidden="true" />
                    </span>
                    <div className="min-w-0 text-ink">
                      <h3 className="text-sm font-bold text-ink-soft">{title}</h3>
                      <div className="mt-1">{content}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 border-t border-dashed border-sky pt-6 sm:flex-row sm:flex-wrap">
                <a href={`tel:${SITE.phones[0].tel}`} className="btn btn-primary flex-1">
                  <Phone size={18} aria-hidden="true" />
                  {t.contacts.call}
                </a>
                <a href={SITE.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-sky flex-1">
                  <InstagramIcon size={18} />
                  {t.contacts.instagramBtn}
                </a>
                <a href={MAP_LINK_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary flex-1 ring-1 ring-sky">
                  <Navigation size={18} aria-hidden="true" />
                  {t.contacts.map}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative h-full min-h-[340px] overflow-hidden rounded-[0.9rem_2.5rem_2.5rem_2.5rem] bg-sky-100 shadow-soft ring-8 ring-white sm:min-h-[420px]">
              <iframe
                title={t.contacts.mapTitle}
                src={MAP_EMBED_URL}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
