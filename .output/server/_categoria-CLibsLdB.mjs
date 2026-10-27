import { r as noIndexHead } from "./_ssr/seo-Bjqzx_4V.mjs";
import { t as blogPosts } from "./_ssr/blog-9_pvUS2w.mjs";
import { n as toFriendlySlug } from "./_ssr/blog-url-DLeBvoZZ.mjs";
import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_categoria-CLibsLdB.js
var $$splitComponentImporter = () => import("./_categoria-BbaOfPYg.mjs");
var Route = createFileRoute("/blog/categoria/$categoria")({
	loader: ({ params }) => {
		const category = Array.from(new Set(blogPosts.map((post) => post.category))).find((value) => toFriendlySlug(value) === params.categoria);
		if (!category) throw notFound();
		return { category };
	},
	head: ({ loaderData }) => noIndexHead(`Artigos sobre ${loaderData?.category ?? "tecnologia"} | Blog Evolves`, `Artigos, guias e ideias da Evolves sobre ${loaderData?.category ?? "tecnologia"}.`, `/blog/categoria/${toFriendlySlug(loaderData?.category ?? "tecnologia")}`),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
