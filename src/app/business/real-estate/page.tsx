import type { Metadata } from "next";
import Image from "next/image";
import { IconButton } from "@/components/ui/IconButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "不動産仲介・投資支援 | 不動産事業",
  description:
    "沖縄県を中心に不動産仲介事業を展開し、個人および法人の資産形成を支援しています。軍用地売買をはじめとした投資用不動産に強みを持ち、県内外の投資家に専門性の高いサポートを提供しています。",
};

const IMG_HERO = "/images/business/real-estate/hero.png";

const features = [
  {
    num: "01",
    title: "軍用地投資に特化した専門性",
    body: "沖縄特有の資産である軍用地の売買に対応し、安定収益を目的とした投資提案を実施。利回りや将来的な資産価値を見据えたコンサルティングを行っています。",
  },
  {
    num: "02",
    title: "資産形成に特化した提案力",
    body: "単なる物件紹介にとどまらず、投資目的やライフプランに応じた最適な不動産戦略を提案。長期的な資産形成を見据えた支援を行っています。",
  },
  {
    num: "03",
    title: "県内外投資家ネットワーク",
    body: "沖縄県内だけでなく、県外の投資家とも広くネットワークを構築。多様なニーズに応じたマッチングを実現しています。",
  },
  {
    num: "04",
    title: "安定性の高い不動産領域",
    body: "軍用地をはじめとした安定収益型の不動産を中心に取り扱うことで、市場変動の影響を受けにくいポートフォリオ形成を支援しています。",
  },
  {
    num: "05",
    title: "グループシナジーによる付加価値提供",
    body: "GO-TAsグループの事業ネットワークを活用し、投資後の活用や事業連携も視野に入れた提案を実施。不動産を起点とした多角的な価値創出を行っています。",
  },
];

export default function RealEstatePage() {
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
                alt="不動産仲介・投資支援"
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
            <h1 className="text-[28px] font-bold leading-tight text-white md:text-[clamp(32px,4vw,56px)]">
              不動産仲介・投資支援
            </h1>
            <div className="flex items-center gap-2">
              <span className="size-3 shrink-0 rounded-full bg-[#D9D9D9]" aria-hidden="true" />
              <span className="text-[14px] font-normal text-white">不動産事業</span>
            </div>
          </div>

          {/* Right: Description */}
          <div className="flex flex-col gap-10 lg:ml-auto lg:max-w-[640px]">
            <div className="text-[14px] font-bold leading-[2] text-white text-justify md:text-[16px] md:font-medium md:text-left">
              <p>本事業では、沖縄県を中心に不動産仲介事業を展開し、個人および法人の資産形成を支援しています。特に沖縄特有の市場である軍用地売買をはじめとした投資用不動産に強みを持ち、県内外の投資家に対して専門性の高いサポートを提供しています。</p>
              <p>沖縄の地理的特性や市場動向を踏まえた提案により、安定性と収益性を兼ね備えた投資機会を創出しています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHITE CONTENT SECTION ────────────────────────────── */}
      <div className="bg-[#ff3f31]">
        <section className="rounded-tr-[80px] bg-white px-5 py-20 md:rounded-tr-[120px] md:px-20 md:py-[120px]">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-[60px] md:gap-[120px]">

            {/* ① Features */}
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

            {/* ② Future prospects */}
            <div className="flex flex-col items-start gap-[60px] lg:flex-row lg:gap-[120px]">
              <div className="flex shrink-0 flex-col gap-1.5">
                <span className="font-display text-[14px] font-bold text-black md:text-[16px]">Future prospects</span>
                <span className="text-[28px] font-bold text-black">今後の展望</span>
              </div>
              <div className="flex flex-1 flex-col gap-[60px]">
                <div className="text-[14px] font-bold leading-[2] text-black text-justify md:text-[16px] md:text-left">
                  <p>今後は、投資用不動産の取り扱い拡大に加え、管理業務や開発領域への展開も視野に入れ、より包括的な不動産サービスの提供を目指します。また、情報発信やセミナー開催などを通じて、投資家との接点を強化し、さらなる事業拡大を図ります。</p>
                  <p>本事業は「専門性 × 安定性 × 資産価値」を兼ね備えた領域として、グループの収益基盤を支える重要な事業です。</p>
                </div>
              </div>
            </div>

            {/* ③ 事業案内に戻るボタン */}
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
