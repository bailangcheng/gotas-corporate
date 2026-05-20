import Link from "next/link";
import { businessPages } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServiceGrid() {
  const services = businessPages.filter((page) => page.href !== "/business");

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Business"
          title="複数の事業を横断して、地域の課題に向き合う。"
          lead="各事業ページはワイヤーフレーム確定後に詳細コンテンツを反映します。"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 hover:bg-white hover:shadow-sm"
            >
              <p className="text-xs font-semibold uppercase text-blue-700">{service.eyebrow}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.summary}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

