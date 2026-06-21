import type { Metadata } from "next";
import Image from "next/image";
import { IconButton } from "@/components/ui/IconButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "具志冷凍食品 | 精肉・食品卸事業",
  description:
    "具志冷凍食品は、創業47年の歴史を持つ精肉・食品卸の老舗企業です。山羊刺しや馬刺しといった沖縄ならではの食文化を支える商品を中心に取り扱い、長年にわたり地元飲食店や地域の方々に愛されてきました。",
};

const IMG_HERO      = "/images/business/gushi/hero.png";
const IMG_GALLERY_1 = "/images/business/gushi/gallery-1.png";
const IMG_GALLERY_2 = "/images/business/gushi/gallery-2.png";
const IMG_FUTURE    = "/images/business/gushi/future.png";

const features = [
  {
    num: "01",
    title: "沖縄特有の食材を扱う商品力",
    body: "山羊刺しや馬刺しなど、沖縄ならではの食文化に根ざした商品を取り扱い、他社との差別化を実現。観光需要および地元需要の双方に対応可能なラインナップを有しています。",
  },
  {
    num: "02",
    title: "長年の信頼に基づく取引基盤",
    body: "地域の飲食店との継続的な取引関係を構築しており、安定した受注基盤を確保。長年の実績による信用力が事業の強みとなっています。",
  },
  {
    num: "03",
    title: "卸売と小売の両立モデル",
    body: "飲食店向けの卸販売に加え、地域住民向けの小売も展開。複数の販路を持つことで、景気や外部環境の変動リスクを分散しています。",
  },
  {
    num: "04",
    title: "グループシナジーの創出",
    body: "GO-TAsグループ内の飲食事業（五星・嵐々亭など）との連携により、仕入れの最適化や商品開発を推進。原価コントロールと付加価値向上の両立を実現しています。",
  },
  {
    num: "05",
    title: "デジタル化による業務効率化",
    body: "受発注管理や在庫管理のデジタル化を進めることで、業務効率の向上と人的負担の軽減を実現。今後の事業拡大に向けた基盤整備を行っています。",
  },
];

export default function GushiPage() {
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
                alt="具志冷凍食品"
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
            <h1 className="whitespace-nowrap text-[32px] font-bold leading-tight text-white md:text-[clamp(40px,4.44vw,64px)]">
              具志冷凍食品
            </h1>
            <div className="flex items-center gap-2">
              <span className="size-3 shrink-0 rounded-full bg-[#D9D9D9]" aria-hidden="true" />
              <span className="text-[14px] font-normal text-white">精肉・食品卸事業</span>
            </div>
          </div>

          {/* Right: Description + CTA */}
          <div className="flex flex-col gap-10 lg:ml-auto lg:max-w-[640px]">
            <div className="text-[14px] font-bold leading-[2] text-white text-justify md:text-[16px] md:font-medium md:text-left">
              <p>具志冷凍食品は、創業47年の歴史を持つ精肉・食品卸の老舗企業です。山羊刺しや馬刺しといった沖縄ならではの食文化を支える商品を中心に取り扱い、長年にわたり地元飲食店や地域の方々に愛されてきました。</p>
              <p>GO-TAsによる事業承継後は、これまで培ってきた仕入れネットワークや商品力を活かしながら、経営体制の見直しとデジタル化を推進。伝統を守りつつ、時代に適応した新たな成長フェーズへと移行しています。</p>
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
                具志冷凍食品
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
                  alt="具志冷凍食品 01"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>
              <div className="relative h-[188px] md:h-full">
                <Image
                  src={IMG_GALLERY_2}
                  alt="具志冷凍食品 02"
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
                  <p>今後は、EC販売や県外への販路拡大、PB商品の開発などを推進し、これまでの地域密着型ビジネスから広域展開へと進化させていきます。また、観光需要の取り込みやギフト需要への対応を強化することで、さらなる付加価値の創出を目指します。</p>
                  <p>具志冷凍食品は「伝統 × 商品力 × 拡張性」を兼ね備えた事業として、グループ全体の基盤を支える重要な役割を担っています。</p>
                </div>
                <div className="relative h-[188px] overflow-hidden rounded-[8px] md:h-[562px] md:rounded-[20px]">
                  <Image
                    src={IMG_FUTURE}
                    alt="具志冷凍食品 今後の展望"
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
