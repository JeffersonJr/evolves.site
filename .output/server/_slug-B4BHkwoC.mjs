import { P as notFound, m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { s as localizedPath } from "./_ssr/ssr.mjs";
import { c as serviceSchema, l as siteUrl, n as breadcrumbSchema, r as faqSchema, s as seoHead } from "./_ssr/seo-L22duNSO.mjs";
import { t as servicesData } from "./_ssr/services-Df_LQmgL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-B4BHkwoC.js
var $$splitComponentImporter = () => import("./_slug-BFe9CSw4.mjs");
var Route = createFileRoute("/$locale/services/$slug")({
	loader: ({ params }) => {
		const service = servicesData.find((s) => s.slug === params.slug);
		if (!service) throw notFound();
		const { icon: _icon, ...serviceContent } = service;
		return { service: serviceContent };
	},
	head: ({ loaderData, params }) => {
		const item = loaderData?.service;
		const locale = params.locale;
		if (!item) return { meta: [{
			name: "robots",
			content: "noindex, follow"
		}] };
		const path = localizedPath(locale, "services", [item.slug]);
		const serviceUrl = new URL(path, siteUrl).href;
		return seoHead({
			title: item.seoTitle,
			description: item.seoDescription,
			path: `/${locale}/services/${item.slug}`,
			locale,
			structuredData: [
				serviceSchema({
					name: item.title,
					description: item.seoDescription,
					url: serviceUrl
				}),
				breadcrumbSchema([
					{
						name: "Início",
						path: localizedPath(locale, "home")
					},
					{
						name: "Serviços",
						path: localizedPath(locale, "services")
					},
					{
						name: item.title,
						path
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
