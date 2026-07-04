import caseZion from "@/assets/case-zion.png";
import caseDuimp from "@/assets/case-duimp.png";
import caseProjecti from "@/assets/case-projecti.png";

export interface CaseStudy {
  slug: string;
  img: string;
  category: string;
  title: string;
  text: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  stats: { label: string; value: string; suffix?: string }[];
}

export const casesData: CaseStudy[] = [
  {
    slug: "zion-tecnologia",
    img: caseZion,
    category: "Site Institucional",
    title: "Zion Tecnologia",
    text: "Uma plataforma moderna para líderes em sistemas de importação.",
    tags: ["WordPress", "SEO", "Performance"],
    challenge: "A Zion Tecnologia possuía um site desatualizado que não refletia a robustez do seu principal produto (um sistema complexo de importação). O desafio era criar uma plataforma rápida, que ranqueasse bem no Google e transmitisse credibilidade imediata para tomadores de decisão em comércio exterior.",
    solution: "Desenvolvemos um site institucional completamente novo focado em performance extrema e design voltado à conversão B2B. A arquitetura foi otimizada para SEO Técnico, com carregamento de imagens dinâmico e integração direta com o CRM de vendas da empresa.",
    results: [
      "Aumento de 145% no tráfego orgânico em 6 meses.",
      "Redução da taxa de rejeição de 68% para 31%.",
      "Geração de leads qualificados aumentou em 40% no primeiro trimestre após o lançamento."
    ],
    stats: [
      { label: "Tráfego Orgânico", value: "+145", suffix: "%" },
      { label: "Bounce Rate", value: "-37", suffix: "%" },
      { label: "Geração de Leads", value: "+40", suffix: "%" }
    ]
  },
  {
    slug: "duimpweb",
    img: caseDuimp,
    category: "Portal de Notícias",
    title: "DuimpWeb",
    text: "Portal de conhecimento e suporte essencial para os clientes do sistema Zion.",
    tags: ["CMS Custom", "IA", "Design", "Portal B2B"],
    challenge: "Com o lançamento da nova declaração DUIMP, todos os clientes que utilizam o sistema de importação da Zion precisavam de um hub digital centralizado para se manterem atualizados. O desafio era criar um portal robusto, com alto volume de tráfego simultâneo, servindo não apenas como um portal de notícias, mas como um ambiente essencial de suporte e documentação rápida para os usuários do sistema Zion.",
    solution: "Criamos um CMS (Content Management System) sob medida, eliminando a lentidão dos plugins tradicionais. Desenvolvemos uma interface limpa, focada em leitura e busca rápida. Integramos ferramentas de Inteligência Artificial para gerar resumos automáticos das atualizações governamentais e otimizar os artigos, garantindo que os clientes encontrem a resposta exata em segundos.",
    results: [
      "Capacidade de suportar mais de 10.000 usuários simultâneos sem lentidão.",
      "Tempo de publicação de matérias reduzido em 35% graças às ferramentas de IA integradas.",
      "Alcançou a marca de 50.000 pageviews logo no primeiro mês."
    ],
    stats: [
      { label: "Usuários Simultâneos", value: "10", suffix: "k+" },
      { label: "Tempo de Pub.", value: "-35", suffix: "%" },
      { label: "Pageviews/mês", value: "50", suffix: "k" }
    ]
  },
  {
    slug: "projecti",
    img: caseProjecti,
    category: "Soluções Digitais",
    title: "ProjecTi",
    text: "Referência em soluções digitais e inteligência aplicada.",
    tags: ["Solutions", "Tech", "Branding"],
    challenge: "A ProjecTi precisava se reposicionar no mercado de tecnologia para competir com grandes consultorias. O desafio não era apenas de código, mas de percepção de valor: o site e a identidade visual antiga não comunicavam a alta capacidade técnica da equipe.",
    solution: "Fizemos um rebranding digital completo. Redesenhamos a identidade visual com foco em um estilo tecnológico e minimalista (Glassmorphism e Dark Mode) e construímos uma nova landing page que foca inteiramente na conversão e na exposição clara da esteira de serviços.",
    results: [
      "Ticket médio dos contratos fechados aumentou 25% devido à nova percepção de valor.",
      "Crescimento de 60% no engajamento dos usuários nas páginas de soluções.",
      "O site tornou-se a principal ferramenta de captação passiva da equipe comercial."
    ],
    stats: [
      { label: "Ticket Médio", value: "+25", suffix: "%" },
      { label: "Engajamento", value: "+60", suffix: "%" },
      { label: "Captação Ativa", value: "2", suffix: "x" }
    ]
  }
];
