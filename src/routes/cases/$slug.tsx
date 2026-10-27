import { RelatedLinks } from "@/components/RelatedLinks";
import { contentConnections } from "@/data/related-content";
import { breadcrumbSchema, seoHead, siteUrl } from "@/lib/seo";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { casesData } from "@/data/cases";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Target, Lightbulb, Globe } from "lucide-react";

export const Route = createFileRoute("/cases/$slug")({
  loader: ({ params }) => {
    const project = casesData.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const item = loaderData?.project;
    if (!item)
      return { meta: [{ name: "robots", content: "noindex, follow" }] };
    return seoHead({
      title: `${item.title} | Evolves`,
      description: item.text,
      path: `/cases/${item.slug}`,
      image: item.img,
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          headline: item.title,
          description: item.text,
          image: item.img,
          url: new URL(`/cases/${item.slug}`, siteUrl).href,
          keywords: item.tags,
          inLanguage: "pt-BR",
        },
        breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Cases", path: "/cases" },
          { name: item.title, path: `/cases/${item.slug}` },
        ]),
      ],
    });
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { project } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto max-w-4xl px-6 py-28 sm:py-36">
        <Link
          to="/cases"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Voltar para Casos de Estudo</span>
        </Link>

        <article>
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-muted-foreground mb-4">
              <span>{project.category}</span>
            </div>

            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              {project.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {project.text}
            </p>

            {project.liveUrl && (
              <div className="mt-6 flex justify-center">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition hover:opacity-90 shadow-xs"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>Acessar Projeto ao Vivo ({project.liveUrl.replace("https://", "").replace("/", "")})</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* Hero Mockup */}
          <div className="relative mb-16 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface to-card p-4 sm:p-8 shadow-[var(--shadow-card)]">
            <img
              src={project.img}
              alt={`Mockup do projeto ${project.title}`}
              width={1200}
              height={900}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain rounded-2xl drop-shadow-xl transition-transform duration-700 hover:scale-[1.01]"
            />
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* O Desafio */}
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-xs">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider mb-3">
                <Target className="h-4 w-4" />
                <span>O Desafio</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* A Solução */}
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-xs">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider mb-3">
                <Lightbulb className="h-4 w-4" />
                <span>A Solução de Engenharia</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Os Resultados */}
            <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-wider mb-6">
                <CheckCircle2 className="h-4 w-4" />
                <span>Resultados & Impacto Mensurável</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {project.stats?.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center rounded-2xl border border-border/80 bg-surface/50 p-5 text-center"
                  >
                    <div className="text-3xl font-bold tracking-tight text-foreground mb-1 flex items-baseline">
                      {stat.value}
                      {stat.suffix && (
                        <span className="text-lg text-primary ml-0.5">
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {project.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {result}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-14 flex flex-col items-center border-t border-border/60 pt-8">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
              Tecnologias & Arquitetura
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-mono text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="relative mt-20 overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12 text-center shadow-[var(--shadow-card)]">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-3">
              Quer resultados com esse padrão de qualidade?
            </h3>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-8 leading-relaxed">
              Vamos conversar sobre o seu projeto e estruturar uma proposta técnica com prazos ágeis e preço fixo.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs sm:text-sm font-medium text-background transition hover:opacity-90 shadow-xs"
            >
              <span>Falar com um Engenheiro</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <RelatedLinks
            title="Conheça os serviços relacionados"
            links={contentConnections
              .filter((entry) => entry.cases.includes(project.slug))
              .map((entry) => entry.service)}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
