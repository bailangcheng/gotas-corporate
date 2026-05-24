import Link from "next/link";
import { navigation, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-ink)] py-14 text-white">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-3xl font-black tracking-normal">{siteConfig.name}</p>
            <p className="mt-5 max-w-md text-sm leading-8 text-white/70">{siteConfig.description}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {navigation.map((item) => (
              <div key={item.href}>
                <Link href={item.href} className="text-sm font-bold text-white transition hover:text-[var(--color-accent)]">
                  {item.label}
                </Link>
                {item.items ? (
                  <div className="mt-3 grid gap-2">
                    {item.items.slice(0, 4).map((child) => (
                      <Link key={child.href} href={child.href} className="text-xs leading-6 text-white/60 hover:text-white">
                        {child.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-12 border-t border-white/15 pt-6 text-xs text-white/50">© GO-TAs. Draft implementation.</p>
      </Container>
    </footer>
  );
}
