import Link from "next/link";
import Image from "next/image";
import { navigation, siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-accent)] pb-6 text-white">
      <Container size="wide">
        <div className="rounded-[20px] bg-[#111] px-8 py-[60px] lg:px-[50px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col items-center gap-[60px]">
              <div className="text-center">
                <Image src="/figma/footer-logo.svg" alt={siteConfig.name} width={560} height={167} className="w-full max-w-[560px]" />
                <p className="mt-7 text-sm font-bold">〒901-2125沖縄県浦添市仲西１丁目3番25 フロンテージ仲西703</p>
              </div>
              <ButtonLink href="/contact" variant="secondary" className="h-20 w-full max-w-[560px]">
                お問い合わせ
              </ButtonLink>
            </div>

            <div className="grid gap-x-[50px] gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {navigation.map((item) => (
                <div key={item.href} className="border-t border-white/50 pt-4">
                  <Link href={item.href} className="text-lg font-black text-white transition hover:text-[var(--color-yellow)]">
                    {item.label}
                  </Link>
                  {item.items ? (
                    <div className="mt-4 grid gap-3">
                      {item.items.map((child) => (
                        <Link key={child.href} href={child.href} className="text-sm font-medium leading-5 text-white hover:text-[var(--color-yellow)]">
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs font-bold">2026© 株式会社GO-TAs</p>
      </Container>
    </footer>
  );
}
