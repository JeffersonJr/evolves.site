import { n as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as useRegion, r as useI18n } from "./I18nContext-DgVvWRMD.mjs";
import { I as ArrowUpRight, M as Check, b as Mail, g as Moon, j as ChevronDown, o as Sun, x as Linkedin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-BLyOiqG_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var evolves_logo_default = "/assets/evolves-logo-C9HCsjhS.webp";
var evolves_logo_gray_default = "/assets/evolves-logo-gray-Ca0NJuQs.png";
var evolves_logo_white_default = "/assets/evolves-logo-white-DVzZ6EPG.webp";
function ThemeToggle() {
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.contains("dark");
		if (localStorage.getItem("theme") === "dark") {
			setTheme("dark");
			document.documentElement.classList.add("dark");
		} else {
			setTheme("light");
			document.documentElement.classList.remove("dark");
		}
	}, []);
	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			setTheme("light");
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: toggleTheme,
		className: "flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors",
		"aria-label": "Alternar tema escuro/claro",
		title: "Alternar tema escuro/claro",
		children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-5 w-5" })
	});
}
function CurrencyToggle({ className = "" }) {
	const { region, setRegion } = useRegion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "group",
		"aria-label": "Selecionar Região e Moeda",
		className: `inline-flex items-center rounded-full border border-black/[0.08] bg-black/[0.03] p-0.5 text-xs font-mono transition-colors dark:border-white/10 dark:bg-white/[0.05] ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setRegion("EUR"),
			"aria-pressed": region === "EUR",
			className: `flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium transition-all duration-200 cursor-pointer ${region === "EUR" ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-800 dark:text-zinc-100" : "text-muted-foreground hover:text-foreground"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				children: "🇪🇺"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EUR (€)" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setRegion("BRL"),
			"aria-pressed": region === "BRL",
			className: `flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium transition-all duration-200 cursor-pointer ${region === "BRL" ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-800 dark:text-zinc-100" : "text-muted-foreground hover:text-foreground"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": "true",
				children: "🇧🇷"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "BRL (R$)" })]
		})]
	});
}
function LanguageSelector({ className = "" }) {
	const { language, setLanguage, languages, currentLanguageOption } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		function handleClickOutside(event) {
			if (containerRef.current && !containerRef.current.contains(event.target)) setOpen(false);
		}
		if (open) {
			document.addEventListener("mousedown", handleClickOutside);
			return () => document.removeEventListener("mousedown", handleClickOutside);
		}
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: `relative inline-block text-left ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((prev) => !prev),
			"aria-haspopup": "listbox",
			"aria-expanded": open,
			className: "inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-black/[0.03] px-2.5 py-1 text-xs font-mono transition-all hover:bg-black/[0.06] dark:border-white/10 dark:bg-white/[0.05] dark:hover:bg-white/[0.08] cursor-pointer",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm leading-none",
					"aria-hidden": "true",
					children: currentLanguageOption.flag
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-medium text-foreground",
					children: currentLanguageOption.short
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
					className: `h-3 w-3 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`,
					"aria-hidden": "true"
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "listbox",
			"aria-label": "Selecionar Idioma",
			className: "absolute right-0 mt-1.5 w-48 origin-top-right rounded-2xl border border-border bg-background/95 p-1.5 shadow-[var(--shadow-card)] backdrop-blur-xl z-[120] animate-fade-up focus:outline-none",
			children: languages.map((item) => {
				const isSelected = item.code === language;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					role: "option",
					"aria-selected": isSelected,
					onClick: () => {
						setLanguage(item.code);
						setOpen(false);
					},
					className: `flex w-full items-center justify-between rounded-xl px-2.5 py-1.5 text-xs transition-colors cursor-pointer ${isSelected ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-secondary"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm leading-none",
							"aria-hidden": "true",
							children: item.flag
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.name })]
					}), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "h-3.5 w-3.5",
						"aria-hidden": "true"
					})]
				}, item.code);
			})
		})]
	});
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const { t } = useI18n();
	const links = [
		{
			label: t.nav.services,
			href: "/#services"
		},
		{
			label: t.nav.cases,
			href: "/cases"
		},
		{
			label: t.nav.infrastructure,
			href: "/#infrastructure"
		},
		{
			label: t.nav.pricing,
			href: "/#pricing"
		},
		{
			label: t.nav.about,
			href: "/about"
		}
	];
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: `mx-auto flex h-14 items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 max-w-7xl ${scrolled || open ? "border-b border-black/[.06] bg-white/85 shadow-xs backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/85" : "bg-transparent"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-1.5 focus:outline-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: evolves_logo_default,
								alt: "Evolves",
								className: "h-6 w-auto block dark:hidden"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: scrolled || open ? evolves_logo_gray_default : evolves_logo_white_default,
								alt: "Evolves",
								className: "h-6 w-auto hidden dark:block"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-muted-foreground font-medium",
								children: "®"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden xl:inline-block text-[11px] font-mono uppercase tracking-wider text-muted-foreground/70 border-l border-border pl-3",
						children: t.nav.tagline
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-6 lg:gap-7 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-xs font-medium text-muted-foreground transition-colors hover:text-foreground",
						children: l.label
					}, l.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 sm:gap-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSelector, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrencyToggle, { className: "hidden sm:inline-flex" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "hidden items-center gap-1.5 rounded-full border border-black/15 bg-zinc-900 px-3.5 py-1.5 text-xs font-medium text-white transition-all hover:bg-zinc-800 dark:border-white/20 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white md:inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.nav.startProject }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								className: "h-3.5 w-3.5",
								"aria-hidden": "true"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen((v) => !v),
							className: "flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden focus:outline-none",
							"aria-label": open ? "Fechar menu" : "Abrir menu",
							"aria-expanded": open,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl leading-none",
								children: open ? "✕" : "☰"
							})
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-4 mt-2 rounded-2xl border border-border bg-background/95 p-5 shadow-[var(--shadow-card)] backdrop-blur-2xl md:hidden animate-fade-up",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pb-3 border-b border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-mono uppercase text-muted-foreground",
							children: t.nav.regionCurrency
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrencyToggle, {})]
					}),
					links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						onClick: () => setOpen(false),
						className: "rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
						children: l.label
					}, l.label)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						onClick: () => setOpen(false),
						className: "mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground transition-all hover:brightness-105",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.nav.startProject }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})]
					})
				]
			})
		})]
	});
}
function Footer() {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border/60 bg-surface/40 text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-6 pt-20 pb-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12 lg:p-16 shadow-[var(--shadow-card)] text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-mono uppercase tracking-widest text-primary",
							children: t.footer.preTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl text-foreground",
							children: t.footer.preHeadline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground sm:text-base leading-relaxed",
							children: t.footer.preSub
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20t%C3%A9cnica%20para%20o%20site%20da%20minha%20empresa.",
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs sm:text-sm font-medium text-background transition-all hover:opacity-90 shadow-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.footer.btnWhatsapp }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:contato@evolvestecnologia.com.br",
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-xs sm:text-sm font-medium text-foreground transition-all hover:bg-secondary/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
									className: "h-4 w-4 text-muted-foreground",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.footer.btnEmail })]
							})]
						})
					]
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 pb-16 pt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "inline-flex items-center gap-1 mb-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: evolves_logo_default,
										alt: "Evolves",
										className: "h-7 w-auto block dark:hidden"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: evolves_logo_white_default,
										alt: "Evolves",
										className: "h-7 w-auto hidden dark:block"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground font-medium",
										children: "®"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs sm:text-sm text-muted-foreground leading-relaxed pr-4 max-w-sm",
								children: t.footer.brandDesc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center gap-2 text-xs font-mono text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "relative flex h-2 w-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-emerald-500" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.footer.systemStatus })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.linkedin.com/company/71072104/",
									target: "_blank",
									rel: "noreferrer",
									className: "flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground transition-colors",
									"aria-label": "LinkedIn da Evolves",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/5513981326869",
									target: "_blank",
									rel: "noreferrer",
									className: "flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-[#25D366] transition-colors",
									"aria-label": "WhatsApp da Evolves",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 24 24",
										fill: "currentColor",
										className: "h-4 w-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
									})
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-mono uppercase tracking-wider text-foreground mb-4",
						children: t.footer.navTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2.5 text-xs sm:text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#top",
								className: "hover:text-foreground transition-colors",
								children: t.nav.services
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cases",
								className: "hover:text-foreground transition-colors",
								children: t.nav.cases
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#infrastructure",
								className: "hover:text-foreground transition-colors",
								children: t.nav.infrastructure
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#pricing",
								className: "hover:text-foreground transition-colors",
								children: t.nav.pricing
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "hover:text-foreground transition-colors",
								children: t.nav.about
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hover:text-foreground transition-colors",
								children: t.nav.contact
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-mono uppercase tracking-wider text-foreground mb-4",
						children: t.footer.complianceTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2.5 text-xs sm:text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "hover:text-foreground transition-colors",
								children: "Privacidade (RGPD/LGPD)"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cookies",
								className: "hover:text-foreground transition-colors",
								children: "Gestão de Cookies"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "hover:text-foreground transition-colors",
								children: "Sobre a Evolves"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hover:text-foreground transition-colors",
								children: "Canal de Contacto"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs font-mono uppercase tracking-wider text-foreground mb-4",
						children: t.footer.opsTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2.5 text-xs text-muted-foreground font-mono",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["🇵🇹 ", t.footer.countryPT] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["🇬🇧 ", t.footer.countryUK] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["🇧🇷 ", t.footer.countryBR] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["🇳🇿 ", t.footer.countryNZ] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "pt-2 text-foreground font-sans text-xs",
								children: t.footer.opsDesc
							})
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 border-t border-border/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t.footer.copyright }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px]",
					children: t.footer.subCopyright
				})]
			})]
		})]
	});
}
//#endregion
export { Footer as n, Navbar as r, CurrencyToggle as t };
