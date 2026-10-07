import { pageHead } from "@/lib/seo";
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
  head: () => pageHead("/"),
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
