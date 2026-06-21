import { mockPosts } from "./mock-posts";
import {
  getMagazinePostBySlugFromMicroCMS,
  getMagazinePostsFromMicroCMS,
} from "./microcms";
import type { CmsPost } from "./types";

export const POSTS_PER_PAGE = 9;

export type PostsPage = {
  posts: CmsPost[];
  total: number;
  totalPages: number;
};

export async function getPosts(): Promise<CmsPost[]> {
  const fromCms = await getMagazinePostsFromMicroCMS(100);
  return fromCms ?? mockPosts;
}

export async function getPostsFiltered(options: {
  category?: string;
  page?: number;
  perPage?: number;
}): Promise<PostsPage> {
  const perPage = options.perPage ?? POSTS_PER_PAGE;
  const page = Math.max(1, options.page ?? 1);
  const cat = options.category?.trim() ?? "";

  const all = await getPosts();

  const filtered =
    !cat || cat === "すべて"
      ? all
      : all.filter(
          (post) =>
            post.category === cat ||
            post.tags.includes(cat),
        );

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(page, totalPages);
  const posts = filtered.slice((safePage - 1) * perPage, safePage * perPage);

  return { posts, total, totalPages };
}

export async function getPostBySlug(slug: string): Promise<CmsPost | undefined> {
  const fromCms = await getMagazinePostBySlugFromMicroCMS(slug);
  if (fromCms) return fromCms;
  return mockPosts.find((post) => post.slug === slug);
}
