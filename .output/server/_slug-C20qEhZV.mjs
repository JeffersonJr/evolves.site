import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { A as Layers, E as Lock, F as ExternalLink, H as CircleCheck, J as ArrowUpRight, N as Globe, O as Lightbulb, X as ArrowLeft, Y as ArrowRight, a as Target, s as Sparkles, t as Zap } from "./_libs/lucide-react.mjs";
import { n as Navbar, t as Footer } from "./_ssr/Footer-1tc4yHjP.mjs";
import { t as casesData } from "./_ssr/cases-DvONSuRz.mjs";
import { n as contentConnections, t as RelatedLinks } from "./_ssr/related-content-BalcZZac.mjs";
import { t as Route } from "./_slug-Blk1DeVq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-C20qEhZV.js
var import_jsx_runtime = require_jsx_runtime();
function CaseStudyPage() {
	const { project } = Route.useLoaderData();
	const currentIndex = casesData.findIndex((c) => c.slug === project.slug);
	const prevProject = casesData[(currentIndex - 1 + casesData.length) % casesData.length];
	const nextProject = casesData[(currentIndex + 1) % casesData.length];
	const cleanHostname = project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "") : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col selection:bg-primary/20 selection:text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 mx-auto w-full max-w-5xl px-6 py-28 sm:py-36",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-4 mb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/cases",
						className: "group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Todos os Casos de Estudo" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[11px] font-mono text-muted-foreground",
						children: [
							"Case ",
							currentIndex + 1,
							" de ",
							casesData.length
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-3.5 py-1 text-xs font-mono text-primary uppercase tracking-wider dark:border-white/[0.08] dark:bg-white/[0.03] mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.category })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-balance text-3xl font-medium tracking-tight sm:text-5xl lg:text-6xl text-foreground",
								children: project.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed",
								children: project.text
							}),
							project.liveUrl && cleanHostname && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex flex-wrap items-center justify-center gap-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: project.liveUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-xs font-medium text-background transition hover:opacity-90 shadow-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-3.5 w-3.5" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Acessar Projeto ao Vivo (",
											cleanHostname,
											")"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })
									]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-14 rounded-2xl border border-black/[0.08] bg-card p-4 sm:p-6 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 text-left",
							children: [
								project.client && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-mono uppercase tracking-wider text-muted-foreground",
									children: "Cliente"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs sm:text-sm font-medium text-foreground",
									children: project.client
								})] }),
								project.country && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-mono uppercase tracking-wider text-muted-foreground",
									children: "Localização"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs sm:text-sm font-medium text-foreground",
									children: project.country
								})] }),
								project.year && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-mono uppercase tracking-wider text-muted-foreground",
									children: "Período / Ano"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs sm:text-sm font-medium text-foreground font-mono",
									children: project.year
								})] }),
								project.scope && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] font-mono uppercase tracking-wider text-muted-foreground",
									children: "Escopo de Atuação"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs sm:text-sm font-medium text-foreground line-clamp-1",
									children: project.scope
								})] })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mb-16 overflow-hidden rounded-2xl border border-black/[0.1] bg-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.12)] dark:border-white/[0.12] dark:bg-[#0A0C10] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-black/[0.08] bg-zinc-200/60 px-4 py-3 dark:border-white/[0.08] dark:bg-white/[0.03]",
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
									className: "flex items-center gap-2 rounded-md border border-black/[0.08] bg-white px-4 py-1 text-[11px] font-mono text-muted-foreground dark:border-white/[0.08] dark:bg-black/50 shadow-xs max-w-sm w-full justify-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3 w-3 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate",
										children: cleanHostname || project.slug
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 shrink-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3 w-3" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hidden sm:inline",
											children: "100/100 Core Web Vitals"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sm:hidden",
											children: "100/100"
										})
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative overflow-hidden bg-black/5 p-3 sm:p-5 dark:bg-black/60",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: project.img,
								srcSet: project.imgSm ? `${project.imgSm} 640w, ${project.img} 1200w` : void 0,
								sizes: "(max-width: 768px) 100vw, 1200px",
								alt: `Mockup e interface do projeto ${project.title}`,
								width: 1200,
								height: 677,
								loading: "eager",
								decoding: "async",
								className: "w-full h-auto object-contain rounded-lg drop-shadow-md transition-transform duration-700 hover:scale-[1.01]"
							})
						})]
					}),
					project.deliverables && project.deliverables.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-14 rounded-2xl border border-black/[0.08] bg-card p-6 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Entregas de Engenharia & Design" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: project.deliverables.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5 text-xs sm:text-sm text-foreground/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, item))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-black/[0.08] bg-card p-8 sm:p-10 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-amber-500 font-mono text-xs uppercase tracking-wider mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "O Desafio de Negócio & Técnico" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl sm:text-2xl font-medium tracking-tight text-foreground mb-4",
										children: "Qual era o obstáculo a superar?"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line",
										children: project.challenge
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-black/[0.08] bg-card p-8 sm:p-10 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "A Solução Implementada" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl sm:text-2xl font-medium tracking-tight text-foreground mb-4",
										children: "Como arquitetamos a solução técnica"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line",
										children: project.solution
									})
								]
							}),
							project.features && project.features.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-black/[0.08] bg-card p-8 sm:p-10 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-cyan-500 font-mono text-xs uppercase tracking-wider mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Diferenciais Técnicos Desenvolvidos" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl sm:text-2xl font-medium tracking-tight text-foreground mb-6",
										children: "Inovações sob medida para o projeto"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-5 sm:grid-cols-2",
										children: project.features.map((feat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-xl border border-black/[0.06] bg-black/[0.02] p-5 dark:border-white/[0.06] dark:bg-white/[0.02] transition-colors hover:border-black/[0.12] dark:hover:border-white/[0.12]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-sm font-medium text-foreground tracking-tight",
												children: feat.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-xs leading-relaxed text-muted-foreground",
												children: feat.description
											})]
										}, feat.title))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-black/[0.08] bg-card p-8 sm:p-10 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-emerald-500 font-mono text-xs uppercase tracking-wider mb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Resultados & Telemetria Comprovada" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl sm:text-2xl font-medium tracking-tight text-foreground mb-6",
										children: "Impacto real e mensurável após o lançamento"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8",
										children: project.stats?.map((stat, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col items-center justify-center rounded-xl border border-black/[0.06] bg-black/[0.02] p-6 text-center dark:border-white/[0.06] dark:bg-white/[0.02]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-1 flex items-baseline",
												children: [stat.value, stat.suffix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-lg text-primary ml-1",
													children: stat.suffix
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-mono text-muted-foreground uppercase tracking-wider",
												children: stat.label
											})]
										}, idx))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-3",
										children: project.results.map((result, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-start gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
						className: "mt-14 flex flex-col items-center border-t border-black/[0.08] pt-8 dark:border-white/[0.08]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4",
							children: "Tecnologias & Arquitetura Utilizadas"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap justify-center gap-2",
							children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-xs font-mono text-muted-foreground dark:border-white/[0.08] dark:bg-white/[0.03]",
								children: tag
							}, tag))
						})]
					}),
					project.liveUrl && cleanHostname && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 rounded-2xl border border-primary/30 bg-primary/[0.03] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 dark:border-primary/40 dark:bg-primary/[0.05]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-mono text-primary uppercase tracking-wider",
								children: "Ambiente de Produção Ativo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-medium tracking-tight text-foreground mt-1",
								children: "Deseja testar a velocidade e usabilidade deste projeto?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: [
									"Acesse o domínio oficial (",
									cleanHostname,
									") e experimente a velocidade em tempo real."
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: project.liveUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-medium text-background transition hover:opacity-90 shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Acessar ", cleanHostname] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-black/[0.08] pt-8 dark:border-white/[0.08]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/cases/$slug",
							params: { slug: prevProject.slug },
							className: "group flex flex-col rounded-xl border border-black/[0.08] bg-card p-5 transition-all hover:border-black/[0.16] hover:shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/[0.16]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground mb-1 group-hover:text-primary transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3 w-3 transition-transform group-hover:-translate-x-1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Case Anterior" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-foreground tracking-tight line-clamp-1",
									children: prevProject.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground line-clamp-1 mt-0.5",
									children: prevProject.category
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/cases/$slug",
							params: { slug: nextProject.slug },
							className: "group flex flex-col items-end text-right rounded-xl border border-black/[0.08] bg-card p-5 transition-all hover:border-black/[0.16] hover:shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/[0.16]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground mb-1 group-hover:text-primary transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Próximo Case" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 transition-transform group-hover:translate-x-1" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-foreground tracking-tight line-clamp-1",
									children: nextProject.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground line-clamp-1 mt-0.5",
									children: nextProject.category
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mt-16 overflow-hidden rounded-2xl border border-black/[0.08] bg-card p-8 sm:p-12 text-center shadow-[var(--shadow-card)] dark:border-white/[0.08] dark:bg-white/[0.02]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl sm:text-3xl font-medium tracking-tight text-foreground mb-3",
								children: "Quer resultados com esse padrão de engenharia?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm max-w-lg mx-auto mb-8 leading-relaxed",
								children: "Vamos conversar sobre o seu projeto e estruturar uma proposta técnica com prazos ágeis, arquitetura moderna e preço fixo."
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
