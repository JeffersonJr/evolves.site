import {
  Target,
  Handshake,
  Cpu,
  Code2,
  Rocket,
  Shield,
  Search,
  PenTool,
  Braces,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

const stats = [
  { value: "8+", label: "Anos de Experiência", suffix: "" },
  { value: "150", label: "Projetos Entregues", suffix: "+" },
  { value: "100", label: "Satisfação dos Clientes", suffix: "%" },
  { value: "50", label: "De linhas de código", suffix: "M+" },
];

const methodology = [
  {
    icon: Search,
    title: "1. Descoberta & Imersão",
    text: "Mergulhamos no seu modelo de negócio para entender as dores reais. Não sugerimos soluções antes de compreender o problema raiz.",
  },
  {
    icon: PenTool,
    title: "2. Design Estratégico",
    text: "Criamos protótipos de alta fidelidade focados em conversão. Validamos a experiência do usuário antes de escrever a primeira linha de código.",
  },
  {
    icon: Braces,
    title: "3. Engenharia de Ponta",
    text: "Desenvolvemos utilizando as mesmas tecnologias do Vale do Silício. Código limpo, escalável e arquitetado para altíssima performance.",
  },
  {
    icon: TrendingUp,
    title: "4. Lançamento & Escala",
    text: "Monitoramos o lançamento com dados reais. Implementamos melhorias contínuas, testes A/B e otimizações de SEO.",
  },
];

const pillars = [
  {
    icon: Target,
    title: "Foco em resultados",
    text: "Cada pixel e cada linha de código são pensados para converter visitantes em clientes. Não fazemos arte pela arte, fazemos design para negócios.",
  },
  {
    icon: Handshake,
    title: "Parceria próxima",
    text: "Trabalhamos como uma extensão do seu time, garantindo que sua visão seja superada e que a comunicação seja transparente.",
  },
  {
    icon: Cpu,
    title: "Tecnologia de ponta",
    text: "Segurança, performance e escalabilidade são os alicerces de tudo o que criamos. Utilizamos a mesma stack de gigantes da tecnologia.",
  },
  {
    icon: Rocket,
    title: "Inovação Constante",
    text: "Respiramos as novas tendências de Inteligência Artificial e UX/UI para manter seu negócio sempre à frente da concorrência.",
  },
  {
    icon: Code2,
    title: "Código Limpo",
    text: "Sistemas fáceis de manter e escalar. Entregamos arquiteturas robustas que não geram dor de cabeça a longo prazo.",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    text: "Conformidade rigorosa com a LGPD e as melhores práticas de proteção de dados e cibersegurança.",
  },
];

export function About() {
  return (
    <section id="about" className="overflow-hidden">
      {/* 2. Stats Section */}
      <div className="relative z-10 border-y border-black/[.04] bg-[#f5f5f7] py-12 dark:border-border dark:bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-y-9 md:grid-cols-4 md:divide-x md:divide-border">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center px-4">
                <div className="mb-2 flex items-baseline justify-center text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  {stat.value}
                  <span className="text-2xl text-primary font-medium ml-1">
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-xs font-medium text-muted-foreground sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        {/* 3. Vision / Mission Split */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-black/[.04] bg-[#f5f5f7] p-9 transition-colors dark:border-border dark:bg-surface sm:p-12">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full transition-transform duration-700 group-hover:scale-125"></div>
            <Target className="h-10 w-10 text-primary mb-8 relative z-10" />
            <h3 className="text-3xl font-bold mb-4 relative z-10">
              Nossa Missão
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
              Empoderar empresas com soluções tecnológicas de altíssima
              performance, otimizando processos complexos e multiplicando a
              geração de receita através de um posicionamento digital
              incontestável.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-black/[.04] bg-[#f5f5f7] p-9 transition-colors dark:border-border dark:bg-surface sm:p-12">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full transition-transform duration-700 group-hover:scale-125"></div>
            <Lightbulb className="h-10 w-10 text-primary mb-8 relative z-10" />
            <h3 className="text-3xl font-bold mb-4 relative z-10">
              Nossa Visão
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
              Ser o hub referência de tecnologia e inovação para o mercado B2B
              corporativo no Brasil, reconhecidos por elevar continuamente o
              padrão de qualidade, design e engenharia de software.
            </p>
          </div>
        </div>

        {/* 4. Methodology */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
              Como nós trabalhamos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa metodologia validada garante previsibilidade, transparência
              e velocidade desde a primeira reunião até o deploy em produção.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Linha conectora desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border z-0"></div>

            {methodology.map((step, idx) => (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-blue-100 bg-white text-primary shadow-sm dark:border-border dark:bg-card">
                  <step.icon className="w-8 h-8 text-primary" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {step.title.substring(3)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Pillars Grid */}
        <div className="mb-32 pt-16 border-t border-border/50">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
              Princípios Fundamentais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Os pilares inegociáveis que baseiam todas as nossas decisões
              técnicas e estratégicas.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, idx) => (
              <div
                key={p.title}
                className="group rounded-[1.5rem] border border-black/[.04] bg-white p-7 transition-colors hover:border-blue-200 dark:border-border dark:bg-card dark:hover:border-primary/50"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground dark:bg-accent">
                  <p.icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. CTA Banner */}
        <div className="relative overflow-hidden rounded-4xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-10 sm:p-24 text-center shadow-[var(--shadow-card)]">
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="inline-block rounded-full bg-background px-4 py-1.5 text-sm font-semibold text-foreground mb-8 ring-1 ring-border shadow-sm">
              Vamos Evoluir Juntos
            </span>
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8 leading-tight">
              Pronto para colocar sua empresa no{" "}
              <span className="gradient-text">próximo nível?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
              Seja para um reposicionamento de marca, um portal corporativo
              ultra-rápido ou um sistema complexo, nossos especialistas estão
              prontos para o desafio.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 shadow-xl shadow-primary/25"
              >
                Iniciar meu projeto agora
              </a>
              <a
                href="/cases"
                className="w-full sm:w-auto inline-flex items-center justify-center h-14 rounded-full border border-input bg-background/50 backdrop-blur-sm px-10 text-base font-medium text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                Explorar nossos cases
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Dummy icon to satisfy the import if not available, otherwise import it
function Lightbulb(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}
