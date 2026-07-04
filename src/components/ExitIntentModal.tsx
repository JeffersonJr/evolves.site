import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "5513981326869";
const STORAGE_KEY = "evolves_exit_dismissed";

export function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const dismiss = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }, []);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    let triggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when the cursor leaves through the top of the viewport
      if (e.clientY <= 5 && !triggered) {
        triggered = true;
        setIsOpen(true);
      }
    };

    // Small delay so it doesn't fire on initial page load
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
    const text = `Olá, me chamo ${formData.name}.\nMeu e-mail é ${formData.email}.\n\n${formData.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    dismiss();
    setFormData({ name: "", email: "", message: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg rounded-4xl border border-border bg-card p-8 sm:p-10 shadow-[var(--shadow-card)] animate-fade-up relative overflow-hidden">
        {/* Decorative gradient blob */}
        <div className="absolute -top-20 -right-20 w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={dismiss}
          className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative z-10">
          <div className="mb-2 text-4xl">👋</div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Espere! Antes de ir...
          </h3>
          <p className="text-muted-foreground mb-8 max-w-sm">
            Que tal uma conversa rápida? Nos conte sobre seu projeto e receba uma proposta sob medida. Sem compromisso.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="exit-name" className="block text-sm font-medium mb-1">Nome</label>
                <input
                  id="exit-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="exit-email" className="block text-sm font-medium mb-1">E-mail</label>
                <input
                  id="exit-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="exit-msg" className="block text-sm font-medium mb-1">Como podemos ajudar?</label>
              <textarea
                id="exit-msg"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm min-h-[80px] resize-none focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Descreva brevemente o que precisa..."
              />
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Enviar pelo WhatsApp
            </button>
          </form>

          <button
            onClick={dismiss}
            className="mt-4 w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Não, obrigado. Quero sair.
          </button>
        </div>
      </div>
    </div>
  );
}
