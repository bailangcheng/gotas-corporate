import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "brand" | "neutral" | "accent";
};

const tones = {
  brand: "bg-[var(--color-brand-soft)] text-[var(--color-brand-dark)]",
  neutral: "bg-[var(--color-surface)] text-[var(--color-ink-soft)]",
  accent: "bg-[var(--color-accent-soft)] text-[var(--color-ink)]",
};

export function Badge({ children, tone = "brand" }: BadgeProps) {
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] ${tones[tone]}`}>
      {children}
    </span>
  );
}
