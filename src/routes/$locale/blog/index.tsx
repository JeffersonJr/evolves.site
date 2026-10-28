import { pageHead, siteUrl } from "@/lib/seo";
import { BlogIndex } from "@/components/BlogIndex";
import { createFileRoute } from "@tanstack/react-router";
import { localizedPath, type Locale } from "@/lib/i18n-urls";

export const Route = createFileRoute("/$locale/blog/")({
  head: ({ params }) => {
    const locale = params.locale as Locale;
    const home = new URL(localizedPath(locale, "home"), siteUrl).href;
    const blog = new URL(localizedPath(locale, "blog"), siteUrl).href;
    return pageHead(locale, "blog", [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Blog Evolves",
        description:
          "Artigos de tecnologia, SEO, design, inteligência artificial e negócios digitais.",
        url: blog,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: home,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: blog,
          },
        ],
      },
    ]);
  },
  component: BlogIndexRoute,
});

function BlogIndexRoute() {
  return <BlogIndex />;
}
