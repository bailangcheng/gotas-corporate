type InfoTableRow = {
  label: string;
  value: string;
  valueHref?: string;
  valueLinkLabel?: string;
};

type InfoTableProps = {
  rows: InfoTableRow[];
  labelVariant?: "neutral" | "brand";
};

export function InfoTable({ rows, labelVariant = "neutral" }: InfoTableProps) {
  const labelClass =
    labelVariant === "brand"
      ? "text-[var(--color-brand)]"
      : "text-[var(--color-ink)]";

  return (
    <div>
      {rows.map((row, i) => (
        <div key={i}>
          {i > 0 && <div className="border-t border-[var(--color-line-subtle)]" />}
          <div className="flex flex-col gap-5 px-5 py-6 sm:flex-row sm:gap-10 sm:px-10 sm:py-4">
            <span
              className={`shrink-0 text-base font-bold leading-relaxed ${labelClass} sm:w-50`}
            >
              {row.label}
            </span>
            <div className="flex-1 text-base font-bold leading-relaxed text-[var(--color-ink)]">
              <p className="whitespace-pre-wrap">{row.value}</p>
              {row.valueHref && (
                <a
                  href={row.valueHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block underline underline-offset-2 hover:text-[var(--color-brand)]"
                >
                  {row.valueLinkLabel ?? row.valueHref}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export type { InfoTableRow };
