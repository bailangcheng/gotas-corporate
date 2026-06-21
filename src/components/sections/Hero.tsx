"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      if (!heroRef.current || !textRef.current) return;
      const heroH = heroRef.current.offsetHeight;
      // complete slide-in by the time user scrolls 40% of hero height
      const progress = Math.min(window.scrollY / (heroH * 0.4), 1);
      textRef.current.style.transform = `translateY(${progress * heroH}px)`;
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section className="px-(--space-page-x) py-3">
      {/* fixed max-width matches Figma artboard (1460px) minus side padding (2×40px) */}
      <div
        ref={heroRef}
        className="relative mx-auto h-150 w-full max-w-345 overflow-hidden rounded-[20px] bg-[#d5d5d5] md:h-175"
      >
        <Image src="/images/home/hero.png" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-brand/20" />
        <div className="relative flex h-full flex-col items-center justify-center">
          <div ref={textRef} style={{ willChange: "transform" }}>
            <h1
              className="font-sans font-black leading-tight tracking-[0.06em] text-center text-white"
              style={{ fontSize: "clamp(48px, 10vw, 152px)" }}
            >
              <span className="block whitespace-nowrap">未来をつなぐ、</span>
              <span className="block whitespace-nowrap">価値を創る。</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
