"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconButton } from "@/components/ui/IconButton";
import type { CmsPost } from "@/lib/cms/types";

const STEP_INTERVAL_MS = 2800;
const SLIDE_DURATION_MS = 900;

type BannerCard = {
  slug: string;
  title: string;
  coverImage?: string;
};

function BannerCarousel({ cards }: { cards: BannerCard[] }) {
  const loop = [...cards, ...cards];
  const [step, setStep] = useState(0);
  const [animate, setAnimate] = useState(true);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  const startInterval = () => {
    if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setAnimate(true);
      setStep((n) => n + 1);
    }, STEP_INTERVAL_MS);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
    };
  }, []);

  // Reset to beginning seamlessly after the slide animation completes.
  // setTimeout is more reliable than transitionend — browsers may skip firing
  // transitionend for off-screen composited elements during page scroll.
  useEffect(() => {
    if (step < cards.length) return;
    const id = window.setTimeout(() => {
      setAnimate(false);
      setStep((s) => s - cards.length);
    }, SLIDE_DURATION_MS);
    return () => window.clearTimeout(id);
  }, [step, cards.length]);

  const handlePrev = () => {
    setAnimate(true);
    setStep((n) => (n <= 0 ? cards.length - 1 : n - 1));
    startInterval();
  };

  const handleNext = () => {
    setAnimate(true);
    setStep((n) => n + 1);
    startInterval();
  };

  return (
    <div>
      {/* Full-width strip — no horizontal padding, section overflow-hidden clips it */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex w-max gap-7"
          style={{
            transform: `translate3d(calc(-1 * ${step} * (var(--banner-card-width) + 1.75rem)), 0, 0)`,
            transition: animate ? `transform ${SLIDE_DURATION_MS}ms cubic-bezier(0.65, 0, 0.35, 1)` : "none",
            ["--banner-card-width" as string]: "clamp(280px, 28vw, 433px)",
          }}
        >
          {loop.map((card, index) => (
            <Link
              key={`${card.slug}-${index}`}
              href={`/magazine/${card.slug}`}
              className="group relative aspect-[433/242] w-(--banner-card-width) shrink-0 overflow-hidden rounded-xl bg-[#d5d5d5]"
            >
              {card.coverImage ? (
                <Image
                  src={card.coverImage}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 280px, 433px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-[#d5d5d5]">
                  <span className="text-sm font-bold text-[#999]">{card.title}</span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Buttons aligned to page margin */}
      <div className="mt-6 flex justify-end gap-3 px-[var(--space-page-x)]">
        <button onClick={handlePrev} aria-label="前へ">
          <IconButton size="md" direction="left" elevated={false} className="shadow-[1px_2px_0_0_#000000] transition-colors hover:bg-yellow" />
        </button>
        <button onClick={handleNext} aria-label="次へ">
          <IconButton size="md" direction="right" elevated={false} className="shadow-[1px_2px_0_0_#000000] transition-colors hover:bg-yellow" />
        </button>
      </div>
    </div>
  );
}

export function BannerStrip({ posts }: { posts: CmsPost[] }) {
  const cards: BannerCard[] = posts.slice(0, 6).map((p) => ({
    slug: p.slug,
    title: p.title,
    coverImage: p.coverImage,
  }));

  return (
    <section className="overflow-hidden pt-10 pb-20 lg:pb-32.5">
      <BannerCarousel cards={cards} />
    </section>
  );
}
