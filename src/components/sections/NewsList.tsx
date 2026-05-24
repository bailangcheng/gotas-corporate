import Link from "next/link";
import { getPosts } from "@/lib/cms/posts";
import { Container } from "@/components/ui/Container";

export async function NewsList() {
  const posts = await getPosts();
  const newsItems = posts.concat(posts).slice(0, 4);

  return (
    <section className="bg-[var(--color-accent)] py-5">
      <Container size="wide">
        <div className="grid overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-yellow)] px-8 py-12 text-black lg:grid-cols-[200px_1fr] lg:px-10">
          <div className="flex items-center gap-6 lg:block">
            <p className="font-[family-name:var(--font-display)] text-7xl font-black leading-none text-white lg:[writing-mode:vertical-rl] lg:text-[110px]">
              News
            </p>
            <div className="lg:mt-4 lg:flex lg:items-center lg:gap-5">
              <h2 className="text-3xl font-black leading-tight lg:[writing-mode:vertical-rl]">新着情報</h2>
              <Link href="/magazine" className="mt-5 hidden size-[52px] place-items-center rounded-full border border-black bg-white text-3xl font-black shadow-[var(--shadow-soft)] lg:grid">
                →
              </Link>
            </div>
          </div>

          <div className="mt-8 divide-y divide-black border-y border-black lg:mt-0">
            {newsItems.map((post, index) => (
              <Link
                key={`${post.slug}-${index}`}
                href={`/magazine/${post.slug}`}
                className="grid gap-4 py-6 text-sm font-black transition hover:text-[var(--color-brand)] md:grid-cols-[120px_116px_1fr_32px] md:items-center"
              >
                <span className="font-[family-name:var(--font-display)]">2025.11.13</span>
                <span className="w-fit rounded-full border border-black px-5 py-1 text-xs">{post.category}</span>
                <span>{index % 2 === 0 ? "嵐々亭本店、新ブランドの販売を始めました" : post.title}</span>
                <span className="hidden size-6 place-items-center rounded-full border border-black text-sm md:grid">→</span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
