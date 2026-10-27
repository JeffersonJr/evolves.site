import { c as siteUrl, n as breadcrumbSchema, o as seoHead } from "./_ssr/seo-CfNvlcX9.mjs";
import { t as blogPosts } from "./_ssr/blog-9_pvUS2w.mjs";
import { n as toFriendlySlug } from "./_ssr/blog-url-DLeBvoZZ.mjs";
import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_categoria-DWVaZC1w.js
var $$splitComponentImporter = () => import("./_categoria-gAmaQZ5u.mjs");
var Route = createFileRoute("/blog/categoria/$categoria")({
	loader: ({ params }) => {
		const category = Array.from(new Set(blogPosts.map((post) => post.category))).find((value) => toFriendlySlug(value) === params.categoria);
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
					name: category,
					path: `/blog/categoria/${slug}`
				}
			]), {
				"@context": "https://schema.org",
				"@type": "CollectionPage",
				name: `${category} | Blog Evolves`,
				description: `Artigos sobre ${category} no Blog da Evolves.`,
				url: new URL(`/blog/categoria/${slug}`, siteUrl).href,
				about: {
					"@type": "Thing",
					name: category
				},
				publisher: {
					"@type": "Organization",
					name: "Evolves Tecnologia",
					url: siteUrl
				}
			}]
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
