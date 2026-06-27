import type { Metadata } from "next";
import { getPosts } from "@/lib/cms/posts";
import MagazineContent from "@/components/sections/MagazineContent";

export const metadata: Metadata = {
  title: "Magazine | GO-TAs",
  description: "GO-TAsグループの最新ニュース、事業紹介、社内レポートをお届けします。",
  alternates: { canonical: "/magazine" },
  openGraph: { title: "Magazine | GO-TAs", url: "/magazine" },
};

export default async function MagazinePage() {
  const posts = await getPosts();

  return (
    <div className="relative overflow-x-hidden bg-[#ff3f31]">

      {/* ── bg-1 — topmost overlay, covers all layers ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/magazine/bg-1.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-16 left-1/2 -translate-x-1/2 w-full h-auto z-40"
      />

      {/* ── Hero ── */}
      <div className="relative z-50 flex flex-col items-center gap-10 md:gap-2.5 px-4 pb-15 pt-25 md:pb-25 md:pt-45 text-center text-white">
        <h1 className="font-display text-[60px] md:text-[80px] font-black leading-none md:whitespace-nowrap">
          GO-TAs Magazine
        </h1>
        <p className="text-[28px] font-bold">GO-TAsマガジン</p>
      </div>

      {/* ── Green content section ──
          bg-ellipse provides the green dome background (same #00ab41 as the section,
          blends seamlessly — like the white ellipse in /recruit).
          bg-2 sits above bg-ellipse. Content sits above bg-2.
      ── */}
      <div className="-mt-8 relative z-10 overflow-hidden">
        {/* bg-ellipse: green dome, blends with section green */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/svg/magazine/bg-ellipse.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-0 left-1/2 -translate-x-1/2 w-[160%] h-auto"
        />
        {/* Content */}
        <div
          className="relative z-10 mt-30 pt-0 pb-35 bg-green"
          style={{
            paddingLeft: "max(1.25rem, calc((100vw - 1280px) / 2))",
            paddingRight: "max(1.25rem, calc((100vw - 1280px) / 2))",
          }}
        >
          <MagazineContent posts={posts} />
        </div>
      </div>

    </div>
  );
}
