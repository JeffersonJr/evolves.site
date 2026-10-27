import { RelatedLinks } from "@/components/RelatedLinks";
import { contentConnections } from "@/data/related-content";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  serviceSchema,
  seoHead,
  siteUrl,
} from "@/lib/seo";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { servicesData } from "@/data/services";
import { casesData } from "@/data/cases";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = servicesData.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    // React icon components cannot be serialized in the server loader payload.
    const { icon: _icon, ...serviceContent } = service;
    return { service: serviceContent };
  },
  head: ({ loaderData }) => {
    const item = loaderData?.service;
    if (!item)
      return { meta: [{ name: "robots", content: "noindex, follow" }] };
    const serviceUrl = new URL(`/services/${item.slug}`, siteUrl).href;
    return seoHead({
      title: item.seoTitle,
      description: item.seoDescription,
      path: `/services/${item.slug}`,
      structuredData: [
        serviceSchema({
          name: item.title,
          description: item.seoDescription,
          url: serviceUrl,
        }),
        breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Serviços", path: "/services" },
          { name: item.title, path: `/services/${item.slug}` },
        ]),
        ...(item.faq && item.faq.length > 0 ? [faqSchema(item.faq)] : []),
      ],
    });
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();

  const Icon = servicesData.find((item) => item.slug === service.slug)!.icon;
  const relatedContent = contentConnections.find(
    (entry) => entry.service.href === `/services/${service.slug}`,
  );
  const relatedLinks = [
    ...(relatedContent?.articles ?? []),
    ...casesData
      .filter((project) => relatedContent?.cases.includes(project.slug))
      .map((project) => ({
        href: `/cases/${project.slug}`,
        label: `${project.title}: ${project.text}`,
      })),
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto max-w-5xl px-6 py-28 sm:py-36">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Todos os Serviços</span>
        </Link>

        <article>
          {/* Header */}
          <div className="mb-16 grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl text-foreground">
                {service.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="md:col-span-5 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground font-mono uppercase">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>Principais Entregáveis</span>
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90"
                  >
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-px w-full bg-border/60 mb-16" />

          {/* Por que Escolher */}
          <div className="mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-8 text-center">
              Diferenciais de Engenharia
            </h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {service.whyChooseUs.map((reason, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-border bg-card p-6 shadow-xs"
                >
                  <span className="font-mono text-2xl font-bold text-foreground/60 dark:text-foreground/50 mb-3 block">
                    0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Processo */}
          {service.phases && service.phases.length > 0 && (
            <div className="mb-20">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-10 text-center">
                Fases de Execução
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {service.phases.map((phase, pIdx) => (
                  <div key={pIdx} className="rounded-2xl border border-border bg-surface/50 p-5 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-primary tracking-wider">
                        Fase 0{pIdx + 1}
                      </span>
                      <h3 className="mt-2 text-sm font-semibold text-foreground">
                        {phase.name}
                      </h3>
                      {phase.description && (
                        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          {phase.description}
                        </p>
                      )}
                      {phase.steps && phase.steps.length > 0 && (
                        <ul className="mt-3 space-y-2 border-t border-border/60 pt-3">
                          {phase.steps.map((st) => (
                            <li key={st.id} className="text-xs text-muted-foreground leading-relaxed">
                              <span className="font-medium text-foreground block">{st.title}</span>
                              <span className="text-[11px] text-muted-foreground">{st.detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Box */}
          <div className="relative mt-20 overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12 text-center shadow-[var(--shadow-card)]">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-3">
              Pronto para implementar essa solução?
            </h3>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto mb-8 leading-relaxed">
              Vamos conversar sobre o seu projeto e estruturar uma proposta com prazos ágeis e preço fixo.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs sm:text-sm font-medium text-background transition hover:opacity-90 shadow-xs"
            >
              <span>Solicitar Orçamento Técnico</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <RelatedLinks
            title="Conheça os serviços relacionados"
            links={relatedLinks}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
