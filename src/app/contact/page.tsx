import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "GO-TAsへのお問い合わせフォームです。",
};

const fields = ["お名前", "メールアドレス", "お問い合わせ種別", "お問い合わせ内容"];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="なんでもお問い合わせフォーム"
        summary="事業、採用、取材、協業など、GO-TAsへのお問い合わせはこちらからお送りください。"
      />
      <section className="py-[var(--space-section-y)]">
        <Container>
          <Card className="shadow-none">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-brand)]">Form placeholder</p>
            <h2 className="mt-4 text-2xl font-black text-[var(--color-ink)]">フォーム実装方針</h2>
            <p className="mt-4 max-w-3xl leading-8 text-[var(--color-ink-soft)]">
              本番では、Google Form、Formspree、またはNext.js APIとメール送信のいずれかを選定します。個人情報を保存する場合は、保存先と管理方針を確認します。
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {fields.map((label) => (
                <div
                  key={label}
                  className="rounded-[var(--radius-sm)] border border-dashed border-[var(--color-line-strong)] px-4 py-3 text-sm font-semibold text-[var(--color-ink-muted)]"
                >
                  {label}
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
