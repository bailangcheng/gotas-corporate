import Link from "next/link";
import { businessPages, companyPages, groupPages, morePages, recruitPages } from "@/content/site";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const groups = [
  ["会社概要", companyPages],
  ["事業案内", businessPages],
  ["グループ", groupPages],
  ["採用情報", recruitPages],
  ["GO-TAs+", morePages],
] as const;

export function SitemapPreview() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--space-section-y)]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Sitemap"
          title="共通パーツで拡張できるサイト構成。"
          lead="下層ページのワイヤーフレーム確定前でも、同じ見出し、カード、リストの設計でページを増やせます。"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {groups.map(([label, pages]) => (
            <Card key={label} className="shadow-none">
              <h3 className="text-xl font-black text-[var(--color-ink)]">{label}</h3>
              <div className="mt-5 grid gap-2">
                {pages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="rounded-[var(--radius-sm)] border border-transparent bg-[var(--color-surface)] px-4 py-3 text-sm font-semibold text-[var(--color-ink-soft)] transition hover:border-[var(--color-brand-soft)] hover:bg-[var(--color-surface-blue)] hover:text-[var(--color-brand)]"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
