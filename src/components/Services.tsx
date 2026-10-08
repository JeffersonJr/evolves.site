import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { servicesData } from "@/data/services";

const differential =
  "Nosso diferencial: um olhar de qualidade e de UX/UI com mais de 8 anos de experiência prática.";

export function Services({
  standalone = false,
}: { standalone?: boolean } = {}) {
  const Heading = standalone ? "h1" : "h2";
  const visibleServices = standalone ? servicesData : servicesData.slice(0, 5);
  const additionalServices = standalone ? [] : servicesData.slice(5);
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-[#f5f5f7] py-24 sm:py-32 dark:bg-surface"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            id="services-heading"
            className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Serviços que impulsionam seu crescimento
          </Heading>
          <p className="mt-5 text-lg text-muted-foreground">
            Combinamos design de vanguarda com as tecnologias mais recentes para
            entregar resultados reais.
          </p>
          <div className="mx-auto mt-6 inline-flex max-w-full items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" strokeWidth={1.8} />
            {differential}
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {visibleServices.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col rounded-[1.75rem] bg-white p-8 transition-colors duration-300 hover:bg-[#fafafa] dark:bg-card dark:hover:bg-secondary/70 sm:p-10"
            >
              <div className="text-primary">
                <s.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="mt-3 text-muted-foreground">{s.text}</p>
              <ul className="mt-6 space-y-3 mb-8">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-border flex items-center text-sm font-medium text-primary">
                Ver detalhes do serviço
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
        {additionalServices.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Mais soluções:</span>
            {additionalServices.map((service) => (
              <Link
                key={service.slug}
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="underline decoration-border underline-offset-4 transition-colors hover:text-primary"
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
