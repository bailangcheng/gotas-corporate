"use client";

import { IconButton } from "@/components/ui/IconButton";

const ITEMS = Array.from({ length: 10 });

export function FooterMarquee() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const track = (
    <>
      {ITEMS.map((_, i) => (
        <span key={i} className="flex shrink-0 items-center gap-5">
          <span className="font-display text-lg font-black uppercase text-[var(--color-ink)]">
            Page top
          </span>
          <IconButton size="md" elevated direction="up" />
        </span>
      ))}
    </>
  );

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="ページトップへ戻る"
      className="group flex h-[60px] w-full cursor-pointer items-center overflow-hidden rounded-full bg-white"
    >
      <span className="flex animate-[marquee_18s_linear_infinite] items-center gap-5 whitespace-nowrap group-hover:[animation-play-state:paused]">
        {track}
        {track}
      </span>
    </button>
  );
}
