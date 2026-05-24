import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  summary: string;
};

export function PageHero({ eyebrow, title, summary }: PageHeroProps) {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-16 sm:py-20">
      <Container size="wide">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-brand)]">{eyebrow}</p>
        <h1 className="mt-5 max-w-5xl text-[length:var(--font-size-4xl)] font-black leading-[1.18] tracking-normal text-[var(--color-ink)] sm:text-[length:var(--font-size-5xl)]">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-9 text-[var(--color-ink-soft)]">{summary}</p>
      </Container>
    </section>
  );
}
