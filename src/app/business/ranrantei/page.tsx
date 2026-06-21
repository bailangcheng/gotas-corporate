import type { Metadata } from "next";
import Image from "next/image";
import { IconButton } from "@/components/ui/IconButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "嵐々亭 | 高級配達弁当事業",
  description:
    "嵐々亭は、医療機関を中心とした法人向けに高品質な配達弁当を提供する事業です。時間厳守・品質の安定・見た目の高級感を強みとして展開しています。",
};

const IMG_HERO         = "/images/business/ranrantei/hero.png";
const IMG_GALLERY_LEFT = "/images/business/ranrantei/gallery-1.png";
const IMG_GALLERY_RIGHT= "/images/business/ranrantei/gallery-2.png";
const IMG_FUTURE       = "/images/business/ranrantei/future.png";

const features = [
  {
    num: "01",
    title: "医療機関特化の営業戦略",
    body: "医局説明会や製薬会社のMR活動に伴う弁当需要を捉え、継続的な法人取引を確立。単発ではなく定期・反復注文が多く、安定した受注構造を実現しています。",
  },
  {
    num: "02",
    title: "高付加価値な商品設計",
    body: "見た目の華やかさ、栄養バランス、食べやすさを重視し、医療従事者のニーズに最適化。中〜高価格帯の設計により、品質とブランド価値の両立を図っています。",
  },
  {
    num: "03",
    title: "ケータリング・オードブル対応",
    body: "弁当に加え、会議・セミナー・懇親会などに対応したケータリングやオードブルの提供も実施。用途に応じた柔軟な商品設計により、1案件あたりの単価向上と顧客満足度の最大化を実現しています。",
  },
  {
    num: "04",
    title: "効率的な製造・配送オペレーション",
    body: "受注から製造、配送までを一元管理し、ロスを最小限に抑制。時間指定が厳しい医療機関にも対応可能な体制を整備しています。",
  },
  {
    num: "05",
    title: "ストック型の収益モデル",
    body: "既存顧客からのリピート注文が中心となっており、継続的かつ安定した受注基盤を構築。外部環境の影響を受けにくいビジネスモデルとなっています。",
  },
];

export default function PremiumDeliveryPage() {
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
                alt="嵐々亭"
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
            <h1 className="text-[32px] font-bold leading-tight text-white md:text-[clamp(40px,4.44vw,64px)]">
              嵐々亭
            </h1>
            <div className="flex items-center gap-2">
              <span className="size-3 shrink-0 rounded-full bg-[#D9D9D9]" aria-hidden="true" />
              <span className="text-[14px] font-normal text-white">高級配達弁当事業</span>
            </div>
          </div>

          {/* Right: Description + CTA */}
          <div className="flex flex-col gap-10 lg:ml-auto lg:max-w-[640px]">
            <div className="text-[14px] font-bold leading-[2] text-white text-justify md:text-[16px] md:font-medium md:text-left">
              <p>嵐々亭は、医療機関を中心とした法人向けに高品質な配達弁当を提供する事業です。病院・クリニック・製薬会社など、安定した需要が見込める顧客層に特化し、「時間厳守」「品質の安定」「見た目の高級感」を強みとして事業を展開しています。</p>
              <p>2021年に事業承継を行い、承継後は商品設計の見直し、オペレーション改善、営業体制の強化を実施。現在では安定した受注体制を確立し、継続的な成長を実現しています。特にリピート比率の高い顧客基盤を構築しており、堅実なビジネスモデルが特徴です。</p>
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

              {/* Right: shop link buttons */}
              <div className="flex flex-col items-start gap-2.5">
                <Link
                  href="https://okinawabento.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3.5 text-[14px] font-bold text-white transition hover:opacity-80 md:text-[16px] md:font-medium"
                >
                  <IconButton tone="green" size="md" icon="external" />
                  嵐々亭本店
                </Link>
                <Link
                  href="https://www.nago-syotengai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3.5 text-[14px] font-bold text-white transition hover:opacity-80 md:text-[16px] md:font-medium"
                >
                  <IconButton tone="green" size="md" icon="external" />
                  嵐々亭やんばる店
                </Link>
              </div>
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
                  src={IMG_GALLERY_LEFT}
                  alt="嵐々亭 弁当 01"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>
              <div className="relative h-[188px] md:h-full">
                <Image
                  src={IMG_GALLERY_RIGHT}
                  alt="嵐々亭 弁当 02"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>
            </div>

            {/* ② Features */}
            <div className="flex flex-col items-start gap-[60px] rounded-[24px] bg-[#f4f4f4] px-5 py-10 md:rounded-[20px] md:justify-between md:px-10 md:py-20 md:gap-10 lg:flex-row">
              {/* Left label */}
              <div className="flex shrink-0 flex-col gap-1.5">
                <span className="font-display text-[14px] font-bold text-black md:text-[16px]">Features</span>
                <span className="text-[28px] font-bold text-black">特徴</span>
              </div>

              {/* Right: feature list */}
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
              {/* Left label */}
              <div className="flex shrink-0 flex-col gap-1.5">
                <span className="font-display text-[14px] font-bold text-black md:text-[16px]">Future prospects</span>
                <span className="text-[28px] font-bold text-black">今後の展望</span>
              </div>

              {/* Right: text + photo */}
              <div className="flex flex-1 flex-col gap-[60px]">
                <div className="text-[14px] font-bold leading-[2] text-black text-justify md:text-[16px] md:text-left">
                  <p>
                    今後は、注文管理・顧客管理を一体化した独自の注文システムの開発により、業務効率と顧客体験のさらなる向上を図ります。また、確立された商品・オペレーション・営業モデルをパッケージ化し、フランチャイズ展開を進めることで、全国への多店舗展開を目指します。
                  </p>
                  <p>
                    嵐々亭は「安定性・再現性・高付加価値」を兼ね備えた事業として、今後のグループ成長を牽引する中核事業です。
                  </p>
                </div>
                <div className="relative h-[188px] overflow-hidden rounded-[8px] md:h-[562px] md:rounded-[20px]">
                  <Image
                    src={IMG_FUTURE}
                    alt="嵐々亭 今後の展望"
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
