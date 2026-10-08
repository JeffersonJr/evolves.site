import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, MessageCircle, X } from "lucide-react";

const services = [
  "Sites Inteligentes",
  "Sistemas Customizados",
  "Consultoria UX/UI",
  "Hospedagem & Performance",
  "Branding & Design",
  "Outro",
];

const otherOptions = [
  "SEO e crescimento digital",
  "Integrações e automações",
  "Estratégia e consultoria digital",
  "Ainda estou definindo o que preciso",
  "Tenho outra ideia",
];

type Message = { from: "evo" | "visitor"; text: string };
type Stage = "services" | "other" | "other-details" | "name" | "channels";

function EvoAvatar({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-sm ${small ? "h-8 w-8" : "h-12 w-12"}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 40 40"
        className={small ? "h-6 w-6" : "h-9 w-9"}
        fill="none"
      >
        <path
          d="M20 5v4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="4" r="2" fill="currentColor" />
        <rect
          x="8"
          y="11"
          width="24"
          height="21"
          rx="9"
          fill="white"
          fillOpacity=".96"
        />
        <circle cx="15.5" cy="20" r="2" fill="#3978D8" />
        <circle cx="24.5" cy="20" r="2" fill="#3978D8" />
        <path
          d="M15.5 25c1.2 1.4 2.7 2 4.5 2s3.3-.6 4.5-2"
          stroke="#3978D8"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function EvoAssistant() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<Stage>("services");
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "evo",
      text: "Olá, meu nome é Evo, agente da Evolves. O que você busca para o seu negócio?",
    },
  ]);
  const [interest, setInterest] = useState("");
  const [otherDetail, setOtherDetail] = useState("");
  const [customDetail, setCustomDetail] = useState("");
  const [name, setName] = useState("");
  const [nameDraft, setNameDraft] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ block: "end" });
  }, [messages, stage, open]);

  function answer(text: string) {
    setMessages((current) => [...current, { from: "visitor", text }]);
  }

  function chooseService(service: string) {
    setInterest(service);
    answer(service);
    if (service === "Outro") {
      setMessages((current) => [
        ...current,
        {
          from: "evo",
          text: "Tudo bem. Qual dessas opções chega mais perto do que você precisa?",
        },
      ]);
      setStage("other");
      return;
    }
    setMessages((current) => [
      ...current,
      { from: "evo", text: "Legal. Como posso chamar você?" },
    ]);
    setStage("name");
  }

  function chooseOther(option: string) {
    answer(option);
    if (option === "Tenho outra ideia") {
      setMessages((current) => [
        ...current,
        {
          from: "evo",
          text: "Conte em poucas palavras o que você tem em mente.",
        },
      ]);
      setStage("other-details");
      return;
    }
    setOtherDetail(option);
    setMessages((current) => [
      ...current,
      { from: "evo", text: "Entendi. Como posso chamar você?" },
    ]);
    setStage("name");
  }

  function submitCustomDetail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const detail = customDetail.trim();
    if (!detail) return;
    setOtherDetail(detail);
    answer(detail);
    setMessages((current) => [
      ...current,
      { from: "evo", text: "Obrigado por explicar. Como posso chamar você?" },
    ]);
    setStage("name");
  }

  function submitName(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const firstName = nameDraft.trim().split(/\s+/)[0];
    if (!firstName) return;
    setName(firstName);
    answer(firstName);
    setMessages((current) => [
      ...current,
      {
        from: "evo",
        text: `Prazer, ${firstName}! Quer continuar pelo WhatsApp ou preencher o formulário?`,
      },
    ]);
    setStage("channels");
  }

  const fullInterest = otherDetail ? `Outro — ${otherDetail}` : interest;
  const whatsappMessage = [
    "Olá! Vim pelo site da Evolves e conversei com a Evo.",
    "",
    `Meu nome é ${name}.`,
    `Tenho interesse em: ${fullInterest}.`,
  ].join("\n");
  const whatsappUrl = `https://wa.me/5513981326869?text=${encodeURIComponent(whatsappMessage)}`;

  function openContactForm() {
    const message = [
      "Olá, vim pelo site da Evolves e conversei com a Evo.",
      `Tenho interesse em: ${fullInterest}.`,
      "",
      "Conte aqui um pouco mais sobre o seu projeto.",
    ].join("\n");
    sessionStorage.setItem(
      "evo-contact-prefill",
      JSON.stringify({
        name,
        subject: interest === "Outro" ? "Outro" : interest,
        message,
      }),
    );
    window.location.assign("/contact#contact");
  }

  function restart() {
    setMessages([
      {
        from: "evo",
        text: "Olá, meu nome é Evo, agente da Evolves. O que você busca para o seu negócio?",
      },
    ]);
    setStage("services");
    setInterest("");
    setOtherDetail("");
    setCustomDetail("");
    setName("");
    setNameDraft("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-[150]">
      {open && (
        <section
          className="absolute bottom-[4.5rem] right-0 flex h-[min(42rem,calc(100dvh-7.5rem))] w-[min(23rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-[0_20px_70px_-24px_rgba(15,23,42,.38)]"
          aria-label="Conversa com Evo, agente da Evolves"
        >
          <header className="flex items-center gap-3 border-b border-border/70 px-4 py-3">
            <EvoAvatar small />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">Evo</p>
              <p className="text-xs text-muted-foreground">Agente da Evolves</p>
            </div>
            <button
              type="button"
              onClick={restart}
              className="rounded-full px-2 py-1 text-xs text-muted-foreground transition hover:text-foreground"
            >
              Reiniciar
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar conversa"
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            aria-live="polite"
            role="log"
          >
            {messages.map((message, index) => (
              <div
                key={`${index}-${message.text}`}
                className={`flex items-end gap-2 ${message.from === "visitor" ? "justify-end" : "justify-start"}`}
              >
                {message.from === "evo" && <EvoAvatar small />}
                <p
                  className={`max-w-[84%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    message.from === "evo"
                      ? "rounded-bl-md bg-[#f3f4f6] text-foreground dark:bg-secondary"
                      : "rounded-br-md bg-primary text-primary-foreground"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}

            {stage === "services" && (
              <div className="ml-10 flex flex-wrap gap-2 pt-1">
                {services.map((service) => (
                  <button
                    type="button"
                    key={service}
                    onClick={() => chooseService(service)}
                    className="rounded-full border border-border bg-background px-3 py-2 text-left text-xs font-medium transition hover:border-primary/50 hover:text-primary"
                  >
                    {service}
                  </button>
                ))}
              </div>
            )}

            {stage === "other" && (
              <div className="ml-10 flex flex-col gap-2 pt-1">
                {otherOptions.map((option) => (
                  <button
                    type="button"
                    key={option}
                    onClick={() => chooseOther(option)}
                    className="rounded-xl border border-border bg-background px-3 py-2.5 text-left text-xs transition hover:border-primary/50 hover:text-primary"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {stage === "other-details" && (
              <form onSubmit={submitCustomDetail} className="ml-10 flex gap-2">
                <input
                  autoFocus
                  value={customDetail}
                  maxLength={180}
                  onChange={(event) => setCustomDetail(event.target.value)}
                  placeholder="O que você precisa?"
                  className="min-w-0 flex-1 rounded-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  aria-label="Descreva sua necessidade"
                />
                <button
                  type="submit"
                  aria-label="Enviar necessidade"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}

            {stage === "name" && (
              <form onSubmit={submitName} className="ml-10 flex gap-2">
                <input
                  autoFocus
                  value={nameDraft}
                  maxLength={80}
                  onChange={(event) => setNameDraft(event.target.value)}
                  placeholder="Seu primeiro nome"
                  autoComplete="given-name"
                  className="min-w-0 flex-1 rounded-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  aria-label="Seu primeiro nome"
                />
                <button
                  type="submit"
                  aria-label="Continuar"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
                >
                  <Check className="h-4 w-4" />
                </button>
              </form>
            )}

            {stage === "channels" && (
              <div className="ml-10 grid gap-2 pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:brightness-105"
                >
                  <MessageCircle className="h-4 w-4" />
                  Continuar pelo WhatsApp
                </a>
                <button
                  type="button"
                  onClick={openContactForm}
                  className="rounded-full border border-border bg-background px-4 py-3 text-sm font-medium transition hover:bg-secondary"
                >
                  Preencher formulário
                </button>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <p className="border-t border-border/70 px-4 py-2.5 text-center text-[11px] text-muted-foreground">
            Suas respostas só são usadas para preparar seu contato com a
            Evolves.
          </p>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Fechar conversa com Evo" : "Conversar com Evo"}
        aria-expanded={open}
        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white shadow-[0_8px_28px_-12px_rgba(15,23,42,.45)] transition-transform hover:scale-105 dark:border-border dark:bg-card"
      >
        {open ? <X className="h-5 w-5" /> : <EvoAvatar />}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-emerald-500" />
        )}
      </button>
    </div>
  );
}
