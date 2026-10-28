import { _ as createFileRoute, g as lazyRouteComponent, q as notFound } from "./_libs/@tanstack/react-router+[...].mjs";
import { s as localizedPath } from "./_ssr/ssr.mjs";
import { n as breadcrumbSchema, s as seoHead, t as blogPostingSchema } from "./_ssr/seo-L22duNSO.mjs";
import { t as blogPosts } from "./_ssr/blog-9_pvUS2w.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-HptsX3Kj.js
var $$splitComponentImporter = () => import("./_slug-DzcrTIuh.mjs");
var Route = createFileRoute("/$locale/blog/$slug")({
	loader: ({ params }) => {
		const post = blogPosts.find((p) => p.slug === params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData, params }) => {
		const item = loaderData?.post;
		const locale = params.locale;
		if (!item) return { meta: [{
			name: "robots",
			content: "noindex, follow"
		}] };
		const path = localizedPath(locale, "blog", [item.slug]);
		return seoHead({
			title: `${item.title} | Evolves`,
			description: item.excerpt,
			path: `/${locale}/blog/${item.slug}`,
			locale,
			type: "article",
			image: item.image,
			structuredData: [blogPostingSchema(item, locale), breadcrumbSchema([
				{
					name: "Início",
					path: localizedPath(locale, "home")
				},
				{
					name: "Blog",
					path: localizedPath(locale, "blog")
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
