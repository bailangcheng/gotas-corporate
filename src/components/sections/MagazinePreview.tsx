import Link from "next/link";
import { getPosts } from "@/lib/cms/posts";
import { Container } from "@/components/ui/Container";

export async function MagazinePreview() {
  const posts = await getPosts();

  return (
    <section className="bg-[var(--color-green)] py-[var(--space-section-y)] text-white lg:rounded-tr-[var(--radius-display)]">
      <Container size="wide">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-[family-name:var(--font-display)] text-5xl font-black leading-none sm:text-[80px]">GO-TAs Magazine</p>
          <h2 className="mt-8 text-2xl font-black">GO-TAsマガジン</h2>
        </div>

        <div className="mt-[100px] grid gap-10 lg:grid-cols-3">
          {posts.concat(posts).slice(0, 3).map((post, index) => (
            <Link key={`${post.slug}-${index}`} href={`/magazine/${post.slug}`} className="group block">
              <div className="aspect-[427/285] rounded-[10px] border border-black bg-[#d5d5d5] shadow-[var(--shadow-card)] transition group-hover:-translate-y-1" />
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="rounded-full border border-black bg-white px-5 py-1 text-sm font-black text-black"># {post.category}</span>
                <span className="text-sm font-black text-white">2026.01.01</span>
              </div>
              <h3 className="mt-5 text-base font-black leading-7 text-white">{post.title}</h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
