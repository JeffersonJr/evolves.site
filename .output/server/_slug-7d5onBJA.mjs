import { c as siteUrl, n as breadcrumbSchema, o as seoHead } from "./_ssr/seo-CfNvlcX9.mjs";
import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as casesData } from "./_ssr/cases-DvONSuRz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-7d5onBJA.js
var $$splitComponentImporter = () => import("./_slug-DRbfbnSe.mjs");
var Route = createFileRoute("/cases/$slug")({
	loader: ({ params }) => {
		const project = casesData.find((p) => p.slug === params.slug);
		if (!project) throw notFound();
		return { project };
	},
	head: ({ loaderData }) => {
		const item = loaderData?.project;
		if (!item) return { meta: [{
			name: "robots",
			content: "noindex, follow"
		}] };
		return seoHead({
			title: `${item.title} · Estudo de Caso de Engenharia | Evolves`,
			description: item.text,
			path: `/cases/${item.slug}`,
			image: item.img,
			structuredData: [{
				"@context": "https://schema.org",
				"@type": "CreativeWork",
				headline: item.title,
				description: item.text,
				image: item.img,
				url: new URL(`/cases/${item.slug}`, siteUrl).href,
				keywords: item.tags,
				inLanguage: "pt-BR"
			}, breadcrumbSchema([
				{
					name: "Início",
					path: "/"
				},
				{
					name: "Cases",
					path: "/cases"
				},
				{
					name: item.title,
					path: `/cases/${item.slug}`
				}
			])]
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
