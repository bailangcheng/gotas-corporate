import Link from "next/link";
import { getPosts } from "@/lib/cms/posts";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";

export async function NewsList() {
  const posts = await getPosts();

  return (
    <section className="bg-white py-[var(--space-section-y)]">
      <Container size="wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Magazine" title="最新情報" lead="Notion CMS接続前の仮記事を表示しています。" />
          <TextLink href="/magazine">Magazine一覧へ</TextLink>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/magazine/${post.slug}`} className="group block">
              <Card className="h-full shadow-none transition group-hover:border-[var(--color-brand)]">
                <p className="text-sm font-semibold text-[var(--color-ink-muted)]">
                  {post.publishedAt} / {post.category}
                </p>
                <h3 className="mt-4 text-xl font-black text-[var(--color-ink)]">{post.title}</h3>
                <p className="mt-4 text-sm leading-8 text-[var(--color-ink-soft)]">{post.excerpt}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
