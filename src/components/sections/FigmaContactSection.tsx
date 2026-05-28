import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";

export function FigmaContactSection() {
  return (
    <section className="bg-[var(--color-accent)]">
      <div className="rounded-tl-[var(--radius-display)] bg-[var(--color-brand)] py-[var(--space-section-y)] text-white">
        <Container size="wide">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-[family-name:var(--font-display)] text-5xl font-black uppercase leading-none sm:text-[80px]">Contact</p>
            <h2 className="mt-8 text-2xl font-black">お問い合わせ</h2>
          </div>
          <div className="mx-auto mt-[100px] w-full max-w-[844px] overflow-hidden rounded-[30px] border border-black bg-white p-8 text-[var(--color-ink)] shadow-[var(--shadow-card)] sm:p-12">
            <ContactForm />
          </div>
        </Container>
      </div>
    </section>
  );
}
