type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-baseline text-3xl font-black leading-none tracking-normal ${className}`} aria-label="GO-TAs">
      <span className="text-[var(--color-logo-blue)]">G</span>
      <span className="text-[var(--color-logo-red)]">O</span>
      <span className="text-[var(--color-logo-yellow)]">-</span>
      <span className="text-[var(--color-logo-green)]">T</span>
      <span className="text-[var(--color-logo-red)]">A</span>
      <span className="text-[var(--color-logo-green)]">s</span>
    </span>
  );
}
