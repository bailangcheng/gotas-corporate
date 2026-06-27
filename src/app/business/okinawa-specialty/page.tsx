import type { Metadata } from "next";
import Image from "next/image";
import { IconButton } from "@/components/ui/IconButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "有限会社すばる商事 | 沖縄特産品卸売事業",
  description:
    "有限会社すばる商事は、沖縄特産品の卸売事業を展開する企業です。もずくやシークヮーサーをはじめとした沖縄を代表する食品を取り扱い、地域の魅力を全国へ発信する役割を担っています。",
};

const IMG_HERO      = "/images/business/okinawa-specialty/hero.png";
const IMG_GALLERY_1 = "/images/business/okinawa-specialty/gallery-1.png";
const IMG_GALLERY_2 = "/images/business/okinawa-specialty/gallery-2.png";

const features = [
  {
    num: "01",
    title: "沖縄特産品に特化した商品力",
    body: "もずくやシークヮーサーなど、沖縄を代表する食材を中心に取り扱い、地域性の高いラインナップを展開。観光需要および県外需要の双方に対応可能です。",
  },
  {
    num: "02",
    title: "卸売ネットワークの構築",
    body: "既存の取引先との関係性を活かし、安定した流通基盤を確保。飲食店・小売店・事業者向けに幅広い供給体制を整えています。",
  },
  {
    num: "03",
    title: "商品開発・ブランド化の推進",
    body: "原材料の供給にとどまらず、加工品の開発やパッケージデザインの強化を行い、ブランド価値の向上を図っています。土産需要やギフト需要への対応も進めています。",
  },
  {
    num: "04",
    title: "グループシナジーの活用",
    body: "GO-TAsグループの飲食事業やEC展開と連携し、販路の拡大と商品価値の最大化を実現。仕入れから販売まで一貫したビジネスモデルを構築しています。",
  },
  {
    num: "05",
    title: "全国展開を見据えた事業基盤",
    body: "沖縄発のブランドとして、県外市場への展開を強化。今後はEC販売や法人取引の拡大により、全国規模での流通網構築を目指しています。",
  },
];

export default function OkinawaSpecialtyPage() {
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
                alt="有限会社すばる商事"
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
              有限会社すばる商事
            </h1>
            <div className="flex items-center gap-2">
              <span className="size-3 shrink-0 rounded-full bg-[#D9D9D9]" aria-hidden="true" />
              <span className="text-[14px] font-normal text-white">沖縄特産品卸売事業</span>
            </div>
          </div>

          {/* Right: Description + CTA */}
          <div className="flex flex-col gap-10 lg:ml-auto lg:max-w-[640px]">
            <div className="text-[14px] font-bold leading-[2] text-white text-justify md:text-[16px] md:font-medium md:text-left">
              <p>有限会社すばる商事は、沖縄特産品の卸売事業を展開する企業です。もずくやシークヮーサーをはじめとした沖縄を代表する食品を取り扱い、地域の魅力を全国へ発信する役割を担っています。</p>
              <p>GO-TAsグループとしての連携を強化することで、従来の卸売事業に加え、商品開発やブランド化を推進。単なる流通にとどまらず、付加価値を創出する事業へと進化しています。</p>
            </div>

            {/* Shop link */}
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-end">
              <Link
                href="https://www.subaru-shoji.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3.5 text-[14px] font-bold text-white transition hover:opacity-80 md:text-[16px] md:font-medium"
              >
                <IconButton tone="green" size="md" icon="external" />
                有限会社すばる商事
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
                  alt="有限会社すばる商事 01"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>
              <div className="relative h-[188px] md:h-full">
                <Image
                  src={IMG_GALLERY_2}
                  alt="有限会社すばる商事 02"
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
                  <p>今後は、PB商品の開発強化やOEM展開、海外市場への進出も視野に入れ、沖縄の魅力をより広く発信していきます。地域資源を活かした高付加価値ビジネスとして、持続的な成長を目指します。</p>
                  <p>すばる商事は「地域性 × 商品開発 × 拡張性」を兼ね備えた事業として、グループの成長を支える重要な役割を担っています。</p>
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
