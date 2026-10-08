import site from "@/data/site.json";

export const siteUrl = site.url;

export function seoHead({
  title,
  description,
  path,
  image = site.image,
  type = "website",
  structuredData,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}) {
  const url = `${site.url}${path === "/" ? "/" : path.replace(/\/$/, "")}`;
  const pageSchema = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${site.url}/#website` },
    ...(type === "article" ? { mainEntity: { "@id": `${url}#article` } } : {}),
  };
  const schemaEntries = [
    pageSchema,
    ...(Array.isArray(structuredData)
      ? structuredData
      : structuredData
        ? [structuredData]
        : []),
  ];
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:site_name", content: site.name },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: new URL(image, site.url).href },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: new URL(image, site.url).href },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@graph": schemaEntries,
        },
      },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site.url).href,
    })),
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: "Evolves",
  url: site.url,
  logo: new URL("/favicon.png", site.url).href,
  email: "contato@evolves.site",
  telephone: "+55-13-98132-6869",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "contato@evolves.site",
    telephone: "+55-13-98132-6869",
    availableLanguage: ["Portuguese"],
  },
  sameAs: ["https://www.linkedin.com/company/71072104/"],
  areaServed: { "@type": "Country", name: "Brasil" },
  knowsAbout: [
    "Criação de sites",
    "Sistemas customizados",
    "Hospedagem cloud",
    "SEO técnico",
    "Branding B2B",
    "Inteligência artificial aplicada a produtos digitais",
    "Design UI/UX",
    "Consultoria tech",
    "Desenvolvimento web",
    "Lojas virtuais",
    "Acessibilidade digital",
    "Alta performance web",
  ],
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: "Evolves",
  alternateName: site.name,
  url: site.url,
  inLanguage: "pt-BR",
  publisher: { "@id": `${site.url}/#organization` },
};

export function blogPostingSchema(post: {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  dateModified?: string;
}) {
  const monthNumber: Record<string, string> = {
    jan: "01",
    fev: "02",
    feb: "02",
    mar: "03",
    abr: "04",
    apr: "04",
    mai: "05",
    may: "05",
    jun: "06",
    jul: "07",
    ago: "08",
    aug: "08",
    set: "09",
    sep: "09",
    out: "10",
    oct: "10",
    nov: "11",
    dez: "12",
    dec: "12",
  };
  const [, day, month, year] =
    post.date.match(/^(\d{1,2})\s+([\p{L}.]+)\s+(\d{4})$/u) ?? [];
  const monthValue = month
    ? monthNumber[month.slice(0, 3).toLowerCase()]
    : undefined;
  const published =
    day && year && monthValue
      ? `${year}-${monthValue}-${day.padStart(2, "0")}`
      : undefined;
  const [, modifiedDay, modifiedMonth, modifiedYear] = post.dateModified
    ? (post.dateModified.match(/^(\d{1,2})\s+([\p{L}.]+)\s+(\d{4})$/u) ?? [])
    : [];
  const modifiedMonthValue = modifiedMonth
    ? monthNumber[modifiedMonth.slice(0, 3).toLowerCase()]
    : undefined;
  const modified =
    modifiedDay && modifiedYear && modifiedMonthValue
      ? `${modifiedYear}-${modifiedMonthValue}-${modifiedDay.padStart(2, "0")}`
      : undefined;
  const url = new URL(`/blog/${post.slug}`, site.url).href;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    image: new URL(post.image, site.url).href,
    url,
    mainEntityOfPage: url,
    inLanguage: "pt-BR",
    articleSection: post.category,
    ...(published ? { datePublished: published } : {}),
    ...(modified ? { dateModified: modified } : {}),
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://www.linkedin.com/in/jeffersonjunior/",
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: new URL("/favicon.png", site.url).href,
      },
    },
  };
}

export function noIndexHead(title: string, description: string, path: string) {
  const head = seoHead({ title, description, path });
  return {
    ...head,
    meta: [...head.meta, { name: "robots", content: "noindex, follow" }],
  };
}

export function pageHead(
  path: string,
  structuredData?: Record<string, unknown> | Record<string, unknown>[],
) {
  const page = site.pages.find((page) => page.path === path);
  if (!page) throw new Error(`Missing SEO metadata for ${path}`);
  return seoHead({ ...page, structuredData });
}
