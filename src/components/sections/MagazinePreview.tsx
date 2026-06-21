import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/cms/posts";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export async function MagazinePreview() {
  const posts = await getPosts();
  const cards = Array.from({ length: 6 }, (_, index) => posts[index % posts.length]);

  return (
    <section className="relative z-20 -mt-16 overflow-hidden rounded-tr-[60px] bg-green lg:-mt-30 lg:rounded-tr-[120px]">
      {/* Decorative bg overlay */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/bg-2.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-auto"
      />

      <div className="relative z-10 px-6 pt-16 pb-35 text-white sm:px-10 lg:px-10 lg:pb-50 lg:pt-25">
        <Container size="wide">
          {/* Section title — matches sub-page pattern */}
          <div className="mx-auto flex max-w-[767px] flex-col items-center gap-2.5 text-center">
            <h2 className="font-display text-[60px] font-black leading-none sm:text-[80px]">
              GO-TAs Magazine
            </h2>
            <p className="text-[28px] font-bold">GO-TAsマガジン</p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-15 mt-25">
            {cards.map((post, index) => (
              <Link
                key={`${post.slug}-${index}`}
                href={`/magazine/${post.slug}`}
                className="group flex flex-col gap-6 md:gap-7.5 w-full max-w-83.75 md:w-100 md:max-w-none shrink-0"
              >
                {/* Thumbnail */}
                <div className="relative h-47 md:h-56.25 overflow-hidden rounded-[10px] bg-[#17140c]">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 335px, 400px"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm text-white/40">No Image</span>
                    </div>
                  )}
                  {index === 0 && (
                    <div className="absolute right-3 top-3 size-15 md:size-18 drop-shadow-[2px_2px_0_#000]" aria-label="最新記事">
                      <svg viewBox="0 0 100 100" aria-hidden className="absolute inset-0 size-full text-yellow" fill="currentColor">
                        <path d="M50,2 L60.6,10.4 L74,8.4 L79,21 L91.6,26 L89.6,39.4 L98,50 L89.6,60.6 L91.6,74 L79,79 L74,91.6 L60.6,89.6 L50,98 L39.4,89.6 L26,91.6 L21,79 L8.4,74 L10.4,60.6 L2,50 L10.4,39.4 L8.4,26 L21,21 L26,8.4 L39.4,10.4 Z" />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center font-display text-[11px] md:text-[13px] font-black uppercase text-foreground">
                        NEW!
                      </span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <p className="line-clamp-2 text-[14px] md:text-[16px] font-bold leading-[1.6] text-black group-hover:underline">
                  {post.title}
                </p>

                {/* Tags + date */}
                <div className="flex items-center md:items-start justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {(post.tags.length > 0 ? post.tags : [post.category])
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center h-6 md:h-7 rounded-[30px] border border-black bg-white px-3.5 md:px-4 text-[12px] md:text-[14px] font-bold leading-none"
                        >
                          # {tag}
                        </span>
                      ))}
                  </div>
                  <span className="shrink-0 text-[14px] md:text-[16px] font-bold text-black">
                    {post.publishedAt.replace(/-/g, '.')}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-[100px] flex justify-center">
            <ButtonLink href="/magazine" variant="secondary" className="h-20 w-[300px] font-bold! btn-press">
              更に見る
            </ButtonLink>
          </div>
        </Container>
      </div>
    </section>
  );
}

