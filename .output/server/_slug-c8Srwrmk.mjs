import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { h as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { A as ChevronRight, L as ArrowLeft, k as CircleCheck } from "./_libs/lucide-react.mjs";
import { n as Navbar, t as Footer } from "./_ssr/Footer-BXwmlAwJ.mjs";
import { t as Route } from "./_slug-tT_Ew9Lw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-c8Srwrmk.js
var import_jsx_runtime = require_jsx_runtime();
function ServicePage() {
	const { service } = Route.useLoaderData();
	if (!service) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col items-center justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 flex flex-col items-center justify-center text-center px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-6xl font-bold mb-4",
						children: "404"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl text-muted-foreground mb-8",
						children: "Serviço não encontrado."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services",
						className: "rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors",
						children: "Voltar para Serviços"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
	const Icon = service.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 mx-auto max-w-5xl px-6 py-32 sm:py-40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services",
					className: "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Todos os Serviços"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-20 grid md:grid-cols-2 gap-12 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-blue text-primary-foreground shadow-[var(--shadow-glow)] mb-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-8 w-8",
									strokeWidth: 1.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-4xl sm:text-6xl font-bold tracking-tight mb-6",
								children: service.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xl text-muted-foreground leading-relaxed",
								children: service.description
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-surface border border-border rounded-4xl p-8 sm:p-10 shadow-[var(--shadow-soft)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "text-xl font-bold mb-6 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-primary" }), "Principais Entregáveis"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-4",
								children: service.features.map((feature, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-3 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: feature
									})]
								}, idx))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-border mb-20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold mb-10 text-center",
							children: "Por que escolher a Evolves?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid sm:grid-cols-3 gap-6",
							children: service.whyChooseUs.map((reason, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-card border border-border rounded-3xl p-8 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-5xl font-black text-primary/10 mb-4",
									children: ["0", idx + 1]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground font-medium",
									children: reason
								})]
							}, idx))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-32",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold mb-12 text-center",
							children: "Nosso Processo"
						}), service.phases ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative border-l-2 border-primary/20 ml-4 sm:ml-6 space-y-14 pb-4",
							children: service.phases.map((phase, pIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative pl-8 sm:pl-12",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute -left-[11px] top-1.5 bg-background p-1.5 rounded-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-3 h-3 bg-primary rounded-full shadow-[0_0_12px_rgba(var(--primary),0.8)]" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl font-bold text-foreground mb-6",
										children: phase.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: phase.steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-surface rounded-2xl p-6 border border-border hover:border-primary/50 transition-colors shadow-[var(--shadow-soft)]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3 mb-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0",
													children: step.id
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-bold text-lg leading-tight",
													children: step.title
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted-foreground",
												children: step.detail
											})]
										}, step.id))
									})
								]
							}, pIdx))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-6",
							children: service.process.map((step, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 bg-surface rounded-3xl p-6 sm:p-8 border border-border hover:border-primary/50 transition-colors shadow-[var(--shadow-soft)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary font-bold shrink-0",
										children: idx + 1
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-xl font-bold mb-1",
											children: step.step
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground",
											children: step.detail
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-6 w-6 text-muted-foreground hidden sm:block opacity-30" })
								]
							}, idx))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-4xl bg-primary p-10 sm:p-16 text-center text-primary-foreground relative overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/10 blur-3xl rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-3xl sm:text-4xl font-bold mb-6",
									children: "Pronto para dar o próximo passo?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto",
									children: "Inicie uma conversa sem compromisso. Avaliaremos seu projeto e indicaremos o caminho mais rápido para o ROI."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "inline-flex h-14 items-center justify-center rounded-full bg-background px-8 text-sm font-semibold text-foreground shadow-lg transition-transform hover:scale-105",
									children: "Solicitar Proposta"
								})
							]
						})]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ServicePage as component };
