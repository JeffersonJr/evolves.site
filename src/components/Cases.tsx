import { Link } from "@tanstack/react-router";
import { casesData } from "@/data/cases";
import { ArrowUpRight, ArrowRight, Globe2 } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

export function Cases({ standalone = false }: { standalone?: boolean } = {}) {
  const Heading = standalone ? "h1" : "h2";
  const featuredCase = casesData[0]; // Hidrolinfa Portugal
  const otherCases = casesData.slice(1);
  const { t } = useI18n();

  return (
    <section
      id="cases"
      aria-labelledby="cases-heading"
      className="border-t border-border/60 bg-surface/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-primary">
            {t.cases.eyebrow}
          </p>
          <Heading
            id="cases-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            {t.cases.title}
          </Heading>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {t.cases.description}
          </p>
        </div>

        {/* Featured Editorial Case: Hidrolinfa Portugal */}
        {featuredCase && (
          <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 lg:p-12 shadow-[var(--shadow-card)]">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Story & Metrics */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-mono font-medium text-primary">
                      <span>🇵🇹</span> Portugal · Estética & Saúde
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">{t.cases.featuredBadge}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl text-foreground">
                    {featuredCase.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {featuredCase.text}
                  </p>

                  {/* Challenge & Solution */}
                  <div className="mt-6 space-y-4 border-y border-border/70 py-5">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-foreground">{t.cases.challengeTitle}</h4>
                      <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {featuredCase.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-foreground">{t.cases.solutionTitle}</h4>
                      <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {featuredCase.solution}
                      </p>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {featuredCase.stats.map((st) => (
                      <div key={st.label} className="rounded-xl border border-border/60 bg-surface/50 p-3">
                        <p className="text-xl sm:text-2xl font-semibold text-foreground">
                          {st.value}{st.suffix}
                        </p>
                        <p className="mt-0.5 text-[11px] text-muted-foreground leading-tight">
                          {st.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {featuredCase.liveUrl && (
                    <a
                      href={featuredCase.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition hover:opacity-90"
                    >
                      <span>{t.cases.viewLive} (hidrolinfadetox.com)</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}

                  <Link
                    to="/cases/$slug"
                    params={{ slug: featuredCase.slug }}
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  >
                    <span>{t.cases.readFullCase}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Mockup with Real Hero */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200/50 p-3 sm:p-4 dark:from-zinc-900 dark:to-zinc-950">
                  <img
                    src={featuredCase.img}
                    alt={featuredCase.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.02] drop-shadow-2xl rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {otherCases.map((c) => (
            <Link
              key={c.slug}
              to="/cases/$slug"
              params={{ slug: c.slug }}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
            >
              <div>
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-surface p-6">
                  <img
                    src={c.img}
                    alt={c.title}
                    width={800}
                    height={500}
                    loading="lazy"
                    className="h-full w-full object-contain filter drop-shadow-md transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-primary">
                    {c.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {c.text}
                  </p>
                </div>
              </div>

              <div className="border-t border-border/60 p-6 pt-4 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.slice(0, 3).map((t) => (
                    <span key={t} className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-medium text-primary flex items-center gap-0.5">
                  Case <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA to /cases page */}
        {!standalone && (
          <div className="mt-12 text-center">
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary/80 hover:border-primary/40 shadow-xs"
            >
              <span>{t.cases.viewAllCasesCta}</span>
              <ArrowRight className="h-4 w-4 text-primary" aria-hidden="true" />
            </Link>
          </div>
        )}

        {/* Transcontinental Presence Banner */}
        <div className="mt-14 rounded-2xl border border-border/70 bg-card/60 p-6 backdrop-blur-xs">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <Globe2 className="h-5 w-5 text-primary shrink-0" aria-hidden="true" />
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {t.cases.transcontinentalTitle}
                </p>
                <p className="text-sm font-medium text-foreground">
                  {t.cases.transcontinentalDesc}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1">
                <span>🇵🇹</span> {t.footer.countryPT}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1">
                <span>🇬🇧</span> {t.footer.countryUK}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1">
                <span>🇧🇷</span> {t.footer.countryBR}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1">
                <span>🇳🇿</span> {t.footer.countryNZ}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
