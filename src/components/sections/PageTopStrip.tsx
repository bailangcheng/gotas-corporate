import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/IconButton";

const items = Array.from({ length: 8 });

export function PageTopStrip() {
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden bg-[var(--color-accent)] py-5">
      <Container size="wide">
        <div className="overflow-hidden rounded-full bg-white py-2">
          <div
            className="marquee-track flex w-max items-center gap-10 px-6 text-xs font-black uppercase text-black"
            style={{ ["--marquee-duration" as string]: "35s" }}
          >
            {loop.map((_, index) => (
              <a key={index} href="#top" className="flex shrink-0 items-center gap-3">
                Page top
                <IconButton size="sm" direction="up" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
