import { breadcrumbSchema, pageHead, siteUrl } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { localizedPath, type Locale } from "@/lib/i18n-urls";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";

export const Route = createFileRoute("/$locale/services/")({
  head: ({ params }) => {
    const locale = params.locale as Locale;
    return pageHead(locale, "services", [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Serviços da Evolves",
        description:
          "Criação de sites, sistemas customizados, SEO técnico, hospedagem cloud, branding B2B, UX/UI e soluções digitais para empresas.",
        url: new URL(localizedPath(locale, "services"), siteUrl).href,
      },
      breadcrumbSchema([
        { name: "Início", path: localizedPath(locale, "home") },
        { name: "Serviços", path: localizedPath(locale, "services") },
      ]),
    ]);
  },
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Services standalone />
      </main>
      <Footer />
    </div>
  );
}
