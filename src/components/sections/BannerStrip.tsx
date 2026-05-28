"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";

const banners = ["バナー", "バナー", "バナー", "バナー", "バナー", "バナー"];

const STEP_INTERVAL_MS = 2800;
const SLIDE_DURATION_MS = 900;

export function BannerStrip() {
  const loop = [...banners, ...banners];
  const [step, setStep] = useState(0);
  const [animate, setAnimate] = useState(true);
  const resetTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setAnimate(true);
      setStep((n) => n + 1);
    }, STEP_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (step < banners.length) return;
    resetTimeoutRef.current = window.setTimeout(() => {
      setAnimate(false);
      setStep(0);
    }, SLIDE_DURATION_MS);
    return () => {
      if (resetTimeoutRef.current !== null) window.clearTimeout(resetTimeoutRef.current);
    };
  }, [step]);

  return (
    <section className="overflow-hidden bg-[var(--color-accent)] py-5">
      <Container size="wide" className="overflow-hidden">
        <div
          className="flex w-max gap-7 ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{
            transform: `translate3d(calc(-1 * ${step} * (var(--banner-card-width) + 1.75rem)), 0, 0)`,
            transition: animate ? `transform ${SLIDE_DURATION_MS}ms cubic-bezier(0.65, 0, 0.35, 1)` : "none",
            ["--banner-card-width" as string]: "clamp(280px, 28vw, 433px)",
          }}
        >
          {loop.map((label, index) => (
            <div
              key={`${label}-${index}`}
              className="grid aspect-[433/242] w-[var(--banner-card-width)] shrink-0 place-items-center rounded-xl bg-[#d5d5d5] text-2xl font-black text-[#7f7f7f]"
            >
              {label}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
