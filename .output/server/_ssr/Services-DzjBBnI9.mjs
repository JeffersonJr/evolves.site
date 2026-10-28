import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as useLocale } from "./ssr.mjs";
import { i as useI18n } from "./I18nContext-DZ0CQ5_Q.mjs";
import { K as ArrowRight, R as CodeXml, U as Check } from "../_libs/lucide-react.mjs";
import { t as servicesData } from "./services-Df_LQmgL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Services-DzjBBnI9.js
var import_jsx_runtime = require_jsx_runtime();
function Services({ standalone = false } = {}) {
	const Heading = standalone ? "h1" : "h2";
	const visibleServices = standalone ? servicesData : servicesData.slice(0, 4);
	const additionalServices = standalone ? [] : servicesData.slice(4);
	const { t } = useI18n();
	const locale = useLocale();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		"aria-labelledby": "services-heading",
		className: "relative border-t border-black/[0.08] bg-surface/20 py-24 sm:py-32 dark:border-white/[0.08]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-[11px] font-mono tracking-wider text-primary uppercase dark:border-white/[0.08] dark:bg-white/[0.03]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.services.eyebrow })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							id: "services-heading",
							className: "mt-4 text-balance text-3xl font-medium tracking-tight sm:text-5xl text-foreground",
							children: t.services.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base text-muted-foreground sm:text-lg",
							children: t.services.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 text-xs font-mono text-muted-foreground",
							children: t.services.differential
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 sm:grid-cols-2",
					children: visibleServices.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/$locale/services/$slug",
						params: {
							locale,
							slug: s.slug
						},
						className: "group flex flex-col justify-between rounded-2xl border border-black/[0.08] bg-card p-8 sm:p-9 transition-all duration-300 hover:border-black/[0.16] shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/[0.14] dark:hover:bg-white/[0.04]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-11 w-11 items-center justify-center rounded-xl border border-black/[0.08] bg-black/[0.03] text-primary dark:border-white/[0.08] dark:bg-white/[0.04]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
									className: "h-5 w-5",
									strokeWidth: 1.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-xl font-medium tracking-tight text-foreground group-hover:text-primary transition-colors",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed",
								children: s.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-2 mb-8",
								children: s.features.slice(0, 4).map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2.5 text-xs sm:text-sm text-foreground/85",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "h-3.5 w-3.5",
											strokeWidth: 2
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
								}, f))
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-5 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono text-primary dark:border-white/[0.06]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.services.viewDetails }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })]
						})]
					}, s.slug))
				}),
				additionalServices.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-mono text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: t.services.moreSolutions
					}), additionalServices.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/$locale/services/$slug",
						params: {
							locale,
							slug: service.slug
						},
						className: "underline decoration-white/[0.2] underline-offset-4 transition-colors hover:text-primary",
						children: service.title
					}, service.slug))]
				})
			]
		})
	});
}
//#endregion
export { Services as t };
