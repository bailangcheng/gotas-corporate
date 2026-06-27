import type { Metadata } from "next";
import Image from "next/image";
import { IconButton } from "@/components/ui/IconButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "デジタルマーケティング支援 | IT事業",
  description:
    "企業のデジタル活用を支援するマーケティング支援事業を展開しています。Web・SNS・クリエイティブ制作を中心に、企業の集客力向上とブランド構築を目的としたサービスを提供しています。",
};

const IMG_HERO      = "/images/business/it/hero.png";
const IMG_GALLERY_1 = "/images/business/it/gallery-1.png";
const IMG_GALLERY_2 = "/images/business/it/gallery-2.png";

const features = [
  {
    num: "01",
    title: "Web制作・運用支援",
    body: "企業の目的に応じたホームページやLPを制作し、集客導線の設計から運用改善までを一貫してサポート。SEO・MEO対策も含めた実践的な支援を行っています。",
  },
  {
    num: "02",
    title: "SNS運用・マーケティング支援",
    body: "InstagramやLINEなどのSNSを活用し、認知拡大から来店・購買までの導線を設計。企画・撮影・投稿・分析まで一貫した運用支援を提供しています。伊江島などの行政案件をはじめ、飲食店・小売・個人事業主など幅広い領域での運用実績を有しており、業種ごとに最適化された運用ノウハウを蓄積しています。",
  },
  {
    num: "03",
    title: "動画・クリエイティブ制作",
    body: "広告用動画や店舗PR動画、各種販促物の制作を行い、企業の魅力を最大限に引き出すクリエイティブを提供。視覚的訴求力の高いコンテンツ制作を強みとしています。",
  },
  {
    num: "04",
    title: "一気通貫のマーケティング支援",
    body: "戦略設計から制作、運用、改善までをワンストップで提供することで、企業のマーケティング課題を包括的に解決。単発ではなく継続的な支援体制を構築しています。",
  },
  {
    num: "05",
    title: "グループ実績を活かした実践型ノウハウ",
    body: "GO-TAsグループの飲食・小売事業で培った実績をもとに、現場で再現性の高いマーケティング手法を提供。机上の理論ではなく、成果に直結する支援を行っています。",
  },
];

export default function ITPage() {
  return (
    <>
      {/* ── RED HERO SECTION ─────────────────────────────────── */}
      <section className="relative bg-[#ff3f31] pt-7.5">

        {/* Decorative background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          <div className="absolute right-[-8%] top-0 h-394.5 w-250.75 hidden lg:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/svg/business/bg-3.svg" alt="" className="h-full w-full object-contain" />
          </div>
        </div>

        {/* Hero photo banner strip */}
        <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="relative h-[188px] md:h-[382px]">
            <div className="absolute inset-0 overflow-hidden rounded-[20px]">
              <Image
                src={IMG_HERO}
                alt="デジタルマーケティング支援"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) calc(100vw - 2.5rem), (max-width: 1440px) 100vw, 1360px"
              />
            </div>
          </div>
        </div>

        {/* Title + description row */}
        <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-start gap-[60px] px-5 py-[60px] md:gap-10 md:px-10 lg:flex-row lg:pb-[120px]">

          {/* Left: Title block */}
          <div className="flex w-full shrink-0 flex-col gap-2.5 lg:w-[338px]">
            <h1 className="text-[28px] font-bold leading-tight text-white md:text-[clamp(32px,3.6vw,52px)]">
              デジタルマーケティング支援
            </h1>
            <div className="flex items-center gap-2">
              <span className="size-3 shrink-0 rounded-full bg-[#D9D9D9]" aria-hidden="true" />
              <span className="text-[14px] font-normal text-white">IT事業</span>
            </div>
          </div>

          {/* Right: Description */}
          <div className="flex flex-col gap-10 lg:ml-auto lg:max-w-[640px]">
            <div className="text-[14px] font-bold leading-[2] text-white text-justify md:text-[16px] md:font-medium md:text-left">
              <p>IT事業では、企業のデジタル活用を支援するマーケティング支援事業を展開しています。Web・SNS・クリエイティブ制作を中心に、企業の集客力向上とブランド構築を目的としたサービスを提供しています。</p>
              <p>単なる制作にとどまらず、戦略設計から運用まで一貫して支援することで、継続的な成果創出を実現しています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHITE CONTENT SECTION ────────────────────────────── */}
      <div className="bg-[#ff3f31]">
        <section className="rounded-tr-[80px] bg-white px-5 py-20 md:rounded-tr-[120px] md:px-20 md:py-[120px]">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-[60px] md:gap-[120px]">

            {/* ① Photo gallery — SP: stacked, PC: side-by-side */}
            <div className="overflow-hidden rounded-[20px] grid grid-cols-1 md:grid-cols-2 md:h-90">
              <div className="relative h-[188px] md:h-full">
                <Image
                  src={IMG_GALLERY_1}
                  alt="デジタルマーケティング支援 01"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>
              <div className="relative h-[188px] md:h-full">
                <Image
                  src={IMG_GALLERY_2}
                  alt="デジタルマーケティング支援 02"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>
            </div>

            {/* ② Features */}
            <div className="flex flex-col items-start gap-[60px] rounded-[24px] bg-[#f4f4f4] px-5 py-10 md:rounded-[20px] md:justify-between md:px-10 md:py-20 md:gap-10 lg:flex-row">
              <div className="flex shrink-0 flex-col gap-1.5">
                <span className="font-display text-[14px] font-bold text-black md:text-[16px]">Features</span>
                <span className="text-[28px] font-bold text-black">特徴</span>
              </div>
              <div className="flex w-full flex-col gap-[40px] md:gap-[60px] lg:w-[960px]">
                {features.map((f, i) => (
                  <div key={f.num}>
                    <div className="flex flex-col gap-5">
                      <span className="font-display text-[14px] font-bold text-brand md:text-[18px]">
                        Feature {f.num}
                      </span>
                      <h2 className="text-[28px] font-bold leading-tight text-black md:text-[36px]">{f.title}</h2>
                      <p className="text-[14px] font-bold leading-[2] text-black md:text-[16px]">{f.body}</p>
                    </div>
                    {i < features.length - 1 && (
                      <div className="mt-[40px] border-t border-[#d9d9d9] md:mt-[60px]" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ③ Future prospects */}
            <div className="flex flex-col items-start gap-[60px] lg:flex-row lg:gap-[120px]">
              <div className="flex shrink-0 flex-col gap-1.5">
                <span className="font-display text-[14px] font-bold text-black md:text-[16px]">Future prospects</span>
                <span className="text-[28px] font-bold text-black">今後の展望</span>
              </div>
              <div className="flex flex-1 flex-col gap-[60px]">
                <div className="text-[14px] font-bold leading-[2] text-black text-justify md:text-[16px] md:text-left">
                  <p>今後は、AIやデータ分析を活用したマーケティング支援の高度化に加え、業種別に最適化されたサービスパッケージの開発を進め、より多くの企業への導入を目指します。</p>
                  <p>本事業は「実行力 × 再現性 × 拡張性」を兼ね備えた領域として、グループの成長を支える基盤事業です。</p>
                </div>
              </div>
            </div>

            {/* ④ 事業案内に戻るボタン */}
            <div className="flex justify-center">
              <Link
                href="/business"
                className="relative inline-flex h-20 w-[300px] items-center justify-center rounded-full border border-black bg-[#00ab41] px-7 text-[16px] font-bold text-black transition hover:-translate-y-0.5 md:text-[18px]"
              >
                <IconButton tone="white" size="md" direction="left" className="absolute left-5" />
                事業案内に戻る
              </Link>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
