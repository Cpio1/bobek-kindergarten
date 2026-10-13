import type { ReactNode } from "react";
import { Sparkle } from "./Decorations";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  id?: string;
};

export function SectionHeading({ eyebrow, title, subtitle, align = "center", id }: Props) {
  const centered = align === "center";
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <span className="eyebrow">
        <Sparkle className="h-4 w-4 text-sun-600" />
        {eyebrow}
      </span>
      <h2
        id={id}
        className="mt-4 font-display text-[1.75rem] leading-tight font-bold text-ink sm:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-ink-soft sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
