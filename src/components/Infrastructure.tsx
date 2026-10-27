import { Globe, Pen, Cpu, LifeBuoy, Server, Zap, Shield } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

export function Infrastructure() {
  const { t } = useI18n();

  return (
    <section
      id="infrastructure"
      aria-labelledby="infrastructure-heading"
      className="border-t border-black/[0.06] bg-background py-24 sm:py-32 dark:border-white/[0.06]"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Section header */}
        <div className="mx-auto max-w-2xl">
          <p className="text-[11px] font-mono uppercase tracking-[0.08em] text-primary">
            {t.infrastructure.eyebrow}
          </p>
          <h2
            id="infrastructure-heading"
            className="mt-4 text-balance text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl"
          >
            {t.infrastructure.titlePart1}
            <span className="block font-light text-muted-foreground">
              {t.infrastructure.titlePart2}
            </span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t.infrastructure.description}
          </p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="mt-14 grid auto-rows-[1fr] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-auto">

          {/* Box 1 — Large (span 7): Global Infrastructure */}
          <div className="group relative overflow-hidden rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 sm:p-8 lg:col-span-7 transition-all duration-300 hover:border-black/[0.14] dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/[0.12] dark:hover:bg-white/[0.05]">
            {/* Glow on hover */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 -left-12 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] bg-black/[0.04] dark:border-white/[0.08] dark:bg-white/[0.05]">
              <Globe className="h-5 w-5 text-indigo-500 dark:text-indigo-400" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-base font-medium tracking-tight text-foreground sm:text-lg">
              {t.infrastructure.p1Title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t.infrastructure.p1Desc}
            </p>

            {/* Mini server map visual */}
            <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-mono">
              {[
                { dot: "bg-emerald-500", loc: "Frankfurt · EU" },
                { dot: "bg-sky-500",     loc: "São Paulo · BR" },
                { dot: "bg-violet-500",  loc: "Auckland · NZ" },
                { dot: "bg-amber-500",   loc: "London · GB" },
              ].map((n) => (
                <span
                  key={n.loc}
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] px-2.5 py-1 text-muted-foreground dark:border-white/[0.08] dark:bg-white/[0.04]"
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${n.dot}`} />
                  {n.loc}
                </span>
              ))}
            </div>

            <div className="mt-6 border-t border-black/[0.06] pt-4 dark:border-white/[0.06]">
              <span className="text-[11px] font-mono text-muted-foreground">
                {t.infrastructure.p1Metric}
              </span>
            </div>
          </div>

          {/* Box 2 — Medium (span 5): Design Editorial */}
          <div className="group relative overflow-hidden rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 sm:p-7 lg:col-span-5 transition-all duration-300 hover:border-black/[0.14] dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/[0.12] dark:hover:bg-white/[0.05]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-8 right-0 h-32 w-32 rounded-full bg-violet-500/10 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] bg-black/[0.04] dark:border-white/[0.08] dark:bg-white/[0.05]">
              <Pen className="h-5 w-5 text-violet-500 dark:text-violet-400" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-base font-medium tracking-tight text-foreground">
              {t.infrastructure.p2Title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t.infrastructure.p2Desc}
            </p>
            <div className="mt-6 border-t border-black/[0.06] pt-4 dark:border-white/[0.06]">
              <span className="text-[11px] font-mono text-muted-foreground">
                {t.infrastructure.p2Metric}
              </span>
            </div>
          </div>

          {/* Box 3 — Medium (span 5): AI & Engineering */}
          <div className="group relative overflow-hidden rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 sm:p-7 lg:col-span-5 transition-all duration-300 hover:border-black/[0.14] dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/[0.12] dark:hover:bg-white/[0.05]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-0 h-28 w-28 rounded-full bg-cyan-500/10 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] bg-black/[0.04] dark:border-white/[0.08] dark:bg-white/[0.05]">
              <Cpu className="h-5 w-5 text-cyan-600 dark:text-cyan-400" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-base font-medium tracking-tight text-foreground">
              {t.infrastructure.p3Title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t.infrastructure.p3Desc}
            </p>
            <div className="mt-6 border-t border-black/[0.06] pt-4 dark:border-white/[0.06]">
              <span className="text-[11px] font-mono text-muted-foreground">
                {t.infrastructure.p3Metric}
              </span>
            </div>
          </div>

          {/* Box 4 — Small (span 7): Support SLA */}
          <div className="group relative overflow-hidden rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 sm:p-7 lg:col-span-7 transition-all duration-300 hover:border-black/[0.14] dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/[0.12] dark:hover:bg-white/[0.05]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 right-0 h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] bg-black/[0.04] dark:border-white/[0.08] dark:bg-white/[0.05]">
              <LifeBuoy className="h-5 w-5 text-emerald-500 dark:text-emerald-400" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-base font-medium tracking-tight text-foreground">
              {t.infrastructure.p4Title ?? "Suporte & SLA Ativo"}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t.infrastructure.p4Desc ?? "Monitoramento 24/7, backups automáticos e SLA de resposta garantido. Atendimento via canal dedicado com tempo de resposta inferior a 4 horas."}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-mono text-muted-foreground">
              {["99.99% Uptime SLA", "24/7 Monitoring", "< 4h Response", "Auto Backups"].map((tag) => (
                <span key={tag} className="rounded-full border border-black/[0.08] bg-black/[0.03] px-2.5 py-1 dark:border-white/[0.08] dark:bg-white/[0.03]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Stack banner ── */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-black/[0.06] pt-10 text-[11px] font-mono text-muted-foreground dark:border-white/[0.06]">
          <div className="flex items-center gap-2">
            <Server className="h-3.5 w-3.5 text-primary" />
            <span>{t.infrastructure.specsCloud}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-3.5 w-3.5 text-primary" />
            <span>{t.infrastructure.specsCache}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-3.5 w-3.5 text-emerald-500" />
            <span>{t.infrastructure.specsSecurity}</span>
          </div>
          <span>{t.infrastructure.specsBackups}</span>
        </div>
      </div>
    </section>
  );
}
