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

export function generateSeo() {
  const groups = [
    ["Serviços", "/services", records("src/data/services.tsx", "servicesData")],
    ["Cases", "/cases", records("src/data/cases.ts", "casesData")],
    ["Artigos", "/blog", records("src/data/blog.ts", "blogPosts")],
  ];
  const urls = [
    ...site.pages.map((page) => site.url + page.path),
    ...groups.flatMap(([, path, items]) =>
      items.map((item) => `${site.url}${path}/${item.slug}`),
    ),
  ];
  if (new Set(urls).size !== urls.length)
    throw new Error("Duplicate sitemap URLs");
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
  writeFileSync(
    new URL("public/sitemap.xml", root),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${xml(url)}</loc></url>`).join("\n")}\n</urlset>\n`,
  );
  writeFileSync(
    new URL("public/robots.txt", root),
    `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`,
  );
  const markdown = (value) =>
    value
      .replace(/[\[\]\\]/g, "\\$&")
      .replace(/\s+/g, " ")
      .trim();
  const overview = `# ${site.name}\n\n> Desenvolvimento de sites e sistemas, consultoria UX/UI, hospedagem e branding para empresas.\n\nSite oficial: ${site.url}. Conteúdo em português do Brasil. Propostas e condições comerciais devem ser consultadas na página de contato. Os cases descrevem projetos individuais; seus resultados não são garantias para outros projetos.\n\n## Institucional\n\n${site.pages
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
    `SEO: generated sitemap (${urls.length} URLs), robots.txt and llms.txt`,
  );
}

if (process.argv[1] === fileURLToPath(import.meta.url)) generateSeo();
