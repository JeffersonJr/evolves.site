import { RelatedLinks } from "@/components/RelatedLinks";
import { contentConnections } from "@/data/related-content";
import { blogPostingSchema, breadcrumbSchema, seoHead } from "@/lib/seo";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  localizeHref,
  localizedPath,
  type Locale,
} from "@/lib/i18n-urls";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/data/blog";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

export const Route = createFileRoute("/$locale/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const item = loaderData?.post;
    const locale = params.locale as Locale;
    if (!item)
      return { meta: [{ name: "robots", content: "noindex, follow" }] };
    const path = localizedPath(locale, "blog", [item.slug]);
    return seoHead({
      title: `${item.title} | Evolves`,
      description: item.excerpt,
      path: `/${locale}/blog/${item.slug}`,
      locale,
      type: "article",
      image: item.image,
      structuredData: [
        blogPostingSchema(item, locale),
        breadcrumbSchema([
          { name: "Início", path: localizedPath(locale, "home") },
          { name: "Blog", path: localizedPath(locale, "blog") },
          { name: item.title, path },
        ]),
      ],
    });
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { locale } = Route.useParams();
  const { post } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto max-w-3xl px-6 py-32 sm:py-40">
        <Link
          to="/$locale/blog"
          params={{ locale }}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para o Blog
        </Link>

        <article>
          <div className="mb-10 border-b border-border pb-10">
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground mb-4">
              {post.category}
            </span>
            <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              {post.dateModified && (
                <div>Atualizado em {post.dateModified}</div>
              )}
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} leitura</span>
              </div>
            </div>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none prose-lg">
            <p className="lead text-xl text-foreground font-medium mb-8">
              {post.excerpt}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="mt-16 flex flex-col items-center gap-6 rounded-3xl bg-[#f5f5f7] p-8 dark:bg-surface sm:flex-row">
            <div className="h-20 w-20 shrink-0 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-2xl font-bold">
              JC
            </div>
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-xl font-bold mb-1">{post.author}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Desenvolvedor, entusiasta de tecnologia e fundador na Evolves
                Tecnologia. Apaixonado por criar soluções web de alta
                performance.
              </p>
              <a
                href="https://www.linkedin.com/in/jeffersonjunior/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4"
              >
                Conectar no LinkedIn{" "}
                <ArrowLeft className="ml-1 h-3 w-3 rotate-[135deg]" />
              </a>
            </div>
          </div>
          <RelatedLinks
            title="Soluções relacionadas a este artigo"
            links={contentConnections
              .filter((entry) =>
                entry.articles.some(
                  (article) => article.href === `/blog/${post.slug}`,
                ),
              )
              .map((entry) => ({
                ...entry.service,
                href: localizeHref(locale as Locale, entry.service.href),
              }))}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
