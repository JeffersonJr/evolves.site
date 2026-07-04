import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Cases } from "@/components/Cases";

export const Route = createFileRoute("/cases/")({
  component: CasesIndexPage,
});

function CasesIndexPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Cases />
      </main>
      <Footer />
    </div>
  );
}
