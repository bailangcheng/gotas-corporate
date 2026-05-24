import Link from "next/link";
import type { ReactNode } from "react";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function TextLink({ href, children, className = "" }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-sm font-bold text-[var(--color-brand)] transition hover:text-[var(--color-brand-dark)] ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
