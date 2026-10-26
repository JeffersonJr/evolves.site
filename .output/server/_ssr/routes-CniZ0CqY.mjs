import { n as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_react, i as Root2, n as Header, r as Item, s as require_jsx_runtime, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as useRegion, r as useI18n } from "./I18nContext-DgVvWRMD.mjs";
import { E as Cpu, I as ArrowUpRight, L as ArrowRight, M as Check, _ as MessageSquare, c as Shield, h as Palette, j as ChevronDown, l as ShieldCheck, t as Zap, u as Server, w as Globe } from "../_libs/lucide-react.mjs";
import { n as Footer, r as Navbar, t as CurrencyToggle } from "./Footer-BLyOiqG_.mjs";
import { t as Cases } from "./Cases-KpW3nej0.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Contact } from "./Contact-BdLX5aRg.mjs";
import { t as Services } from "./Services-CkY8-TjJ.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CniZ0CqY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		"aria-labelledby": "home-heading",
		className: "relative overflow-hidden bg-background px-6 pb-20 pt-28 sm:pb-28 sm:pt-36 lg:pt-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,oklch(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.02] px-3.5 py-1 text-xs font-mono text-muted-foreground backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.03]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex h-2 w-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-500" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.hero.badge })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					id: "home-heading",
					className: "mx-auto mt-7 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl leading-[1.05]",
					children: [t.hero.headlinePart1, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-muted-foreground font-normal",
						children: t.hero.headlinePart2
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: t.hero.subheadline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20um%20engenheiro%20sobre%20um%20novo%20projeto%20com%20a%20Evolves.",
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:opacity-90 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.hero.ctaPrimary }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#cases",
						className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary/80 backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.hero.ctaSecondary }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							className: "h-4 w-4 text-muted-foreground",
							"aria-hidden": "true"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs font-mono text-muted-foreground/80",
					children: t.hero.microCopy
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/80 bg-surface/50 p-4 sm:p-5 backdrop-blur-xs transition-colors hover:border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-mono uppercase tracking-wider text-muted-foreground",
										children: t.hero.metric1Label
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-2xl font-semibold tracking-tight sm:text-3xl",
									children: t.hero.metric1Value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground leading-snug",
									children: t.hero.metric1Desc
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/80 bg-surface/50 p-4 sm:p-5 backdrop-blur-xs transition-colors hover:border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-emerald-500",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-mono uppercase tracking-wider text-muted-foreground",
										children: t.hero.metric2Label
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-2xl font-semibold tracking-tight sm:text-3xl",
									children: t.hero.metric2Value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground leading-snug",
									children: t.hero.metric2Desc
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/80 bg-surface/50 p-4 sm:p-5 backdrop-blur-xs transition-colors hover:border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-mono uppercase tracking-wider text-muted-foreground",
										children: t.hero.metric3Label
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-2xl font-semibold tracking-tight sm:text-3xl",
									children: t.hero.metric3Value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground leading-snug",
									children: t.hero.metric3Desc
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/80 bg-surface/50 p-4 sm:p-5 backdrop-blur-xs transition-colors hover:border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
										className: "h-4 w-4",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-mono uppercase tracking-wider text-muted-foreground",
										children: t.hero.metric4Label
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-2xl font-semibold tracking-tight sm:text-3xl",
									children: t.hero.metric4Value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground leading-snug",
									children: t.hero.metric4Desc
								})
							]
						})
					]
				})
			]
		})]
	});
}
function Infrastructure() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "infrastructure",
		"aria-labelledby": "infrastructure-heading",
		className: "border-t border-border/60 bg-background py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-mono uppercase tracking-widest text-primary",
							children: t.infrastructure.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "infrastructure-heading",
							className: "mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl",
							children: [t.infrastructure.titlePart1, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-muted-foreground font-normal",
								children: t.infrastructure.titlePart2
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base text-muted-foreground sm:text-lg",
							children: t.infrastructure.description
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-8 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-border hover:shadow-[var(--shadow-soft)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
										className: "h-6 w-6",
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-xl font-semibold tracking-tight text-foreground",
									children: t.infrastructure.p1Title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: t.infrastructure.p1Desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-6 space-y-2.5 text-xs text-muted-foreground font-mono",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.infrastructure.p1Item1 })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.infrastructure.p1Item2 })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.infrastructure.p1Item3 })]
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 border-t border-border/60 pt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-mono text-muted-foreground",
									children: t.infrastructure.p1Metric
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-border hover:shadow-[var(--shadow-soft)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, {
										className: "h-6 w-6",
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-xl font-semibold tracking-tight text-foreground",
									children: t.infrastructure.p2Title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: t.infrastructure.p2Desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-6 space-y-2.5 text-xs text-muted-foreground font-mono",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.infrastructure.p2Item1 })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.infrastructure.p2Item2 })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.infrastructure.p2Item3 })]
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 border-t border-border/60 pt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-mono text-muted-foreground",
									children: t.infrastructure.p2Metric
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-border hover:shadow-[var(--shadow-soft)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
										className: "h-6 w-6",
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-xl font-semibold tracking-tight text-foreground",
									children: t.infrastructure.p3Title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: t.infrastructure.p3Desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-6 space-y-2.5 text-xs text-muted-foreground font-mono",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.infrastructure.p3Item1 })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.infrastructure.p3Item2 })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-emerald-500 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.infrastructure.p3Item3 })]
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 border-t border-border/60 pt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-mono text-muted-foreground",
									children: t.infrastructure.p3Metric
								})
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 flex flex-wrap items-center justify-center gap-6 border-t border-border/60 pt-10 text-xs font-mono text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.infrastructure.specsCloud })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline text-border",
							children: "•"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.infrastructure.specsCache })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline text-border",
							children: "•"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.infrastructure.specsSecurity })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline text-border",
							children: "•"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.infrastructure.specsBackups }) })
					]
				})
			]
		})
	});
}
function Process() {
	const { t } = useI18n();
	const steps = [
		{
			step: "01",
			title: t.process.s1Title,
			description: t.process.s1Desc,
			tag: t.process.s1Tag
		},
		{
			step: "02",
			title: t.process.s2Title,
			description: t.process.s2Desc,
			tag: t.process.s2Tag
		},
		{
			step: "03",
			title: t.process.s3Title,
			description: t.process.s3Desc,
			tag: t.process.s3Tag
		},
		{
			step: "04",
			title: t.process.s4Title,
			description: t.process.s4Desc,
			tag: t.process.s4Tag
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		"aria-labelledby": "process-heading",
		className: "border-t border-border/60 bg-background py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-mono uppercase tracking-widest text-primary",
						children: t.process.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "process-heading",
						className: "mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl",
						children: t.process.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base text-muted-foreground sm:text-lg",
						children: t.process.description
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: steps.map((s, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col justify-between rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-3xl font-bold tracking-tighter text-foreground/25 dark:text-foreground/20",
								children: s.step
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground",
								children: s.tag
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-lg font-semibold tracking-tight text-foreground",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground",
							children: s.description
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 border-t border-border/60 pt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] font-mono text-muted-foreground/80",
							children: [
								t.process.stepPrefix,
								" ",
								index + 1,
								" / 4"
							]
						})
					})]
				}, s.step))
			})]
		})
	});
}
function Pricing() {
	const { region, isEurope } = useRegion();
	const { t, language } = useI18n();
	const getLocalizedPlans = () => {
		if (isEurope) {
			if (language === "en") return [
				{
					name: "Start Plan",
					target: "Consultants, local clinics, and independent professionals.",
					price: "€350 – €500",
					priceSub: "one-time engineering investment",
					maintenance: "€20",
					maintenancePeriod: "mo",
					highlight: false,
					features: [
						"High-converting landing page (custom editorial design)",
						"Extreme mobile optimization (< 1s load time)",
						"Direct WhatsApp & corporate email integration",
						"Secure form with native anti-spam validation",
						"Technical on-page SEO for top Google indexation",
						"Rapid delivery: 5 to 10 business days"
					],
					paymentNotes: "SEPA bank transfer, MB WAY, corporate card, or Wise.",
					ctaText: "Select Start Plan (€)",
					ctaHref: "https://wa.me/5513981326869?text=Hello%2C%20I%20am%20interested%20in%20the%20Start%20Plan%20(EUR)%20from%20Evolves."
				},
				{
					name: "Pro Plan",
					target: "Established companies demanding corporate authority and SEO.",
					price: "€750 – €1,200",
					priceSub: "one-time engineering investment",
					maintenance: "€35",
					maintenancePeriod: "mo",
					highlight: true,
					badge: t.pricing.recommended,
					features: [
						"Multi-page corporate website (Home, About, Services, etc.)",
						"SEO-optimized Blog or knowledge hub for organic reach",
						"Pre-configured multilingual architecture (PT / EN / ES)",
						"GA4, Google Tag Manager & Meta Pixel telemetry",
						"CRM or online booking integration",
						"Intuitive CMS with zero technical complexity",
						"Delivery turnaround: 10 to 20 business days"
					],
					paymentNotes: "European B2B invoice in EUR. Installment plans available.",
					ctaText: "Choose Pro Plan (€)",
					ctaHref: "https://wa.me/5513981326869?text=Hello%2C%20I%20would%20like%20to%20start%20the%20Pro%20Plan%20(EUR)%20with%20Evolves."
				},
				{
					name: "Max Plan",
					target: "E-commerce, automated bookings, and custom digital platforms.",
					price: "From €1,500",
					priceSub: "tailored software development",
					maintenance: "€50",
					maintenancePeriod: "mo",
					highlight: false,
					features: [
						"Full e-commerce platform (Stripe, MB WAY, Multibanco, PayPal)",
						"Automated calendar booking synchronization",
						"Members area or dynamic product/service catalogue",
						"API integration with European ERP or invoicing systems",
						"Dedicated cloud infrastructure for high concurrent traffic",
						"Dedicated software architecture consultation"
					],
					paymentNotes: "Custom milestone-based contract with defined deliverables.",
					ctaText: "Request Custom Proposal (€)",
					ctaHref: "https://wa.me/5513981326869?text=Hello%2C%20I%20need%20a%20custom%20proposal%20for%20the%20Max%20Plan%20(EUR)."
				}
			];
			if (language === "es") return [
				{
					name: "Plan Start",
					target: "Profesionales independientes, consultores y servicios locales.",
					price: "€350 a €500",
					priceSub: "inversión única de desarrollo",
					maintenance: "€20",
					maintenancePeriod: "mes",
					highlight: false,
					features: [
						"Landing page de alta conversión (diseño editorial a medida)",
						"Optimización extrema para dispositivos móviles",
						"Integración con WhatsApp comercial y correo profesional",
						"Formulario seguro con protección anti-spam nativa",
						"SEO técnico on-page para indexación en Google",
						"Plazo de entrega: 5 a 10 días hábiles"
					],
					paymentNotes: "Transferencia SEPA, MB WAY o Wise.",
					ctaText: "Seleccionar Plan Start (€)",
					ctaHref: "https://wa.me/5513981326869?text=Hola%2C%20me%20interesa%20el%20Plan%20Start%20(EUR)%20de%20Evolves."
				},
				{
					name: "Plan Pro",
					target: "Empresas consolidadas que requieren presencia corporativa y SEO.",
					price: "€750 a €1.200",
					priceSub: "inversión única de desarrollo",
					maintenance: "€35",
					maintenancePeriod: "mes",
					highlight: true,
					badge: t.pricing.recommended,
					features: [
						"Sitio web corporativo multipágina (Inicio, Empresa, Servicios, etc.)",
						"Estructura de Blog para posicionamiento orgánico",
						"Arquitectura multilingüe preparada (ES / EN / PT)",
						"Integración Google Analytics 4, Tag Manager y Meta Pixel",
						"Integración con CRM de ventas o reservas online",
						"Panel de edición intuitivo sin complejidad técnica",
						"Plazo de entrega: 10 a 20 días hábiles"
					],
					paymentNotes: "Facturación europea en EUR. Con factura oficial.",
					ctaText: "Contratar Plan Pro (€)",
					ctaHref: "https://wa.me/5513981326869?text=Hola%2C%20quiero%20iniciar%20el%20Plan%20Pro%20(EUR)%20con%20Evolves."
				},
				{
					name: "Plan Max",
					target: "E-commerce, reservas avanzadas y plataformas a medida.",
					price: "A partir de €1.500",
					priceSub: "desarrollo de software personalizado",
					maintenance: "€50",
					maintenancePeriod: "mes",
					highlight: false,
					features: [
						"Tienda online completa (checkout Stripe, MB WAY, PayPal)",
						"Sistema de reservas automáticas con sincronización de calendario",
						"Área de miembros o catálogo dinámico",
						"Integración API con sistemas ERP o de facturación",
						"Infraestructura dedicada para altos picos de tráfico",
						"Consultoría técnica de arquitectura de software"
					],
					paymentNotes: "Contrato personalizado con hitos de entrega garantizados.",
					ctaText: "Solicitar Propuesta Max (€)",
					ctaHref: "https://wa.me/5513981326869?text=Hola%2C%20necesito%20una%20propuesta%20del%20Plan%20Max%20(EUR)."
				}
			];
			return [
				{
					name: "Plano Start",
					target: "Profissionais liberais, consultores e serviços locais.",
					price: "€350 a €500",
					priceSub: "investimento único de desenvolvimento",
					maintenance: "€20",
					maintenancePeriod: "mês",
					highlight: false,
					features: [
						"Landing page de alta conversão (design editorial à medida)",
						"Otimização extrema para dispositivos móveis (< 1s)",
						"Integração com WhatsApp comercial e e-mail profissional",
						"Formulário seguro com proteção anti-spam nativa",
						"SEO técnico on-page para indexação prioritária",
						"Prazo de entrega ágil: 5 a 10 dias úteis"
					],
					paymentNotes: "Pagamento via SEPA, MB WAY, Transferência Bancária ou Wise.",
					ctaText: "Selecionar Plano Start (€)",
					ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Plano%20Start%20(EUR)%20da%20Evolves."
				},
				{
					name: "Plano Pro",
					target: "Empresas consolidadas que exigem autoridade e SEO.",
					price: "€750 a €1.200",
					priceSub: "investimento único de desenvolvimento",
					maintenance: "€35",
					maintenancePeriod: "mês",
					highlight: true,
					badge: t.pricing.recommended,
					features: [
						"Website institucional multipáginas completo",
						"Estrutura de Blog ou Artigos otimizada para SEO",
						"Arquitetura multilíngue preparada (PT / EN / ES / FR)",
						"Integração Google Analytics 4, Tag Manager e Meta Pixel",
						"Integração com CRM de vendas ou agendamento online",
						"Painel de edição intuitivo sem complexidade técnica",
						"Prazo de entrega: 10 a 20 dias úteis"
					],
					paymentNotes: "Faturação europeia em EUR. Parcelamento disponível sob consulta.",
					ctaText: "Contratar Plano Pro (€)",
					ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20gostaria%20de%20iniciar%20o%20Plano%20Pro%20(EUR)%20com%20a%20Evolves."
				},
				{
					name: "Plano Max",
					target: "E-commerce, agendamentos complexos e plataformas customizadas.",
					price: "A partir de €1.500",
					priceSub: "desenvolvimento sob medida",
					maintenance: "€50",
					maintenancePeriod: "mês",
					highlight: false,
					features: [
						"Loja online completa (checkout Stripe, MB WAY, Multibanco e PayPal)",
						"Sistema de agendamento automatizado com calendário",
						"Área de membros restrita ou catálogo dinâmico de produtos",
						"Integração por API com sistemas de faturação europeus",
						"Infraestrutura dedicada com suporte para alto volume de acessos",
						"Consultoria técnica de arquitetura de software inclusa"
					],
					paymentNotes: "Contrato personalizado com etapas de entrega e marcos de validação.",
					ctaText: "Solicitar Proposta Max (€)",
					ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20preciso%20de%20uma%20proposta%20personalizada%20no%20Plano%20Max%20(EUR)."
				}
			];
		} else return [
			{
				name: "Plano Start",
				target: "Empresas e profissionais que buscam presença digital rápida e moderna.",
				price: "R$ 1.500 a R$ 2.000",
				priceSub: "taxa única de criação e implementação",
				maintenance: "R$ 100",
				maintenancePeriod: "mês",
				highlight: false,
				features: [
					"Landing page estratégica focada em captação de leads e vendas",
					"Design exclusivo alinhado à sua marca (sem temas genéricos)",
					"Integração direta com WhatsApp comercial e formulário seguro",
					"Velocidade de carregamento otimizada para conexões móveis 4G/5G",
					"Configuração inicial de tags de conversão (Google e Meta Ads)",
					"Prazo de entrega ágil: 5 a 10 dias úteis"
				],
				paymentNotes: "Pagamento via PIX com desconto ou Cartão de Crédito corporativo.",
				ctaText: "Selecionar Plano Start (R$)",
				ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Plano%20Start%20(em%20Reais)%20da%20Evolves."
			},
			{
				name: "Plano Pro",
				target: "Empresas que precisam de autoridade de mercado e múltiplos serviços.",
				price: "R$ 2.800 a R$ 4.500",
				priceSub: "taxa única de criação e implementação",
				maintenance: "R$ 180",
				maintenancePeriod: "mês",
				highlight: true,
				badge: t.pricing.mostChosen,
				features: [
					"Site institucional multipáginas completo com páginas dedicadas",
					"Otimização para os primeiros lugares nas buscas do Google (SEO On-Page)",
					"Integração com seu CRM de vendas (RD Station, HubSpot, Pipedrive)",
					"Blog corporativo para construção de autoridade e conteúdos",
					"Design editorial responsivo com micro-animações refinadas",
					"Painel simples para atualização de textos e imagens",
					"Prazo de entrega: 12 a 20 dias úteis"
				],
				paymentNotes: "Entrada + saldo na entrega ou parcelamento em até 12x no cartão. Com Nota Fiscal.",
				ctaText: "Escolher Plano Pro (R$)",
				ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20gostaria%20de%20fechar%20o%20Plano%20Pro%20(em%20Reais)%20com%20a%20Evolves."
			},
			{
				name: "Plano Max",
				target: "Lojas virtuais, portais de clientes e plataformas sob medida.",
				price: "A partir de R$ 5.500",
				priceSub: "projeto personalizado sob escopo técnico",
				maintenance: "R$ 300",
				maintenancePeriod: "mês",
				highlight: false,
				features: [
					"E-commerce robusto com checkout transparente (PIX instantâneo e Cartão)",
					"Sistemas de agendamento, portais de clientes ou cálculo dinâmico de frete",
					"Integração com sistemas ERP, emissão de NFe e gateways de pagamento",
					"Servidor Cloud dedicado com alta capacidade de requisições simultâneas",
					"Engenharia escalável pronta para o crescimento da sua operação",
					"Acompanhamento direto com líder de engenharia de software"
				],
				paymentNotes: "Cronograma de pagamento atrelado a marcos de entrega (milestones).",
				ctaText: "Falar com Engenheiro (R$)",
				ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20preciso%20de%20um%20projeto%20personalizado%20no%20Plano%20Max%20(em%20Reais)."
			}
		];
	};
	const plans = getLocalizedPlans();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		"aria-labelledby": "pricing-heading",
		className: "border-t border-border/60 bg-surface/30 py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-mono uppercase tracking-widest text-primary",
							children: t.pricing.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "pricing-heading",
							className: "mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl",
							children: t.pricing.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base text-muted-foreground sm:text-lg",
							children: t.pricing.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground font-mono",
								children: t.pricing.regionProposal
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrencyToggle, {})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-8 lg:grid-cols-3 lg:items-stretch",
					children: plans.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative flex flex-col justify-between rounded-3xl border bg-card p-8 sm:p-9 transition-all duration-300 ${p.highlight ? "border-primary ring-1 ring-primary/20 shadow-[var(--shadow-card)] lg:-translate-y-2" : "border-border hover:border-border/80 shadow-xs"}`,
						children: [
							p.highlight && p.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-3.5 left-1/2 -translate-x-1/2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary px-3.5 py-1 text-[11px] font-mono font-medium uppercase tracking-wider text-primary-foreground shadow-xs",
									children: p.badge
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-semibold tracking-tight text-foreground",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-md bg-secondary px-2.5 py-1 text-[11px] font-mono text-muted-foreground",
										children: region
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs leading-relaxed text-muted-foreground min-h-[34px]",
									children: p.target
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 border-y border-border/60 py-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-2xl sm:text-3xl font-bold tracking-tight text-foreground",
											children: p.price
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 text-[11px] font-mono text-muted-foreground",
											children: p.priceSub
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex items-baseline gap-1 text-sm font-medium text-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs text-muted-foreground",
													children: "+"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-primary",
													children: p.maintenance
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs text-muted-foreground",
													children: [
														"/",
														p.maintenancePeriod,
														" ",
														t.pricing.monthlyMaintenance
													]
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 space-y-3",
									children: p.features.map((feat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "h-4 w-4 text-emerald-500 shrink-0 mt-0.5",
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "leading-snug",
											children: feat
										})]
									}, feat))
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 pt-4 border-t border-border/60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: p.ctaHref,
									target: "_blank",
									rel: "noreferrer",
									className: `flex w-full items-center justify-center gap-2 rounded-full py-3 text-xs sm:text-sm font-medium transition-all ${p.highlight ? "bg-primary text-primary-foreground hover:brightness-105 shadow-sm" : "bg-foreground text-background hover:opacity-90"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.ctaText }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
										className: "h-3.5 w-3.5",
										"aria-hidden": "true"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-center text-[10px] font-mono text-muted-foreground",
									children: p.paymentNotes
								})]
							})
						]
					}, p.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-[var(--shadow-soft)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row md:items-start md:justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-emerald-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-base font-semibold tracking-tight text-foreground",
								children: t.pricing.maintenanceBoxTitle
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs sm:text-sm text-muted-foreground",
							children: t.pricing.maintenanceBoxSubtitle
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-muted-foreground",
							children: t.pricing.maintenanceSla
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-xs sm:text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border/60 bg-surface/50 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-foreground",
									children: t.pricing.m1Title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground leading-relaxed",
									children: t.pricing.m1Desc
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border/60 bg-surface/50 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-foreground",
									children: t.pricing.m2Title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground leading-relaxed",
									children: t.pricing.m2Desc
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border/60 bg-surface/50 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-foreground",
									children: t.pricing.m3Title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground leading-relaxed",
									children: t.pricing.m3Desc
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border/60 bg-surface/50 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-foreground",
									children: t.pricing.m4Title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground leading-relaxed",
									children: t.pricing.m4Desc
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border/60 bg-surface/50 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-foreground",
									children: t.pricing.m5Title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground leading-relaxed",
									children: t.pricing.m5Desc
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border/60 bg-surface/50 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-foreground",
									children: t.pricing.m6Title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground leading-relaxed",
									children: t.pricing.m6Desc
								})]
							})
						]
					})]
				})
			]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function Faq() {
	const { t, language } = useI18n();
	const getFaqs = () => {
		if (language === "en") return [
			{
				id: "item-1",
				question: "How does project management and collaboration work for international clients?",
				answer: "We collaborate routinely with partners across multiple time zones (UK, Europe, New Zealand, and the Americas). We work via an asynchronous client dashboard, direct Slack/WhatsApp priority channels, and targeted Google Meet sessions. We strictly honor commercial hours and agreed milestone timelines."
			},
			{
				id: "item-2",
				question: "What international invoicing and payment methods are supported?",
				answer: "We adapt to your business jurisdiction:\n• European & Global Clients: SEPA bank transfer, MB WAY, Wise, or corporate credit cards billed in Euros (€) or USD ($).\n• Brazilian Clients: PIX, Boleto, or corporate card installments up to 12x with electronic invoice (NFS-e)."
			},
			{
				id: "item-3",
				question: "What is the typical delivery timeframe for a production website?",
				answer: "Landing pages (Start Plan) launch within 5 to 10 business days. Multi-page corporate platforms (Pro Plan) typically deploy within 10 to 20 business days. For urgent launch dates, an expedited roadmap can be defined during the initial briefing."
			},
			{
				id: "item-4",
				question: "Does my company 100% own the source code and domain?",
				answer: "Yes, without exception. Your company retains full legal and technical ownership of your domain, custom UI designs, and all application source code. We never practice vendor lock-in."
			},
			{
				id: "item-5",
				question: "Is the monthly cloud maintenance plan mandatory?",
				answer: "The managed plan provides high-speed isolated cloud infrastructure, daily automated backups, active SSL certificates, and monthly content updates. If your company prefers hosting on its own internal cloud (AWS, GCP, or Hetzner), we conduct the deployment and hand over full access with no recurring retainers."
			},
			{
				id: "item-6",
				question: "How do you guarantee strict GDPR and LGPD compliance?",
				answer: "We implement granular cookie consent managers, transparent privacy policies, end-to-end encrypted contact forms, and data retention standards to protect your corporate reputation."
			}
		];
		if (language === "es") return [
			{
				id: "item-1",
				question: "¿Cómo funciona la gestión y colaboración para clientes internacionales?",
				answer: "Trabajamos habitualmente con clientes en múltiples husos horarios (Europa, Reino Unido, Nueva Zelanda y América Latina). El seguimiento es asíncrono y transparente mediante portal de estado, canales directos de WhatsApp/Slack y reuniones puntuales por Google Meet."
			},
			{
				id: "item-2",
				question: "¿Cuáles son las opciones de facturación y métodos de pago aceptados?",
				answer: "Adaptamos el pago a la jurisdicción de su empresa:\n• Europa e Internacional: Transferencia bancaria SEPA, MB WAY, Wise o tarjeta en Euros (€).\n• Brasil: PIX, transferencia o tarjeta corporativa en hasta 12 cuotas con Factura Electrónica (NFS-e)."
			},
			{
				id: "item-3",
				question: "¿Cuál es el plazo medio para publicar mi sitio web?",
				answer: "Proyectos del Plan Start (Landing Pages) se entregan en 5 a 10 días hábiles. Sitios corporativos multipágina (Plan Pro) requieren entre 10 y 20 días hábiles."
			},
			{
				id: "item-4",
				question: "¿El código fuente y el dominio pertenecen 100% a mi empresa?",
				answer: "Sí, totalmente. Su empresa es la única propietaria del dominio, diseño y todo el código desarrollado. Cero bloqueo de proveedor (vendor lock-in)."
			},
			{
				id: "item-5",
				question: "¿El mantenimiento y hosting mensual es obligatorio?",
				answer: "Incluye infraestructura Cloud dedicada, copias de seguridad diarias, certificados SSL y pequeños cambios de contenido. Si dispone de servidores propios (AWS, Hetzner), realizamos el despliegue inicial sin cuotas recurrentes."
			},
			{
				id: "item-6",
				question: "¿Cómo se garantiza el cumplimiento del RGPD europeo y la LGPD?",
				answer: "Instalamos gestores de cookies certificados, políticas de privacidad transparentes y formularios cifrados de extremo a extremo."
			}
		];
		return [
			{
				id: "item-1",
				question: "Como funciona o atendimento e a gestão de projetos para clientes internacionais?",
				answer: "Trabalhamos rotineiramente com clientes e equipas em múltiplos fusos horários (Portugal, Reino Unido, Nova Zelândia e Brasil). O acompanhamento é feito de forma assíncrona e transparente por portal de status, canais diretos de WhatsApp / Slack e reuniões pontuais por Google Meet. Respeitamos rigorosamente os horários comerciais e os cronogramas estabelecidos contratualmente."
			},
			{
				id: "item-2",
				question: "Quais são as opções de faturação e métodos de pagamento aceites?",
				answer: "Adaptamos a faturação e o meio de pagamento à jurisdição da sua empresa:\n• Clientes na Europa: Transferência bancária SEPA, pagamentos via MB WAY, Wise ou faturação eletrónica emitida em Euros (€).\n• Clientes no Brasil: PIX, Boleto bancário ou Cartão de Crédito corporativo em até 12x, com emissão de Nota Fiscal de Serviços eletrónica (NFS-e)."
			},
			{
				id: "item-3",
				question: "Qual é o prazo médio para o meu site estar no ar?",
				answer: "Projetos do Plano Start (Landing Pages) são concluídos e colocados no ar entre 5 a 10 dias úteis. Projetos corporativos multipáginas (Plano Pro) levam entre 10 a 20 dias úteis. Caso a sua empresa possua uma data crítica de lançamento, definimos um cronograma de aceleração dedicado logo no briefing inicial."
			},
			{
				id: "item-4",
				question: "O código-fonte e o domínio pertencem 100% à minha empresa?",
				answer: "Sim, sem exceções. A sua empresa é a proprietária exclusiva do domínio, da identidade visual e de todo o código-fonte desenvolvido. Não praticamos qualquer forma de retenção técnica ('vendor lock-in'). Se no futuro preferir internalizar ou migrar para outra infraestrutura, todos os acessos e arquivos são fornecidos imediatamente."
			},
			{
				id: "item-5",
				question: "A manutenção e hospedagem mensal é obrigatória?",
				answer: "A mensalidade inclui a nossa infraestrutura Cloud dedicada (Hostinger Cloud / LiteSpeed / Redis Cache), backups automáticos diários, certificados SSL sempre válidos, proteção contra ataques e um pacote de horas para pequenas alterações de conteúdo. Caso a sua empresa possua equipa interna de TI e prefira hospedar nos seus próprios servidores (AWS, Google Cloud ou Hetzner), realizamos o deploy inicial e encerramos a entrega sem mensalidades recorrentes."
			},
			{
				id: "item-6",
				question: "Como é tratada a conformidade com o RGPD (GDPR europeu) e a LGPD brasileira?",
				answer: "Implementamos banners de consentimento de cookies granulares, políticas de privacidade claras, formulários de contacto com criptografia de ponta a ponta e respeito às diretrizes de retenção e eliminação de dados de navegação, protegendo a reputação jurídica da sua empresa."
			}
		];
	};
	const faqs = getFaqs();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		"aria-labelledby": "faq-heading",
		className: "border-t border-border/60 bg-background py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-mono uppercase tracking-widest text-primary",
							children: t.faq.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "faq-heading",
							className: "mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl text-foreground",
							children: t.faq.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-base text-muted-foreground",
							children: t.faq.description
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
						type: "single",
						collapsible: true,
						className: "w-full",
						children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
							value: f.id,
							className: "border-border/60 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
								className: "text-left font-medium text-foreground hover:no-underline hover:text-primary transition-colors text-sm sm:text-base cursor-pointer",
								children: f.question
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
								className: "text-xs sm:text-sm text-muted-foreground leading-relaxed whitespace-pre-line pt-2 pb-4",
								children: f.answer
							})]
						}, f.id))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-4 w-4 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.faq.needHelp }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20espec%C3%ADfica%20antes%20de%20iniciar%20meu%20projeto%20com%20a%20Evolves.",
							target: "_blank",
							rel: "noreferrer",
							className: "text-primary font-medium hover:underline",
							children: t.faq.chatWhatsapp
						})
					]
				})
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background selection:bg-primary/20 selection:text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cases, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Infrastructure, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
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
