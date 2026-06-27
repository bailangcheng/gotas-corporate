import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { branchOffices } from "@/content/branch-offices";

export const metadata: Metadata = {
  title: "グループ＆連携企業",
  description: "GO-TAsグループ全体の構成と各事業の関係性を紹介します。",
};

type GroupCompany = {
  name: string;
  logo: string;
  href: string;
  description: string;
};

const groupCompanies: GroupCompany[] = [
  {
    name: "有限会社すばる商事",
    logo: "/images/company/group/subaru-shoji-logo.png",
    href: "https://www.subaru-shoji.com/",
    description:
      "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。",
  },
  {
    name: "株式会社 Socio Works",
    logo: "/images/company/group/socio-works-logo.png",
    href: "#",
    description:
      "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。",
  },
];

function ExternalLinkButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="grid shrink-0 size-6 place-items-center rounded-full border border-black bg-[#00ab41] drop-shadow-[0.75px_0.75px_0_black]"
      aria-label={label}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="black" aria-hidden="true">
        <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
      </svg>
    </Link>
  );
}

export default function GroupCompaniesPage() {
  return (
    <>
      {/* ── RED HERO ─────────────────────────────────────────── */}
      <section className="bg-accent">
        <PageHero eyebrow="Group & Collaboration" title="グループ＆連携企業" />
      </section>

      {/* ── WHITE CONTENT ────────────────────────────────────── */}
      <div className="bg-accent">
        <section className="rounded-tr-[120px] bg-white px-[clamp(20px,5.56vw,80px)] py-[120px]">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-[120px]">

            {/* ① グループ */}
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-[152px]">
              {/* Left label */}
              <div className="flex shrink-0 flex-col gap-1.5">
                <span className="font-display text-[16px] font-bold text-black">Group</span>
                <span className="text-[28px] font-bold text-black">グループ</span>
              </div>

              {/* Right: company cards */}
              <div className="w-full flex-1 rounded-[24px] bg-surface p-6 sm:p-10 lg:p-[60px]">
                <div className="flex flex-wrap gap-8">
                  {groupCompanies.map((company) => (
                    <div key={company.name} className="flex w-[272px] flex-col gap-5">
                      {/* Logo area */}
                      <div className="relative h-[154px] w-full overflow-hidden rounded-[10px] bg-white">
                        <Image
                          src={company.logo}
                          alt={company.name}
                          fill
                          className="object-contain p-4"
                          sizes="(max-width: 640px) 100vw, 272px"
                        />
                      </div>
                      {/* Name + external link */}
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[20px] font-bold leading-[1.5] text-black">
                          {company.name}
                        </span>
                        <ExternalLinkButton
                          href={company.href}
                          label={`${company.name}のサイトへ`}
                        />
                      </div>
                      {/* Description */}
                      <p className="text-[14px] font-medium leading-[1.6] text-black">
                        {company.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ② 営業所一覧 */}
            <div className="flex flex-col items-start gap-10 lg:flex-row lg:justify-between lg:gap-[152px]">
              {/* Left label */}
              <div className="flex shrink-0 flex-col gap-1.5">
                <span className="font-display text-[16px] font-bold text-black">Branch Office</span>
                <span className="text-[28px] font-bold text-black">営業所一覧</span>
              </div>

              {/* Right: office list */}
              <div className="w-full flex-1 rounded-[24px] bg-surface p-6 sm:p-10 lg:p-[60px]">
                <div className="flex flex-col gap-8">
                  {branchOffices.map((office, i) => (
                    <div key={office.name}>
                      {/* SP: stack vertically; PC: side-by-side with blue label */}
                      <div className="flex flex-col gap-2 text-[14px] font-bold sm:flex-row sm:gap-10 sm:px-10 sm:text-[16px]">
                        <span className="shrink-0 leading-[1.5] text-brand sm:w-[200px]">
                          {office.name}
                        </span>
                        <div className="flex flex-col gap-2 text-black sm:gap-3.5">
                          <div className="leading-[1.5]">
                            <p>{office.postalCode}</p>
                            <p>{office.address}</p>
                          </div>
                          <p className="leading-[1.5]">電話番号: {office.phone}</p>
                        </div>
                      </div>
                      {i < branchOffices.length - 1 && (
                        <div className="mt-8 border-t border-line-subtle" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
