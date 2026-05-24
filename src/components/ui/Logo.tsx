import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  tone?: "color" | "light";
};

const sizes = {
  sm: { box: "h-8 w-[108px]", text: "text-2xl" },
  md: { box: "h-10 w-[134px]", text: "text-3xl" },
  lg: { box: "h-12 w-[162px]", text: "text-4xl" },
};

export function Logo({ className = "", size = "md", tone = "color" }: LogoProps) {
  const light = tone === "light";

  if (!light) {
    return <Image src="/figma/logo.svg" alt="GO-TAs" width={162} height={48} className={`${sizes[size].box} ${className}`} priority />;
  }

  return (
    <span className={`inline-flex items-baseline font-black leading-none tracking-normal ${sizes[size].text} ${className}`} aria-label="GO-TAs">
      <span className={light ? "text-white" : "text-[var(--color-logo-blue)]"}>G</span>
      <span className={light ? "text-white" : "text-[var(--color-logo-red)]"}>O</span>
      <span className={light ? "text-white" : "text-[var(--color-logo-yellow)]"}>-</span>
      <span className={light ? "text-white" : "text-[var(--color-logo-green)]"}>T</span>
      <span className={light ? "text-white" : "text-[var(--color-logo-red)]"}>A</span>
      <span className={light ? "text-white" : "text-[var(--color-logo-green)]"}>s</span>
    </span>
  );
}
