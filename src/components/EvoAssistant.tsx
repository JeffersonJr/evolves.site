import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, Check, MessageCircle, X } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

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
  const { t, language } = useI18n();
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<Stage>("services");
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "evo",
      text: t.assistant.initialGreeting,
    },
  ]);
  const [interest, setInterest] = useState("");
  const [otherDetail, setOtherDetail] = useState("");
  const [customDetail, setCustomDetail] = useState("");
  const [name, setName] = useState("");
  const [nameDraft, setNameDraft] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // When language changes and conversation is at the start, refresh initial greeting
  useEffect(() => {
    if (stage === "services" && messages.length <= 1) {
      setMessages([
        {
          from: "evo",
          text: t.assistant.initialGreeting,
        },
      ]);
    }
  }, [language, t.assistant.initialGreeting, stage, messages.length]);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ block: "end" });
  }, [messages, stage, open]);

  function answer(text: string) {
    setMessages((current) => [...current, { from: "visitor", text }]);
  }

  function chooseService(service: string) {
    setInterest(service);
    answer(service);
    const lastServiceIndex = t.assistant.services.length - 1;
    if (service === t.assistant.services[lastServiceIndex]) {
      setMessages((current) => [
        ...current,
        {
          from: "evo",
          text: t.assistant.whichClosest,
        },
      ]);
      setStage("other");
      return;
    }
    setMessages((current) => [
      ...current,
      { from: "evo", text: t.assistant.howToCallYou },
    ]);
    setStage("name");
  }

  function chooseOther(option: string) {
    answer(option);
    const lastOptionIndex = t.assistant.otherOptions.length - 1;
    if (option === t.assistant.otherOptions[lastOptionIndex]) {
      setMessages((current) => [
        ...current,
        {
          from: "evo",
          text: t.assistant.tellInFewWords,
        },
      ]);
      setStage("other-details");
      return;
    }
    setOtherDetail(option);
    setMessages((current) => [
      ...current,
      { from: "evo", text: t.assistant.howToCallYou },
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
      { from: "evo", text: t.assistant.thanksExplaining },
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
        text: `${t.assistant.pleasedMeeting}, ${firstName}! ${t.assistant.channelsPrompt}`,
      },
    ]);
    setStage("channels");
  }

  const fullInterest = otherDetail ? `${interest} — ${otherDetail}` : interest;
  const whatsappMessage = [
    t.assistant.whatsappIntro,
    "",
    `Nome: ${name}`,
    `Interesse / Scope: ${fullInterest}`,
    `Idioma: ${language}`,
  ].join("\n");
  const whatsappUrl = `https://wa.me/5513981326869?text=${encodeURIComponent(whatsappMessage)}`;

  function openContactForm() {
    const message = [
      t.assistant.whatsappIntro,
      `Interesse: ${fullInterest}`,
      "",
    ].join("\n");
    sessionStorage.setItem(
      "evo-contact-prefill",
      JSON.stringify({
        name,
        subject: interest,
        message,
      }),
    );
    window.location.assign("/contact#contact");
  }

  function restart() {
    setMessages([
      {
        from: "evo",
        text: t.assistant.initialGreeting,
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
          className="absolute bottom-[4.5rem] right-0 flex h-[min(42rem,calc(100dvh-7.5rem))] w-[min(24rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-[0_20px_70px_-24px_rgba(15,23,42,.38)] backdrop-blur-2xl"
          aria-label={t.assistant.agentTitle}
        >
          <header className="flex items-center gap-3 border-b border-border/70 px-4 py-3 bg-surface/50">
            <EvoAvatar small />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">{t.assistant.agentTitle}</p>
              <p className="text-xs text-muted-foreground">
                {t.assistant.agentSub}
              </p>
            </div>
            <button
              type="button"
              onClick={restart}
              className="rounded-full px-2.5 py-1 text-xs text-muted-foreground transition hover:bg-secondary hover:text-foreground cursor-pointer"
            >
              {t.assistant.restart}
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.assistant.close}
              className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-foreground cursor-pointer"
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
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${
                    message.from === "evo"
                      ? "rounded-bl-md bg-secondary text-foreground"
                      : "rounded-br-md bg-primary text-primary-foreground font-medium"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}

            {stage === "services" && (
              <div className="space-y-1.5 pt-2">
                {t.assistant.services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => chooseService(service)}
                    className="flex w-full items-center justify-between rounded-xl border border-border bg-card px-3.5 py-2.5 text-left text-xs font-medium text-foreground transition hover:border-primary/50 hover:bg-secondary/60 cursor-pointer"
                  >
                    <span>{service}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </button>
                ))}
              </div>
            )}

            {stage === "other" && (
              <div className="space-y-1.5 pt-2">
                {t.assistant.otherOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => chooseOther(opt)}
                    className="flex w-full items-center justify-between rounded-xl border border-border bg-card px-3.5 py-2.5 text-left text-xs font-medium text-foreground transition hover:border-primary/50 hover:bg-secondary/60 cursor-pointer"
                  >
                    <span>{opt}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </button>
                ))}
              </div>
            )}

            {stage === "other-details" && (
              <form onSubmit={submitCustomDetail} className="pt-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customDetail}
                    onChange={(e) => setCustomDetail(e.target.value)}
                    placeholder={t.assistant.placeholder}
                    className="flex-1 rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:brightness-105 cursor-pointer"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            )}

            {stage === "name" && (
              <form onSubmit={submitName} className="pt-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={nameDraft}
                    onChange={(e) => setNameDraft(e.target.value)}
                    placeholder={t.contact.nameLabel}
                    className="flex-1 rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="rounded-xl bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:brightness-105 cursor-pointer"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </form>
            )}

            {stage === "channels" && (
              <div className="space-y-2 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-medium text-white transition hover:brightness-105 shadow-xs"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{t.assistant.continueWhatsapp}</span>
                </a>
                <button
                  type="button"
                  onClick={openContactForm}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-medium text-foreground transition hover:bg-secondary cursor-pointer"
                >
                  <span>{t.assistant.fillForm}</span>
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </section>
      )}

      {/* Floating launcher button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={t.assistant.agentTitle}
        aria-expanded={open}
        className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white shadow-[0_8px_28px_-12px_rgba(15,23,42,.45)] transition-transform hover:scale-105 dark:border-border dark:bg-card cursor-pointer"
      >
        <EvoAvatar />
        <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-emerald-500"></span>
      </button>
    </div>
  );
}
