import Link from "next/link";
import Image from "next/image";
import { footerColumns, siteConfig } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { FooterMarquee } from "@/components/layout/FooterMarquee";

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-accent pb-6 pt-10 text-white">
      <Container size="wide" className="flex flex-col gap-5">
        <FooterMarquee />
        <div className="rounded-[20px] bg-[#111] px-8 py-15 lg:px-12.5">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">

            {/* Left: Logo + address + CTA */}
            <div className="flex flex-col items-center gap-15">
              <div className="text-center">
                <Image
                  src="/icons/footer-logo.svg"
                  alt={siteConfig.name}
                  width={560}
                  height={167}
                  className="w-full max-w-500"
                />
                <p className="mt-7 text-m font-bold">
                  〒901-2125沖縄県浦添市仲西１丁目3番25 フロンテージ仲西703
                </p>
              </div>
              <ButtonLink href="/contact" variant="secondary" className="h-20 w-full max-w-140">
                お問い合わせはこちら
              </ButtonLink>
            </div>

            {/* Right: 3-column nav (PC only) */}
            <div className="hidden lg:grid gap-x-12.5 gap-y-10 sm:grid-cols-3">
              {footerColumns.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-8">
                  {column.map((group, groupIndex) => (
                    <div key={groupIndex} className="border-t border-white/30 pt-6">
                      {!group.headingless && (
                        <Link
                          href={group.href}
                          className="text-lg font-bold text-white transition hover:opacity-30"
                        >
                          {group.label}
                        </Link>
                      )}
                      {group.items ? (
                        <div className={group.headingless ? "grid gap-3" : "mt-4 grid gap-3"}>
                          {group.items.map((child) =>
                            child.external ? (
                              <a
                                key={child.title}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-1.5 text-sm font-medium leading-5 text-white transition hover:opacity-30"
                              >
                                <span className="flex-none text-brand translate-y-1">
                                  <ExternalLinkIcon />
                                </span>
                                {child.title}
                              </a>
                            ) : (
                              <Link
                                key={child.title}
                                href={child.href}
                                className={`text-sm font-medium leading-5 transition hover:opacity-30 ${child.muted ? "text-ink-muted" : "text-white/80"}`}
                              >
                                {child.title}
                              </Link>
                            )
                          )}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              ))}
            </div>

          </div>
        </div>
        <p className="text-center text-xs font-bold">2026© 株式会社GO-TAs</p>
      </Container>
    </footer>
  );
}
