import { breadcrumbSchema, pageHead, siteUrl } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Toaster } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead("/contact", [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contato e propostas para projetos digitais",
        url: new URL("/contact", siteUrl).href,
        mainEntity: {
          "@type": "Organization",
          name: "Evolves Tecnologia",
          email: "contato@evolves.site",
          telephone: "+55-13-98132-6869",
        },
      },
      breadcrumbSchema([
        { name: "Início", path: "/" },
        { name: "Contato", path: "/contact" },
      ]),
    ]),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Contact standalone />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
