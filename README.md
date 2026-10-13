# «Бөбек» бөбекжай балабақшасы — лендинг

Next.js 15 · TypeScript · Tailwind CSS 4 · Lucide React

## Запуск

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production-сборка
```

Деплой на Vercel: импортируйте репозиторий, настройки по умолчанию подходят.

## Где что менять

| Что | Где |
| --- | --- |
| Телефоны, адрес, Instagram, режим работы, количество групп и т.д. | `src/config/site.ts` |
| Ссылка на документы (Google Drive) | `DOCUMENTS_URL` в `src/config/site.ts` |
| Запросы для карты | `MAP_EMBED_QUERY`, `MAP_LINK_QUERY` в `src/config/site.ts` |
| Адрес сайта для SEO | `SITE_URL` в `src/config/site.ts` |
| Тексты KZ / RU | `src/i18n/translations.ts` |

## Фотографии

Положите фото в `public/images/` (`.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`):

- `main-page.*` — главный экран (ищется в `public/images/`, затем в `public/`);
- `main-page2.*` — раздел «Біз туралы» (так же);
- все остальные — галерея (сортировка по имени, первые 6 видны сразу).

Список фото считывается при сборке, поэтому после добавления фото нужно пересобрать сайт (на Vercel — новый деплой).
Если фото нет, вместо них показывается иллюстрация, а в галерее — сообщение «Фотосуреттер жақында қосылады».
