import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.5)] sm:p-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          Nós usamos cookies para analisar o tráfego e melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com a nossa{" "}
          <Link to="/privacy" className="text-primary font-medium underline underline-offset-4 hover:text-primary/80">
            Política de Privacidade
          </Link>{" "}
          e{" "}
          <Link to="/cookies" className="text-primary font-medium underline underline-offset-4 hover:text-primary/80">
            Política de Cookies
          </Link>.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => {
              localStorage.setItem("cookies_accepted", "true");
              setShow(false);
            }}
            className="whitespace-nowrap rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Aceitar e Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
