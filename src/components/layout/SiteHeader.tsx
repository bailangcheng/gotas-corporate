import Link from "next/link";
import { navigation, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-6">
        <Link href="/" className="text-lg font-bold tracking-normal text-slate-950">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-blue-700">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="inline-flex min-h-10 items-center rounded-md bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          お問い合わせ
        </Link>
      </Container>
    </header>
  );
}

