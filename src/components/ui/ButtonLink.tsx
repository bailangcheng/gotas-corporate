import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  className?: string;
};

const variants = {
  primary:
    "border-[var(--color-brand)] bg-[var(--color-brand)] text-white hover:border-[var(--color-brand-dark)] hover:bg-[var(--color-brand-dark)]",
  secondary:
    "border-[var(--color-line-strong)] bg-white text-[var(--color-ink)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]",
  ghost:
    "border-transparent bg-transparent text-[var(--color-brand)] hover:border-[var(--color-brand-soft)] hover:bg-[var(--color-surface-blue)]",
};

const sizes = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-12 px-6 text-sm",
};

export function ButtonLink({ href, children, variant = "primary", size = "md", className = "" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-[var(--radius-sm)] border font-semibold tracking-normal transition ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
