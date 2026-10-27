import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useI18n } from "./I18nContext-CciqnXLk.mjs";
import { K as ArrowUpRight, N as Gauge, P as Earth, T as Lock, q as ArrowRight, t as Zap } from "../_libs/lucide-react.mjs";
import { t as casesData } from "./cases-CNu1jqkm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Cases-BJumND_S.js
var import_jsx_runtime = require_jsx_runtime();
function Cases({ standalone = false } = {}) {
	const Heading = standalone ? "h1" : "h2";
	const featuredCase = casesData[0];
	const otherCases = casesData.slice(1);
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cases",
		"aria-labelledby": "cases-heading",
		className: "relative border-t border-black/[0.08] bg-surface/20 py-24 sm:py-32 dark:border-white/[0.08]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-[11px] font-mono tracking-wider text-primary uppercase dark:border-white/[0.08] dark:bg-white/[0.03]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.cases.eyebrow })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
							id: "cases-heading",
							className: "mt-4 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-5xl",
							children: t.cases.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base text-muted-foreground sm:text-lg",
							children: t.cases.description
						})
					]
				}),
				featuredCase && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 overflow-hidden rounded-2xl border border-black/[0.08] bg-card p-6 sm:p-10 lg:p-12 shadow-[var(--shadow-card)] dark:border-white/[0.08] dark:bg-white/[0.02]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-10 lg:grid-cols-12 lg:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-6 flex flex-col justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono font-medium text-primary",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🇵🇹" }), " Portugal · Estética & Saúde"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-black/[0.08] bg-black/[0.03] px-2.5 py-1 text-[11px] font-mono text-muted-foreground dark:border-white/[0.08] dark:bg-white/[0.03]",
										children: t.cases.featuredBadge || "Estudo de Caso de Engenharia"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-2xl font-medium tracking-tight sm:text-3xl text-foreground",
									children: featuredCase.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: featuredCase.text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 space-y-4 border-y border-black/[0.08] py-5 dark:border-white/[0.08]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-xs font-mono uppercase tracking-wider text-foreground",
												children: t.cases.challengeTitle || "O Desafio"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed pl-3.5 border-l border-black/[0.08] dark:border-white/[0.06]",
											children: featuredCase.challenge || "Redesenho e otimização para o mercado de estética de alto padrão na Europa."
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-cyan-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-xs font-mono uppercase tracking-wider text-foreground",
												children: t.cases.solutionTitle || "A Solução de Engenharia"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed pl-3.5 border-l border-black/[0.08] dark:border-white/[0.06]",
											children: featuredCase.solution || "Stack moderna com tempo de resposta de 80ms no continente europeu e fluxo de agendamento ágil."
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "text-xs font-mono uppercase tracking-wider text-foreground",
												children: "Resultado Obtido"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed pl-3.5 border-l border-black/[0.08] dark:border-white/[0.06]",
											children: "Elevação instantânea de autoridade da marca e aumento de 40% em captação orgânica de clientes qualificados."
										})] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 grid grid-cols-3 gap-3",
									children: featuredCase.stats.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-black/[0.06] bg-black/[0.02] p-3 text-center sm:text-left dark:border-white/[0.06] dark:bg-white/[0.02]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xl sm:text-2xl font-medium tracking-tight text-foreground",
											children: [st.value, st.suffix]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 text-[10px] font-mono text-muted-foreground uppercase tracking-wider",
											children: st.label
										})]
									}, st.label))
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap items-center gap-4",
								children: [featuredCase.liveUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: featuredCase.liveUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition hover:opacity-90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [t.cases.viewLive, " (hidrolinfadetox.com)"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										className: "h-3.5 w-3.5",
										"aria-hidden": "true"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/cases/$slug",
									params: { slug: featuredCase.slug },
									className: "inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.cases.readFullCase }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": "true",
										children: "→"
									})]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-6 flex items-center justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-full overflow-hidden rounded-2xl border border-black/[0.1] bg-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:border-white/[0.12] dark:bg-[#0A0C10] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between border-b border-black/[0.08] bg-zinc-200/60 px-4 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.03]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-rose-500/80" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-amber-500/80" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-emerald-500/80" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 rounded-md border border-black/[0.08] bg-white px-3 py-1 text-[11px] font-mono text-muted-foreground dark:border-white/[0.08] dark:bg-black/40 dark:text-muted-foreground/80 shadow-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "hidrolinfadetox.com" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "hidden sm:flex items-center gap-1 text-[10px] font-mono text-emerald-600 dark:text-emerald-400",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "80ms TTFB" })]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative overflow-hidden bg-black/5 p-2 sm:p-3 dark:bg-black/60",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: featuredCase.img,
										alt: featuredCase.title,
										width: 1200,
										height: 900,
										loading: "lazy",
										className: "w-full h-auto object-contain rounded-lg transition-transform duration-500 hover:scale-[1.01]"
									})
								})]
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: otherCases.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/cases/$slug",
						params: { slug: c.slug },
						className: "group flex flex-col justify-between overflow-hidden rounded-2xl border border-black/[0.08] bg-card transition-all duration-300 hover:border-black/[0.16] hover:shadow-[var(--shadow-card)] dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/[0.16] dark:hover:bg-white/[0.04]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-secondary/40 p-6 border-b border-black/[0.06] dark:bg-black/40 dark:border-white/[0.06]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: c.img,
								alt: c.title,
								width: 800,
								height: 500,
								loading: "lazy",
								className: "h-full w-full object-contain filter drop-shadow-md transition-all duration-500 group-hover:scale-105"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] font-mono uppercase tracking-wider text-primary",
									children: c.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-base font-medium tracking-tight text-foreground transition-colors group-hover:text-primary",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2",
									children: c.text
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-black/[0.06] p-6 pt-4 flex items-center justify-between dark:border-white/[0.06]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1.5",
								children: c.tags.slice(0, 3).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md border border-black/[0.06] bg-black/[0.02] px-2 py-0.5 text-[10px] font-mono text-muted-foreground dark:border-white/[0.06] dark:bg-white/[0.02]",
									children: t
								}, t))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs font-mono text-primary flex items-center gap-0.5",
								children: ["Ver ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3 w-3" })]
							})]
						})]
					}, c.slug))
				}),
				!standalone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/cases",
						className: "inline-flex items-center gap-2 rounded-full border border-black/[0.12] bg-card px-7 py-3 text-xs font-medium text-foreground transition-all hover:bg-secondary hover:border-black/[0.2] dark:border-white/[0.12] dark:bg-white/[0.03] dark:hover:bg-white/[0.08] dark:hover:border-white/[0.2] shadow-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.cases.viewAllCasesCta }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "h-3.5 w-3.5 text-primary",
							"aria-hidden": "true"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 rounded-2xl border border-black/[0.08] bg-card p-6 backdrop-blur-xs shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-9 w-9 items-center justify-center rounded-xl border border-black/[0.08] bg-black/[0.03] text-primary shrink-0 dark:border-white/[0.08] dark:bg-white/[0.04]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Earth, { className: "h-4.5 w-4.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-mono uppercase tracking-wider text-muted-foreground",
								children: t.cases.transcontinentalTitle
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs sm:text-sm font-medium text-foreground",
								children: t.cases.transcontinentalDesc
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2.5 text-xs font-mono text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 dark:border-white/[0.08] dark:bg-white/[0.03]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🇵🇹" }),
										" ",
										t.footer.countryPT
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 dark:border-white/[0.08] dark:bg-white/[0.03]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🇬🇧" }),
										" ",
										t.footer.countryUK
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 dark:border-white/[0.08] dark:bg-white/[0.03]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🇧🇷" }),
										" ",
										t.footer.countryBR
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 dark:border-white/[0.08] dark:bg-white/[0.03]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🇳🇿" }),
										" ",
										t.footer.countryNZ
									]
								})
							]
						})]
					})
				})
			]
		})
	});
}
//#endregion
export { Cases as t };
