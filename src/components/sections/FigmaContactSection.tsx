import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function FigmaContactSection() {
  return (
    <section className="bg-[var(--color-accent)]">
      <div className="rounded-tl-[var(--radius-display)] bg-[var(--color-brand)] py-[var(--space-section-y)] text-white">
        <Container size="wide">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-[family-name:var(--font-display)] text-5xl font-black uppercase leading-none sm:text-[80px]">Contact</p>
            <h2 className="mt-8 text-2xl font-black">お問い合わせ</h2>
          </div>
          <div className="relative mx-auto mt-[100px] aspect-[844/737] w-full max-w-[844px] overflow-hidden rounded-[30px] border border-black bg-white shadow-[var(--shadow-card)]">
            <Image src="/figma/contact-form.png" alt="お問い合わせフォームのプレビュー" fill sizes="(max-width: 900px) 100vw, 844px" className="object-cover" />
          </div>
        </Container>
      </div>
    </section>
  );
}
