import { RelatedLinks } from "@/components/RelatedLinks";
import { contentConnections } from "@/data/related-content";
import { breadcrumbSchema, seoHead, siteUrl } from "@/lib/seo";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { casesData } from "@/data/cases";
import { ArrowLeft, CheckCircle2, Target, Lightbulb } from "lucide-react";

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
      <main className="flex-1 mx-auto max-w-4xl px-6 py-32 sm:py-40">
        <Link
          to="/cases"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para Cases
        </Link>

        <article>
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground mb-6">
              {project.category}
            </span>
            <h1 className="mb-8 text-4xl font-semibold tracking-tight sm:text-6xl">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {project.text}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative mb-20 flex items-center justify-center overflow-hidden rounded-4xl bg-[#f5f5f7] p-6 dark:bg-surface sm:p-12 lg:p-16">
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
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center rounded-3xl bg-[#f5f5f7] p-6 text-center dark:bg-surface"
                    >
                      <div className="text-4xl font-bold text-primary mb-2 flex items-baseline">
                        {stat.value}
                        {stat.suffix && (
                          <span className="text-2xl text-primary/70 ml-1">
                            {stat.suffix}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
                <ul className="space-y-4">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                      <span className="text-lg text-muted-foreground leading-relaxed">
                        {result}
                      </span>
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
              {project.tags.map((tag, index) => (
                <span key={tag} className="text-sm text-muted-foreground">
                  {index > 0 && <span aria-hidden="true"> · </span>}
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="relative mt-32 overflow-hidden rounded-4xl bg-[#f5f5f7] p-10 text-center dark:bg-surface sm:p-16">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 blur-3xl rounded-full" />
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Quer resultados como esse?
              </h3>
              <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                Vamos conversar sobre o seu projeto e descobrir como podemos
                ajudar a sua empresa a alcançar o próximo nível.
              </p>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition hover:brightness-105"
              >
                Falar com um especialista
              </Link>
            </div>
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
