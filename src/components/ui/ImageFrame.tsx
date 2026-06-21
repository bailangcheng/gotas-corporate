type ImageFrameProps = {
  label: string;
  ratio?: "wide" | "portrait" | "square";
  className?: string;
};

const ratios = {
  wide: "aspect-[16/9]",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
};

export function ImageFrame({ label, ratio = "wide", className = "" }: ImageFrameProps) {
  return (
    <div
      className={`grid ${ratios[ratio]} place-items-center rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[linear-gradient(135deg,var(--color-surface)_0%,var(--color-surface-blue)_100%)] text-sm font-semibold text-[var(--color-ink-muted)] ${className}`}
    >
      {label}
    </div>
  );
}
