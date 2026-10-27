import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare, HelpCircle } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

export function Faq() {
  const { t, language } = useI18n();

  const getFaqs = () => {
    if (language === "en" || language.startsWith("en")) {
      return [
        {
          id: "item-1",
          question:
            "How does project management and collaboration work for international clients?",
          answer:
            "We collaborate routinely with partners across multiple time zones (UK, Europe, New Zealand, and the Americas). We work via an asynchronous client dashboard, direct Slack/WhatsApp priority channels, and targeted Google Meet sessions. We strictly honor commercial hours and agreed milestone timelines.",
        },
        {
          id: "item-2",
          question:
            "What international invoicing and payment methods are supported?",
          answer:
            "We adapt to your business jurisdiction:\n• European & Global Clients: SEPA bank transfer, MB WAY, Wise, or corporate credit cards billed in Euros (€) or USD ($).\n• Brazilian Clients: PIX, Boleto, or corporate card installments up to 12x with electronic invoice (NFS-e).",
        },
        {
          id: "item-3",
          question:
            "What is the typical delivery timeframe for a production website?",
          answer:
            "Our agile delivery timeframe is 10 to 30 business days across our production tiers. For critical launch deadlines, an expedited roadmap can be scheduled during the initial technical briefing.",
        },
        {
          id: "item-4",
          question: "Does my company 100% own the source code and domain?",
          answer:
            "Yes, without exception. Your company retains full legal and technical ownership of your domain, custom UI designs, and all application source code. We never practice vendor lock-in.",
        },
        {
          id: "item-5",
          question: "Is the monthly cloud maintenance plan mandatory?",
          answer:
            "The managed plan provides high-speed isolated cloud infrastructure, daily automated backups, active SSL certificates, and continuous monitoring. If your company prefers hosting on its own internal cloud (AWS, GCP, or Hetzner), we conduct the deployment and hand over full access with no recurring retainers.",
        },
        {
          id: "item-6",
          question: "How do you guarantee strict GDPR and LGPD compliance?",
          answer:
            "We implement granular cookie consent managers, transparent privacy policies, end-to-end encrypted contact forms, and data retention standards to protect your corporate reputation.",
        },
      ];
    }

    if (language === "es") {
      return [
        {
          id: "item-1",
          question:
            "¿Cómo funciona la gestión y colaboración para clientes internacionales?",
          answer:
            "Trabajamos habitualmente con clientes en múltiples husos horarios (Europa, Reino Unido, Nueva Zelanda y América Latina). El seguimiento es asíncrono y transparente mediante portal de estado, canales directos de WhatsApp/Slack y reuniones puntuales por Google Meet.",
        },
        {
          id: "item-2",
          question:
            "¿Cuáles son las opciones de facturación y métodos de pago aceptados?",
          answer:
            "Adaptamos el pago a la jurisdicción de su empresa:\n• Europa e Internacional: Transferencia bancaria SEPA, MB WAY, Wise o tarjeta en Euros (€) o USD ($).\n• Brasil: PIX, transferencia o tarjeta corporativa en hasta 12 cuotas con Factura Electrónica (NFS-e).",
        },
        {
          id: "item-3",
          question: "¿Cuál es el plazo medio para publicar mi sitio web?",
          answer:
            "El plazo de entrega ágil es de 10 a 30 días hábiles según el alcance técnico del proyecto. Para fechas críticas de lanzamiento, acordamos un cronograma prioritario.",
        },
        {
          id: "item-4",
          question:
            "¿El código fuente y el dominio pertenecen 100% a mi empresa?",
          answer:
            "Sí, totalmente. Su empresa es la única propietaria del dominio, diseño y todo el código desarrollado. Cero bloqueo de proveedor (vendor lock-in).",
        },
        {
          id: "item-5",
          question: "¿El mantenimiento y hosting mensual es obligatorio?",
          answer:
            "Incluye infraestructura Cloud dedicada, copias de seguridad diarias, certificados SSL y soporte técnico. Si dispone de servidores propios (AWS, Hetzner), realizamos el despliegue inicial sin cuotas recurrentes.",
        },
        {
          id: "item-6",
          question:
            "¿Cómo se garantiza el cumplimiento del RGPD europeo y la LGPD?",
          answer:
            "Instalamos gestores de cookies certificados, políticas de privacidad transparentes y formularios cifrados de extremo a extremo.",
        },
      ];
    }

    // Default Portuguese (pt-BR / pt-PT / fr / it fallback)
    return [
      {
        id: "item-1",
        question:
          "Como funciona o atendimento e a gestão de projetos para clientes internacionais?",
        answer:
          "Trabalhamos rotineiramente com clientes e equipas em múltiplos fusos horários (Portugal, Reino Unido, Nova Zelândia e Brasil). O acompanhamento é feito de forma assíncrona e transparente por portal de status, canais diretos de WhatsApp / Slack e reuniões pontuais por Google Meet. Respeitamos rigorosamente os horários comerciais e os cronogramas estabelecidos contratualmente.",
      },
      {
        id: "item-2",
        question:
          "Quais são as opções de faturação e métodos de pagamento aceites?",
        answer:
          "Adaptamos a faturação e o meio de pagamento à jurisdição da sua empresa:\n• Clientes na Europa e Internacional: Transferência bancária SEPA, pagamentos via MB WAY, Wise ou faturação eletrónica emitida em Euros (€) ou Dólares ($).\n• Clientes no Brasil: PIX, Boleto bancário ou Cartão de Crédito corporativo em até 12x, com emissão de Nota Fiscal de Serviços eletrónica (NFS-e).",
      },
      {
        id: "item-3",
        question: "Qual é o prazo médio para o meu site estar no ar?",
        answer:
          "Prazo de entrega ágil: 10 a 30 dias úteis, calibrado de acordo com a complexidade e o escopo acordados (de landing pages diretas a plataformas corporativas completas). Caso a sua empresa possua uma data crítica de lançamento, definimos um cronograma de aceleração dedicado logo no briefing inicial.",
      },
      {
        id: "item-4",
        question: "O código-fonte e o domínio pertencem 100% à minha empresa?",
        answer:
          "Sim, sem exceções. A sua empresa é a proprietária exclusiva do domínio, da identidade visual e de todo o código-fonte desenvolvido. Não praticamos qualquer forma de retenção técnica ('vendor lock-in'). Se no futuro preferir internalizar ou migrar para outra infraestrutura, todos os acessos e arquivos são fornecidos imediatamente.",
      },
      {
        id: "item-5",
        question: "A manutenção e hospedagem mensal é obrigatória?",
        answer:
          "A mensalidade inclui a nossa infraestrutura Cloud dedicada de alta performance, backups automáticos diários, certificados SSL sempre válidos, proteção contra ataques e suporte contínuo. Caso a sua empresa possua equipa interna de TI e prefira hospedar nos seus próprios servidores (AWS, Google Cloud ou Hetzner), realizamos o deploy inicial e encerramos a entrega sem mensalidades recorrentes.",
      },
      {
        id: "item-6",
        question:
          "Como é tratada a conformidade com o RGPD (GDPR europeu) e a LGPD brasileira?",
        answer:
          "Implementamos banners de consentimento de cookies granulares, políticas de privacidade claras, formulários de contacto com criptografia de ponta a ponta e respeito às diretrizes de retenção e eliminação de dados de navegação, protegendo a reputação jurídica da sua empresa.",
      },
    ];
  };

  const faqs = getFaqs();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative border-t border-black/[0.08] bg-background py-24 sm:py-32 dark:border-white/[0.08]"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-[11px] font-mono tracking-wider text-primary uppercase dark:border-white/[0.08] dark:bg-white/[0.03]">
            <HelpCircle className="h-3 w-3" />
            <span>{t.faq.eyebrow}</span>
          </div>

          <h2
            id="faq-heading"
            className="mt-4 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-5xl"
          >
            {t.faq.title}
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            {t.faq.description}
          </p>
        </div>

        {/* Accordion Component */}
        <div className="mt-12 rounded-2xl border border-black/[0.08] bg-card p-6 sm:p-8 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f) => (
              <AccordionItem
                key={f.id}
                value={f.id}
                className="border-black/[0.06] py-2 dark:border-white/[0.06]"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline hover:text-primary transition-colors text-sm sm:text-base cursor-pointer">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed whitespace-pre-line pt-2 pb-4">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Extra question helper */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <MessageSquare className="h-4 w-4 text-primary" />
          <span>{t.faq.needHelp}</span>
          <a
            href="https://wa.me/5513981326869?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20espec%C3%ADfica%20antes%20de%20iniciar%20meu%20projeto%20com%20a%20Evolves."
            target="_blank"
            rel="noreferrer"
            className="text-primary font-mono hover:underline"
          >
            {t.faq.chatWhatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
