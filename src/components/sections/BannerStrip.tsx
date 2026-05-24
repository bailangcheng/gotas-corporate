import { Container } from "@/components/ui/Container";

export function BannerStrip() {
  return (
    <section className="overflow-hidden bg-[var(--color-accent)] py-5">
      <Container size="wide">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {["バナー", "バナー", "バナー"].map((label, index) => (
            <div key={`${label}-${index}`} className="grid aspect-[433/242] place-items-center rounded-xl bg-[#d5d5d5] text-2xl font-black text-[#7f7f7f]">
              {label}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
