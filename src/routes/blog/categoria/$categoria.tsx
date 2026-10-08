import { blogPosts } from "@/data/blog";
import { toFriendlySlug } from "@/lib/blog-url";
import { noIndexHead } from "@/lib/seo";
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
  head: ({ loaderData }) =>
    noIndexHead(
      `Artigos sobre ${loaderData?.category ?? "tecnologia"} | Blog Evolves`,
      `Artigos, guias e ideias da Evolves sobre ${loaderData?.category ?? "tecnologia"}.`,
      `/blog/categoria/${toFriendlySlug(loaderData?.category ?? "tecnologia")}`,
    ),
  component: BlogCategoryPage,
});

function BlogCategoryPage() {
  const { category } = Route.useLoaderData();
  return <BlogIndex initialCategory={category} />;
}
