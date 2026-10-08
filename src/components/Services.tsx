import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { servicesData } from "@/data/services";

const differential =
  "Nosso diferencial: um olhar de qualidade e de UX/UI com mais de 8 anos de experiência prática.";

export function Services({
  standalone = false,
}: { standalone?: boolean } = {}) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <section
      id="services"
      className="bg-[#f5f5f7] py-24 sm:py-32 dark:bg-surface"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Heading className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Serviços que impulsionam seu crescimento
          </Heading>
          <p className="mt-5 text-lg text-muted-foreground">
            Combinamos design de vanguarda com as tecnologias mais recentes para
            entregar resultados reais.
          </p>
          <div className="mx-auto mt-6 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-100 bg-white/70 px-4 py-2 text-sm font-medium text-accent-foreground dark:border-border dark:bg-card">
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
              className="group flex flex-col rounded-[1.75rem] border border-black/[.04] bg-white p-8 shadow-[0_12px_40px_-30px_rgba(0,0,0,.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_-28px_rgba(0,0,0,.3)] dark:border-border dark:bg-card sm:p-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary dark:bg-accent">
                <s.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="mt-3 text-muted-foreground">{s.text}</p>
              <ul className="mt-6 space-y-3 mb-8">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-primary dark:bg-accent">
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
