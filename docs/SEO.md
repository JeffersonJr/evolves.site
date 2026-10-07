# SEO e descoberta da Evolves

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
