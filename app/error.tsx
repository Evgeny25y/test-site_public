"use client";

import { Container } from "@/components/ui/Container";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <Container className="py-24">
      <h1 className="text-[clamp(2rem,1.2rem+3vw,3.25rem)] text-primary">Что-то пошло не так</h1>
      <p className="mt-5 max-w-xl text-lg text-ink/85">Страница не загрузилась. Попробуйте обновить её.</p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 inline-flex min-h-11 items-center rounded-sm bg-primary px-6 py-3 font-medium text-white hover:bg-primary-deep"
      >
        Обновить страницу
      </button>
    </Container>
  );
}
