import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Navbar, t as Footer } from "./Footer-BXwmlAwJ.mjs";
import { t as About } from "./About-CxdayZiU.mjs";
import { t as Cases } from "./Cases-5UDNnjuX.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Contact } from "./Contact-DAYqPaIH.mjs";
import { t as Services } from "./Services-BQKYNCXH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CxEcRegI.js
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 -z-10",
			style: { background: "var(--gradient-hero)" },
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "animate-fade-up text-sm font-medium tracking-tight text-primary",
					children: "Soluções digitais com IA e design inteligente"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "animate-fade-up mx-auto mt-4 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl",
					style: { animationDelay: "80ms" },
					children: [
						"Transformamos ideias em",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gradient-text",
							children: "experiências digitais"
						}),
						" de alto impacto."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl",
					style: { animationDelay: "160ms" },
					children: "Criamos sites, sistemas e marcas sob medida, unindo inteligência artificial e design de vanguarda para empresas que buscam escala."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-3",
					style: { animationDelay: "240ms" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "rounded-full bg-primary px-7 py-3 text-base font-medium text-primary-foreground transition-transform hover:scale-[1.03]",
						children: "Começar agora"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#services",
						className: "rounded-full border border-border bg-card px-7 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary",
						children: "Ver nossos serviços"
					})]
				})
			]
		})]
	});
}
var keywords = [
	"Criação de Sites",
	"Sistemas Customizados",
	"Hospedagem Cloud",
	"SEO Técnico",
	"Branding B2B",
	"Inteligência Artificial",
	"Alta Performance",
	"Design UI/UX",
	"Consultoria Tech",
	"Desenvolvimento Web",
	"Lojas Virtuais",
	"Acessibilidade Digital"
];
function TagCloud() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "tag-cloud-container w-full overflow-hidden py-12 border-y border-border/50 bg-background relative flex",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "tag-cloud-track flex gap-4 sm:gap-6 items-center",
				children: [
					...keywords,
					...keywords,
					...keywords
				].map((kw, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-border/60 bg-surface/50 text-sm sm:text-base font-medium text-muted-foreground whitespace-nowrap backdrop-blur-sm transition-all duration-300 hover:text-primary hover:border-primary hover:scale-105 cursor-default shadow-sm hover:shadow-md",
					children: kw
				}, i))
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cases, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagCloud, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "top-center",
				richColors: true
			})
		]
	});
}
//#endregion
export { Index as component };
