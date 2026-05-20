import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const classes =
    variant === "primary"
      ? "bg-blue-700 text-white hover:bg-blue-800"
      : "border border-slate-300 bg-white text-slate-950 hover:border-blue-500 hover:text-blue-700";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition ${classes}`}
    >
      {children}
    </Link>
  );
}

