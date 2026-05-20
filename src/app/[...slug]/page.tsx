import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { getPageByPath, getSiblingPages, getStaticRouteParams } from "@/lib/page-registry";

type StaticPageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export function generateStaticParams() {
  return getStaticRouteParams();
}

export async function generateMetadata({ params }: StaticPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageByPath(`/${slug.join("/")}`);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.summary,
  };
}

export default async function StaticPage({ params }: StaticPageProps) {
  const { slug } = await params;
  const page = getPageByPath(`/${slug.join("/")}`);

  if (!page) {
    notFound();
  }

  const siblings = getSiblingPages(page.section);

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} summary={page.summary} />
      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
            <article className="rounded-lg border border-slate-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-semibold text-blue-700">Draft page</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">コンテンツ準備中</h2>
              <p className="mt-4 leading-8 text-slate-700">
                このページは、サイトマップに基づく仮ページです。下層ワイヤーフレーム、素材、文言が確定次第、
                セクション構成とデザインを反映します。
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["目的", "掲載内容", "必要素材", "確認事項"].map((label) => (
                  <div key={label} className="rounded-md bg-slate-50 p-4">
                    <h3 className="font-semibold text-slate-950">{label}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">ワイヤーフレーム確定後に記入します。</p>
                  </div>
                ))}
              </div>
            </article>
            <aside className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-sm font-semibold text-slate-950">同カテゴリのページ</h2>
              <div className="mt-4 grid gap-2">
                {siblings.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md bg-white px-3 py-2 text-sm text-slate-700 transition hover:text-blue-700"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

