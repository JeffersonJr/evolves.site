import {
  Target,
  Handshake,
  Cpu,
  Code2,
  Rocket,
  Shield,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLocale } from "@/lib/i18n-urls";

const stats = [
  { value: "8+", label: "Anos de Experiência Prática", suffix: "" },
  { value: "150", label: "Projetos Entregues em Produção", suffix: "+" },
  { value: "99.99", label: "Uptime Médio em Nuvem", suffix: "%" },
  { value: "< 1.0", label: "Tempo de Carga Alvo", suffix: "s" },
];

const methodology = [
  {
    step: "01",
    title: "Descoberta & Escopo Fechado",
    text: "Mergulhamos no modelo operacional para mapear requisitos reais. Escopo transparente com prazos e valores pré-definidos.",
  },
  {
    step: "02",
    title: "Design Editorial & Validação",
    text: "Concebemos interfaces de alta fidelidade focadas em retenção e conversão B2B, aprovadas visualmente antes do código.",
  },
  {
    step: "03",
    title: "Engenharia de Alto Padrão",
    text: "Desenvolvemos com as melhores práticas da web moderna: código limpo, SEO técnico, segurança de borda e Core Web Vitals.",
  },
  {
    step: "04",
    title: "Lançamento & Gestão Cloud",
    text: "Deploy sem tempo de inatividade, monitoramento contínuo de estabilidade e suporte técnico proativo 24/7.",
  },
];

const pillars = [
  {
    icon: Target,
    title: "Foco em Resultado Comercial",
    text: "Cada decisão de interface e arquitetura de software é orientada à geração de valor, retenção de clientes e conversão direta.",
  },
  {
    icon: Handshake,
    title: "Transparência Contratual",
    text: "Comunicação assíncrona ágil, respeito a fusos horários internacionais e propriedade integral do código sem vendor lock-in.",
  },
  {
    icon: Cpu,
    title: "Infraestrutura Cloud de Ponta",
    text: "Servidores dedicados com LiteSpeed, cache Redis e distribuição por CDN global em múltiplos continentes.",
  },
  {
    icon: Rocket,
    title: "Engenharia Acelerada por IA",
    text: "Uso estratégico de IA no ciclo de prototipagem e testes para entregar soluções corporativas em semanas, não meses.",
  },
  {
    icon: Code2,
    title: "Código Limpo & Auditável",
    text: "Arquiteturas sustentáveis e fáceis de escalar, preparadas para crescimento contínuo sem necessidade de refatorações caras.",
  },
  {
    icon: Shield,
    title: "Segurança & Conformidade Legal",
    text: "Conformidade estrita com o RGPD (Europa) e a LGPD (Brasil), com criptografia HTTPS nativa e firewalls ativos.",
  },
];

export function About() {
  const locale = useLocale();

  return (
    <section id="about" className="overflow-hidden bg-background">
      {/* Stats Section */}
      <div className="border-y border-border/60 bg-surface/40 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:divide-x md:divide-border/60">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center md:px-6">
                <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-1">
                  {stat.value}
                  <span className="text-primary font-normal ml-0.5">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        {/* Mission / Vision Split */}
        <div className="grid md:grid-cols-2 gap-8 mb-28">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-xs">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary mb-6">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
              Nossa Missão
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Desenvolver plataformas digitais e infraestruturas em nuvem de
              altíssima performance técnica, permitindo que empresas no Brasil e
              na Europa operem com a mesma sofisticação dos líderes globais da
              tecnologia.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-xs">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary mb-6">
              <Lightbulb className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-3">
              Nossa Visão
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Consolidar a Evolves como referência de estúdio de engenharia
              digital e arquitetura web sóbria, reconhecida internacionalmente
              pela entrega pontual, velocidade técnica e rigor estético.
            </p>
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-28">
          <div className="text-center mb-14">
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
              Metodologia
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Como trabalhamos
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mt-3">
              Processo validado para garantir previsibilidade, transparência e
              velocidade desde o primeiro alinhamento até a produção.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodology.map((m) => (
              <div
                key={m.step}
                className="rounded-3xl border border-border bg-card p-7 shadow-xs"
              >
                <span className="font-mono text-2xl font-bold text-foreground/60 dark:text-foreground/50 mb-4 block">
                  {m.step}
                </span>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="mb-28">
          <div className="text-center mb-14">
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
              Engenharia & Ética
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Princípios Fundamentais
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mt-3">
              Os pilares inegociáveis que norteiam todas as nossas decisões
              técnicas e estratégicas.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-xs"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary mb-5">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-14 text-center shadow-[var(--shadow-card)]">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
              Próximo Passo
            </p>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-foreground mb-4">
              Pronto para construir o futuro digital da sua empresa?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 leading-relaxed">
              Converse diretamente com os nossos engenheiros de software e
              receba uma proposta técnica estruturada em até 24 horas úteis.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/$locale/"
                params={{ locale }}
                hash="contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs sm:text-sm font-medium text-background transition hover:opacity-90 shadow-sm"
              >
                <span>Falar com Engenheiro</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/$locale/cases"
                params={{ locale }}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-xs sm:text-sm font-medium text-foreground transition hover:bg-secondary"
              >
                <span>Explorar Casos de Estudo</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
