import Link from "next/link";
import { getActiveNewsPins } from "@/lib/cms/news-pin";
import { getNewsArticles } from "@/lib/cms/news-articles";
import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/IconButton";

type NewsRow = {
  key: string;
  href: string;
  date: string;
  category: string;
  title: string;
};

const MARQUEE_TEXT = "Connecting Future, Creating Value";

function MarqueeStrip({ direction }: { direction: "ltr" | "rtl" }) {
  return (
    <div className="overflow-hidden py-4">
      <div
        className={direction === "ltr" ? "marquee-track-reverse" : "marquee-track"}
        style={
          {
            display: "flex",
            width: "max-content",
            "--marquee-duration": "22s",
          } as React.CSSProperties
        }
      >
        {[0, 1].map((i) => (
          <span
            key={i}
            aria-hidden={i === 1 ? "true" : undefined}
            className="inline-block shrink-0 font-display text-[80px] font-black leading-none text-[#FF1100] lg:text-[120px]"
            style={{ paddingRight: "3rem" }}
          >
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>
    </div>
  );
}

export async function NewsList() {
  const [pins, articles] = await Promise.all([getActiveNewsPins(), getNewsArticles()]);

  const pinRows: NewsRow[] = pins.slice(0, 2).map((pin, index) => ({
    key: `pin-${index}`,
    href: pin.linkUrl,
    date: pin.displayFrom?.slice(0, 10).replaceAll("-", ".") ?? "",
    category: "Pickup",
    title: pin.label,
  }));

  const articleRows: NewsRow[] = articles.slice(0, Math.max(0, 4 - pinRows.length)).map((article) => ({
    key: `article-${article.slug}`,
    href: `/magazine/${article.slug}`,
    date: article.publishedAt.replaceAll("-", "."),
    category: article.category || "ニュース",
    title: article.title,
  }));

  const rows = pinRows.concat(articleRows);

  return (
    <section className="relative z-10 -mt-16 rounded-tl-[60px] pt-16 lg:-mt-30 lg:rounded-tl-[120px] pb-25 lg:pb-35">
      {/* bg-1.svg: z-5 within this stacking context — above marquees (z-0)
          but below the news box (z-10). */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/svg/bg-1.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-auto z-5"
      />

      {/* Top marquee — behind SVG */}
      <div className="relative z-0">
        <MarqueeStrip direction="ltr" />
      </div>

      {/* News content — yellow container, above SVG */}
      <div className="relative z-10">
        <Container size="wide">
          <div className="overflow-hidden rounded-[40px] bg-yellow px-8 py-12 lg:px-16 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-15">

              {/* Left: section title — SP: horizontal stack / PC: vertical writing */}
              <div>
                {/* SP */}
                <div className="flex flex-col gap-1 lg:hidden">
                  <span aria-hidden="true" className="font-display text-[48px] font-black leading-none text-white">
                    News
                  </span>
                  <span className="font-display text-[22px] font-medium text-white">新着情報</span>
                </div>
                {/* PC */}
                <div className="hidden lg:flex items-start gap-6">
                  <span
                    aria-hidden="true"
                    className="font-display font-black leading-none text-white"
                    style={{ writingMode: "vertical-rl", fontSize: "clamp(72px,9vw,120px)" }}
                  >
                    News
                  </span>
                  <span
                    className="font-display text-3xl font-medium leading-[1.05] text-white lg:text-[44px]"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    新着情報
                  </span>
                </div>
              </div>

              {/* Right: news rows */}
              <div className="divide-y divide-black border-y border-black">
                {rows.map((row) => (
                  <Link
                    key={row.key}
                    href={row.href}
                    className="block py-5 transition hover:opacity-80 lg:py-6"
                  >
                    {/* SP layout */}
                    <div className="flex flex-col gap-2 lg:hidden">
                      <div className="flex items-center gap-3">
                        <span className="font-display text-sm font-bold">{row.date}</span>
                        <span className="rounded-full border border-black bg-white px-4 py-0.5 text-xs font-bold text-foreground">{row.category}</span>
                        <IconButton size="sm" tone="transparent" className="ml-auto shrink-0 transition-opacity hover:opacity-20" />
                      </div>
                      <span className="text-sm font-bold text-foreground">{row.title}</span>
                    </div>
                    {/* PC layout */}
                    <div className="hidden lg:grid lg:grid-cols-[110px_120px_1fr_32px] lg:items-center lg:gap-10">
                      <span className="font-display text-base font-bold">{row.date}</span>
                      <span className="w-fit rounded-full border border-black bg-white px-5 py-1 text-sm font-bold text-foreground">{row.category}</span>
                      <span className="text-base font-bold">{row.title}</span>
                      <IconButton size="sm" tone="transparent" className="transition-opacity hover:opacity-20" />
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </div>
        </Container>
      </div>

      {/* Bottom marquee — behind SVG */}
      <div className="relative z-0">
        <MarqueeStrip direction="rtl" />
      </div>
    </section>
  );
}
