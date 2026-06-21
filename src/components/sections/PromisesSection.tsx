"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { CmsFact } from "@/lib/cms/types";
import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/IconButton";
import { RecruitPhotoMarquee } from "@/components/sections/RecruitPhotoMarquee";

type PromisesSectionProps = {
  facts: CmsFact[];
};

type PromiseItem = CmsFact & {
  border: string;
  backBg: string;
  green: boolean;
};

export function PromisesSection({ facts }: PromisesSectionProps) {
  const promiseItems: PromiseItem[] = useMemo(
    () =>
      facts.map((fact, index) => {
        const isGreen = index === 2 || index === 7;
        const isEven = index % 2 === 0;
        return {
          ...fact,
          border: isGreen
            ? "border-[var(--color-green)]"
            : isEven
            ? "border-[var(--color-blue-border)]"
            : "border-[var(--color-yellow)]",
          backBg: isGreen
            ? "bg-[var(--color-green)]"
            : isEven
            ? "bg-[var(--color-blue-border)]"
            : "bg-[var(--color-yellow)]",
          green: isGreen,
        };
      }),
    [facts],
  );

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isPointerSlow, setIsPointerSlow] = useState(false);
  const displayItems = useMemo(() => [...promiseItems, ...promiseItems], [promiseItems]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let frame = 0;
    let lastTime = performance.now();

    const tick = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      scroller.scrollLeft += delta * (isPointerSlow ? 0.035 : 0.12);
      const loopPoint = scroller.scrollWidth / 2;
      if (scroller.scrollLeft >= loopPoint) {
        scroller.scrollLeft -= loopPoint;
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isPointerSlow]);

  return (
    <section className="bg-brand">
      <div className="relative overflow-hidden rounded-tr-(--radius-display) bg-accent py-(--space-section-y)">
        {/* Decorative background */}
        <img
          src="/svg/bg-4.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <Container size="wide" className="relative z-10">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-2.5 text-center text-white">
            <p className="font-display text-[60px] font-black uppercase leading-none sm:text-[80px]">10 Promises</p>
            <h2 className="text-[18px] font-bold sm:text-[28px]">GO-TAs10の約束</h2>
          </div>

          <div className="relative left-1/2 mt-25 w-screen -translate-x-1/2 overflow-visible">
            <div
              ref={scrollerRef}
              className="flex gap-5 overflow-x-auto overflow-y-visible px-0 py-8 perspective-distant scrollbar-none [&::-webkit-scrollbar]:hidden"
              onMouseEnter={() => setIsPointerSlow(true)}
              onMouseLeave={() => setIsPointerSlow(false)}
              onFocus={() => setIsPointerSlow(true)}
              onBlur={() => setIsPointerSlow(false)}
            >
              {displayItems.map((fact, index) => (
                <button
                  key={`${fact.number}-${index}`}
                  type="button"
                  aria-label={`${fact.number} ${fact.title} の詳細を見る`}
                  className="group h-102 w-75 shrink-0 rounded-[14px] text-left outline-none perspective-distant"
                >
                  <span className="relative block h-full w-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)] group-focus-visible:transform-[rotateY(180deg)]">
                    <PromiseFront fact={fact} />
                    <PromiseBack fact={fact} />
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-17 flex items-center justify-center">
            <Link
              href="/gotas-plus"
              className="relative inline-flex h-20 w-75 items-center justify-center gap-4 rounded-full border border-black bg-white text-lg font-black text-black btn-fill btn-press"
            >
              <span>全てを見る</span>
              <IconButton tone="green" className="absolute right-6" />
            </Link>
          </div>
        </Container>

        {/* Second bg-4 — behind marquee, covers lower half of section */}
        <img
          src="/svg/bg-4.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2 min-w-150 w-full z-0"
        />

        <div className="relative z-10 mt-15">
          <RecruitPhotoMarquee />
        </div>
      </div>
    </section>
  );
}

function PromiseFront({ fact }: { fact: PromiseItem }) {
  return (
    <span
      className={`absolute inset-0 flex flex-col items-center rounded-[14px] border-10 ${fact.border} bg-white text-center text-black backface-hidden`}
    >
      <span className="mt-9 font-display text-[58px] font-black leading-none">
        {fact.number}
      </span>
      <span className="flex flex-1 items-center justify-center px-5">
        <Image
          src={`/svg/promise/illust-${fact.number}.svg`}
          alt=""
          width={180}
          height={135}
          className="max-h-33.75 w-auto object-contain"
        />
      </span>
      <span className="mb-7 px-5 text-center text-[17px] font-black leading-snug">{fact.title}</span>
    </span>
  );
}

function PromiseBack({ fact }: { fact: PromiseItem }) {
  return (
    <span
      className={`absolute inset-0 flex flex-col items-center rounded-[14px] ${fact.backBg} text-black backface-hidden transform-[rotateY(180deg)_rotate(-2deg)]`}
    >
      <span className="flex flex-1 items-center justify-center font-display text-[58px] font-black leading-none text-black">{fact.number}</span>
      <span className="pb-8 px-6 text-base font-bold leading-[1.9] text-black text-center">{fact.body}</span>
    </span>
  );
}
