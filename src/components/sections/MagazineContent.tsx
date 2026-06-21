'use client';

import { useState, useMemo, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { CmsPost } from '@/lib/cms/types';

const CATEGORIES = [
  { label: 'すべて', value: '' },
  { label: '# コーポレート', value: 'コーポレート' },
  { label: '# 飲食', value: '飲食' },
  { label: '# IT', value: 'IT' },
  { label: '# 人材支援', value: '人材支援' },
  { label: '# 不動産', value: '不動産' },
  { label: '# お知らせ', value: 'お知らせ' },
  { label: '# レポート', value: 'レポート' },
];

const POSTS_PER_PAGE = 9;

export default function MagazineContent({ posts }: { posts: CmsPost[] }) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  function toggleTag(value: string) {
    if (value === '') {
      setSelectedTags([]);
      setPage(1);
      return;
    }
    setSelectedTags((prev) => {
      const next = prev.includes(value)
        ? prev.filter((t) => t !== value)
        : [...prev, value];
      return next;
    });
    setPage(1);
  }

  const filteredPosts = useMemo(() => {
    if (selectedTags.length === 0) return posts;
    return posts.filter((post) =>
      selectedTags.some(
        (tag) => post.category === tag || post.tags.includes(tag)
      )
    );
  }, [posts, selectedTags]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const pagedPosts = filteredPosts.slice(
    (safePage - 1) * POSTS_PER_PAGE,
    safePage * POSTS_PER_PAGE
  );

  return (
    <>
      {/* bg-2: decorative layer above bg-ellipse, below content (z-1 < z-[2]) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/magazine/bg-2.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-auto z-[-1]"
      />

      {/* ── Tag filter ── */}
      <div className="bg-white border border-black rounded-[20px] md:rounded-[60px] shadow-[3px_5px_0_black] px-2.75 py-4 md:px-5 flex flex-wrap items-center gap-y-2.5">
        {CATEGORIES.map((cat, idx) => {
          const isAll = cat.value === '';
          const isActive = isAll
            ? selectedTags.length === 0
            : selectedTags.includes(cat.value);
          return (
            <Fragment key={cat.value}>
              {idx > 0 && (
                <span className="h-3 w-0.5 bg-black mx-5 md:mx-7.5 shrink-0" aria-hidden="true" />
              )}
              <button
                type="button"
                onClick={() => toggleTag(cat.value)}
                className={[
                  'rounded-[30px] px-3.5 py-0.5 md:px-5 md:py-1.5 text-[12px] md:text-[16px] font-bold leading-none whitespace-nowrap transition-colors border border-black',
                  isAll ? 'min-w-26 md:min-w-36 text-center' : '',
                  isActive ? 'bg-[#111] text-white border-[#111]' : 'bg-white text-black hover:bg-black/5',
                ].filter(Boolean).join(' ')}
              >
                {cat.label}
              </button>
            </Fragment>
          );
        })}
      </div>

      {/* ── Article grid ── */}
      <div className="mt-20">
        {filteredPosts.length === 0 ? (
          <p className="py-20 text-center text-[18px] font-bold text-white">
            記事がありません
          </p>
        ) : (
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-15 md:gap-y-25">
            {pagedPosts.map((post, idx) => {
              const isFirst = safePage === 1 && idx === 0;
              return (
                <Link
                  key={post.slug}
                  href={`/magazine/${post.slug}`}
                  className="group flex flex-col gap-6 md:gap-7.5 w-full max-w-[335px] md:w-100 md:max-w-none shrink-0"
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
                    {isFirst && (
                      <div className="absolute right-3 top-3 size-[60px] md:size-18 drop-shadow-[2px_2px_0_#000]" aria-label="最新記事">
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
              );
            })}
          </div>
        )}
      </div>

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <div className="mt-20 flex items-center justify-center gap-5">
          {Array.from({ length: totalPages }).map((_, i) => {
            const n = i + 1;
            const isActive = n === safePage;
            return (
              <button
                key={n}
                type="button"
                onClick={() => setPage(n)}
                className={`grid size-10 place-items-center rounded-[25px] border-[1.25px] border-black font-display text-[16px] font-bold shadow-[1.25px_1.25px_0_black] transition-colors ${
                  isActive
                    ? 'bg-white text-black'
                    : 'bg-[#00ab41] text-black hover:bg-[#00c44c]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {n}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}
