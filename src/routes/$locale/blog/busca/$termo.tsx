import { noIndexHead } from "@/lib/seo";
import { fromFriendlySlug, toFriendlySlug } from "@/lib/blog-url";
import { createFileRoute } from "@tanstack/react-router";
import { BlogIndex } from "@/components/BlogIndex";
import { blogPosts } from "@/data/blog";
import type { Locale } from "@/lib/i18n-urls";

export const Route = createFileRoute("/$locale/blog/busca/$termo")({
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
  head: ({ loaderData, params }) => {
    const locale = params.locale as Locale;
    const term = loaderData?.term ?? "artigos";
    const slug = toFriendlySlug(term);
    const path = localizedPath(locale, "blog", ["busca", slug]);
    return noIndexHead(
      `${term} | Artigos e Guias | Blog Evolves`,
      `Confira artigos, tutoriais e guias sobre "${term}" publicados no Blog da Evolves. Conteúdo técnico sobre desenvolvimento web, SEO e tecnologia.`,
      `/${locale}/blog/busca/${slug}`,
      locale,
    );
  },
  component: BlogSearchPage,
});

function BlogSearchPage() {
  const { term } = Route.useLoaderData();
  return <BlogIndex initialTerm={term} />;
}
