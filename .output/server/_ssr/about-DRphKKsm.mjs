import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Navbar, t as Footer } from "./Footer-BXwmlAwJ.mjs";
import { t as About } from "./About-CxdayZiU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DRphKKsm.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-6 text-center relative z-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary animate-pulse" }), "Conheça a Evolves"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-balance text-5xl font-bold tracking-tight sm:text-7xl mb-6",
								children: [
									"Não criamos apenas sites.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500",
										children: "Construímos negócios digitais."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed",
								children: "Nascemos da insatisfação com as soluções padrão do mercado. Unimos inteligência artificial, design estratégico e engenharia robusta para colocar empresas na vanguarda da nova economia."
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { AboutPage as component };
