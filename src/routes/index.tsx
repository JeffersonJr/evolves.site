import { organizationSchema, pageHead, websiteSchema } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Cases } from "@/components/Cases";
import { Infrastructure } from "@/components/Infrastructure";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead("/", [organizationSchema, websiteSchema], {
      title:
        "Evolves® · Engenharia Digital & Plataformas Web de Alta Performance",
      description:
        "Estúdio de desenvolvimento de websites corporativos, landing pages de alta conversão e infraestrutura em nuvem de alta velocidade para empresas na Europa e no Brasil.",
    }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Cases />
        <Infrastructure />
        <Services />
        <Process />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
