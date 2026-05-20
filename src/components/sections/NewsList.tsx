import Link from "next/link";
import { getPosts } from "@/lib/cms/posts";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export async function NewsList() {
  const posts = await getPosts();

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Magazine" title="最新情報" lead="Notion CMS接続前の仮記事を表示しています。" />
          <Link href="/magazine" className="text-sm font-semibold text-blue-700 hover:text-blue-900">
            Magazine一覧へ
          </Link>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/magazine/${post.slug}`} className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-sm text-slate-500">{post.publishedAt} / {post.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

