import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as ArrowRight, j as Check, s as Sparkles } from "../_libs/lucide-react.mjs";
import { t as servicesData } from "./services-Bi8P_Q9R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Services-BQKYNCXH.js
var import_jsx_runtime = require_jsx_runtime();
var differential = "Nosso diferencial: um olhar de qualidade e de UX/UI com mais de 8 anos de experiência prática.";
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "bg-surface py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-balance text-4xl font-semibold tracking-tight sm:text-5xl",
						children: "Serviços que impulsionam seu crescimento"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg text-muted-foreground",
						children: "Combinamos design de vanguarda com as tecnologias mais recentes para entregar resultados reais."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
							className: "h-4 w-4",
							strokeWidth: 2
						}), differential]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2",
				children: servicesData.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services/$slug",
					params: { slug: s.slug },
					className: "group flex flex-col rounded-4xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)] sm:p-10 block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-blue text-primary-foreground shadow-[var(--shadow-glow)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
								className: "h-7 w-7",
								strokeWidth: 1.75
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: s.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3 mb-8",
							children: s.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
										className: "h-3 w-3",
										strokeWidth: 3
									})
								}), f]
							}, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto pt-6 border-t border-border flex items-center text-sm font-medium text-primary",
							children: ["Ver detalhes do serviço", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" })]
						})
					]
				}, s.slug))
			})]
		})
	});
}
//#endregion
export { Services as t };
