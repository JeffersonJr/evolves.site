import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { o as localizeHref } from "./_ssr/ssr.mjs";
import { G as ArrowUpRight, V as CircleCheck, q as ArrowLeft } from "./_libs/lucide-react.mjs";
import { n as Navbar, t as Footer } from "./_ssr/Footer-CwF1ej6Q.mjs";
import { t as casesData } from "./_ssr/cases-uzfqgkCF.mjs";
import { t as servicesData } from "./_ssr/services-Df_LQmgL.mjs";
import { n as contentConnections, t as RelatedLinks } from "./_ssr/related-content-hnjF-NNJ.mjs";
import { t as Route } from "./_slug-CxdnYOWF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-ByxItGYK.js
var import_jsx_runtime = require_jsx_runtime();
function ServicePage() {
	const { locale } = Route.useParams();
	const { service } = Route.useLoaderData();
	const Icon = servicesData.find((item) => item.slug === service.slug).icon;
	const relatedContent = contentConnections.find((entry) => entry.service.href === `/services/${service.slug}`);
	const relatedLinks = [...(relatedContent?.articles ?? []).map((article) => ({
		...article,
		href: localizeHref(locale, article.href)
	})), ...casesData.filter((project) => relatedContent?.cases.includes(project.slug)).map((project) => ({
		href: localizeHref(locale, `/cases/${project.slug}`),
		label: `${project.title}: ${project.text}`
	}))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 mx-auto max-w-5xl px-6 py-28 sm:py-36",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/$locale/services",
					params: { locale },
					className: "inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Todos os Serviços" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-16 grid md:grid-cols-12 gap-8 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "h-6 w-6",
										strokeWidth: 1.75
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-balance text-3xl font-semibold tracking-tight sm:text-5xl text-foreground",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed",
									children: service.description
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-5 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mb-4 flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground font-mono uppercase",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Principais Entregáveis" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-3",
								children: service.features.map((feature, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feature })]
								}, idx))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-border/60 mb-16" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-8 text-center",
							children: "Diferenciais de Engenharia"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid sm:grid-cols-3 gap-5",
							children: service.whyChooseUs.map((reason, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-6 shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-2xl font-bold text-foreground/60 dark:text-foreground/50 mb-3 block",
									children: ["0", idx + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs sm:text-sm text-muted-foreground leading-relaxed",
									children: reason
								})]
							}, idx))
						})]
					}),
					service.phases && service.phases.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-10 text-center",
							children: "Fases de Execução"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
							children: service.phases.map((phase, pIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-2xl border border-border bg-surface/50 p-5 flex flex-col justify-between",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[10px] font-mono uppercase text-primary tracking-wider",
										children: ["Fase 0", pIdx + 1]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 text-sm font-semibold text-foreground",
										children: phase.name
									}),
									phase.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground leading-relaxed",
										children: phase.description
									}),
									phase.steps && phase.steps.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-3 space-y-2 border-t border-border/60 pt-3",
										children: phase.steps.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "text-xs text-muted-foreground leading-relaxed",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium text-foreground block",
												children: st.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] text-muted-foreground",
												children: st.detail
											})]
										}, st.id))
									})
								] })
							}, pIdx))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-20 overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12 text-center shadow-[var(--shadow-card)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-3",
								children: "Pronto para implementar essa solução?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm max-w-lg mx-auto mb-8 leading-relaxed",
								children: "Vamos conversar sobre o seu projeto e estruturar uma proposta com prazos ágeis e preço fixo."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/$locale/contact",
								params: { locale },
								className: "inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs sm:text-sm font-medium text-background transition hover:opacity-90 shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Solicitar Orçamento Técnico" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedLinks, {
						title: "Conheça os serviços relacionados",
						links: relatedLinks
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ServicePage as component };
