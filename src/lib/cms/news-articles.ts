import { getNewsArticlesFromMicroCMS, getNewsArticleBySlugFromMicroCMS } from "./microcms";
import type { CmsPost } from "./types";

const mockNewsArticles: CmsPost[] = [
  {
    slug: "sample-news-01",
    title: "嵐々亭本店、新ブランドの販売を始めました",
    excerpt: "嵐々亭本店にて新しいブランドの販売を開始いたしました。",
    category: "ニュース",
    tags: [],
    publishedAt: "2026-01-01",
    body: [],
    bodyHtml:
      "<p>五星の最大の特徴は、「沖縄×北海道」という2つの地域の魅力を掛け合わせた海鮮丼です。</p><p>また、五星では「五感で楽しむ体験型の店舗」というコンセプトを大切にしています。</p>",
  },
];

export async function getNewsArticles(): Promise<CmsPost[]> {
  const fromCms = await getNewsArticlesFromMicroCMS(100);
  return fromCms ?? mockNewsArticles;
}

export async function getNewsArticleBySlug(slug: string): Promise<CmsPost | undefined> {
  const fromCms = await getNewsArticleBySlugFromMicroCMS(slug);
  if (fromCms) return fromCms;
  return mockNewsArticles.find((post) => post.slug === slug);
}
