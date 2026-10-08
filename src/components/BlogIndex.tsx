import { blogPosts } from "@/data/blog";
import { toFriendlySlug } from "@/lib/blog-url";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Search } from "lucide-react";
import { useState, type FormEvent } from "react";

export function BlogIndex({
  initialTerm = "",
  initialCategory = "",
}: {
  initialTerm?: string;
  initialCategory?: string;
}) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(initialTerm);

  const normalize = (value: string) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim();

  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  const filteredPosts = blogPosts.filter((p) => {
    const matchesCategory = !initialCategory || p.category === initialCategory;
    const query = normalize(initialTerm);
    const content = normalize(`${p.title} ${p.excerpt} ${p.category}`);
    const matchesSearch =
      !query || query.split(" ").every((word) => content.includes(word));
    return matchesCategory && matchesSearch;
  });

  const showFeatured =
    filteredPosts.length > 0 && !initialTerm && !initialCategory;
  const featuredPost = showFeatured ? filteredPosts[0] : null;
  const remainingPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const term = toFriendlySlug(searchQuery);
    if (!term) {
      void navigate({ to: "/blog" });
      return;
    }
    void navigate({ to: "/blog/busca/$termo", params: { termo: term } });
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto max-w-6xl px-6 py-32 sm:py-40">
        <div className="mb-12 text-center sm:text-left">
          <h1 className="mb-4 text-5xl font-semibold tracking-tight sm:text-6xl">
            {initialTerm
              ? `Resultados para “${initialTerm}”`
              : initialCategory
                ? `Artigos sobre ${initialCategory}`
                : "Blog Evolves"}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Artigos, tendências e dicas sobre desenvolvimento, design, IA e SEO
            para alavancar o seu negócio digital.
          </p>
        </div>

        {/* Search & Categories / Tags */}
        <div className="mb-12 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors ${
                !initialCategory
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Todos
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                to="/blog/categoria/$categoria"
                params={{ categoria: toFriendlySlug(cat) }}
                className={`text-sm font-medium transition-colors ${
                  initialCategory === cat
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          <form onSubmit={submitSearch} className="relative w-full sm:w-96">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="w-4 h-4 text-muted-foreground" />
            </div>
            <input
              type="text"
              value={searchQuery}
              maxLength={80}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full rounded-full border border-border bg-background py-2.5 pl-10 pr-24 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
              placeholder="Buscar artigos..."
            />
            <button
              type="submit"
              className="absolute inset-y-1.5 right-1.5 rounded-full bg-primary px-4 text-xs font-medium text-primary-foreground transition hover:brightness-105"
            >
              Buscar
            </button>
          </form>
        </div>

        {/* Results counter */}
        {(initialCategory || initialTerm) && (
          <p className="text-sm text-muted-foreground mb-8">
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1
              ? "artigo encontrado"
              : "artigos encontrados"}
            {initialCategory && (
              <>
                {" "}
                em{" "}
                <span className="font-semibold text-foreground">
                  {initialCategory}
                </span>
              </>
            )}
            {initialTerm && (
              <>
                {" "}
                para "
                <span className="font-semibold text-foreground">
                  {initialTerm}
                </span>
                "
              </>
            )}
          </p>
        )}

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <Link
              to="/blog/$slug"
              params={{ slug: featuredPost.slug }}
              className="group flex flex-col gap-8 rounded-4xl bg-[#f5f5f7] p-6 transition-colors hover:bg-[#efeff2] dark:bg-surface dark:hover:bg-secondary/70 md:flex-row sm:p-10"
            >
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20">
                    Destaque · {featuredPost.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {featuredPost.readTime} leitura
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm font-medium text-primary mt-auto">
                  Ler artigo completo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="flex-1 hidden md:block">
                <img
                  width={800}
                  height={450}
                  fetchPriority="high"
                  decoding="async"
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </Link>
          </div>
        )}

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              Nenhum artigo encontrado.
            </p>
            <Link
              className="mt-4 inline-block text-primary font-medium hover:underline"
              to="/blog"
            >
              Limpar filtros
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-[#f5f5f7] transition-colors hover:bg-[#efeff2] dark:bg-surface dark:hover:bg-secondary/70"
              >
                <div className="h-48 w-full shrink-0 overflow-hidden">
                  <img
                    width={800}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime} leitura
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <div className="flex items-center justify-between text-sm font-medium pt-4 border-t border-border/50">
                    <span className="text-primary">Ler artigo</span>
                    <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
