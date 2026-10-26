import { useEffect, useState, type FormEvent } from "react";
import { Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";
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
    "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-border/60 bg-surface/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-primary">
            {t.contact.eyebrow}
          </p>
          <Heading
            id="contact-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl text-foreground"
          >
            {t.contact.title}
          </Heading>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {t.contact.description}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-12">
          {/* Direct Channels */}
          <div className="space-y-4 md:col-span-5">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-xs">
              <div className="flex items-center gap-3 text-primary mb-2">
                <Mail className="h-5 w-5" />
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">E-mail Corporativo</span>
              </div>
              <a
                href="mailto:contato@evolvestecnologia.com.br"
                className="text-base font-semibold text-foreground hover:text-primary transition-colors"
              >
                contato@evolvestecnologia.com.br
              </a>
              <p className="mt-1 text-xs text-muted-foreground">Retorno formal em até 24h úteis.</p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-xs">
              <div className="flex items-center gap-3 text-emerald-500 mb-2">
                <MessageCircle className="h-5 w-5" />
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">WhatsApp Comercial</span>
              </div>
              <a
                href="https://wa.me/5513981326869"
                target="_blank"
                rel="noreferrer"
                className="text-base font-semibold text-foreground hover:text-emerald-500 transition-colors"
              >
                +55 (13) 98132-6869
              </a>
              <p className="mt-1 text-xs text-muted-foreground">Atendimento direto com engenheiro de projetos.</p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-xs">
              <div className="flex items-center gap-3 text-primary mb-2">
                <MapPin className="h-5 w-5" />
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{t.footer.opsTitle}</span>
              </div>
              <p className="text-sm font-medium text-foreground">
                🇵🇹 {t.footer.countryPT} · 🇬🇧 {t.footer.countryUK} · 🇧🇷 {t.footer.countryBR} · 🇳🇿 {t.footer.countryNZ}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{t.footer.opsDesc}</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-8 md:col-span-7 shadow-xs space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
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
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
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
                <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                  {t.contact.subjectLabel}
                </label>
                <select
                  id="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={field}
                >
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
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
              className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-3.5 text-sm font-medium text-background transition hover:opacity-90 shadow-sm cursor-pointer"
            >
              <span>{t.contact.submitButton}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
