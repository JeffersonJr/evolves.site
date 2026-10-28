import { P as notFound, m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { r as htmlLang, s as localizedPath } from "./_ssr/ssr.mjs";
import { l as siteUrl, n as breadcrumbSchema, s as seoHead } from "./_ssr/seo-L22duNSO.mjs";
import { t as casesData } from "./_ssr/cases-uzfqgkCF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-2Wg1jxoE.js
var $$splitComponentImporter = () => import("./_slug-C7IyEMFf.mjs");
var Route = createFileRoute("/$locale/cases/$slug")({
	loader: ({ params }) => {
		const project = casesData.find((p) => p.slug === params.slug);
		if (!project) throw notFound();
		return { project };
	},
	head: ({ loaderData, params }) => {
		const item = loaderData?.project;
		const locale = params.locale;
		if (!item) return { meta: [{
			name: "robots",
			content: "noindex, follow"
		}] };
		const path = localizedPath(locale, "cases", [item.slug]);
		return seoHead({
			title: `${item.title} · Estudo de Caso de Engenharia | Evolves`,
			description: item.text,
			path: `/${locale}/cases/${item.slug}`,
			locale,
			image: item.img,
			structuredData: [{
				"@context": "https://schema.org",
				"@type": "CreativeWork",
				headline: item.title,
				description: item.text,
				image: item.img,
				url: new URL(path, siteUrl).href,
				keywords: item.tags,
				inLanguage: htmlLang(locale)
			}, breadcrumbSchema([
				{
					name: "Início",
					path: localizedPath(locale, "home")
				},
				{
					name: "Cases",
					path: localizedPath(locale, "cases")
				},
				{
					name: item.title,
					path
				}
			])]
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
