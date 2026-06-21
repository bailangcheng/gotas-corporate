type PageHeroProps = {
  eyebrow: string;
  title: string;
};

export function PageHero({ eyebrow, title }: PageHeroProps) {
  return (
    <section className="py-20 text-center text-white sm:py-28">
      <p className="font-display text-6xl font-black normal-case tracking-tight sm:text-8xl">
        {eyebrow}
      </p>
      <h1 className="mt-4 text-[1.75rem] font-bold">{title}</h1>
    </section>
  );
}
