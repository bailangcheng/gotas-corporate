import Link from "next/link";
import { navigation, siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-white/95 backdrop-blur">
      <Container size="wide" className="flex min-h-[70px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} トップへ`}>
          <span className="grid h-9 w-[124px] place-items-center rounded-[var(--radius-xs)] bg-[var(--color-brand)] text-lg font-black tracking-normal text-white">
            GO-TAs
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold text-[var(--color-ink)] lg:flex" aria-label="主要ナビゲーション">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[var(--color-brand)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" size="sm">
            お問い合わせ
          </ButtonLink>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex min-h-10 cursor-pointer list-none items-center rounded-[var(--radius-sm)] border border-[var(--color-line)] px-4 text-sm font-bold marker:hidden">
            Menu
          </summary>
          <nav className="absolute right-0 top-12 w-64 rounded-[var(--radius-md)] border border-[var(--color-line)] bg-white p-3 shadow-[var(--shadow-card)]">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-[var(--radius-sm)] px-3 py-3 text-sm font-bold text-[var(--color-ink)] hover:bg-[var(--color-surface-blue)] hover:text-[var(--color-brand)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </Container>
    </header>
  );
}
