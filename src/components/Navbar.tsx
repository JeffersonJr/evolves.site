import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/evolves-logo.webp";
import logoGray from "@/assets/evolves-logo-gray.png";
import logoWhite from "@/assets/evolves-logo-white.webp";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import { useI18n } from "@/contexts/I18nContext";
import { ArrowUpRight, X, Menu } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useI18n();
  const drawerRef = useRef<HTMLDivElement>(null);

  const links = [
    { label: t.nav.services,       href: "/#services" },
    { label: t.nav.cases,          href: "/cases" },
    { label: t.nav.infrastructure, href: "/#infrastructure" },
    { label: t.nav.pricing,        href: "/#pricing" },
    { label: "Blog",               href: "/blog" },
    { label: t.nav.about,          href: "/about" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav
          className={`mx-auto flex h-14 items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 max-w-7xl ${
            scrolled || open
              ? "border-b border-black/[.06] bg-white/85 shadow-xs backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/85"
              : "bg-transparent"
          }`}
        >
          {/* Brand */}
          <div className="flex items-center gap-5">
            <Link to="/" className="flex items-center gap-1.5 focus:outline-none" onClick={() => setOpen(false)}>
              <img
                src={logo}
                alt="Evolves"
                width={96}
                height={24}
                fetchPriority="high"
                decoding="async"
                className="h-6 w-auto block dark:hidden"
              />
              <img
                src={scrolled || open ? logoGray : logoWhite}
                alt="Evolves"
                width={96}
                height={24}
                fetchPriority="high"
                decoding="async"
                className="h-6 w-auto hidden dark:block"
              />
              <span className="text-[10px] text-muted-foreground font-medium">®</span>
            </Link>

            <span className="hidden xl:inline-block text-[11px] font-mono uppercase tracking-wider text-muted-foreground border-l border-border pl-3">
              {t.nav.tagline}
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-6 lg:gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Desktop only controls */}
            <div className="hidden md:block">
              <LanguageSelector />
            </div>
            <ThemeToggle />

            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full border border-black/15 bg-zinc-900 px-3.5 py-1.5 text-xs font-medium text-white transition-all hover:bg-zinc-800 dark:border-white/20 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white md:inline-flex"
            >
              <span>{t.nav.startProject}</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-secondary text-foreground md:hidden focus:outline-none"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="mobile-drawer"
            >
              {open
                ? <X className="h-5 w-5" aria-hidden="true" />
                : <Menu className="h-5 w-5" aria-hidden="true" />
              }
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile fullscreen drawer ── */}
      {/* Scrim */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-foreground/10 backdrop-blur-sm md:hidden"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-in panel */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navegação"
        className={`fixed inset-x-0 top-14 z-40 md:hidden transition-all duration-300 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-3 mt-1.5 overflow-hidden rounded-2xl border border-border bg-background/98 shadow-[var(--shadow-card)] backdrop-blur-2xl">

          {/* Controls row: Language */}
          <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
            <div className="flex items-center gap-2">
              <LanguageSelector />
            </div>
            <ThemeToggle />
          </div>

          {/* Nav links */}
          <nav className="px-3 py-3">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <span>{l.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="border-t border-border/60 px-4 pb-4 pt-3">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:opacity-90"
            >
              <span>{t.nav.startProject}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
