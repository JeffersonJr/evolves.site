import { Check, ArrowRight, Code2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { servicesData } from "@/data/services";
import { useI18n } from "@/contexts/I18nContext";

export function Services({
  standalone = false,
}: { standalone?: boolean } = {}) {
  const Heading = standalone ? "h1" : "h2";
  const visibleServices = standalone ? servicesData : servicesData.slice(0, 4);
  const additionalServices = standalone ? [] : servicesData.slice(4);
  const { t } = useI18n();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative border-t border-black/[0.08] bg-surface/20 py-24 sm:py-32 dark:border-white/[0.08]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-[11px] font-mono tracking-wider text-primary uppercase dark:border-white/[0.08] dark:bg-white/[0.03]">
            <Code2 className="h-3 w-3" />
            <span>{t.services.eyebrow}</span>
          </div>

          <Heading
            id="services-heading"
            className="mt-4 text-balance text-3xl font-medium tracking-tight sm:text-5xl text-foreground"
          >
            {t.services.title}
          </Heading>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            {t.services.description}
          </p>
          <p className="mx-auto mt-3 text-xs font-mono text-muted-foreground/80">
            {t.services.differential}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {visibleServices.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col justify-between rounded-2xl border border-black/[0.08] bg-card p-8 sm:p-9 transition-all duration-300 hover:border-black/[0.16] shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/[0.14] dark:hover:bg-white/[0.04]"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/[0.08] bg-black/[0.03] text-primary dark:border-white/[0.08] dark:bg-white/[0.04]">
                  <s.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {s.text}
                </p>
                <ul className="mt-6 space-y-2 mb-8">
                  {s.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/85">
                      <span className="text-primary">
                        <Check className="h-3.5 w-3.5" strokeWidth={2} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-primary dark:border-white/[0.06]">
                <span>{t.services.viewDetails}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {additionalServices.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-mono text-muted-foreground">
            <span className="text-foreground">{t.services.moreSolutions}</span>
            {additionalServices.map((service) => (
              <Link
                key={service.slug}
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="underline decoration-white/[0.2] underline-offset-4 transition-colors hover:text-primary"
              >
                {service.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
