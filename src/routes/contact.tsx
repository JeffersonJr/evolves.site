import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { Toaster } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("/contact"),
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
