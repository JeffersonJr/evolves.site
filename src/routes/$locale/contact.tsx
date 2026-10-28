import { breadcrumbSchema, pageHead, siteUrl } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { localizedPath, type Locale } from "@/lib/i18n-urls";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Toaster } from "sonner";

export const Route = createFileRoute("/$locale/contact")({
  head: ({ params }) => {
    const locale = params.locale as Locale;
    return pageHead(locale, "contact", [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contato e propostas para projetos digitais",
        url: new URL(localizedPath(locale, "contact"), siteUrl).href,
        mainEntity: {
          "@type": "Organization",
          name: "Evolves Tecnologia",
          email: "contato@evolves.site",
          telephone: "+55-13-98132-6869",
        },
      },
      breadcrumbSchema([
        { name: "Início", path: localizedPath(locale, "home") },
        { name: "Contato", path: localizedPath(locale, "contact") },
      ]),
    ]);
  },
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
