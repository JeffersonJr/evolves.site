import { useEffect, useState, type FormEvent } from "react";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { toast } from "sonner";

const info = [
  {
    icon: Mail,
    label: "Email",
    value: "contato@evolves.site",
    href: "mailto:contato@evolves.site",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+55 (13) 98132-6869",
    href: "https://wa.me/5513981326869",
  },
  { icon: MapPin, label: "Localização", value: "São Paulo, Brasil" },
];

const subjects = [
  "Sites Inteligentes",
  "Sistemas Customizados",
  "Consultoria UX/UI",
  "Hospedagem & Performance",
  "Branding & Design",
  "Outro",
];

export function Contact({ standalone = false }: { standalone?: boolean } = {}) {
  const Heading = standalone ? "h1" : "h2";
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
          : "Outro",
        message: prefill.message ?? current.message,
      }));
    } catch {
      sessionStorage.removeItem("evo-contact-prefill");
    }
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      toast.error("Por favor, preencha nome, email e mensagem.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Informe um email válido.");
      return;
    }

    const text = `Olá, vim pelo site da Evolves${message.includes("Evo") ? " e conversei com a Evo" : ""}!\n\nNome: ${name}\nE-mail: ${email}\nAssunto: ${form.subject}\n\n${message}`;
    const url = `https://wa.me/5513981326869?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    toast.success("Abrindo WhatsApp para enviar a solicitação.");
  }

  const field =
    "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-surface py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Heading
            id="contact-heading"
            className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Vamos evoluir seu projeto?
          </Heading>
          <p className="mt-5 text-lg text-muted-foreground">
            Entre em contato hoje mesmo e descubra como podemos transformar seu
            negócio com tecnologia inteligente.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-5">
          <div className="space-y-4 md:col-span-2">
            {info.map((i) => (
              <div
                key={i.label}
                className="flex items-start gap-4 rounded-3xl bg-background p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center text-primary">
                  <i.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{i.label}</p>
                  {i.href ? (
                    <a
                      href={i.href}
                      target={i.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        i.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="font-medium hover:text-primary"
                    >
                      {i.value}
                    </a>
                  ) : (
                    <p className="font-medium">{i.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex items-center gap-4 pt-4 border-t border-border/50">
              <a
                href="https://www.linkedin.com/company/71072104/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors hover:text-primary"
                aria-label="LinkedIn Evolves"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://wa.me/5513981326869"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors hover:text-primary"
                aria-label="WhatsApp da Evolves"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            toolname="submit_project_inquiry"
            tooldescription="Prepare uma solicitação de contato para a Evolves com nome, e-mail, assunto e mensagem. O visitante deve revisar e clicar em enviar para abrir o WhatsApp."
            className="space-y-4 rounded-4xl bg-background p-6 sm:p-8 md:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">Nome</label>
                <input
                  id="contact-name"
                  name="name"
                  className={field}
                  required
                  value={form.name}
                  maxLength={100}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  className={field}
                  value={form.email}
                  maxLength={255}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="voce@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium">
                Assunto
              </label>
              <select
                id="contact-subject"
                name="subject"
                className={field}
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              >
                {subjects.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
                Mensagem
              </label>
              <textarea
                id="contact-message"
                name="message"
                className={`${field} min-h-32 resize-none`}
                required
                value={form.message}
                maxLength={1000}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Conte sobre seu projeto..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-transform hover:scale-[1.01]"
            >
              Enviar solicitação
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
