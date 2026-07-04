import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section exclusiva da página Sobre */}
        <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
          <div className="mx-auto max-w-6xl px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Conheça a Evolves
            </div>
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-7xl mb-6">
              Não criamos apenas sites.
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
                Construímos negócios digitais.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Nascemos da insatisfação com as soluções padrão do mercado. Unimos inteligência artificial, design estratégico e engenharia robusta para colocar empresas na vanguarda da nova economia.
            </p>
          </div>
        </div>

        <About />
      </main>
      <Footer />
    </div>
  );
}
