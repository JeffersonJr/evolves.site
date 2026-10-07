import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { servicesData } from "@/data/services";

const differential = "Nosso diferencial: um olhar de qualidade e de UX/UI com mais de 8 anos de experiência prática.";

export function Services({ standalone = false }: { standalone?: boolean } = {}) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <section id="services" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Heading className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Serviços que impulsionam seu crescimento
          </Heading>
          <p className="mt-5 text-lg text-muted-foreground">
            Combinamos design de vanguarda com as tecnologias mais recentes para
            entregar resultados reais.
          </p>
          <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground">
            <Sparkles className="h-4 w-4" strokeWidth={2} />
            {differential}
          </div>
        </div>


        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {servicesData.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col rounded-4xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)] sm:p-10 block"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-blue text-primary-foreground shadow-[var(--shadow-glow)]">
                <s.icon className="h-7 w-7" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.text}</p>
              <ul className="mt-6 space-y-3 mb-8">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground">
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
      </div>
    </section>
  );
}
