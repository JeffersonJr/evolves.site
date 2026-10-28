import { _ as createFileRoute, g as lazyRouteComponent, q as notFound } from "./_libs/@tanstack/react-router+[...].mjs";
import { s as localizedPath } from "./_ssr/ssr.mjs";
import { l as siteUrl, n as breadcrumbSchema, s as seoHead } from "./_ssr/seo-L22duNSO.mjs";
import { t as blogPosts } from "./_ssr/blog-9_pvUS2w.mjs";
import { n as toFriendlySlug } from "./_ssr/blog-url-DLeBvoZZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_categoria-DWC-W2nb.js
var $$splitComponentImporter = () => import("./_categoria-BiapffCX.mjs");
var Route = createFileRoute("/$locale/blog/categoria/$categoria")({
	loader: ({ params }) => {
		const category = Array.from(new Set(blogPosts.map((post) => post.category))).find((value) => toFriendlySlug(value) === params.categoria);
		if (!category) throw notFound();
		return { category };
	},
	head: ({ loaderData, params }) => {
		const locale = params.locale;
		const category = loaderData?.category ?? "tecnologia";
		const slug = toFriendlySlug(category);
		const path = localizedPath(locale, "blog", ["categoria", slug]);
		return seoHead({
			title: `${category}: Artigos e Guias Práticos | Blog Evolves`,
			description: `Artigos, guias e análises sobre ${category} publicados pela Evolves. Conteúdo técnico especializado para empresas e profissionais que buscam referência em ${category.toLowerCase()}.`,
			path: `/${locale}/blog/categoria/${slug}`,
			locale,
			structuredData: [breadcrumbSchema([
				{
					name: "Início",
					path: localizedPath(locale, "home")
				},
				{
					name: "Blog",
					path: localizedPath(locale, "blog")
				},
				{
					name: category,
					path
				}
			]), {
				"@context": "https://schema.org",
				"@type": "CollectionPage",
				name: `${category} | Blog Evolves`,
				description: `Artigos sobre ${category} no Blog da Evolves.`,
				url: new URL(path, siteUrl).href,
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
