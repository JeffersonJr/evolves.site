import { useI18n } from "@/contexts/I18nContext";

export function Process() {
  const { t } = useI18n();

  const steps = [
    {
      step: "01",
      title: t.process.s1Title,
      description: t.process.s1Desc,
      tag: t.process.s1Tag,
    },
    {
      step: "02",
      title: t.process.s2Title,
      description: t.process.s2Desc,
      tag: t.process.s2Tag,
    },
    {
      step: "03",
      title: t.process.s3Title,
      description: t.process.s3Desc,
      tag: t.process.s3Tag,
    },
    {
      step: "04",
      title: t.process.s4Title,
      description: t.process.s4Desc,
      tag: t.process.s4Tag,
    },
  ];

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="border-t border-border/60 bg-background py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-primary">
            {t.process.eyebrow}
          </p>
          <h2
            id="process-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            {t.process.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {t.process.description}
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, index) => (
            <div
              key={s.step}
              className="relative flex flex-col justify-between rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-bold tracking-tighter text-foreground/25 dark:text-foreground/20">
                    {s.step}
                  </span>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                    {s.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold tracking-tight text-foreground">
                  {s.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>

              <div className="mt-8 border-t border-border/60 pt-3">
                <span className="text-[10px] font-mono text-muted-foreground/80">
                  {t.process.stepPrefix} {index + 1} / 4
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
