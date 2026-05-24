import Link from "next/link";
import { navigation, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black bg-[var(--color-accent)]/95 backdrop-blur">
      <Container size="wide" className="flex min-h-[var(--layout-header-height)] items-center gap-5">
        <Link href="/" className="flex h-[60px] w-[160px] shrink-0 items-center justify-center rounded-full bg-white" aria-label={`${siteConfig.name} トップへ`}>
          <Logo size="sm" />
        </Link>

        <Link
          href="/magazine/launch-preparation"
          className="hidden h-[60px] min-w-0 flex-1 items-center gap-5 border-y border-black px-5 text-black lg:flex"
        >
          <span className="font-[family-name:var(--font-display)] text-2xl font-black uppercase">News</span>
          <span className="h-10 border-l border-black" />
          <span className="min-w-0 flex-1 truncate text-sm font-black">嵐々亭本店、新ブランドの販売を始めました</span>
          <span className="grid size-8 shrink-0 place-items-center rounded-full border border-black bg-white text-lg font-black shadow-[var(--shadow-soft)]">→</span>
        </Link>

        <nav className="hidden h-[60px] shrink-0 items-center gap-4 rounded-full bg-white px-8 text-sm font-bold text-[var(--color-ink)] lg:flex" aria-label="主要ナビゲーション">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[var(--color-brand)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="group relative ml-auto lg:hidden">
          <summary className="flex min-h-10 cursor-pointer list-none items-center rounded-full border border-black bg-white px-4 text-sm font-bold shadow-[var(--shadow-soft)] marker:hidden">
            Menu
          </summary>
          <nav className="absolute right-0 top-12 w-64 rounded-[var(--radius-md)] border border-black bg-white p-3 shadow-[var(--shadow-card)]">
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
