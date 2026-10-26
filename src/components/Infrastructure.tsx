import { Zap, Palette, Cpu, Server, Shield, Check } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

export function Infrastructure() {
  const { t } = useI18n();

  return (
    <section
      id="infrastructure"
      aria-labelledby="infrastructure-heading"
      className="border-t border-border/60 bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-primary">
            {t.infrastructure.eyebrow}
          </p>
          <h2
            id="infrastructure-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            {t.infrastructure.titlePart1}
            <span className="block text-muted-foreground font-normal">
              {t.infrastructure.titlePart2}
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {t.infrastructure.description}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* Pillar 1 */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-border hover:shadow-[var(--shadow-soft)]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <Zap className="h-6 w-6" aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
                {t.infrastructure.p1Title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.infrastructure.p1Desc}
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground font-mono">
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>{t.infrastructure.p1Item1}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>{t.infrastructure.p1Item2}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>{t.infrastructure.p1Item3}</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 border-t border-border/60 pt-4">
              <span className="text-[11px] font-mono text-muted-foreground">
                {t.infrastructure.p1Metric}
              </span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-border hover:shadow-[var(--shadow-soft)]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <Palette className="h-6 w-6" aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
                {t.infrastructure.p2Title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.infrastructure.p2Desc}
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground font-mono">
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>{t.infrastructure.p2Item1}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>{t.infrastructure.p2Item2}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>{t.infrastructure.p2Item3}</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 border-t border-border/60 pt-4">
              <span className="text-[11px] font-mono text-muted-foreground">
                {t.infrastructure.p2Metric}
              </span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="relative flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-border hover:shadow-[var(--shadow-soft)]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <Cpu className="h-6 w-6" aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
                {t.infrastructure.p3Title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.infrastructure.p3Desc}
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground font-mono">
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>{t.infrastructure.p3Item1}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>{t.infrastructure.p3Item2}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                  <span>{t.infrastructure.p3Item3}</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 border-t border-border/60 pt-4">
              <span className="text-[11px] font-mono text-muted-foreground">
                {t.infrastructure.p3Metric}
              </span>
            </div>
          </div>
        </div>

        {/* Stack Specs Banner */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 border-t border-border/60 pt-10 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <Server className="h-4 w-4 text-primary" />
            <span>{t.infrastructure.specsCloud}</span>
          </div>
          <span className="hidden sm:inline text-border">•</span>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            <span>{t.infrastructure.specsCache}</span>
          </div>
          <span className="hidden sm:inline text-border">•</span>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-emerald-500" />
            <span>{t.infrastructure.specsSecurity}</span>
          </div>
          <span className="hidden sm:inline text-border">•</span>
          <div>
            <span>{t.infrastructure.specsBackups}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
