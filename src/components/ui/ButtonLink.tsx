import Link from "next/link";
import type { ReactNode } from "react";
import { IconButton } from "@/components/ui/IconButton";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  className?: string;
  withIcon?: boolean;
};

const variants = {
  primary:
    "border-black bg-[var(--color-green)] text-[#ffffff] shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:bg-[var(--color-brand)]",
  secondary:
    "border-black bg-white text-[#111111] shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:text-[var(--color-brand)]",
  ghost:
    "border-transparent bg-transparent text-[var(--color-brand)] hover:bg-[var(--color-brand-soft)]",
};

const sizes = {
  sm: "min-h-10 px-5 text-sm",
  md: "min-h-14 px-7 text-base min-w-[220px]",
};

export function ButtonLink({ href, children, variant = "primary", size = "md", className = "", withIcon = true }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`relative inline-flex items-center justify-center gap-4 rounded-full border font-black tracking-normal transition ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {withIcon ? <IconButton tone="green" size={size === "sm" ? "sm" : "md"} elevated={false} className={size === "sm" ? "" : "absolute right-5"} /> : null}
    </Link>
  );
}
