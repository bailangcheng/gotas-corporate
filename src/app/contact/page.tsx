import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { ContactDecorations } from "@/components/ui/ContactDecorations";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "GO-TAsへのお問い合わせフォームです。",
};

export default function ContactPage() {
  return (
    <div className="bg-accent">
      {/* ヒーロー */}
      <PageHero eyebrow="CONTACT" title="お問い合わせ" />

      {/* 青いフォームセクション — rounded-tr の背後に赤が見える */}
      <section className="relative overflow-hidden bg-brand rounded-tr-(--radius-display)">
        <ContactDecorations />

        {/* フォームカード */}
        <div className="relative px-(--space-page-x) py-30 flex flex-col items-center">
          <div className="w-full max-w-240 rounded-[20px] bg-white px-10 py-25 [box-shadow:6px_8px_0_0_#000000]">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
