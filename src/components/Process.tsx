import { useI18n } from "@/contexts/I18nContext";
import { GitCommit, ArrowRight, Layers } from "lucide-react";

export function Process() {
  const { t } = useI18n();

  const steps = [
    {
      num: "01",
      title: t.process.s1Title.replace(/^01\.\s*/, ""),
      description: t.process.s1Desc,
      tag: t.process.s1Tag,
    },
    {
      num: "02",
      title: t.process.s2Title.replace(/^02\.\s*/, ""),
      description: t.process.s2Desc,
      tag: t.process.s2Tag,
    },
    {
      num: "03",
      title: t.process.s3Title.replace(/^03\.\s*/, ""),
      description: t.process.s3Desc,
      tag: t.process.s3Tag,
    },
    {
      num: "04",
      title: t.process.s4Title.replace(/^04\.\s*/, ""),
      description: t.process.s4Desc,
      tag: t.process.s4Tag,
    },
  ];

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative border-t border-black/[0.08] bg-background py-24 sm:py-32 dark:border-white/[0.08]"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-[11px] font-mono tracking-wider text-primary uppercase dark:border-white/[0.08] dark:bg-white/[0.03]">
            <Layers className="h-3 w-3" />
            <span>{t.process.eyebrow}</span>
          </div>

          <h2
            id="process-heading"
            className="mt-4 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-5xl"
          >
            {t.process.title}
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            {t.process.description}
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, index) => (
            <div
              key={s.num}
              className="group relative flex flex-col justify-between rounded-2xl border border-black/[0.08] bg-card p-7 transition-all duration-300 hover:border-black/[0.14] dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/[0.14] dark:hover:bg-white/[0.04] shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-medium text-foreground/30 group-hover:text-primary transition-colors">
                    {s.num}
                  </span>
                  <span className="rounded-full border border-black/[0.08] bg-black/[0.03] px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground dark:border-white/[0.08] dark:bg-white/[0.03]">
                    {s.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-base font-medium tracking-tight text-foreground">
                  {s.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-black/[0.06] pt-4 dark:border-white/[0.06]">
                <span className="text-[10px] font-mono text-muted-foreground">
                  {t.process.stepPrefix || "Etapa"} {index + 1} de 4
                </span>
                {index < 3 && (
                  <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors hidden lg:block" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
