import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { getPostBySlug, getPosts } from "@/lib/cms/posts";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} summary={post.excerpt} />
      <section className="py-[var(--space-section-y)]">
        <Container size="narrow">
          <Card as="article" className="shadow-none">
            <p className="text-sm font-semibold text-[var(--color-ink-muted)]">{post.publishedAt}</p>
            <div className="mt-8 grid gap-6 leading-8 text-[var(--color-ink-soft)]">
              {post.body.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={`${block.type}-${index}`} className="text-2xl font-black text-[var(--color-ink)]">
                      {block.text}
                    </h2>
                  );
                }

                return <p key={`${block.type}-${index}`}>{block.text}</p>;
              })}
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
