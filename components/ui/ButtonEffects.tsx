"use client";

import { useEffect } from "react";

const RIPPLE_SEED_PX = 20;

// Волна при нажатии на любую кнопку с классом .btn. Само свечение и анимация описаны в globals.css.
export function ButtonEffects() {
  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;
      const button = event.target.closest<HTMLElement>(".btn");
      if (!button || button.matches(":disabled, [aria-disabled='true']")) return;

      const rect = button.getBoundingClientRect();
      const farthestX = Math.max(event.clientX - rect.left, rect.right - event.clientX);
      const farthestY = Math.max(event.clientY - rect.top, rect.bottom - event.clientY);
      const radius = Math.hypot(farthestX, farthestY);

      button.style.setProperty("--rx", `${event.clientX - rect.left}px`);
      button.style.setProperty("--ry", `${event.clientY - rect.top}px`);
      button.style.setProperty("--rs", String((radius * 2) / RIPPLE_SEED_PX));

      button.classList.remove("is-rippling");
      void button.offsetWidth;
      button.classList.add("is-rippling");
    };

    const onAnimationEnd = (event: AnimationEvent) => {
      if (event.target instanceof Element && event.animationName === "btn-ripple") {
        event.target.classList.remove("is-rippling");
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("animationend", onAnimationEnd);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("animationend", onAnimationEnd);
    };
  }, []);

  return null;
}
