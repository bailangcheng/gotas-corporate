/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { InfoTable, type InfoTableRow } from "@/components/ui/InfoTable";
import { IconButton } from "@/components/ui/IconButton";
import { Container } from "@/components/ui/Container";
import { companyOverview } from "@/content/company-overview";

export const metadata: Metadata = {
  title: "企業情報",
  description: "株式会社GO-TAsの会社概要・運営店舗情報・メディア掲載をご紹介します。",
};

const profileRows: InfoTableRow[] = [
  { label: "会社名", value: companyOverview.companyName },
  ...(companyOverview.founded ? [{ label: "設立", value: companyOverview.founded }] : []),
  {
    label: "所在地",
    value: `〒901-2125\n${companyOverview.address}`,
    valueHref: companyOverview.mapUrl,
    valueLinkLabel: "Google Mapsで見る",
  },
  ...(companyOverview.capital ? [{ label: "資本金", value: companyOverview.capital }] : []),
  ...(companyOverview.employees ? [{ label: "従業員数", value: companyOverview.employees }] : []),
  { label: "事業内容", value: companyOverview.businessSummary },
  ...companyOverview.extraRows,
];

const stores = [
  { name: "嵐々亭（本店）", image: "/images/company/stores/ranrantei.png" },
  { name: "具志冷凍食品", image: "/images/company/stores/gushi.png" },
  { name: "いすの木惣菜館", image: "/images/company/stores/isunoki.png" },
  { name: "嵐々亭（やんばる店）", image: "/images/company/stores/ranrantei-yanbaru.png" },
  { name: "すばる商事", image: "/images/company/stores/subaru.png" },
  { name: "海鮮丼専門店五星", image: "/images/company/stores/gosei.png" },
];

const tvMedia = [
  "/images/company/media/tv-1.png",
  "/images/company/media/tv-2.png",
  "/images/company/media/tv-3.png",
];

const newspapers = [
  "老舗精肉店　事業承継　引継ぎ式／ビジネスキャッチー",
  "人気精肉店、DX化託す　具志冷凍食品　取引や従業員の雇用継続【継…",
  "馬刺し、やぎ刺しをDX化　ゴータスが具志冷凍を事業承継　IT活用し販…",
  "精肉店を事業承継　具志冷凍食品　ゴータスへ",
  "理学療法士のための副業支援スクール「リハサポ」開講収入の壁を越える…",
];

function SectionLabel({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex shrink-0 flex-col gap-1.5">
      <span className="font-display text-[16px] font-bold text-black">{eyebrow}</span>
      <span className="text-[28px] font-bold text-black">{title}</span>
    </div>
  );
}

export default function CompanyPage() {
  return (
    <>
      {/* ── Hero (red bg) ── */}
      <section className="bg-accent">
        <PageHero eyebrow="Company" title="企業情報" />
      </section>

      {/* ── White content ── */}
      <div className="bg-accent">
        <section className="rounded-tr-[120px] bg-white px-[clamp(20px,5.56vw,80px)] py-15 sm:py-30">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-15 sm:gap-30">

            {/* ① 会社概要 */}
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-[136px]">
              <SectionLabel eyebrow="Company profile" title="会社概要" />
              <div className="w-full flex-1 rounded-[24px] bg-surface py-5 sm:py-15">
                <InfoTable rows={profileRows} />
              </div>
            </div>

            {/* ② 運営店舗情報 */}
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-[88px]">
              <SectionLabel eyebrow="Store Information" title="運営店舗情報" />
              <div className="w-full flex-1 rounded-[24px] bg-surface p-5 sm:p-15">
                <div className="flex flex-wrap gap-x-8 gap-y-12">
                  {stores.map((store) => (
                    <div key={store.name} className="flex w-full flex-col gap-5 sm:w-68">
                      <div className="relative h-[154px] overflow-hidden rounded-[10px] bg-surface-warm">
                        <Image
                          src={store.image}
                          alt={store.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) calc(100vw - 40px), 272px"
                        />
                      </div>
                      <p className="text-[20px] font-bold leading-[1.5] text-black">
                        {store.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ③ メディア掲載 */}
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-[88px]">
              <SectionLabel eyebrow="Media coverage" title="メディア掲載" />
              <div className="w-full flex-1 rounded-[24px] bg-surface p-5 sm:p-15">
                <div className="flex flex-col gap-8">
                  <p className="text-[16px] font-bold text-black">テレビ</p>
                  <div className="flex flex-wrap gap-8">
                    {tvMedia.map((src, i) => (
                      <div key={i} className="relative h-[182px] w-full overflow-hidden rounded-[10px] sm:w-68">
                        <Image
                          src={src}
                          alt={`テレビ掲載 ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) calc(100vw - 40px), 272px"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-line-subtle" />

                  <p className="text-[16px] font-bold text-black">新聞</p>
                  <div className="flex flex-wrap gap-x-8 gap-y-8">
                    {newspapers.map((title, i) => (
                      <div key={i} className="flex w-full flex-col gap-5 sm:w-68">
                        <div className="h-[182px] rounded-[10px] bg-[#17140c]" />
                        <p className="text-[16px] font-bold leading-[1.5] text-black">{title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* ── Document downloads (yellow bg) ── */}
      <section className="relative overflow-hidden bg-yellow py-[120px]">
        {/* Background blob */}
        <img
          src="/svg/company/bg.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-360"
        />

        {/* Download cards */}
        <Container size="wide" className="relative flex flex-wrap justify-center gap-10 lg:gap-20">
          {/* Card 1 — GO-TAs company overview */}
          <a
            href="https://www.canva.com/design/DAGymGN8DLU/JgPDuS4ajC2J1uiorbQNzg/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-88.75 h-43 px-5 items-center justify-between overflow-hidden rounded-[20px] bg-white shadow-card transition-opacity hover:opacity-90 lg:w-160 lg:h-auto lg:shrink-0 lg:px-12.5 lg:py-21.5"
          >
            <div className="flex flex-col gap-3">
              <span className="text-sm lg:text-[16px] font-bold text-black">会社説明資料</span>
              <span className="text-[20px] lg:text-[24px] font-bold text-accent">株式会社GO-TAs</span>
            </div>
            <span className="lg:hidden grid shrink-0 place-items-center size-10 rounded-full bg-green drop-shadow-[1.25px_1.25px_0_black]" aria-hidden="true">
              <Image src="/icons/external-link.svg" width={17} height={17} alt="" />
            </span>
            <span className="hidden lg:block">
              <IconButton size="lg" tone="green" shape="circle" icon="external" />
            </span>
          </a>

          {/* Card 2 — M&A pitch */}
          <a
            href="https://www.canva.com/design/DAG5flHHwUw/ZfCkCOCmkxpRlAIiRbDucg/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-88.75 h-43 px-5 items-center justify-between overflow-hidden rounded-[20px] bg-white shadow-card transition-opacity hover:opacity-90 lg:w-160 lg:h-auto lg:shrink-0 lg:px-12.5 lg:py-21.5"
          >
            <div className="flex flex-col gap-3">
              <span className="text-sm lg:text-[16px] font-bold text-black">会社説明資料</span>
              <span className="text-[20px] lg:text-[24px] font-bold leading-normal text-brand">
                異業種M＆Aでのビジネス展開・挑戦
              </span>
            </div>
            <span className="lg:hidden grid shrink-0 place-items-center size-10 rounded-full bg-green drop-shadow-[1.25px_1.25px_0_black]" aria-hidden="true">
              <Image src="/icons/external-link.svg" width={17} height={17} alt="" />
            </span>
            <span className="hidden lg:block">
              <IconButton size="lg" tone="green" shape="circle" icon="external" />
            </span>
          </a>
        </Container>
      </section>
    </>
  );
}
