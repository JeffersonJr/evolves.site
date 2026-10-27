import caseHidrolinfa from "@/assets/case-hidrolinfa.webp";
import caseUniaofraternal from "@/assets/case-uniaofraternal.webp";
import caseGlebra from "@/assets/case-glebra.webp";

export interface CaseFeature {
  title: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  img: string;
  category: string;
  title: string;
  client?: string;
  year?: string;
  scope?: string;
  country?: string;
  liveUrl?: string;
  text: string;
  tags: string[];
  deliverables?: string[];
  challenge: string;
  solution: string;
  features?: CaseFeature[];
  results: string[];
  stats: { label: string; value: string; suffix?: string }[];
}

export const casesData: CaseStudy[] = [
  {
    slug: "hidrolinfa-portugal",
    img: caseHidrolinfa,
    category: "Clínica & Bem-Estar · Portugal",
    title: "Hidrolinfa Detox Portugal",
    client: "Hidrolinfa Detox Europa",
    year: "2025 · 2026",
    scope: "Plataforma Internacional, Otimização de Conversão Mobile, SEO Multirregional & CDN Europeia",
    country: "🇵🇹 Portugal",
    liveUrl: "https://hidrolinfadetox.com/",
    text: "Plataforma de alta conversão e presença europeia para tratamentos estéticos e equipamentos terapêuticos de alto padrão.",
    tags: ["Europa", "Next-Gen Web", "SEO Internacional", "Performance", "Alta Conversão"],
    deliverables: [
      "Design System Editorial com estética de luxo",
      "Infraestrutura Cloud dedicada na Europa com LiteSpeed",
      "Integração de checkout e captação via WhatsApp Business",
      "Otimização Core Web Vitals (Pontuação 100/100)"
    ],
    challenge: "A Hidrolinfa, referência em tratamentos de estética avançada e desintoxicação iónica em Portugal, precisava de uma presença digital com acabamento editorial de luxo, velocidade instantânea para utilizadores europeus e um fluxo otimizado para captação de agendamentos e venda de equipamentos.",
    solution: "Desenvolvemos uma plataforma com estética refinada, paleta neutra e toques de ouro, hospedada em infraestrutura Cloud dedicada na Europa com LiteSpeed e CDN global. Otimização profunda de Core Web Vitals, formulários anti-spam e integração direta com WhatsApp para conversão rápida.",
    features: [
      {
        title: "Infraestrutura Cloud de Baixa Latência na Europa",
        description: "Hospedagem em data centers europeus com LiteSpeed Enterprise e cache em borda, entregando Time To First Byte (TTFB) abaixo de 80ms em Portugal e Espanha."
      },
      {
        title: "Funil de Agendamento Otimizado para Mobile",
        description: "Experiência mobile com navegação por gestos e acionamento em 1 clique para agendamentos em clínicas parceiras em Lisboa, Caldas da Rainha e Porto."
      },
      {
        title: "SEO Técnico & Marca Internacional",
        description: "Estruturação semântica multi-país e Schema.org com dados médicos e comerciais para indexação prioritária em buscas no Google Europa."
      }
    ],
    results: [
      "Tempo de carregamento reduzido para menos de 1 segundo em acessos na Europa.",
      "Aumento de 47% na conversão mobile nos primeiros 60 dias após o relançamento.",
      "Presença internacional consolidada com atendimentos gerados em Lisboa, Caldas da Rainha e Espanha.",
      "Pontuação perfeita de 100 no Google PageSpeed Insights e Core Web Vitals."
    ],
    stats: [
      { label: "Tempo de Carga", value: "<1", suffix: "s" },
      { label: "Conversão Mobile", value: "+47", suffix: "%" },
      { label: "Core Web Vitals", value: "100", suffix: "/100" }
    ]
  },
  {
    slug: "uniao-fraternal",
    img: caseUniaofraternal,
    category: "Instituição Tradicional & Portal Web",
    title: "ARLS União Fraternal nº 3567",
    client: "ARLS União Fraternal (Baixada Santista)",
    year: "2025 · 2026",
    scope: "Portal Institucional, Blog Doutrinário, Filtro Inteligente de Qualificação & Otimização LLMs",
    country: "🇧🇷 Santos & Praia Grande, SP",
    liveUrl: "https://uniaofraternal.evolves.site/",
    text: "Presença digital para uma das oficinas maçônicas mais respeitadas do litoral paulista, com blog semântico e sistema inteligente de captação e filtragem de candidatos.",
    tags: ["Institucional", "SEO Semântico", "Otimização LLM", "Filtro Inteligente", "Segurança", "Alta Conversão"],
    deliverables: [
      "Portal institucional com identidade sóbria e solene",
      "Blog educativo com indexação estruturada para LLMs e Google",
      "Formulário intake de qualificação com filtro multi-etapas",
      "Arquitetura Jamstack com segurança blindada e LGPD"
    ],
    challenge: "A ARLS União Fraternal, fundada em Santos e estabelecida com sede própria em Praia Grande/SP, necessitava de uma presença online solene e representativa para transmitir a verdadeira essência da Maçonaria à comunidade regional, desmistificando conceitos equivocados. O maior desafio era duplo: (1) posicionar a loja de forma orgânica nos mecanismos de busca tradicionais (Google) e nas novas engines de Inteligência Artificial generativa (ChatGPT, Perplexity, Gemini); e (2) criar um formulário inteligente de interesse que filtrasse candidatos genuínos, separando quem realmente compartilha dos valores da Ordem de meros curiosos da internet.",
    solution: "Desenvolvemos uma plataforma institucional editorial com estética clássica e sóbria, integrando um blog educativo focado em artigos históricos e filosóficos com dados estruturados Schema.org para indexação semântica por LLMs. Implementamos um fluxo interativo de qualificação com questionário progressivo de múltiplos passos (multi-step qualification intake), avaliando intenções, princípios éticos e alinhamento comunitário antes de encaminhar o lead qualificado à comissão de sindicância da loja com criptografia ponta a ponta e total conformidade com a LGPD.",
    features: [
      {
        title: "Funil de Qualificação Progressivo (Smart Intake)",
        description: "Questionário inteligente de múltiplas etapas que analisa perfil, motivação e entendimento prévio do candidato, filtrando curiosos e direcionando apenas postulantes qualificados à comissão de sindicância."
      },
      {
        title: "Otimização para Busca Semântica & LLMs",
        description: "Estruturação semântica rica com JSON-LD e tags para que modelos como ChatGPT Search, Perplexity e Google AI Overviews interpretem com exatidão a história, regularidade e atuação comunitária da oficina."
      },
      {
        title: "Blog Educativo & Repositório Histórico",
        description: "Área de publicações institucionais com tipografia editorial focada em leitura fluida, abordando simbolismo, ações de beneficência e a trajetória de fundação desde Santos até a sede em Praia Grande."
      },
      {
        title: "Privacidade Rigorosa & Conformidade LGPD",
        description: "Armazenamento protegido de informações sensíveis de contato, evitando exposição de dados e garantindo discrição absoluta aos membros e candidatos."
      }
    ],
    results: [
      "Formulário com triagem inteligente reduziu em 82% contatos desqualificados e curiosos, otimizando o tempo da comissão.",
      "Indexação em destaque no Google e em buscas conversacionais de IA (LLMs) para termos maçônicos na Baixada Santista.",
      "Aumento de 210% no tempo médio de permanência dos visitantes devido aos artigos aprofundados do blog educativo.",
      "Carregamento instantâneo com pontuação 100/100 nos Core Web Vitals e hospedagem segura em nuvem."
    ],
    stats: [
      { label: "Triagem Inteligente", value: "82", suffix: "% filtros" },
      { label: "Tempo de Leitura", value: "+210", suffix: "%" },
      { label: "Core Web Vitals", value: "100", suffix: "/100" }
    ]
  },
  {
    slug: "glebra-grande-loja-egipcia",
    img: caseGlebra,
    category: "Potência Maçônica & Biblioteca Digital",
    title: "GLEBRA · Grande Loja Egípcia Brasileira",
    client: "GLEBRA (Rito Antigo e Primitivo de Memphis-Misraïm)",
    year: "2025 · 2026",
    scope: "Portal da Potência, Acervo do Rito, Biblioteca Dinâmica de Conteúdos & Gestão Institucional",
    country: "🇧🇷 Brasil · Âmbito Nacional",
    liveUrl: "https://glebra.evolves.site/",
    text: "Portal oficial da potência para o Rito de Memphis-Misraïm no Brasil, reunindo doutrina ancestral, história dos colégios e uma biblioteca dinâmica de conteúdos maçônicos.",
    tags: ["Potência Maçônica", "Biblioteca Digital", "Acervo Histórico", "Arquitetura Cloud", "Next-Gen Web"],
    deliverables: [
      "Portal oficial institucional com solenidade e rigor histórico",
      "Biblioteca Dinâmica de Conteúdos com busca instantânea",
      "Catálogo de colégios, lojas filiadas e cartas patentes",
      "Infraestrutura de alta disponibilidade com CDN e caching distribuído"
    ],
    challenge: "A Grande Loja Egípcia Brasileira (GLEBRA) — jurisdição soberana do Rito Antigo e Primitivo de Memphis-Misraïm — precisava de um portal oficial que fizesse jus à tradição mística e filosófica egípcia, com solenidade, rigor histórico e clareza para membros e pesquisadores de todo o Brasil. Havia a necessidade de estruturar uma biblioteca dinâmica com busca ágil para organizar decretos, pranchas de instrução, rituais públicos e publicações históricas com categorização temática precisa e navegação veloz.",
    solution: "Criamos uma identidade digital reverente com tipografia imponente, paleta dourada sobre superfícies profundas e um módulo sob medida de Biblioteca Dinâmica com filtros rápidos por tema, grau e formato. A arquitetura foi desenvolvida sobre infraestrutura moderna com renderização estática híbrida, permitindo que textos extensos e documentos da biblioteca abram instantaneamente até em conexões de baixa velocidade, com indexação impecável de metadados.",
    features: [
      {
        title: "Biblioteca Dinâmica de Conteúdo",
        description: "Acervo catalogado com busca instantânea por palavras-chave, filtragem por categorias temáticas, documentos de instrução e artigos de pesquisa histórica sobre o Rito Egípcio."
      },
      {
        title: "Painel Institucional da Potência",
        description: "Apresentação da carta patente, linhagem de sucessão regular, colégios filiados e corpos subordinados em território nacional de maneira transparente e solene."
      },
      {
        title: "Experiência de Leitura Imersiva",
        description: "Layout refinado com tipografia serifada de alta legibilidade, contraste equilibrado para longas sessões de leitura e navegação rápida por seções."
      },
      {
        title: "Infraestrutura Cloud com Cache Distribuído",
        description: "Entrega com edge caching global, garantindo que membros de qualquer estado brasileiro acessem pranchas e documentos sem lentidão."
      }
    ],
    results: [
      "Biblioteca dinâmica com tempo de busca e abertura de documentos inferior a 150ms.",
      "Aumento de 180% no alcance e reconhecimento da potência entre estudiosos do Rito no Brasil e exterior.",
      "Navegação mobile fluida e leitura confortável para longos textos doutrinários e históricos.",
      "Segurança blindada contra ataques e proteção total de acervos protegidos."
    ],
    stats: [
      { label: "Busca na Biblioteca", value: "<150", suffix: "ms" },
      { label: "Alcance Nacional", value: "+180", suffix: "%" },
      { label: "Uptime do Portal", value: "99.9", suffix: "%" }
    ]
  }
];
