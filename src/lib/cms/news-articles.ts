import { getPosts } from "./posts";
import type { CmsPost } from "./types";

/**
 * News は magazine の絞り込みビュー（独立エンドポイントは持たない）。
 * カテゴリ/タグがこのリストに該当する magazine 記事を「お知らせ」として扱う。
 * 記事の正規URLは /magazine/[slug] に一本化している。
 */
export const NEWS_CATEGORIES = ["お知らせ", "ニュース", "プレス", "Press"];

function isNews(post: CmsPost): boolean {
  return (
    NEWS_CATEGORIES.includes(post.category) ||
    post.tags.some((tag) => NEWS_CATEGORIES.includes(tag))
  );
}

/** お知らせ一覧（magazine をニュース系カテゴリで絞り込み、公開日降順）。 */
export async function getNewsArticles(): Promise<CmsPost[]> {
  const posts = await getPosts();
  return posts.filter(isNews);
}
