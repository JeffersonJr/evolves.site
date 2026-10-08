import { pageHead, siteUrl } from "@/lib/seo";
import { BlogIndex } from "@/components/BlogIndex";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead("/blog", [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Blog Evolves",
        description:
          "Artigos de tecnologia, SEO, design, inteligência artificial e negócios digitais.",
        url: new URL("/blog", siteUrl).href,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: new URL("/", siteUrl).href,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: new URL("/blog", siteUrl).href,
          },
        ],
      },
    ]),
  component: BlogIndexRoute,
});

function BlogIndexRoute() {
  return <BlogIndex />;
}
