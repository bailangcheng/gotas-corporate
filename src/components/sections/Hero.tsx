import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="bg-[linear-gradient(135deg,#f8fafc_0%,#eef6ff_52%,#ffffff_100%)] py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-700">GO-TAs Corporate</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-slate-950 sm:text-6xl">
              沖縄から、事業と人の可能性を広げる。
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-700">
              GO-TAsは、デジタルサイネージ、Web制作、動画制作、SNS、人材紹介、飲食事業を横断し、
              地域に根ざした事業づくりを進めています。
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/business">事業を見る</ButtonLink>
              <ButtonLink href="/company/message" variant="secondary">
                会社を知る
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="grid gap-3">
              {["Digital Signage", "Website", "Video", "SNS", "Recruitment", "Food Business"].map((item) => (
                <div key={item} className="rounded-md border border-slate-200 bg-slate-50 px-4 py-4 text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

