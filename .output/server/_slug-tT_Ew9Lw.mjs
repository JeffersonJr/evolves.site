import { f as lazyRouteComponent, p as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as servicesData } from "./_ssr/services-Bi8P_Q9R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-tT_Ew9Lw.js
var $$splitComponentImporter = () => import("./_slug-c8Srwrmk.mjs");
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		return { service: servicesData.find((s) => s.slug === params.slug) };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
