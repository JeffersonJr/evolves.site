import { n as breadcrumbSchema, o as seoHead, t as blogPostingSchema } from "./_ssr/seo-Bjqzx_4V.mjs";
import { t as blogPosts } from "./_ssr/blog-9_pvUS2w.mjs";
import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-DK28h8IZ.js
var $$splitComponentImporter = () => import("./_slug-BQVyobV0.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		const post = blogPosts.find((p) => p.slug === params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData }) => {
		const item = loaderData?.post;
		if (!item) return { meta: [{
			name: "robots",
			content: "noindex, follow"
		}] };
		return seoHead({
			title: `${item.title} | Evolves`,
			description: item.excerpt,
			path: `/blog/${item.slug}`,
			type: "article",
			image: item.image,
			structuredData: [blogPostingSchema(item), breadcrumbSchema([
				{
					name: "Início",
					path: "/"
				},
				{
					name: "Blog",
					path: "/blog"
				},
				{
					name: item.title,
					path: `/blog/${item.slug}`
				}
			])]
		});
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
