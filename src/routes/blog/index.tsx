import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/data/blog";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
});

function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));
  
  const filteredPosts = blogPosts.filter((p) => {
    const matchesCategory = !selectedCategory || p.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = !query || 
      p.title.toLowerCase().includes(query) || 
      p.excerpt.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const showFeatured = filteredPosts.length > 0 && !searchQuery && !selectedCategory;
  const featuredPost = showFeatured ? filteredPosts[0] : null;
  const remainingPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto max-w-6xl px-6 py-32 sm:py-40">
        <div className="mb-12 text-center sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Blog Evolves</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Artigos, tendências e dicas sobre desenvolvimento, design, IA e SEO para alavancar o seu negócio digital.
          </p>
        </div>

        {/* Search & Categories / Tags */}
        <div className="mb-12 flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedCategory(null)}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-muted-foreground" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full block p-2.5 pl-10 text-sm rounded-full border border-border bg-background focus:ring-primary focus:border-primary outline-none transition-all" 
              placeholder="Buscar artigos..." 
            />
          </div>
        </div>

        {/* Results counter */}
        {(selectedCategory || searchQuery) && (
          <p className="text-sm text-muted-foreground mb-8">
            {filteredPosts.length} {filteredPosts.length === 1 ? "artigo encontrado" : "artigos encontrados"}
            {selectedCategory && <> em <span className="font-semibold text-foreground">{selectedCategory}</span></>}
            {searchQuery && <> para "<span className="font-semibold text-foreground">{searchQuery}</span>"</>}
          </p>
        )}

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <Link
              to="/blog/$slug"
              params={{ slug: featuredPost.slug }}
              className="group flex flex-col md:flex-row gap-8 rounded-4xl border border-border bg-surface p-6 sm:p-10 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
            >
              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20">
                    Destaque · {featuredPost.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{featuredPost.readTime} leitura</span>
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
                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover rounded-3xl" />
              </div>
            </Link>
          </div>
        )}

        {/* Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">Nenhum artigo encontrado.</p>
            <button 
              type="button"
              onClick={() => { setSelectedCategory(null); setSearchQuery(""); }}
              className="mt-4 text-primary font-medium cursor-pointer hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group flex flex-col justify-between rounded-3xl border border-border bg-card overflow-hidden shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div className="h-48 w-full shrink-0 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime} leitura</span>
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
