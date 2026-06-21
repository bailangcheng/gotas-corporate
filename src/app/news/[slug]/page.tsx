import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsArticles, getNewsArticleBySlug } from "@/lib/cms/news-articles";

type NewsPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = await getNewsArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | GO-TAs`,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({ params }: NewsPageProps) {
  const { slug } = await params;
  const article = await getNewsArticleBySlug(slug);

  if (!article) notFound();

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

      {/* ── Content area ── */}
      <div className="relative z-10 rounded-tr-[clamp(60px,8.33vw,120px)] bg-white">
        <div className="mx-auto w-full max-w-[var(--layout-container)] px-[clamp(1.25rem,5.56vw,5rem)] py-[clamp(4rem,8.33vw,7.5rem)]">

          {/* Breadcrumb */}
          <div className="mb-20 flex items-center gap-5 md:mb-30">
            <span className="font-display text-base font-bold text-foreground">News</span>
            <div className="h-7 w-px bg-foreground" />
            <span className="font-display text-base font-medium text-foreground">
              {article.publishedAt.replace(/-/g, ".")}
            </span>
          </div>

          {/* Article */}
          <div className="mx-auto max-w-[60rem]">
            {/* Title */}
            <h2 className="mb-10 text-[clamp(24px,2.5vw,36px)] font-bold leading-[1.8] text-foreground [text-align:justify]">
              {article.title}
            </h2>

            {/* Divider */}
            <hr className="mb-10 border-line-subtle" />

            {/* Body */}
            {article.bodyHtml ? (
              <div
                className="news-body grid gap-6 text-[clamp(14px,1.11vw,16px)] leading-[2] text-ink-soft [text-align:justify] [&_a]:text-brand [&_a]:underline [&_h2]:text-[20px] [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:text-[18px] [&_h3]:font-bold [&_h3]:text-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6"
                dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
              />
            ) : (
              <div className="grid gap-6 text-[clamp(14px,1.11vw,16px)] leading-[2] text-ink-soft [text-align:justify]">
                {article.body.map((block, i) =>
                  block.type === "heading" ? (
                    <h2 key={i} className="text-xl font-bold text-foreground">
                      {block.text}
                    </h2>
                  ) : (
                    <p key={i}>{block.text}</p>
                  )
                )}
              </div>
            )}

            {/* Bottom divider */}
            <hr className="mt-16 border-line-subtle" />

            {/* Back button */}
            <div className="mt-16 flex justify-center">
              <Link
                href="/"
                className="relative flex h-[80px] w-[300px] items-center justify-center rounded-full border border-black bg-green font-bold text-foreground shadow-[2px_4px_0_0_#000] transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="absolute left-6 flex size-8 items-center justify-center rounded-full border border-black bg-white shadow-[1px_1px_0_0_#000]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M7 1L1 7L7 13M1 7H13" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                トップに戻る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
