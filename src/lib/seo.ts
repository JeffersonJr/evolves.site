import site from "@/data/site.json";

export function seoHead({
  title,
  description,
  path,
  image = site.image,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}) {
  const url = `${site.url}${path === "/" ? "/" : path.replace(/\/$/, "")}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:image", content: new URL(image, site.url).href },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: new URL(image, site.url).href },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function pageHead(path: string) {
  const page = site.pages.find((page) => page.path === path);
  if (!page) throw new Error(`Missing SEO metadata for ${path}`);
  return seoHead(page);
}
