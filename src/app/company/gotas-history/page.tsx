/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "会社沿革",
  description: "GO-TAsの会社沿革をご紹介します。",
};

const historyData = [
  {
    year: 2012,
    events: [
      "株式会社ゴータススタッフ（現在の株式会社GO-TAs）を設立。\n人材紹介業を中心に事業を開始。",
    ],
  },
  { year: 2019, events: ["デジタルサイネージ事業を開始"] },
  {
    year: 2022,
    events: [
      "事業承継を本格的に開始。高級配達弁当「さしすせそ」を事業承継。\n（現在は嵐々亭本店）",
    ],
  },
  { year: 2023, events: ["理学療法士向けアカウント「リハビリゴリラ」を開設。"] },
  {
    year: 2024,
    events: [
      "沖縄県事業承継・引継ぎ支援センターと連携し、「具志冷凍食品」を事業承継。",
      "医療従事者向け副業支援プログラム「リハサポ」を開始。",
      "沖縄県における仲介業務を中心とした不動産業を開始。",
    ],
  },
  {
    year: 2025,
    events: [
      "弁当屋「いすのき惣菜館」を事業承継。",
      "弁当屋「ラウレアキッチン」を事業承継。\n（現在は嵐々亭やんばる店）",
      "有限会社すばる商事を事業承継。",
      "海鮮丼「五星那覇本店」をオープン。",
    ],
  },
  {
    year: 2026,
    events: [
      "海鮮丼「五星那覇壺屋店」をオープン。",
      "高級配達弁当「嵐々亭久留米店」をオープン。",
    ],
  },
];

export default function HistoryPage() {
  return (
    <>
      <section className="bg-accent">
        <PageHero eyebrow="HISTORY" title="会社沿革" />
      </section>

      <div className="bg-accent">
        <section className="rounded-tr-[120px] bg-white px-[clamp(20px,5.56vw,80px)] py-[120px]">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-15 sm:gap-30">
            {/* 写真 */}
            <div className="grid grid-cols-1 overflow-hidden rounded-[20px] sm:grid-cols-2">
              <div className="relative h-[240px] sm:h-[360px]">
                <Image
                  src="/images/history/history-01.png"
                  alt="GO-TAsの活動風景"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 640px"
                />
              </div>
              <div className="relative h-[240px] sm:h-[360px]">
                <Image
                  src="/images/history/history-02.png"
                  alt="GO-TAsの活動風景"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 640px"
                />
              </div>
            </div>

            {/* 沿革テーブル */}
            <div className="flex flex-col items-start gap-15 lg:flex-row lg:gap-38">
              {/* 左ラベル */}
              <div className="flex shrink-0 flex-col gap-1.5">
                <span className="font-display text-[16px] font-bold text-black">History</span>
                <span className="text-[28px] font-bold text-black">会社沿革</span>
              </div>

              {/* 右: タイムライン */}
              <div className="flex-1 rounded-[20px] bg-surface px-5 py-4 sm:px-15 sm:py-6">
                {historyData.map((entry) => (
                  <div key={entry.year}>
                    {entry.events.map((event, eventIdx) => (
                      <div key={eventIdx}>
                        {eventIdx > 0 && (
                          <div className="border-t border-line-subtle" />
                        )}
                        <div className="flex flex-col gap-2 px-5 py-6 sm:flex-row sm:items-start sm:gap-10">
                          <span
                            className={`font-display text-[36px] font-bold leading-tight text-accent sm:w-50 sm:shrink-0${
                              eventIdx > 0 ? " hidden sm:block sm:invisible" : ""
                            }`}
                          >
                            {entry.year}
                          </span>
                          <p className="flex-1 whitespace-pre-line text-[16px] font-bold leading-normal text-black">
                            {event}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div className="border-t border-line-subtle" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
