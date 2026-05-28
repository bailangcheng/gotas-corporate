import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "GO-TAsへのお問い合わせフォームです。",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="なんでもお問い合わせフォーム"
        summary="事業、採用、取材、協業など、GO-TAsへのお問い合わせはこちらからお送りください。"
      />
      <section className="py-[var(--space-section-y)]">
        <Container size="narrow">
          <Card className="shadow-none">
            <ContactForm />
            <p className="mt-8 text-xs leading-6 text-[var(--color-ink-muted)]">
              送信内容はメールで担当者に届きます。営業日2〜3日以内を目安にご返信します。
            </p>
          </Card>
        </Container>
      </section>
    </>
  );
}
