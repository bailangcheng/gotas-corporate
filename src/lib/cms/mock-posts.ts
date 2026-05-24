import type { CmsPost } from "./types";

export const mockPosts: CmsPost[] = [
  {
    slug: "launch-preparation",
    title: "GO-TAsコーポレートサイト準備中",
    excerpt: "新しいコーポレートサイトの公開に向けて、情報整理とCMS設計を進めています。",
    category: "お知らせ",
    tags: ["Corporate", "Project"],
    publishedAt: "2026-05-20",
    body: [
      {
        type: "paragraph",
        text: "このページはNotion CMS接続前の仮コンテンツです。Notion databaseの設計が確定後、公開記事と差し替えます。",
      },
      {
        type: "heading",
        text: "CMS方針",
      },
      {
        type: "paragraph",
        text: "記事一覧、カテゴリ、タグ、公開日、SEO情報をNotion側で管理し、Next.js側で安全に取得して表示します。",
      },
    ],
  },
  {
    slug: "business-overview",
    title: "事業案内ページの構成整理",
    excerpt: "デジタルサイネージ、Web制作、動画制作、SNS、人材紹介、飲食領域を整理しています。",
    category: "制作メモ",
    tags: ["Business", "Sitemap"],
    publishedAt: "2026-05-20",
    body: [
      {
        type: "paragraph",
        text: "下層ページのワイヤーフレームが確定するまで、ページ構成とコンポーネント設計を先行します。",
      },
    ],
  },
];
