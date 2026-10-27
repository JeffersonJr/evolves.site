import { r as noIndexHead } from "./_ssr/seo-Bjqzx_4V.mjs";
import { n as toFriendlySlug, t as fromFriendlySlug } from "./_ssr/blog-url-DLeBvoZZ.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_termo-TZaTttG7.js
var $$splitComponentImporter = () => import("./_termo-C4eJDSYa.mjs");
var Route = createFileRoute("/blog/busca/$termo")({
	loader: ({ params }) => ({ term: fromFriendlySlug(params.termo) }),
	head: ({ loaderData }) => noIndexHead(`Busca por ${loaderData?.term ?? "artigos"} | Blog Evolves`, `Artigos da Evolves relacionados a ${loaderData?.term ?? "tecnologia e negócios digitais"}.`, `/blog/busca/${toFriendlySlug(loaderData?.term ?? "artigos")}`),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
