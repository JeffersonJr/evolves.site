import { Link } from "@tanstack/react-router";
import { casesData } from "@/data/cases";
import { ArrowUpRight, ArrowRight, Globe2, Lock, Zap, Gauge } from "lucide-react";
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
      className="relative border-t border-black/[0.08] bg-surface/20 py-24 sm:py-32 dark:border-white/[0.08]"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-[11px] font-mono tracking-wider text-primary uppercase dark:border-white/[0.08] dark:bg-white/[0.03]">
            <Gauge className="h-3 w-3" />
            <span>{t.cases.eyebrow}</span>
          </div>
          <Heading
            id="cases-heading"
            className="mt-4 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-5xl"
          >
            {t.cases.title}
          </Heading>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            {t.cases.description}
          </p>
        </div>

        {/* Featured Editorial Case: Hidrolinfa Portugal */}
        {featuredCase && (
          <div className="mt-14 overflow-hidden rounded-2xl border border-black/[0.08] bg-card p-6 sm:p-10 lg:p-12 shadow-[var(--shadow-card)] dark:border-white/[0.08] dark:bg-white/[0.02]">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Story & Engineering Breakdown */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono font-medium text-primary">
                      <span>🇵🇹</span> Portugal · Estética & Saúde
                    </span>
                    <span className="rounded-full border border-black/[0.08] bg-black/[0.03] px-2.5 py-1 text-[11px] font-mono text-muted-foreground dark:border-white/[0.08] dark:bg-white/[0.03]">
                      {t.cases.featuredBadge || "Estudo de Caso de Engenharia"}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-medium tracking-tight sm:text-3xl text-foreground">
                    {featuredCase.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {featuredCase.text}
                  </p>

                  {/* Challenge, Solution & Result */}
                  <div className="mt-6 space-y-4 border-y border-black/[0.08] py-5 dark:border-white/[0.08]">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                        <h4 className="text-xs font-mono uppercase tracking-wider text-foreground">
                          {t.cases.challengeTitle || "O Desafio"}
                        </h4>
                      </div>
                      <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed pl-3.5 border-l border-black/[0.08] dark:border-white/[0.06]">
                        {featuredCase.challenge || "Redesenho e otimização para o mercado de estética de alto padrão na Europa."}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                        <h4 className="text-xs font-mono uppercase tracking-wider text-foreground">
                          {t.cases.solutionTitle || "A Solução de Engenharia"}
                        </h4>
                      </div>
                      <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed pl-3.5 border-l border-black/[0.08] dark:border-white/[0.06]">
                        {featuredCase.solution || "Stack moderna com tempo de resposta de 80ms no continente europeu e fluxo de agendamento ágil."}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <h4 className="text-xs font-mono uppercase tracking-wider text-foreground">
                          Resultado Obtido
                        </h4>
                      </div>
                      <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed pl-3.5 border-l border-black/[0.08] dark:border-white/[0.06]">
                        Elevação instantânea de autoridade da marca e aumento de 40% em captação orgânica de clientes qualificados.
                      </p>
                    </div>
                  </div>

                  {/* Telemetry Stats Row */}
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {featuredCase.stats.map((st) => (
                      <div key={st.label} className="rounded-xl border border-black/[0.06] bg-black/[0.02] p-3 text-center sm:text-left dark:border-white/[0.06] dark:bg-white/[0.02]">
                        <p className="text-xl sm:text-2xl font-medium tracking-tight text-foreground">
                          {st.value}{st.suffix}
                        </p>
                        <p className="mt-0.5 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
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
                    className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline"
                  >
                    <span>{t.cases.readFullCase}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Apple Safari / MacBook Clean Frame Mockup */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div className="w-full overflow-hidden rounded-2xl border border-black/[0.1] bg-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:border-white/[0.12] dark:bg-[#0A0C10] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  {/* Safari Chrome Titlebar */}
                  <div className="flex items-center justify-between border-b border-black/[0.08] bg-zinc-200/60 px-4 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.03]">
                    {/* Window Controls */}
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    </div>

                    {/* Address Pill */}
                    <div className="flex items-center gap-1.5 rounded-md border border-black/[0.08] bg-white px-3 py-1 text-[11px] font-mono text-muted-foreground dark:border-white/[0.08] dark:bg-black/40 shadow-xs">
                      <Lock className="h-3 w-3 text-emerald-500" />
                      <span>hidrolinfadetox.com</span>
                    </div>

                    {/* Telemetry pill */}
                    <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400">
                      <Zap className="h-3 w-3" />
                      <span>80ms TTFB</span>
                    </div>
                  </div>

                  {/* Browser content */}
                  <div className="relative overflow-hidden bg-black/5 p-2 sm:p-3 dark:bg-black/60">
                    <img
                      src={featuredCase.img}
                      alt={featuredCase.title}
                      width={1200}
                      height={900}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-contain rounded-lg transition-transform duration-500 hover:scale-[1.01]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherCases.map((c) => {
            const highlightStat = c.stats?.[0];
            return (
              <Link
                key={c.slug}
                to="/cases/$slug"
                params={{ slug: c.slug }}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-black/[0.08] bg-card transition-all duration-300 hover:border-black/[0.16] hover:shadow-[var(--shadow-card)] dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/[0.16] dark:hover:bg-white/[0.04]"
              >
                <div>
                  <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-secondary/40 p-5 border-b border-black/[0.06] dark:bg-black/40 dark:border-white/[0.06]">
                    <img
                      src={c.img}
                      alt={c.title}
                      width={768}
                      height={576}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain filter drop-shadow-md transition-all duration-500 group-hover:scale-105"
                    />
                    {c.country && (
                      <span className="absolute top-3 right-3 rounded-full border border-black/[0.08] bg-white/80 px-2.5 py-0.5 text-[10px] font-mono backdrop-blur-xs dark:border-white/[0.08] dark:bg-black/60 shadow-2xs">
                        {c.country}
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-primary">
                      {c.category}
                    </p>
                    <h3 className="mt-2 text-base font-medium tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {c.text}
                    </p>

                    {highlightStat && (
                      <div className="mt-4 flex items-center gap-2 rounded-lg border border-black/[0.05] bg-black/[0.02] px-3 py-1.5 text-xs font-mono dark:border-white/[0.05] dark:bg-white/[0.02]">
                        <Zap className="h-3 w-3 text-emerald-500 shrink-0" />
                        <span className="font-medium text-foreground">
                          {highlightStat.value}{highlightStat.suffix}
                        </span>
                        <span className="text-[10px] text-muted-foreground truncate">
                          · {highlightStat.label}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t border-black/[0.06] p-6 pt-4 flex items-center justify-between dark:border-white/[0.06]">
                  <div className="flex flex-wrap gap-1.5">
                    {c.tags.slice(0, 2).map((t) => (
                      <span key={t} className="rounded-md border border-black/[0.06] bg-black/[0.02] px-2 py-0.5 text-[10px] font-mono text-muted-foreground dark:border-white/[0.06] dark:bg-white/[0.02]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-primary flex items-center gap-0.5 group-hover:underline">
                    Ver Estudo <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA to /cases page */}
        {!standalone && (
          <div className="mt-12 text-center">
            <Link
              to="/cases"
              className="inline-flex items-center gap-2 rounded-full border border-black/[0.12] bg-card px-7 py-3 text-xs font-medium text-foreground transition-all hover:bg-secondary hover:border-black/[0.2] dark:border-white/[0.12] dark:bg-white/[0.03] dark:hover:bg-white/[0.08] dark:hover:border-white/[0.2] shadow-xs"
            >
              <span>{t.cases.viewAllCasesCta}</span>
              <ArrowRight className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            </Link>
          </div>
        )}

        {/* Transcontinental Presence Banner */}
        <div className="mt-14 rounded-2xl border border-black/[0.08] bg-card p-6 backdrop-blur-xs shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/[0.08] bg-black/[0.03] text-primary shrink-0 dark:border-white/[0.08] dark:bg-white/[0.04]">
                <Globe2 className="h-4.5 w-4.5" />
              </div>
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                  {t.cases.transcontinentalTitle}
                </p>
                <p className="text-xs sm:text-sm font-medium text-foreground">
                  {t.cases.transcontinentalDesc}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 dark:border-white/[0.08] dark:bg-white/[0.03]">
                <span>🇵🇹</span> {t.footer.countryPT}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 dark:border-white/[0.08] dark:bg-white/[0.03]">
                <span>🇬🇧</span> {t.footer.countryUK}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 dark:border-white/[0.08] dark:bg-white/[0.03]">
                <span>🇧🇷</span> {t.footer.countryBR}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 dark:border-white/[0.08] dark:bg-white/[0.03]">
                <span>🇳🇿</span> {t.footer.countryNZ}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
