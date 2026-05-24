type MarqueeBandProps = {
  className?: string;
};

export function MarqueeBand({ className = "" }: MarqueeBandProps) {
  return (
    <div className={`overflow-hidden bg-[var(--color-accent)] py-5 ${className}`} aria-hidden="true">
      <p className="whitespace-nowrap font-[family-name:var(--font-display)] text-7xl font-black leading-none text-[#e94337] sm:text-[100px]">
        Connecting Future, Creating Value　Connecting Future, Creating Value　Connecting Future, Creating Value
      </p>
    </div>
  );
}
