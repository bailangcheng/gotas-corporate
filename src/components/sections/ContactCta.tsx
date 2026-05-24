import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function ContactCta() {
  return (
    <section className="bg-[var(--color-brand)] py-16 text-white">
      <Container size="wide" className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Contact</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal">ご相談・お問い合わせ</h2>
          <p className="mt-4 max-w-2xl text-sm leading-8 text-white/80">
            事業、採用、取材、協業など、GO-TAsへのお問い合わせはこちらからお送りください。
          </p>
        </div>
        <ButtonLink href="/contact" variant="secondary" className="shrink-0">
          フォームへ進む
        </ButtonLink>
      </Container>
    </section>
  );
}
