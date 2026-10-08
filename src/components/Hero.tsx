import { ArrowDownRight, ArrowRight, Layers3, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-6 pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pb-32 lg:pt-44"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        className="pointer-events-none absolute -right-40 top-12 -z-10 h-[32rem] w-[32rem] rounded-full bg-blue-400/10 blur-[100px]"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-10">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Tecnologia pensada para pessoas
          </p>
          <h1 className="text-balance text-[clamp(3.25rem,7vw,5.8rem)] font-semibold leading-[.99] tracking-[-.065em]">
            Ideias grandes.
            <span className="mt-1 block text-primary">
              Experiências à altura.
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl lg:mx-0">
            Criamos sites, sistemas e marcas que ajudam empresas a evoluir — com
            estratégia, design cuidadoso e tecnologia feita para durar.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-base font-medium text-primary-foreground shadow-[0_8px_24px_-10px_var(--primary)] transition hover:brightness-105"
            >
              Vamos conversar{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#cases"
              className="inline-flex min-h-12 items-center gap-1 px-3 text-base font-medium text-primary transition hover:gap-2"
            >
              Conheça nossos projetos{" "}
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Estratégia, produto digital e engenharia em um só lugar.
          </p>
        </div>

        <div
          className="relative mx-auto w-full max-w-[30rem] lg:max-w-none"
          role="img"
          aria-label="Composição abstrata de interfaces digitais"
        >
          <div className="relative mx-auto aspect-[1.05/1] max-w-[34rem]">
            <div className="absolute inset-[8%_5%_8%_8%] rotate-[-7deg] rounded-[2.25rem] bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 p-[1px] shadow-[0_40px_100px_-38px_rgba(35,74,190,.55)]">
              <div className="flex h-full flex-col overflow-hidden rounded-[calc(2.25rem-1px)] bg-[#10131c] p-5 text-white sm:p-7">
                <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-auto text-[11px] tracking-wide text-white/45">
                    EVOLVES / DIGITAL STUDIO
                  </span>
                </div>
                <div className="grid flex-1 grid-cols-[1fr_.82fr] gap-4 py-5 sm:gap-6 sm:py-7">
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="mb-5 h-1.5 w-14 rounded-full bg-blue-400" />
                      <p className="max-w-[15rem] text-2xl font-medium leading-tight tracking-tight sm:text-4xl">
                        O próximo capítulo começa aqui.
                      </p>
                      <p className="mt-3 max-w-[14rem] text-xs leading-relaxed text-white/50 sm:text-sm">
                        Produtos digitais que tornam ideias complexas simples de
                        usar.
                      </p>
                    </div>
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-900 sm:text-sm">
                      Explorar <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-sky-300 via-blue-500 to-indigo-700">
                    <div className="absolute -right-10 top-4 h-36 w-36 rounded-full border border-white/40" />
                    <div className="absolute -right-4 top-10 h-28 w-28 rounded-full border border-white/40" />
                    <div className="absolute bottom-5 left-4 right-4 rounded-2xl border border-white/25 bg-white/20 p-3 backdrop-blur-md sm:p-4">
                      <div className="mb-3 flex items-center justify-between text-[10px] text-white/80 sm:text-xs">
                        <span>Visão geral</span>
                        <span>•••</span>
                      </div>
                      <div className="flex h-12 items-end gap-1.5 sm:h-16">
                        {[32, 52, 40, 76, 57, 90, 66, 100, 72].map(
                          (height, index) => (
                            <span
                              key={index}
                              className="flex-1 rounded-t-sm bg-white/80"
                              style={{ height: `${height}%` }}
                            />
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-4 text-[10px] text-white/45 sm:text-xs">
                  <span>Design com intenção.</span>
                  <span>Feito para evoluir ↗</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[5%] left-0 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/85 p-3 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 sm:bottom-[7%] sm:p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-primary dark:bg-blue-400/15">
                <Layers3 className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold">
                  Do conceito à evolução
                </span>
                <span className="block text-xs text-muted-foreground">
                  Uma parceria para cada etapa
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
