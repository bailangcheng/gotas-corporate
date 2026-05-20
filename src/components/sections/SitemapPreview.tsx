import Link from "next/link";
import { businessPages, companyPages, groupPages, morePages, recruitPages } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const groups = [
  ["会社案内", companyPages],
  ["事業案内", businessPages],
  ["グループ", groupPages],
  ["採用情報", recruitPages],
  ["もっとGO-TAs", morePages],
] as const;

export function SitemapPreview() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Sitemap"
          title="サイト構成"
          lead="下層ワイヤーフレーム確定前に、ページ構成と導線を先行して整理しています。"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {groups.map(([label, pages]) => (
            <div key={label} className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-950">{label}</h3>
              <div className="mt-4 grid gap-2">
                {pages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="rounded-md bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                  >
                    {page.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

