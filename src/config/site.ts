/**
 * Все данные детского сада «Бөбек» в одном месте.
 * Измените значения здесь — они автоматически обновятся на всём сайте.
 */

/**
 * Ссылка на папку Google Drive с документами.
 * Пока ссылка пустая, на сайте показывается сообщение
 * «Құжаттар сілтемесі жақында қосылады».
 * Пример: "https://drive.google.com/drive/folders/XXXXXXXX"
 */
export const DOCUMENTS_URL = "";

/** Адрес сайта после деплоя (используется для SEO). */
export const SITE_URL = "https://bobek-balabakshasi.vercel.app";

export const SITE = {
  shortName: "Бөбек",
  legalName: {
    kz: "ЖШС «НЕМЕРЕ и К» «Бөбек» бөбекжай балабақшасы",
    ru: "ТОО «НЕМЕРЕ и К» детский ясли-сад «Бөбек»",
  },
  address: {
    kz: "Алматы облысы, Іле ауданы, Қосөзен ауылы, Бірлестік көшесі, 14",
    ru: "Алматинская область, Илийский район, село Косозен, улица Бірлестік, 14",
    short: {
      kz: "Қосөзен ауылы, Бірлестік көшесі, 14",
      ru: "село Косозен, ул. Бірлестік, 14",
    },
  },
  phones: [
    { display: "+7 747 169 60 32", tel: "+77471696032" },
    { display: "+7 747 522 70 87", tel: "+77475227087" },
  ],
  instagram: {
    handle: "@bobek_balabakshasi",
    url: "https://instagram.com/bobek_balabakshasi",
  },
  workingHours: "07:00–18:00",
  groups: 4,
  ageRange: "2–5",
  mealsPerDay: 4,
} as const;

/**
 * Карта. Используется адресный поиск, а не произвольные координаты.
 *
 * Google Maps не знает улицу Бірлестік в Косозене (по запросу «Бирлестик 14»
 * находит улицы с тем же названием в других регионах), поэтому встроенная
 * карта ищет само село Косозен — оно определяется верно.
 * 2GIS знает улицу «Бирлестик» в с. Косозен, поэтому кнопка «Картадан көру»
 * открывает поиск в 2GIS (2GIS нельзя встроить в iframe).
 *
 * Когда точка садика появится на картах (или будут известны точные
 * координаты в формате "43.xxxxx,77.xxxxx"), достаточно заменить запросы ниже.
 */
export const MAP_EMBED_QUERY = "Косозен, Илийский район, Алматинская область, Казахстан";

export const MAP_LINK_QUERY = "Косозен Бирлестик 14";

export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(
  MAP_EMBED_QUERY,
)}&z=15&output=embed`;

export const MAP_LINK_URL = `https://2gis.kz/almaty/search/${encodeURIComponent(MAP_LINK_QUERY)}`;

/** Разделы навигации (id секций на странице). */
export const SECTION_IDS = [
  "home",
  "about",
  "info",
  "gallery",
  "documents",
  "contacts",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];
