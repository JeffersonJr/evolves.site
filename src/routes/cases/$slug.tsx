import { RelatedLinks } from "@/components/RelatedLinks";
import { contentConnections } from "@/data/related-content";
import { breadcrumbSchema, seoHead, siteUrl } from "@/lib/seo";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { casesData, type CaseStudy } from "@/data/cases";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Target,
  Lightbulb,
  Globe,
  Lock,
  Zap,
  Layers,
  Sparkles,
  Shield,
  Cpu,
  Calendar,
  MapPin,
  ExternalLink,
} from "lucide-react";

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
      title: `${item.title} · Estudo de Caso de Engenharia | Evolves`,
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

  const currentIndex = casesData.findIndex((c) => c.slug === project.slug);
  const prevProject =
    casesData[(currentIndex - 1 + casesData.length) % casesData.length];
  const nextProject = casesData[(currentIndex + 1) % casesData.length];

  const cleanHostname = project.liveUrl
    ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : null;

  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-primary/20 selection:text-foreground">
      <Navbar />

      <main className="flex-1 mx-auto w-full max-w-5xl px-6 py-28 sm:py-36">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 mb-10">
          <Link
            to="/cases"
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Todos os Casos de Estudo</span>
          </Link>

          <span className="text-[11px] font-mono text-muted-foreground">
            Case {currentIndex + 1} de {casesData.length}
          </span>
        </div>

        <article>
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-3.5 py-1 text-xs font-mono text-primary uppercase tracking-wider dark:border-white/[0.08] dark:bg-white/[0.03] mb-4">
              <span>{project.category}</span>
            </div>

            <h1 className="text-balance text-3xl font-medium tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              {project.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {project.text}
            </p>

            {project.liveUrl && cleanHostname && (
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-xs font-medium text-background transition hover:opacity-90 shadow-sm"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>Acessar Projeto ao Vivo ({cleanHostname})</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* Project Metadata Ribbon */}
          <div className="mb-14 rounded-2xl border border-black/[0.08] bg-card p-4 sm:p-6 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 text-left">
              {project.client && (
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    Cliente
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-foreground">
                    {project.client}
                  </p>
                </div>
              )}
              {project.country && (
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    Localização
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-foreground">
                    {project.country}
                  </p>
                </div>
              )}
              {project.year && (
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    Período / Ano
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-foreground font-mono">
                    {project.year}
                  </p>
                </div>
              )}
              {project.scope && (
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    Escopo de Atuação
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-foreground line-clamp-1">
                    {project.scope}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Apple Safari / MacBook Clean Frame Mockup */}
          <div className="relative mb-16 overflow-hidden rounded-2xl border border-black/[0.1] bg-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:border-white/[0.12] dark:bg-[#0A0C10] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* Safari Chrome Titlebar */}
            <div className="flex items-center justify-between border-b border-black/[0.08] bg-zinc-200/60 px-4 py-3 dark:border-white/[0.08] dark:bg-white/[0.03]">
              {/* Window Controls */}
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>

              {/* Address Pill */}
              <div className="flex items-center gap-2 rounded-md border border-black/[0.08] bg-white px-4 py-1 text-[11px] font-mono text-muted-foreground dark:border-white/[0.08] dark:bg-black/50 shadow-xs max-w-sm w-full justify-center">
                <Lock className="h-3 w-3 text-emerald-500 shrink-0" />
                <span className="truncate">
                  {cleanHostname || project.slug}
                </span>
              </div>

              {/* Telemetry pill */}
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 shrink-0">
                <Zap className="h-3 w-3" />
                <span className="hidden sm:inline">
                  100/100 Core Web Vitals
                </span>
                <span className="sm:hidden">100/100</span>
              </div>
            </div>

            {/* Browser Content */}
            <div className="relative overflow-hidden bg-black/5 p-3 sm:p-5 dark:bg-black/60">
              <img
                src={project.img}
                srcSet={
                  project.imgSm
                    ? `${project.imgSm} 640w, ${project.img} 1200w`
                    : undefined
                }
                sizes="(max-width: 768px) 100vw, 1200px"
                alt={`Mockup e interface do projeto ${project.title}`}
                width={1200}
                height={677}
                loading="eager"
                decoding="async"
                className="w-full h-auto object-contain rounded-lg drop-shadow-md transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </div>

          {/* Deliverables Pill Matrix */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div className="mb-14 rounded-2xl border border-black/[0.08] bg-card p-6 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider mb-4">
                <Layers className="h-4 w-4" />
                <span>Entregas de Engenharia & Design</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {project.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/90"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Narrative Content Sections */}
          <div className="space-y-10">
            {/* O Desafio */}
            <div className="rounded-2xl border border-black/[0.08] bg-card p-8 sm:p-10 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]">
              <div className="flex items-center gap-2 text-amber-500 font-mono text-xs uppercase tracking-wider mb-3">
                <Target className="h-4 w-4" />
                <span>O Desafio de Negócio & Técnico</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground mb-4">
                Qual era o obstáculo a superar?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.challenge}
              </p>
            </div>

            {/* A Solução de Engenharia */}
            <div className="rounded-2xl border border-black/[0.08] bg-card p-8 sm:p-10 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]">
              <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider mb-3">
                <Lightbulb className="h-4 w-4" />
                <span>A Solução Implementada</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground mb-4">
                Como arquitetamos a solução técnica
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.solution}
              </p>
            </div>

            {/* Engineered Features Grid */}
            {project.features && project.features.length > 0 && (
              <div className="rounded-2xl border border-black/[0.08] bg-card p-8 sm:p-10 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]">
                <div className="flex items-center gap-2 text-cyan-500 font-mono text-xs uppercase tracking-wider mb-3">
                  <Sparkles className="h-4 w-4" />
                  <span>Diferenciais Técnicos Desenvolvidos</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground mb-6">
                  Inovações sob medida para o projeto
                </h2>

                <div className="grid gap-5 sm:grid-cols-2">
                  {project.features.map((feat) => (
                    <div
                      key={feat.title}
                      className="rounded-xl border border-black/[0.06] bg-black/[0.02] p-5 dark:border-white/[0.06] dark:bg-white/[0.02] transition-colors hover:border-black/[0.12] dark:hover:border-white/[0.12]"
                    >
                      <h3 className="text-sm font-medium text-foreground tracking-tight">
                        {feat.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Resultados & Impacto */}
            <div className="rounded-2xl border border-black/[0.08] bg-card p-8 sm:p-10 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]">
              <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-wider mb-3">
                <CheckCircle2 className="h-4 w-4" />
                <span>Resultados & Telemetria Comprovada</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground mb-6">
                Impacto real e mensurável após o lançamento
              </h2>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {project.stats?.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center rounded-xl border border-black/[0.06] bg-black/[0.02] p-6 text-center dark:border-white/[0.06] dark:bg-white/[0.02]"
                  >
                    <div className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-1 flex items-baseline">
                      {stat.value}
                      {stat.suffix && (
                        <span className="text-lg text-primary ml-1">
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <ul className="space-y-3">
                {project.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {result}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-14 flex flex-col items-center border-t border-black/[0.08] pt-8 dark:border-white/[0.08]">
            <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
              Tecnologias & Arquitetura Utilizadas
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-xs font-mono text-muted-foreground dark:border-white/[0.08] dark:bg-white/[0.03]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Live URL Callout Box */}
          {project.liveUrl && cleanHostname && (
            <div className="mt-14 rounded-2xl border border-primary/30 bg-primary/[0.03] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 dark:border-primary/40 dark:bg-primary/[0.05]">
              <div>
                <p className="text-[11px] font-mono text-primary uppercase tracking-wider">
                  Ambiente de Produção Ativo
                </p>
                <h3 className="text-lg font-medium tracking-tight text-foreground mt-1">
                  Deseja testar a velocidade e usabilidade deste projeto?
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Acesse o domínio oficial ({cleanHostname}) e experimente a
                  velocidade em tempo real.
                </p>
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-medium text-background transition hover:opacity-90 shadow-xs"
              >
                <span>Acessar {cleanHostname}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          )}

          {/* Case Navigation: Prev / Next */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-black/[0.08] pt-8 dark:border-white/[0.08]">
            <Link
              to="/cases/$slug"
              params={{ slug: prevProject.slug }}
              className="group flex flex-col rounded-xl border border-black/[0.08] bg-card p-5 transition-all hover:border-black/[0.16] hover:shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/[0.16]"
            >
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground mb-1 group-hover:text-primary transition-colors">
                <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
                <span>Case Anterior</span>
              </div>
              <p className="text-sm font-medium text-foreground tracking-tight line-clamp-1">
                {prevProject.title}
              </p>
              <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                {prevProject.category}
              </p>
            </Link>

            <Link
              to="/cases/$slug"
              params={{ slug: nextProject.slug }}
              className="group flex flex-col items-end text-right rounded-xl border border-black/[0.08] bg-card p-5 transition-all hover:border-black/[0.16] hover:shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/[0.16]"
            >
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground mb-1 group-hover:text-primary transition-colors">
                <span>Próximo Case</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
              <p className="text-sm font-medium text-foreground tracking-tight line-clamp-1">
                {nextProject.title}
              </p>
              <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">
                {nextProject.category}
              </p>
            </Link>
          </div>

          {/* Bottom CTA Box */}
          <div className="relative mt-16 overflow-hidden rounded-2xl border border-black/[0.08] bg-card p-8 sm:p-12 text-center shadow-[var(--shadow-card)] dark:border-white/[0.08] dark:bg-white/[0.02]">
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground mb-3">
              Quer resultados com esse padrão de engenharia?
            </h3>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-8 leading-relaxed">
              Vamos conversar sobre o seu projeto e estruturar uma proposta
              técnica com prazos ágeis, arquitetura moderna e preço fixo.
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
