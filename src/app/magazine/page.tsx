import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
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
      <section className="py-[var(--space-section-y)]">
        <Container size="wide">
          <div className="grid gap-5 lg:grid-cols-2">
            {posts.map((post) => (
              <Link key={post.slug} href={`/magazine/${post.slug}`} className="group block">
                <Card className="h-full shadow-none group-hover:border-[var(--color-brand)]">
                  <p className="text-sm font-semibold text-[var(--color-ink-muted)]">
                    {post.publishedAt} / {post.category}
                  </p>
                  <h2 className="mt-4 text-xl font-black text-[var(--color-ink)]">{post.title}</h2>
                  <p className="mt-4 text-sm leading-8 text-[var(--color-ink-soft)]">{post.excerpt}</p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
