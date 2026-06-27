"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { navigation, siteConfig, type NavGroup } from "@/content/site";
import { IconButton } from "@/components/ui/IconButton";
import { Logo } from "@/components/ui/Logo";

// ─── PC Dropdown ─────────────────────────────────────────────────────────────

function NavDropdown({
  group,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: {
  group: NavGroup;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const subItems = group.items?.filter((p) => p.href !== group.href) ?? [];

  return (
    // Outer zone starts immediately at nav bottom (no gap) — prevents mouse from
    // falling into an "empty" area between nav and the visible card.
    // The 10px visual gap is achieved with pt-2.5 (padding inside).
    <div
      className="absolute right-0 top-full z-50 pt-2.5"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex w-[830px] items-start gap-10 rounded-[20px] border border-line-subtle bg-white px-10 py-7.5">
        <div className="flex w-36 shrink-0 flex-col items-center gap-1.5 text-center text-foreground">
          <span className="font-display text-[28px] font-black leading-none">{group.eyebrow}</span>
          <span className="text-sm font-bold">{group.label}</span>
        </div>
        <div className="self-stretch border-l border-line-subtle" />
        <div className="flex flex-1 flex-wrap gap-x-10 gap-y-4">
          {subItems.map((page) => {
            const className =
              "flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-bold text-foreground transition hover:text-brand";
            const dot = <span className="size-3 shrink-0 rounded-full bg-[#d9d9d9]" aria-hidden="true" />;

            if (page.externalHref) {
              return (
                <a
                  key={page.href}
                  href={page.externalHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className={className}
                >
                  {dot}
                  {page.title}
                </a>
              );
            }

            return (
              <Link key={page.href} href={page.href} onClick={onClose} className={className}>
                {dot}
                {page.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── PC Nav ──────────────────────────────────────────────────────────────────

export function HeaderNav() {
  const pathname = usePathname();
  const [openHref, setOpenHref] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRootRef = useRef<HTMLDivElement>(null);

  const openGroup = navigation.find((item) => item.href === openHref && item.items);

  function cancelClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function closeDropdown() {
    cancelClose();
    setOpenHref(null);
  }

  function scheduleClose() {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      closeTimer.current = null;
      setOpenHref(null);
    }, 150);
  }

  function handleMouseEnter(href: string, hasItems: boolean) {
    cancelClose();
    setOpenHref(hasItems ? href : null);
  }

  useEffect(() => {
    return () => cancelClose();
  }, []);

  useEffect(() => {
    const routeCloseTimer = window.setTimeout(() => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
        closeTimer.current = null;
      }

      setOpenHref(null);
    }, 0);

    return () => window.clearTimeout(routeCloseTimer);
  }, [pathname]);

  useEffect(() => {
    if (!openHref) return;

    function handlePointerMove(event: PointerEvent) {
      const target = event.target;

      if (target instanceof Node && !navRootRef.current?.contains(target)) {
        if (closeTimer.current) {
          clearTimeout(closeTimer.current);
          closeTimer.current = null;
        }

        setOpenHref(null);
      }
    }

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => document.removeEventListener("pointermove", handlePointerMove);
  }, [openHref]);

  const activeHref = navigation.find(
    (item) => item.href !== "/" && pathname.startsWith(item.href)
  )?.href;

  return (
    <>
      {openHref && (
        <div
          className="fixed inset-0 z-40 bg-black/20 pointer-events-none"
          style={{ animation: "nav-overlay-in 0.12s ease forwards" }}
          aria-hidden="true"
        />
      )}
      <div
        ref={navRootRef}
        className="relative hidden min-[1400px]:flex flex-col items-end"
        onMouseLeave={scheduleClose}
      >
      <nav
        className="flex h-15 w-165 shrink-0 items-center justify-center gap-6 rounded-full bg-white px-5 text-sm font-bold"
        aria-label="主要ナビゲーション"
      >
        {navigation.map((item) => {
          const isActive = activeHref === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`transition ${isActive ? "text-brand" : "text-foreground hover:text-brand"}`}
              onMouseEnter={() => handleMouseEnter(item.href, !!item.items)}
              onClick={closeDropdown}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      {openGroup && (
        <NavDropdown
          group={openGroup}
          onClose={closeDropdown}
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        />
      )}
    </div>
    </>
  );
}

// ─── Icons ───────────────────────────────────────────────────────────────────

/** Figma 43:4266 — two ±15° red lines stacked in a CSS grid → X close icon */
function CloseX() {
  return (
    <span
      className="inline-grid leading-0"
      style={{ gridTemplateColumns: "max-content", gridTemplateRows: "max-content" }}
    >
      <span
        className="col-start-1 row-start-1 flex items-center justify-center"
        style={{ width: "30.6px", height: "9.8px", marginLeft: "0.47px", marginTop: "0.32px" }}
      >
        <span className="rotate-[-15deg] flex-none">
          <span
            className="block rounded-full bg-accent"
            style={{ width: "31.2px", height: "1.8px" }}
          />
        </span>
      </span>
      <span
        className="col-start-1 row-start-1 flex items-center justify-center"
        style={{ width: "30.6px", height: "9.8px" }}
      >
        <span className="rotate-15 flex-none">
          <span
            className="block rounded-full bg-accent"
            style={{ width: "31.2px", height: "1.8px" }}
          />
        </span>
      </span>
    </span>
  );
}

/** Figma 43:4277 — grey circle + border with plus/minus SVG inside */
function ExpandButton({
  expanded,
  label,
  onClick,
}: {
  expanded: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-none flex size-8 items-center justify-center rounded-[20px] border border-[#adadad]"
      aria-label={`${label}のサブメニュー`}
      aria-expanded={expanded}
    >
      {expanded ? (
        /* Minus — collapse */
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
          <path d="M1.5 6.5H11.5" stroke="#adadad" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ) : (
        /* Plus — expand */
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
          <path d="M6.5 1.5V11.5M1.5 6.5H11.5" stroke="#adadad" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-brand" aria-hidden="true">
      <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
    </svg>
  );
}

// ─── SP / Mobile Nav ──────────────────────────────────────────────────────────

type MobileNavItem = {
  eyebrow: string;
  label: string;
  href: string;
  items?: NavGroup["items"];
};

const mobileNavItems: MobileNavItem[] = [
  { eyebrow: "Top", label: "トップページ", href: "/" },
  ...navigation
    .filter((item) => item.href !== "/contact")
    .map((item) => ({
      eyebrow: item.eyebrow ?? item.label,
      label: item.label,
      href: item.href,
      items: item.items,
    })),
  { eyebrow: "News", label: "ニュース", href: "/magazine" },
];

/** Render expanded sub-links according to Figma 43:4345 */
function ExpandedLinks({
  item,
  onClose,
}: {
  item: MobileNavItem;
  onClose: () => void;
}) {
  const allItems = item.items ?? [];

  // Company: blue section header + sub-pages (parent excluded)
  if (item.href === "/company") {
    const subItems = allItems.filter((p) => p.href !== item.href);
    return (
      <div className="mb-4 flex flex-col gap-4 pb-1">
        <span className="text-sm font-bold text-brand">{item.label}</span>
        {subItems.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            onClick={onClose}
            className="text-sm font-bold text-black transition hover:text-brand"
          >
            {p.title}
          </Link>
        ))}
      </div>
    );
  }

  // Services / Recruit: "XXトップ" parent link first, then sub-pages
  if (item.href === "/business" || item.href === "/recruit") {
    const subItems = allItems.filter((p) => p.href !== item.href);
    return (
      <div className="mb-4 flex flex-col gap-4 pb-1">
        <Link
          href={item.href}
          onClick={onClose}
          className="text-sm font-bold text-black transition hover:text-brand"
        >
          {item.label}トップ
        </Link>
        {subItems.map((p) =>
          p.externalHref ? (
            <a
              key={p.href}
              href={p.externalHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="text-sm font-bold text-black transition hover:text-brand"
            >
              {p.title}
            </a>
          ) : (
            <Link
              key={p.href}
              href={p.href}
              onClick={onClose}
              className="text-sm font-bold text-black transition hover:text-brand"
            >
              {p.title}
            </Link>
          )
        )}
      </div>
    );
  }

  // Default (GO-TAs+ etc.): show all items
  return (
    <div className="mb-4 flex flex-col gap-4 pb-1">
      {allItems.map((p) => (
        <Link
          key={p.href}
          href={p.href}
          onClick={onClose}
          className="text-sm font-bold text-black transition hover:text-brand"
        >
          {p.title}
        </Link>
      ))}
    </div>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expandedHref, setExpandedHref] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") close(); }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function close() { setOpen(false); setExpandedHref(null); }
  function toggleExpand(href: string) {
    setExpandedHref((prev) => (prev === href ? null : href));
  }

  return (
    <>
      {/* ── Hamburger button (closed state — Figma 43:3963) ── */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="ml-auto flex-none flex flex-col items-center justify-center gap-1.5 rounded-[36px] bg-white min-[1400px]:hidden"
        style={{ width: 48, height: 48, padding: "16.8px 8.4px" }}
        aria-label="メニューを開く"
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
      >
        <span className="block rounded-full bg-accent" style={{ width: "30px", height: "1.8px" }} />
        <span className="block rounded-full bg-accent" style={{ width: "30px", height: "1.8px" }} />
      </button>

      {/* ── Full-screen drawer overlay ── */}
      {open && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="ナビゲーションメニュー"
          className="fixed inset-0 z-50 overflow-y-auto bg-accent min-[1400px]:hidden"
        >
          {/* Top bar — same height & padding as main header to prevent layout shift on open */}
          <div className="flex min-h-[var(--layout-header-height)] items-center justify-between px-[var(--space-page-x)]">
            {/* Logo pill — fixed 128×48px (Figma spec) */}
            <Link
              href="/"
              onClick={close}
              className="flex-none flex items-center justify-center rounded-full bg-white"
              style={{ width: 128, height: 48 }}
              aria-label={`${siteConfig.name} トップへ`}
            >
              <Logo size="xs" />
            </Link>

            {/* Close button — Figma 43:4266: ±15° stacked lines */}
            <button
              type="button"
              onClick={close}
              className="flex-none flex items-center justify-center overflow-clip rounded-[36px] bg-white"
              style={{ width: 48, height: 48, padding: "16.8px 8.4px" }}
              aria-label="メニューを閉じる"
            >
              <CloseX />
            </button>
          </div>

          {/* White card */}
          <div className="mt-5 mx-[var(--space-page-x)] flex flex-col gap-10 rounded-[20px] bg-white px-5 py-6">

            {/* Nav items */}
            <div className="flex flex-col">
              {mobileNavItems.map((item, i) => {
                const hasItems = !!(item.items && item.items.length > 0);
                const isExpanded = expandedHref === item.href;

                return (
                  <div key={`${item.href}-${i}`}>
                    {i > 0 && <div className="border-t border-line-subtle" />}

                    {/* Row: label + expand button */}
                    <div className="flex items-center justify-between py-5">
                      <Link
                        href={item.href}
                        onClick={close}
                        className="flex items-center gap-2 text-black"
                      >
                        <span className="font-display text-[28px] font-black leading-none">
                          {item.eyebrow}
                        </span>
                        <span className="text-sm font-bold">{item.label}</span>
                      </Link>

                      {hasItems && (
                        <ExpandButton
                          expanded={isExpanded}
                          label={item.label}
                          onClick={() => toggleExpand(item.href)}
                        />
                      )}
                    </div>

                    {/* Expanded sub-links */}
                    {hasItems && isExpanded && (
                      <ExpandedLinks item={item} onClose={close} />
                    )}
                  </div>
                );
              })}
           

            {/* External links */}
            <div className="flex flex-col gap-2.5 border-t border-line-subtle pt-5">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[10px] font-medium text-black"
              >
                <ExternalLinkIcon />
                会社説明資料
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[10px] font-medium text-black"
              >
                <ExternalLinkIcon />
                {'異業種M&Aでのビジネス展開・挑戦'}
              </a>
              <Link
                href="/privacy"
                onClick={close}
                className="text-[10px] font-bold text-[#adadad] transition hover:text-(--color-ink-muted)"
              >
                プライバシーポリシー
              </Link>
            </div>
 </div>
            {/* CTA */}
            <Link
              href="/contact"
              onClick={close}
              className="relative flex h-20 w-full items-center justify-center rounded-[140px] border border-black bg-white shadow-[2px_4px_0px_#000000]"
            >
              <span className="text-base font-bold text-black">お問い合わせはこちら</span>
              <span className="absolute right-7 top-1/2 -translate-y-1/2">
                <IconButton size="md" tone="green" />
              </span>
            </Link>

          </div>
        </div>
      )}
    </>
  );
}
