import { f as lazyRouteComponent, p as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as casesData } from "./_ssr/cases-C_6utvqr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CBeiZ_en.js
var $$splitComponentImporter = () => import("./_slug-D8VZEgPH.mjs");
var Route = createFileRoute("/cases/$slug")({
	loader: ({ params }) => {
		return { project: casesData.find((p) => p.slug === params.slug) };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
