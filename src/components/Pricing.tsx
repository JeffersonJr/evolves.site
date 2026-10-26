import { useRegion } from "@/contexts/RegionContext";
import { useI18n } from "@/contexts/I18nContext";
import { CurrencyToggle } from "./CurrencyToggle";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";

export function Pricing() {
  const { region, isEurope } = useRegion();
  const { t, language } = useI18n();

  // Helper translations for plan features across languages
  const getLocalizedPlans = () => {
    if (isEurope) {
      if (language === "en") {
        return [
          {
            name: "Start Plan",
            target: "Consultants, local clinics, and independent professionals.",
            price: "€350 – €500",
            priceSub: "one-time engineering investment",
            maintenance: "€20",
            maintenancePeriod: "mo",
            highlight: false,
            features: [
              "High-converting landing page (custom editorial design)",
              "Extreme mobile optimization (< 1s load time)",
              "Direct WhatsApp & corporate email integration",
              "Secure form with native anti-spam validation",
              "Technical on-page SEO for top Google indexation",
              "Rapid delivery: 5 to 10 business days",
            ],
            paymentNotes: "SEPA bank transfer, MB WAY, corporate card, or Wise.",
            ctaText: "Select Start Plan (€)",
            ctaHref: "https://wa.me/5513981326869?text=Hello%2C%20I%20am%20interested%20in%20the%20Start%20Plan%20(EUR)%20from%20Evolves.",
          },
          {
            name: "Pro Plan",
            target: "Established companies demanding corporate authority and SEO.",
            price: "€750 – €1,200",
            priceSub: "one-time engineering investment",
            maintenance: "€35",
            maintenancePeriod: "mo",
            highlight: true,
            badge: t.pricing.recommended,
            features: [
              "Multi-page corporate website (Home, About, Services, etc.)",
              "SEO-optimized Blog or knowledge hub for organic reach",
              "Pre-configured multilingual architecture (PT / EN / ES)",
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
            target: "Profesionales independientes, consultores y servicios locales.",
            price: "€350 a €500",
            priceSub: "inversión única de desarrollo",
            maintenance: "€20",
            maintenancePeriod: "mes",
            highlight: false,
            features: [
              "Landing page de alta conversión (diseño editorial a medida)",
              "Optimización extrema para dispositivos móviles",
              "Integración con WhatsApp comercial y correo profesional",
              "Formulario seguro con protección anti-spam nativa",
              "SEO técnico on-page para indexación en Google",
              "Plazo de entrega: 5 a 10 días hábiles",
            ],
            paymentNotes: "Transferencia SEPA, MB WAY o Wise.",
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
            badge: t.pricing.recommended,
            features: [
              "Sitio web corporativo multipágina (Inicio, Empresa, Servicios, etc.)",
              "Estructura de Blog para posicionamiento orgánico",
              "Arquitectura multilingüe preparada (ES / EN / PT)",
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
            target: "E-commerce, reservas avanzadas y plataformas a medida.",
            price: "A partir de €1.500",
            priceSub: "desarrollo de software personalizado",
            maintenance: "€50",
            maintenancePeriod: "mes",
            highlight: false,
            features: [
              "Tienda online completa (checkout Stripe, MB WAY, PayPal)",
              "Sistema de reservas automáticas con sincronización de calendario",
              "Área de miembros o catálogo dinámico",
              "Integración API con sistemas ERP o de facturación",
              "Infraestructura dedicada para altos picos de tráfico",
              "Consultoría técnica de arquitectura de software",
            ],
            paymentNotes: "Contrato personalizado con hitos de entrega garantizados.",
            ctaText: "Solicitar Propuesta Max (€)",
            ctaHref: "https://wa.me/5513981326869?text=Hola%2C%20necesito%20una%20propuesta%20del%20Plan%20Max%20(EUR).",
          },
        ];
      }

      // Default Europe (pt-PT, fr, it or pt-BR viewing EUR)
      return [
        {
          name: "Plano Start",
          target: "Profissionais liberais, consultores e serviços locais.",
          price: "€350 a €500",
          priceSub: "investimento único de desenvolvimento",
          maintenance: "€20",
          maintenancePeriod: "mês",
          highlight: false,
          features: [
            "Landing page de alta conversão (design editorial à medida)",
            "Otimização extrema para dispositivos móveis (< 1s)",
            "Integração com WhatsApp comercial e e-mail profissional",
            "Formulário seguro com proteção anti-spam nativa",
            "SEO técnico on-page para indexação prioritária",
            "Prazo de entrega ágil: 5 a 10 dias úteis",
          ],
          paymentNotes: "Pagamento via SEPA, MB WAY, Transferência Bancária ou Wise.",
          ctaText: "Selecionar Plano Start (€)",
          ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Plano%20Start%20(EUR)%20da%20Evolves.",
        },
        {
          name: "Plano Pro",
          target: "Empresas consolidadas que exigem autoridade e SEO.",
          price: "€750 a €1.200",
          priceSub: "investimento único de desenvolvimento",
          maintenance: "€35",
          maintenancePeriod: "mês",
          highlight: true,
          badge: t.pricing.recommended,
          features: [
            "Website institucional multipáginas completo",
            "Estrutura de Blog ou Artigos otimizada para SEO",
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
    } else {
      // Brazil (BRL)
      return [
        {
          name: "Plano Start",
          target: "Empresas e profissionais que buscam presença digital rápida e moderna.",
          price: "R$ 1.500 a R$ 2.000",
          priceSub: "taxa única de criação e implementação",
          maintenance: "R$ 100",
          maintenancePeriod: "mês",
          highlight: false,
          features: [
            "Landing page estratégica focada em captação de leads e vendas",
            "Design exclusivo alinhado à sua marca (sem temas genéricos)",
            "Integração direta com WhatsApp comercial e formulário seguro",
            "Velocidade de carregamento otimizada para conexões móveis 4G/5G",
            "Configuração inicial de tags de conversão (Google e Meta Ads)",
            "Prazo de entrega ágil: 5 a 10 dias úteis",
          ],
          paymentNotes: "Pagamento via PIX com desconto ou Cartão de Crédito corporativo.",
          ctaText: "Selecionar Plano Start (R$)",
          ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Plano%20Start%20(em%20Reais)%20da%20Evolves.",
        },
        {
          name: "Plano Pro",
          target: "Empresas que precisam de autoridade de mercado e múltiplos serviços.",
          price: "R$ 2.800 a R$ 4.500",
          priceSub: "taxa única de criação e implementação",
          maintenance: "R$ 180",
          maintenancePeriod: "mês",
          highlight: true,
          badge: t.pricing.mostChosen,
          features: [
            "Site institucional multipáginas completo com páginas dedicadas",
            "Otimização para os primeiros lugares nas buscas do Google (SEO On-Page)",
            "Integração com seu CRM de vendas (RD Station, HubSpot, Pipedrive)",
            "Blog corporativo para construção de autoridade e conteúdos",
            "Design editorial responsivo com micro-animações refinadas",
            "Painel simples para atualização de textos e imagens",
            "Prazo de entrega: 12 a 20 dias úteis",
          ],
          paymentNotes: "Entrada + saldo na entrega ou parcelamento em até 12x no cartão. Com Nota Fiscal.",
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
    }
  };

  const plans = getLocalizedPlans();

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="border-t border-border/60 bg-surface/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-primary">
            {t.pricing.eyebrow}
          </p>
          <h2
            id="pricing-heading"
            className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {t.pricing.description}
          </p>

          {/* Region Switcher in Pricing Section */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="text-xs text-muted-foreground font-mono">{t.pricing.regionProposal}</span>
            <CurrencyToggle />
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col justify-between rounded-3xl border bg-card p-8 sm:p-9 transition-all duration-300 ${
                p.highlight
                  ? "border-primary ring-1 ring-primary/20 shadow-[var(--shadow-card)] lg:-translate-y-2"
                  : "border-border hover:border-border/80 shadow-xs"
              }`}
            >
              {p.highlight && p.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-3.5 py-1 text-[11px] font-mono font-medium uppercase tracking-wider text-primary-foreground shadow-xs">
                    {p.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {p.name}
                  </h3>
                  <span className="rounded-md bg-secondary px-2.5 py-1 text-[11px] font-mono text-muted-foreground">
                    {region}
                  </span>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-muted-foreground min-h-[34px]">
                  {p.target}
                </p>

                {/* Price block */}
                <div className="mt-6 border-y border-border/60 py-5">
                  <p className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                    {p.price}
                  </p>
                  <p className="mt-0.5 text-[11px] font-mono text-muted-foreground">
                    {p.priceSub}
                  </p>

                  <div className="mt-3 flex items-baseline gap-1 text-sm font-medium text-foreground">
                    <span className="text-xs text-muted-foreground">+</span>
                    <span className="font-semibold text-primary">{p.maintenance}</span>
                    <span className="text-xs text-muted-foreground">/{p.maintenancePeriod} {t.pricing.monthlyMaintenance}</span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <ul className="mt-6 space-y-3">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60">
                <a
                  href={p.ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex w-full items-center justify-center gap-2 rounded-full py-3 text-xs sm:text-sm font-medium transition-all ${
                    p.highlight
                      ? "bg-primary text-primary-foreground hover:brightness-105 shadow-sm"
                      : "bg-foreground text-background hover:opacity-90"
                  }`}
                >
                  <span>{p.ctaText}</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>

                <p className="mt-3 text-center text-[10px] font-mono text-muted-foreground">
                  {p.paymentNotes}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Maintenance Details Box */}
        <div className="mt-16 rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-[var(--shadow-soft)]">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-500">
                <ShieldCheck className="h-5 w-5" />
                <h4 className="text-base font-semibold tracking-tight text-foreground">
                  {t.pricing.maintenanceBoxTitle}
                </h4>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                {t.pricing.maintenanceBoxSubtitle}
              </p>
            </div>

            <span className="shrink-0 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-muted-foreground">
              {t.pricing.maintenanceSla}
            </span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-xs sm:text-sm">
            <div className="rounded-xl border border-border/60 bg-surface/50 p-4">
              <p className="font-medium text-foreground">{t.pricing.m1Title}</p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {t.pricing.m1Desc}
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-surface/50 p-4">
              <p className="font-medium text-foreground">{t.pricing.m2Title}</p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {t.pricing.m2Desc}
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-surface/50 p-4">
              <p className="font-medium text-foreground">{t.pricing.m3Title}</p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {t.pricing.m3Desc}
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-surface/50 p-4">
              <p className="font-medium text-foreground">{t.pricing.m4Title}</p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {t.pricing.m4Desc}
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-surface/50 p-4">
              <p className="font-medium text-foreground">{t.pricing.m5Title}</p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {t.pricing.m5Desc}
              </p>
            </div>

            <div className="rounded-xl border border-border/60 bg-surface/50 p-4">
              <p className="font-medium text-foreground">{t.pricing.m6Title}</p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {t.pricing.m6Desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
