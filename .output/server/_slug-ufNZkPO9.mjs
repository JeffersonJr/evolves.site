import { i as organizationSchema, n as breadcrumbSchema, o as seoHead, s as siteUrl } from "./_ssr/seo-Bjqzx_4V.mjs";
import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as servicesData } from "./_ssr/services-Df_LQmgL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-ufNZkPO9.js
var $$splitComponentImporter = () => import("./_slug-DjVu83wm.mjs");
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
		return seoHead({
			title: item.seoTitle,
			description: item.seoDescription,
			path: `/services/${item.slug}`,
			structuredData: [{
				"@context": "https://schema.org",
				"@type": "Service",
				name: item.title,
				serviceType: item.title,
				description: item.seoDescription,
				url: new URL(`/services/${item.slug}`, siteUrl).href,
				provider: organizationSchema,
				areaServed: {
					"@type": "Country",
					name: "Brasil"
				}
			}, breadcrumbSchema([
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
			])]
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
