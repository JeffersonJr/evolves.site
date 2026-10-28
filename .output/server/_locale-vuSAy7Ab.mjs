import { r as __toESM } from "./_runtime.mjs";
import { a as Trigger2, c as require_react, i as Root2, n as Header, r as Item, s as require_jsx_runtime, t as Content2 } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { y as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { p as useLocale } from "./_ssr/ssr.mjs";
import { a as useRegion, i as useI18n } from "./_ssr/I18nContext-B3mtvq4X.mjs";
import { A as Headphones, B as CircleQuestionMark, G as ArrowUpRight, H as ChevronDown, I as Cpu, K as ArrowRight, M as Globe, O as LifeBuoy, T as Lock, U as Check, b as MessageSquare, c as Shield, g as Pen, k as Layers, l as ShieldCheck, m as RefreshCw, t as Zap, u as Server } from "./_libs/lucide-react.mjs";
import { n as Navbar, t as Footer } from "./_ssr/Footer-BiAebAlC.mjs";
import { t as Cases } from "./_ssr/Cases-DmqKdLb3.mjs";
import { t as Toaster } from "./_libs/sonner.mjs";
import { t as Contact } from "./_ssr/Contact-CUHAzosq.mjs";
import { t as Services } from "./_ssr/Services-CnssXjHo.mjs";
import { t as clsx } from "./_libs/clsx.mjs";
import { t as twMerge } from "./_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_locale-vuSAy7Ab.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	const { t } = useI18n();
	const locale = useLocale();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		"aria-labelledby": "home-heading",
		className: "relative overflow-hidden bg-background px-6 pb-20 pt-28 sm:pb-28 sm:pt-36 lg:pt-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 -z-10",
				style: { background: `
            radial-gradient(ellipse 90% 60% at 50% 110%, oklch(0.52 0.24 271 / 0.14) 0%, transparent 65%),
            linear-gradient(to bottom, transparent 70%, oklch(0.52 0.24 271 / 0.04) 100%)
          ` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-0 -z-10 opacity-[0.025] dark:opacity-[0.04]",
				style: {
					backgroundImage: "linear-gradient(oklch(0.7 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(0.7 0 0) 1px, transparent 1px)",
					backgroundSize: "64px 64px",
					maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-3.5 py-1 text-[11px] font-mono uppercase tracking-[0.08em] text-muted-foreground backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.04]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-1.5 w-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 [will-change:transform,opacity]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.hero.badge })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						id: "home-heading",
						className: "mx-auto mt-8 max-w-4xl text-balance text-[clamp(2.25rem,6vw,4rem)] font-medium leading-[1.08] tracking-[-0.03em] text-foreground",
						children: [t.hero.headlinePart1, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-light text-muted-foreground",
							children: t.hero.headlinePart2
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]",
						children: t.hero.subheadline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-wrap items-center justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20um%20engenheiro%20sobre%20um%20novo%20projeto%20com%20a%20Evolves.",
							target: "_blank",
							rel: "noreferrer",
							className: "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium text-white transition-all duration-300",
							style: {
								background: "linear-gradient(135deg, oklch(0.52 0.24 271) 0%, oklch(0.55 0.22 250) 100%)",
								boxShadow: "0 0 0 1px oklch(0.68 0.2 271 / 0.5), 0 4px 24px -4px oklch(0.52 0.24 271 / 0.5)"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "absolute inset-0 -z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
									style: { background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.12) 50%, transparent 80%)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative",
									children: t.hero.ctaPrimary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "relative h-4 w-4",
									"aria-hidden": "true"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/$locale/",
							params: { locale },
							hash: "cases",
							className: "inline-flex items-center gap-2 rounded-full border border-black/[0.1] bg-black/[0.03] px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:bg-black/[0.06] dark:border-white/[0.1] dark:bg-white/[0.04] dark:hover:bg-white/[0.08]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.hero.ctaSecondary }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "h-4 w-4 text-muted-foreground",
								"aria-hidden": "true"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[11px] font-mono tracking-wide text-muted-foreground",
						children: t.hero.microCopy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 text-left",
						children: [
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}),
								color: "text-indigo-600 dark:text-indigo-400",
								label: t.hero.metric1Label,
								value: t.hero.metric1Value,
								desc: t.hero.metric1Desc
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}),
								color: "text-emerald-600 dark:text-emerald-400",
								label: t.hero.metric2Label,
								value: t.hero.metric2Value,
								desc: t.hero.metric2Desc
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}),
								color: "text-sky-600 dark:text-sky-400",
								label: t.hero.metric3Label,
								value: t.hero.metric3Value,
								desc: t.hero.metric3Desc
							},
							{
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}),
								color: "text-violet-600 dark:text-violet-400",
								label: t.hero.metric4Label,
								value: t.hero.metric4Value,
								desc: t.hero.metric4Desc
							}
						].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-black/[0.08] bg-black/[0.02] p-4 sm:p-5 backdrop-blur-xs transition-colors duration-300 hover:border-black/[0.14] dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/[0.14] dark:hover:bg-white/[0.05]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `flex items-center gap-2 ${m.color}`,
									children: [m.icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] font-mono uppercase tracking-[0.08em] text-muted-foreground",
										children: m.label
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2.5 text-2xl font-medium tracking-tight text-foreground sm:text-3xl",
									children: m.value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs leading-snug text-muted-foreground",
									children: m.desc
								})
							]
						}, m.label))
					})
				]
			})
		]
	});
}
function Infrastructure() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "infrastructure",
		"aria-labelledby": "infrastructure-heading",
		className: "border-t border-black/[0.06] bg-background py-24 sm:py-32 dark:border-white/[0.06]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-mono uppercase tracking-[0.08em] text-primary",
							children: t.infrastructure.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "infrastructure-heading",
							className: "mt-4 text-balance text-3xl font-medium tracking-[-0.02em] text-foreground sm:text-4xl",
							children: [t.infrastructure.titlePart1, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-light text-muted-foreground",
								children: t.infrastructure.titlePart2
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
							children: t.infrastructure.description
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid auto-rows-[1fr] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative overflow-hidden rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 sm:p-8 lg:col-span-7 transition-all duration-300 hover:border-black/[0.14] dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/[0.12] dark:hover:bg-white/[0.05]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": "true",
									className: "pointer-events-none absolute -top-12 -left-12 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] bg-black/[0.04] dark:border-white/[0.08] dark:bg-white/[0.05]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
										className: "h-5 w-5 text-indigo-500 dark:text-indigo-400",
										strokeWidth: 1.5,
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-base font-medium tracking-tight text-foreground sm:text-lg",
									children: t.infrastructure.p1Title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: t.infrastructure.p1Desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 flex flex-wrap gap-2 text-[10px] font-mono",
									children: [
										{
											dot: "bg-emerald-500",
											loc: "Frankfurt · EU"
										},
										{
											dot: "bg-sky-500",
											loc: "São Paulo · BR"
										},
										{
											dot: "bg-violet-500",
											loc: "Auckland · NZ"
										},
										{
											dot: "bg-amber-500",
											loc: "London · GB"
										}
									].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] px-2.5 py-1 text-muted-foreground dark:border-white/[0.08] dark:bg-white/[0.04]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 rounded-full ${n.dot}` }), n.loc]
									}, n.loc))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 border-t border-black/[0.06] pt-4 dark:border-white/[0.06]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-mono text-muted-foreground",
										children: t.infrastructure.p1Metric
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative overflow-hidden rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 sm:p-7 lg:col-span-5 transition-all duration-300 hover:border-black/[0.14] dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/[0.12] dark:hover:bg-white/[0.05]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": "true",
									className: "pointer-events-none absolute -top-8 right-0 h-32 w-32 rounded-full bg-violet-500/10 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] bg-black/[0.04] dark:border-white/[0.08] dark:bg-white/[0.05]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, {
										className: "h-5 w-5 text-violet-500 dark:text-violet-400",
										strokeWidth: 1.5,
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-base font-medium tracking-tight text-foreground",
									children: t.infrastructure.p2Title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: t.infrastructure.p2Desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 border-t border-black/[0.06] pt-4 dark:border-white/[0.06]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-mono text-muted-foreground",
										children: t.infrastructure.p2Metric
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative overflow-hidden rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 sm:p-7 lg:col-span-5 transition-all duration-300 hover:border-black/[0.14] dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/[0.12] dark:hover:bg-white/[0.05]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": "true",
									className: "pointer-events-none absolute bottom-0 left-0 h-28 w-28 rounded-full bg-cyan-500/10 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] bg-black/[0.04] dark:border-white/[0.08] dark:bg-white/[0.05]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, {
										className: "h-5 w-5 text-cyan-600 dark:text-cyan-400",
										strokeWidth: 1.5,
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-base font-medium tracking-tight text-foreground",
									children: t.infrastructure.p3Title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: t.infrastructure.p3Desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 border-t border-black/[0.06] pt-4 dark:border-white/[0.06]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] font-mono text-muted-foreground",
										children: t.infrastructure.p3Metric
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative overflow-hidden rounded-2xl border border-black/[0.08] bg-black/[0.02] p-6 sm:p-7 lg:col-span-7 transition-all duration-300 hover:border-black/[0.14] dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-white/[0.12] dark:hover:bg-white/[0.05]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": "true",
									className: "pointer-events-none absolute -bottom-8 right-0 h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] bg-black/[0.04] dark:border-white/[0.08] dark:bg-white/[0.05]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LifeBuoy, {
										className: "h-5 w-5 text-emerald-500 dark:text-emerald-400",
										strokeWidth: 1.5,
										"aria-hidden": "true"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-base font-medium tracking-tight text-foreground",
									children: t.infrastructure.p4Title ?? "Suporte & SLA Ativo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: t.infrastructure.p4Desc ?? "Monitoramento 24/7, backups automáticos e SLA de resposta garantido. Atendimento via canal dedicado com tempo de resposta inferior a 4 horas."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 flex flex-wrap gap-2 text-[10px] font-mono text-muted-foreground",
									children: [
										"99.99% Uptime SLA",
										"24/7 Monitoring",
										"< 4h Response",
										"Auto Backups"
									].map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-black/[0.08] bg-black/[0.03] px-2.5 py-1 dark:border-white/[0.08] dark:bg-white/[0.03]",
										children: tag
									}, tag))
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-black/[0.06] pt-10 text-[11px] font-mono text-muted-foreground dark:border-white/[0.06]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Server, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.infrastructure.specsCloud })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3.5 w-3.5 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.infrastructure.specsCache })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-3.5 w-3.5 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.infrastructure.specsSecurity })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.infrastructure.specsBackups })
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
			num: "01",
			title: t.process.s1Title.replace(/^01\.\s*/, ""),
			description: t.process.s1Desc,
			tag: t.process.s1Tag
		},
		{
			num: "02",
			title: t.process.s2Title.replace(/^02\.\s*/, ""),
			description: t.process.s2Desc,
			tag: t.process.s2Tag
		},
		{
			num: "03",
			title: t.process.s3Title.replace(/^03\.\s*/, ""),
			description: t.process.s3Desc,
			tag: t.process.s3Tag
		},
		{
			num: "04",
			title: t.process.s4Title.replace(/^04\.\s*/, ""),
			description: t.process.s4Desc,
			tag: t.process.s4Tag
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		"aria-labelledby": "process-heading",
		className: "relative border-t border-black/[0.08] bg-background py-24 sm:py-32 dark:border-white/[0.08]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-[11px] font-mono tracking-wider text-primary uppercase dark:border-white/[0.08] dark:bg-white/[0.03]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.process.eyebrow })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "process-heading",
						className: "mt-4 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-5xl",
						children: t.process.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base text-muted-foreground sm:text-lg",
						children: t.process.description
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: steps.map((s, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative flex flex-col justify-between rounded-2xl border border-black/[0.08] bg-card p-7 transition-all duration-300 hover:border-black/[0.14] dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/[0.14] dark:hover:bg-white/[0.04] shadow-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-2xl font-medium text-foreground/60 group-hover:text-primary transition-colors dark:text-foreground/50",
								children: s.num
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-black/[0.08] bg-black/[0.03] px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground dark:border-white/[0.08] dark:bg-white/[0.03]",
								children: s.tag
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-base font-medium tracking-tight text-foreground",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground",
							children: s.description
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center justify-between border-t border-black/[0.06] pt-4 dark:border-white/[0.06]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-[10px] font-mono text-muted-foreground",
							children: [
								t.process.stepPrefix || "Etapa",
								" ",
								index + 1,
								" de 4"
							]
						}), index < 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors hidden lg:block" })]
					})]
				}, s.num))
			})]
		})
	});
}
function Pricing() {
	const { region, currencySymbol } = useRegion();
	const { t, language } = useI18n();
	const getLocalizedPlans = () => {
		if (region === "USD") {
			if (language === "en" || language.startsWith("en")) return [
				{
					name: "Start Plan",
					target: "Independent consultants, boutique clinics, and high-conversion landing pages.",
					price: "$400 – $600",
					priceSub: "one-time engineering investment",
					maintenance: "$25",
					maintenancePeriod: "mo",
					highlight: false,
					features: [
						"High-converting landing page (bespoke editorial UI)",
						"Sub-second load times & Core Web Vitals 95+",
						"Direct WhatsApp & corporate email integration",
						"Spam-protected contact forms with telemetry",
						"Technical on-page SEO & OpenGraph metadata",
						"Agile delivery: 10 to 30 business days"
					],
					paymentNotes: "Stripe, Wise, Wire Transfer, or Corporate Card in USD.",
					ctaText: "Select Start Plan ($)",
					ctaHref: "https://wa.me/5513981326869?text=Hello%2C%20I%20am%20interested%20in%20the%20Start%20Plan%20(USD)%20from%20Evolves."
				},
				{
					name: "Pro Plan",
					target: "Established companies requiring corporate authority, multi-pages, and global SEO.",
					price: "$850 – $1,350",
					priceSub: "one-time engineering investment",
					maintenance: "$40",
					maintenancePeriod: "mo",
					highlight: true,
					badge: t.pricing.recommended || "Recommended",
					features: [
						"Multi-page corporate website (Home, About, Services, Contact)",
						"SEO-engineered Blog or Knowledge Base for organic acquisition",
						"Prepared multilingual architecture (EN / ES / PT / FR)",
						"GA4, Google Tag Manager & Meta Pixel conversion tracking",
						"CRM or automated booking calendar integration",
						"Agile delivery: 10 to 30 business days"
					],
					paymentNotes: "Billed in USD. Installments or milestone-based payments available.",
					ctaText: "Choose Pro Plan ($)",
					ctaHref: "https://wa.me/5513981326869?text=Hello%2C%20I%20would%20like%20to%20start%20the%20Pro%20Plan%20(USD)%20with%20Evolves."
				},
				{
					name: "Max Plan",
					target: "High-volume e-commerce, custom SaaS, and tailored web applications.",
					price: "From $1,700",
					priceSub: "tailored software development",
					maintenance: "$60",
					maintenancePeriod: "mo",
					highlight: false,
					features: [
						"Full e-commerce platform (Stripe, PayPal, global checkout)",
						"Real-time calendar booking and member management portals",
						"REST / GraphQL API integrations with ERP and billing systems",
						"Dedicated isolated cloud cluster for heavy concurrent traffic",
						"Strict security hardening and automated daily backups",
						"Direct consultation with Senior Software Architect"
					],
					paymentNotes: "Milestone-based contract with guaranteed SLA.",
					ctaText: "Request Custom Proposal ($)",
					ctaHref: "https://wa.me/5513981326869?text=Hello%2C%20I%20need%20a%20custom%20proposal%20for%20the%20Max%20Plan%20(USD)."
				}
			];
			if (language === "es") return [
				{
					name: "Plan Start",
					target: "Consultores, clínicas privadas y profesionales de alto impacto.",
					price: "$400 a $600",
					priceSub: "inversión única de desarrollo",
					maintenance: "$25",
					maintenancePeriod: "mes",
					highlight: false,
					features: [
						"Landing page de alta conversión (diseño editorial a medida)",
						"Carga sub-segundo optimizada para móviles (< 1.2s)",
						"Integración con WhatsApp comercial y correo corporativo",
						"Formularios seguros con protección anti-spam nativa",
						"SEO técnico on-page para indexación global en Google",
						"Plazo de entrega ágil: 10 a 30 días hábiles"
					],
					paymentNotes: "Pago vía Stripe, Wise o tarjeta en USD ($).",
					ctaText: "Seleccionar Plan Start ($)",
					ctaHref: "https://wa.me/5513981326869?text=Hola%2C%20me%20interesa%20el%20Plan%20Start%20(USD)%20de%20Evolves."
				},
				{
					name: "Plan Pro",
					target: "Empresas consolidadas que requieren presencia corporativa y SEO orgánico.",
					price: "$850 a $1.350",
					priceSub: "inversión única de desarrollo",
					maintenance: "$40",
					maintenancePeriod: "mes",
					highlight: true,
					badge: t.pricing.recommended || "Recomendado",
					features: [
						"Sitio web corporativo multipágina (Inicio, Empresa, Servicios, etc.)",
						"Estructura de Blog optimizada para posicionamiento orgánico",
						"Arquitectura multilingüe preparada (ES / EN / PT)",
						"Integración Google Analytics 4, Tag Manager y Meta Pixel",
						"Integración con CRM de ventas o reservas online",
						"Plazo de entrega ágil: 10 a 30 días hábiles"
					],
					paymentNotes: "Facturación internacional en USD ($). Pago en etapas.",
					ctaText: "Contratar Plan Pro ($)",
					ctaHref: "https://wa.me/5513981326869?text=Hola%2C%20quiero%20iniciar%20el%20Plan%20Pro%20(USD)%20con%20Evolves."
				},
				{
					name: "Plan Max",
					target: "E-commerce, reservas automatizadas y plataformas digitales a medida.",
					price: "A partir de $1.700",
					priceSub: "desarrollo de software a medida",
					maintenance: "$60",
					maintenancePeriod: "mes",
					highlight: false,
					features: [
						"Tienda online completa (checkout global Stripe y PayPal)",
						"Sistema de reservas automáticas con sincronización de calendario",
						"Área de miembros o catálogo dinámico",
						"Integración API con sistemas ERP o de facturación",
						"Infraestructura dedicada para altos picos de tráfico",
						"Consultoría técnica de arquitectura de software"
					],
					paymentNotes: "Contrato personalizado con hitos de entrega garantizados.",
					ctaText: "Solicitar Propuesta Max ($)",
					ctaHref: "https://wa.me/5513981326869?text=Hola%2C%20necesito%20una%20propuesta%20del%20Plan%20Max%20(USD)."
				}
			];
			return [
				{
					name: "Plano Start",
					target: "Consultores, clínicas privadas e landing pages de conversão direta.",
					price: "$400 a $600",
					priceSub: "investimento único de desenvolvimento",
					maintenance: "$25",
					maintenancePeriod: "mês",
					highlight: false,
					features: [
						"Landing page de alta conversão (design editorial sob medida)",
						"Otimização extrema para dispositivos móveis (< 1.2s)",
						"Integração com WhatsApp comercial e e-mail corporativo",
						"Formulário seguro com proteção anti-spam nativa",
						"SEO técnico on-page para indexação global no Google",
						"Prazo de entrega ágil: 10 a 30 dias úteis"
					],
					paymentNotes: "Pagamento via Stripe, Wise ou Cartão Corporativo em Dólares ($).",
					ctaText: "Selecionar Plano Start ($)",
					ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Plano%20Start%20(USD)%20da%20Evolves."
				},
				{
					name: "Plano Pro",
					target: "Empresas consolidadas que exigem autoridade internacional e tráfego orgânico.",
					price: "$850 a $1.350",
					priceSub: "investimento único de desenvolvimento",
					maintenance: "$40",
					maintenancePeriod: "mês",
					highlight: true,
					badge: t.pricing.recommended || "Mais Recomendado",
					features: [
						"Website corporativo multipáginas (Home, Sobre, Serviços, Contato)",
						"Estrutura de Blog ou Artigos otimizada para SEO global",
						"Arquitetura multilíngue preparada (EN / PT / ES / FR)",
						"Telemetria Google Analytics 4, Tag Manager e Meta Pixel",
						"Integração com CRM de vendas ou agendamento online",
						"Prazo de entrega ágil: 10 a 30 dias úteis"
					],
					paymentNotes: "Faturamento internacional em USD ($). Parcelamento por etapas.",
					ctaText: "Escolher Plano Pro ($)",
					ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20gostaria%20de%20fechar%20o%20Plano%20Pro%20(USD)%20com%20a%20Evolves."
				},
				{
					name: "Plano Max",
					target: "E-commerce global, plataformas sob medida e portais de membros.",
					price: "A partir de $1.700",
					priceSub: "desenvolvimento de software sob medida",
					maintenance: "$60",
					maintenancePeriod: "mês",
					highlight: false,
					features: [
						"Plataforma completa de vendas (Stripe, PayPal, checkout multinacional)",
						"Sistema de agendamento automatizado com sincronização de agenda",
						"Área de membros restrita ou catálogo interativo",
						"Integrações por API com ERP e plataformas de cobrança globais",
						"Infraestrutura de nuvem dedicada para alto tráfego concorrente",
						"Consultoria técnica direta com Arquiteto de Software"
					],
					paymentNotes: "Contrato personalizado atrelado a marcos de entrega (milestones).",
					ctaText: "Solicitar Proposta Max ($)",
					ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20preciso%20de%20um%20projeto%20personalizado%20no%20Plano%20Max%20(USD)."
				}
			];
		}
		if (region === "EUR") {
			if (language === "en" || language.startsWith("en")) return [
				{
					name: "Start Plan",
					target: "Consultants, local clinics, and independent European professionals.",
					price: "€350 – €500",
					priceSub: "one-time engineering investment",
					maintenance: "€20",
					maintenancePeriod: "mo",
					highlight: false,
					features: [
						"High-converting landing page (custom editorial design)",
						"Extreme mobile optimization (< 1s load time in Europe)",
						"Direct WhatsApp & corporate email integration",
						"Secure form with native anti-spam & GDPR consent",
						"Technical on-page SEO for top Google indexation",
						"Agile delivery: 10 to 30 business days"
					],
					paymentNotes: "SEPA bank transfer, MB WAY, corporate card, or Wise.",
					ctaText: "Select Start Plan (€)",
					ctaHref: "https://wa.me/5513981326869?text=Hello%2C%20I%20am%20interested%20in%20the%20Start%20Plan%20(EUR)%20from%20Evolves."
				},
				{
					name: "Pro Plan",
					target: "Established European companies demanding corporate authority and SEO.",
					price: "€750 – €1,200",
					priceSub: "one-time engineering investment",
					maintenance: "€35",
					maintenancePeriod: "mo",
					highlight: true,
					badge: t.pricing.recommended || "Recommended",
					features: [
						"Multi-page corporate website (Home, About, Services, etc.)",
						"SEO-optimized Blog or knowledge hub for organic reach",
						"Pre-configured multilingual architecture (PT / EN / ES / FR)",
						"GA4, Google Tag Manager & Meta Pixel telemetry",
						"CRM or online booking integration",
						"Agile delivery: 10 to 30 business days"
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
					target: "Profesionales independientes, consultores y servicios locales en Europa.",
					price: "€350 a €500",
					priceSub: "inversión única de desarrollo",
					maintenance: "€20",
					maintenancePeriod: "mes",
					highlight: false,
					features: [
						"Landing page de alta conversión (diseño editorial a medida)",
						"Optimización extrema para dispositivos móviles (< 1s)",
						"Integración con WhatsApp comercial y correo profesional",
						"Formulario seguro con protección anti-spam y RGPD nativo",
						"SEO técnico on-page para indexación en Google",
						"Plazo de entrega ágil: 10 a 30 días hábiles"
					],
					paymentNotes: "Transferencia SEPA, MB WAY, Bizum o Wise.",
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
					badge: t.pricing.recommended || "Recomendado",
					features: [
						"Sitio web corporativo multipágina (Inicio, Empresa, Servicios, etc.)",
						"Estructura de Blog para posicionamiento orgánico",
						"Arquitectura multilingüe preparada (ES / EN / PT / FR)",
						"Integración Google Analytics 4, Tag Manager y Meta Pixel",
						"Integración con CRM de ventas o reservas online",
						"Plazo de entrega ágil: 10 a 30 días hábiles"
					],
					paymentNotes: "Facturación europea en EUR. Con factura oficial.",
					ctaText: "Contratar Plan Pro (€)",
					ctaHref: "https://wa.me/5513981326869?text=Hola%2C%20quiero%20iniciar%20el%20Plan%20Pro%20(EUR)%20con%20Evolves."
				},
				{
					name: "Plan Max",
					target: "E-commerce, reservas avanzadas y plataformas a medida en Europa.",
					price: "A partir de €1.500",
					priceSub: "desarrollo de software personalizado",
					maintenance: "€50",
					maintenancePeriod: "mes",
					highlight: false,
					features: [
						"Tienda online completa (checkout Stripe, MB WAY, PayPal)",
						"Sistema de reservas automáticas con sincronización de calendario",
						"Área de miembros o catálogo dinámico",
						"Integración API con sistemas ERP o de facturación europeos",
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
					target: "Profissionais liberais, consultores e serviços locais na Europa.",
					price: "€350 a €500",
					priceSub: "investimento único de desenvolvimento",
					maintenance: "€20",
					maintenancePeriod: "mês",
					highlight: false,
					features: [
						"Landing page de alta conversão (design editorial à medida)",
						"Otimização extrema para dispositivos móveis (< 1s em nós europeus)",
						"Integração com WhatsApp comercial e e-mail profissional",
						"Formulário seguro com proteção anti-spam e RGPD",
						"SEO técnico on-page para indexação prioritária no Google",
						"Prazo de entrega ágil: 10 a 30 dias úteis"
					],
					paymentNotes: "Pagamento via SEPA, MB WAY, Transferência Bancária ou Wise.",
					ctaText: "Selecionar Plano Start (€)",
					ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Plano%20Start%20(EUR)%20da%20Evolves."
				},
				{
					name: "Plano Pro",
					target: "Empresas consolidadas que exigem autoridade de marca e SEO na Europa.",
					price: "€750 a €1.200",
					priceSub: "investimento único de desenvolvimento",
					maintenance: "€35",
					maintenancePeriod: "mês",
					highlight: true,
					badge: t.pricing.recommended || "Mais Recomendado",
					features: [
						"Website institucional multipáginas completo",
						"Estrutura de Blog ou Artigos otimizada para SEO orgânico",
						"Arquitetura multilíngue preparada (PT / EN / ES / FR)",
						"Integração Google Analytics 4, Tag Manager e Meta Pixel",
						"Integração com CRM de vendas ou agendamento online",
						"Prazo de entrega ágil: 10 a 30 dias úteis"
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
		}
		return [
			{
				name: "Plano Start",
				target: "Empresas e profissionais que buscam presença digital rápida, sóbria e moderna.",
				price: "R$ 1.500 a R$ 2.000",
				priceSub: "taxa única de criação e engenharia",
				maintenance: "R$ 100",
				maintenancePeriod: "mês",
				highlight: false,
				features: [
					"Landing page estratégica focada em captação de leads e vendas",
					"Design editorial exclusivo alinhado à sua marca (sem templates)",
					"Integração direta com WhatsApp comercial e formulário seguro",
					"Velocidade de carregamento otimizada para conexões móveis 4G/5G",
					"Configuração de tags de conversão (Google Ads e Meta Pixel)",
					"Prazo de entrega ágil: 10 a 30 dias úteis"
				],
				paymentNotes: "Pagamento via PIX com desconto ou Cartão de Crédito corporativo.",
				ctaText: "Selecionar Plano Start (R$)",
				ctaHref: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Plano%20Start%20(em%20Reais)%20da%20Evolves."
			},
			{
				name: "Plano Pro",
				target: "Empresas consolidadas que precisam de autoridade de mercado e múltiplos serviços.",
				price: "R$ 2.800 a R$ 4.500",
				priceSub: "taxa única de criação e engenharia",
				maintenance: "R$ 180",
				maintenancePeriod: "mês",
				highlight: true,
				badge: t.pricing.mostChosen || "Mais Escolhido",
				features: [
					"Site institucional multipáginas completo com páginas dedicadas",
					"Otimização para os primeiros lugares nas buscas do Google (SEO On-Page)",
					"Integração com seu CRM de vendas (RD Station, HubSpot, Pipedrive)",
					"Blog corporativo para construção de autoridade e conteúdos",
					"Design editorial responsivo com micro-animações refinadas",
					"Prazo de entrega ágil: 10 a 30 dias úteis"
				],
				paymentNotes: "Entrada + saldo na entrega ou parcelamento em até 12x. Com Nota Fiscal.",
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
	const maintenancePillars = [
		{
			icon: Server,
			title: region === "EUR" ? "Hospedagem Cloud Dedicada" : region === "USD" ? "Dedicated Cloud Hosting" : "Hospedagem Cloud Dedicada",
			desc: region === "EUR" ? "Servidores em nós europeus de baixa latência (Frankfurt/Londres) com isolamento de recursos." : region === "USD" ? "Global edge server nodes (US, EU, APAC) with guaranteed 99.99% uptime and sub-second delivery." : "Servidores em nuvem de alta velocidade com nós locais e CDN global para carregamento imediato."
		},
		{
			icon: RefreshCw,
			title: region === "USD" ? "Automated Daily Backups" : "Backups Automáticos Diários",
			desc: region === "USD" ? "Complete off-site backups with one-click restore points and disaster recovery protocol." : "Cópias completas de segurança diárias com restauração em 1 clique em caso de falha."
		},
		{
			icon: Lock,
			title: region === "USD" ? "Active SSL & Security" : "Certificado SSL & Blindagem",
			desc: region === "USD" ? "Automated TLS 1.3 certificates, DDoS shield, web application firewall, and bot protection." : "Certificados TLS automáticos, proteção ativa contra ataques DDoS e blindagem contra spam."
		},
		{
			icon: Headphones,
			title: region === "USD" ? "Ongoing Technical Support" : "Suporte Técnico Contínuo",
			desc: region === "USD" ? "Direct engineering channel for adjustments, performance audits, and priority bug fixes." : "Canal direto para pequenos ajustes de texto/banners, atualizações de segurança e monitoramento 24/7."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		"aria-labelledby": "pricing-heading",
		className: "relative border-t border-black/[0.08] bg-surface/20 py-24 sm:py-32 dark:border-white/[0.08]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-[11px] font-mono tracking-wider text-primary uppercase dark:border-white/[0.08] dark:bg-white/[0.03]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.pricing.eyebrow })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "pricing-heading",
							className: "mt-4 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-5xl",
							children: t.pricing.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base text-muted-foreground sm:text-lg",
							children: t.pricing.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 inline-flex items-center gap-2.5 rounded-full border border-black/[0.08] bg-black/[0.03] px-4 py-1.5 dark:border-white/[0.08] dark:bg-white/[0.04]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-mono text-muted-foreground",
								children: region === "BRL" ? "Moeda exibida: Real Brasileiro (R$)" : region === "USD" ? "Displaying prices in: US Dollar ($)" : region === "EUR" ? "Moeda exibida: Euro (€)" : "Moeda exibida: Real Brasileiro (R$)"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch",
					children: plans.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative flex flex-col justify-between rounded-2xl border p-7 sm:p-8 transition-all duration-300 ${p.highlight ? "border-primary/50 bg-primary/[0.03] ring-1 ring-primary/20 shadow-[0_0_30px_rgba(83,58,253,0.12)] lg:-translate-y-2 dark:border-primary/50 dark:bg-white/[0.04]" : "border-black/[0.08] bg-card hover:border-black/[0.14] dark:border-white/[0.08] dark:bg-white/[0.02] dark:hover:border-white/[0.14] dark:hover:bg-white/[0.03] shadow-xs"}`,
						children: [
							p.highlight && p.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-3 left-1/2 -translate-x-1/2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary px-3 py-0.5 text-[10px] font-mono font-medium uppercase tracking-wider text-primary-foreground shadow-sm",
									children: p.badge
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-medium tracking-tight text-foreground",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "rounded-full border border-black/[0.08] bg-black/[0.03] px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground dark:border-white/[0.08] dark:bg-white/[0.04]",
										children: [
											currencySymbol,
											" ",
											region
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs leading-relaxed text-muted-foreground min-h-[34px]",
									children: p.target
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 border-y border-black/[0.08] py-4 dark:border-white/[0.08]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-2xl sm:text-3xl font-medium tracking-tight text-foreground",
											children: p.price
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-0.5 text-[11px] font-mono text-muted-foreground",
											children: p.priceSub
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex items-baseline gap-1 text-xs font-mono text-foreground",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: "+"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-medium text-primary text-sm",
													children: p.maintenance
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-muted-foreground",
													children: [
														"/",
														p.maintenancePeriod,
														" ",
														t.pricing.monthlyMaintenance || "manutenção recorrente"
													]
												})
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-2.5",
									children: p.features.map((feat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2.5 text-xs text-foreground/85",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "h-3.5 w-3.5 text-primary shrink-0 mt-0.5",
											strokeWidth: 2,
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "leading-relaxed",
											children: feat
										})]
									}, feat))
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 pt-4 border-t border-black/[0.08] dark:border-white/[0.08]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: p.ctaHref,
									target: "_blank",
									rel: "noreferrer",
									className: `flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-xs font-medium transition-all duration-200 ${p.highlight ? "bg-foreground text-background hover:opacity-90 shadow-sm" : "border border-black/[0.12] bg-card text-foreground hover:bg-black/[0.04] dark:border-white/[0.12] dark:bg-white/[0.04] dark:hover:bg-white/[0.08]"}`,
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
					className: "mt-14 rounded-2xl border border-black/[0.08] bg-card p-7 sm:p-9 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-black/[0.08] pb-6 dark:border-white/[0.08]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-9 w-9 items-center justify-center rounded-xl border border-black/[0.08] bg-black/[0.03] text-emerald-600 dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-emerald-400",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4.5 w-4.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "text-base font-medium tracking-tight text-foreground",
								children: region === "USD" ? "What is Included in the Recurrent Maintenance Retainer?" : "O que inclui a Manutenção Recorrente Mensal?"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: region === "USD" ? "Full turnkey peace of mind: hosting, security, and continuous engineering care." : "Zero preocupações operacionais: hospedagem dedicada, blindagem e suporte contínuo."
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 self-start sm:self-auto rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-[11px] font-mono text-muted-foreground dark:border-white/[0.08] dark:bg-white/[0.04]",
							children: "99.99% Uptime SLA"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: maintenancePillars.map((item) => {
							const Icon = item.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-black/[0.06] bg-black/[0.02] p-4 transition-colors hover:border-black/[0.12] dark:border-white/[0.06] dark:bg-white/[0.02] dark:hover:border-white/[0.12]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-8 w-8 items-center justify-center rounded-lg border border-black/[0.08] bg-black/[0.03] text-primary dark:border-white/[0.08] dark:bg-white/[0.04]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "h-4 w-4",
											strokeWidth: 1.5
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-xs font-medium text-foreground",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[11px] text-muted-foreground leading-relaxed",
										children: item.desc
									})
								]
							}, item.title);
						})
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
		if (language === "en" || language.startsWith("en")) return [
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
				answer: "Our agile delivery timeframe is 10 to 30 business days across our production tiers. For critical launch deadlines, an expedited roadmap can be scheduled during the initial technical briefing."
			},
			{
				id: "item-4",
				question: "Does my company 100% own the source code and domain?",
				answer: "Yes, without exception. Your company retains full legal and technical ownership of your domain, custom UI designs, and all application source code. We never practice vendor lock-in."
			},
			{
				id: "item-5",
				question: "Is the monthly cloud maintenance plan mandatory?",
				answer: "The managed plan provides high-speed isolated cloud infrastructure, daily automated backups, active SSL certificates, and continuous monitoring. If your company prefers hosting on its own internal cloud (AWS, GCP, or Hetzner), we conduct the deployment and hand over full access with no recurring retainers."
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
				answer: "Adaptamos el pago a la jurisdicción de su empresa:\n• Europa e Internacional: Transferencia bancaria SEPA, MB WAY, Wise o tarjeta en Euros (€) o USD ($).\n• Brasil: PIX, transferencia o tarjeta corporativa en hasta 12 cuotas con Factura Electrónica (NFS-e)."
			},
			{
				id: "item-3",
				question: "¿Cuál es el plazo medio para publicar mi sitio web?",
				answer: "El plazo de entrega ágil es de 10 a 30 días hábiles según el alcance técnico del proyecto. Para fechas críticas de lanzamiento, acordamos un cronograma prioritario."
			},
			{
				id: "item-4",
				question: "¿El código fuente y el dominio pertenecen 100% a mi empresa?",
				answer: "Sí, totalmente. Su empresa es la única propietaria del dominio, diseño y todo el código desarrollado. Cero bloqueo de proveedor (vendor lock-in)."
			},
			{
				id: "item-5",
				question: "¿El mantenimiento y hosting mensual es obligatorio?",
				answer: "Incluye infraestructura Cloud dedicada, copias de seguridad diarias, certificados SSL y soporte técnico. Si dispone de servidores propios (AWS, Hetzner), realizamos el despliegue inicial sin cuotas recurrentes."
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
				answer: "Adaptamos a faturação e o meio de pagamento à jurisdição da sua empresa:\n• Clientes na Europa e Internacional: Transferência bancária SEPA, pagamentos via MB WAY, Wise ou faturação eletrónica emitida em Euros (€) ou Dólares ($).\n• Clientes no Brasil: PIX, Boleto bancário ou Cartão de Crédito corporativo em até 12x, com emissão de Nota Fiscal de Serviços eletrónica (NFS-e)."
			},
			{
				id: "item-3",
				question: "Qual é o prazo médio para o meu site estar no ar?",
				answer: "Prazo de entrega ágil: 10 a 30 dias úteis, calibrado de acordo com a complexidade e o escopo acordados (de landing pages diretas a plataformas corporativas completas). Caso a sua empresa possua uma data crítica de lançamento, definimos um cronograma de aceleração dedicado logo no briefing inicial."
			},
			{
				id: "item-4",
				question: "O código-fonte e o domínio pertencem 100% à minha empresa?",
				answer: "Sim, sem exceções. A sua empresa é a proprietária exclusiva do domínio, da identidade visual e de todo o código-fonte desenvolvido. Não praticamos qualquer forma de retenção técnica ('vendor lock-in'). Se no futuro preferir internalizar ou migrar para outra infraestrutura, todos os acessos e arquivos são fornecidos imediatamente."
			},
			{
				id: "item-5",
				question: "A manutenção e hospedagem mensal é obrigatória?",
				answer: "A mensalidade inclui a nossa infraestrutura Cloud dedicada de alta performance, backups automáticos diários, certificados SSL sempre válidos, proteção contra ataques e suporte contínuo. Caso a sua empresa possua equipa interna de TI e prefira hospedar nos seus próprios servidores (AWS, Google Cloud ou Hetzner), realizamos o deploy inicial e encerramos a entrega sem mensalidades recorrentes."
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
		className: "relative border-t border-black/[0.08] bg-background py-24 sm:py-32 dark:border-white/[0.08]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.03] px-3 py-1 text-[11px] font-mono tracking-wider text-primary uppercase dark:border-white/[0.08] dark:bg-white/[0.03]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "h-3 w-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.faq.eyebrow })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "faq-heading",
							className: "mt-4 text-balance text-3xl font-medium tracking-tight text-foreground sm:text-5xl",
							children: t.faq.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base text-muted-foreground",
							children: t.faq.description
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 rounded-2xl border border-black/[0.08] bg-card p-6 sm:p-8 shadow-xs dark:border-white/[0.08] dark:bg-white/[0.02]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
						type: "single",
						collapsible: true,
						className: "w-full",
						children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
							value: f.id,
							className: "border-black/[0.06] py-2 dark:border-white/[0.06]",
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
							className: "text-primary font-mono hover:underline",
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
