import {
  breadcrumbSchema,
  organizationSchema,
  pageHead,
  siteUrl,
} from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead("/about", [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "Sobre a Evolves® · Estúdio de Engenharia Digital",
        url: new URL("/about", siteUrl).href,
        about: organizationSchema,
      },
      breadcrumbSchema([
        { name: "Início", path: "/" },
        { name: "Sobre", path: "/about" },
      ]),
    ]),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section Sobre */}
        <div className="relative overflow-hidden bg-background pb-16 pt-32 sm:pb-24 sm:pt-40 border-b border-border/60">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,oklch(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
          />
          <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-muted-foreground mb-6">
              <span>Sobre a Evolves</span>
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-6xl lg:text-7xl text-foreground">
              Não criamos apenas sites.
              <span className="block text-muted-foreground font-normal">
                Construímos negócios digitais.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Unimos engenharia de software de ponta, acabamento editorial
              refinado e infraestrutura Cloud dedicada para posicionar empresas
              no padrão mais alto da web internacional.
            </p>
          </div>
        </div>

        <About />
      </main>
      <Footer />
    </div>
  );
}
