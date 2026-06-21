import type { Metadata } from "next";
import Image from "next/image";
import { IconButton } from "@/components/ui/IconButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "デジタルサイネージ事業 | GO-TAs",
  description:
    "GO-TAsのデジタルサイネージ事業。企業や商業施設向けサイネージの導入・運用・コンテンツ配信を一体化したサービスを提供し、沖縄県内でのサイネージネットワーク構築を推進しています。",
};

const IMG_HERO      = "/images/business/digital-signage/hero.png";
const IMG_GALLERY_1 = "/images/business/digital-signage/gallery-1.png";
const IMG_GALLERY_2 = "/images/business/digital-signage/gallery-2.png";

const features = [
  {
    num: "01",
    title: "サイネージネットワークの構築",
    body: "商業施設・金融機関・人流の多いエリアにサイネージを設置し、情報発信インフラとしてのネットワークを形成。複数拠点での一括配信が可能な仕組みを構築しています。",
  },
  {
    num: "02",
    title: "一気通貫の導入・運用・保守支援",
    body: "機器の選定・設置から、配信管理、保守メンテナンスまでを一括対応。トラブル時の迅速な対応や安定稼働を実現し、導入企業の負担を最小限に抑えています。",
  },
  {
    num: "03",
    title: "高い視認性と訴求力",
    body: "動画・静止画を活用したダイナミックな表現により、紙媒体では実現できない高い訴求力を発揮。観光客・地元客の双方に対して効果的な情報発信が可能です。",
  },
  {
    num: "04",
    title: "グループシナジーによる価値最大化",
    body: "IT事業（SNS・Web・動画制作）と連携し、コンテンツ制作から運用まで一体的に支援。オンラインとオフラインを融合したマーケティング施策を提供しています。",
  },
];

const history = [
  {
    date: "2020.12",
    locations: [
      "パレットくもじ デパートメインエントランス横（モスバーガー正面）",
      "（有）オキミヤ 入口",
    ],
  },
  {
    date: "2022.03",
    locations: [
      "東海岸BBQ TERUMA",
      "うるま市健康福祉センター「うるみん」",
    ],
  },
  {
    date: "2023.05",
    locations: ["うるマルシェ（うるま市農水産業振興戦略拠点施設）"],
  },
  {
    date: "2025.03",
    locations: ["那覇空港（沖縄県レンタカー協会）"],
  },
];

export default function DigitalSignagePage() {
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
                alt="デジタルサイネージ事業"
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
          <div className="flex w-full shrink-0 flex-col gap-2.5 lg:w-auto">
            <h1 className="text-[32px] font-bold leading-tight text-white md:whitespace-nowrap md:text-[clamp(36px,4.44vw,64px)]">
              デジタルサイネージ事業
            </h1>
            <div className="flex items-center gap-2">
              <span className="size-3 shrink-0 rounded-full bg-[#D9D9D9]" aria-hidden="true" />
              <span className="text-[14px] font-normal text-white">デジタルサイネージ事業</span>
            </div>
          </div>

          {/* Right: Description */}
          <div className="flex flex-col gap-10 lg:ml-auto lg:max-w-[640px]">
            <div className="text-[14px] font-bold leading-[2] text-white text-justify md:text-[16px] md:font-medium md:text-left">
              <p>デジタルサイネージ事業では、企業や商業施設に向けたサイネージの導入・運用およびコンテンツ配信を行っています。単なる機器販売ではなく、「設置・運用・コンテンツ活用・保守メンテナンス」までを一体化したサービスとして提供し、企業の販促活動および情報発信を支援しています。</p>
              <p>沖縄県内ではサイネージネットワークの構築を進めており、大型商業施設「パレットくもじ」への設置や、琉球銀行におけるサイネージ運用など、実績を着実に積み上げています。人流の多い拠点での展開により、高い視認性と訴求力を持つ媒体として活用されています。</p>
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
                  alt="デジタルサイネージ 01"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>
              <div className="relative h-[188px] md:h-full">
                <Image
                  src={IMG_GALLERY_2}
                  alt="デジタルサイネージ 02"
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

            {/* ③ History / Timeline */}
            <div className="flex flex-col items-start gap-[60px] lg:flex-row lg:gap-[120px]">
              <div className="flex shrink-0 flex-col gap-1.5">
                <span className="font-display text-[14px] font-bold text-black md:text-[16px]">History</span>
                <span className="text-[28px] font-bold text-black">
                  サイネージ<br />設置年表
                </span>
              </div>
              <div className="flex w-full flex-col gap-5 rounded-[24px] bg-[#f4f4f4] px-5 py-10 md:rounded-[20px] md:gap-8 md:px-10 md:py-[60px] lg:w-[1000px]">
                {history.map((h, i) => (
                  <div key={h.date}>
                    <div className="flex flex-col gap-2 px-0 md:px-5 lg:flex-row lg:items-center lg:gap-10">
                      <span className="font-display w-full shrink-0 text-[24px] font-bold leading-[1.5] text-brand md:text-[32px] lg:w-[200px]">
                        {h.date}
                      </span>
                      <div className="text-[14px] font-bold leading-[1.5] text-black md:text-[16px]">
                        {h.locations.map((loc, j) => (
                          <p key={j}>{loc}</p>
                        ))}
                      </div>
                    </div>
                    {i < history.length - 1 && (
                      <div className="mt-5 border-t border-[#d9d9d9] md:mt-8" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ④ Future prospects */}
            <div className="flex flex-col items-start gap-[60px] lg:flex-row lg:gap-[120px]">
              <div className="flex shrink-0 flex-col gap-1.5">
                <span className="font-display text-[14px] font-bold text-black md:text-[16px]">Future prospects</span>
                <span className="text-[28px] font-bold text-black">今後の展望</span>
              </div>
              <div className="flex flex-1 flex-col">
                <div className="text-[14px] font-bold leading-[2] text-black text-justify md:text-[16px] md:text-left">
                  <p>今後は、設置拠点のさらなる拡大によりネットワークを強化し、沖縄全域への展開を進めていきます。また、データ活用や配信最適化を通じて、より高度な情報発信基盤の構築を目指します。将来的には県外展開や他エリアへの横展開も視野に入れています。</p>
                  <p>本事業は「インフラ性 × 拡張性 × 実用性」を兼ね備えた領域として、グループの成長を支える重要な事業です。</p>
                </div>
              </div>
            </div>

            {/* ⑤ 事業案内に戻るボタン */}
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
