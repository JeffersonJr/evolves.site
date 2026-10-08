import { RelatedLinks } from "@/components/RelatedLinks";
import { contentConnections } from "@/data/related-content";
import {
  breadcrumbSchema,
  organizationSchema,
  seoHead,
  siteUrl,
} from "@/lib/seo";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { servicesData } from "@/data/services";
import { casesData } from "@/data/cases";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";

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
    return seoHead({
      title: item.seoTitle,
      description: item.seoDescription,
      path: `/services/${item.slug}`,
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: item.title,
          serviceType: item.title,
          description: item.seoDescription,
          url: new URL(`/services/${item.slug}`, siteUrl).href,
          provider: organizationSchema,
          areaServed: { "@type": "Country", name: "Brasil" },
        },
        breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Serviços", path: "/services" },
          { name: item.title, path: `/services/${item.slug}` },
        ]),
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
      <main className="flex-1 mx-auto max-w-5xl px-6 py-32 sm:py-40">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Todos os Serviços
        </Link>

        <article>
          {/* Header */}
          <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5f5f7] text-primary dark:bg-surface">
                <Icon className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-6xl">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="rounded-4xl bg-[#f5f5f7] p-8 dark:bg-surface sm:p-10">
              <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Principais Entregáveis
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-px w-full bg-border mb-20" />

          {/* Por que Escolher */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Por que escolher a Evolves?
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {service.whyChooseUs.map((reason, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-[#f5f5f7] p-8 dark:bg-surface"
                >
                  <div className="text-5xl font-black text-primary/10 mb-4">
                    0{idx + 1}
                  </div>
                  <p className="text-muted-foreground font-medium">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Processo */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Nosso Processo
            </h2>
            {service.phases ? (
              <div className="relative border-l-2 border-primary/20 ml-4 sm:ml-6 space-y-14 pb-4">
                {service.phases.map((phase, pIdx) => (
                  <div key={pIdx} className="relative pl-8 sm:pl-12">
                    {/* Glowing Dot */}
                    <div className="absolute -left-[11px] top-1.5 bg-background p-1.5 rounded-full">
                      <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_12px_rgba(var(--primary),0.8)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      {phase.name}
                    </h3>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {phase.steps.map((step) => (
                        <div
                          key={step.id}
                          className="rounded-2xl bg-[#f5f5f7] p-6 transition-colors hover:bg-[#efeff2] dark:bg-surface dark:hover:bg-secondary/70"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">
                              {step.id}
                            </span>
                            <h4 className="font-bold text-lg leading-tight">
                              {step.title}
                            </h4>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {step.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {service.process.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col gap-4 rounded-3xl bg-[#f5f5f7] p-6 transition-colors hover:bg-[#efeff2] dark:bg-surface dark:hover:bg-secondary/70 sm:flex-row sm:items-center sm:gap-8 sm:p-8"
                  >
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-1">{step.step}</h4>
                      <p className="text-muted-foreground">{step.detail}</p>
                    </div>
                    <ChevronRight className="h-6 w-6 text-muted-foreground hidden sm:block opacity-30" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <section className="mb-24" aria-labelledby="service-faq-title">
            <h2
              id="service-faq-title"
              className="mb-8 text-3xl font-semibold tracking-tight"
            >
              Perguntas frequentes sobre {service.title}
            </h2>
            <div className="divide-y divide-border border-y border-border">
              {service.faq.map((item) => (
                <details key={item.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium marker:content-none">
                    <span>{item.question}</span>
                    <span
                      className="text-muted-foreground transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Box */}
          <div className="relative overflow-hidden rounded-4xl bg-[#f5f5f7] p-10 text-center text-foreground dark:bg-surface sm:p-16">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 blur-3xl rounded-full" />
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Pronto para dar o próximo passo?
              </h3>
              <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                Inicie uma conversa sem compromisso. Avaliaremos seu projeto e
                indicaremos o caminho mais rápido para o ROI.
              </p>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition hover:brightness-105"
              >
                Solicitar Proposta
              </Link>
            </div>
          </div>
          <RelatedLinks
            title="Saiba mais antes de iniciar seu projeto"
            links={relatedLinks}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
