import { ArrowRight, ArrowUpRight, Zap, Shield, Globe, Cpu } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="top"
      aria-labelledby="home-heading"
      className="relative overflow-hidden bg-background px-6 pb-20 pt-28 sm:pb-28 sm:pt-36 lg:pt-40"
    >
      {/* ── Background: subtle grid + radial glow from bottom ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 90% 60% at 50% 110%, oklch(0.52 0.24 271 / 0.14) 0%, transparent 65%),
            linear-gradient(to bottom, transparent 70%, oklch(0.52 0.24 271 / 0.04) 100%)
          `,
        }}
      />
      {/* Fine grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.7 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0 0) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-5xl text-center">

        {/* ── Eyebrow badge ── */}
        <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.08em] text-muted-foreground backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.04]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          <span>{t.hero.badge}</span>
        </div>

        {/* ── Headline ── */}
        <h1
          id="home-heading"
          className="mx-auto mt-8 max-w-4xl text-balance text-[clamp(2.25rem,6vw,4rem)] font-medium leading-[1.08] tracking-[-0.03em] text-foreground"
        >
          {t.hero.headlinePart1}
          <span className="block font-light text-muted-foreground">
            {t.hero.headlinePart2}
          </span>
        </h1>

        {/* ── Sub-headline ── */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
          {t.hero.subheadline}
        </p>

        {/* ── CTA Group ── */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {/* Primary CTA — shimmer border effect */}
          <a
            href="https://wa.me/5513981326869?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20um%20engenheiro%20sobre%20um%20novo%20projeto%20com%20a%20Evolves."
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium text-white transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, oklch(0.52 0.24 271) 0%, oklch(0.55 0.22 250) 100%)",
              boxShadow: "0 0 0 1px oklch(0.68 0.2 271 / 0.5), 0 4px 24px -4px oklch(0.52 0.24 271 / 0.5)",
            }}
          >
            {/* Shimmer overlay */}
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.12) 50%, transparent 80%)",
              }}
            />
            <span className="relative">{t.hero.ctaPrimary}</span>
            <ArrowRight className="relative h-4 w-4" aria-hidden="true" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#cases"
            className="inline-flex items-center gap-2 rounded-full border border-black/[0.1] bg-black/[0.03] px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:bg-black/[0.06] dark:border-white/[0.1] dark:bg-white/[0.04] dark:hover:bg-white/[0.08]"
          >
            <span>{t.hero.ctaSecondary}</span>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          </a>
        </div>

        {/* ── Micro-copy ── */}
        <p className="mt-4 text-[11px] font-mono tracking-wide text-muted-foreground/60">
          {t.hero.microCopy}
        </p>

        {/* ── Metrics Bento ── */}
        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 text-left">
          {[
            {
              icon: <Zap className="h-4 w-4" aria-hidden="true" />,
              color: "text-indigo-500 dark:text-indigo-400",
              label: t.hero.metric1Label,
              value: t.hero.metric1Value,
              desc:  t.hero.metric1Desc,
            },
            {
              icon: <Shield className="h-4 w-4" aria-hidden="true" />,
              color: "text-emerald-500 dark:text-emerald-400",
              label: t.hero.metric2Label,
              value: t.hero.metric2Value,
              desc:  t.hero.metric2Desc,
            },
            {
              icon: <Globe className="h-4 w-4" aria-hidden="true" />,
              color: "text-sky-500 dark:text-sky-400",
              label: t.hero.metric3Label,
              value: t.hero.metric3Value,
              desc:  t.hero.metric3Desc,
            },
            {
              icon: <Cpu className="h-4 w-4" aria-hidden="true" />,
              color: "text-violet-500 dark:text-violet-400",
              label: t.hero.metric4Label,
              value: t.hero.metric4Value,
              desc:  t.hero.metric4Desc,
            },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-black/[0.08] bg-black/[0.02] p-4 sm:p-5 backdrop-blur-xs transition-colors duration-300 hover:border-black/[0.14] dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/[0.14] dark:hover:bg-white/[0.05]"
            >
              <div className={`flex items-center gap-2 ${m.color}`}>
                {m.icon}
                <span className="text-[10px] font-mono uppercase tracking-[0.08em] text-muted-foreground">
                  {m.label}
                </span>
              </div>
              <p className="mt-2.5 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                {m.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
