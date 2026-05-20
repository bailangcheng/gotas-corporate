export type CmsPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  coverImage?: string;
  body: Array<{
    type: "paragraph" | "heading" | "list";
    text: string;
  }>;
};

