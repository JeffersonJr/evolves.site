import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TagCloud } from "@/components/TagCloud";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Cases } from "@/components/Cases";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evolves | Criação de Sites, Sistemas, Hospedagem e Branding" },
      {
        name: "description",
        content:
          "Evolves Tecnologia cria sites inteligentes, sistemas customizados, hospedagem de alta performance e branding com IA e design de vanguarda.",
      },
      {
        property: "og:title",
        content: "Evolves | Soluções Digitais com IA e Design Inteligente",
      },
      {
        property: "og:description",
        content:
          "Transformamos ideias em experiências digitais de alto impacto: sites, sistemas, hospedagem e branding.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Cases />
        <Contact />
        <TagCloud />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
