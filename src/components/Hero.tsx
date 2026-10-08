import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="home-heading"
      className="overflow-hidden bg-[#f5f5f7] px-6 pb-16 pt-32 sm:pb-24 sm:pt-40 lg:pt-44 dark:bg-background"
    >
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-5 text-sm font-medium tracking-wide text-muted-foreground sm:text-base">
          Evolves Digital Studio
        </p>
        <h1
          id="home-heading"
          className="mx-auto max-w-5xl text-balance text-[clamp(2.75rem,8vw,7rem)] font-semibold leading-[.98] tracking-[-.075em]"
        >
          Tecnologia para
          <span className="block">
            o que vem <span className="text-primary">a seguir.</span>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Criação de sites, desenvolvimento de sistemas e identidade visual para
          empresas prontas para dar o próximo passo.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:brightness-105"
          >
            Vamos conversar{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#cases"
            className="inline-flex items-center gap-1 text-base text-primary transition hover:underline"
          >
            Conheça nossos projetos <span aria-hidden="true">›</span>
          </a>
        </div>

        <div
          className="studio-art relative mx-auto mt-14 aspect-[1.45/1] max-h-[590px] w-full max-w-6xl overflow-hidden rounded-[1.75rem] sm:mt-20 sm:rounded-[2.25rem]"
          role="img"
          aria-label="Composição abstrata que representa ideias se transformando em produtos digitais"
        >
          <div className="studio-art__orb studio-art__orb--one" />
          <div className="studio-art__wordmark">
            evolves<span>®</span>
          </div>
        </div>
      </div>
    </section>
  );
}
