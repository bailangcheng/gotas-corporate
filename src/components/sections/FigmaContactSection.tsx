import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";

export function FigmaContactSection() {
  return (
    <section className="bg-[var(--color-accent)]">
      <div className="relative overflow-hidden rounded-tl-[60px] rounded-tr-[60px] bg-brand py-(--space-section-y) text-white lg:rounded-tl-(--radius-display) lg:rounded-tr-(--radius-display)">
        {/* decorative background */}
        <Image
          src="/svg/bg-5.svg"
          alt=""
          aria-hidden="true"
          fill
          className="pointer-events-none object-cover select-none"
        />
        <Container size="wide" className="relative">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-2.5 text-center">
            <p className="font-[family-name:var(--font-display)] text-[60px] font-black uppercase leading-none sm:text-[80px]">Contact</p>
            <h2 className="text-[18px] font-bold sm:text-[28px]">お問い合わせ</h2>
          </div>
          <div className="mx-auto mt-[100px] w-full max-w-[844px] overflow-hidden rounded-[30px] border border-black bg-white p-8 text-[var(--color-ink)] shadow-[var(--shadow-card)] sm:p-12">
            <ContactForm />
          </div>
        </Container>
      </div>
    </section>
  );
}
