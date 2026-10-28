import { breadcrumbSchema, pageHead, siteUrl } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { localizedPath, type Locale } from "@/lib/i18n-urls";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Cases } from "@/components/Cases";

export const Route = createFileRoute("/$locale/cases/")({
  head: ({ params }) => {
    const locale = params.locale as Locale;
    return pageHead(locale, "cases", [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Cases da Evolves",
        description:
          "Projetos de sites, sistemas e branding com desafios, soluções e resultados.",
        url: new URL(localizedPath(locale, "cases"), siteUrl).href,
      },
      breadcrumbSchema([
        { name: "Início", path: localizedPath(locale, "home") },
        { name: "Cases", path: localizedPath(locale, "cases") },
      ]),
    ]);
  },
  component: CasesIndexPage,
});

function CasesIndexPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Cases standalone />
      </main>
      <Footer />
    </div>
  );
}
