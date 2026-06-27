import type { MetadataRoute } from "next";
import { siteConfig, staticPages } from "@/content/site";
import { getPosts } from "@/lib/cms/posts";

/**
 * 静的ルート（site.ts）＋ magazine 記事スラッグから sitemap を生成する。
 * 本番URLは NEXT_PUBLIC_SITE_URL（siteConfig.url）が参照される。
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url.replace(/\/$/, "");

  const core = ["/", "/magazine", "/news", "/contact", "/privacy"];
  const staticHrefs = staticPages
    .map((page) => page.href)
    .filter((href) => href && href.startsWith("/"));
  const routes = Array.from(new Set([...core, ...staticHrefs]));

  const staticEntries: MetadataRoute.Sitemap = routes.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
  }));

  const posts = await getPosts();
  const articleEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/magazine/${post.slug}`,
    lastModified: post.publishedAt || undefined,
    changeFrequency: "weekly",
  }));

  return [...staticEntries, ...articleEntries];
}
