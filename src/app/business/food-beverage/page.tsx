import type { Metadata } from "next";
import Image from "next/image";
import { IconButton } from "@/components/ui/IconButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "海鮮丼専門店 五星 | 飲食事業",
  description:
    "海鮮丼専門店 五星は、沖縄の海の幸と北海道の海産物を融合させた海鮮丼専門店です。観光客および地元のお客様に向けて、高品質な海鮮丼を提供しています。",
};

const IMG_HERO      = "/images/business/food-beverage/hero.png";
const IMG_GALLERY_1 = "/images/business/food-beverage/gallery-1.png";
const IMG_GALLERY_2 = "/images/business/food-beverage/gallery-2.png";
const IMG_FUTURE    = "/images/business/food-beverage/future.png";

const features = [
  {
    num: "01",
    title: "沖縄×北海道の独自の商品コンセプト",
    body: "沖縄県産の鮮魚と北海道直送の海産物を掛け合わせることで、他店にはない独自のポジションを確立。観光客にとっても「ここでしか食べられない体験」を提供しています。",
  },
  {
    num: "02",
    title: "高付加価値な商品設計",
    body: "いくら・カニ・ホタテなどの高級食材を使用し、見た目のインパクトと満足度を重視。価格帯に応じた多段階のメニュー構成により、幅広い顧客層に対応しています。",
  },
  {
    num: "03",
    title: "インバウンド対応力",
    body: "多言語対応やSNS・Googleマップ対策（MEO）を強化し、海外観光客の集客を実現。沖縄観光の目的地の一つとなる店舗づくりを行っています。",
  },
  {
    num: "04",
    title: "グループシナジーによる仕入れ優位性",
    body: "精肉・食品卸事業（具志冷凍食品）や特産品卸（すばる商事）との連携により、高品質な食材を安定的に確保。原価コントロールと品質維持を両立しています。",
  },
  {
    num: "05",
    title: "体験型飲食の提供",
    body: "食材のストーリーやライブ感のある提供スタイルなど、「食べるだけでなく楽しむ」体験価値を重視。観光地における付加価値の高い飲食モデルを構築しています。",
  },
];

export default function FoodBeveragePage() {
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
                alt="海鮮丼専門店 五星"
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
              海鮮丼専門店 五星
            </h1>
            <div className="flex items-center gap-2">
              <span className="size-3 shrink-0 rounded-full bg-[#D9D9D9]" aria-hidden="true" />
              <span className="text-[14px] font-normal text-white">飲食事業</span>
            </div>
          </div>

          {/* Right: Description + CTA */}
          <div className="flex flex-col gap-10 lg:ml-auto lg:max-w-[640px]">
            <div className="text-[14px] font-bold leading-[2] text-white text-justify md:text-[16px] md:font-medium md:text-left">
              <p>海鮮丼専門店 五星は、沖縄の海の幸と北海道の海産物を融合させた海鮮丼専門店です。沖縄という観光地の特性を活かし、観光客および地元のお客様に向けて、高品質な海鮮丼を提供しています。</p>
              <p>現在、那覇壺屋店・那覇泉崎店の2店舗を展開しており、エリア特性に合わせた店舗運営を行いながら、着実にブランド認知を拡大しています。今後は年内5店舗体制の構築を目指し、出店スピードを加速させています。</p>
              <p>単なる飲食店ではなく、「食材・空間・体験」を一体化させたブランド設計を行っており、インバウンド観光客からも高い評価を得ている店舗です。</p>
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
                href="https://www.5sei.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3.5 text-[14px] font-bold text-white transition hover:opacity-80 md:text-[16px] md:font-medium"
              >
                <IconButton tone="green" size="md" icon="external" />
                海鮮丼専門店 五星
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
                  alt="海鮮丼専門店 五星 01"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>
              <div className="relative h-[188px] md:h-full">
                <Image
                  src={IMG_GALLERY_2}
                  alt="海鮮丼専門店 五星 02"
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
                  <p>今後は、沖縄県内での多店舗展開をさらに加速させるとともに、確立されたブランドとオペレーションをもとに、フランチャイズ展開や海外出店も視野に入れています。特にアジア圏を中心としたインバウンド需要との親和性が高く、グローバルブランドとしての成長を目指します。</p>
                  <p>五星は「ブランド力 × 商品力 × 展開力」を兼ね備えた事業として、GO-TAsグループの成長を牽引する中核ブランドです。</p>
                </div>
                <div className="relative h-[188px] overflow-hidden rounded-[8px] md:h-[562px] md:rounded-[20px]">
                  <Image
                    src={IMG_FUTURE}
                    alt="海鮮丼専門店 五星 今後の展望"
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
