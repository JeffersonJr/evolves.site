import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";

export const Route = createFileRoute("/services/")({
  head: () => pageHead("/services"),
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
