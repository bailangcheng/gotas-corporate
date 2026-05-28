import Link from "next/link";
import { getPosts } from "@/lib/cms/posts";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export async function MagazinePreview() {
  const posts = await getPosts();
  const cards = Array.from({ length: 6 }, (_, index) => posts[index % posts.length]);

  return (
    <section className="bg-[var(--color-accent)]">
      <div className="bg-[var(--color-green)] px-6 pb-[140px] pt-[100px] text-white sm:px-10 lg:rounded-tr-[120px] lg:px-[40px] lg:pb-[200px]">
        <Container size="wide">
          <div className="mx-auto flex max-w-[767px] flex-col items-center gap-10 text-center">
            <p className="font-[family-name:var(--font-display)] text-5xl font-black leading-none sm:text-[80px]">GO-TAs Magazine</p>
            <h2 className="text-xl font-black sm:text-[28px]">GO-TAsマガジン</h2>
          </div>

          <div className="relative mx-auto mt-[100px] grid w-full max-w-[1361px] grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((post, index) => (
              <article key={`${post.slug}-${index}`} className="relative">
                <Link href={`/magazine/${post.slug}`} className="group flex flex-col gap-6">
                  <div className="relative aspect-[427/285] rounded-[10px] border border-black bg-[#d5d5d5] shadow-[4px_6px_0_0_black] transition group-hover:-translate-y-1">
                    {index === 0 ? <NewBadge /> : null}
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full border border-black bg-white px-5 py-0.5 text-base font-black text-black"># {post.category}</span>
                    <span className="text-base font-black">2026.01.01</span>
                  </div>
                  <p className="text-base font-black leading-[1.75]">{post.title}タイトルが入りますタイトルが入りますタイトルが入ります。</p>
                </Link>
                {index < 2 || (index > 2 && index < 5) ? (
                  <span aria-hidden="true" className="pointer-events-none absolute -right-2.5 top-0 hidden h-[calc(100%-3rem)] w-px bg-white/40 lg:block" />
                ) : null}
              </article>
            ))}
          </div>

          <div className="mt-[100px] flex justify-center">
            <ButtonLink href="/magazine" variant="secondary" className="h-20 w-[300px]">
              更に見る
            </ButtonLink>
          </div>
        </Container>
      </div>
    </section>
  );
}

function NewBadge() {
  return (
    <span
      aria-hidden="true"
      className="absolute -top-5 right-6 grid size-[96px] place-items-center bg-black text-white"
      style={{
        clipPath:
          "polygon(50% 0%, 61% 12%, 76% 6%, 79% 23%, 95% 25%, 90% 40%, 100% 50%, 90% 60%, 95% 75%, 79% 77%, 76% 94%, 61% 88%, 50% 100%, 39% 88%, 24% 94%, 21% 77%, 5% 75%, 10% 60%, 0% 50%, 10% 40%, 5% 25%, 21% 23%, 24% 6%, 39% 12%)",
      }}
    >
      <span className="font-[family-name:var(--font-display)] -rotate-[14deg] text-[22px] font-black leading-none">NEW!</span>
    </span>
  );
}
