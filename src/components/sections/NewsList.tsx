import Link from "next/link";
import { getActiveNewsPins } from "@/lib/cms/news-pin";
import { getPosts } from "@/lib/cms/posts";
import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/IconButton";

type NewsRow = {
  key: string;
  href: string;
  date: string;
  category: string;
  title: string;
};

export async function NewsList() {
  const [pins, posts] = await Promise.all([getActiveNewsPins(), getPosts()]);

  const pinRows: NewsRow[] = pins.slice(0, 2).map((pin, index) => ({
    key: `pin-${index}`,
    href: pin.linkUrl,
    date: pin.displayFrom?.slice(0, 10).replaceAll("-", ".") ?? "",
    category: "Pickup",
    title: pin.label,
  }));

  const postRows: NewsRow[] = posts.slice(0, Math.max(0, 4 - pinRows.length)).map((post) => ({
    key: `post-${post.slug}`,
    href: `/magazine/${post.slug}`,
    date: post.publishedAt.replaceAll("-", "."),
    category: post.category || "Magazine",
    title: post.title,
  }));

  const rows = pinRows.concat(postRows);

  return (
    <section className="bg-[var(--color-accent)] py-5">
      <Container size="wide">
        <div className="relative overflow-hidden rounded-[20px] bg-[var(--color-yellow)] px-6 py-12 text-black sm:px-10 lg:px-[60px] lg:py-[70px]">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-[60px]">
            <div className="relative flex items-start gap-4 lg:gap-6">
              <span
                aria-hidden="true"
                className="font-[family-name:var(--font-display)] font-black uppercase leading-none text-white"
                style={{ writingMode: "vertical-rl", fontSize: "clamp(72px,9vw,120px)" }}
              >
                News
              </span>
              <div className="flex flex-col items-center gap-8 pt-4">
                <span
                  className="font-[family-name:var(--font-display)] text-3xl font-black leading-[1.05] text-white sm:text-[44px]"
                  style={{ writingMode: "vertical-rl" }}
                >
                  新着情報
                </span>
                <Link href="/magazine" aria-label="新着情報一覧へ" className="block">
                  <IconButton size="lg" />
                </Link>
              </div>
            </div>

            <div className="divide-y divide-black border-y border-black">
              {rows.map((row) => (
                <Link
                  key={row.key}
                  href={row.href}
                  className="grid gap-3 py-6 text-sm font-black transition hover:text-[var(--color-brand)] md:grid-cols-[110px_120px_1fr_32px] md:items-center md:gap-[40px]"
                >
                  <span className="font-[family-name:var(--font-display)] text-base">{row.date}</span>
                  <span className="w-fit rounded-full border border-black bg-transparent px-5 py-1 text-sm">{row.category}</span>
                  <span className="text-base">{row.title}</span>
                  <IconButton size="sm" className="hidden md:grid" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
