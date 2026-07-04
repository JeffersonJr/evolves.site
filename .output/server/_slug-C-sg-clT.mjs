import { t as blogPosts } from "./_ssr/blog-BWxN5Vt2.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-C-sg-clT.js
var $$splitComponentImporter = () => import("./_slug-CQ_UJNop.mjs");
var Route = createFileRoute("/blog/$slug")({
	loader: ({ params }) => {
		return { post: blogPosts.find((p) => p.slug === params.slug) };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
