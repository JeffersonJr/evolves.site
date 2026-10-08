import { noIndexHead } from "@/lib/seo";
import { fromFriendlySlug, toFriendlySlug } from "@/lib/blog-url";
import { createFileRoute } from "@tanstack/react-router";
import { BlogIndex } from "@/components/BlogIndex";

export const Route = createFileRoute("/blog/busca/$termo")({
  loader: ({ params }) => ({ term: fromFriendlySlug(params.termo) }),
  head: ({ loaderData }) =>
    noIndexHead(
      `Busca por ${loaderData?.term ?? "artigos"} | Blog Evolves`,
      `Artigos da Evolves relacionados a ${loaderData?.term ?? "tecnologia e negócios digitais"}.`,
      `/blog/busca/${toFriendlySlug(loaderData?.term ?? "artigos")}`,
    ),
  component: BlogSearchPage,
});

function BlogSearchPage() {
  const { term } = Route.useLoaderData();
  return <BlogIndex initialTerm={term} />;
}
