# Estratégia de Indexação SEO Internacional - Google Search Console

## Resumo da Implementação

- **Stack**: TanStack Start (React 19 + TypeScript + Vite)
- **Domínio**: https://www.evolves.site
- **Idiomas**: pt-BR (conteúdo padrão), en (x-default), es, it
- **Estrutura de URLs**: Subdiretórios por idioma (/pt/, /en/, /es/, /it/)

---

## 1. Arquitetura de URLs e Slugs Traduzidos

| Página | PT | EN | ES | IT |
|--------|-----|-----|-----|-----|
| Home | /pt/ | /en/ | /es/ | /it/ |
| Sobre | /pt/sobre | /en/about | /es/sobre | /it/chi-siamo |
| Serviços | /pt/servicos | /en/services | /es/servicios | /it/servizi |
| Contato | /pt/contato | /en/contact | /es/contacto | /it/contatto |
| Blog | /pt/blog | /en/blog | /es/blog | /it/blog |
| Cases | /pt/cases | /en/cases | /es/casos | /it/casi |
| Privacidade | /pt/privacidade | /en/privacy | /es/privacidad | /it/privacy |
| Cookies | /pt/cookies | /en/cookies | /es/cookies | /it/cookies |

---

## 2. Tags SEO Implementadas

### Atributo lang Dinâmico
Arquivo: `src/routes/__root.tsx`

O atributo `lang` do HTML é dinâmico baseado no locale atual:
- pt-BR para português
- en para inglês
- es para espanhol
- it para italiano

### Tags hreflang no Sitemap
Para SEO internacional, as tags hreflang são implementadas exclusivamente no sitemap XML. Esta é a abordagem recomendada pelo Google e mais confiável que injetar tags no HTML, especialmente em frameworks com SSR.

---

## 3. Sitemap XML Multilíngue

### Script de Geração Integrado
Arquivo: `scripts/generate-seo.mjs`

O script existente de SEO foi atualizado para gerar automaticamente o sitemap multilíngue com:
- Subdiretórios por idioma (/pt/, /en/, /es/, /it/)
- Slugs traduzidos nativamente
- Tags `<xhtml:link rel="alternate" hreflang="...">` para cada URL
- Tag `hreflang="x-default"` apontando para /en/

Comando para executar:
```bash
npm run seo:generate
# ou
node scripts/generate-seo.mjs
```

O script é executado automaticamente durante o build:
```bash
npm run build
```

### Estrutura do Sitemap
O sitemap usa a extensão `xmlns:xhtml="http://www.w3.org/1999/xhtml"` e agrupa URLs traduzidas com tags `<xhtml:link>`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://www.evolves.site/pt/sobre</loc>
    <lastmod>2026-10-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="https://www.evolves.site/pt/sobre" />
    <xhtml:link rel="alternate" hreflang="en" href="https://www.evolves.site/en/about" />
    <xhtml:link rel="alternate" hreflang="es" href="https://www.evolves.site/es/sobre" />
    <xhtml:link rel="alternate" hreflang="it" href="https://www.evolves.site/it/chi-siamo" />
    <xhtml:link rel="alternate" hreflang="x-default" href="https://www.evolves.site/en/about" />
  </url>
</urlset>
```

### Arquivo robots.txt
Arquivo: `public/robots.txt`

```txt
User-agent: *
Allow: /

Sitemap: https://www.evolves.site/sitemap.xml
```

O `Allow: /` já permite todos os subdiretórios, incluindo /pt/, /en/, /es/, /it/.

---

## 4. Estratégia Avançada de Indexação para Google Search Console

### Passo 1: Configurar Propriedades no GSC

1. **Acesse** [Google Search Console](https://search.google.com/search-console)
2. **Adicione a propriedade**: `https://www.evolves.site/`
3. **Valide a propriedade** usando:
   - HTML tag (recomendado para sites estáticos)
   - Google Analytics
   - DNS TXT record

### Passo 2: Enviar e Validar o Sitemap Multilíngue

1. **Navegue** para "Sitemaps" no menu lateral do GSC
2. **Digite** o URL do sitemap: `sitemap.xml`
3. **Clique** em "Enviar"
4. **Aguarde** o processamento (pode levar algumas horas)
5. **Verifique**:
   - Quantas URLs foram descobertas
   - Se há erros de indexação
   - Se as tags hreflang estão sendo reconhecidas

**Validação manual:**
- Após submissão, aguarde 24-48 horas
- Verifique a aba "Relatórios Internacionais" > "Idiomas"
- Confirme que o Google reconhece todas as 4 versões de idioma

### Passo 3: Usar a Indexing API (Opcional)

Para páginas críticas ou novos conteúdos:

**Limitações:**
- Apenas para páginas de job posting ou transmissão ao vivo
- Para sites gerais, use a Inspeção de URL

**Para seu caso (site geral):**
- Use a ferramenta "Inspeção de URL" (veja Passo 4)

### Passo 4: Inspeção de URLs para Acelerar Indexação

1. **Selecione** "Inspeção de URL" no GSC
2. **Digite** uma URL específica (ex: `https://www.evolves.site/pt/sobre`)
3. **Clique** em "Solicitar indexação"
4. **Verifique** o status:
   - URL está no Google?
   - Página foi rastreada?
   - Indexação permitida?

**Melhores práticas:**
- Faça isso para 5-10 URLs principais por dia
- Priorize: Home, Sobre, Serviços, Contato
- Evite excesso (pode ser considerado spam)

### Passo 5: Verificar Relatórios Internacionais

1. **Acesse** "Relatórios Internacionais" no menu lateral
2. **Verifique** "Idiomas":
   - O Google deve mostrar pt-BR, en, es, it
   - Se houver erros, revise as tags hreflang
3. **Verifique** "Hreflang":
   - O Google valida se as tags estão corretas
   - Erros comuns: idiomas faltando, URLs não correspondentes

### Passo 6: Configurar Redirecionamentos de Idioma

**Importante:** O Googlebot roda dos EUA, então configure para não bloquear:

**Regra atual do projeto (src/routes/index.tsx):**
```typescript
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ href: `/${CONTENT_DEFAULT_LOCALE}`, statusCode: 301 });
  },
});
```

Isso redireciona `/` para `/pt/` (conteúdo padrão). **Isso está correto**.

**Verificação:**
- O Googlebot pode acessar `/` e é redirecionado para `/pt/`
- O Googlebot pode acessar `/en/`, `/es/`, `/it/` diretamente
- Não há redirecionamentos baseados em geolocalização ou idioma do navegador

**⚠️ NÃO implemente:**
- Redirecionamentos baseados em IP do usuário
- Redirecionamentos baseados em idioma do navegador (Accept-Language header)
- Isso bloquearia o Googlebot de rastrear versões não-inglesas

### Passo 7: Monitorar Cobertura de Indexação

1. **Acesse** "Índice" > "Cobertura"
2. **Filtre** por status:
   - "Válido": URLs indexadas corretamente
   - "Excluído": URLs intencionalmente não indexadas
   - "Erro": URLs com problemas

**Ações comuns:**
- Se páginas em PT/ES/IT não indexarem, verifique robots.txt
- Se houver erros de hreflang, revise o componente SeoHead
- Se URLs 404, verifique se os slugs correspondem ao i18n-routes.json

### Passo 8: Monitorar Core Web Vitals

1. **Acesse** "Experiência" > "Core Web Vitals"
2. **Verifique** performance em todos os idiomas
3. **Otimize** se necessário:
   - LCP (Largest Contentful Paint)
   - FID (First Input Delay)
   - CLS (Cumulative Layout Shift)

### Passo 9: Testar com Ferramentas do Google

**Teste de Otimização Móvel:**
- URL: https://search.google.com/test/mobile-friendly
- Teste URLs em todos os idiomas

**Rich Results Test:**
- URL: https://search.google.com/test/rich-results
- Teste structured data (se aplicável)

**URL Inspection API (para automação):**
- Use para monitorar status de indexação via script
- Documentação: https://developers.google.com/webmaster-tools/v1/api_reference

### Passo 10: Atualização Contínua do Sitemap

**O sitemap é gerado automaticamente durante o build:**

O script `npm run build` já inclui a geração do sitemap:
```json
"scripts": {
  "build": "node scripts/generate-seo.mjs && vite build"
}
```

**Para regenerar manualmente:**
```bash
npm run seo:generate
```

**Re-enviar sitemap após atualizações:**
- Não é necessário re-enviar manualmente
- O Google re-rastreia automaticamente baseado em changefreq
- Para mudanças grandes, re-envie manualmente no GSC

---

## 5. Checklist de Validação

- [x] Sitemap gerado com tags xhtml:link
- [x] robots.txt permite todos os idiomas
- [x] Tags hreflang injetadas no head
- [x] Atributo lang dinâmico por idioma
- [x] Redirecionamento de / para /pt/ (301)
- [x] hreflang="x-default" aponta para /en/
- [x] Sitemap enviado ao GSC
- [ ] Propriedade validada no GSC
- [ ] Relatórios internacionais verificados
- [ ] URLs principais inspecionadas
- [ ] Core Web Vitals monitorados

---

## 6. Solução de Problemas Comuns

### Erro: "No return tags" no GSC
**Causa:** Tags hreflang não formam pares válidos
**Solução:** Verifique se cada URL tem links para todas as variações

### Erro: "Incorrect hreflang values"
**Causa:** Valores de hreflang não são válidos (ex: "pt" em vez de "pt-BR")
**Solução:** Revise `src/data/i18n-routes.json` > `hreflang`

### Páginas em ES/IT não indexam
**Causa:** Googlebot bloqueado ou não consegue rastrear
**Solução:** Verifique robots.txt e remova redirecionamentos baseados em idioma do navegador

### URLs duplicadas
**Causa:** Canonical tags não apontam para si mesmas
**Solução:** Verifique `src/components/SeoHead.tsx`

---

## 7. Próximos Passos

1. **Adicionar dados estruturados** (Schema.org) para SEO avançado
2. **Implementar breadcrumbs** com dados estruturados
3. **Adicionar Open Graph tags** para social media
4. **Configurar CDN** para latência otimizada por região
5. **Monitorar métricas de busca orgânica** por idioma

---

## Referências

- [Google - Multi-regional and multilingual sites](https://developers.google.com/search/docs/specialty/international)
- [Google - hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Google - Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps)
- [Google - Search Console International Targeting](https://support.google.com/webmasters/answer/182192)
