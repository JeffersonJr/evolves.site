import { Link } from "@tanstack/react-router";
import logo from "@/assets/evolves-logo.webp";
import logoWhite from "@/assets/evolves-logo-white.webp";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative border-t border-black/[0.08] bg-surface/30 text-foreground dark:border-white/[0.08]">
      {/* Pre-Footer Action Block */}
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <div className="relative overflow-hidden rounded-2xl border border-black/[0.08] bg-card p-8 sm:p-12 lg:p-16 shadow-[var(--shadow-card)] text-center dark:border-white/[0.08] dark:bg-white/[0.02]">
          <div className="mx-auto max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-[11px] font-mono tracking-wider text-primary uppercase dark:border-white/[0.08] dark:bg-white/[0.03]">
              <span>{t.footer.preTitle}</span>
            </div>
            <h2 className="mt-4 text-balance text-2xl font-medium tracking-tight sm:text-4xl text-foreground">
              {t.footer.preHeadline}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {t.footer.preSub}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/5513981326869?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20t%C3%A9cnica%20para%20o%20site%20da%20minha%20empresa."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-medium text-background transition-all hover:opacity-90 shadow-sm"
              >
                <span>{t.footer.btnWhatsapp}</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>

              <a
                href="mailto:contato@evolvestecnologia.com.br"
                className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] bg-card px-6 py-3 text-xs font-medium text-foreground transition-all hover:bg-secondary dark:border-white/[0.12] dark:bg-white/[0.04] dark:hover:bg-white/[0.08]"
              >
                <Mail
                  className="h-3.5 w-3.5 text-muted-foreground"
                  aria-hidden="true"
                />
                <span>{t.footer.btnEmail}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-1 mb-4">
              <img
                src={logo}
                alt="Evolves"
                width={96}
                height={24}
                loading="lazy"
                decoding="async"
                className="h-6 w-auto block dark:hidden"
              />
              <img
                src={logoWhite}
                alt="Evolves"
                width={96}
                height={24}
                loading="lazy"
                decoding="async"
                className="h-6 w-auto hidden dark:block"
              />
              <span className="text-[10px] text-muted-foreground font-medium">
                ®
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pr-4 max-w-sm">
              {t.footer.brandDesc}
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 [will-change:transform,opacity]"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>{t.footer.systemStatus}</span>
            </div>

            <div className="mt-6 flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/71072104/"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] bg-card text-muted-foreground hover:text-foreground hover:border-black/[0.16] dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/[0.16] transition-colors"
                aria-label="LinkedIn da Evolves"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://wa.me/5513981326869"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] bg-card text-muted-foreground hover:text-emerald-500 hover:border-black/[0.16] dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/[0.16] transition-colors"
                aria-label="WhatsApp da Evolves"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3.5 w-3.5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-[11px] font-mono uppercase tracking-wider text-foreground mb-4">
              {t.footer.navTitle}
            </h3>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li>
                <a
                  href="/#services"
                  className="hover:text-foreground transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <Link
                  to="/cases"
                  className="hover:text-foreground transition-colors"
                >
                  {t.nav.cases}
                </Link>
              </li>
              <li>
                <a
                  href="/#infrastructure"
                  className="hover:text-foreground transition-colors"
                >
                  {t.nav.infrastructure}
                </a>
              </li>
              <li>
                <a
                  href="/#pricing"
                  className="hover:text-foreground transition-colors"
                >
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-foreground transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-foreground transition-colors"
                >
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Compliance */}
          <div>
            <h3 className="text-[11px] font-mono uppercase tracking-wider text-foreground mb-4">
              {t.footer.complianceTitle}
            </h3>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacidade (RGPD/LGPD)
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="hover:text-foreground transition-colors"
                >
                  Gestão de Cookies
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-foreground transition-colors"
                >
                  Sobre a Evolves
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-foreground transition-colors"
                >
                  Canal de Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional coverage */}
          <div>
            <h3 className="text-[11px] font-mono uppercase tracking-wider text-foreground mb-4">
              {t.footer.opsTitle}
            </h3>
            <ul className="space-y-2.5 text-xs text-muted-foreground font-mono">
              <li>🇵🇹 {t.footer.countryPT}</li>
              <li>🇬🇧 {t.footer.countryUK}</li>
              <li>🇧🇷 {t.footer.countryBR}</li>
              <li>🇳🇿 {t.footer.countryNZ}</li>
              <li className="pt-2 text-foreground font-sans text-xs">
                {t.footer.opsDesc}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 border-t border-black/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono dark:border-white/[0.08]">
          <p>{t.footer.copyright}</p>
          <p className="text-[11px]">{t.footer.subCopyright}</p>
        </div>
      </div>
    </footer>
  );
}
