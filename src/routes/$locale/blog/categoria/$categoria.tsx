import { blogPosts } from "@/data/blog";
import { toFriendlySlug } from "@/lib/blog-url";
import { seoHead, breadcrumbSchema, siteUrl } from "@/lib/seo";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogIndex } from "@/components/BlogIndex";
import { localizedPath, type Locale } from "@/lib/i18n-urls";

export const Route = createFileRoute("/$locale/blog/categoria/$categoria")({
  loader: ({ params }) => {
    const category = Array.from(
      new Set(blogPosts.map((post) => post.category)),
    ).find((value) => toFriendlySlug(value) === params.categoria);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData, params }) => {
    const locale = params.locale as Locale;
    const category = loaderData?.category ?? "tecnologia";
    const slug = toFriendlySlug(category);
    const path = localizedPath(locale, "blog", ["categoria", slug]);
    return seoHead({
      title: `${category}: Artigos e Guias Práticos | Blog Evolves`,
      description: `Artigos, guias e análises sobre ${category} publicados pela Evolves. Conteúdo técnico especializado para empresas e profissionais que buscam referência em ${category.toLowerCase()}.`,
      path: `/${locale}/blog/categoria/${slug}`,
      locale,
      structuredData: [
        breadcrumbSchema([
          { name: "Início", path: localizedPath(locale, "home") },
          { name: "Blog", path: localizedPath(locale, "blog") },
          { name: category, path },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${category} | Blog Evolves`,
          description: `Artigos sobre ${category} no Blog da Evolves.`,
          url: new URL(path, siteUrl).href,
          about: { "@type": "Thing", name: category },
          publisher: {
            "@type": "Organization",
            name: "Evolves Tecnologia",
            url: siteUrl,
          },
        },
      ],
    });
  },
  component: BlogCategoryPage,
});

function BlogCategoryPage() {
  const { category } = Route.useLoaderData();
  return <BlogIndex initialCategory={category} />;
}
