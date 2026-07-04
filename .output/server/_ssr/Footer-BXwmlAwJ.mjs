import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Moon, b as Mail, m as Phone, o as Sun, x as Linkedin, y as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-BXwmlAwJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var evolves_logo_default = "/assets/evolves-logo-B_KsYobp.png";
var evolves_logo_gray_default = "/assets/evolves-logo-gray-Ca0NJuQs.png";
var evolves_logo_white_default = "/assets/evolves-logo-white-CMcF_Ob-.png";
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
var links = [
	{
		label: "Início",
		href: "/"
	},
	{
		label: "Sobre",
		href: "/about"
	},
	{
		label: "Serviços",
		href: "/services"
	},
	{
		label: "Cases",
		href: "/cases"
	},
	{
		label: "Blog",
		href: "/blog"
	},
	{
		label: "Contato",
		href: "/contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 px-4 pt-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: `mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full px-4 pl-5 transition-all duration-300 ${scrolled || open ? "liquid-glass" : "border border-transparent bg-transparent"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: evolves_logo_default,
							alt: "Evolves",
							className: "h-7 w-auto block dark:hidden"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: scrolled || open ? evolves_logo_gray_default : evolves_logo_white_default,
							alt: "Evolves",
							className: "h-7 w-auto hidden dark:block"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground/50 font-medium",
							children: "®"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-8 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.href,
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Evolves%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20voc%C3%AAs!",
							target: "_blank",
							rel: "noreferrer",
							className: "hidden items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] md:inline-flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 24 24",
								fill: "currentColor",
								className: "h-4 w-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
							}), "WhatsApp"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen((v) => !v),
							className: "flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden",
							"aria-label": "Abrir menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl",
								children: open ? "✕" : "☰"
							})
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute left-4 right-4 top-20 z-[100] liquid-glass rounded-3xl md:hidden shadow-[var(--shadow-card)] animate-fade-up",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1 p-4",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.href,
					onClick: () => setOpen(false),
					className: "rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://wa.me/5513981326869?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Evolves%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20de%20voc%C3%AAs!",
					target: "_blank",
					rel: "noreferrer",
					onClick: () => setOpen(false),
					className: "mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2 text-center text-sm font-medium text-primary-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 24 24",
						fill: "currentColor",
						className: "h-4 w-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
					}), "WhatsApp"]
				})]
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-surface-dark text-surface-dark-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "inline-flex items-center gap-1 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: evolves_logo_white_default,
									alt: "Evolves",
									className: "h-8 w-auto"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-surface-dark-foreground/40 font-medium",
									children: "®"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-surface-dark-foreground/70 mb-6 leading-relaxed pr-4",
								children: "Transformamos empresas através de soluções digitais inteligentes. Especialistas em desenvolvimento de sistemas, branding e design B2B."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://www.linkedin.com/company/71072104/",
									target: "_blank",
									rel: "noreferrer",
									className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors",
									"aria-label": "LinkedIn",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/5513981326869",
									target: "_blank",
									rel: "noreferrer",
									className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-[#25D366] transition-colors",
									"aria-label": "WhatsApp",
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-semibold mb-6",
						children: "Links Rápidos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-4 text-sm text-surface-dark-foreground/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "hover:text-white transition-colors",
								children: "Sobre a Evolves"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								className: "hover:text-white transition-colors",
								children: "Ver todos os Serviços"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cases",
								className: "hover:text-white transition-colors",
								children: "Cases de Sucesso"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/blog",
								className: "hover:text-white transition-colors",
								children: "Blog & Artigos"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "hover:text-white transition-colors",
								children: "Fale Conosco"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-semibold mb-6",
						children: "Nossas Soluções"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-4 text-sm text-surface-dark-foreground/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services/$slug",
								params: { slug: "consultoria-ux-ui" },
								className: "hover:text-white transition-colors",
								children: "Consultoria em UX/UI"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services/$slug",
								params: { slug: "sites-inteligentes" },
								className: "hover:text-white transition-colors",
								children: "Sites Inteligentes"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services/$slug",
								params: { slug: "sistemas-customizados" },
								className: "hover:text-white transition-colors",
								children: "Sistemas Customizados"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services/$slug",
								params: { slug: "hospedagem-e-performance" },
								className: "hover:text-white transition-colors",
								children: "Hospedagem & Performance"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services/$slug",
								params: { slug: "branding-e-design" },
								className: "hover:text-white transition-colors",
								children: "Branding & Design"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-semibold mb-6",
						children: "Legal & Contato"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-4 text-sm text-surface-dark-foreground/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/privacy",
								className: "hover:text-white transition-colors",
								children: "Política de Privacidade"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cookies",
								className: "hover:text-white transition-colors",
								children: "Política de Cookies"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "contato@evolves.com.br" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "(13) 98132-6869" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CNPJ: 39.521.111/0001-38" })]
							})
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-surface-dark-foreground/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Evolves Tecnologia. Todos os direitos reservados."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Feito com paixão por tecnologia." })]
			})]
		})
	});
}
//#endregion
export { Navbar as n, Footer as t };
