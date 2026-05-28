import { mockPosts } from "./mock-posts";
import {
  getMagazinePostBySlugFromMicroCMS,
  getMagazinePostsFromMicroCMS,
} from "./microcms";
import type { CmsPost } from "./types";

export async function getPosts(): Promise<CmsPost[]> {
  const fromCms = await getMagazinePostsFromMicroCMS();
  return fromCms ?? mockPosts;
}

export async function getPostBySlug(slug: string): Promise<CmsPost | undefined> {
  const fromCms = await getMagazinePostBySlugFromMicroCMS(slug);
  if (fromCms) return fromCms;
  return mockPosts.find((post) => post.slug === slug);
}
