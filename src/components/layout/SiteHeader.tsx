import Link from "next/link";
import { siteConfig } from "@/content/site";
import { getPrimaryNewsPin } from "@/lib/cms/news-pin";
import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/IconButton";
import { Logo } from "@/components/ui/Logo";
import { HeaderNav, MobileNav } from "@/components/layout/HeaderNav";

export async function SiteHeader() {
  const pin = await getPrimaryNewsPin();

  return (
    <header className="bg-accent">
      <Container size="wide" className="flex min-h-(--layout-header-height) items-center gap-5">
        <Link href="/" className="relative z-50 flex h-12 w-32 shrink-0 items-center justify-center rounded-full bg-white transition-transform hover:scale-90 min-[1400px]:h-15 min-[1400px]:w-40" aria-label={`${siteConfig.name} トップへ`}>
          <Logo size="xs" className="min-[1400px]:hidden" />
          <Logo size="sm" className="hidden min-[1400px]:block" />
        </Link>

        {pin ? (
          <div className="group hidden h-15 w-125 shrink-0 items-center gap-5 border-y border-black px-5 transition-colors hover:border-white min-[1400px]:flex">
            <span className="font-display text-2xl font-black uppercase text-black transition-colors group-hover:text-white">News</span>
            <span className="h-10 border-l border-black transition-colors group-hover:border-white" />
            <span className="min-w-0 flex-1 overflow-hidden">
              <span
                className="marquee-track inline-flex whitespace-nowrap text-sm font-black text-black transition-colors group-hover:text-white"
                style={{ "--marquee-duration": "22s" } as React.CSSProperties}
              >
                <span className="pr-20">{pin.label}</span>
                <span className="pr-20" aria-hidden="true">{pin.label}</span>
              </span>
            </span>
            <Link href={pin.linkUrl} className="flex-none">
              <IconButton size="md" className="shadow-[1px_2px_0_0_#000000] transition-colors hover:bg-[#ffbe00]" />
            </Link>
          </div>
        ) : null}

        <HeaderNav />

        <MobileNav />
      </Container>
    </header>
  );
}
