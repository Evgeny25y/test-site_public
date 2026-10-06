# ROTOV - персональный сайт юриста

Сайт юриста Ротова Евгения Александровича: Next.js 16 (App Router), TypeScript (strict), Tailwind CSS 4, шрифты через `next/font` (Literata + Golos Text, оба с кириллицей).

## Требования

- Node.js 20.9 или новее (проект проверен на Node 24)
- npm

## Установка и запуск

```bash
npm install
npm run dev
```

Сайт откроется на http://localhost:3000.

## Проверки и сборка

```bash
npm run lint        # ESLint
npm run typecheck   # TypeScript
npm run build       # production-сборка
npm run start       # запуск собранной версии
```

## Переменные окружения

Скопируйте `.env.example` в `.env.local` и заполните. Пустое значение означает "не настроено": соответствующая функция отключается.

| Переменная | Что делает |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | адрес сайта (например, `https://rotov.example`). Без него `robots.txt` закрывает сайт от индексации |
| `NEXT_PUBLIC_TELEGRAM_USERNAME` | ник рабочего Telegram, с `@` или без |
| `NEXT_PUBLIC_PHONE` | рабочий телефон |
| `NEXT_PUBLIC_EMAIL` | рабочая почта |
| `NEXT_PUBLIC_YANDEX_METRIKA_ID` | номер счётчика Яндекс.Метрики |
| `NEXT_PUBLIC_GA_ID` | идентификатор Google Analytics (`G-XXXXXXX`) |
| `CONTACT_WEBHOOK_URL` | серверная переменная: куда форма отправляет заявки (JSON POST) |

Если Telegram не задан, кнопки Telegram на готовом сайте не показываются. В режиме разработки вместо них видна неактивная кнопка "Telegram не настроен".

## Как поменять Telegram

Укажите ник в `NEXT_PUBLIC_TELEGRAM_USERNAME` и пересоберите сайт. Все кнопки и ссылки используют `lib/telegram.ts` и `content/profile.ts`, больше нигде менять не нужно.

## Как изменить цены

Откройте `content/pricing.ts`. Каждая строка: название, описание, цена (`price`) или пометка (`note`), текст кнопки. Те же цены упоминаются в ответах `content/faq.ts` - поменяйте их и там.

## Как добавить кейс

В `content/cases.ts` добавьте объект в массив `cases` (поля описаны в типе `Case`) и поставьте `published: true`. Кейс сам появится на `/cases`, на главной и в `sitemap.xml`. Не публикуйте данные клиентов без их согласия.

## Как добавить статью

В `content/articles.ts` добавьте объект в массив `articles` (тип `Article`: `slug`, `title`, `description`, `publishedAt` в формате `2026-01-31`, `category`, `content` - массив абзацев). Статья появится на `/articles` и в `sitemap.xml`.

## Как добавить фотографию

1. Положите файл в `public/images/` (например, `portrait.jpg`).
2. В `components/sections/Hero.tsx` замените `<HeroPortrait />` на:

```tsx
<HeroPortrait imageSrc="/images/portrait.jpg" alt="Евгений Ротов, юрист" objectPosition="center top" />
```

Вёрстка Hero менять не нужно. Для Open Graph картинка пока брендированная (`lib/og.tsx`), с фотографией её можно заменить файлом `app/opengraph-image.jpg`.

## Форма обращения

Форма отправляет данные на `/api/contact`. Пока `CONTACT_WEBHOOK_URL` пуст, сервер отвечает 503, а форма честно пишет, что приём заявок не подключён. Сообщение об успехе показывается только когда внешний сервис принял заявку. Подойдёт любой приёмник JSON: бот Telegram через n8n, почтовый сервис, CRM.

## Аналитика

Укажите `NEXT_PUBLIC_YANDEX_METRIKA_ID` и/или `NEXT_PUBLIC_GA_ID`. Скрипты подключатся сами. Цели (события): `hero_consultation_click`, `telegram_click`, `problem_selected`, `problem_telegram_click`, `pricing_consultation_click`, `litigation_assessment_click`, `contact_submit`. Для Метрики создайте цели типа "JavaScript-событие" с такими же названиями.

## Что ещё нужно заполнить владельцу

- рабочий Telegram, телефон, почта, домен (переменные выше);
- реквизиты оператора персональных данных и срок хранения обращений в `content/legal.ts` (там помечено `TODO(owner)`), а также юридическая проверка страниц `/privacy` и `/consent`: сейчас это структурные заготовки, они не являются окончательными документами;
- приём заявок (`CONTACT_WEBHOOK_URL`);
- фотография, кейсы и статьи, когда появятся.

## Развёртывание

Подойдёт любой хостинг с Node.js (Vercel, свой сервер, Docker). Задайте переменные окружения, выполните `npm run build` и `npm run start`. Перед запуском убедитесь, что задан `NEXT_PUBLIC_SITE_URL`: от него зависят `sitemap.xml`, canonical-ссылки и разрешение на индексацию.

## Структура

```
app/            страницы, robots, sitemap, OG-картинка, API формы
components/     layout, sections, ui, contact, seo, analytics
content/        все тексты и данные (профиль, цены, FAQ, услуги, кейсы, статьи)
lib/            env, Telegram, аналитика, SEO, форма
```
