import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/lib/cms/posts";
import { MagazineArticleContent } from "@/components/sections/MagazineArticleContent";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([
    getPostBySlug(slug),
    getPosts(),
  ]);

  if (!post) notFound();

  const newArticles = allPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="relative overflow-x-hidden bg-[#ff3f31]">

      {/* ── Decorative blobs (same as magazine list) ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/svg/magazine/bg-01.svg"
          alt=""
          className="absolute top-0 left-0 w-full h-auto"
        />
      </div>

      {/* ── Hero ── */}
      <div className="relative z-10 flex min-h-106.25 md:min-h-120 flex-col items-center justify-center gap-2.5 px-4 text-center text-white">
        <h2 className="font-display text-[clamp(40px,5.56vw,80px)] font-black leading-none whitespace-nowrap">
          GO-TAs Magazine
        </h2>
        <p className="text-[clamp(18px,1.94vw,28px)] font-black">GO-TAsマガジン</p>
      </div>

      {/* ── Article content + new articles ── */}
      <MagazineArticleContent post={post} newArticles={newArticles} />

    </div>
  );
}
