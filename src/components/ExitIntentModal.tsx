import { useState, useEffect, useCallback } from "react";
import { X, ArrowUpRight } from "lucide-react";
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
    /* Backdrop */
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-modal-headline"
      className="fixed inset-0 z-[200] flex items-end justify-center p-4 sm:items-center"
    >
      {/* Scrim */}
      <div
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-lg animate-fade-up overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
        {/* Subtle top accent line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground cursor-pointer"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="px-8 pb-8 pt-8 sm:px-10 sm:pb-10 sm:pt-9">
          {/* Eyebrow */}
          <p className="text-[11px] font-mono uppercase tracking-widest text-primary">
            {t.exitModal.eyebrow}
          </p>

          {/* Headline */}
          <h2
            id="exit-modal-headline"
            className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            {t.exitModal.headline}
          </h2>

          {/* Subtext */}
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {t.exitModal.subtext}
          </p>

          {submitted ? (
            /* Success state */
            <div className="mt-8 flex flex-col items-center gap-3 py-6 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <p className="text-sm font-medium text-foreground">
                Mensagem enviada com sucesso!
              </p>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="mt-7 space-y-3">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <input
                    id="exit-name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder={t.exitModal.namePlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    id="exit-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder={t.exitModal.emailPlaceholder}
                  />
                </div>
              </div>

              <textarea
                id="exit-msg"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={3}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder={t.exitModal.messagePlaceholder}
              />

              {/* Actions */}
              <div className="flex flex-col gap-2 pt-1">
                <button
                  type="submit"
                  className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:opacity-90"
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
