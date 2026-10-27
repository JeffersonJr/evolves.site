import { useState, useEffect, useCallback } from "react";
import { X, ArrowUpRight, Sparkles } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

const WHATSAPP_NUMBER = "5513981326869";
const STORAGE_KEY = "evolves_exit_dismissed";

export function ExitIntentModal() {
  const { t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const dismiss = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !triggered) {
        triggered = true;
        setIsOpen(true);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `${formData.name}\n${formData.email}\n\n${formData.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      dismiss();
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 1800);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-modal-headline"
      className="fixed inset-0 z-[200] flex items-end justify-center p-4 sm:items-center"
    >
      {/* Scrim */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-xl animate-fade-up overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[0_32px_80px_rgba(0,0,0,0.28)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.6)]">

        {/* Top gradient bar */}
        <div className="h-[3px] w-full bg-gradient-to-r from-primary/0 via-primary to-primary/0" />

        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-secondary hover:text-foreground hover:rotate-90 cursor-pointer duration-200"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="px-7 pb-7 pt-7 sm:px-9 sm:pb-9 sm:pt-8">

          {/* Header */}
          <div className="flex items-start gap-4">
            {/* Icon accent */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <Sparkles className="h-5 w-5" strokeWidth={1.5} />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary">
                {t.exitModal.eyebrow}
              </p>
              <h2
                id="exit-modal-headline"
                className="mt-1 text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
              >
                {t.exitModal.headline}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {t.exitModal.subtext}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 h-px bg-border/60" />

          {submitted ? (
            /* Success state */
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Mensagem enviada!
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Em breve entraremos em contato.
                </p>
              </div>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  id="exit-name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/15"
                  placeholder={t.exitModal.namePlaceholder}
                />
                <input
                  id="exit-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/15"
                  placeholder={t.exitModal.emailPlaceholder}
                />
              </div>

              <textarea
                id="exit-msg"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={3}
                className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/15"
                placeholder={t.exitModal.messagePlaceholder}
              />

              {/* Actions */}
              <div className="flex flex-col gap-2 pt-1">
                <button
                  type="submit"
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  <span>{t.exitModal.submitBtn}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={dismiss}
                  className="w-full cursor-pointer py-2 text-center text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t.exitModal.dismissBtn}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
