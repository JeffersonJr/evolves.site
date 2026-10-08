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
        name: "Sobre a Evolves",
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
        {/* Hero Section exclusiva da página Sobre */}
        <div className="relative overflow-hidden bg-[#f5f5f7] pb-16 pt-32 dark:bg-background sm:pb-24 sm:pt-40">
          <div className="mx-auto max-w-6xl px-6 text-center relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
              Conheça a Evolves
            </div>
            <h1 className="mb-6 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
              Não criamos apenas sites.
              <br className="hidden sm:block" />
              <span className="text-primary">
                Construímos negócios digitais.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Nascemos da insatisfação com as soluções padrão do mercado. Unimos
              inteligência artificial, design estratégico e engenharia robusta
              para colocar empresas na vanguarda da nova economia.
            </p>
          </div>
        </div>

        <About />
      </main>
      <Footer />
    </div>
  );
}
