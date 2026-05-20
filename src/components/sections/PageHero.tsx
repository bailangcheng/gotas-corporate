import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  summary: string;
};

export function PageHero({ eyebrow, title, summary }: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20">
      <Container>
        <p className="text-sm font-semibold uppercase text-blue-700">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-700">{summary}</p>
      </Container>
    </section>
  );
}

