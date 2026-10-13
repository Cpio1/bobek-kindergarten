"use client";

import { Clock, MapPin, Phone } from "lucide-react";
import { SECTION_IDS, SITE } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { InstagramIcon } from "./InstagramIcon";
import { Logo } from "./Logo";
import { Star, Wave } from "./Decorations";

export function Footer() {
  const { t, locale } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink text-white">
      <Wave fill="#EFF9FF" flip className="-mb-px" />
      <div className="container-site grid gap-10 pt-10 pb-8 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.2fr] lg:gap-14">
        <div>
          <a href="#home" aria-label={SITE.shortName}>
            <Logo light />
          </a>
          <p className="mt-4 text-sm font-bold text-sky">{SITE.legalName[locale]}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">{t.footer.description}</p>
          <a
            href={SITE.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold transition-colors hover:bg-white/20"
          >
            <InstagramIcon size={18} />
            {SITE.instagram.handle}
          </a>
        </div>

        <nav aria-label={t.footer.sections}>
          <h2 className="font-display text-base font-bold text-sun">{t.footer.sections}</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm md:grid-cols-1">
            {SECTION_IDS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="text-white/80 transition-colors hover:text-sun">
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-base font-bold text-sun">{t.footer.contacts}</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-sky" aria-hidden="true" />
              <span>{SITE.address[locale]}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-sky" aria-hidden="true" />
              <span className="flex flex-col gap-1">
                {SITE.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="transition-colors hover:text-sun">
                    {p.display}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-sky" aria-hidden="true" />
              <span>{SITE.workingHours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-site">
        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 py-6 text-center text-xs text-white/60 sm:flex-row sm:text-left">
          <p>
            © {year} {SITE.legalName[locale]}. {t.footer.rights}
          </p>
          <p className="inline-flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 text-sun" />
            {SITE.shortName}
          </p>
        </div>
      </div>
    </footer>
  );
}
