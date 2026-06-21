import Image from "next/image";
import Link from "next/link";
import type { CmsPost } from "@/lib/cms/types";
import { IconButton } from "@/components/ui/IconButton";

type Props = {
  post: CmsPost;
  newArticles: CmsPost[];
};

export function MagazineArticleContent({ post, newArticles }: Props) {
  const displayTag = post.tags[0] ?? post.category;
  const displayDate = post.publishedAt.replace(/-/g, ".");

  return (
    <>
      {/* ── White content section ── */}
      <div className="relative z-10 rounded-tr-[80px] md:rounded-tr-[120px] bg-white pt-12 md:pt-[120px] pb-16 md:pb-[80px]">

        {/* Breadcrumb */}
        <div className="px-5 md:px-20 mb-12 md:mb-[120px]">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-display text-[14px] md:text-[16px] font-bold text-black leading-none">
              GO-TAs Magazine
            </span>
            <span className="h-7 w-px bg-black/20" aria-hidden />
            {displayTag && (
              <span className="rounded-[30px] border border-black bg-white px-[14px] md:px-5 py-[2px] text-[12px] md:text-[16px] font-bold text-black leading-none">
                # {displayTag}
              </span>
            )}
            <span className="h-7 w-px bg-black/20" aria-hidden />
            <span className="font-display text-[14px] md:text-[16px] text-black leading-none">
              {displayDate}
            </span>
          </div>
        </div>

        {/* Article body */}
        <div className="px-5 md:px-20">
          <div className="mx-auto flex max-w-[960px] flex-col gap-[40px] md:gap-[60px]">

            {/* Title */}
            <h1 className="text-[28px] md:text-[36px] font-bold leading-[1.8] text-black text-justify">
              {post.title}
            </h1>

            {/* Cover image */}
            {post.coverImage && (
              <div className="relative aspect-video w-full overflow-hidden rounded-[14px] md:rounded-[20px]">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) calc(100vw - 40px), 960px"
                  priority
                />
              </div>
            )}

            {/* Divider */}
            <hr className="border-t border-black/15" />

            {/* Body HTML from microCMS */}
            {post.bodyHtml ? (
              <div
                className="grid gap-6 md:gap-8 text-[14px] md:text-[16px] leading-[2] text-black text-justify
                  [&_h2]:text-[18px] [&_h2]:md:text-[24px] [&_h2]:font-bold [&_h2]:leading-[1.6] [&_h2]:text-black
                  [&_h3]:text-[16px] [&_h3]:md:text-[20px] [&_h3]:font-bold [&_h3]:leading-[1.6]
                  [&_p]:text-justify [&_p]:leading-[2]
                  [&_a]:text-[#0071eb] [&_a]:underline [&_a]:break-all
                  [&_img]:w-full [&_img]:rounded-[14px] [&_img]:object-cover
                  [&_figure]:w-full [&_figure]:grid [&_figure]:gap-2
                  [&_figcaption]:text-[12px] [&_figcaption]:text-center [&_figcaption]:text-black/50
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:grid [&_ul]:gap-2
                  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:grid [&_ol]:gap-2
                  [&_strong]:font-bold
                  [&_blockquote]:border-l-4 [&_blockquote]:border-black/20 [&_blockquote]:pl-4 [&_blockquote]:italic"
                dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
              />
            ) : (
              <div className="grid gap-6 md:gap-8 text-[14px] md:text-[16px] leading-[2] text-black text-justify">
                {post.body.map((block, index) => {
                  if (block.type === "heading") {
                    return (
                      <h2 key={index} className="text-[18px] md:text-[24px] font-bold leading-[1.6] text-black">
                        {block.text}
                      </h2>
                    );
                  }
                  return <p key={index}>{block.text}</p>;
                })}
              </div>
            )}

            {/* Divider */}
            <hr className="border-t border-black/15" />
          </div>
        </div>

        {/* Back to list button */}
        <div className="mt-[60px] md:mt-[120px] flex justify-center px-5">
          <Link
            href="/magazine"
            className="relative flex h-[80px] w-[300px] items-center justify-center rounded-full border border-black bg-[#00ab41] font-bold text-[16px] md:text-[18px] text-black shadow-[2px_4px_0_black] transition hover:-translate-y-0.5 active:translate-y-0"
          >
            <IconButton
              direction="left"
              tone="white"
              size="md"
              elevated
              className="absolute left-6"
            />
            一覧に戻る
          </Link>
        </div>
      </div>

      {/* ── Green new articles section ── */}
      {newArticles.length > 0 && (
        <div className="relative z-10 overflow-hidden rounded-tl-[80px] md:rounded-tl-[120px] bg-[#00ab41] px-5 md:px-20 pt-[80px] pb-[80px] md:pt-[80px] md:pb-[80px]">

          {/* Heading */}
          <div className="mb-10 md:mb-[40px] flex flex-col gap-1.5">
            <span className="font-display text-[14px] md:text-[16px] font-bold text-black leading-none">
              New articles
            </span>
            <span className="text-[28px] md:text-[32px] font-bold text-black leading-tight">
              新着記事
            </span>
          </div>

          {/* Article cards */}
          <div className="grid grid-cols-1 gap-[60px] md:grid-cols-3 md:gap-[30px]">
            {newArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/magazine/${article.slug}`}
                className="group flex flex-col gap-6 md:gap-[30px]"
              >
                {/* Thumbnail */}
                <div className="relative h-[188px] md:h-[225px] overflow-hidden rounded-[8px] md:rounded-[10px] bg-[#17140c]">
                  {article.coverImage ? (
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) calc(100vw - 40px), 400px"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm text-white/40">No Image</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <p className="line-clamp-2 text-[14px] md:text-[16px] font-bold leading-[1.6] text-black group-hover:underline">
                  {article.title}
                </p>

                {/* Tags + date */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {(article.tags.length > 0 ? article.tags : [article.category])
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((tag) => (
                        <span
                          key={tag}
                          className="rounded-[30px] border border-black bg-white px-[14px] py-0.5 text-[12px] md:text-[14px] font-bold leading-none"
                        >
                          # {tag}
                        </span>
                      ))}
                  </div>
                  <span className="shrink-0 text-[14px] md:text-[16px] font-bold text-black">
                    {article.publishedAt.replace(/-/g, ".")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
