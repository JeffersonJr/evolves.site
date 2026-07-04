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
  text: string;
  features: string[];
  description: string;
  whyChooseUs: string[];
  process: { step: string; detail: string }[];
  phases?: ServiceProcessPhase[];
}

export const servicesData: ServiceItem[] = [
  {
    slug: "consultoria-ux-ui",
    icon: PenTool,
    title: "Consultoria em UX/UI",
    text: "Auditoria e redesenho de experiências digitais para aumentar usabilidade, engajamento e conversão.",
    features: ["Pesquisa com usuários", "Testes de usabilidade", "Design system"],
    description: "Nossa consultoria de UX/UI vai além de fazer telas bonitas. Realizamos um mergulho profundo no comportamento do seu usuário para entender os gargalos de conversão do seu sistema ou site atual. O resultado é uma interface altamente intuitiva que reduz fricção e aumenta o faturamento.",
    whyChooseUs: [
      "Decisões baseadas em dados e métricas reais, não apenas em achismos.",
      "Criação de Design Systems completos para padronizar sua marca.",
      "Foco total na jornada do usuário e otimização de conversão (CRO)."
    ],
    process: [],
    phases: [
      {
        name: "Fase 1: Descoberta e Auditoria",
        steps: [
          { id: 1, title: "Briefing e Imersão", detail: "Entendimento do produto, do mercado e das dores dos usuários atuais." },
          { id: 2, title: "Auditoria Heurística", detail: "Análise de usabilidade da interface atual para identificar gargalos de conversão." }
        ]
      },
      {
        name: "Fase 2: Pesquisa e Mapeamento",
        steps: [
          { id: 3, title: "Pesquisa com Usuários", detail: "Coleta de feedback qualitativo e quantitativo (User Research)." },
          { id: 4, title: "Mapeamento da Jornada", detail: "Definição de todos os pontos de contato do cliente com o sistema (User Journey)." }
        ]
      },
      {
        name: "Fase 3: Prototipagem e Design",
        steps: [
          { id: 5, title: "Wireframes (Baixa Fidelidade)", detail: "Estruturação lógica e arquitetura da informação visual." },
          { id: 6, title: "UI Design (Alta Fidelidade)", detail: "Aplicação de cores, tipografia e criação de design system completo." }
        ]
      },
      {
        name: "Fase 4: Validação e Handoff",
        steps: [
          { id: 7, title: "Testes de Usabilidade", detail: "Validação do protótipo navegável com usuários reais para ajustes." },
          { id: 8, title: "Handoff para Devs", detail: "Entrega de toda a documentação, assets e design system para a equipe técnica." }
        ]
      }
    ]
  },
  {
    slug: "sites-inteligentes",
    icon: Globe,
    title: "Sites Inteligentes",
    text: "Websites profissionais focados em conversão, com performance otimizada e arquitetura SEO.",
    features: ["Design responsivo", "Otimização de velocidade", "Integração com IA", "Especialista em UX/UI"],
    description: "Um site institucional hoje precisa ser o seu melhor vendedor. Construímos páginas ultrarrápidas utilizando tecnologias modernas (React, Vite, Next.js) que engajam o visitante e comunicam o valor da sua empresa de forma clara e assertiva nos primeiros 3 segundos.",
    whyChooseUs: [
      "Performance extrema (nota máxima no Google PageSpeed).",
      "Arquitetura de SEO embutida desde a primeira linha de código.",
      "Animações fluidas e microinterações que geram percepção premium."
    ],
    process: [],
    phases: [
      {
        name: "Fase 1: Alinhamento e Planejamento",
        steps: [
          { id: 1, title: "Briefing Inicial", detail: "Reunião para entender os objetivos do negócio, público-alvo e expectativas do projeto." },
          { id: 2, title: "Estudo de Caso & Benchmarking", detail: "Análise de concorrentes, referências visuais e mapeamento da experiência do usuário (UX)." }
        ]
      },
      {
        name: "Fase 2: Criação e Validação",
        steps: [
          { id: 3, title: "UI/UX Prototipagem", detail: "Elaboração do wireframe e do protótipo visual das telas (geralmente no Figma)." },
          { id: 4, title: "Alinhamento e Aprovação", detail: "Reunião estratégica com o cliente para validação e ajustes do design antes do código." }
        ]
      },
      {
        name: "Fase 3: Desenvolvimento e Otimização",
        steps: [
          { id: 5, title: "Produção (Desenvolvimento)", detail: "Construção técnica do site (Front-end e Back-end)." },
          { id: 6, title: "SEO On-Page", detail: "Implementação das melhores práticas de otimização para motores de busca (títulos, tags, velocidade e estrutura)." },
          { id: 7, title: "Configuração de Analytics & Rastreamento", detail: "Integração de ferramentas essenciais de métricas (Google Tag Manager, Google Analytics 4 e Microsoft Clarity)." }
        ]
      },
      {
        name: "Fase 4: Qualidade e Lançamento",
        steps: [
          { id: 8, title: "Testes e Q&A", detail: "Verificação de links, responsividade (mobile/desktop), formulários e compatibilidade de navegadores." },
          { id: 9, title: "Homologação e Entrega", detail: "Apresentação final ao cliente para o 'de acordo' final." },
          { id: 10, title: "Deploy (Site no Ar)", detail: "Publicação oficial no domínio principal e configuração de segurança (SSL)." }
        ]
      }
    ]
  },
  {
    slug: "sistemas-customizados",
    icon: Code2,
    title: "Sistemas Customizados",
    text: "Desenvolvimento de software sob medida com inteligência artificial para otimizar processos.",
    features: ["Automação de tarefas", "Análise de dados", "Escalabilidade"],
    description: "Sistemas de prateleira travam o crescimento de negócios complexos. Desenvolvemos softwares, portais e dashboards sob medida que se adaptam exatamente ao fluxo da sua operação, automatizando o trabalho manual e integrando APIs avançadas.",
    whyChooseUs: [
      "Arquitetura Cloud-native altamente escalável.",
      "Integração nativa com ferramentas de Inteligência Artificial.",
      "Código limpo, seguro e de fácil manutenção no longo prazo."
    ],
    process: [],
    phases: [
      {
        name: "Fase 1: Planejamento e Arquitetura",
        steps: [
          { id: 1, title: "Mapeamento de Requisitos", detail: "Levantamento de regras de negócio e fluxos operacionais necessários." },
          { id: 2, title: "Arquitetura de Software", detail: "Escolha do stack tecnológico (ex: Node.js, React, bancos de dados escaláveis)." }
        ]
      },
      {
        name: "Fase 2: Design e Especificação",
        steps: [
          { id: 3, title: "UI/UX do Sistema", detail: "Prototipação dos dashboards e interfaces de gestão." },
          { id: 4, title: "Modelagem de Dados", detail: "Estruturação de banco de dados escalável para suportar o crescimento da operação." }
        ]
      },
      {
        name: "Fase 3: Desenvolvimento Ágil",
        steps: [
          { id: 5, title: "Desenvolvimento Front/Back", detail: "Criação das APIs e da interface em sprints semanais ou quinzenais." },
          { id: 6, title: "Integração com IA e APIs", detail: "Conexão com serviços de inteligência artificial ou sistemas legados." }
        ]
      },
      {
        name: "Fase 4: Homologação e Implantação",
        steps: [
          { id: 7, title: "Testes Unitários e Q&A", detail: "Garantia de que as regras de negócio foram estritamente cumpridas." },
          { id: 8, title: "Implantação Cloud", detail: "Deploy em ambiente seguro e escalável na nuvem (AWS/GCP/Vercel)." }
        ]
      }
    ]
  },
  {
    slug: "hospedagem-performance",
    icon: Server,
    title: "Hospedagem & Performance",
    text: "Servidores de alta performance com segurança máxima para garantir que seu site nunca pare.",
    features: ["Backup automático", "Suporte humanizado", "Certificado SSL"],
    description: "A infraestrutura em que sua aplicação roda é tão importante quanto o código. Oferecemos soluções de hospedagem Cloud dedicadas que garantem estabilidade, velocidade global e segurança contra ataques, acabando com as dores de cabeça das hospedagens compartilhadas.",
    whyChooseUs: [
      "Uptime garantido de 99,99% para sistemas críticos.",
      "Monitoramento proativo 24/7 e mitigação contra ataques DDoS.",
      "Escalabilidade com 1-clique para suportar picos de acessos (Black Friday)."
    ],
    process: [],
    phases: [
      {
        name: "Fase 1: Análise e Dimensionamento",
        steps: [
          { id: 1, title: "Análise de Carga Atual", detail: "Verificação do tráfego e recursos que a aplicação demanda atualmente." },
          { id: 2, title: "Planejamento de Infra", detail: "Definição da arquitetura (Cloud VPS, balanceadores de carga, storage)." }
        ]
      },
      {
        name: "Fase 2: Configuração Segura",
        steps: [
          { id: 3, title: "Setup de Servidores", detail: "Instalação otimizada de sistemas operacionais e firewalls." },
          { id: 4, title: "Certificados e Segurança", detail: "Implementação de SSL, regras de WAF e bloqueio contra ataques DDoS." }
        ]
      },
      {
        name: "Fase 3: Otimização Extrema",
        steps: [
          { id: 5, title: "Configuração de Cache", detail: "Implementação de Redis/Memcached e CDN global para respostas em milissegundos." },
          { id: 6, title: "Ajustes de Web Server", detail: "Tuning fino em Nginx/Apache/LiteSpeed para suportar alto tráfego." }
        ]
      },
      {
        name: "Fase 4: Migração e Monitoramento",
        steps: [
          { id: 7, title: "Migração Sem Downtime", detail: "Transferência completa do seu sistema sem que ele fique fora do ar." },
          { id: 8, title: "Monitoramento 24/7", detail: "Configuração de alertas de uptime, uso de CPU e automação de backups diários." }
        ]
      }
    ]
  },
  {
    slug: "branding-design",
    icon: Palette,
    title: "Branding & Design",
    text: "Criação de identidades visuais modernas que conectam sua marca ao público-alvo.",
    features: ["Logotipos", "Guia de estilo", "Identidade Visual"],
    description: "Branding não é só um logotipo bonito. É a promessa que sua empresa faz ao mercado. Criamos identidades visuais sólidas, confiáveis e altamente reconhecíveis que posicionam o seu negócio B2B como autoridade incontestável no seu segmento de atuação.",
    whyChooseUs: [
      "Design focado no mercado corporativo B2B (Elegância e Seriedade).",
      "Manuais de marca completos para manter a consistência em todos os canais.",
      "Paletas de cores e tipografias exclusivas que contam uma história."
    ],
    process: [],
    phases: [
      {
        name: "Fase 1: Estratégia de Marca",
        steps: [
          { id: 1, title: "Reunião de Descoberta", detail: "Entrevista profunda para capturar a essência e os valores da empresa." },
          { id: 2, title: "Posicionamento e DNA", detail: "Definição de tom de voz, arquétipo e posicionamento de mercado." }
        ]
      },
      {
        name: "Fase 2: Criação e Identidade",
        steps: [
          { id: 3, title: "Conceito Criativo", detail: "Esboços e direcionamento visual (Construção de Moodboards)." },
          { id: 4, title: "Design de Logotipo", detail: "Criação do símbolo principal com todas as suas variações de aplicação." }
        ]
      },
      {
        name: "Fase 3: Expansão do Universo Visual",
        steps: [
          { id: 5, title: "Cores e Tipografia", detail: "Escolha técnica e psicológica das paletas e fontes ideais." },
          { id: 6, title: "Elementos Gráficos", detail: "Criação de padronagens, ícones customizados e grafismos da marca." }
        ]
      },
      {
        name: "Fase 4: Entrega e Padronização",
        steps: [
          { id: 7, title: "Manual da Marca (Brandbook)", detail: "Guia definitivo ensinando como usar a marca em qualquer cenário." },
          { id: 8, title: "Assets Prontos", detail: "Entrega de arquivos abertos, vetores e versões otimizadas para uso imediato." }
        ]
      }
    ]
  }
];
