type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
};

export function SectionHeading({ eyebrow, title, lead }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-sm font-semibold uppercase text-blue-700">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">{title}</h2>
      {lead ? <p className="mt-4 text-base leading-8 text-slate-600">{lead}</p> : null}
    </div>
  );
}

