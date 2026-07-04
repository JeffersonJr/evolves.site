import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as Mail, v as MessageCircle, y as MapPin } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Contact-DAYqPaIH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var info = [
	{
		icon: Mail,
		label: "Email",
		value: "contato@evolves.site",
		href: "mailto:contato@evolves.site"
	},
	{
		icon: MessageCircle,
		label: "WhatsApp",
		value: "+55 (13) 98132-6869",
		href: "https://wa.me/5513981326869"
	},
	{
		icon: MapPin,
		label: "Localização",
		value: "São Paulo, Brasil"
	}
];
var subjects = [
	"Sites Inteligentes",
	"Sistemas Customizados",
	"Hospedagem & Performance",
	"Branding & Design",
	"Outro"
];
function Contact() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		subject: subjects[0],
		message: ""
	});
	function handleSubmit(e) {
		e.preventDefault();
		const name = form.name.trim();
		const email = form.email.trim();
		const message = form.message.trim();
		if (!name || !email || !message) {
			toast.error("Por favor, preencha nome, email e mensagem.");
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			toast.error("Informe um email válido.");
			return;
		}
		const text = `Olá, vim pelo site da Evolves!\n\nNome: ${name}\nE-mail: ${email}\nAssunto: ${form.subject}\n\n${message}`;
		const url = `https://wa.me/5513981326869?text=${encodeURIComponent(text)}`;
		window.open(url, "_blank");
		toast.success("Abrindo WhatsApp para enviar a solicitação.");
	}
	const field = "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-surface py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-balance text-4xl font-semibold tracking-tight sm:text-5xl",
					children: "Vamos evoluir seu projeto?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg text-muted-foreground",
					children: "Entre em contato hoje mesmo e descubra como podemos transformar seu negócio com tecnologia inteligente."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-8 md:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 md:col-span-2",
					children: [info.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i.icon, {
								className: "h-5 w-5",
								strokeWidth: 1.75
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: i.label
						}), i.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: i.href,
							target: i.href.startsWith("http") ? "_blank" : void 0,
							rel: i.href.startsWith("http") ? "noopener noreferrer" : void 0,
							className: "font-medium hover:text-primary",
							children: i.value
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: i.value
						})] })]
					}, i.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 pt-4 border-t border-border/50",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.linkedin.com/company/71072104/",
							target: "_blank",
							rel: "noreferrer",
							className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-card border border-border text-muted-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:text-[#0a66c2] hover:border-[#0a66c2]/30",
							"aria-label": "LinkedIn Evolves",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "20",
								height: "20",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
										width: "4",
										height: "12",
										x: "2",
										y: "9"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "4",
										cy: "4",
										r: "2"
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/5513981326869",
							target: "_blank",
							rel: "noreferrer",
							className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-card border border-border text-muted-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:text-[#25D366] hover:border-[#25D366]/30",
							"aria-label": "WhatsApp Evolves",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 24 24",
								fill: "currentColor",
								className: "h-5 w-5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
							})
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-4 rounded-4xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-sm font-medium",
								children: "Nome"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: field,
								value: form.name,
								maxLength: 100,
								onChange: (e) => setForm({
									...form,
									name: e.target.value
								}),
								placeholder: "Seu nome"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-1.5 block text-sm font-medium",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								className: field,
								value: form.email,
								maxLength: 255,
								onChange: (e) => setForm({
									...form,
									email: e.target.value
								}),
								placeholder: "voce@email.com"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-1.5 block text-sm font-medium",
							children: "Assunto"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: field,
							value: form.subject,
							onChange: (e) => setForm({
								...form,
								subject: e.target.value
							}),
							children: subjects.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-1.5 block text-sm font-medium",
							children: "Mensagem"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: `${field} min-h-32 resize-none`,
							value: form.message,
							maxLength: 1e3,
							onChange: (e) => setForm({
								...form,
								message: e.target.value
							}),
							placeholder: "Conte sobre seu projeto..."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "w-full rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-transform hover:scale-[1.01]",
							children: "Enviar solicitação"
						})
					]
				})]
			})]
		})
	});
}
//#endregion
export { Contact as t };
