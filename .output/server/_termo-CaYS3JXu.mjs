import { c as siteUrl, n as breadcrumbSchema, o as seoHead } from "./_ssr/seo-CfNvlcX9.mjs";
import { t as blogPosts } from "./_ssr/blog-9_pvUS2w.mjs";
import { n as toFriendlySlug, t as fromFriendlySlug } from "./_ssr/blog-url-DLeBvoZZ.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_termo-CaYS3JXu.js
var $$splitComponentImporter = () => import("./_termo-dNgbwKvL.mjs");
var Route = createFileRoute("/blog/busca/$termo")({
	loader: ({ params }) => {
		const term = fromFriendlySlug(params.termo);
		return {
			term,
			count: blogPosts.filter((p) => {
				const normalize = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
				const hay = normalize(`${p.title} ${p.excerpt} ${p.category}`);
				return normalize(term).split(" ").every((w) => hay.includes(w));
			}).length
		};
	},
	head: ({ loaderData }) => {
		const term = loaderData?.term ?? "artigos";
		const slug = toFriendlySlug(term);
		return seoHead({
			title: `${term} | Artigos e Guias | Blog Evolves`,
			description: `Confira artigos, tutoriais e guias sobre "${term}" publicados no Blog da Evolves. Conteúdo técnico sobre desenvolvimento web, SEO e tecnologia.`,
			path: `/blog/busca/${slug}`,
			structuredData: [breadcrumbSchema([
				{
					name: "Início",
					path: "/"
				},
				{
					name: "Blog",
					path: "/blog"
				},
				{
					name: `Busca: ${term}`,
					path: `/blog/busca/${slug}`
				}
			]), {
				"@context": "https://schema.org",
				"@type": "CollectionPage",
				name: `${term} | Blog Evolves`,
				description: `Artigos sobre ${term} no Blog da Evolves.`,
				url: new URL(`/blog/busca/${slug}`, siteUrl).href
			}]
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
