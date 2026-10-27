import { blogPosts } from "@/data/blog";
import { toFriendlySlug } from "@/lib/blog-url";
import { seoHead, breadcrumbSchema, siteUrl } from "@/lib/seo";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogIndex } from "@/components/BlogIndex";

export const Route = createFileRoute("/blog/categoria/$categoria")({
  loader: ({ params }) => {
    const category = Array.from(
      new Set(blogPosts.map((post) => post.category)),
    ).find((value) => toFriendlySlug(value) === params.categoria);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const category = loaderData?.category ?? "tecnologia";
    const slug = toFriendlySlug(category);
    return seoHead({
      title: `${category}: Artigos e Guias Práticos | Blog Evolves`,
      description: `Artigos, guias e análises sobre ${category} publicados pela Evolves. Conteúdo técnico especializado para empresas e profissionais que buscam referência em ${category.toLowerCase()}.`,
      path: `/blog/categoria/${slug}`,
      structuredData: [
        breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: category, path: `/blog/categoria/${slug}` },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${category} | Blog Evolves`,
          description: `Artigos sobre ${category} no Blog da Evolves.`,
          url: new URL(`/blog/categoria/${slug}`, siteUrl).href,
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
