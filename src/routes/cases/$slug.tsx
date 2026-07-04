import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { casesData } from "@/data/cases";
import { ArrowLeft, CheckCircle2, Target, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/cases/$slug")({
  loader: ({ params }) => {
    const project = casesData.find((p) => p.slug === params.slug);
    return { project };
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { project } = Route.useLoaderData();

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">Case não encontrado.</p>
          <Link to="/cases" className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Voltar para Cases
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto max-w-4xl px-6 py-32 sm:py-40">
        <Link to="/cases" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="h-4 w-4" />
          Voltar para Cases
        </Link>
        
        <article>
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground mb-6">
              {project.category}
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {project.text}
            </p>
          </div>
          
          {/* Hero Image */}
          <div className="rounded-4xl mb-20 shadow-[var(--shadow-card)] border border-border bg-gradient-to-b from-surface to-background/50 p-6 sm:p-12 lg:p-16 flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/10 blur-3xl rounded-full pointer-events-none"></div>
            <img 
              src={project.img} 
              alt={`Mockup do projeto ${project.title}`}
              className="w-full h-auto max-h-[60vh] object-contain rounded-2xl drop-shadow-2xl relative z-10 transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          {/* Content */}
          <div className="space-y-16">
            {/* O Desafio */}
            <div className="grid sm:grid-cols-[1fr_2fr] gap-8 items-start">
              <div className="flex items-center gap-3 text-primary font-bold text-xl">
                <Target className="h-6 w-6" />
                <h2>O Desafio</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="h-px w-full bg-border" />

            {/* A Solução */}
            <div className="grid sm:grid-cols-[1fr_2fr] gap-8 items-start">
              <div className="flex items-center gap-3 text-primary font-bold text-xl">
                <Lightbulb className="h-6 w-6" />
                <h2>A Solução</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="h-px w-full bg-border" />

            {/* Os Resultados */}
            <div className="grid sm:grid-cols-[1fr_2fr] gap-8 items-start">
              <div className="flex items-center gap-3 text-primary font-bold text-xl">
                <CheckCircle2 className="h-6 w-6" />
                <h2>Os Resultados</h2>
              </div>
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {project.stats?.map((stat, idx) => (
                    <div key={idx} className="bg-surface rounded-3xl p-6 border border-border flex flex-col items-center justify-center text-center shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1">
                      <div className="text-4xl font-bold text-primary mb-2 flex items-baseline">
                        {stat.value}
                        {stat.suffix && <span className="text-2xl text-primary/70 ml-1">{stat.suffix}</span>}
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <ul className="space-y-4">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                      <span className="text-lg text-muted-foreground leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Tech Stack */}
          <div className="mt-20 flex flex-col items-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
              Tecnologias Utilizadas
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {project.tags.map(tag => (
                <span key={tag} className="px-5 py-2.5 rounded-full bg-surface border border-border text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="mt-32 rounded-4xl bg-primary p-10 sm:p-16 text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 blur-3xl rounded-full" />
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">Quer resultados como esse?</h3>
              <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
                Vamos conversar sobre o seu projeto e descobrir como podemos ajudar a sua empresa a alcançar o próximo nível.
              </p>
              <Link to="/contact" className="inline-flex h-14 items-center justify-center rounded-full bg-background px-8 text-sm font-semibold text-foreground shadow-lg transition-transform hover:scale-105">
                Falar com um especialista
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
