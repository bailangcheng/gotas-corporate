import { businessItems } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="overflow-hidden bg-[var(--color-surface)]">
      <Container size="wide" className="grid min-h-[calc(100vh-70px)] gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-brand)]">GO-TAs Corporate</p>
          <h1 className="mt-5 max-w-4xl text-[length:var(--font-size-4xl)] font-black leading-[1.16] tracking-normal text-[var(--color-ink)] sm:text-[length:var(--font-size-5xl)]">
            沖縄から、事業と人の可能性を広げる。
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-[var(--color-ink-soft)]">
            GO-TAsは、デジタルサイネージ、Web制作、動画制作、SNS、人材紹介、飲食事業を横断し、地域に根ざした事業づくりを進めています。
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/business">事業を見る</ButtonLink>
            <ButtonLink href="/company/message" variant="secondary">
              会社を知る
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-4 rounded-[var(--radius-md)] border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-card)]">
          <div className="rounded-[var(--radius-sm)] bg-[var(--color-brand)] p-6 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/70">Business Map</p>
            <p className="mt-3 text-2xl font-black">複数事業を横断するGO-TAsの領域</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {businessItems.slice(0, 6).map((item) => (
              <div key={item.href} className="rounded-[var(--radius-sm)] border border-[var(--color-line)] bg-[var(--color-surface)] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-brand)]">{item.label}</p>
                <p className="mt-2 font-bold text-[var(--color-ink)]">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
