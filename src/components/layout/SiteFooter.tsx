import Link from "next/link";
import { navigation, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 py-12 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-2xl font-bold">{siteConfig.name}</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">{siteConfig.description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-10 text-xs text-slate-500">© GO-TAs. Draft implementation.</p>
      </Container>
    </footer>
  );
}

