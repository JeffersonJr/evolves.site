import { breadcrumbSchema, pageHead, siteUrl } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Cases } from "@/components/Cases";

export const Route = createFileRoute("/cases/")({
  head: () =>
    pageHead("/cases", [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Cases da Evolves",
        description:
          "Projetos de sites, sistemas e branding com desafios, soluções e resultados.",
        url: new URL("/cases", siteUrl).href,
      },
      breadcrumbSchema([
        { name: "Início", path: "/" },
        { name: "Cases", path: "/cases" },
      ]),
    ]),
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
