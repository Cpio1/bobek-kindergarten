import type { Metadata, Viewport } from "next";
import { Comfortaa, Nunito } from "next/font/google";
import { SITE, SITE_URL } from "@/config/site";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const comfortaa = Comfortaa({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["600", "700"],
  variable: "--font-comfortaa",
  display: "swap",
});

const title = "«Бөбек» бөбекжай балабақшасы — Қосөзен ауылы";
const description =
  "«Бөбек» бөбекжай балабақшасы — балалардың дамуы мен тәрбиесіне арналған жайлы әрі мейірімді орта. 2–5 жас, 4 топ, 07:00–18:00. Детский ясли-сад «Бөбек», село Косозен, Илийский район.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s | ${SITE.shortName}` },
  description,
  applicationName: SITE.shortName,
  keywords: [
    "Бөбек",
    "балабақша",
    "бөбекжай",
    "Қосөзен",
    "Іле ауданы",
    "детский сад",
    "ясли-сад",
    "Косозен",
    "Илийский район",
    "Алматинская область",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "kk_KZ",
    alternateLocale: ["ru_RU"],
    url: "/",
    siteName: SITE.shortName,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#B8E4F9",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ChildCare",
  name: SITE.legalName.kz,
  alternateName: [SITE.shortName, SITE.legalName.ru],
  url: SITE_URL,
  telephone: SITE.phones.map((p) => p.tel),
  sameAs: [SITE.instagram.url],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Бірлестік көшесі, 14",
    addressLocality: "Қосөзен ауылы",
    addressRegion: "Алматы облысы, Іле ауданы",
    addressCountry: "KZ",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="kk" className={`${nunito.variable} ${comfortaa.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-sun focus:px-4 focus:py-2 focus:font-bold"
        >
          Негізгі мазмұнға өту
        </a>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
