import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = new URL("../", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");
const site = JSON.parse(read("src/data/site.json"));

// Read string fields from the real content arrays without executing JSX or asset imports.
function records(path, name) {
  const source = ts.createSourceFile(
    path,
    read(path),
    ts.ScriptTarget.Latest,
    true,
    path.endsWith("tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
  let array;
  for (const statement of source.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (declaration.name.getText(source) === name)
        array = declaration.initializer;
    }
  }
  if (!array || !ts.isArrayLiteralExpression(array))
    throw new Error(`Expected content array: ${name}`);
  return array.elements.map((element) => {
    if (!ts.isObjectLiteralExpression(element))
      throw new Error(`Expected content object: ${name}`);
    const fields = Object.fromEntries(
      element.properties.flatMap((property) =>
        ts.isPropertyAssignment(property) &&
        ts.isStringLiteralLike(property.initializer)
          ? [[property.name.getText(source), property.initializer.text]]
          : [],
      ),
    );
    if (!fields.slug || !fields.title)
      throw new Error(`Missing slug/title: ${name}`);
    return fields;
  });
}

/** Convert a display category name to a URL-friendly slug (mirrors blog-url.ts logic) */
function toFriendlySlug(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function generateSeo() {
  const today = new Date().toISOString().slice(0, 10);

  const services = records("src/data/services.tsx", "servicesData");
  const cases = records("src/data/cases.ts", "casesData");
  const blogPosts = records("src/data/blog.ts", "blogPosts");

  // Derive unique blog categories from the blog posts
  const blogCategories = [...new Set(blogPosts.map((p) => p.category))];

  // Core search terms we pre-generate search pages for (matching what Evolves does)
  const prebuiltSearchTerms = [
    "seo-tecnico",
    "desenvolvimento-web",
    "hospedagem-cloud",
    "sistemas-customizados",
    "core-web-vitals",
    "branding-digital",
    "inteligencia-artificial",
    "criacao-de-sites",
    "lojas-virtuais",
    "acessibilidade",
    "ux-ui",
    "lgpd",
  ];

  const xml = (value) =>
    value.replace(
      /[<>&"']/g,
      (char) =>
        ({
          "<": "&lt;",
          ">": "&gt;",
          "&": "&amp;",
          '"': "&quot;",
          "'": "&apos;",
        })[char],
    );

  /** Build a <url> entry with optional priority + changefreq + lastmod */
  function urlEntry(url, { priority = "0.5", changefreq = "monthly", lastmod = today } = {}) {
    return `  <url><loc>${xml(url)}</loc><lastmod>${lastmod}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
  }

  const sitemapEntries = [
    // Core pages
    ...site.pages
      .filter((p) => !["/privacy", "/cookies"].includes(p.path))
      .map((page) => {
        const isHome = page.path === "/";
        const isContact = page.path === "/contact";
        return urlEntry(site.url + page.path, {
          priority: isHome ? "1.0" : isContact ? "0.8" : "0.9",
          changefreq: isHome ? "weekly" : "monthly",
        });
      }),
    // Privacy & cookies — lower priority, still indexed
    ...site.pages
      .filter((p) => ["/privacy", "/cookies"].includes(p.path))
      .map((page) => urlEntry(site.url + page.path, { priority: "0.3", changefreq: "yearly" })),
    // Service sub-pages
    ...services.map((s) =>
      urlEntry(`${site.url}/services/${s.slug}`, { priority: "0.9", changefreq: "monthly" }),
    ),
    // Case study pages
    ...cases.map((c) =>
      urlEntry(`${site.url}/cases/${c.slug}`, { priority: "0.8", changefreq: "monthly" }),
    ),
    // Blog posts
    ...blogPosts.map((p) =>
      urlEntry(`${site.url}/blog/${p.slug}`, { priority: "0.8", changefreq: "weekly" }),
    ),
    // Blog category pages (now indexable)
    ...blogCategories.map((cat) =>
      urlEntry(`${site.url}/blog/categoria/${toFriendlySlug(cat)}`, {
        priority: "0.7",
        changefreq: "weekly",
      }),
    ),
    // Pre-built blog search pages (now indexable)
    ...prebuiltSearchTerms.map((term) =>
      urlEntry(`${site.url}/blog/busca/${term}`, { priority: "0.6", changefreq: "monthly" }),
    ),
  ];

  // Collect all URLs for duplicate check
  const allUrls = [
    ...site.pages.map((p) => site.url + p.path),
    ...services.map((s) => `${site.url}/services/${s.slug}`),
    ...cases.map((c) => `${site.url}/cases/${c.slug}`),
    ...blogPosts.map((p) => `${site.url}/blog/${p.slug}`),
    ...blogCategories.map((cat) => `${site.url}/blog/categoria/${toFriendlySlug(cat)}`),
    ...prebuiltSearchTerms.map((term) => `${site.url}/blog/busca/${term}`),
  ];
  if (new Set(allUrls).size !== allUrls.length)
    throw new Error("Duplicate sitemap URLs");

  writeFileSync(
    new URL("public/sitemap.xml", root),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join("\n")}\n</urlset>\n`,
  );
  writeFileSync(
    new URL("public/robots.txt", root),
    `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`,
  );

  const markdown = (value) =>
    value
      .replace(/[[\]\\]/g, "\\$&")
      .replace(/\s+/g, " ")
      .trim();

  const groups = [
    ["Serviços", "/services", services],
    ["Cases", "/cases", cases],
    ["Artigos", "/blog", blogPosts],
  ];

  const overview = `# ${site.name}\n\n> Empresa especializada em criação de sites profissionais, sistemas customizados, SEO técnico, hospedagem cloud de alta performance e branding digital para empresas no Brasil e em Portugal.\n\nSite oficial: ${site.url}. Conteúdo em português do Brasil. Propostas e condições comerciais devem ser consultadas na página de contato. Os cases descrevem projetos individuais; seus resultados não são garantias para outros projetos.\n\n## Expertise\n\n- Criação de sites profissionais e landing pages de alta conversão\n- Desenvolvimento de sistemas customizados (SaaS, portais, intranets)\n- SEO técnico: Core Web Vitals, Schema.org, dados estruturados\n- Hospedagem cloud com SLA 99.9% e CDN global\n- Consultoria UX/UI e design de produto digital\n- Inteligência artificial aplicada a produtos e fluxos digitais\n- Branding B2B e identidade visual para empresas de tecnologia\n- Acessibilidade digital WCAG 2.2\n- Lojas virtuais e e-commerce\n\n## Categorias do Blog\n\n${blogCategories.map((cat) => `- [${cat}](${site.url}/blog/categoria/${toFriendlySlug(cat)}): Artigos sobre ${cat}.`).join("\n")}\n\n## Institucional\n\n${site.pages
    .filter((p) => !["/privacy", "/cookies"].includes(p.path))
    .map(
      (p) => `- [${markdown(p.title)}](${site.url}${p.path}): ${p.description}`,
    )
    .join("\n")}\n`;

  const sections = groups
    .map(
      ([title, path, items]) =>
        `\n## ${title}\n\n${items.map((item) => `- [${markdown(item.title)}](${site.url}${path}/${item.slug}): ${markdown(item.excerpt || item.description || item.text)}`).join("\n")}\n`,
    )
    .join("");

  writeFileSync(
    new URL("public/llms.txt", root),
    `${overview}${sections}\n## Optional\n\n- [Política de Privacidade](${site.url}/privacy)\n- [Política de Cookies](${site.url}/cookies)\n- [Sitemap XML](${site.url}/sitemap.xml)\n`,
  );
  console.info(
    `SEO: generated sitemap (${allUrls.length} URLs incl. ${blogCategories.length} categorias + ${prebuiltSearchTerms.length} buscas), robots.txt and llms.txt`,
  );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) generateSeo();
