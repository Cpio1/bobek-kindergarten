"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { SECTION_IDS, type SectionId } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Locale } from "@/i18n/translations";
import { Logo } from "./Logo";

function LanguageSwitch({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();
  const options: { value: Locale; label: string }[] = [
    { value: "kz", label: "KZ" },
    { value: "ru", label: "RU" },
  ];
  return (
    <div
      role="group"
      aria-label={t.header.language}
      className={`inline-flex rounded-full bg-sky-50 p-1 ring-1 ring-sky/70 ${className}`}
    >
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => setLocale(o.value)}
          aria-pressed={locale === o.value}
          className={`min-w-10 rounded-full px-3 py-1.5 text-sm font-extrabold transition-colors ${
            locale === o.value ? "bg-sun text-ink shadow-softer" : "text-ink-soft hover:text-ink"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Подсветка активного раздела
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id as SectionId);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/90 shadow-softer backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex h-[72px] items-center justify-between gap-4">
        <a href="#home" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {SECTION_IDS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`relative rounded-full px-3.5 py-2 text-[0.95rem] font-bold transition-colors ${
                    active === id ? "bg-sky/60 text-ink" : "text-ink-soft hover:bg-sky-50 hover:text-ink"
                  }`}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitch className="hidden sm:inline-flex" />
          <a href="#contacts" className="btn btn-primary hidden min-h-11 px-5 md:inline-flex">
            <Phone size={18} aria-hidden="true" />
            {t.header.contact}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky text-ink transition-colors hover:bg-sky-300 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"} h-[calc(100dvh-72px)] overflow-y-auto border-t border-sky/50 bg-white`}
      >
        <nav aria-label="Mobile" className="container-site py-6">
          <ul className="flex flex-col gap-1.5">
            {SECTION_IDS.map((id, i) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-[1.25rem_1.25rem_1.25rem_0.4rem] px-5 py-3.5 text-lg font-bold transition-colors ${
                    active === id ? "bg-sky/60 text-ink" : "text-ink hover:bg-sky-50"
                  }`}
                >
                  {t.nav[id]}
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${i % 2 ? "bg-sun-400" : "bg-sky-300"}`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LanguageSwitch className="self-start sm:hidden" />
            <a href="#contacts" className="btn btn-primary w-full sm:w-auto" onClick={() => setOpen(false)}>
              <Phone size={18} aria-hidden="true" />
              {t.header.contact}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
