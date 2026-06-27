import type { Metadata } from "next";
import Link from "next/link";
import { getNewsArticles } from "@/lib/cms/news-articles";

export const metadata: Metadata = {
  title: "News | GO-TAs",
  description: "GO-TAsグループからのお知らせ・最新情報をお届けします。",
  alternates: { canonical: "/news" },
  openGraph: { title: "News | GO-TAs", url: "/news" },
};

export default async function NewsPage() {
  const articles = await getNewsArticles();

  return (
    <div className="relative overflow-x-hidden bg-accent">
      {/* ── Hero ── */}
      <div className="relative z-10 flex flex-col items-center gap-2.5 overflow-hidden px-4 pb-20 pt-36 text-center text-white sm:pb-28 sm:pt-44">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/svg/news/bg.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto"
        />
        <h1 className="relative z-10 font-display text-[clamp(56px,5.56vw,80px)] font-black leading-none">News</h1>
        <p className="relative z-10 text-[clamp(20px,1.94vw,28px)] font-bold">お知らせ</p>
      </div>

      {/* ── Article list ── */}
      <div className="relative z-10 rounded-tr-[clamp(60px,8.33vw,120px)] bg-white">
        <div className="mx-auto w-full max-w-[var(--layout-container)] px-[clamp(1.25rem,5.56vw,5rem)] py-[clamp(4rem,8.33vw,7.5rem)]">
          {articles.length === 0 ? (
            <p className="text-center text-ink-muted">現在お知らせはありません。</p>
          ) : (
            <div className="divide-y divide-line-subtle">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/magazine/${article.slug}`}
                  className="group flex flex-col gap-2 py-8 transition hover:opacity-70 sm:flex-row sm:items-center sm:gap-10"
                >
                  <span className="font-display text-sm font-medium text-ink-muted shrink-0">
                    {article.publishedAt.replaceAll("-", ".")}
                  </span>
                  <span className="shrink-0 w-fit rounded-full border border-line-subtle px-4 py-1 text-xs font-bold text-ink-soft">
                    {article.category || "ニュース"}
                  </span>
                  <span className="flex-1 font-bold text-foreground group-hover:text-brand">
                    {article.title}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
