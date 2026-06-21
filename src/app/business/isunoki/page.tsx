import type { Metadata } from "next";
import Image from "next/image";
import { IconButton } from "@/components/ui/IconButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "いすの木惣菜館 | 惣菜・弁当事業",
  description:
    "いすの木惣菜館は、宜野湾市普天間に店舗を構える創業36年の地域密着型惣菜店です。法人向け販路の拡大や商品力の強化を推進し、新たな成長フェーズへと移行しています。",
};

const IMG_HERO      = "/images/business/isunoki/hero.png";
const IMG_GALLERY_1 = "/images/business/isunoki/gallery-1.png";
const IMG_GALLERY_2 = "/images/business/isunoki/gallery-2.png";
const IMG_FUTURE    = "/images/business/isunoki/future.png";

const features = [
  {
    num: "01",
    title: "地域密着による安定した顧客基盤",
    body: "長年にわたり地域住民に利用されてきた実績があり、日常的な需要を安定的に確保。リピート率の高いビジネスモデルを構築しています。",
  },
  {
    num: "02",
    title: "幅広い商品ラインナップ",
    body: "弁当・惣菜・軽食など、多様なニーズに対応した商品構成により、老若男女問わず利用しやすい店舗設計となっています。",
  },
  {
    num: "03",
    title: "法人向け販売の強化",
    body: "学校・行政機関・宿泊施設などへの納品を拡大し、まとまった受注を獲得。個人向けと法人向けの両軸で売上の安定性と成長性を両立しています。",
  },
  {
    num: "04",
    title: "効率的な製造体制",
    body: "日々の大量調理に対応したオペレーションを構築し、品質を保ちながら安定供給を実現。ピークタイムにも対応可能な体制を整えています。",
  },
  {
    num: "05",
    title: "グループシナジーの活用",
    body: "GO-TAsグループ内の仕入れや商品開発と連携し、原価の最適化と商品力の向上を推進。他事業との連動により、全体最適を図っています。",
  },
];

export default function IsunokiPage() {
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
                alt="いすの木惣菜館"
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
            <h1 className="text-[32px] font-bold leading-tight text-white md:text-[clamp(36px,4.44vw,64px)]">
              いすの木惣菜館
            </h1>
            <div className="flex items-center gap-2">
              <span className="size-3 shrink-0 rounded-full bg-[#D9D9D9]" aria-hidden="true" />
              <span className="text-[14px] font-normal text-white">惣菜・弁当事業</span>
            </div>
          </div>

          {/* Right: Description + CTA */}
          <div className="flex flex-col gap-10 lg:ml-auto lg:max-w-[640px]">
            <div className="text-[14px] font-bold leading-[2] text-white text-justify md:text-[16px] md:font-medium md:text-left">
              <p>いすの木惣菜館は、宜野湾市普天間に店舗を構える創業36年の地域密着型惣菜店です。長年にわたり地元住民に親しまれ、日常使いの弁当・惣菜を提供する生活インフラとしての役割を担ってきました。</p>
              <p>GO-TAsによる事業承継後は、これまでの地域密着型の強みを活かしながら、法人向け販路の拡大や商品力の強化を推進。従来の個人向け販売に加え、学校・市役所・ホテルなどへの納品体制を整備し、新たな成長フェーズへと移行しています。</p>
            </div>

            {/* Social + shop links */}
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              {/* Left: social icons */}
              <div className="flex items-start gap-5">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Google マップ">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/google-maps.svg" alt="" width={40} height={40} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/instagram.svg" alt="" width={40} height={40} />
                </a>
              </div>

              {/* Right: shop link */}
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3.5 text-[14px] font-bold text-white transition hover:opacity-80 md:text-[16px] md:font-medium"
              >
                <IconButton tone="green" size="md" icon="external" />
                いすの木惣菜館
              </Link>
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
                  alt="いすの木惣菜館 01"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>
              <div className="relative h-[188px] md:h-full">
                <Image
                  src={IMG_GALLERY_2}
                  alt="いすの木惣菜館 02"
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
                  <p>今後は、法人向け販売のさらなる拡大に加え、配達体制の強化や商品ブランドの再設計を進め、より広いエリアへの展開を目指します。また、地域に根ざした店舗としての価値を維持しながら、収益性と再現性の高いモデルへの進化を図っていきます。</p>
                  <p>いすの木惣菜館は「地域密着 × 安定需要 × 成長余地」を兼ね備えた事業として、グループの基盤を支える重要なポジションを担っています。</p>
                </div>
                <div className="relative h-[188px] overflow-hidden rounded-[8px] md:h-[562px] md:rounded-[20px]">
                  <Image
                    src={IMG_FUTURE}
                    alt="いすの木惣菜館 今後の展望"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 1000px"
                  />
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
