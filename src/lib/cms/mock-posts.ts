import type { CmsPost } from "./types";

export const mockPosts: CmsPost[] = [
  {
    slug: "launch-preparation",
    title: "GO-TAsコーポレートサイト準備中",
    excerpt: "新しいコーポレートサイトの公開に向けて、情報整理とCMS設計を進めています。",
    category: "お知らせ",
    tags: ["Corporate", "Project"],
    publishedAt: "2026-05-20",
    coverImage: "/images/magazine/thumbnails/01.png",
    body: [
      {
        type: "paragraph",
        text: "このページはmicroCMS接続前の仮コンテンツです。microCMS側の運用が始まり次第、公開記事と差し替えます。",
      },
      {
        type: "heading",
        text: "CMS方針",
      },
      {
        type: "paragraph",
        text: "記事一覧、カテゴリ、タグ、公開日、SEO情報をmicroCMS側で管理し、Next.jsはサーバーサイドで取得して表示します。",
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
    coverImage: "/images/magazine/thumbnails/02.png",
    body: [
      {
        type: "paragraph",
        text: "下層ページのワイヤーフレームが確定するまで、ページ構成とコンポーネント設計を先行します。",
      },
    ],
  },
  {
    slug: "digital-signage-launch",
    title: "デジタルサイネージ事業の最新情報",
    excerpt: "屋外・屋内を問わず、高品質なデジタルサイネージソリューションを提供します。",
    category: "事業紹介",
    tags: ["Digital Signage", "Business"],
    publishedAt: "2026-05-18",
    coverImage: "/images/magazine/thumbnails/03.png",
    body: [
      {
        type: "paragraph",
        text: "GO-TAsのデジタルサイネージ事業では、最新テクノロジーを活用した映像コンテンツ配信を実現しています。",
      },
    ],
  },
  {
    slug: "web-production-case",
    title: "Web制作・動画制作の最新事例",
    excerpt: "クライアントの課題解決に向けたクリエイティブな制作事例をご紹介します。",
    category: "制作事例",
    tags: ["Web", "Video"],
    publishedAt: "2026-05-15",
    coverImage: "/images/magazine/thumbnails/04.png",
    body: [
      {
        type: "paragraph",
        text: "ブランドの世界観を映像とWebで統一した表現により、高いコンバージョン率を達成しました。",
      },
    ],
  },
  {
    slug: "sns-strategy",
    title: "SNSマーケティング戦略のポイント",
    excerpt: "各SNSプラットフォームの特性を活かした効果的な発信方法をまとめました。",
    category: "マーケティング",
    tags: ["SNS", "Marketing"],
    publishedAt: "2026-05-12",
    coverImage: "/images/magazine/thumbnails/05.png",
    body: [
      {
        type: "paragraph",
        text: "InstagramやXなど各プラットフォームに最適化したコンテンツ設計が成果を左右します。",
      },
    ],
  },
  {
    slug: "recruit-support",
    title: "人材紹介サービスのご案内",
    excerpt: "GO-TAsの人材紹介サービスで、企業と求職者のベストマッチングを実現します。",
    category: "採用支援",
    tags: ["Recruit", "HR"],
    publishedAt: "2026-05-10",
    coverImage: "/images/magazine/thumbnails/06.png",
    body: [
      {
        type: "paragraph",
        text: "業界特化型の人材データベースと丁寧なヒアリングで、ミスマッチを防ぎます。",
      },
    ],
  },
];
