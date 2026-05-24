import { IconButton } from "@/components/ui/IconButton";

export function PageTopStrip() {
  return (
    <div className="overflow-hidden bg-[var(--color-accent)] py-5">
      <div className="mx-auto flex max-w-[calc(var(--layout-wide)+var(--space-page-x)*2)] items-center gap-5 overflow-hidden rounded-full bg-white px-6 py-2 text-xs font-black uppercase text-black">
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} className="flex shrink-0 items-center gap-3">
            Page top
            <IconButton size="sm" className="-rotate-90" />
          </span>
        ))}
      </div>
    </div>
  );
}
