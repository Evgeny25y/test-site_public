"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { audiences, otherQuestion } from "@/content/audiences";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AudienceSelector() {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusTab = (index: number) => {
    const next = (index + audiences.length) % audiences.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      focusTab(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusTab(index - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusTab(audiences.length - 1);
    }
  };

  return (
    <Section id="audience" labelledBy="audience-title">
      <SectionHeading id="audience-title" index="01">
        Юридическая помощь частным лицам и бизнесу
      </SectionHeading>

      <div role="tablist" aria-label="Для кого" className="mt-10 flex gap-8 border-b border-line">
        {audiences.map((audience, index) => {
          const selected = index === active;
          return (
            <button
              key={audience.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              id={`${baseId}-tab-${audience.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${audience.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className={`-mb-px min-h-12 border-b-2 pb-3 pt-2 font-serif text-xl transition-colors sm:text-2xl ${
                selected ? "border-primary text-primary" : "border-transparent text-muted hover:text-primary"
              }`}
            >
              {audience.tab}
            </button>
          );
        })}
      </div>

      {audiences.map((audience, index) => (
        <div
          key={audience.id}
          id={`${baseId}-panel-${audience.id}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${audience.id}`}
          hidden={index !== active}
          className="pt-8"
        >
          <ul className="grid gap-x-12 sm:grid-cols-2">
            {audience.items.map((item) => (
              <li key={item} className="border-b border-line py-4 font-serif text-lg text-ink sm:text-xl">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <p className="mt-8 text-muted">{otherQuestion}</p>
    </Section>
  );
}
