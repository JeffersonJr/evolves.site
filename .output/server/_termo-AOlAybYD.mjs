import { _ as createFileRoute, g as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as noIndexHead } from "./_ssr/seo-L22duNSO.mjs";
import { t as blogPosts } from "./_ssr/blog-9_pvUS2w.mjs";
import { n as toFriendlySlug, t as fromFriendlySlug } from "./_ssr/blog-url-DLeBvoZZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_termo-AOlAybYD.js
var $$splitComponentImporter = () => import("./_termo-2TDe8X4S.mjs");
var Route = createFileRoute("/$locale/blog/busca/$termo")({
	loader: ({ params }) => {
		const term = fromFriendlySlug(params.termo);
		return {
			term,
			count: blogPosts.filter((p) => {
				const normalize = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
				const hay = normalize(`${p.title} ${p.excerpt} ${p.category}`);
				return normalize(term).split(" ").every((w) => hay.includes(w));
			}).length
		};
	},
	head: ({ loaderData, params }) => {
		const locale = params.locale;
		const term = loaderData?.term ?? "artigos";
		const slug = toFriendlySlug(term);
		localizedPath(locale, "blog", ["busca", slug]);
		return noIndexHead(`${term} | Artigos e Guias | Blog Evolves`, `Confira artigos, tutoriais e guias sobre "${term}" publicados no Blog da Evolves. Conteúdo técnico sobre desenvolvimento web, SEO e tecnologia.`, `/${locale}/blog/busca/${slug}`, locale);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
