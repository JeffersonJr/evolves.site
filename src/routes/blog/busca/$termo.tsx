import { seoHead, breadcrumbSchema, siteUrl } from "@/lib/seo";
import { fromFriendlySlug, toFriendlySlug } from "@/lib/blog-url";
import { createFileRoute } from "@tanstack/react-router";
import { BlogIndex } from "@/components/BlogIndex";
import { blogPosts } from "@/data/blog";

export const Route = createFileRoute("/blog/busca/$termo")({
  loader: ({ params }) => {
    const term = fromFriendlySlug(params.termo);
    const matchedPosts = blogPosts.filter((p) => {
      const normalize = (s: string) =>
        s
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
      const hay = normalize(`${p.title} ${p.excerpt} ${p.category}`);
      return normalize(term)
        .split(" ")
        .every((w) => hay.includes(w));
    });
    return { term, count: matchedPosts.length };
  },
  head: ({ loaderData }) => {
    const term = loaderData?.term ?? "artigos";
    const slug = toFriendlySlug(term);
    return seoHead({
      title: `${term} | Artigos e Guias | Blog Evolves`,
      description: `Confira artigos, tutoriais e guias sobre "${term}" publicados no Blog da Evolves. Conteúdo técnico sobre desenvolvimento web, SEO e tecnologia.`,
      path: `/blog/busca/${slug}`,
      structuredData: [
        breadcrumbSchema([
          { name: "Início", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: `Busca: ${term}`, path: `/blog/busca/${slug}` },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `${term} | Blog Evolves`,
          description: `Artigos sobre ${term} no Blog da Evolves.`,
          url: new URL(`/blog/busca/${slug}`, siteUrl).href,
        },
      ],
    });
  },
  component: BlogSearchPage,
});

function BlogSearchPage() {
  const { term } = Route.useLoaderData();
  return <BlogIndex initialTerm={term} />;
}
