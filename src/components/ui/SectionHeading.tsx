type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, lead, align = "left" }: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`${isCenter ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-brand)]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-4 text-[length:var(--font-size-3xl)] font-bold leading-[1.25] tracking-normal text-[var(--color-ink)] sm:text-[length:var(--font-size-4xl)]">
        {title}
      </h2>
      {lead ? <p className="mt-5 text-base leading-8 text-[var(--color-ink-soft)]">{lead}</p> : null}
    </div>
  );
}
