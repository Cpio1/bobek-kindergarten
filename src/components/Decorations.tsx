import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export function Cloud(props: Props) {
  return (
    <svg viewBox="0 0 120 64" fill="none" aria-hidden="true" {...props}>
      <path
        d="M30 60h64a22 22 0 0 0 3-43.8A30 30 0 0 0 41.5 14 20 20 0 0 0 12 30.5 15 15 0 0 0 30 60Z"
        fill="#fff"
      />
      <path
        d="M30 60h64a22 22 0 0 0 9.6-2.2C70 61 40 56 22 46a15 15 0 0 0 8 14Z"
        fill="#DCF1FC"
      />
    </svg>
  );
}

export function Sun(props: Props) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" {...props}>
      <g className="origin-center animate-spin-slow" style={{ transformBox: "fill-box" }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <rect
            key={i}
            x="47"
            y="2"
            width="6"
            height="16"
            rx="3"
            fill="#FFD84A"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}
      </g>
      <circle cx="50" cy="50" r="26" fill="#FFE680" />
      <circle cx="50" cy="50" r="26" fill="url(#sunGlow)" />
      <circle cx="41" cy="47" r="2.6" fill="#25465C" />
      <circle cx="59" cy="47" r="2.6" fill="#25465C" />
      <path d="M42 56c4.5 4.5 11.5 4.5 16 0" stroke="#25465C" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="36" cy="55" r="3.5" fill="#FFB4A2" opacity=".7" />
      <circle cx="64" cy="55" r="3.5" fill="#FFB4A2" opacity=".7" />
      <defs>
        <radialGradient id="sunGlow" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#fff" stopOpacity=".55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function Star(props: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 1.5c.6 0 1 .4 1.3 1l2.3 5 5.4.7c1.2.2 1.6 1.6.8 2.4l-4 3.8 1 5.4c.2 1.2-1 2.1-2.1 1.5L12 18.7l-4.7 2.6c-1.1.6-2.3-.3-2.1-1.5l1-5.4-4-3.8c-.8-.8-.4-2.2.8-2.4l5.4-.7 2.3-5c.3-.6.7-1 1.3-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Sparkle(props: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M12 0c.7 6.3 5.7 11.3 12 12-6.3.7-11.3 5.7-12 12-.7-6.3-5.7-11.3-12-12C6.3 11.3 11.3 6.3 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Rainbow(props: Props) {
  const arcs = ["#FFB4A2", "#FFE680", "#BFECCF", "#B8E4F9"];
  return (
    <svg viewBox="0 0 120 64" fill="none" aria-hidden="true" {...props}>
      {arcs.map((c, i) => {
        const r = 54 - i * 10;
        return (
          <path
            key={c}
            d={`M${60 - r} 60a${r} ${r} 0 0 1 ${r * 2} 0`}
            stroke={c}
            strokeWidth="9"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export function Balloon({ color = "#FFB4A2", ...props }: Props & { color?: string }) {
  return (
    <svg viewBox="0 0 40 90" fill="none" aria-hidden="true" {...props}>
      <path d="M20 50c-2 8 4 14-1 22s2 12 0 16" stroke="#25465C" strokeOpacity=".35" strokeWidth="1.4" strokeLinecap="round" />
      <ellipse cx="20" cy="24" rx="17" ry="21" fill={color} />
      <path d="M17 45h6l-3 5-3-5Z" fill={color} />
      <ellipse cx="13" cy="15" rx="4" ry="6.5" fill="#fff" opacity=".5" transform="rotate(-20 13 15)" />
    </svg>
  );
}

/** Волнистый разделитель между секциями */
export function Wave({
  fill = "#fff",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-10 w-full md:h-16 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path
        d="M0 40c120-26 240-36 360-20s240 50 360 44 240-42 360-50 240 14 360 26v40H0Z"
        fill={fill}
      />
    </svg>
  );
}

/** Иллюстрация-заглушка, если фото ещё нет */
export function KindergartenIllustration(props: Props) {
  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" {...props}>
      <rect width="400" height="400" fill="#DCF1FC" />
      <circle cx="320" cy="80" r="34" fill="#FFE680" />
      <path d="M60 110h70a18 18 0 0 0 0-36 26 26 0 0 0-50-4 16 16 0 0 0-20 40Z" fill="#fff" />
      <path d="M210 70h50a14 14 0 0 0 0-28 20 20 0 0 0-38-3 12 12 0 0 0-12 31Z" fill="#fff" opacity=".9" />
      <path d="M0 300c80-30 160-40 240-24s120 20 160 10v114H0Z" fill="#BFECCF" />
      <path d="M0 330c90-20 190-24 290-10 40 6 80 6 110 0v80H0Z" fill="#9EDDB6" />
      {/* дом */}
      <rect x="120" y="190" width="160" height="120" rx="14" fill="#fff" />
      <path d="M106 200 200 128l94 72a8 8 0 0 1-5 14H111a8 8 0 0 1-5-14Z" fill="#FFB4A2" />
      <rect x="182" y="244" width="36" height="66" rx="18" fill="#FFE680" />
      <circle cx="210" cy="278" r="3" fill="#25465C" />
      <rect x="138" y="226" width="30" height="30" rx="10" fill="#B8E4F9" />
      <rect x="232" y="226" width="30" height="30" rx="10" fill="#B8E4F9" />
      <circle cx="200" cy="176" r="14" fill="#B8E4F9" />
      <path d="M200 166v20M190 176h20" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      {/* деревья */}
      <circle cx="70" cy="262" r="30" fill="#7FD1A3" />
      <rect x="66" y="280" width="8" height="34" rx="4" fill="#C48B5E" />
      <circle cx="334" cy="270" r="24" fill="#7FD1A3" />
      <rect x="330" y="284" width="8" height="30" rx="4" fill="#C48B5E" />
      {/* цветы */}
      {[40, 110, 300, 360].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy={345 + (i % 2) * 12} r="6" fill={i % 2 ? "#FFE680" : "#FFB4A2"} />
          <circle cx={x} cy={345 + (i % 2) * 12} r="2.4" fill="#fff" />
        </g>
      ))}
    </svg>
  );
}
