import { organizationSchema, pageHead, websiteSchema } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import type { Locale } from "@/lib/i18n-urls";
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

export const Route = createFileRoute("/$locale/")({
  head: ({ params }) =>
    pageHead(params.locale as Locale, "home", [
      organizationSchema,
      websiteSchema,
    ]),
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
