import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/evolves-logo.webp";
import logoGray from "@/assets/evolves-logo-gray.png";
import logoWhite from "@/assets/evolves-logo-white.webp";
import { ThemeToggle } from "./ThemeToggle";
import { CurrencyToggle } from "./CurrencyToggle";
import { LanguageSelector } from "./LanguageSelector";
import { useI18n } from "@/contexts/I18nContext";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const links = [
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.cases, href: "/cases" },
    { label: t.nav.infrastructure, href: "/#infrastructure" },
    { label: t.nav.pricing, href: "/#pricing" },
    { label: t.nav.about, href: "/about" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`mx-auto flex h-14 items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 max-w-7xl ${
          scrolled || open
            ? "border-b border-black/[.06] bg-white/85 shadow-xs backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/85"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-5">
          <Link to="/" className="flex items-center gap-1.5 focus:outline-none">
            {/* Light mode logo */}
            <img
              src={logo}
              alt="Evolves"
              className="h-6 w-auto block dark:hidden"
            />
            {/* Dark mode logo */}
            <img
              src={scrolled || open ? logoGray : logoWhite}
              alt="Evolves"
              className="h-6 w-auto hidden dark:block"
            />
            <span className="text-[10px] text-muted-foreground font-medium">
              ®
            </span>
          </Link>

          <span className="hidden xl:inline-block text-[11px] font-mono uppercase tracking-wider text-muted-foreground/70 border-l border-border pl-3">
            {t.nav.tagline}
          </span>
        </div>

        {/* Desktop Navigation Links */}
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

        {/* Right Actions: Language Selector + Currency Toggle + Theme + Discrete CTA */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <LanguageSelector />
          <CurrencyToggle className="hidden sm:inline-flex" />

          <ThemeToggle />

          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full border border-black/15 bg-zinc-900 px-3.5 py-1.5 text-xs font-medium text-white transition-all hover:bg-zinc-800 dark:border-white/20 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white md:inline-flex"
          >
            <span>{t.nav.startProject}</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden focus:outline-none"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="mx-4 mt-2 rounded-2xl border border-border bg-background/95 p-5 shadow-[var(--shadow-card)] backdrop-blur-2xl md:hidden animate-fade-up">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <span className="text-xs font-mono uppercase text-muted-foreground">{t.nav.regionCurrency}</span>
              <CurrencyToggle />
            </div>

            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground transition-all hover:brightness-105"
            >
              <span>{t.nav.startProject}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
