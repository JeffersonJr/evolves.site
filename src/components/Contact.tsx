import { useEffect, useState, type FormEvent } from "react";
import { Mail, MessageCircle, MapPin, ArrowRight, Send } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "@/contexts/I18nContext";

export function Contact({ standalone = false }: { standalone?: boolean } = {}) {
  const Heading = standalone ? "h1" : "h2";
  const { t } = useI18n();

  const subjects = t.assistant.services;

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: subjects[0],
    message: "",
  });

  useEffect(() => {
    const saved = sessionStorage.getItem("evo-contact-prefill");
    if (!saved) return;
    sessionStorage.removeItem("evo-contact-prefill");
    try {
      const prefill = JSON.parse(saved) as {
        name?: string;
        subject?: string;
        message?: string;
      };
      setForm((current) => ({
        ...current,
        name: prefill.name ?? current.name,
        subject: subjects.includes(prefill.subject ?? "")
          ? prefill.subject!
          : subjects[0],
        message: prefill.message ?? current.message,
      }));
    } catch {
      sessionStorage.removeItem("evo-contact-prefill");
    }
  }, [subjects]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Informe um e-mail corporativo válido.");
      return;
    }

    const text = `Olá, vim pelo site da Evolves!\n\nNome: ${name}\nE-mail: ${email}\nAssunto: ${form.subject}\n\nMensagem:\n${message}`;
    const url = `https://wa.me/5513981326869?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    toast.success("Abrindo WhatsApp para enviar a proposta diretamente.");
  }

  const field =
    "w-full rounded-xl border border-black/[0.08] bg-card px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50 focus:border-primary/60 focus:ring-1 focus:ring-primary/40 dark:border-white/[0.08] dark:bg-black/30 shadow-xs";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative border-t border-black/[0.08] bg-surface/20 py-24 sm:py-32 dark:border-white/[0.08]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-[11px] font-mono tracking-wider text-primary uppercase dark:border-white/[0.08] dark:bg-white/[0.03]">
            <Send className="h-3 w-3" />
            <span>{t.contact.eyebrow}</span>
          </div>

          <Heading
            id="contact-heading"
            className="mt-4 text-balance text-3xl font-medium tracking-tight sm:text-5xl text-foreground"
          >
            {t.contact.title}
          </Heading>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            {t.contact.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-12">
          {/* Direct Channels */}
          <div className="space-y-4 md:col-span-5">
            <div className="rounded-2xl border border-black/[0.08] bg-card p-6 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]">
              <div className="flex items-center gap-3 text-primary mb-2">
                <Mail className="h-4 w-4" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                  E-mail Corporativo
                </span>
              </div>
              <a
                href="mailto:contato@evolvestecnologia.com.br"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                contato@evolvestecnologia.com.br
              </a>
              <p className="mt-1 text-xs text-muted-foreground font-mono">
                Retorno formal em até 24h úteis.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.08] bg-card p-6 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]">
              <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 mb-2">
                <MessageCircle className="h-4 w-4" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                  WhatsApp Corporativo
                </span>
              </div>
              <a
                href="https://wa.me/5513981326869"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-foreground hover:text-emerald-500 transition-colors font-mono"
              >
                +55 (13) 98132-6869
              </a>
              <p className="mt-1 text-xs text-muted-foreground font-mono">
                Atendimento direto com engenheiro de software.
              </p>
            </div>

            <div className="rounded-2xl border border-black/[0.08] bg-card p-6 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]">
              <div className="flex items-center gap-3 text-primary mb-2">
                <MapPin className="h-4 w-4" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                  {t.footer.opsTitle}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-foreground">
                🇵🇹 {t.footer.countryPT} · 🇬🇧 {t.footer.countryUK} · 🇧🇷{" "}
                {t.footer.countryBR} · 🇳🇿 {t.footer.countryNZ}
              </p>
              <p className="mt-1 text-xs text-muted-foreground font-mono">
                {t.footer.opsDesc}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-black/[0.08] bg-card p-7 md:col-span-7 shadow-xs space-y-5 dark:border-white/[0.08] dark:bg-white/[0.02]"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2"
              >
                {t.contact.nameLabel}
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Ex: Carlos Silva"
                className={field}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="email"
                  className="block text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2"
                >
                  {t.contact.emailLabel}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="carlos@empresa.com"
                  className={field}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2"
                >
                  {t.contact.subjectLabel}
                </label>
                <select
                  id="subject"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.target.value })
                  }
                  className={field}
                >
                  {subjects.map((s) => (
                    <option
                      key={s}
                      value={s}
                      className="bg-zinc-900 text-white"
                    >
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-2"
              >
                {t.contact.messageLabel}
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Descreva o escopo, prazo desejado e requisitos..."
                className={field}
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-3 text-xs font-medium text-background transition hover:opacity-90 shadow-sm cursor-pointer"
            >
              <span>{t.contact.submitButton}</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
