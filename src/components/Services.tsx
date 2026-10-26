import { Check, ArrowRight } from "lucide-react";
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
      className="border-t border-border/60 bg-surface/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-primary">
            {t.services.eyebrow}
          </p>
          <Heading
            id="services-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl text-foreground"
          >
            {t.services.title}
          </Heading>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {t.services.description}
          </p>
          <p className="mx-auto mt-4 text-xs font-mono text-muted-foreground">
            {t.services.differential}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {visibleServices.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-8 sm:p-10 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-xl sm:text-2xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {s.text}
                </p>
                <ul className="mt-6 space-y-2.5 mb-8">
                  {s.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/90">
                      <span className="text-emerald-500">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-border/60 flex items-center justify-between text-xs font-medium text-primary">
                <span>{t.services.viewDetails}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                className="underline decoration-border/80 underline-offset-4 transition-colors hover:text-primary"
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
