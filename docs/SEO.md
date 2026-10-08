# SEO e descoberta da Evolves

## Auditoria orgânica — 8 de outubro de 2026

### Diagnóstico e objetivo realista

A auditoria pública encontrou a Evolves indexada para sua marca, mas as buscas comerciais genéricas consultadas — como criação de sites, desenvolvimento web e SEO técnico — exibem agências com páginas extensas, histórico e sinais externos de autoridade. A Evolves tinha cinco páginas de serviço para doze especialidades listadas, títulos genéricos e alegações sem evidência publicada sobre PageSpeed, disponibilidade e impacto em posições. O blog continha referências datadas de 2024 e afirmações quantitativas sem fonte.

Isso significa que não é responsável prometer primeira página para todos os termos. O site pode controlar conteúdo, arquitetura e indexabilidade; não controla concorrentes, localização de quem pesquisa, histórico do domínio, menções externas, avaliações nem o tempo de rastreamento. A auditoria não teve acesso a Search Console, dados de volume/posição ou Analytics, portanto não apresenta estimativas de busca, posições atuais ou ganhos projetados.

O alvo inicial é uma página útil e indexável por intenção de contratação, apoiada por casos e artigos relevantes. Termos amplos como “criação de sites” e “inteligência artificial” são mais competitivos. Consultas específicas ligadas ao contexto empresarial e à solução — por exemplo, sistema sob medida para integrar processos, UX/UI para um sistema B2B ou auditoria de SEO técnico — são melhores hipóteses para tração inicial. Os dados reais devem confirmar ou corrigir essas hipóteses.

### Mapa de termos para páginas

Os doze termos da faixa de especialidades foram agrupados por intenção para não criar páginas quase duplicadas:

| Consulta principal e variações próximas       | Página de destino                   |
| --------------------------------------------- | ----------------------------------- |
| Criação de sites; desenvolvimento web         | `/services/sites-inteligentes`      |
| Sistemas customizados; software sob medida    | `/services/sistemas-customizados`   |
| Hospedagem cloud; alta performance            | `/services/hospedagem-performance`  |
| SEO técnico                                   | `/services/seo-tecnico`             |
| Branding B2B; identidade visual               | `/services/branding-design`         |
| Inteligência artificial para empresas         | `/services/inteligencia-artificial` |
| Design UI/UX; consultoria UX/UI               | `/services/consultoria-ux-ui`       |
| Consultoria tech; arquitetura de software     | `/services/consultoria-tech`        |
| Lojas virtuais; desenvolvimento de e-commerce | `/services/lojas-virtuais`          |
| Acessibilidade digital; avaliação WCAG        | `/services/acessibilidade-digital`  |

### Alterações feitas no projeto

- Ampliei de cinco para dez páginas de serviço. Cada página tem URL própria, título e descrição de busca exclusivos, introdução específica, etapas, entregáveis e perguntas frequentes visíveis. A copy evita garantias de ranking, segurança absoluta, uptime ou nota máxima.
- Mantive a página inicial enxuta: ela mostra os cinco serviços principais e links para as outras soluções. A página `/services`, o rodapé e a faixa de especialidades apontam para as dez páginas com links HTML rastreáveis e rótulos descritivos.
- Liguei páginas de serviço a cases e artigos realmente relacionados, para orientar usuários e facilitar a descoberta interna. Não associei loja virtual ou acessibilidade a cases que não demonstram esse trabalho.
- Acrescentei todas as áreas ao `knowsAbout` da organização e dados estruturados `Organization` e `WebSite` na página inicial. Cada serviço já descreve seu tipo e provedor em dados estruturados.
- Corrigi a canonicalização de busca e categorias do blog: páginas filtradas agora têm canonical para a própria URL e `noindex, follow`; ficam fora do sitemap. Antes a página filtrada apontava para `/blog`, embora seu conteúdo fosse diferente, enviando sinais contraditórios. As buscas também normalizam acentos e comparam os termos separadamente, incluindo consultas como “UX/UI”.
- Atualizei títulos e descrições institucionais para refletir serviços prioritários. Reescrevi os artigos de velocidade/Core Web Vitals, IA, acessibilidade, UI/UX, migração para React, privacidade e hospedagem cloud. As datas originais de publicação foram preservadas; a data de atualização de 8 de outubro de 2026 aparece na página e no `BlogPosting` apenas nesses textos revisados.
- Mantive sitemap, `robots.txt`, renderização no servidor, canonicals e metadados Open Graph/Twitter já existentes. O gerador passa a incluir automaticamente as cinco novas páginas de serviço no sitemap e no `llms.txt`.

### Como isso ajuda a busca

Páginas de serviço específicas alinham título, H1, conteúdo e links à intenção de cada pessoa. Respostas a dúvidas de compra explicam escopo e tradeoffs antes do contato. Links internos ajudam usuários e crawlers a encontrarem essas páginas. Dados estruturados ajudam a descrever a empresa, o site e os serviços; não garantem um resultado especial. Corrigir afirmações exageradas reduz conteúdo enganoso e torna a proposta comercial mais confiável.

### O que precisa ser feito fora do código

1. Publicar a alteração. A cópia pública consultada durante esta auditoria ainda retornava um endereço `contato@evolves.com.br`, enquanto o projeto local usa `contato@evolves.site`; a busca pode estar mostrando um rastreamento anterior, então confirme qual endereço deve ser o oficial e que a produção publicada está consistente.
2. Verificar a propriedade de domínio `evolves.site` no Google Search Console, enviar `https://www.evolves.site/sitemap.xml` e inspecionar as dez páginas de serviço. Search Console é indispensável para distinguir indexação, impressões, consultas, cliques e CTR; nenhum desses dados estava conectado durante a auditoria.
3. Medir consultas por página no relatório de Desempenho por algumas semanas após o rastreamento. Expandir as páginas que recebem impressões e corrigir páginas sem demanda ou com intenção mal atendida. Não criar páginas de cidade sem presença real e conteúdo local útil.
4. Se a empresa for elegível para atendimento presencial, manter o Perfil da Empresa no Google verificado, completo e coerente com nome, telefone, endereço/área atendida e site. Resultados locais consideram relevância, distância e proeminência; marcação no site não substitui esse perfil.
5. Reunir evidências autorizadas para os cases: período, fonte da métrica e contexto. Buscar menções e links editoriais legítimos em associações, parceiros, clientes e publicações do setor, sem compra de links ou avaliações artificiais.
6. Avaliar Core Web Vitals com dados de campo no Search Console e PageSpeed Insights. O código foi compilado, mas não há medição de campo conectada para comprovar os valores LCP, INP ou CLS da produção.
7. Revisar com a pessoa responsável por privacidade as políticas de cookies e privacidade: ambas exibem vigência de janeiro de 2024. Não alterei a data nem o conteúdo legal sem confirmar a última revisão real.

As alterações no repositório não publicam o site, não enviam sitemap ao Google e não podem solicitar recrawl sem o acesso autorizado à conta Search Console.

## URLs após a publicação

- Sitemap para enviar ao Search Console: https://www.evolves.site/sitemap.xml
- Regras de rastreamento: https://www.evolves.site/robots.txt
- Resumo e índice para assistentes de IA: https://www.evolves.site/llms.txt

O endereço canônico é `https://www.evolves.site`, seguindo o redirecionamento observado no domínio público. As mudanças locais precisam ser publicadas para aparecer nessas URLs.

## Manutenção

`src/data/site.json` contém o domínio e os metadados das páginas institucionais. Os serviços, cases e artigos usam os próprios dados em `src/data/`. Cada página informa título, descrição, URL canônica e metadados de compartilhamento no HTML renderizado pelo servidor.

`scripts/generate-seo.mjs` gera os três arquivos em `public/` ao iniciar o Vite e em cada build, inclusive chamadas diretas a `vite build`. Também pode ser executado com `npm run seo:generate`. Não edite os arquivos gerados manualmente: adicione conteúdo nos arquivos de origem. Novas páginas institucionais precisam entrar em `site.json`; novos artigos, serviços e cases entram automaticamente. Datas `lastmod` foram omitidas porque o conteúdo não registra datas confiáveis de revisão. Não use a data de cada build como se fosse atualização editorial.

`src/data/related-content.ts` registra as conexões editoriais entre serviços, artigos e cases. Atualize-o ao publicar conteúdo relacionado.

`llms.txt` é um resumo complementar em Markdown com links públicos, seguindo a proposta https://llmstxt.org/. Não controla acesso, não substitui `robots.txt` e não garante citações por IA nem indexação no Google.

## Validação local

```sh
npm run build
npx tsc --noEmit
npm run dev -- --host 127.0.0.1
# Em outro terminal:
npm run seo:check
```

O verificador consulta o servidor: valida os três arquivos, todas as URLs do sitemap, metadados únicos, canônicas, idioma, um H1 por página, ausência de páginas órfãs, links internos e respostas HTTP 404 com `noindex`. Para testar uma publicação ou servidor de preview:

```sh
python3 scripts/check-seo.py https://www.evolves.site
```

## Publicação e Search Console

1. Publique as alterações pelo fluxo normal do projeto, sem reescrever o histórico Git conectado ao Lovable.
2. Abra as três URLs e confirme HTTP 200 e seus conteúdos. XML e texto não devem retornar a página HTML do site.
3. Na hospedagem, mantenha uma única versão do domínio. O teste público encontrou redirecionamento 307 de `evolves.site` para `www.evolves.site`; para uma escolha definitiva, configure 301 ou 308 no painel da hospedagem. Não redirecione previews e localhost para produção.
4. No Search Console, adicione a propriedade **Domínio** `evolves.site` e verifique o registro TXT no DNS. A propriedade de domínio cobre as versões com e sem www.
5. Em **Sitemaps**, envie `https://www.evolves.site/sitemap.xml`.
6. Em **Inspeção de URL**, teste a página inicial e serviços principais. Confira a canônica escolhida pelo Google e solicite indexação após publicar.
7. Acompanhe **Indexação de páginas**, **Sitemaps**, **Desempenho** e **Core Web Vitals**. Corrija falhas de rastreamento; avalie impressões, cliques, CTR e consultas ao longo das semanas. Páginas de erro devem continuar fora do índice.

Essas etapas dependem de acesso à hospedagem, DNS e propriedade do Search Console. Não há código de verificação nem identificador de Analytics inventado no projeto.

## Performance e conteúdo

Foram adicionados dimensões e carregamento tardio às imagens de artigos e cards do blog, prioridade à imagem de destaque e remoção da animação que atrasava a apresentação do título principal. A preferência de movimento reduzido é respeitada na entrada de conteúdo e na faixa animada. O artigo de SEO foi atualizado de FID para INP, preservando sua data original e identificando a atualização no texto.

Após publicar, execute o PageSpeed Insights em modo móvel para a página inicial, um serviço e um artigo. Registre LCP, INP e CLS quando houver dados de campo; testes de laboratório não substituem a janela de dados reais do Search Console. Não foi estabelecida uma pontuação Lighthouse nem um ganho percentual de velocidade nesta alteração.

Os cases já contêm números de resultados. Antes de usá-los como prova comercial, valide-os com relatórios, período de medição e autorização do cliente. Não foram acrescentadas métricas, depoimentos ou garantias. Atualize artigos antigos com fontes verificáveis, mantendo o contexto histórico dos textos de 2024 e sem alterar datas apenas para aparentar novidade.

Referências: [sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start), [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals).
