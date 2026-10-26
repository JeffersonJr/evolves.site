import { ArrowRight, ArrowUpRight, ShieldCheck, Zap, Globe, Cpu } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      aria-labelledby="home-heading"
      className="relative overflow-hidden bg-background px-6 pb-20 pt-28 sm:pb-28 sm:pt-36 lg:pt-40"
    >
      {/* Background subtle linear grid pattern */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,oklch(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />

      <div className="mx-auto max-w-5xl text-center">
        {/* Status Badge with Live Pulse */}
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.02] px-3.5 py-1 text-xs font-mono text-muted-foreground backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span>{t.hero.badge}</span>
        </div>

        {/* Headline */}
        <h1
          id="home-heading"
          className="mx-auto mt-7 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl leading-[1.05]"
        >
          {t.hero.headlinePart1}
          <span className="block text-muted-foreground font-normal">
            {t.hero.headlinePart2}
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t.hero.subheadline}
        </p>

        {/* Main Action Group */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="https://wa.me/5513981326869?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20um%20engenheiro%20sobre%20um%20novo%20projeto%20com%20a%20Evolves."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:opacity-90 shadow-sm"
          >
            <span>{t.hero.ctaPrimary}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <a
            href="#cases"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary/80 backdrop-blur-sm"
          >
            <span>{t.hero.ctaSecondary}</span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          </a>
        </div>

        {/* Micro-Copy */}
        <p className="mt-4 text-xs font-mono text-muted-foreground/80">
          {t.hero.microCopy}
        </p>

        {/* Micro-Metrics Bento Grid */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 text-left">
          <div className="rounded-2xl border border-border/80 bg-surface/50 p-4 sm:p-5 backdrop-blur-xs transition-colors hover:border-border">
            <div className="flex items-center gap-2 text-primary">
              <Zap className="h-4 w-4" aria-hidden="true" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                {t.hero.metric1Label}
              </span>
            </div>
            <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              {t.hero.metric1Value}
            </p>
            <p className="mt-1 text-xs text-muted-foreground leading-snug">
              {t.hero.metric1Desc}
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-surface/50 p-4 sm:p-5 backdrop-blur-xs transition-colors hover:border-border">
            <div className="flex items-center gap-2 text-emerald-500">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                {t.hero.metric2Label}
              </span>
            </div>
            <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              {t.hero.metric2Value}
            </p>
            <p className="mt-1 text-xs text-muted-foreground leading-snug">
              {t.hero.metric2Desc}
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-surface/50 p-4 sm:p-5 backdrop-blur-xs transition-colors hover:border-border">
            <div className="flex items-center gap-2 text-primary">
              <Globe className="h-4 w-4" aria-hidden="true" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                {t.hero.metric3Label}
              </span>
            </div>
            <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              {t.hero.metric3Value}
            </p>
            <p className="mt-1 text-xs text-muted-foreground leading-snug">
              {t.hero.metric3Desc}
            </p>
          </div>

          <div className="rounded-2xl border border-border/80 bg-surface/50 p-4 sm:p-5 backdrop-blur-xs transition-colors hover:border-border">
            <div className="flex items-center gap-2 text-primary">
              <Cpu className="h-4 w-4" aria-hidden="true" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                {t.hero.metric4Label}
              </span>
            </div>
            <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              {t.hero.metric4Value}
            </p>
            <p className="mt-1 text-xs text-muted-foreground leading-snug">
              {t.hero.metric4Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
