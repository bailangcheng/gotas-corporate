import Link from "next/link";
import type { ReactNode } from "react";
import type { SitePage } from "@/content/site";
import { businessItems, groupPages } from "@/content/site";
import { getCompanyOverview, toOverviewRows } from "@/lib/cms/company-overview";
import { getFacts } from "@/lib/cms/facts";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ImageFrame } from "@/components/ui/ImageFrame";
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

  if (page.href === "/company/facts") {
    return <FactsContent siblings={siblings} />;
  }

  if (page.href === "/company/overview") {
    return <OverviewContent siblings={siblings} />;
  }

  if (page.href === "/company/gotas-history" || page.href === "/company/igarashi-history") {
    return <HistoryContent title={page.title} siblings={siblings} />;
  }

  if (page.href === "/company/group" || page.section === "group") {
    return <GroupContent siblings={siblings} />;
  }

  if (page.href === "/business") {
    return <BusinessContent siblings={siblings} />;
  }

  return <PlaceholderContent page={page} siblings={siblings} />;
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
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["熱くする", "スペイン語にする", "GO-TAs語にする", "アイヌ語にする"].map((label) => (
              <div key={label} className="rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-[var(--color-surface)] px-5 py-4 text-center font-black">
                {label}
              </div>
            ))}
          </div>
        </div>
      </article>
    </PageGrid>
  );
}

async function FactsContent({ siblings }: { siblings: SitePage[] }) {
  const facts = await getFacts();

  return (
    <PageGrid siblings={siblings}>
      <div>
        <SectionHeading eyebrow="Facts" title="GO-TAs10の約束" lead="Figmaの反復レイアウトに合わせ、番号、見出し、本文を同じリズムで並べます。" />
        <div className="mt-10 grid gap-5">
          {facts.map((fact) => (
            <Card key={fact.number} className="shadow-none">
              <p className="text-sm font-black text-[var(--color-brand)]">{fact.number}</p>
              <h2 className="mt-2 text-2xl font-black">{fact.title}</h2>
              <p className="mt-3 leading-8 text-[var(--color-ink-soft)]">{fact.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </PageGrid>
  );
}

async function OverviewContent({ siblings }: { siblings: SitePage[] }) {
  const overview = await getCompanyOverview();
  const rows = toOverviewRows(overview);

  return (
    <PageGrid siblings={siblings}>
      <div>
        <ImageFrame label="会社イメージ / Map" />
        <Card className="mt-8 shadow-none">
          <h2 className="text-2xl font-black">会社概要</h2>
          <dl className="mt-6 divide-y divide-[var(--color-line)]">
            {rows.map((row) => (
              <div key={row.label} className="grid gap-2 py-4 sm:grid-cols-[160px_1fr]">
                <dt className="text-sm font-black text-[var(--color-ink)]">{row.label}</dt>
                <dd className="text-sm leading-7 text-[var(--color-ink-soft)]">{row.value}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </div>
    </PageGrid>
  );
}

function HistoryContent({ title, siblings }: { title: string; siblings: SitePage[] }) {
  return (
    <PageGrid siblings={siblings}>
      <div>
        <SectionHeading eyebrow="History" title={title} lead="正式素材が揃うまで、年表カードとして差し替えやすい構造にしています。" />
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

function GroupContent({ siblings }: { siblings: SitePage[] }) {
  return (
    <PageGrid siblings={siblings}>
      <div>
        <SectionHeading eyebrow="Group" title="グループ・提携企業" lead="グループ会社と提携企業を、同じカード設計で追加できるようにしています。" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {groupPages.map((item) => (
            <Link key={item.href} href={item.href} className="group block">
              <Card className="h-full shadow-none" interactive>
                <Badge>{item.eyebrow}</Badge>
                <h2 className="mt-5 text-2xl font-black">{item.title}</h2>
                <p className="mt-4 leading-8 text-[var(--color-ink-soft)]">{item.summary}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </PageGrid>
  );
}

function BusinessContent({ siblings }: { siblings: SitePage[] }) {
  return (
    <PageGrid siblings={siblings}>
      <div>
        <SectionHeading eyebrow="Business" title="事業案内" lead="GO-TAsが展開する事業を、共通カードコンポーネントで一覧化します。" />
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
