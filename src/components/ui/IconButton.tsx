import Image from "next/image";

type IconButtonProps = {
  direction?: "right" | "left";
  tone?: "white" | "green";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "size-6",
  md: "size-8",
  lg: "size-[60px]",
};

const iconSizes = {
  sm: 11,
  md: 14,
  lg: 26,
};

export function IconButton({ direction = "right", tone = "white", size = "md", className = "" }: IconButtonProps) {
  const isLeft = direction === "left";

  return (
    <span
      className={`grid shrink-0 place-items-center rounded-[20px] border border-black ${
        tone === "green" ? "bg-[var(--color-green)]" : "bg-white"
      } drop-shadow-[1px_1px_0_black] ${sizes[size]} ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/figma/arrow.svg"
        alt=""
        width={iconSizes[size]}
        height={iconSizes[size]}
        className={isLeft ? "rotate-180" : ""}
      />
    </span>
  );
}
