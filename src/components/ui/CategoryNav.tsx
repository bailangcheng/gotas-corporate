import Link from "next/link";

export type CategoryNavItem = {
  href: string;
  label: string;
};

type CategoryNavProps = {
  label: string;
  items: CategoryNavItem[];
  eyebrow?: string;
  className?: string;
  itemClassName?: string;
};

export function CategoryNav({
  label,
  items,
  eyebrow = "Navigation",
  className = "",
  itemClassName = "font-bold",
}: CategoryNavProps) {
  return (
    <nav
      aria-label={label}
      className={`hidden flex-col gap-8 lg:flex ${className}`}
    >
      {/* "Navigation" label */}
      <p className="font-display text-[14px] capitalize leading-none text-white">
        {eyebrow}
      </p>

      {/* Items list */}
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 text-white transition hover:opacity-75 focus-visible:outline-white"
          >
            <span
              className="grid size-5 shrink-0 place-items-center rounded-full border border-white/60"
              aria-hidden="true"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/nav-arrow.svg"
                alt=""
                width={9}
                height={9}
                className="block"
              />
            </span>
            <span className={`whitespace-nowrap text-[16px] leading-snug ${itemClassName}`}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
