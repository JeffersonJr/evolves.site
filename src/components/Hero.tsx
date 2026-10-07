export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="animate-fade-up text-sm font-medium tracking-tight text-primary">
          Soluções digitais com IA e design inteligente
        </p>
        <h1
          className="mx-auto mt-4 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Transformamos ideias em{" "}
          <span className="gradient-text">experiências digitais</span> de alto impacto.
        </h1>
        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          style={{ animationDelay: "160ms" }}
        >
          Criamos sites, sistemas e marcas sob medida, unindo inteligência
          artificial e design de vanguarda para empresas que buscam escala.
        </p>
        <div
          className="animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#contact"
            className="rounded-full bg-primary px-7 py-3 text-base font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Começar agora
          </a>
          <a
            href="#services"
            className="rounded-full border border-border bg-card px-7 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Ver nossos serviços
          </a>
        </div>
      </div>

    </section>
  );
}
