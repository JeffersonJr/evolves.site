export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  dateModified?: string;
  readTime: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "importancia-de-um-site-rapido-para-seo",
    title: "Velocidade de Site, Core Web Vitals e SEO: Como Avaliar",
    excerpt:
      "Saiba como medir LCP, INP e CLS, separar dados reais de testes de laboratório e priorizar melhorias de desempenho sem promessas de posição no Google.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    content: `
      <img loading="lazy" decoding="async" width="1200" height="600" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop" alt="Performance web e SEO" class="rounded-2xl w-full mb-8" />
      <h2>O que a velocidade muda para um site</h2>
      <p>Uma página que carrega e responde com consistência reduz a espera durante tarefas importantes, como entender um serviço ou enviar um formulário. Core Web Vitals são métricas de experiência real que o Google recomenda acompanhar junto aos demais aspectos de qualidade da página. Bons resultados, por si só, não garantem posições: relevância, conteúdo e concorrência também importam.</p>

      <h2>As três métricas Core Web Vitals</h2>
      <p>O conjunto atual é formado por LCP, INP e CLS. Consulte a <a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noreferrer">documentação do Google sobre Core Web Vitals</a> para definições e limites atualizados.</p>
      <ul>
        <li><strong>LCP (Largest Contentful Paint):</strong> indica quando o maior elemento de conteúdo visível terminou de carregar.</li>
        <li><strong>INP (Interaction to Next Paint):</strong> observa a resposta visual da página durante interações do usuário.</li>
        <li><strong>CLS (Cumulative Layout Shift):</strong> mede deslocamentos inesperados dos elementos durante a navegação.</li>
      </ul>

      <img loading="lazy" decoding="async" width="1200" height="500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop" alt="Métricas de performance" class="rounded-2xl w-full my-8" />

      <h2>Como diagnosticar antes de otimizar</h2>
      <p>Comece pelos dados de campo no relatório de Core Web Vitals do Search Console e no PageSpeed Insights. Dados de campo representam experiências de usuários; resultados de laboratório ajudam a reproduzir e investigar condições específicas. Não trate uma nota isolada de laboratório como medida completa da experiência real.</p>

      <h2>Como priorizar melhorias</h2>
      <p>Investigue a página e o elemento que concentram o problema, em vez de aplicar uma lista genérica de otimizações:</p>
      <ol>
        <li>Para LCP, revise a resposta do servidor, recursos que bloqueiam renderização e a imagem ou bloco principal.</li>
        <li>Para INP, identifique tarefas longas de JavaScript e trabalho desnecessário disparado pelas interações.</li>
        <li>Para CLS, reserve espaço para imagens, fontes e componentes que aparecem depois do carregamento.</li>
      </ol>
      <p>Meça de novo após a mudança e compare páginas e dispositivos equivalentes. Cache, CDN, compressão e mudanças de hospedagem podem ajudar em determinados cenários, mas a escolha depende da causa encontrada.</p>
    `,
    category: "SEO",
    author: "Jefferson Campos",
    date: "10 Jan 2024",
    dateModified: "08 Out 2026",
    readTime: "5 min",
  },
  {
    slug: "sistemas-customizados-vs-prontos",
    title:
      "Sistemas Customizados vs Sistemas Prontos: Qual o melhor para sua empresa?",
    excerpt:
      "Entenda as vantagens e desvantagens de investir em um software sob medida em comparação a soluções de prateleira.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=450&fit=crop",
    content: `
      <img loading="lazy" decoding="async" width="1200" height="600" src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=600&fit=crop" alt="Sistemas customizados" class="rounded-2xl w-full mb-8" />
      <h2>O Paradoxo da Solução Padrão</h2>
      <p>Quando uma empresa cresce, as ferramentas padrão do mercado (as chamadas soluções de prateleira ou SaaS genéricos) muitas vezes deixam de atender às suas necessidades específicas. Elas forçam a sua empresa a adaptar seus processos ao software, e não o contrário.</p>
      
      <h2>Vantagens dos Sistemas Customizados</h2>
      <ul>
        <li><strong>Fluxos Sob Medida:</strong> O sistema é desenhado exatamente para o workflow da sua equipe.</li>
        <li><strong>Pagamento Inteligente:</strong> Evite pagar por funcionalidades que você nunca usa.</li>
        <li><strong>Escalabilidade Ilimitada:</strong> O sistema cresce e ganha novas funções no ritmo da sua empresa.</li>
        <li><strong>Vantagem Competitiva:</strong> O software se torna um ativo único que seus concorrentes não podem simplesmente alugar.</li>
      </ul>

      <h2>O Retorno sobre Investimento (ROI)</h2>
      <p>Embora o investimento inicial no desenvolvimento sob medida seja maior, o ROI a médio e longo prazo compensa largamente devido ao ganho de produtividade, automação de tarefas repetitivas e ausência de licenciamentos abusivos por usuário.</p>
    `,
    category: "Sistemas",
    author: "Jefferson Campos",
    date: "18 Jan 2024",
    readTime: "5 min",
  },
  {
    slug: "como-a-ia-esta-mudando-o-desenvolvimento-web",
    title: "Como Avaliar Inteligência Artificial em Produtos Digitais",
    excerpt:
      "Veja onde IA pode apoiar produtos digitais, como delimitar um caso de uso e quais cuidados considerar com dados, qualidade, custos e revisão humana.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
    content: `
      <img loading="lazy" decoding="async" width="1200" height="600" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop" alt="Inteligência Artificial" class="rounded-2xl w-full mb-8" />
      <h2>Comece pelo trabalho que precisa melhorar</h2>
      <p>Inteligência artificial pode apoiar tarefas de escrita, busca, classificação, síntese ou assistência dentro de um produto digital. A tecnologia não determina sozinha se uma ideia é útil: é necessário entender quem usa o fluxo, qual problema existe hoje e como será avaliado o resultado.</p>

      <h2>Defina um caso de uso e seus limites</h2>
      <p>Antes de conectar um modelo a um site ou sistema, descreva entradas, resultado esperado, situações de erro e quando uma pessoa precisa revisar a resposta. Compare o custo e a qualidade com automação convencional ou com uma mudança de processo.</p>
      <ul>
        <li>Assistentes que consultam uma base de conteúdo aprovada e indicam a fonte da resposta.</li>
        <li>Classificação ou resumo de informações para apoiar uma equipe em tarefas repetitivas.</li>
        <li>Busca em linguagem natural integrada a uma aplicação, com limites de acesso definidos.</li>
      </ul>

      <h2>Cuidados para colocar IA em produção</h2>
      <p>Avalie quais dados são enviados ao provedor, como erros e respostas inadequadas serão identificados, quais custos podem variar com o uso e como o sistema falha quando o modelo ou a integração não estão disponíveis. Não envie dados pessoais ou confidenciais sem revisar contratos, permissões e políticas aplicáveis.</p>
      <p>Teste com exemplos representativos antes do lançamento e mantenha revisão humana nos casos em que uma resposta incorreta possa causar dano ou comprometer uma decisão importante. Acompanhe qualidade e custo depois da publicação.</p>
    `,
    category: "Tecnologia",
    author: "Jefferson Campos",
    date: "02 Fev 2024",
    dateModified: "08 Out 2026",
    readTime: "4 min",
  },
  {
    slug: "o-guia-definitivo-de-acessibilidade-web",
    title: "Acessibilidade Digital: Como Avaliar um Site com a WCAG 2.2",
    excerpt:
      "Conheça critérios da WCAG 2.2 e um roteiro inicial para avaliar semântica, teclado, foco, formulários e conteúdo em sites e sistemas.",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=450&fit=crop",
    content: `
      <img loading="lazy" decoding="async" width="1200" height="600" src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=600&fit=crop" alt="Acessibilidade web" class="rounded-2xl w-full mb-8" />
      <h2>O que avaliar na acessibilidade de um site</h2>
      <p>Acessibilidade digital trata de reduzir barreiras para pessoas que usam diferentes sentidos, movimentos, dispositivos e tecnologias assistivas. A <a href="https://www.w3.org/WAI/WCAG22/quickref/" target="_blank" rel="noreferrer">WCAG 2.2 da W3C</a> organiza critérios em quatro princípios: conteúdo perceptível, interface operável, informação compreensível e código robusto.</p>

      <h2>Um roteiro inicial de avaliação</h2>
      <ul>
        <li><strong>Estrutura:</strong> confira títulos, regiões, rótulos e mensagens para leitores de tela; use HTML semântico antes de acrescentar ARIA.</li>
        <li><strong>Teclado e foco:</strong> percorra os fluxos sem mouse, observe a ordem do foco e confirme que ele fica visível.</li>
        <li><strong>Formulários:</strong> verifique se campos têm rótulos, instruções e erros que possam ser identificados e corrigidos.</li>
        <li><strong>Conteúdo visual e mídia:</strong> avalie contraste, texto alternativo contextual e alternativas para áudio e vídeo.</li>
      </ul>

      <h2>Ferramentas automáticas não bastam</h2>
      <p>Verificadores automáticos podem apontar alguns padrões, mas não determinam se uma tarefa pode ser concluída nem se a interface faz sentido com tecnologia assistiva. Combine ferramentas com inspeção manual e, quando possível, sessões com pessoas que usam essas tecnologias.</p>

      <h2>Acessibilidade, conteúdo e mecanismos de busca</h2>
      <p>HTML semântico e conteúdo claro ajudam pessoas e mecanismos de busca a interpretar páginas, mas acessibilidade não garante uma posição específica no Google. Avaliações técnicas também não substituem análise jurídica quando a empresa precisa determinar obrigações aplicáveis ao seu contexto.</p>
    `,
    category: "Design",
    author: "Jefferson Campos",
    date: "15 Fev 2024",
    dateModified: "08 Out 2026",
    readTime: "6 min",
  },
  {
    slug: "tendencias-de-ui-ux-para-2024",
    title: "Design UI/UX: Princípios para Interfaces Digitais Claras",
    excerpt:
      "Princípios práticos de hierarquia, consistência, acessibilidade e feedback para planejar interfaces que ajudem as pessoas a concluir tarefas.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
    content: `
      <img loading="lazy" decoding="async" width="1200" height="600" src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop" alt="UI UX Design" class="rounded-2xl w-full mb-8" />
      <h2>Comece pelas tarefas das pessoas</h2>
      <p>Design de interface não é apenas escolher uma tendência visual. Comece identificando o que a pessoa precisa entender ou fazer, quais informações ajudam nessa decisão e quais obstáculos aparecem no fluxo atual.</p>

      <h2>Princípios úteis para interfaces web</h2>
      <ol>
        <li><strong>Hierarquia:</strong> torne títulos, ações e informações importantes fáceis de localizar sem competir pela mesma atenção.</li>
        <li><strong>Consistência:</strong> mantenha padrões reconhecíveis para navegação, controles, estados e linguagem.</li>
        <li><strong>Feedback:</strong> confirme ações, mostre carregamento e explique erros com próximos passos.</li>
        <li><strong>Adaptação:</strong> teste o conteúdo e os controles em telas pequenas, com zoom, teclado e preferências de movimento.</li>
      </ol>

      <h2>Valide antes de escalar o sistema visual</h2>
      <p>Use protótipos para revisar conteúdo e fluxo antes de implementar todas as telas. Testes de usabilidade ajudam a observar se as pessoas entendem rótulos, encontram informações e concluem tarefas. A evidência deve orientar quais detalhes visuais ou interações merecem refinamento.</p>
    `,
    category: "Design",
    author: "Jefferson Campos",
    date: "28 Fev 2024",
    dateModified: "08 Out 2026",
    readTime: "4 min",
  },
  {
    slug: "migrando-do-wordpress-para-react",
    title: "Migrando do WordPress para um site em React (Next.js/Vite)",
    excerpt:
      "Descubra por que tantas empresas estão abandonando temas tradicionais e apostando no modelo Headless CMS.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    content: `
      <img loading="lazy" decoding="async" width="1200" height="600" src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop" alt="React e WordPress" class="rounded-2xl w-full mb-8" />
      <h2>Compare arquitetura, operação e necessidades de conteúdo</h2>
      <p>WordPress e aplicações em React resolvem necessidades diferentes e podem até trabalhar juntos. Uma migração deve começar pelos objetivos editoriais, integrações, requisitos de desempenho e capacidade da equipe de manter a plataforma. Mudar de tecnologia não torna um site automaticamente mais rápido ou seguro.</p>
      
      <h2>A Arquitetura Headless</h2>
      <p>Em uma arquitetura <strong>headless</strong>, um CMS pode continuar sendo usado para editar conteúdo enquanto uma aplicação separada entrega a interface. Essa divisão acrescenta integrações e responsabilidades de infraestrutura; avalie se a flexibilidade compensa a complexidade para o seu time.</p>
      
      <h2>Por Que Fazer a Mudança?</h2>
      <ul>
        <li><strong>Separação de responsabilidades:</strong> painel editorial e camada de apresentação podem ser operados e protegidos separadamente.</li>
        <li><strong>Flexibilidade de entrega:</strong> a camada web pode consumir conteúdo e dados por APIs, conforme a arquitetura escolhida.</li>
        <li><strong>Novas responsabilidades:</strong> preview, publicação, cache, monitoramento, segurança e atualizações precisam ser planejados para a arquitetura adotada.</li>
      </ul>

      <h2>Como planejar uma migração sem perder páginas</h2>
      <ol>
        <li>Inventarie URLs, metadados, imagens, links e páginas que recebem tráfego ou conversões.</li>
        <li>Mapeie cada URL antiga para a nova página equivalente e configure redirecionamentos permanentes quando o endereço mudar.</li>
        <li>Revise canonicals, links internos, sitemap, dados estruturados, formulários e renderização antes do lançamento.</li>
        <li>Após publicar, inspecione as páginas prioritárias no Search Console e corrija erros de rastreamento ou indexação.</li>
      </ol>
    `,
    category: "Desenvolvimento",
    author: "Jefferson Campos",
    date: "10 Mar 2024",
    dateModified: "08 Out 2026",
    readTime: "6 min",
  },
  {
    slug: "lgpd-o-que-voce-precisa-saber",
    title: "LGPD para Sites Institucionais: O Guia Prático",
    excerpt:
      "Sua página coleta dados? Veja os passos básicos para garantir a adequação à Lei Geral de Proteção de Dados.",
    image:
      "https://images.unsplash.com/photo-1614064641913-a530a500b522?w=800&h=450&fit=crop",
    content: `
      <img loading="lazy" decoding="async" width="1200" height="600" src="https://images.unsplash.com/photo-1614064641913-a530a500b522?w=1200&h=600&fit=crop" alt="LGPD segurança" class="rounded-2xl w-full mb-8" />
      <h2>Por Que a LGPD Importa?</h2>
      <p>Muitas empresas acreditam que a LGPD (Lei Geral de Proteção de Dados) aplica-se apenas a e-commerces gigantes. A realidade é outra: se o seu site possui um formulário de contato, Google Analytics ou o Pixel do Facebook, você está ativamente lidando com dados pessoais.</p>
      
      <h2>Passos Para a Adequação Imediata</h2>
      <ul>
        <li><strong>Consentimento Ativo (O Famoso Banner):</strong> O usuário precisa clicar ativamente para permitir cookies não essenciais.</li>
        <li><strong>Política de Privacidade Acessível:</strong> Um documento claro e acessível detalhando o que é armazenado e para quê.</li>
        <li><strong>Minimização de Dados:</strong> Nos formulários, peça apenas o nome e e-mail. Não exija CPF ou telefone se não for estritamente necessário para o primeiro contato.</li>
      </ul>
      
      <h2>Segurança Jurídica e Comercial</h2>
      <p>Uma página de privacidade clara ajuda as pessoas a entender o uso de seus dados, mas um texto publicado no site não prova, sozinho, que a empresa está adequada à LGPD. Mapeamento de dados e obrigações variam conforme a operação; consulte profissionais jurídicos e de privacidade para avaliar o seu caso.</p>
    `,
    category: "Segurança",
    author: "Jefferson Campos",
    date: "22 Mar 2024",
    dateModified: "08 Out 2026",
    readTime: "4 min",
  },
  {
    slug: "o-que-e-hospedagem-cloud",
    title: "Hospedagem Cloud: Como Comparar Arquitetura e Requisitos",
    excerpt:
      "Entenda o que avaliar ao escolher hospedagem cloud: carga da aplicação, disponibilidade, backup, monitoramento, segurança e custo operacional.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop",
    content: `
      <img loading="lazy" decoding="async" width="1200" height="600" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop" alt="Cloud computing" class="rounded-2xl w-full mb-8" />
      <h2>Cloud não descreve, sozinha, como a aplicação funciona</h2>
      <p>Hospedagem cloud reúne diferentes formas de alocar infraestrutura por meio de serviços em nuvem. Cada oferta tem arquitetura, operação, limites e custos próprios. O nome "cloud" não garante que um ambiente seja dedicado, mais rápido ou mais disponível do que outra opção.</p>

      <h2>O que comparar antes de migrar</h2>
      <ul>
        <li><strong>Requisitos da aplicação:</strong> CPU, memória, armazenamento, banco de dados, rede, dependências e picos de carga.</li>
        <li><strong>Disponibilidade e recuperação:</strong> redundância, cópias de segurança, testes de restauração, monitoramento e nível de serviço oferecido pelo provedor.</li>
        <li><strong>Segurança e operação:</strong> atualizações, permissões, certificados, logs, resposta a incidentes e responsabilidades de cada equipe.</li>
        <li><strong>Custo total:</strong> uso de recursos, tráfego, licenças, suporte e tempo necessário para manter a infraestrutura.</li>
      </ul>
      <p>Defina critérios de aceitação e um plano de migração com validação, janela de mudança e estratégia de retorno. Recursos de alta disponibilidade e suporte precisam ser confirmados na arquitetura e no contrato do provedor escolhido.</p>
    `,
    category: "Infraestrutura",
    author: "Jefferson Campos",
    date: "05 Abr 2024",
    dateModified: "08 Out 2026",
    readTime: "5 min",
  },
  {
    slug: "estrategias-de-conversao-b2b",
    title: "Como otimizar seu site para aumentar a conversão B2B",
    excerpt:
      "Técnicas validadas de Copywriting e Design para transformar visitantes corporativos em leads qualificados.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop",
    content: `
      <img loading="lazy" decoding="async" width="1200" height="600" src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop" alt="Conversão B2B" class="rounded-2xl w-full mb-8" />
      <h2>Vender B2B é Vender Confiança</h2>
      <p>Diferente do varejo digital (B2C), onde compras são impulsionadas pela emoção do momento, vendas B2B requerem a construção de uma confiança técnica e institucional profunda. O seu site precisa atuar como o melhor consultor de vendas da sua empresa, 24 horas por dia.</p>
      
      <h2>Otimizações de Alto Impacto</h2>
      <ul>
        <li><strong>Cases de Sucesso com Dados Reais:</strong> Empresas compram resultados. Exiba métricas concretas (ex: "Aumentamos a eficiência logística da Empresa X em 34%").</li>
        <li><strong>CTAs Contextuais e Focados no Funil:</strong> Não use apenas "Fale Conosco". Ofereça passos como "Agendar uma Demonstração" ou "Baixar Whitepaper".</li>
        <li><strong>Formulários Inteligentes:</strong> Evite fazer o usuário preencher 10 campos logo de cara. Peça dados corporativos de forma progressiva.</li>
      </ul>
      
      <h2>Social Proof (Prova Social) Autorizada</h2>
      <p>Exibir os logos das empresas parceiras logo na "primeira dobra" do site (a parte visível antes de rolar) aumenta instantaneamente a percepção de autoridade do seu negócio. Pessoas se sentem seguras em contratar quem seus líderes de mercado já contratam.</p>
    `,
    category: "Marketing",
    author: "Jefferson Campos",
    date: "18 Abr 2024",
    readTime: "4 min",
  },
  {
    slug: "impacto-do-branding-na-percepcao-de-valor",
    title: "O impacto do Branding no valor percebido do seu Software",
    excerpt:
      "Por que uma interface bem polida e uma identidade forte permitem que você cobre mais pelos seus serviços.",
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=450&fit=crop",
    content: `
      <img loading="lazy" decoding="async" width="1200" height="600" src="https://images.unsplash.com/photo-1634942537034-2531766767d1?w=1200&h=600&fit=crop" alt="Branding digital" class="rounded-2xl w-full mb-8" />
      <h2>A Primeira Impressão Tecnológica</h2>
      <p>Na tecnologia, muitas vezes um código fenomenal e uma lógica de backend brilhante são completamente invisíveis ao usuário final. A única coisa com a qual ele interage é a Interface do Usuário (UI) e o Design (Branding). Se a sua plataforma custa R$ 50.000 mas tem a aparência visual de um software de 1998, a venda não vai acontecer.</p>
      
      <h2>Design Premium = Ticket Alto</h2>
      <p>Produtos digitais com design refinado, animações fluidas e consistência de marca transmitem uma mensagem subliminar e potente: <strong>Confiabilidade e Liderança de Mercado</strong>. Isso reduz o atrito e as objeções durante a reunião de vendas.</p>
      
      <h2>Investimento, não Custo</h2>
      <p>Investir no branding (logotipo, identidade verbal, paleta de cores, tipografia e design de interfaces) do seu sistema ou portal não é um capricho estético. É estratégia agressiva de precificação. O consumidor moderno está amplamente treinado a associar beleza visual com funcionalidade e está disposto a pagar *premium* por experiências intuitivas.</p>
    `,
    category: "Branding",
    author: "Jefferson Campos",
    date: "30 Abr 2024",
    readTime: "6 min",
  },
];
