import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function ContactCta() {
  return (
    <section className="bg-blue-700 py-14 text-white">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase text-blue-100">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-normal">ご相談・お問い合わせ</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-50">
            事業、採用、取材、協業など、GO-TAsへのお問い合わせはこちらから。
          </p>
        </div>
        <ButtonLink href="/contact" variant="secondary">
          フォームへ進む
        </ButtonLink>
      </Container>
    </section>
  );
}

