import { Link } from "@tanstack/react-router";
import { casesData } from "@/data/cases";

export function Cases({ standalone = false }: { standalone?: boolean } = {}) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <section id="cases" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Heading className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Cases de sucesso
          </Heading>
          <p className="mt-5 text-lg text-muted-foreground">
            Projetos que transformaram negócios e elevaram o patamar digital de
            nossos clientes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {casesData.map((c) => (
            <Link
              key={c.slug}
              to="/cases/$slug"
              params={{ slug: c.slug }}
              className="group block overflow-hidden rounded-[1.75rem] bg-[#f5f5f7] transition-colors duration-300 hover:bg-[#efeff2] dark:bg-card dark:hover:bg-secondary/70"
            >
              <article>
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden p-6 dark:bg-surface">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={c.img}
                    alt={c.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="h-full w-full object-contain filter drop-shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 group-hover:drop-shadow-2xl"
                  />
                </div>
                <div className="p-7 sm:p-8">
                  <p className="text-xs font-medium uppercase tracking-wide text-primary">
                    {c.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t, index) => (
                      <span key={t} className="text-xs text-muted-foreground">
                        {index > 0 && <span aria-hidden="true"> · </span>}
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
