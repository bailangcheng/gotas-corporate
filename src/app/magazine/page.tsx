import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { getPosts } from "@/lib/cms/posts";

export const metadata: Metadata = {
  title: "Magazine",
  description: "GO-TAsの最新情報、事業紹介、制作メモを掲載します。",
};

export default async function MagazinePage() {
  const posts = await getPosts();

  return (
    <>
      <PageHero eyebrow="Magazine" title="Magazine" summary="GO-TAsの最新情報、事業紹介、制作メモを掲載します。" />
      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-4 lg:grid-cols-2">
            {posts.map((post) => (
              <Link key={post.slug} href={`/magazine/${post.slug}`} className="rounded-lg border border-slate-200 bg-white p-5">
                <p className="text-sm text-slate-500">{post.publishedAt} / {post.category}</p>
                <h2 className="mt-3 text-xl font-semibold text-slate-950">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

