import { useRegion, type Region } from "@/contexts/RegionContext";
import { useI18n } from "@/contexts/I18nContext";
import { CurrencyToggle } from "./CurrencyToggle";
import { Check, ArrowRight, ShieldCheck, Server, Lock, RefreshCw, Headphones, Zap } from "lucide-react";

interface PlanItem {
  name: string;
  target: string;
  price: string;
  priceSub: string;
  maintenance: string;
  maintenancePeriod: string;
  highlight: boolean;
  badge?: string;
  features: string[];
  paymentNotes: string;
  ctaText: string;
  ctaHref: string;
}

export function Pricing() {
  const { region, currencySymbol } = useRegion();
  const { t, language } = useI18n();

  const getLocalizedPlans = (): PlanItem[] => {
    // ── 1. USD ($) — GLOBAL / INTERNATIONAL ──
    if (region === "USD") {
      if (language === "en") {
        return [
          {
            name: "Start Plan",
            target: "Independent consultants, boutique clinics, and high-conversion landing pages.",
            price: "$400 – $600",
            priceSub: "one-time engineering investment",
            maintenance: "$25",
            maintenancePeriod: "mo",
            highlight: false,
            features: [
              "High-converting landing page (bespoke editorial UI)",
              "Sub-second load times & Core Web Vitals 95+",
              "Direct WhatsApp & corporate email integration",
              "Spam-protected contact forms with telemetry",
              "Technical on-page SEO & OpenGraph metadata",
              "Delivery turnaround: 5 to 10 business days",
            ],
            paymentNotes: "Stripe, Wise, Wire Transfer, or Corporate Card in USD.",
            ctaText: "Select Start Plan ($)",
            ctaHref: "https://wa.me/5513981326869?text=Hello%2C%20I%20am%20interested%20in%20the%20Start%20Plan%20(USD)%20from%20Evolves.",
          },
          {
            name: "Pro Plan",
            target: "Established companies requiring corporate authority, multi-pages, and global SEO.",
            price: "$850 – $1,350",
            priceSub: "one-time engineering investment",
            maintenance: "$40",
            maintenancePeriod: "mo",
            highlight: true,
            badge: t.pricing.recommended || "Recommended",
            features: [
              "Multi-page corporate website (Home, About, Services, Contact)",
              "SEO-engineered Blog or Knowledge Base for organic acquisition",
              "Prepared multilingual architecture (EN / ES / PT / FR)",
              "GA4, Google Tag Manager & Meta Pixel conversion tracking",
              "CRM or automated booking calendar integration",
              "Headless CMS for effortless content publishing",
              "Delivery turnaround: 10 to 20 business days",
            ],
            paymentNotes: "Billed in USD. Installments or milestone-based payments available.",
            ctaText: "Choose Pro Plan ($)",
            ctaHref: "https://wa.me/5513981326869?text=Hello%2C%20I%20would%20like%20to%20start%20the%20Pro%20Plan%20(USD)%20with%20Evolves.",
          },
          {
            name: "Max Plan",
            target: "High-volume e-commerce, custom SaaS, and tailored web applications.",
            price: "From $1,700",
            priceSub: "tailored software development",
            maintenance: "$60",
            maintenancePeriod: "mo",
            highlight: false,
            features: [
              "Full e-commerce platform (Stripe, PayPal, global checkout)",
              "Real-time calendar booking and member management portals",
              "REST / GraphQL API integrations with ERP and billing systems",
              "Dedicated isolated cloud cluster for heavy concurrent traffic",
              "Strict security hardening and automated daily backups",
              "Direct consultation with Senior Software Architect",
            ],
            paymentNotes: "Milestone-based contract with guaranteed SLA.",
            ctaText: "Request Custom Proposal ($)",
            ctaHref: "https://wa.me/5513981326869?text=Hello%2C%20I%20need%20a%20custom%20proposal%20for%20the%20Max%20Plan%20(USD).",
          },
        ];
      }

      if (language === "es") {
        return [
          {
            name: "Plan Start",
            target: "Consultores, clínicas privadas y profesionales de alto impacto.",
            price: "$400 a $600",
            priceSub: "inversión única de desarrollo",
            maintenance: "$25",
            maintenancePeriod: "mes",
            highlight: false,
            features: [
              "Landing page de alta conversión (diseño editorial a medida)",
              "Carga sub-segundo optimizada para móviles (< 1.2s)",
              "Integración con WhatsApp comercial y correo corporativo",
              "Formularios seguros con protección anti-spam nativa",
              "SEO técnico on-page para indexación global en Google",
              "Plazo de entrega: 5 a 10 días hábiles",
            ],
            paymentNotes: "Pago vía Stripe, Wise o tarjeta en USD ($).",
            ctaText: "Seleccionar Plan Start ($)",
            ctaHref: "https://wa.me/5513981326869?text=Hola%2C%20me%20interesa%20el%20Plan%20Start%20(USD)%20de%20Evolves.",
          },
          {
            name: "Plan Pro",
            target: "Empresas consolidadas que requieren presencia corporativa y SEO orgánico.",
            price: "$850 a $1.350",
            priceSub: "inversión única de desarrollo",
            maintenance: "$40",
            maintenancePeriod: "mes",
            highlight: true,
            badge: t.pricing.recommended || "Recomendado",
            features: [
              "Sitio web corporativo multipágina (Inicio, Empresa, Servicios, etc.)",
              "Estructura de Blog optimizada para posicionamiento orgánico",
              "Arquitectura multilingüe preparada (ES / EN / PT)",
              "Integración Google Analytics 4, Tag Manager y Meta Pixel",
              "Integración con CRM de ventas o reservas online",
              "Panel de edición intuitivo sin complejidad técnica",
              "Plazo de entrega: 10 a 20 días hábiles",
            ],
            paymentNotes: "Facturación internacional en USD ($). Pago en etapas.",
            ctaText: "Contratar Plan Pro ($)",
            ctaHref: "https://wa.me/5513981326869?text=Hola%2C%20quiero%20iniciar%20el%20Plan%20Pro%20(USD)%20con%20Evolves.",
          },
          {
            name: "Plan Max",
            target: "E-commerce, reservas automatizadas y plataformas digitales a medida.",
            price: "A partir de $1.700",
            priceSub: "desarrollo de software a medida",
            maintenance: "$60",
            maintenancePeriod: "mes",
            highlight: false,
            features: [
              "Tienda online completa (checkout global Stripe y PayPal)",
              "Sistema de reservas automáticas con sincronización de calendario",
              "Área de miembros o catálogo dinámico",
              "Integración API con sistemas ERP o de facturación",
              "Infraestructura dedicada para altos picos de tráfico",
              "Consultoría técnica de arquitectura de software",
            ],
            paymentNotes: "Contrato personalizado con hitos de entrega garantizados.",
            ctaText: "Solicitar Propuesta Max ($)",
            ctaHref: "https://wa.me/5513981326869?text=Hola%2C%20necesito%20una%20propuesta%20del%20Plan%20Max%20(USD).",
          },
        ];
      }

      // Default Portuguese (pt-BR / pt-PT) viewing USD
      return [
        {
          name: "Plano Start",
          target: "Consultores, clínicas privadas e landing pages de conversão direta.",
          price: "$400 a $600",
          priceSub: "investimento único de desenvolvimento",
          maintenance: "$25",
          maintenancePeriod: "mês",
          highlight: false,
          features: [
            "Landing page de alta conversão (design editorial sob medida)",
            "Otimização extrema para dispositivos móveis (< 1.2s)",
            "Integração com WhatsApp comercial e e-mail corporativo",
            "Formulário seguro com proteção anti-spam nativa",
            "SEO técnico on-page para indexação global no Google",
            "Prazo de entrega ágil: 5 a 10 dias úteis",
          ],
          paymentNotes: "Pagamento via Stripe, Wise ou Cartão Corporativo em Dólares ($).",
          ctaText: "Selecionar Plano Start ($)",
          ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Plano%20Start%20(USD)%20da%20Evolves.",
        },
        {
          name: "Plano Pro",
          target: "Empresas consolidadas que exigem autoridade internacional e tráfego orgânico.",
          price: "$850 a $1.350",
          priceSub: "investimento único de desenvolvimento",
          maintenance: "$40",
          maintenancePeriod: "mês",
          highlight: true,
          badge: t.pricing.recommended || "Mais Recomendado",
          features: [
            "Website corporativo multipáginas (Home, Sobre, Serviços, Contato)",
            "Estrutura de Blog ou Artigos otimizada para SEO global",
            "Arquitetura multilíngue preparada (EN / PT / ES / FR)",
            "Telemetria Google Analytics 4, Tag Manager e Meta Pixel",
            "Integração com CRM de vendas ou agendamento online",
            "Painel simples para atualização de conteúdos",
            "Prazo de entrega: 10 a 20 dias úteis",
          ],
          paymentNotes: "Faturamento internacional em USD ($). Parcelamento por etapas.",
          ctaText: "Escolher Plano Pro ($)",
          ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20gostaria%20de%20fechar%20o%20Plano%20Pro%20(USD)%20com%20a%20Evolves.",
        },
        {
          name: "Plano Max",
          target: "E-commerce global, plataformas sob medida e portais de membros.",
          price: "A partir de $1.700",
          priceSub: "desenvolvimento de software sob medida",
          maintenance: "$60",
          maintenancePeriod: "mês",
          highlight: false,
          features: [
            "Plataforma completa de vendas (Stripe, PayPal, checkout multinacional)",
            "Sistema de agendamento automatizado com sincronização de agenda",
            "Área de membros restrita ou catálogo interativo",
            "Integrações por API com ERP e plataformas de cobrança globais",
            "Infraestrutura de nuvem dedicada para alto tráfego concorrente",
            "Consultoria técnica direta com Arquiteto de Software",
          ],
          paymentNotes: "Contrato personalizado atrelado a marcos de entrega (milestones).",
          ctaText: "Solicitar Proposta Max ($)",
          ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20preciso%20de%20um%20projeto%20personalizado%20no%20Plano%20Max%20(USD).",
        },
      ];
    }

    // ── 2. EUR (€) — EUROPE ──
    if (region === "EUR") {
      if (language === "en") {
        return [
          {
            name: "Start Plan",
            target: "Consultants, local clinics, and independent European professionals.",
            price: "€350 – €500",
            priceSub: "one-time engineering investment",
            maintenance: "€20",
            maintenancePeriod: "mo",
            highlight: false,
            features: [
              "High-converting landing page (custom editorial design)",
              "Extreme mobile optimization (< 1s load time in Europe)",
              "Direct WhatsApp & corporate email integration",
              "Secure form with native anti-spam & GDPR consent",
              "Technical on-page SEO for top Google indexation",
              "Rapid delivery: 5 to 10 business days",
            ],
            paymentNotes: "SEPA bank transfer, MB WAY, corporate card, or Wise.",
            ctaText: "Select Start Plan (€)",
            ctaHref: "https://wa.me/5513981326869?text=Hello%2C%20I%20am%20interested%20in%20the%20Start%20Plan%20(EUR)%20from%20Evolves.",
          },
          {
            name: "Pro Plan",
            target: "Established European companies demanding corporate authority and SEO.",
            price: "€750 – €1,200",
            priceSub: "one-time engineering investment",
            maintenance: "€35",
            maintenancePeriod: "mo",
            highlight: true,
            badge: t.pricing.recommended || "Recommended",
            features: [
              "Multi-page corporate website (Home, About, Services, etc.)",
              "SEO-optimized Blog or knowledge hub for organic reach",
              "Pre-configured multilingual architecture (PT / EN / ES / FR)",
              "GA4, Google Tag Manager & Meta Pixel telemetry",
              "CRM or online booking integration",
              "Intuitive CMS with zero technical complexity",
              "Delivery turnaround: 10 to 20 business days",
            ],
            paymentNotes: "European B2B invoice in EUR. Installment plans available.",
            ctaText: "Choose Pro Plan (€)",
            ctaHref: "https://wa.me/5513981326869?text=Hello%2C%20I%20would%20like%20to%20start%20the%20Pro%20Plan%20(EUR)%20with%20Evolves.",
          },
          {
            name: "Max Plan",
            target: "E-commerce, automated bookings, and custom digital platforms.",
            price: "From €1,500",
            priceSub: "tailored software development",
            maintenance: "€50",
            maintenancePeriod: "mo",
            highlight: false,
            features: [
              "Full e-commerce platform (Stripe, MB WAY, Multibanco, PayPal)",
              "Automated calendar booking synchronization",
              "Members area or dynamic product/service catalogue",
              "API integration with European ERP or invoicing systems",
              "Dedicated cloud infrastructure for high concurrent traffic",
              "Dedicated software architecture consultation",
            ],
            paymentNotes: "Custom milestone-based contract with defined deliverables.",
            ctaText: "Request Custom Proposal (€)",
            ctaHref: "https://wa.me/5513981326869?text=Hello%2C%20I%20need%20a%20custom%20proposal%20for%20the%20Max%20Plan%20(EUR).",
          },
        ];
      }

      if (language === "es") {
        return [
          {
            name: "Plan Start",
            target: "Profesionales independientes, consultores y servicios locales en Europa.",
            price: "€350 a €500",
            priceSub: "inversión única de desarrollo",
            maintenance: "€20",
            maintenancePeriod: "mes",
            highlight: false,
            features: [
              "Landing page de alta conversión (diseño editorial a medida)",
              "Optimización extrema para dispositivos móviles (< 1s)",
              "Integración con WhatsApp comercial y correo profesional",
              "Formulario seguro con protección anti-spam y RGPD nativo",
              "SEO técnico on-page para indexación en Google",
              "Plazo de entrega: 5 a 10 días hábiles",
            ],
            paymentNotes: "Transferencia SEPA, MB WAY, Bizum o Wise.",
            ctaText: "Seleccionar Plan Start (€)",
            ctaHref: "https://wa.me/5513981326869?text=Hola%2C%20me%20interesa%20el%20Plan%20Start%20(EUR)%20de%20Evolves.",
          },
          {
            name: "Plan Pro",
            target: "Empresas consolidadas que requieren presencia corporativa y SEO.",
            price: "€750 a €1.200",
            priceSub: "inversión única de desarrollo",
            maintenance: "€35",
            maintenancePeriod: "mes",
            highlight: true,
            badge: t.pricing.recommended || "Recomendado",
            features: [
              "Sitio web corporativo multipágina (Inicio, Empresa, Servicios, etc.)",
              "Estructura de Blog para posicionamiento orgánico",
              "Arquitectura multilingüe preparada (ES / EN / PT / FR)",
              "Integración Google Analytics 4, Tag Manager y Meta Pixel",
              "Integración con CRM de ventas o reservas online",
              "Panel de edición intuitivo sin complejidad técnica",
              "Plazo de entrega: 10 a 20 días hábiles",
            ],
            paymentNotes: "Facturación europea en EUR. Con factura oficial.",
            ctaText: "Contratar Plan Pro (€)",
            ctaHref: "https://wa.me/5513981326869?text=Hola%2C%20quiero%20iniciar%20el%20Plan%20Pro%20(EUR)%20con%20Evolves.",
          },
          {
            name: "Plan Max",
            target: "E-commerce, reservas avanzadas y plataformas a medida en Europa.",
            price: "A partir de €1.500",
            priceSub: "desarrollo de software personalizado",
            maintenance: "€50",
            maintenancePeriod: "mes",
            highlight: false,
            features: [
              "Tienda online completa (checkout Stripe, MB WAY, PayPal)",
              "Sistema de reservas automáticas con sincronización de calendario",
              "Área de miembros o catálogo dinámico",
              "Integración API con sistemas ERP o de facturación europeos",
              "Infraestructura dedicada para altos picos de tráfico",
              "Consultoría técnica de arquitectura de software",
            ],
            paymentNotes: "Contrato personalizado con hitos de entrega garantizados.",
            ctaText: "Solicitar Propuesta Max (€)",
            ctaHref: "https://wa.me/5513981326869?text=Hola%2C%20necesito%20una%20propuesta%20del%20Plan%20Max%20(EUR).",
          },
        ];
      }

      // Default Portuguese (pt-PT / pt-BR / fr / it) viewing EUR
      return [
        {
          name: "Plano Start",
          target: "Profissionais liberais, consultores e serviços locais na Europa.",
          price: "€350 a €500",
          priceSub: "investimento único de desenvolvimento",
          maintenance: "€20",
          maintenancePeriod: "mês",
          highlight: false,
          features: [
            "Landing page de alta conversão (design editorial à medida)",
            "Otimização extrema para dispositivos móveis (< 1s em nós europeus)",
            "Integração com WhatsApp comercial e e-mail profissional",
            "Formulário seguro com proteção anti-spam e RGPD",
            "SEO técnico on-page para indexação prioritária no Google",
            "Prazo de entrega ágil: 5 a 10 dias úteis",
          ],
          paymentNotes: "Pagamento via SEPA, MB WAY, Transferência Bancária ou Wise.",
          ctaText: "Selecionar Plano Start (€)",
          ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Plano%20Start%20(EUR)%20da%20Evolves.",
        },
        {
          name: "Plano Pro",
          target: "Empresas consolidadas que exigem autoridade de marca e SEO na Europa.",
          price: "€750 a €1.200",
          priceSub: "investimento único de desenvolvimento",
          maintenance: "€35",
          maintenancePeriod: "mês",
          highlight: true,
          badge: t.pricing.recommended || "Mais Recomendado",
          features: [
            "Website institucional multipáginas completo",
            "Estrutura de Blog ou Artigos otimizada para SEO orgânico",
            "Arquitetura multilíngue preparada (PT / EN / ES / FR)",
            "Integração Google Analytics 4, Tag Manager e Meta Pixel",
            "Integração com CRM de vendas ou agendamento online",
            "Painel de edição intuitivo sem complexidade técnica",
            "Prazo de entrega: 10 a 20 dias úteis",
          ],
          paymentNotes: "Faturação europeia em EUR. Parcelamento disponível sob consulta.",
          ctaText: "Contratar Plano Pro (€)",
          ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20o%20Plano%20Pro%20(EUR)%20com%20a%20Evolves.",
        },
        {
          name: "Plano Max",
          target: "E-commerce, agendamentos complexos e plataformas customizadas.",
          price: "A partir de €1.500",
          priceSub: "desenvolvimento sob medida",
          maintenance: "€50",
          maintenancePeriod: "mês",
          highlight: false,
          features: [
            "Loja online completa (checkout Stripe, MB WAY, Multibanco e PayPal)",
            "Sistema de agendamento automatizado com calendário",
            "Área de membros restrita ou catálogo dinâmico de produtos",
            "Integração por API com sistemas de faturação europeus",
            "Infraestrutura dedicada com suporte para alto volume de acessos",
            "Consultoria técnica de arquitetura de software inclusa",
          ],
          paymentNotes: "Contrato personalizado com etapas de entrega e marcos de validação.",
          ctaText: "Solicitar Proposta Max (€)",
          ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20preciso%20de%20uma%20proposta%20personalizada%20no%20Plano%20Max%20(EUR).",
        },
      ];
    }

    // ── 3. BRL (R$) — BRASIL ──
    return [
      {
        name: "Plano Start",
        target: "Empresas e profissionais que buscam presença digital rápida, sóbria e moderna.",
        price: "R$ 1.500 a R$ 2.000",
        priceSub: "taxa única de criação e engenharia",
        maintenance: "R$ 100",
        maintenancePeriod: "mês",
        highlight: false,
        features: [
          "Landing page estratégica focada em captação de leads e vendas",
          "Design editorial exclusivo alinhado à sua marca (sem templates)",
          "Integração direta com WhatsApp comercial e formulário seguro",
          "Velocidade de carregamento otimizada para conexões móveis 4G/5G",
          "Configuração de tags de conversão (Google Ads e Meta Pixel)",
          "Prazo de entrega ágil: 5 a 10 dias úteis",
        ],
        paymentNotes: "Pagamento via PIX com desconto ou Cartão de Crédito corporativo.",
        ctaText: "Selecionar Plano Start (R$)",
        ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Plano%20Start%20(em%20Reais)%20da%20Evolves.",
      },
      {
        name: "Plano Pro",
        target: "Empresas consolidadas que precisam de autoridade de mercado e múltiplos serviços.",
        price: "R$ 2.800 a R$ 4.500",
        priceSub: "taxa única de criação e engenharia",
        maintenance: "R$ 180",
        maintenancePeriod: "mês",
        highlight: true,
        badge: t.pricing.mostChosen || "Mais Escolhido",
        features: [
          "Site institucional multipáginas completo com páginas dedicadas",
          "Otimização para os primeiros lugares nas buscas do Google (SEO On-Page)",
          "Integração com seu CRM de vendas (RD Station, HubSpot, Pipedrive)",
          "Blog corporativo para construção de autoridade e conteúdos",
          "Design editorial responsivo com micro-animações refinadas",
          "Painel simples para atualização de textos e imagens",
          "Prazo de entrega: 10 a 20 dias úteis",
        ],
        paymentNotes: "Entrada + saldo na entrega ou parcelamento em até 12x. Com Nota Fiscal.",
        ctaText: "Escolher Plano Pro (R$)",
        ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20gostaria%20de%20fechar%20o%20Plano%20Pro%20(em%20Reais)%20com%20a%20Evolves.",
      },
      {
        name: "Plano Max",
        target: "Lojas virtuais, portais de clientes e plataformas sob medida.",
        price: "A partir de R$ 5.500",
        priceSub: "projeto personalizado sob escopo técnico",
        maintenance: "R$ 300",
        maintenancePeriod: "mês",
        highlight: false,
        features: [
          "E-commerce robusto com checkout transparente (PIX instantâneo e Cartão)",
          "Sistemas de agendamento, portais de clientes ou cálculo dinâmico de frete",
          "Integração com sistemas ERP, emissão de NFe e gateways de pagamento",
          "Servidor Cloud dedicado com alta capacidade de requisições simultâneas",
          "Engenharia escalável pronta para o crescimento da sua operação",
          "Acompanhamento direto com líder de engenharia de software",
        ],
        paymentNotes: "Cronograma de pagamento atrelado a marcos de entrega (milestones).",
        ctaText: "Falar com Engenheiro (R$)",
        ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20preciso%20de%20um%20projeto%20personalizado%20no%20Plano%20Max%20(em%20Reais).",
      },
    ];
  };

  const plans = getLocalizedPlans();

  const maintenancePillars = [
    {
      icon: Server,
      title: region === "EUR" ? "Hospedagem Cloud Dedicada" : region === "USD" ? "Dedicated Cloud Hosting" : "Hospedagem Cloud Dedicada",
      desc: region === "EUR" ? "Servidores em nós europeus de baixa latência (Frankfurt/Londres) com isolamento de recursos." : region === "USD" ? "Global edge server nodes (US, EU, APAC) with guaranteed 99.99% uptime and sub-second delivery." : "Servidores em nuvem de alta velocidade com nós locais e CDN global para carregamento imediato.",
    },
    {
      icon: RefreshCw,
      title: region === "USD" ? "Automated Daily Backups" : "Backups Automáticos Diários",
      desc: region === "USD" ? "Complete off-site backups with one-click restore points and disaster recovery protocol." : "Cópias completas de segurança diárias com restauração em 1 clique em caso de falha.",
    },
    {
      icon: Lock,
      title: region === "USD" ? "Active SSL & Security" : "Certificado SSL & Blindagem",
      desc: region === "USD" ? "Automated TLS 1.3 certificates, DDoS shield, web application firewall, and bot protection." : "Certificados TLS automáticos, proteção ativa contra ataques DDoS e blindagem contra spam.",
    },
    {
      icon: Headphones,
      title: region === "USD" ? "Ongoing Technical Support" : "Suporte Técnico Contínuo",
      desc: region === "USD" ? "Direct engineering channel for adjustments, performance audits, and priority bug fixes." : "Canal direto para pequenos ajustes de texto/banners, atualizações de segurança e monitoramento 24/7.",
    },
  ];

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative border-t border-black/[0.08] bg-surface/20 py-24 sm:py-32 dark:border-white/[0.08]"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-[11px] font-mono tracking-wider text-primary uppercase dark:border-white/[0.08] dark:bg-white/[0.03]">
            <Zap className="h-3 w-3" />
            <span>{t.pricing.eyebrow}</span>
          </div>

          <h2
            id="pricing-heading"
            className="mt-4 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-5xl"
          >
            {t.pricing.title}
          </h2>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            {t.pricing.description}
          </p>

          {/* Dedicated Currency Selector on Pricing Section */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center justify-center gap-3 rounded-2xl border border-black/[0.08] bg-card p-2 sm:px-4 sm:py-2 dark:border-white/[0.08] dark:bg-white/[0.02] shadow-xs">
            <span className="text-xs font-mono text-muted-foreground">
              {region === "BRL"
                ? "Moeda da proposta:"
                : region === "USD"
                ? "Proposal currency:"
                : "Moeda da proposta:"}
            </span>
            <CurrencyToggle />
            <span className="text-[11px] font-mono text-muted-foreground/60 hidden md:inline">
              · {region === "BRL" ? "Faturamento BRL com NF" : region === "USD" ? "Global B2B Billing (USD)" : "Faturação Europeia em EUR"}
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col justify-between rounded-2xl border p-7 sm:p-8 transition-all duration-300 ${
                p.highlight
                  ? "border-primary/50 bg-primary/[0.03] ring-1 ring-primary/20 shadow-[0_0_30px_rgba(83,58,253,0.12)] lg:-translate-y-2 dark:border-primary/50 dark:bg-white/[0.04]"
                  : "border-black/[0.08] bg-card hover:border-black/[0.14] dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/[0.14] dark:hover:bg-white/[0.03] shadow-xs"
              }`}
            >
              {p.highlight && p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-3 py-0.5 text-[10px] font-mono font-medium uppercase tracking-wider text-primary-foreground shadow-sm">
                    {p.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    {p.name}
                  </h3>
                  <span className="rounded-full border border-black/[0.08] bg-black/[0.03] px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground dark:border-white/[0.08] dark:bg-white/[0.04]">
                    {currencySymbol} {region}
                  </span>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-muted-foreground min-h-[34px]">
                  {p.target}
                </p>

                {/* Price block */}
                <div className="mt-5 border-y border-black/[0.08] py-4 dark:border-white/[0.08]">
                  <p className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground">
                    {p.price}
                  </p>
                  <p className="mt-0.5 text-[11px] font-mono text-muted-foreground/80">
                    {p.priceSub}
                  </p>

                  <div className="mt-3 flex items-baseline gap-1 text-xs font-mono text-foreground">
                    <span className="text-muted-foreground">+</span>
                    <span className="font-medium text-primary text-sm">{p.maintenance}</span>
                    <span className="text-muted-foreground">/{p.maintenancePeriod} {t.pricing.monthlyMaintenance || "manutenção recorrente"}</span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <ul className="mt-5 space-y-2.5">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-foreground/85">
                      <Check className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
                <a
                  href={p.ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-xs font-medium transition-all duration-200 ${
                    p.highlight
                      ? "bg-foreground text-background hover:opacity-90 shadow-sm"
                      : "border border-black/[0.12] bg-card text-foreground hover:bg-black/[0.04] dark:border-white/[0.12] dark:bg-white/[0.04] dark:hover:bg-white/[0.08]"
                  }`}
                >
                  <span>{p.ctaText}</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>

                <p className="mt-3 text-center text-[10px] font-mono text-muted-foreground/80">
                  {p.paymentNotes}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Maintenance Recurrent Pillars Box */}
        <div className="mt-14 rounded-2xl border border-black/[0.08] bg-card p-7 sm:p-9 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-black/[0.08] pb-6 dark:border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/[0.08] bg-black/[0.03] text-emerald-600 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-emerald-400">
                <ShieldCheck className="h-4.5 w-4.5" />
              </div>
              <div>
                <h4 className="text-base font-medium tracking-tight text-foreground">
                  {region === "USD"
                    ? "What is Included in the Recurrent Maintenance Retainer?"
                    : "O que inclui a Manutenção Recorrente Mensal?"}
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {region === "USD"
                    ? "Full turnkey peace of mind: hosting, security, and continuous engineering care."
                    : "Zero preocupações operacionais: hospedagem dedicada, blindagem e suporte contínuo."}
                </p>
              </div>
            </div>

            <span className="shrink-0 self-start sm:self-auto rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-[11px] font-mono text-muted-foreground dark:border-white/[0.08] dark:bg-white/[0.04]">
              99.99% Uptime SLA
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {maintenancePillars.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-xl border border-black/[0.06] bg-black/[0.02] p-4 transition-colors hover:border-black/[0.12] dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-white/[0.12]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-black/[0.08] bg-black/[0.03] text-primary dark:border-white/[0.08] dark:bg-white/[0.04]">
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <p className="mt-3 text-xs font-medium text-foreground">{item.title}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
