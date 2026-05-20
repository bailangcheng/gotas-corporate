import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
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
      <section className="py-14 sm:py-16">
        <Container>
          <article className="mx-auto max-w-3xl rounded-lg border border-slate-200 bg-white p-6 leading-8 text-slate-700 sm:p-8">
            <p className="text-sm text-slate-500">{post.publishedAt}</p>
            <div className="mt-6 grid gap-5">
              {post.body.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={`${block.type}-${index}`} className="text-2xl font-semibold text-slate-950">
                      {block.text}
                    </h2>
                  );
                }

                return <p key={`${block.type}-${index}`}>{block.text}</p>;
              })}
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}

