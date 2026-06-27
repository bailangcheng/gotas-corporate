import type { Metadata } from "next";
import Image from "next/image";
import { IconButton } from "@/components/ui/IconButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "医療人材紹介・キャリア支援 | 人材紹介・スクール事業",
  description:
    "理学療法士・作業療法士・看護師などの医療従事者を中心とした転職支援およびキャリア支援サービスを展開しています。人材紹介に加え、スクール事業や副業支援を行い、多様な働き方を支援しています。",
};

const IMG_HERO      = "/images/business/recruitment-school/hero.png";
const IMG_GALLERY_1 = "/images/business/recruitment-school/gallery-1.png";
const IMG_GALLERY_2 = "/images/business/recruitment-school/gallery-2.png";

const features = [
  {
    num: "01",
    title: "医療職に特化した専門性",
    body: "理学療法士・作業療法士・看護師など、専門職ごとの特性やキャリアパスを理解した上でのマッチングを実施。現場理解に基づいた提案力を強みとしています。",
  },
  {
    num: "02",
    title: "SNSを活用した独自の集客基盤",
    body: "SNSを活用した情報発信により、従来の求人媒体に依存しない集客を実現。潜在層へのアプローチも可能とし、質の高い求職者の獲得につなげています。",
  },
  {
    num: "03",
    title: "スクール・副業支援によるキャリア拡張",
    body: "SNS運用、マーケティング、デザインなどのスキル習得を支援するスクール事業を展開。医療従事者が本業に加えて収入源を持つための副業支援を行い、キャリアの多様化を実現しています。",
  },
  {
    num: "04",
    title: "キャリア支援型のサービス設計",
    body: "転職だけでなく、将来設計や働き方の相談まで対応。個々の価値観に合わせたキャリア形成をサポートしています。",
  },
  {
    num: "05",
    title: "沖縄県内外の医療機関ネットワーク",
    body: "県内外の医療機関と連携し、多様な選択肢を提供。地域を超えたマッチングを実現しています。",
  },
  {
    num: "06",
    title: "高いマッチング精度",
    body: "求職者の希望条件だけでなく、職場環境や組織文化との適合性を重視した紹介を行い、定着率の高い採用支援を実現しています。",
  },
];

export default function RecruitmentSchoolPage() {
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
                alt="医療人材紹介・キャリア支援"
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
            <h1 className="text-[28px] font-bold leading-tight text-white md:text-[clamp(30px,3.4vw,48px)]">
              医療人材紹介・キャリア支援
            </h1>
            <div className="flex items-center gap-2">
              <span className="size-3 shrink-0 rounded-full bg-[#D9D9D9]" aria-hidden="true" />
              <span className="text-[14px] font-normal text-white">人材紹介・スクール事業</span>
            </div>
          </div>

          {/* Right: Description + CTA */}
          <div className="flex flex-col gap-10 lg:ml-auto lg:max-w-[640px]">
            <div className="text-[14px] font-bold leading-[2] text-white text-justify md:text-[16px] md:font-medium md:text-left">
              <p>本事業では、理学療法士・作業療法士・看護師などの医療従事者を中心とした転職支援およびキャリア支援サービスを展開しています。人材紹介に加え、スクール事業や副業支援を行うことで、医療従事者の多様な働き方を支援しています。</p>
              <p>単なる転職支援にとどまらず、「キャリアの選択肢を広げること」を目的とした包括的なサービスを提供しています。</p>
            </div>

            {/* Shop link */}
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-end">
              <Link
                href="https://www.gotas-work.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3.5 text-[14px] font-bold text-white transition hover:opacity-80 md:text-[16px] md:font-medium"
              >
                <IconButton tone="green" size="md" icon="external" />
                医療人材紹介・キャリア支援
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
                  alt="医療人材紹介・キャリア支援 01"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 640px"
                />
              </div>
              <div className="relative h-[188px] md:h-full">
                <Image
                  src={IMG_GALLERY_2}
                  alt="医療人材紹介・キャリア支援 02"
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
                  <p>今後は、スクール事業の拡充やオンライン化の推進により、より多くの医療従事者への支援を拡大していきます。また、人材紹介と教育を組み合わせた独自モデルを強化し、業界内でのポジション確立を目指します。</p>
                  <p>本事業は「専門性 × 教育 × 集客力」を兼ね備えた領域として、グループの成長を牽引する人材・教育事業です。</p>
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
