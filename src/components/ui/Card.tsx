import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "article" | "div";
  tone?: "plain" | "muted" | "contrast";
  interactive?: boolean;
};

const tones = {
  plain: "border-[var(--color-line)] bg-white text-[var(--color-ink)]",
  muted: "border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-ink)]",
  contrast: "border-[var(--color-surface-contrast)] bg-[var(--color-surface-contrast)] text-white",
};

export function Card({ children, className = "", as = "div", tone = "plain", interactive = false }: CardProps) {
  const Component = as;

  return (
    <Component
      className={`rounded-[var(--radius-md)] border p-6 shadow-[var(--shadow-soft)] ${tones[tone]} ${
        interactive ? "transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]" : ""
      } ${className}`}
    >
      {children}
    </Component>
  );
}
