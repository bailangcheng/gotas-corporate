"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { facts } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/IconButton";

const extraPromises = [
  {
    number: "05",
    title: "正義は勝つ。",
    body: "短期的な損得よりも、胸を張れる選択を重ねることを大切にします。",
  },
  {
    number: "06",
    title: "現場から考える。",
    body: "机上の正解だけではなく、現場の声と手ざわりから次の一手を組み立てます。",
  },
  {
    number: "07",
    title: "早く、小さく、試す。",
    body: "完璧を待つより、まず動いて学び、改善しながら価値に近づきます。",
  },
  {
    number: "08",
    title: "人を置き去りにしない。",
    body: "デジタルも仕組みも、人が使えて初めて力になります。理解と納得を大切にします。",
  },
  {
    number: "09",
    title: "沖縄から広げる。",
    body: "地域に根ざした関係性を起点に、事業と人の可能性を外へ広げていきます。",
  },
  {
    number: "10",
    title: "おもしろがる。",
    body: "変化や難しさを前向きに捉え、チームで楽しみながら乗り越えます。",
  },
];

const promiseItems = [...facts, ...extraPromises].map((fact, index) => ({
  ...fact,
  border: index % 2 === 0 ? "border-[var(--color-blue-border)]" : "border-[var(--color-yellow)]",
  green: index === 2 || index === 7,
}));

export function PromisesSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pauseUntilRef = useRef(0);
  const [isPointerSlow, setIsPointerSlow] = useState(false);
  const displayItems = useMemo(() => [...promiseItems, ...promiseItems], []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let frame = 0;
    let lastTime = performance.now();

    const tick = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (time > pauseUntilRef.current) {
        scroller.scrollLeft += delta * (isPointerSlow ? 0.035 : 0.12);
        const loopPoint = scroller.scrollWidth / 2;
        if (scroller.scrollLeft >= loopPoint) {
          scroller.scrollLeft -= loopPoint;
        }
      }

      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isPointerSlow]);

  const scrollByCard = (direction: 1 | -1) => {
    pauseUntilRef.current = performance.now() + 2500;
    scrollerRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  return (
    <section className="bg-[var(--color-brand)]">
      <div className="overflow-hidden rounded-tr-[var(--radius-display)] bg-[var(--color-accent)] py-[var(--space-section-y)]">
        <Container size="wide">
          <div className="mx-auto max-w-4xl text-center text-white">
            <p className="font-[family-name:var(--font-display)] text-5xl font-black uppercase leading-none sm:text-[80px]">10 Promises</p>
            <h2 className="mt-8 text-2xl font-black">GO-TAs10の約束</h2>
          </div>

          <div className="relative left-1/2 mt-[100px] w-screen -translate-x-1/2 overflow-visible">
            <div
              ref={scrollerRef}
              className="flex gap-5 overflow-x-auto overflow-y-visible px-0 py-8 [perspective:1200px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                  className="group h-[408px] w-[300px] shrink-0 rounded-[14px] text-left outline-none [perspective:1200px]"
                >
                  <span className="relative block h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-visible:[transform:rotateY(180deg)]">
                    <PromiseFront fact={fact} />
                    <PromiseBack fact={fact} />
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-[68px] flex items-center justify-between">
            <button type="button" aria-label="前のカードへ" onClick={() => scrollByCard(-1)}>
              <IconButton direction="left" size="lg" />
            </button>
            <Link
              href="/company/facts"
              className="relative inline-flex h-20 w-[300px] items-center justify-center rounded-full border border-black bg-white text-lg font-black text-black shadow-[2px_4px_0_black]"
            >
              全てを見る
              <IconButton tone="green" className="absolute right-6" />
            </Link>
            <button type="button" aria-label="次のカードへ" onClick={() => scrollByCard(1)}>
              <IconButton size="lg" />
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}

function PromiseFront({ fact }: { fact: (typeof promiseItems)[number] }) {
  return (
    <span
      className={`absolute inset-0 flex flex-col items-center rounded-[14px] border-[10px] ${
        fact.green ? "border-[var(--color-green)] bg-[var(--color-green)]" : `${fact.border} bg-white`
      } p-7 text-center text-black shadow-[var(--shadow-card)] [backface-visibility:hidden]`}
    >
      <span className="font-[family-name:var(--font-display)] text-[66px] font-black leading-none">{fact.number}</span>
      <span className="mt-auto pb-10 text-xl font-black leading-normal">{fact.title}</span>
    </span>
  );
}

function PromiseBack({ fact }: { fact: (typeof promiseItems)[number] }) {
  return (
    <span className="absolute inset-0 flex flex-col rounded-[14px] border-[10px] border-black bg-white p-8 text-black shadow-[var(--shadow-card)] [backface-visibility:hidden] [transform:rotateY(180deg)_rotate(-2deg)]">
      <span className="font-[family-name:var(--font-display)] text-[48px] font-black leading-none text-[var(--color-accent)]">{fact.number}</span>
      <span className="mt-8 text-2xl font-black leading-snug">{fact.title}</span>
      <span className="mt-6 text-base font-bold leading-[1.9]">{fact.body}</span>
    </span>
  );
}
