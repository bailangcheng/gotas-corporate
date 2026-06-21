import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "wide" | "narrow";
};

const sizes = {
  default: "max-w-[var(--layout-container)]",
  wide: "max-w-[var(--layout-wide)]",
  narrow: "max-w-4xl",
};

export function Container({ children, className = "", size = "default" }: ContainerProps) {
  return <div className={`mx-auto w-full px-[var(--space-page-x)] ${sizes[size]} ${className}`}>{children}</div>;
}
