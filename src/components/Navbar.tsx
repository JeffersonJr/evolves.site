import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/evolves-logo.webp";
import logoGray from "@/assets/evolves-logo-gray.png";
import logoWhite from "@/assets/evolves-logo-white.webp";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/about" },
  { label: "Serviços", href: "/services" },
  { label: "Cases", href: "/cases" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`mx-auto flex h-12 items-center justify-between px-5 transition-all duration-300 lg:px-10 ${
          scrolled || open
            ? "border-b border-black/[.06] bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-background/85"
            : "bg-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-1">
          {/* Light mode logo */}
          <img
            src={logo}
            alt="Evolves"
            className="h-7 w-auto block dark:hidden"
          />
          {/* Dark mode logo (gray when liquid-glass, white when transparent) */}
          <img
            src={scrolled || open ? logoGray : logoWhite}
            alt="Evolves"
            className="h-7 w-auto hidden dark:block"
          />
          <span className="text-[10px] text-muted-foreground font-medium">
            ®
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href="https://wa.me/5513981326869?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Evolves%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20voc%C3%AAs!"
            target="_blank"
            rel="noreferrer"
            aria-label="Conversar sobre soluções da Evolves pelo WhatsApp"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition hover:brightness-105 md:inline-flex"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
            aria-label="Abrir menu"
          >
            <span className="text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="absolute left-4 right-4 top-14 z-[100] rounded-2xl border border-border bg-background/95 shadow-[var(--shadow-card)] backdrop-blur-xl md:hidden animate-fade-up">
          <div className="flex flex-col gap-1 p-4">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/5513981326869?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Evolves%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20voc%C3%AAs!"
              target="_blank"
              rel="noreferrer"
              aria-label="Conversar sobre soluções da Evolves pelo WhatsApp"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2 text-center text-sm font-medium text-primary-foreground"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
