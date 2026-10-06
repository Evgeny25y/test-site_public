"use client";

import { useSyncExternalStore } from "react";
import { TelegramButton } from "@/components/contact/TelegramButton";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problems } from "@/content/problems";
import { track } from "@/lib/analytics";
import { problemMessage } from "@/lib/telegram";

const STORAGE_KEY = "rotov:selected-problem";

// Выбор живёт в sessionStorage (переживает перезагрузку вкладки), а в памяти - на случай, если хранилище недоступно.
let memory: string | null = null;
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

function getSnapshot(): string | null {
  if (memory) return memory;
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    return problems.some((p) => p.id === stored) ? stored : null;
  } catch {
    return null;
  }
}

function storeSelection(id: string) {
  memory = id;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, id);
  } catch {
    // Приватный режим: остаётся только значение в памяти.
  }
  listeners.forEach((listener) => listener());
}

export function ProblemSelector() {
  const selectedId = useSyncExternalStore(subscribe, getSnapshot, () => null);
  const selected = problems.find((p) => p.id === selectedId);

  return (
    <Section id="problem" labelledBy="problem-title" tone="wash">
      <SectionHeading
        id="problem-title"
        index="02"
        description="Не обязательно знать, как юридически называется ваша проблема. Выберите наиболее близкую ситуацию."
      >
        Что у вас произошло?
      </SectionHeading>

      <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((problem) => {
          const isSelected = problem.id === selectedId;
          return (
            <li key={problem.id}>
              <button
                type="button"
                aria-pressed={isSelected}
                onClick={() => {
                  storeSelection(problem.id);
                  track("problem_selected", { problem: problem.label });
                }}
                className={`flex min-h-16 w-full items-center rounded-md border px-5 py-4 text-left font-serif text-lg leading-snug transition-colors ${
                  isSelected
                    ? "border-primary bg-primary text-white"
                    : "border-line bg-surface text-ink hover:border-primary"
                }`}
              >
                {problem.label}
              </button>
            </li>
          );
        })}
      </ul>

      <div aria-live="polite" className="mt-10 min-h-[8rem]">
        {selected ? (
          <div className="flex flex-col gap-5 border-t border-primary/30 pt-8">
            <p className="font-serif text-xl text-primary">Ситуация: {selected.label.toLowerCase()}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/consultation">Обсудить ситуацию</Button>
              <TelegramButton
                message={problemMessage(selected.topic)}
                event="problem_telegram_click"
                eventParams={{ problem: selected.label }}
              />
            </div>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
