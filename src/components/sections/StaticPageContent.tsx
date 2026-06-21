import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { SitePage } from "@/content/site";
import { businessItems } from "@/content/site";
import { branchOffices } from "@/content/branch-offices";
import { getCompanyOverview } from "@/lib/cms/company-overview";
import { getFacts } from "@/lib/cms/facts";
import type { CmsFact } from "@/lib/cms/types";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { InfoTable } from "@/components/ui/InfoTable";
import { SectionHeading } from "@/components/ui/SectionHeading";

type StaticPageContentProps = {
  page: SitePage;
  siblings: SitePage[];
};

const historyItems = [
  ["1978年", "創業につながる原点", "地域と事業に向き合う姿勢の起点となる出来事を掲載します。"],
  ["2010年", "事業領域の拡張", "デジタル、制作、運用など複数領域への展開を整理します。"],
  ["2026年", "GO-TAsとしての発信強化", "コーポレートサイトを通じて、事業と採用の情報を統合します。"],
];

export function StaticPageContent({ page, siblings }: StaticPageContentProps) {
  if (page.href === "/company/message") {
    return <MessageContent siblings={siblings} />;
  }

  if (page.href === "/gotas-plus") {
    return <GotasPlusContent siblings={siblings} />;
  }

  if (page.href === "/company/overview") {
    return <OverviewContent />;
  }

  if (page.href === "/company/gotas-history" || page.href === "/company/igarashi-history") {
    return <HistoryContent title={page.title} siblings={siblings} />;
  }

  if (page.href === "/group/companies") {
    return <GroupCompaniesContent />;
  }

  if (page.href === "/company/group" || page.section === "group") {
    return <GroupIndexContent siblings={siblings} />;
  }

  if (page.href === "/business") {
    return <BusinessContent siblings={siblings} />;
  }

  return <PlaceholderContent page={page} siblings={siblings} />;
}

// ─── Shared layout helpers ────────────────────────────────────────────────────

function PageSection({ children }: { children: ReactNode }) {
  return (
    <section className="py-[var(--space-section-y)]">
      <Container size="wide">{children}</Container>
    </section>
  );
}

/** Two-column row: left = small eyebrow+title label, right = main content. */
function SectionRow({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-20 lg:items-start">
      <div className="shrink-0 lg:w-[200px]">
        <p className="font-display text-sm font-black uppercase text-[var(--color-ink-muted)]">
          {eyebrow}
        </p>
        <h2 className="mt-1 text-3xl font-black text-[var(--color-ink)]">{title}</h2>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}

function PageGrid({ children, siblings }: { children: ReactNode; siblings: SitePage[] }) {
  return (
    <section className="py-[var(--space-section-y)]">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          {children}
          <SiblingNav siblings={siblings} />
        </div>
      </Container>
    </section>
  );
}

function SiblingNav({ siblings }: { siblings: SitePage[] }) {
  return (
    <aside className="h-fit rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-surface)] p-5">
      <h2 className="text-sm font-black text-[var(--color-ink)]">同じカテゴリのページ</h2>
      <div className="mt-4 grid gap-2">
        {siblings.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-[var(--radius-sm)] bg-white px-3 py-3 text-sm font-semibold text-[var(--color-ink-soft)] transition hover:text-[var(--color-brand)]"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </aside>
  );
}

// ─── 会社概要 (/company/overview) ────────────────────────────────────────────

async function OverviewContent() {
  const overview = await getCompanyOverview();

  const overviewRows = [
    { label: "会社名", value: overview.companyName },
    ...(overview.founded ? [{ label: "設立", value: overview.founded }] : []),
    {
      label: "所在地",
      value: overview.address,
      ...(overview.mapUrl
        ? { valueHref: overview.mapUrl, valueLinkLabel: "Google Mapsで見る" }
        : {}),
    },
    ...(overview.capital ? [{ label: "資本金", value: overview.capital }] : []),
    ...(overview.employees ? [{ label: "従業員数", value: overview.employees }] : []),
    { label: "事業内容", value: overview.businessSummary },
    ...overview.extraRows,
  ];

  const facts = await getFacts();
  const previewFacts = facts.slice(0, 5);

  return (
    <>
      {/* 会社概要テーブル */}
      <PageSection>
        <SectionRow eyebrow="Company profile" title="会社概要">
          <div className="rounded-[var(--radius-lg)] bg-[var(--color-surface)] py-8">
            <InfoTable rows={overviewRows} />
          </div>
        </SectionRow>
      </PageSection>

      {/* 特定商取引法に基づく表記（プレースホルダー） */}
      <div className="pb-[var(--space-section-y)]">
        <Container size="wide">
          <ImageFrame label="特定商取引法に基づく表記（内容確定後に差し替え）" ratio="wide" />
        </Container>
      </div>

      {/* 10の事実プレビュー */}
      <div className="pb-[var(--space-section-y)]">
        <Container size="wide">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {previewFacts.map((fact) => (
              <Card key={fact.number} className="shadow-none">
                <p className="font-display text-4xl font-black text-[var(--color-ink)]">
                  {fact.number}
                </p>
                <p className="mt-4 text-sm font-black leading-relaxed">{fact.title}</p>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}

// ─── グループ＆連携企業 (/group/companies) ────────────────────────────────────

function GroupCompaniesContent() {
  const branchRows = branchOffices.map((office) => ({
    label: office.name,
    value: `${office.postalCode}\n${office.address}\n電話番号: ${office.phone}`,
  }));

  return (
    <>
      {/* グループ */}
      <PageSection>
        <SectionRow eyebrow="Group" title="グループ">
          <div className="flex h-[400px] items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-surface)] lg:h-[540px]">
            <p className="text-4xl font-black text-[var(--color-ink-muted)]">内容待ち</p>
          </div>
        </SectionRow>
      </PageSection>

      {/* 連携企業 */}
      <div className="pb-[var(--space-section-y)]">
        <Container size="wide">
          <SectionRow eyebrow="Collaboration" title="連携企業">
            <div className="flex h-[400px] items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-surface)] lg:h-[540px]">
              <p className="text-4xl font-black text-[var(--color-ink-muted)]">内容待ち</p>
            </div>
          </SectionRow>
        </Container>
      </div>

      {/* 営業所一覧 */}
      <div className="pb-[var(--space-section-y)]">
        <Container size="wide">
          <div className="rounded-[var(--radius-lg)] bg-[var(--color-surface)] px-10 py-16">
            <SectionRow eyebrow="Branch Office" title="営業所一覧">
              <div className="rounded-[var(--radius-md)] bg-white">
                <InfoTable rows={branchRows} labelVariant="brand" />
              </div>
            </SectionRow>
          </div>
        </Container>
      </div>
    </>
  );
}

// ─── 代表メッセージ (/company/message) ────────────────────────────────────────

function MessageContent({ siblings }: { siblings: SitePage[] }) {
  return (
    <PageGrid siblings={siblings}>
      <article className="grid gap-8 lg:grid-cols-[420px_1fr] lg:items-start">
        <ImageFrame label="社長の写真" ratio="portrait" />
        <div>
          <Badge>Message</Badge>
          <h2 className="mt-5 text-3xl font-black leading-tight">地域に根ざし、事業の可能性を広げる。</h2>
          <div className="mt-6 grid gap-5 text-base leading-9 text-[var(--color-ink-soft)]">
            <p>
              GO-TAsは、沖縄を拠点に複数の事業を横断しながら、地域と人の可能性を広げることを目指しています。
            </p>
            <p>
              制作、運用、人材、飲食。それぞれの現場で得た知見を組み合わせ、目の前の課題に対してフェアで実直な提案を続けます。
            </p>
          </div>
        </div>
      </article>
    </PageGrid>
  );
}

// ─── GO-TAs+ (/gotas-plus) ───────────────────────────────────────────────────

const sayings = [
  {
    term: "ステキング",
    lines: [
      "良い仕事をしたときや、社会のために貢献したときに発せられる言葉。素敵王を尊敬して使われる。",
      "LINEなどで良い動きを報告したメンバーに対して、いち早くステキングを発することが求められる。",
    ],
    bg: "bg-brand-soft",
    hashColor: "text-brand",
  },
  {
    term: "ベリーステキング",
    lines: [
      "ステキングよりも更に良いことをしたときに使われるステキングの上位互換。",
    ],
    bg: "bg-accent-soft",
    hashColor: "text-accent",
  },
  {
    term: "ステキングムーチョ",
    lines: [
      "ステキングの最上位言葉。年に数回出るかどうかのレアワードである。",
      "ちなみにカラムーチョは「とても辛いという意味」",
    ],
    bg: "bg-[#e4f6eb]",
    hashColor: "text-green",
  },
  {
    term: "作業と仕事",
    lines: [
      "GO-TAsでは作業と仕事を明確に分けている。",
      "作業は日々の流れの中で行うものだが、0→1を作る動きやクリエイティブが求められる動きを仕事と呼んでいる。",
    ],
    bg: "bg-[#fff5d6]",
    hashColor: "text-yellow",
  },
  {
    term: "CP",
    lines: [
      "コストパフォーマンスの略語。",
      "GO-TAsではCP高く幸せな人生を過ごすことをモットーとしている。",
    ],
    bg: "bg-brand-soft",
    hashColor: "text-brand",
  },
  {
    term: "えびっっ　エビッッ　海老っっ",
    lines: [
      "エビラバーズの為の言葉兼動作。",
      "「えびっっ　エビッッ　海老っっ」と言葉を発しながら、両手でエビのポーズを取りエビのように後退していく伝統的な作法。徳川家康に仕えた重臣・酒井忠次が宴会などで披露した伝統的な余興・舞からの流れを引き継いでいる。",
    ],
    bg: "bg-accent-soft",
    hashColor: "text-accent",
  },
];

async function GotasPlusContent({ siblings: _siblings }: { siblings: SitePage[] }) {
  const facts = await getFacts();

  return (
    <>
      {/* ── 10の約束 ── */}
      <section className="py-(--space-section-y)">
        <Container size="wide">
          <div className="lg:grid lg:grid-cols-[280px_1fr]">
            {/* Left: sticky label */}
            <div className="mb-12 lg:mb-0 lg:sticky lg:top-[calc(var(--layout-header-height)+40px)] lg:self-start">
              <p className="font-display text-sm font-bold">10 Promises</p>
              <h2 className="mt-2 text-4xl font-bold leading-tight">10の約束</h2>
            </div>

            {/* Right: promise list */}
            <div>
              {facts.map((fact, index) => (
                <div key={fact.number}>
                  {index > 0 && <hr className="border-line-subtle" />}
                  <div className="flex flex-col gap-8 py-10 lg:flex-row lg:items-start lg:gap-20">
                    {/* Text */}
                    <div className="flex flex-1 flex-col gap-5">
                      <p className="font-display text-[18px] font-black text-brand">
                        Promise {fact.number}
                      </p>
                      <h3 className="text-3xl font-bold leading-normal lg:text-[44px]">
                        {fact.title}
                      </h3>
                      <p className="text-base leading-loose text-ink-soft font-bold">{fact.body}</p>
                    </div>

                    {/* Card */}
                    <PromiseCard fact={fact} index={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── GO-TAs語録 ── */}
      <section className="py-(--space-section-y)">
        <Container size="wide">
          <div className="lg:grid lg:grid-cols-[280px_1fr]">
            {/* Left: label */}
            <div className="mb-12 lg:mb-0 lg:sticky lg:top-[calc(var(--layout-header-height)+40px)] lg:self-start">
              <p className="font-display text-sm font-bold">GO-TAs Sayings</p>
              <h2 className="mt-2 text-4xl font-bold leading-tight">GO-TAs語録</h2>
            </div>

            {/* Right: sayings list */}
            <div className="flex flex-col gap-7.5">
              {sayings.map((saying) => (
                <div
                  key={saying.term}
                  className={`${saying.bg} flex flex-col gap-5 rounded-[20px] p-10`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`font-display text-[44px] font-bold leading-none ${saying.hashColor}`}>
                      ＃
                    </span>
                    <span className="font-sans text-[44px] font-bold leading-none">
                      {saying.term}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {saying.lines.map((line, i) => (
                      <p key={i} className="text-base leading-loose">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function PromiseCard({ fact, index }: { fact: CmsFact; index: number }) {
  const isGreen = index === 2 || index === 7;
  const borderClass = isGreen
    ? "border-green"
    : index % 2 === 0
      ? "border-brand"
      : "border-yellow";

  return (
    <div
      className={`flex mx-auto shrink-0 flex-col items-center w-[260px] h-[354px] rounded-[14px] border-[9px] bg-white ${borderClass} shadow-card overflow-hidden lg:mx-0`}
    >
      <p className="mt-11 font-display text-[58px] font-black leading-none">{fact.number}</p>
      <div className="flex flex-1 items-center justify-center px-4">
        <Image
          src={`/svg/promise/illust-${fact.number}.svg`}
          alt=""
          width={180}
          height={135}
          className="max-h-[135px] w-auto object-contain"
        />
      </div>
      <p className="mb-7 px-4 text-center text-[17px] font-black leading-snug">
        {fact.title}
      </p>
    </div>
  );
}

// ─── ヒストリー (/company/*-history) ─────────────────────────────────────────

function HistoryContent({ title, siblings }: { title: string; siblings: SitePage[] }) {
  return (
    <PageGrid siblings={siblings}>
      <div>
        <SectionHeading eyebrow="History" title={title} />
        <div className="mt-10 grid gap-5">
          {historyItems.map(([year, itemTitle, body]) => (
            <Card key={year} className="grid gap-5 shadow-none sm:grid-cols-[180px_1fr]">
              <div>
                <p className="text-2xl font-black text-[var(--color-brand)]">{year}</p>
                <ImageFrame label="写真" className="mt-4" />
              </div>
              <div>
                <h2 className="text-2xl font-black">{itemTitle}</h2>
                <p className="mt-4 leading-8 text-[var(--color-ink-soft)]">{body}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </PageGrid>
  );
}

// ─── グループ概要ページ (/company/group) ──────────────────────────────────────

function GroupIndexContent({ siblings }: { siblings: SitePage[] }) {
  return (
    <PageGrid siblings={siblings}>
      <div>
        <SectionHeading eyebrow="Group" title="GO-TAsグループ" />
        <div className="mt-10">
          <ImageFrame label="グループ図（内容確定後に差し替え）" ratio="wide" />
        </div>
      </div>
    </PageGrid>
  );
}

// ─── 事業案内 (/business) ─────────────────────────────────────────────────────

function BusinessContent({ siblings }: { siblings: SitePage[] }) {
  return (
    <PageGrid siblings={siblings}>
      <div>
        <SectionHeading eyebrow="Business" title="事業案内" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {businessItems.map((item) => (
            <Link key={item.href} href={item.href} className="group block">
              <Card className="h-full shadow-none" interactive>
                <Badge>{item.label}</Badge>
                <h2 className="mt-5 text-xl font-black">{item.title}</h2>
                <p className="mt-4 text-sm leading-8 text-[var(--color-ink-soft)]">{item.summary}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </PageGrid>
  );
}

// ─── プレースホルダー ─────────────────────────────────────────────────────────

function PlaceholderContent({ page, siblings }: { page: SitePage; siblings: SitePage[] }) {
  return (
    <PageGrid siblings={siblings}>
      <Card as="article" className="shadow-none">
        <Badge tone="neutral">Draft page</Badge>
        <h2 className="mt-5 text-2xl font-black">コンテンツ準備中</h2>
        <p className="mt-4 leading-8 text-[var(--color-ink-soft)]">
          {page.title}は、Figmaの下層ワイヤーフレーム、素材、文言が確定次第、共通セクションとデザイントークンを使って実装します。
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {["目的", "掲載内容", "必要素材", "確認事項"].map((label) => (
            <Card key={label} tone="muted" className="rounded-[var(--radius-sm)] p-5 shadow-none">
              <h3 className="font-black text-[var(--color-ink)]">{label}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--color-ink-soft)]">ワイヤーフレーム確定後に記入します。</p>
            </Card>
          ))}
        </div>
      </Card>
    </PageGrid>
  );
}
