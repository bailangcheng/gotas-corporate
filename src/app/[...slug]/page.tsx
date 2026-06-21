import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { StaticPageContent } from "@/components/sections/StaticPageContent";
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
    <div className="bg-accent">
      <PageHero eyebrow={page.eyebrow} title={page.title} />
      <div className="rounded-tr-(--radius-display) bg-white">
        <StaticPageContent page={page} siblings={siblings} />
      </div>
    </div>
  );
}
