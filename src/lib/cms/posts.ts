import { mockPosts } from "./mock-posts";

export async function getPosts() {
  return mockPosts;
}

export async function getPostBySlug(slug: string) {
  return mockPosts.find((post) => post.slug === slug);
}

