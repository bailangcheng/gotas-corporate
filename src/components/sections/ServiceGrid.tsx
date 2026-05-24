import Link from "next/link";
import { businessItems } from "@/content/site";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServiceGrid() {
  return (
    <section className="bg-white py-[var(--space-section-y)]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Business"
          title="複数の事業を横断して、地域の課題に向き合う。"
          lead="各事業ページは、Figmaの共通カード、見出し、余白ルールを使って拡張できる構成にしています。"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {businessItems.map((service) => (
            <Link key={service.href} href={service.href} className="group block">
              <Card className="h-full transition group-hover:-translate-y-1 group-hover:border-[var(--color-brand)]">
                <Badge>{service.label}</Badge>
                <h3 className="mt-5 text-xl font-black text-[var(--color-ink)]">{service.title}</h3>
                <p className="mt-4 text-sm leading-8 text-[var(--color-ink-soft)]">{service.summary}</p>
                <p className="mt-6 text-sm font-bold text-[var(--color-brand)]">詳しく見る →</p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
