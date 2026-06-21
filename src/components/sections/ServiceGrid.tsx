"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { businessPages } from "@/content/site";
import { IconButton } from "@/components/ui/IconButton";

const serviceImages: Record<string, string> = {
  "/business/ranrantei": "/images/business/thumbnails/ranrantei.png",
  "/business/gushi": "/images/business/thumbnails/gushi.png",
  "/business/isunoki": "/images/business/thumbnails/isunoki.png",
  "/business/okinawa-specialty": "/images/business/thumbnails/subaru.png",
  "/business/food-beverage": "/images/business/thumbnails/gosei.png",
  "/business/real-estate": "/images/business/thumbnails/hudosan.png",
  "/business/it": "/images/business/thumbnails/digital-marketing.png",
  "/business/digital-signage": "/images/business/thumbnails/digital-signage.png",
  "/business/recruitment-school": "/images/business/thumbnails/healthcare.png",
};

const items = businessPages.filter((p) => p.href !== "/business");

function ServiceCard({ page, compact, className }: { page: (typeof items)[number]; compact?: boolean; className?: string }) {
  return (
    <Link
      href={page.href}
      className={["group flex shrink-0 flex-col overflow-hidden rounded-[14px] border border-black bg-white shadow-card", className].filter(Boolean).join(" ")}
    >
      <div className={compact ? "relative flex-1 overflow-hidden bg-[#d5d5d5]" : "relative h-56.25 overflow-hidden bg-[#d5d5d5]"}>
        {serviceImages[page.href] ? (
          <Image
            src={serviceImages[page.href]}
            alt=""
            fill
            sizes={compact ? "335px" : "400px"}
            className="object-cover"
          />
        ) : null}
      </div>
      <div className={compact ? "flex shrink-0 items-end justify-between gap-3 px-4 pb-4 pt-3" : "flex min-h-23 items-end justify-between gap-5 px-6 pb-7.5 pt-6"}>
        <div className={compact ? "flex flex-col gap-1.5" : "flex flex-col gap-2.5"}>
          <p className={compact ? "text-xl font-bold leading-snug text-black" : "text-2xl font-bold leading-snug text-black"}>{page.title}</p>
          {page.category && (
            <p className="font-sans text-sm font-medium text-black">{page.category}</p>
          )}
        </div>
        <IconButton tone="green" size="md" className="shrink-0 transition-colors group-hover:bg-yellow" />
      </div>
    </Link>
  );
}

export function ServiceGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    scrollRef.current?.scrollBy({
      left: dir === "next" ? 440 : -440,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative z-30 -mt-16 overflow-hidden rounded-tl-[60px] bg-brand lg:-mt-30 lg:rounded-tl-[120px]">
      {/* Decorative bg overlay */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/bg-3.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-auto"
      />

      {/* ── SP layout ── */}
      <div className="relative z-10 px-5 pt-14 pb-20 lg:hidden">
        {/* Horizontal title */}
        <div className="mb-10 flex flex-col gap-2">
          <p className="font-display text-[60px] font-black uppercase leading-none text-white">
            Our Service
          </p>
          <p className="font-sans text-[18px] font-semibold text-white">事業一覧</p>
        </div>

        {/* Single-column card list — fixed 335×223 per Figma spec */}
        <div className="flex flex-col items-center gap-8">
          {items.map((page) => (
            <ServiceCard key={page.href} page={page} compact className="w-83.75 h-55.75" />
          ))}
        </div>

        {/* Centered navigation */}
        <div className="mt-10 flex flex-col items-center gap-5">
          <div className="flex gap-5">
            <button onClick={() => scroll("prev")} aria-label="前へ" className="group">
              <IconButton size="lg" direction="left" className="transition-colors group-hover:bg-green" />
            </button>
            <button onClick={() => scroll("next")} aria-label="次へ" className="group">
              <IconButton size="lg" direction="right" className="transition-colors group-hover:bg-green" />
            </button>
          </div>
          <Link
            href="/business"
            className="relative inline-flex h-20 w-75 items-center justify-center gap-4 rounded-full border border-black bg-white font-bold text-black btn-fill btn-press"
          >
            <span>全てを見る</span>
            <IconButton tone="green" size="sm" elevated={false} className="absolute right-6" />
          </Link>
        </div>
      </div>

      {/* ── PC layout ── */}
      <div className="relative z-10 hidden lg:flex items-start gap-55 pl-20 pt-46 pb-55 lg:pt-60">
        {/* Left: vertical title */}
        <div className="flex shrink-0 items-start gap-8">
          <div className="flex w-15 items-center justify-center">
            <p
              className="font-display text-[80px] font-black uppercase leading-none text-white"
              style={{ writingMode: "vertical-rl" }}
            >
              Our Service
            </p>
          </div>
          <p
            className="font-sans text-xl font-semibold leading-tight text-white"
            style={{ writingMode: "vertical-rl" }}
          >
            事業一覧
          </p>
        </div>

        {/* Right: scrollable cards flush to right edge */}
        <div className="min-w-0 flex-1">
          <div
            ref={scrollRef}
            className="scrollbar-hide grid grid-rows-2 grid-flow-col gap-10 overflow-x-auto pb-4 scroll-smooth"
            style={{ height: 774 }}
          >
            {items.map((page) => (
              <ServiceCard key={page.href} page={page} className="w-100" />
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between pr-20">
            <div className="flex gap-5">
              <button onClick={() => scroll("prev")} aria-label="前へ" className="group">
                <IconButton size="lg" direction="left" className="transition-colors group-hover:bg-green" />
              </button>
              <button onClick={() => scroll("next")} aria-label="次へ" className="group">
                <IconButton size="lg" direction="right" className="transition-colors group-hover:bg-green" />
              </button>
            </div>
            <Link
              href="/business"
              className="relative inline-flex h-20 w-75 items-center justify-center gap-4 rounded-full border border-black bg-white font-bold text-black btn-fill btn-press"
            >
              <span>全てを見る</span>
              <IconButton tone="green" size="sm" elevated={false} className="absolute right-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
