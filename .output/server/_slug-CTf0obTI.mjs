import { c as siteUrl, n as breadcrumbSchema, o as seoHead, r as faqSchema, s as serviceSchema } from "./_ssr/seo-CfNvlcX9.mjs";
import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as servicesData } from "./_ssr/services-Df_LQmgL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CTf0obTI.js
var $$splitComponentImporter = () => import("./_slug-Be4eKGru.mjs");
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = servicesData.find((s) => s.slug === params.slug);
		if (!service) throw notFound();
		const { icon: _icon, ...serviceContent } = service;
		return { service: serviceContent };
	},
	head: ({ loaderData }) => {
		const item = loaderData?.service;
		if (!item) return { meta: [{
			name: "robots",
			content: "noindex, follow"
		}] };
		const serviceUrl = new URL(`/services/${item.slug}`, siteUrl).href;
		return seoHead({
			title: item.seoTitle,
			description: item.seoDescription,
			path: `/services/${item.slug}`,
			structuredData: [
				serviceSchema({
					name: item.title,
					description: item.seoDescription,
					url: serviceUrl
				}),
				breadcrumbSchema([
					{
						name: "Início",
						path: "/"
					},
					{
						name: "Serviços",
						path: "/services"
					},
					{
						name: item.title,
						path: `/services/${item.slug}`
					}
				]),
				...item.faq && item.faq.length > 0 ? [faqSchema(item.faq)] : []
			]
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
