import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CategoryNav } from "@/components/ui/CategoryNav";
import { IconButton } from "@/components/ui/IconButton";

export const metadata: Metadata = {
  title: "事業案内",
  description:
    "GO-TAsが展開する高級配達弁当・精肉卸・惣菜・沖縄特産品・飲食・不動産・IT・デジタルサイネージ・人材紹介の9事業を紹介します。",
};

type Service = {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  categoryHref: string;
  body: string;
  image: string;
  imageBg: string;
};

const services: Service[] = [
  {
    id: "01",
    title: "嵐々亭",
    category: "高級配達弁当事業",
    categoryColor: "#ff3f31",
    categoryHref: "/business/ranrantei",
    body: "嵐々亭は、医療機関を中心とした法人向けに高品質な配達弁当を提供する事業です。病院・クリニック・製薬会社など、安定した需要が見込める顧客層に特化し、「時間厳守」「品質の安定」「見た目の高級感」を強みとして事業を展開しています。",
    image: "/images/business/thumbnails/ranrantei.png",
    imageBg: "#17140c",
  },
  {
    id: "02",
    title: "具志冷凍食品",
    category: "精肉・食品卸事業",
    categoryColor: "#0071eb",
    categoryHref: "/business/gushi",
    body: "具志冷凍食品は、創業47年の歴史を持つ精肉・食品卸の老舗企業です。山羊刺しや馬刺しといった沖縄ならではの食文化を支える商品を中心に取り扱い、長年にわたり地元飲食店や地域の方々に愛されてきました。",
    image: "/images/business/thumbnails/gushi.png",
    imageBg: "#17140c",
  },
  {
    id: "03",
    title: "いすの木惣菜館",
    category: "惣菜・弁当事業",
    categoryColor: "#ffbe00",
    categoryHref: "/business/isunoki",
    body: "いすの木惣菜館は、宜野湾市普天間に店舗を構える創業36年の地域密着型惣菜店です。長年にわたり地元住民に親しまれ、日常使いの弁当・惣菜を提供する生活インフラとしての役割を担ってきました。",
    image: "/images/business/thumbnails/isunoki.png",
    imageBg: "#fefefe",
  },
  {
    id: "04",
    title: "有限会社すばる商事",
    category: "沖縄特産品卸売事業",
    categoryColor: "#00ab41",
    categoryHref: "/business/okinawa-specialty",
    body: "有限会社すばる商事は、沖縄特産品の卸売事業を展開する企業です。もずくやシークヮーサーをはじめとした沖縄を代表する食品を取り扱い、地域の魅力を全国へ発信する役割を担っています。",
    image: "/images/business/thumbnails/subaru.png",
    imageBg: "#fcfaef",
  },
  {
    id: "05",
    title: "海鮮丼専門店 五星",
    category: "飲食事業",
    categoryColor: "#ff3f31",
    categoryHref: "/business/food-beverage",
    body: "海鮮丼専門店 五星は、沖縄の海の幸と北海道の海産物を融合させた海鮮丼専門店です。沖縄という観光地の特性を活かし、観光客および地元のお客様に向けて、高品質な海鮮丼を提供しています。",
    image: "/images/business/thumbnails/gosei.png",
    imageBg: "#17140c",
  },
  {
    id: "06",
    title: "不動産仲介・投資支援",
    category: "不動産事業",
    categoryColor: "#0071eb",
    categoryHref: "/business/real-estate",
    body: "沖縄県を中心に不動産仲介事業を展開し、個人および法人の資産形成を支援しています。特に沖縄特有の市場である軍用地売買をはじめとした投資用不動産に強みを持ち、県内外の投資家に対して専門性の高いサポートを提供しています。",
    image: "/images/business/thumbnails/hudosan.png",
    imageBg: "#17140c",
  },
  {
    id: "07",
    title: "デジタルマーケティング支援",
    category: "IT事業",
    categoryColor: "#ffbe00",
    categoryHref: "/business/it",
    body: "企業のデジタル活用を支援するマーケティング支援事業を展開しています。Web・SNS・クリエイティブ制作を中心に、企業の集客力向上とブランド構築を目的としたサービスを提供しています。",
    image: "/images/business/thumbnails/digital-marketing.png",
    imageBg: "#17140c",
  },
  {
    id: "08",
    title: "デジタルサイネージ事業",
    category: "デジタルサイネージ事業",
    categoryColor: "#00ab41",
    categoryHref: "/business/digital-signage",
    body: "デジタルサイネージ事業では、企業や商業施設に向けたサイネージの導入・運用およびコンテンツ配信を行っています。単なる機器販売ではなく、「設置・運用・コンテンツ活用・保守メンテナンス」までを一体化したサービスとして提供し、企業の販促活動および情報発信を支援しています。",
    image: "/images/business/thumbnails/digital-signage.png",
    imageBg: "#17140c",
  },
  {
    id: "09",
    title: "医療人材紹介・キャリア支援",
    category: "人材紹介・スクール事業",
    categoryColor: "#ff3f31",
    categoryHref: "/business/recruitment-school",
    body: "理学療法士・作業療法士・看護師などの医療従事者を中心とした転職支援およびキャリア支援サービスを展開しています。人材紹介に加え、スクール事業や副業支援を行うことで、医療従事者の多様な働き方を支援しています。",
    image: "/images/business/thumbnails/healthcare.png",
    imageBg: "#17140c",
  },
];

const serviceNavItems = services.map((service) => ({
  href: `#service-${service.id}`,
  label: service.category,
}));

function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      id={`service-${service.id}`}
      className="flex scroll-mt-24 flex-col gap-12 rounded-[20px] bg-white p-[60px] lg:flex-row lg:items-center"
    >
      {/* Text */}
      <div className="flex flex-1 flex-col justify-between gap-10 lg:min-h-[280px]">
        <div className="flex flex-col gap-10">
          <h2 className="text-[40px] font-bold text-black leading-tight">
            {service.title}
          </h2>
          <p className="text-justify text-[16px] font-medium leading-[2] text-black">
            {service.body}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Dot: fixed gray #D9D9D9 matching Figma Ellipse7 fill */}
            <span
              className="size-3 shrink-0 rounded-full bg-[#D9D9D9]"
              aria-hidden="true"
            />
            <span
              className="text-sm font-medium"
              style={{ color: service.categoryColor }}
            >
              {service.category}
            </span>
          </div>
          <Link
            href={service.categoryHref}
            className="group flex items-center gap-3.5 text-base font-bold text-black transition hover:text-yellow"
          >
            更に見る
            <IconButton tone="green" size="md" className="transition-colors group-hover:bg-yellow" />
          </Link>
        </div>
      </div>

      {/* Photo */}
      <div
        className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-[14px] border border-[#d9d9d9] lg:w-[450px]"
        style={{ backgroundColor: service.imageBg }}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 450px"
        />
      </div>
    </article>
  );
}

export default function BusinessPage() {
  return (
    <>
      {/* ── RED HERO SECTION ─────────────────────────────────── */}
      {/* No overflow-hidden here — watermark intentionally bleeds below into blue section */}
      <section className="relative min-h-[900px] bg-[#ff3f31]">

        {/* Decorative background — hero section */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/svg/business/bg.svg" alt="" className="absolute -top-16 left-0 w-full h-auto" />
        </div>

        {/* "Our Services" large watermark
            Positioned at bottom of section with translate-y-1/2 so the top half of letters
            shows in the red section and the bottom half is covered by the blue section below. */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[15%] whitespace-nowrap font-display font-black leading-none text-[#ff1100] text-[clamp(80px,14.9vw,215px)]"
        >
          Our Services
        </div>

        {/* Hero title — centered */}
        <div className="relative pt-[100px] text-center text-white">
          <h1 className="font-display text-[clamp(48px,5.56vw,80px)] font-black uppercase leading-none tracking-wider">
            Services
          </h1>
          <p className="mt-4 text-[clamp(20px,1.94vw,28px)] font-bold">事業案内</p>
        </div>

        {/* Two-column: left nav + right body text */}
        <div className="relative mx-auto mt-[60px] flex max-w-[1440px] items-start gap-16 px-10 pb-16">

          <CategoryNav label="事業カテゴリナビゲーション" items={serviceNavItems} itemClassName="font-medium" />

          {/* Body text — ml-auto pushes it to the right half (Figma: left: calc(50%+40px)) */}
          <div className="ml-auto max-w-[640px] text-[18px] font-medium leading-[2] text-white">
            <p>
              株式会社GO-TAsは、沖縄県に残る価値ある事業を次世代へ繋ぎ、新しい形で成長させることを目的とした企業です。
            </p>
            <p>
              沖縄県には長年地域に愛されてきた店舗や企業が数多く存在します。
            </p>
            <p>
              しかし近年は後継者不足などの影響により、地域に必要とされながらも事業を継続できず廃業してしまうケースが増えています。
            </p>
            <p>
              GO-TAsではそのような地域に根付いた事業を継承し、IT・マーケティング・ブランディングを活用することで新しい価値を生み出し、事業を再成長させる取り組みを行っています。
            </p>
            <p>
              地域の歴史や文化を大切に守りながら、現代のビジネスモデルへ進化させる。
            </p>
            <p>それがGO-TAsの事業の特徴です。</p>
          </div>
        </div>
      </section>

      {/* ── BLUE SERVICES SECTION ────────────────────────────── */}
      <div className="bg-[#ff3f31]">
      <section className="relative overflow-hidden rounded-tr-[120px] bg-[#0071eb]">

        {/* Decorative background — services section, centered */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/svg/business/bg-1.svg" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-auto" />
        </div>

        {/* Service cards */}
        <div className="relative mx-auto max-w-[1440px] px-[clamp(20px,6.94vw,100px)] py-[138px]">
          <div className="ml-auto flex max-w-[1080px] flex-col gap-[60px]">
            {services.map((service) => (
              <div key={service.id} className="flex flex-col gap-6">
                <p className="font-display text-[18px] font-medium leading-[2] text-white">
                  Service {service.id}
                </p>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
