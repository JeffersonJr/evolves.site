import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "lgpd_consent";

export function LgpdModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[300] w-[calc(100%-2rem)] max-w-xl animate-fade-up">
      <div className="rounded-2xl border border-border bg-card/95 backdrop-blur-xl px-5 py-4 shadow-[var(--shadow-card)] flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie className="h-5 w-5 text-primary shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-xs text-muted-foreground leading-relaxed flex-1">
          Usamos cookies para melhorar sua experiência.{" "}
          <Link to="/privacy" className="text-primary font-medium underline underline-offset-2 hover:text-primary/80">
            Saiba mais
          </Link>
        </p>
        <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
          <button
            onClick={decline}
            className="cursor-pointer flex-1 sm:flex-none rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="cursor-pointer flex-1 sm:flex-none rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
