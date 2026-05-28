import Image from "next/image";

type IconButtonProps = {
  direction?: "right" | "left" | "up" | "down";
  tone?: "white" | "green";
  size?: "sm" | "md" | "lg";
  elevated?: boolean;
  className?: string;
};

const sizes = {
  sm: "size-6 rounded-full",
  md: "size-8 rounded-full",
  lg: "size-[60px] rounded-full border-[1.875px]",
};

const iconSizes = {
  sm: 11,
  md: 14,
  lg: 26,
};

const rotations = {
  right: "",
  left: "rotate-180",
  up: "-rotate-90",
  down: "rotate-90",
};

export function IconButton({
  direction = "right",
  tone = "white",
  size = "md",
  elevated,
  className = "",
}: IconButtonProps) {
  const isElevated = elevated ?? size === "lg";
  const shadow = isElevated
    ? size === "lg"
      ? "drop-shadow-[1.875px_1.875px_0_black]"
      : "drop-shadow-[1px_1px_0_black]"
    : "";

  return (
    <span
      className={`grid shrink-0 place-items-center border border-black ${
        tone === "green" ? "bg-[var(--color-green)]" : "bg-white"
      } ${sizes[size]} ${shadow} ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/figma/arrow.svg"
        alt=""
        width={iconSizes[size]}
        height={iconSizes[size]}
        className={rotations[direction]}
      />
    </span>
  );
}
