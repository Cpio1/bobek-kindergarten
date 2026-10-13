"use client";

import { ExternalLink, FileText, FolderOpen, Hourglass } from "lucide-react";
import { DOCUMENTS_URL } from "@/config/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { Cloud, Sparkle, Star } from "./Decorations";
import { Reveal } from "./Reveal";

export function Documents() {
  const { t } = useLanguage();
  const hasLink = DOCUMENTS_URL.trim().length > 0;

  return (
    <section id="documents" aria-labelledby="documents-title" className="bg-white pb-16 md:pb-24">
      <div className="container-site">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[3rem_3rem_3rem_1.25rem] bg-sky px-6 py-12 sm:px-12 md:py-14">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-20 -right-16 h-64 w-64 shape-blob bg-sun/70" />
              <div className="absolute -bottom-24 -left-10 h-56 w-56 shape-blob bg-white/40" />
              <Cloud className="absolute bottom-6 right-[38%] hidden w-24 animate-drift md:block" />
              <Star className="absolute top-8 left-[45%] w-5 animate-twinkle text-white" />
            </div>

            <div className="grid items-center gap-8 md:grid-cols-[auto_1fr_auto] md:gap-10">
              <div className="relative mx-auto h-28 w-28 md:mx-0" aria-hidden="true">
                <span className="absolute inset-0 rotate-6 shape-leaf bg-white/60" />
                <span className="absolute inset-0 -rotate-3 grid place-items-center shape-leaf bg-white shadow-soft">
                  <FolderOpen className="h-12 w-12 text-sky-500" />
                </span>
                <span className="absolute -right-3 -bottom-2 grid h-10 w-10 place-items-center rounded-full bg-sun shadow-softer">
                  <FileText className="h-5 w-5 text-ink" />
                </span>
              </div>

              <div className="text-center md:text-left">
                <span className="eyebrow">
                  <Sparkle className="h-4 w-4 text-sun-600" />
                  {t.documents.eyebrow}
                </span>
                <h2 id="documents-title" className="mt-4 font-display text-[1.75rem] leading-tight font-bold text-ink sm:text-4xl">
                  {t.documents.title}
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-ink sm:text-lg md:max-w-none">
                  {t.documents.text}
                </p>
              </div>

              <div className="flex justify-center">
                {hasLink ? (
                  <a href={DOCUMENTS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <FileText size={18} aria-hidden="true" />
                    {t.documents.button}
                    <ExternalLink size={16} aria-hidden="true" />
                  </a>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <span className="btn cursor-not-allowed bg-white/70 text-ink-soft" aria-disabled="true">
                      <FileText size={18} aria-hidden="true" />
                      {t.documents.button}
                    </span>
                    <p role="status" className="inline-flex items-center gap-1.5 text-sm font-bold text-ink">
                      <Hourglass size={15} aria-hidden="true" />
                      {t.documents.soon}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
