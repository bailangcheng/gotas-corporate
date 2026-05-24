import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "article" | "div";
};

export function Card({ children, className = "", as = "div" }: CardProps) {
  const Component = as;

  return (
    <Component
      className={`rounded-[var(--radius-md)] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)] ${className}`}
    >
      {children}
    </Component>
  );
}
