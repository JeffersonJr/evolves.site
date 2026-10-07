import { RelatedLinks } from "@/components/RelatedLinks";
import { contentConnections } from "@/data/related-content";
import { seoHead } from "@/lib/seo";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { servicesData } from "@/data/services";
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
    if (!item) return { meta: [{ name: "robots", content: "noindex, follow" }] };
    return seoHead({
      title: `${item.title} | Evolves`,
      description: item.text,
      path: `/services/${item.slug}`,
    });
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();

  const Icon = servicesData.find((item) => item.slug === service.slug)!.icon;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto max-w-5xl px-6 py-32 sm:py-40">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="h-4 w-4" />
          Todos os Serviços
        </Link>
        
        <article>
          {/* Header */}
          <div className="mb-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-blue text-primary-foreground shadow-[var(--shadow-glow)] mb-8">
                <Icon className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="bg-surface border border-border rounded-4xl p-8 sm:p-10 shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Principais Entregáveis
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-muted-foreground">
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
            <h2 className="text-3xl font-bold mb-10 text-center">Por que escolher a Evolves?</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {service.whyChooseUs.map((reason, idx) => (
                <div key={idx} className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                  <div className="text-5xl font-black text-primary/10 mb-4">0{idx + 1}</div>
                  <p className="text-muted-foreground font-medium">{reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Processo */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold mb-12 text-center">Nosso Processo</h2>
            {service.phases ? (
              <div className="relative border-l-2 border-primary/20 ml-4 sm:ml-6 space-y-14 pb-4">
                {service.phases.map((phase, pIdx) => (
                  <div key={pIdx} className="relative pl-8 sm:pl-12">
                    {/* Glowing Dot */}
                    <div className="absolute -left-[11px] top-1.5 bg-background p-1.5 rounded-full">
                      <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_12px_rgba(var(--primary),0.8)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-6">{phase.name}</h3>
                    
                    <div className="grid gap-4 sm:grid-cols-2">
                      {phase.steps.map((step) => (
                        <div key={step.id} className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors shadow-[var(--shadow-soft)]">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">
                              {step.id}
                            </span>
                            <h4 className="font-bold text-lg leading-tight">{step.title}</h4>
                          </div>
                          <p className="text-sm text-muted-foreground">{step.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {service.process.map((step, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 bg-surface rounded-3xl p-6 sm:p-8 border border-border hover:border-primary/50 transition-colors shadow-[var(--shadow-soft)]">
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

          {/* CTA Box */}
          <div className="rounded-4xl bg-primary p-10 sm:p-16 text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 blur-3xl rounded-full" />
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">Pronto para dar o próximo passo?</h3>
              <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
                Inicie uma conversa sem compromisso. Avaliaremos seu projeto e indicaremos o caminho mais rápido para o ROI.
              </p>
              <Link to="/contact" className="inline-flex h-14 items-center justify-center rounded-full bg-background px-8 text-sm font-semibold text-foreground shadow-lg transition-transform hover:scale-105">
                Solicitar Proposta
              </Link>
            </div>
          </div>
          <RelatedLinks
            title="Saiba mais antes de iniciar seu projeto"
            links={
              contentConnections.find((entry) => entry.service.href === `/services/${service.slug}`)?.articles ?? []
            }
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
