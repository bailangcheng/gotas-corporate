import Link from "next/link";
import Image from "next/image";
import { businessItems } from "@/content/site";
import { Container } from "@/components/ui/Container";

const serviceImages: Record<string, string> = {
  "/business/digital-signage": "/figma/service-digital-signage.png",
  "/business/website": "/figma/service-website-video.png",
  "/business/video-production": "/figma/service-website-video.png",
  "/business/sns": "/figma/service-sns.png",
  "/business/recruitment-agency": "/figma/service-recruitment.png",
};

const featuredServices = businessItems.filter((service) => serviceImages[service.href]).slice(0, 4);

export function ServiceGrid() {
  return (
    <section className="bg-[var(--color-brand)] py-[var(--space-section-y)] text-white lg:rounded-tl-[var(--radius-display)]">
      <Container size="wide">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-[family-name:var(--font-display)] text-5xl font-black uppercase leading-none sm:text-[80px]">Our Service</p>
          <h2 className="mt-8 text-2xl font-black tracking-normal sm:text-[28px]">GO-TAs事業一覧</h2>
        </div>

        <div className="mt-[100px] grid gap-10 lg:grid-cols-2">
          {featuredServices.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group block overflow-hidden rounded-[14px] border border-black bg-white text-[var(--color-ink)] shadow-[var(--shadow-card)] transition hover:-translate-y-1"
            >
              <div className="relative aspect-[540/268] overflow-hidden border-b border-black bg-[#d5d5d5]">
                <Image
                  src={serviceImages[service.href]}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 540px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex min-h-[92px] items-center justify-between gap-5 px-8 py-6">
                <h3 className="text-xl font-black leading-snug sm:text-2xl">{service.title}</h3>
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-black bg-[var(--color-green)] text-lg font-black text-white shadow-[var(--shadow-soft)]">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
