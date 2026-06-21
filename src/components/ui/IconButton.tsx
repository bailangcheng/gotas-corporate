import Image from "next/image";

type IconButtonProps = {
  direction?: "right" | "left" | "up" | "down";
  tone?: "white" | "green" | "transparent";
  size?: "sm" | "md" | "lg";
  elevated?: boolean;
  shape?: "circle" | "square";
  border?: boolean;
  icon?: "arrow" | "external";
  className?: string;
};

const sizes = {
  sm: "size-6 rounded-full",
  md: "size-8 rounded-full",
  lg: "size-[60px]",
};

const iconDimensions: Record<"arrow" | "external", Record<"sm" | "md" | "lg", number>> = {
  arrow:    { sm: 11, md: 14, lg: 26 },
  external: { sm: 11, md: 14, lg: 30 },
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
  shape = "circle",
  border = true,
  icon = "arrow",
  className = "",
}: IconButtonProps) {
  const isElevated = elevated ?? size === "lg";
  const shadow = isElevated
    ? size === "lg"
      ? "drop-shadow-[1.875px_1.875px_0_black]"
      : "drop-shadow-[1px_1px_0_black]"
    : "";

  const borderClass = border
    ? size === "lg"
      ? "border-[1.875px] border-black"
      : "border border-black"
    : "";

  const radiusClass = size === "lg"
    ? shape === "square" ? "rounded-[20px]" : "rounded-full"
    : "";

  const dim = iconDimensions[icon][size];
  const src = icon === "external" ? "/icons/external-link.svg" : "/icons/arrow.svg";

  return (
    <span
      className={`grid shrink-0 place-items-center ${borderClass} ${
        tone === "green" ? "bg-green" : tone === "transparent" ? "bg-transparent" : "bg-white"
      } ${sizes[size]} ${radiusClass} ${shadow} ${className}`}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt=""
        width={dim}
        height={dim}
        className={icon === "arrow" ? rotations[direction] : ""}
      />
    </span>
  );
}
