import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { B as CircleCheck, D as Lightbulb, J as ArrowLeft, K as ArrowUpRight, M as Globe, a as Target } from "./_libs/lucide-react.mjs";
import { n as Footer, r as Navbar } from "./_ssr/Footer-Di_-c1Tt.mjs";
import { t as Route } from "./_slug-BgikoitB.mjs";
import { n as contentConnections, t as RelatedLinks } from "./_ssr/related-content-O510aKJq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-Ce2dqJ_S.js
var import_jsx_runtime = require_jsx_runtime();
function CaseStudyPage() {
	const { project } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 mx-auto max-w-4xl px-6 py-28 sm:py-36",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/cases",
					className: "inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Voltar para Casos de Estudo" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-muted-foreground mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.category })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-balance text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl text-foreground",
								children: project.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed",
								children: project.text
							}),
							project.liveUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: project.liveUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition hover:opacity-90 shadow-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-3.5 w-3.5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Acessar Projeto ao Vivo (",
											project.liveUrl.replace("https://", "").replace("/", ""),
											")"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })
									]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mb-16 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface to-card p-4 sm:p-8 shadow-[var(--shadow-card)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.img,
							alt: `Mockup do projeto ${project.title}`,
							className: "w-full h-auto object-contain rounded-2xl drop-shadow-xl transition-transform duration-700 hover:scale-[1.01]"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "O Desafio" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm sm:text-base text-muted-foreground leading-relaxed",
									children: project.challenge
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "A Solução de Engenharia" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm sm:text-base text-muted-foreground leading-relaxed",
									children: project.solution
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-wider mb-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Resultados & Impacto Mensurável" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8",
										children: project.stats?.map((stat, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col items-center justify-center rounded-2xl border border-border/80 bg-surface/50 p-5 text-center",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-3xl font-bold tracking-tight text-foreground mb-1 flex items-baseline",
												children: [stat.value, stat.suffix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-lg text-primary ml-0.5",
													children: stat.suffix
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-mono text-muted-foreground",
												children: stat.label
											})]
										}, idx))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-3",
										children: project.results.map((result, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 h-2 w-2 rounded-full bg-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs sm:text-sm text-muted-foreground leading-relaxed",
												children: result
											})]
										}, idx))
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 flex flex-col items-center border-t border-border/60 pt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4",
							children: "Tecnologias & Arquitetura"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap justify-center gap-2",
							children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-mono text-muted-foreground",
								children: tag
							}, tag))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-20 overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12 text-center shadow-[var(--shadow-card)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-3",
								children: "Quer resultados com esse padrão de qualidade?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm max-w-lg mx-auto mb-8 leading-relaxed",
								children: "Vamos conversar sobre o seu projeto e estruturar uma proposta técnica com prazos ágeis e preço fixo."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs sm:text-sm font-medium text-background transition hover:opacity-90 shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Falar com um Engenheiro" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedLinks, {
						title: "Conheça os serviços relacionados",
						links: contentConnections.filter((entry) => entry.cases.includes(project.slug)).map((entry) => entry.service)
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { CaseStudyPage as component };
