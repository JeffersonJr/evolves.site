import { Globe, Code2, Server, Palette, PenTool } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceProcessPhase {
  name: string;
  steps: { id: number; title: string; detail: string }[];
}

export interface ServiceItem {
  slug: string;
  icon: LucideIcon;
  title: string;
  seoTitle: string;
  seoDescription: string;
  text: string;
  features: string[];
  description: string;
  whyChooseUs: string[];
  process: { step: string; detail: string }[];
  phases?: ServiceProcessPhase[];
  faq: { question: string; answer: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    slug: "consultoria-ux-ui",
    icon: PenTool,
    title: "Consultoria UX/UI e Design de Produto",
    seoTitle: "Consultoria UX/UI para Sites e Sistemas | Evolves",
    seoDescription:
      "Auditoria UX/UI, pesquisa e protótipos para melhorar a experiência de sites e sistemas. Conheça a consultoria de produto digital da Evolves.",
    text: "Auditoria e redesenho de experiências digitais para aumentar usabilidade, engajamento e conversão.",
    features: [
      "Pesquisa com usuários",
      "Testes de usabilidade",
      "Design system",
    ],
    description:
      "A consultoria UX/UI da Evolves ajuda empresas a entender onde sites e sistemas criam atrito para seus usuários. Analisamos fluxos, conteúdo e interface, e então propomos melhorias sustentadas por pesquisa, avaliação de usabilidade e protótipos. O escopo é definido conforme o produto e os dados disponíveis.",
    whyChooseUs: [
      "Recomendações ligadas a objetivos, evidências e necessidades do produto.",
      "Protótipos e componentes para alinhar design, negócio e desenvolvimento.",
      "Atenção à jornada completa, da descoberta à tarefa que o usuário precisa concluir.",
    ],
    process: [],
    phases: [
      {
        name: "Fase 1: Descoberta e Auditoria",
        steps: [
          {
            id: 1,
            title: "Briefing e Imersão",
            detail:
              "Entendimento do produto, do mercado e das dores dos usuários atuais.",
          },
          {
            id: 2,
            title: "Auditoria Heurística",
            detail:
              "Análise de usabilidade da interface atual para identificar gargalos de conversão.",
          },
        ],
      },
      {
        name: "Fase 2: Pesquisa e Mapeamento",
        steps: [
          {
            id: 3,
            title: "Pesquisa com Usuários",
            detail:
              "Coleta de feedback qualitativo e quantitativo (User Research).",
          },
          {
            id: 4,
            title: "Mapeamento da Jornada",
            detail:
              "Definição de todos os pontos de contato do cliente com o sistema (User Journey).",
          },
        ],
      },
      {
        name: "Fase 3: Prototipagem e Design",
        steps: [
          {
            id: 5,
            title: "Wireframes (Baixa Fidelidade)",
            detail: "Estruturação lógica e arquitetura da informação visual.",
          },
          {
            id: 6,
            title: "UI Design (Alta Fidelidade)",
            detail:
              "Aplicação de cores, tipografia e criação de design system completo.",
          },
        ],
      },
      {
        name: "Fase 4: Validação e Handoff",
        steps: [
          {
            id: 7,
            title: "Testes de Usabilidade",
            detail:
              "Validação do protótipo navegável com usuários reais para ajustes.",
          },
          {
            id: 8,
            title: "Handoff para Devs",
            detail:
              "Entrega de toda a documentação, assets e design system para a equipe técnica.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "O que inclui uma consultoria UX/UI?",
        answer:
          "O escopo pode incluir diagnóstico da interface, análise heurística, entrevistas ou testes com usuários, mapeamento de jornadas, protótipos e recomendações priorizadas. Definimos as atividades conforme os objetivos e os dados disponíveis no projeto.",
      },
      {
        question:
          "A consultoria UX/UI serve para um sistema que já está no ar?",
        answer:
          "Sim. É possível avaliar um produto existente, identificar pontos de fricção e propor melhorias sem refazer toda a interface. A análise considera contexto, fluxos críticos e necessidades dos usuários.",
      },
      {
        question: "A Evolves também desenvolve as telas depois do design?",
        answer:
          "A Evolves trabalha com design e desenvolvimento de produtos digitais. O projeto pode incluir apenas a etapa de UX/UI ou também a implementação, conforme o escopo combinado.",
      },
    ],
  },
  {
    slug: "sites-inteligentes",
    icon: Globe,
    title: "Criação de Sites Profissionais",
    seoTitle: "Criação de Sites e Desenvolvimento Web | Evolves",
    seoDescription:
      "Criação e desenvolvimento de sites profissionais para empresas, com conteúdo claro, design responsivo, estrutura técnica de SEO e foco na experiência.",
    text: "Criação de sites profissionais e desenvolvimento web para empresas, com design responsivo, conteúdo claro e uma base técnica preparada para SEO.",
    features: [
      "Sites institucionais",
      "Design responsivo",
      "Estrutura técnica de SEO",
      "Integrações conforme o projeto",
    ],
    description:
      "A Evolves planeja e desenvolve sites profissionais para empresas que precisam apresentar seus serviços, explicar soluções complexas e facilitar o contato comercial. O projeto combina arquitetura de informação, conteúdo, design responsivo e desenvolvimento web. A tecnologia e as integrações são escolhidas conforme os objetivos e a operação de cada negócio.",
    whyChooseUs: [
      "Estrutura semântica, URLs claras e metadados configurados para cada página.",
      "Interface pensada para leitura, navegação em celular e próximos passos claros.",
      "Base técnica que pode ser evoluída conforme conteúdo e negócio crescem.",
    ],
    process: [],
    phases: [
      {
        name: "Fase 1: Alinhamento e Planejamento",
        steps: [
          {
            id: 1,
            title: "Briefing Inicial",
            detail:
              "Reunião para entender os objetivos do negócio, público-alvo e expectativas do projeto.",
          },
          {
            id: 2,
            title: "Estudo de Caso & Benchmarking",
            detail:
              "Análise de concorrentes, referências visuais e mapeamento da experiência do usuário (UX).",
          },
        ],
      },
      {
        name: "Fase 2: Criação e Validação",
        steps: [
          {
            id: 3,
            title: "UI/UX Prototipagem",
            detail:
              "Elaboração do wireframe e do protótipo visual das telas (geralmente no Figma).",
          },
          {
            id: 4,
            title: "Alinhamento e Aprovação",
            detail:
              "Reunião estratégica com o cliente para validação e ajustes do design antes do código.",
          },
        ],
      },
      {
        name: "Fase 3: Desenvolvimento e Otimização",
        steps: [
          {
            id: 5,
            title: "Produção (Desenvolvimento)",
            detail: "Construção técnica do site (Front-end e Back-end).",
          },
          {
            id: 6,
            title: "SEO On-Page",
            detail:
              "Implementação das melhores práticas de otimização para motores de busca (títulos, tags, velocidade e estrutura).",
          },
          {
            id: 7,
            title: "Configuração de Analytics & Rastreamento",
            detail:
              "Integração de ferramentas essenciais de métricas (Google Tag Manager, Google Analytics 4 e Microsoft Clarity).",
          },
        ],
      },
      {
        name: "Fase 4: Qualidade e Lançamento",
        steps: [
          {
            id: 8,
            title: "Testes e Q&A",
            detail:
              "Verificação de links, responsividade (mobile/desktop), formulários e compatibilidade de navegadores.",
          },
          {
            id: 9,
            title: "Homologação e Entrega",
            detail: "Apresentação final ao cliente para o 'de acordo' final.",
          },
          {
            id: 10,
            title: "Deploy (Site no Ar)",
            detail:
              "Publicação oficial no domínio principal e configuração de segurança (SSL).",
          },
        ],
      },
    ],
    faq: [
      {
        question: "Que tipos de site a Evolves desenvolve?",
        answer:
          "A Evolves cria sites institucionais, páginas de serviços, portais e experiências web. O formato é definido a partir do público, conteúdo, integrações e objetivos comerciais do projeto.",
      },
      {
        question: "O site já sai otimizado para o Google?",
        answer:
          "O desenvolvimento inclui fundamentos técnicos como hierarquia de títulos, metadados, URLs, links internos e sitemap quando aplicável. O posicionamento também depende da utilidade do conteúdo, concorrência, autoridade e acompanhamento após a publicação.",
      },
      {
        question: "A Evolves cria o conteúdo do site?",
        answer:
          "A arquitetura e o conteúdo são planejados no escopo do projeto. Podemos organizar e revisar os materiais fornecidos pela empresa; a produção de textos e imagens é alinhada durante o briefing.",
      },
      {
        question: "A empresa poderá atualizar o site depois?",
        answer:
          "A possibilidade de edição depende da plataforma e do escopo definidos. As opções de gestão de conteúdo e manutenção são apresentadas antes do desenvolvimento.",
      },
    ],
  },
  {
    slug: "sistemas-customizados",
    icon: Code2,
    title: "Sistemas Customizados para Empresas",
    seoTitle: "Desenvolvimento de Sistemas Customizados | Evolves",
    seoDescription:
      "Desenvolvimento de sistemas customizados, portais e dashboards alinhados aos processos da empresa, com integrações e arquitetura planejadas.",
    text: "Desenvolvimento de sistemas customizados, portais e dashboards para organizar operações e conectar ferramentas da empresa.",
    features: ["Automação de tarefas", "Análise de dados", "Escalabilidade"],
    description:
      "Desenvolvemos sistemas sob medida para empresas cujos processos não são atendidos por ferramentas prontas. O trabalho começa pelo mapeamento das regras de negócio e dos usuários; depois definimos fluxos, dados, integrações e uma arquitetura que possa ser mantida e evoluída. O escopo pode incluir portais, dashboards, APIs e automações.",
    whyChooseUs: [
      "Regras de negócio e integrações planejadas antes da implementação.",
      "Interface alinhada ao fluxo real de trabalho das equipes.",
      "Documentação e decisões técnicas consideradas para manutenção futura.",
    ],
    process: [],
    phases: [
      {
        name: "Fase 1: Planejamento e Arquitetura",
        steps: [
          {
            id: 1,
            title: "Mapeamento de Requisitos",
            detail:
              "Levantamento de regras de negócio e fluxos operacionais necessários.",
          },
          {
            id: 2,
            title: "Arquitetura de Software",
            detail:
              "Escolha do stack tecnológico (ex: Node.js, React, bancos de dados escaláveis).",
          },
        ],
      },
      {
        name: "Fase 2: Design e Especificação",
        steps: [
          {
            id: 3,
            title: "UI/UX do Sistema",
            detail: "Prototipação dos dashboards e interfaces de gestão.",
          },
          {
            id: 4,
            title: "Modelagem de Dados",
            detail:
              "Estruturação de banco de dados escalável para suportar o crescimento da operação.",
          },
        ],
      },
      {
        name: "Fase 3: Desenvolvimento Ágil",
        steps: [
          {
            id: 5,
            title: "Desenvolvimento Front/Back",
            detail:
              "Criação das APIs e da interface em sprints semanais ou quinzenais.",
          },
          {
            id: 6,
            title: "Integração com IA e APIs",
            detail:
              "Conexão com serviços de inteligência artificial ou sistemas legados.",
          },
        ],
      },
      {
        name: "Fase 4: Homologação e Implantação",
        steps: [
          {
            id: 7,
            title: "Testes e homologação",
            detail:
              "Validação dos cenários e critérios de aceite definidos para o projeto.",
          },
          {
            id: 8,
            title: "Implantação Cloud",
            detail:
              "Deploy em ambiente seguro e escalável na nuvem (AWS/GCP/Vercel).",
          },
        ],
      },
    ],
    faq: [
      {
        question: "Quando faz sentido desenvolver um sistema customizado?",
        answer:
          "Quando processos críticos dependem de planilhas, tarefas repetitivas ou ferramentas que não se integram bem, um sistema sob medida pode consolidar fluxos. A decisão deve comparar custo total, riscos, manutenção e alternativas prontas.",
      },
      {
        question: "Que sistemas a Evolves pode desenvolver?",
        answer:
          "O escopo pode incluir sistemas web, portais, dashboards, APIs e integrações. A arquitetura é escolhida após entender usuários, volume de dados, regras e sistemas existentes.",
      },
      {
        question:
          "É possível integrar o sistema com ferramentas que já usamos?",
        answer:
          "É possível avaliar integrações com APIs e sistemas legados. A viabilidade depende da documentação, permissões e limitações técnicas de cada fornecedor.",
      },
    ],
  },
  {
    slug: "hospedagem-performance",
    icon: Server,
    title: "Hospedagem Cloud e Performance",
    seoTitle: "Hospedagem Cloud para Sites e Sistemas | Evolves",
    seoDescription:
      "Hospedagem cloud e suporte de infraestrutura para sites e sistemas. Avalie recursos, segurança, backups e desempenho adequados à sua aplicação.",
    text: "Hospedagem cloud e infraestrutura para sites e sistemas, dimensionadas conforme os requisitos da aplicação e do negócio.",
    features: ["Backup automático", "Suporte humanizado", "Certificado SSL"],
    description:
      "A Evolves planeja e configura hospedagem cloud para sites e sistemas considerando tráfego, dependências, armazenamento, disponibilidade e orçamento. A escolha da infraestrutura, as rotinas de backup, os controles de segurança e o monitoramento precisam refletir os requisitos reais da aplicação; recursos e níveis de serviço são definidos no escopo contratado.",
    whyChooseUs: [
      "Dimensionamento da infraestrutura com base na aplicação e no uso esperado.",
      "Configuração de domínio, HTTPS, backups e observabilidade conforme o escopo.",
      "Planejamento de capacidade e opções para responder ao crescimento do tráfego.",
    ],
    process: [],
    phases: [
      {
        name: "Fase 1: Análise e Dimensionamento",
        steps: [
          {
            id: 1,
            title: "Análise de Carga Atual",
            detail:
              "Verificação do tráfego e recursos que a aplicação demanda atualmente.",
          },
          {
            id: 2,
            title: "Planejamento de Infra",
            detail:
              "Definição da arquitetura (Cloud VPS, balanceadores de carga, storage).",
          },
        ],
      },
      {
        name: "Fase 2: Configuração Segura",
        steps: [
          {
            id: 3,
            title: "Setup de Servidores",
            detail:
              "Instalação otimizada de sistemas operacionais e firewalls.",
          },
          {
            id: 4,
            title: "Certificados e Segurança",
            detail:
              "Implementação de SSL, regras de WAF e bloqueio contra ataques DDoS.",
          },
        ],
      },
      {
        name: "Fase 3: Otimização Extrema",
        steps: [
          {
            id: 5,
            title: "Configuração de Cache",
            detail:
              "Implementação de Redis/Memcached e CDN global para respostas em milissegundos.",
          },
          {
            id: 6,
            title: "Ajustes de Web Server",
            detail:
              "Tuning fino em Nginx/Apache/LiteSpeed para suportar alto tráfego.",
          },
        ],
      },
      {
        name: "Fase 4: Migração e Monitoramento",
        steps: [
          {
            id: 7,
            title: "Plano de migração",
            detail:
              "Transferência planejada com validação e estratégia de retorno conforme o ambiente.",
          },
          {
            id: 8,
            title: "Monitoramento e rotinas",
            detail:
              "Configuração de alertas e backups conforme os requisitos e o escopo contratado.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "O que é hospedagem cloud?",
        answer:
          "É uma forma de executar aplicações usando recursos de infraestrutura em nuvem. A configuração adequada depende da arquitetura, tráfego, armazenamento, integrações e requisitos de disponibilidade do projeto.",
      },
      {
        question:
          "A hospedagem cloud garante que o site nunca fique fora do ar?",
        answer:
          "Nenhuma hospedagem deve ser apresentada como garantia absoluta de disponibilidade. O serviço pode incluir medidas de redundância, backup e monitoramento, conforme a arquitetura e o nível de serviço contratado.",
      },
      {
        question: "A Evolves migra um site para cloud?",
        answer:
          "A migração pode ser avaliada após revisar a aplicação, banco de dados, DNS, integrações e janelas de mudança. O plano busca reduzir riscos e define validações e estratégia de retorno.",
      },
    ],
  },
  {
    slug: "branding-design",
    icon: Palette,
    title: "Branding B2B e Identidade Visual",
    seoTitle: "Branding B2B e Identidade Visual para Empresas | Evolves",
    seoDescription:
      "Estratégia de marca e identidade visual para empresas B2B. Alinhe posicionamento, linguagem e sistema visual aos públicos e objetivos do negócio.",
    text: "Branding B2B e identidade visual para empresas que precisam comunicar com clareza seu posicionamento e diferenciais.",
    features: ["Logotipos", "Guia de estilo", "Identidade Visual"],
    description:
      "O branding B2B organiza como uma empresa se posiciona e se apresenta a clientes, parceiros e equipes. A Evolves trabalha estratégia e identidade visual para traduzir atributos e diferenciais em uma linguagem consistente, que pode ser aplicada no site, em apresentações e nos demais pontos de contato da marca.",
    whyChooseUs: [
      "Posicionamento e identidade visual alinhados ao contexto de compra B2B.",
      "Sistema visual documentado para orientar aplicações futuras.",
      "Conceitos apresentados e refinados com base nos objetivos do negócio.",
    ],
    process: [],
    phases: [
      {
        name: "Fase 1: Estratégia de Marca",
        steps: [
          {
            id: 1,
            title: "Reunião de Descoberta",
            detail:
              "Entrevista profunda para capturar a essência e os valores da empresa.",
          },
          {
            id: 2,
            title: "Posicionamento e DNA",
            detail:
              "Definição de tom de voz, arquétipo e posicionamento de mercado.",
          },
        ],
      },
      {
        name: "Fase 2: Criação e Identidade",
        steps: [
          {
            id: 3,
            title: "Conceito Criativo",
            detail:
              "Esboços e direcionamento visual (Construção de Moodboards).",
          },
          {
            id: 4,
            title: "Design de Logotipo",
            detail:
              "Criação do símbolo principal com todas as suas variações de aplicação.",
          },
        ],
      },
      {
        name: "Fase 3: Expansão do Universo Visual",
        steps: [
          {
            id: 5,
            title: "Cores e Tipografia",
            detail:
              "Escolha técnica e psicológica das paletas e fontes ideais.",
          },
          {
            id: 6,
            title: "Elementos Gráficos",
            detail:
              "Criação de padronagens, ícones customizados e grafismos da marca.",
          },
        ],
      },
      {
        name: "Fase 4: Entrega e Padronização",
        steps: [
          {
            id: 7,
            title: "Manual da Marca (Brandbook)",
            detail:
              "Guia definitivo ensinando como usar a marca em qualquer cenário.",
          },
          {
            id: 8,
            title: "Assets Prontos",
            detail:
              "Entrega de arquivos abertos, vetores e versões otimizadas para uso imediato.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "O que faz parte de um projeto de branding B2B?",
        answer:
          "Conforme o escopo, o projeto pode incluir diagnóstico, posicionamento, linguagem verbal, conceito visual, logotipo, paleta, tipografia e guia de aplicação. As entregas são definidas no briefing.",
      },
      {
        question: "Branding é o mesmo que criar um logotipo?",
        answer:
          "Não. O logotipo é um dos elementos da identidade visual. Branding também trata de posicionamento, atributos, linguagem e consistência da marca nos pontos de contato.",
      },
      {
        question: "A identidade pode ser aplicada ao site da empresa?",
        answer:
          "Sim. A identidade pode orientar a criação ou evolução do site e de outros materiais digitais, com a extensão do trabalho definida no escopo.",
      },
    ],
  },
  {
    slug: "seo-tecnico",
    icon: Globe,
    title: "SEO Técnico para Sites",
    seoTitle: "SEO Técnico: Auditoria e Implementação | Evolves",
    seoDescription:
      "Auditoria e implementação de SEO técnico: rastreamento, indexação, estrutura, metadados e dados estruturados para sites e sistemas web.",
    text: "Auditoria e implementação de SEO técnico para ajudar mecanismos de busca a rastrear, interpretar e indexar páginas importantes.",
    features: [
      "Auditoria de rastreamento e indexação",
      "Metadados, canonicals e sitemap",
      "Dados estruturados e arquitetura",
    ],
    description:
      "SEO técnico é a base que ajuda mecanismos de busca a acessar e compreender um site. A Evolves revisa rastreamento, indexação, arquitetura de URLs, links internos, metadados, renderização e dados estruturados. O diagnóstico prioriza correções por impacto e esforço; conteúdo útil e autoridade seguem essenciais para competir por posições orgânicas.",
    whyChooseUs: [
      "Recomendações priorizadas em vez de uma lista genérica de alertas.",
      "Implementação considerada junto à arquitetura e ao código do site.",
      "Sinais técnicos e conteúdo tratados como partes complementares do SEO.",
    ],
    process: [],
    phases: [
      {
        name: "Fase 1: Diagnóstico",
        steps: [
          {
            id: 1,
            title: "Entendimento do site",
            detail:
              "Revisão da plataforma, páginas, objetivos e problemas observados pela equipe.",
          },
          {
            id: 2,
            title: "Auditoria técnica",
            detail:
              "Análise de rastreabilidade, indexação, URLs, links internos, metadados e dados estruturados.",
          },
        ],
      },
      {
        name: "Fase 2: Priorização",
        steps: [
          {
            id: 3,
            title: "Plano de correções",
            detail:
              "Agrupamento de achados por impacto, dependências e esforço de implementação.",
          },
          {
            id: 4,
            title: "Alinhamento editorial",
            detail:
              "Mapeamento entre páginas, serviços, intenção de busca e conteúdos existentes.",
          },
        ],
      },
      {
        name: "Fase 3: Implementação e acompanhamento",
        steps: [
          {
            id: 5,
            title: "Correções técnicas",
            detail:
              "Ajustes acordados em templates, metadados, canonicals, estrutura e marcação.",
          },
          {
            id: 6,
            title: "Validação",
            detail:
              "Revisão das URLs publicadas e orientação para acompanhar rastreamento e desempenho orgânico.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "O que uma auditoria de SEO técnico analisa?",
        answer:
          "Pode analisar rastreamento, indexação, canonicals, sitemap, robots, redirecionamentos, status HTTP, renderização, arquitetura, links internos, metadados, dados estruturados e aspectos de desempenho.",
      },
      {
        question: "SEO técnico sozinho coloca um site na primeira página?",
        answer:
          "Não. A parte técnica remove obstáculos e melhora a compreensão do site, mas posições dependem também da qualidade e relevância do conteúdo, da concorrência, da autoridade e da intenção da busca.",
      },
      {
        question: "A Evolves faz a auditoria e também implementa as correções?",
        answer:
          "O trabalho pode combinar diagnóstico e implementação no site. O escopo depende da plataforma, das permissões e do tamanho das correções necessárias.",
      },
    ],
  },
  {
    slug: "inteligencia-artificial",
    icon: Code2,
    title: "Inteligência Artificial para Empresas",
    seoTitle: "Inteligência Artificial e Automação para Empresas | Evolves",
    seoDescription:
      "Planejamento e desenvolvimento de integrações com inteligência artificial para produtos digitais e processos empresariais, com escopo e revisão humana.",
    text: "Integração de inteligência artificial a produtos digitais e processos empresariais quando existe um problema claro a resolver.",
    features: [
      "Mapeamento de oportunidades",
      "Integração com APIs de IA",
      "Automação com critérios de validação",
    ],
    description:
      "A Evolves ajuda empresas a avaliar onde inteligência artificial pode apoiar produtos e processos. O trabalho começa com um caso de uso delimitado e considera dados disponíveis, integrações, privacidade, custos e revisão humana. A implementação pode conectar serviços de IA a sistemas, portais ou fluxos existentes, com critérios de qualidade definidos para cada projeto.",
    whyChooseUs: [
      "O caso de uso e os riscos são avaliados antes da escolha da ferramenta.",
      "Integrações desenhadas em conjunto com o software e o processo existente.",
      "Critérios de qualidade e intervenção humana definidos conforme o impacto.",
    ],
    process: [],
    phases: [
      {
        name: "Fase 1: Caso de uso",
        steps: [
          {
            id: 1,
            title: "Mapeamento do processo",
            detail:
              "Identificação da tarefa, usuários envolvidos, dados e resultado esperado.",
          },
          {
            id: 2,
            title: "Viabilidade e riscos",
            detail:
              "Análise de qualidade, privacidade, custo operacional e necessidade de revisão humana.",
          },
        ],
      },
      {
        name: "Fase 2: Protótipo",
        steps: [
          {
            id: 3,
            title: "Desenho da integração",
            detail:
              "Definição de entradas, respostas, permissões, limites e integrações necessárias.",
          },
          {
            id: 4,
            title: "Avaliação com exemplos",
            detail:
              "Validação do comportamento esperado com cenários representativos do negócio.",
          },
        ],
      },
      {
        name: "Fase 3: Implementação",
        steps: [
          {
            id: 5,
            title: "Integração ao produto",
            detail:
              "Desenvolvimento do fluxo e dos controles definidos para o caso de uso.",
          },
          {
            id: 6,
            title: "Observação e ajustes",
            detail:
              "Acompanhamento de falhas, custo e qualidade após a entrada em operação.",
          },
        ],
      },
    ],
    faq: [
      {
        question:
          "Que tipo de solução com inteligência artificial a Evolves desenvolve?",
        answer:
          "As possibilidades incluem integrações com APIs de IA, busca e resumo de informação, classificação de conteúdo e apoio a fluxos existentes. A escolha depende da tarefa, dos dados e dos critérios de qualidade.",
      },
      {
        question: "É necessário usar IA em todo o processo?",
        answer:
          "Não. A avaliação considera se automação tradicional ou uma mudança no processo resolve melhor o problema. IA só entra quando há um caso de uso claro e viável.",
      },
      {
        question: "Como evitar respostas incorretas ou exposição de dados?",
        answer:
          "O projeto define permissões, dados enviados ao fornecedor, limites de uso, validação e revisão humana conforme o risco. Essas decisões precisam ser alinhadas aos requisitos e às políticas da empresa.",
      },
    ],
  },
  {
    slug: "lojas-virtuais",
    icon: Globe,
    title: "Desenvolvimento de Lojas Virtuais",
    seoTitle: "Criação de Loja Virtual e E-commerce | Evolves",
    seoDescription:
      "Desenvolvimento de lojas virtuais com catálogo, jornada de compra e integrações planejadas conforme a operação, os meios de pagamento e a logística.",
    text: "Lojas virtuais planejadas para catálogo, jornada de compra e integrações que fazem parte da operação do negócio.",
    features: [
      "Arquitetura de catálogo",
      "Jornada responsiva de compra",
      "Integrações avaliadas por projeto",
    ],
    description:
      "A criação de uma loja virtual envolve mais que as páginas de produto: catálogo, estoque, pagamento, frete, atendimento e gestão precisam funcionar juntos. A Evolves planeja e desenvolve experiências de e-commerce conforme o modelo de venda, os sistemas existentes e as necessidades da equipe, avaliando se uma plataforma pronta ou uma solução customizada é mais adequada.",
    whyChooseUs: [
      "Decisões de plataforma orientadas pelo catálogo e pela operação real.",
      "Jornada de compra projetada para uso em celular e computador.",
      "Integrações e requisitos levantados antes de fechar o escopo técnico.",
    ],
    process: [],
    phases: [
      {
        name: "Fase 1: Operação e catálogo",
        steps: [
          {
            id: 1,
            title: "Requisitos comerciais",
            detail:
              "Entendimento dos produtos, clientes, regras de preço, estoque e atendimento.",
          },
          {
            id: 2,
            title: "Escolha da arquitetura",
            detail:
              "Comparação entre plataforma, integrações disponíveis e desenvolvimento customizado.",
          },
        ],
      },
      {
        name: "Fase 2: Experiência de compra",
        steps: [
          {
            id: 3,
            title: "Estrutura e navegação",
            detail:
              "Organização de categorias, busca, páginas de produto e conteúdo de suporte.",
          },
          {
            id: 4,
            title: "Checkout e integrações",
            detail:
              "Mapeamento de pagamento, entrega, estoque e sistemas envolvidos na compra.",
          },
        ],
      },
      {
        name: "Fase 3: Desenvolvimento e lançamento",
        steps: [
          {
            id: 5,
            title: "Implementação",
            detail:
              "Construção e configuração das páginas e integrações aprovadas no escopo.",
          },
          {
            id: 6,
            title: "Validação da operação",
            detail:
              "Revisão de navegação, pedidos, conteúdo e fluxos acordados antes da publicação.",
          },
        ],
      },
    ],
    faq: [
      {
        question:
          "A Evolves faz loja virtual em plataforma pronta ou sob medida?",
        answer:
          "A escolha depende do catálogo, integrações, autonomia da equipe e regras da operação. O diagnóstico compara alternativas antes da definição da arquitetura.",
      },
      {
        question: "A loja pode integrar pagamento e frete?",
        answer:
          "Integrações podem ser avaliadas conforme os provedores escolhidos e a disponibilidade de APIs. Taxas, contratos e condições comerciais desses provedores são definidos diretamente entre a empresa e cada fornecedor.",
      },
      {
        question: "O que preciso definir antes de criar um e-commerce?",
        answer:
          "É importante mapear produtos e variações, estoque, preços, meios de pagamento, logística, atendimento, políticas de troca e quem manterá o catálogo.",
      },
    ],
  },
  {
    slug: "acessibilidade-digital",
    icon: PenTool,
    title: "Acessibilidade Digital para Sites",
    seoTitle: "Acessibilidade Digital e Auditoria WCAG | Evolves",
    seoDescription:
      "Avaliação e melhorias de acessibilidade em sites e sistemas, com foco em navegação por teclado, estrutura semântica, contraste e critérios WCAG.",
    text: "Avaliação e melhorias de acessibilidade digital em sites e sistemas para reduzir barreiras de navegação e compreensão.",
    features: [
      "Auditoria de interface",
      "Navegação por teclado e semântica",
      "Recomendações alinhadas à WCAG",
    ],
    description:
      "A acessibilidade digital busca reduzir barreiras para pessoas com diferentes capacidades e formas de interação. A Evolves avalia sites e sistemas com verificações de estrutura semântica, foco e teclado, contraste, formulários e conteúdo. Os achados são priorizados e transformados em recomendações ou correções conforme o escopo. Uma auditoria não substitui avaliação jurídica de conformidade.",
    whyChooseUs: [
      "Revisão de padrões de interface que afetam tarefas reais dos usuários.",
      "Combinação de verificações técnicas e avaliação manual dos fluxos acordados.",
      "Recomendações práticas para equipes de design e desenvolvimento.",
    ],
    process: [],
    phases: [
      {
        name: "Fase 1: Escopo da avaliação",
        steps: [
          {
            id: 1,
            title: "Páginas e tarefas",
            detail:
              "Seleção dos fluxos, templates e componentes que serão avaliados.",
          },
          {
            id: 2,
            title: "Critérios",
            detail:
              "Definição dos critérios de acessibilidade aplicáveis e das formas de verificação.",
          },
        ],
      },
      {
        name: "Fase 2: Auditoria",
        steps: [
          {
            id: 3,
            title: "Verificações automáticas",
            detail:
              "Uso de ferramentas para localizar padrões comuns, sem tratar o resultado como auditoria completa.",
          },
          {
            id: 4,
            title: "Revisão manual",
            detail:
              "Avaliação de teclado, foco, estrutura, conteúdo, formulários e estados da interface.",
          },
        ],
      },
      {
        name: "Fase 3: Recomendações",
        steps: [
          {
            id: 5,
            title: "Achados priorizados",
            detail:
              "Registro das barreiras observadas, impacto no fluxo e recomendações de correção.",
          },
          {
            id: 6,
            title: "Apoio à implementação",
            detail:
              "Correções e nova revisão podem ser incluídas conforme o escopo contratado.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "O que é acessibilidade digital?",
        answer:
          "É a prática de projetar e manter conteúdos e interfaces digitais que possam ser percebidos e utilizados por pessoas com diferentes capacidades, dispositivos e formas de interação.",
      },
      {
        question: "Uma ferramenta automática certifica que o site é acessível?",
        answer:
          "Não. Ferramentas automáticas ajudam a encontrar alguns problemas, mas não avaliam sozinhas todos os critérios nem a experiência completa. Revisões manuais são necessárias.",
      },
      {
        question: "A avaliação garante conformidade legal?",
        answer:
          "Uma avaliação técnica pode identificar problemas segundo critérios definidos, mas não é garantia jurídica de conformidade. Requisitos legais devem ser avaliados com profissionais jurídicos competentes.",
      },
    ],
  },
  {
    slug: "consultoria-tech",
    icon: Code2,
    title: "Consultoria Tech e Arquitetura de Software",
    seoTitle: "Consultoria Tech e Arquitetura de Software | Evolves",
    seoDescription:
      "Consultoria tecnológica para avaliar arquitetura, integrações, plataformas e caminhos de evolução de produtos e operações digitais.",
    text: "Consultoria tech para decisões de arquitetura, integração e evolução de produtos digitais e operações de software.",
    features: [
      "Diagnóstico técnico",
      "Arquitetura e integrações",
      "Roadmap de evolução",
    ],
    description:
      "A consultoria tech da Evolves ajuda equipes a tomar decisões sobre software, arquitetura e integrações com base no contexto do negócio. O trabalho pode revisar uma aplicação existente, comparar caminhos de migração, esclarecer requisitos e organizar um roadmap. A recomendação considera capacidade da equipe, riscos, manutenção e restrições técnicas já identificadas.",
    whyChooseUs: [
      "Recomendações ligadas a requisitos e restrições documentadas.",
      "Discussão de alternativas, dependências e custos de manutenção.",
      "Plano que pode orientar uma equipe interna ou um projeto de implementação.",
    ],
    process: [],
    phases: [
      {
        name: "Fase 1: Contexto",
        steps: [
          {
            id: 1,
            title: "Objetivos e restrições",
            detail:
              "Levantamento de metas, equipe, sistemas envolvidos e limites conhecidos.",
          },
          {
            id: 2,
            title: "Leitura técnica",
            detail:
              "Revisão dos componentes, integrações, fluxos e decisões disponíveis no projeto.",
          },
        ],
      },
      {
        name: "Fase 2: Alternativas",
        steps: [
          {
            id: 3,
            title: "Opções de arquitetura",
            detail:
              "Comparação de soluções possíveis considerando operação, evolução e manutenção.",
          },
          {
            id: 4,
            title: "Riscos e dependências",
            detail:
              "Identificação dos pontos que afetam estimativa, continuidade e implantação.",
          },
        ],
      },
      {
        name: "Fase 3: Plano",
        steps: [
          {
            id: 5,
            title: "Roadmap priorizado",
            detail:
              "Organização das próximas decisões e entregas em etapas compreensíveis.",
          },
          {
            id: 6,
            title: "Alinhamento com a equipe",
            detail:
              "Apresentação dos critérios e recomendações para apoiar a execução.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "Para quem é uma consultoria tech?",
        answer:
          "Para empresas que precisam avaliar um sistema, planejar integrações ou decidir como evoluir uma operação digital e desejam organizar opções e riscos antes de investir.",
      },
      {
        question: "A consultoria inclui desenvolvimento?",
        answer:
          "Pode ser contratada como diagnóstico e planejamento ou conectada a uma etapa de implementação. A extensão do trabalho é definida no escopo.",
      },
      {
        question: "A Evolves ajuda a escolher uma tecnologia?",
        answer:
          "Sim. As opções são avaliadas conforme requisitos, equipe, integrações, segurança e manutenção esperada, sem assumir que uma tecnologia serve para todos os projetos.",
      },
    ],
  },
];
