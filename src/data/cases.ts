import caseHidrolinfa from "@/assets/case-hidrolinfa.webp";
import caseZion from "@/assets/case-zion.webp";
import caseDuimp from "@/assets/case-duimp.webp";
import caseProjecti from "@/assets/case-projecti.webp";
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
  },
  {
    slug: "zion-tecnologia",
    img: caseZion,
    category: "Site Institucional & Comércio Exterior",
    title: "Zion Tecnologia",
    client: "Zion Tecnologia Comex",
    year: "2024 · 2025",
    scope: "Portal Institucional, Posicionamento B2B, SEO Técnico & Integração com CRM de Vendas",
    country: "🇧🇷 Brasil · Santos & SP",
    liveUrl: "https://ziontecnologia.com.br",
    text: "Uma plataforma moderna e ágil para líderes em softwares e sistemas de importação e comércio exterior.",
    tags: ["Comex", "Portal B2B", "SEO Técnico", "Alta Performance", "Engenharia Web"],
    deliverables: [
      "Redesenho completo da arquitetura de informação e UI B2B",
      "Otimização extrema para termos de importação e SISCOMEX",
      "Integração direta com o CRM comercial da empresa",
      "Tempo de resposta com Core Web Vitals no percentil 99"
    ],
    challenge: "A Zion Tecnologia possuía um site desatualizado que não refletia a robustez do seu principal produto (um sistema complexo de importação). O desafio era criar uma plataforma rápida, que ranqueasse bem no Google e transmitisse credibilidade imediata para tomadores de decisão em comércio exterior.",
    solution: "Desenvolvemos um site institucional completamente novo focado em performance extrema e design voltado à conversão B2B. A arquitetura foi otimizada para SEO Técnico, com carregamento de imagens dinâmico e integração direta com o CRM de vendas da empresa.",
    features: [
      {
        title: "Design System voltado à Conversão B2B",
        description: "Interface com hierarquia clara e pontos de contato focados em diretores de comex e despachantes aduaneiros."
      },
      {
        title: "Arquitetura SEO para Comércio Exterior",
        description: "Indexação cirúrgica para termos de declaração de importação, conformidade aduaneira e integração governamental."
      },
      {
        title: "Integração Direta com Pipeline de Vendas",
        description: "Captação de leads qualificados direcionada em tempo real para a equipe de consultores de implantação."
      }
    ],
    results: [
      "Aumento de 145% no tráfego orgânico qualificado em 6 meses.",
      "Redução da taxa de rejeição de 68% para 31%.",
      "Geração de leads qualificados aumentou em 40% no primeiro trimestre após o lançamento.",
      "Posicionamento consolidado na primeira página do Google para sistemas de importação."
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
    category: "Portal de Notícias & CMS Customizado",
    title: "DuimpWeb",
    client: "Hub Editorial DUIMP / Zion",
    year: "2024 · 2025",
    scope: "CMS Customizado Headless, Automação Editorial com IA, CDN Global & Hub de Suporte",
    country: "🇧🇷 Brasil",
    liveUrl: "https://duimpweb.com.br",
    text: "Portal de conhecimento, notícias e suporte essencial para os operadores e importadores do sistema Zion.",
    tags: ["CMS Custom", "IA Generativa", "Portal B2B", "Escalabilidade", "Alta Disponibilidade"],
    deliverables: [
      "CMS sob medida sem a lentidão de plugins pesados",
      "Pipelines com IA para geração de resumos legislativos",
      "Arquitetura preparada para mais de 10.000 acessos simultâneos",
      "Sistema de busca instantânea de normas técnicas da Receita Federal"
    ],
    challenge: "Com o lançamento da nova declaração DUIMP, todos os clientes que utilizam o sistema de importação da Zion precisavam de um hub digital centralizado para se manterem atualizados. O desafio era criar um portal robusto, com alto volume de tráfego simultâneo, servindo não apenas como um portal de notícias, mas como um ambiente essencial de suporte e documentação rápida para os usuários do sistema Zion.",
    solution: "Criamos um CMS (Content Management System) sob medida, eliminando a lentidão dos plugins tradicionais. Desenvolvemos uma interface limpa, focada em leitura e busca rápida. Integramos ferramentas de Inteligência Artificial para gerar resumos automáticos das atualizações governamentais e otimizar os artigos, garantindo que os clientes encontrem a resposta exata em segundos.",
    features: [
      {
        title: "CMS Sob Medida de Alta Escalabilidade",
        description: "Motor editorial ultraleve construído do zero, eliminando dependências pesadas e garantindo carregamento instantâneo de artigos."
      },
      {
        title: "Resumos Normativos com Inteligência Artificial",
        description: "Automação com IA que sintetiza portarias governamentais extensas em tópicos acionáveis para o operador de comércio exterior."
      },
      {
        title: "Busca Instantânea em Base Documental",
        description: "Mecanismo de indexação que permite encontrar códigos de enquadramento e instruções normativas em milissegundos."
      }
    ],
    results: [
      "Capacidade comprovada de suportar mais de 10.000 usuários simultâneos sem qualquer lentidão.",
      "Tempo de publicação de matérias reduzido em 35% graças às ferramentas de IA integradas.",
      "Alcançou a marca de 50.000 pageviews logo no primeiro mês de operação.",
      "Zero downtime durante picos de anúncios governamentais e novas normativas."
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
    category: "Consultoria & Soluções Digitais",
    title: "ProjecTi",
    client: "ProjecTi Inteligência Digital",
    year: "2024 · 2025",
    scope: "Rebranding Completo, Design System Glassmorphic, Landing Page de Alta Conversão & Posicionamento",
    country: "🇧🇷 Brasil",
    text: "Referência em soluções digitais sob medida, inteligência aplicada e consultoria tecnológica corporativa.",
    tags: ["Branding B2B", "Design System", "Glassmorphism", "Conversão", "Tech Solutions"],
    deliverables: [
      "Rebranding digital e novo manual de identidade de marca",
      "Design System moderno com suporte a dark mode nativo",
      "Landing page de alta conversão para serviços corporativos",
      "Estrutura técnica otimizada para captação passiva de leads"
    ],
    challenge: "A ProjecTi precisava se reposicionar no mercado de tecnologia para competir com grandes consultorias. O desafio não era apenas de código, mas de percepção de valor: o site e a identidade visual antiga não comunicavam a alta capacidade técnica da equipe.",
    solution: "Fizemos um rebranding digital completo. Redesenhamos a identidade visual com foco em um estilo tecnológico e minimalista (Glassmorphism e Dark Mode) e construímos uma nova landing page que foca inteiramente na conversão e na exposição clara da esteira de serviços.",
    features: [
      {
        title: "Rebranding Tecnológico & Posicionamento de Valor",
        description: "Nova identidade visual sóbria e minimalista que eleva a percepção de escala e sofisticação técnica da empresa."
      },
      {
        title: "Exposição Clara da Esteira de Serviços",
        description: "Arquitetura visual que organiza soluções complexas de software e infraestrutura em pacotes intuitivos para tomadores de decisão."
      },
      {
        title: "Conversão Passiva Otimizada",
        description: "Layout projetado para conduzir o visitante organicamente da autoridade técnica para o agendamento de diagnóstico."
      }
    ],
    results: [
      "Ticket médio dos contratos fechados aumentou 25% devido à nova percepção de autoridade da marca.",
      "Crescimento de 60% no engajamento dos usuários nas páginas de serviços e soluções.",
      "O site tornou-se a principal ferramenta de captação passiva e qualificação da equipe comercial.",
      "Presença digital compatível com as maiores consultorias do segmento."
    ],
    stats: [
      { label: "Ticket Médio", value: "+25", suffix: "%" },
      { label: "Engajamento", value: "+60", suffix: "%" },
      { label: "Captação Ativa", value: "2", suffix: "x" }
    ]
  }
];
