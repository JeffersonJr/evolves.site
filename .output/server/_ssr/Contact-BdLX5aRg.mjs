import { n as __toESM } from "../_runtime.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as useI18n } from "./I18nContext-DgVvWRMD.mjs";
import { L as ArrowRight, b as Mail, v as MessageCircle, y as MapPin } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Contact-BdLX5aRg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact({ standalone = false } = {}) {
	const Heading = standalone ? "h1" : "h2";
	const { t } = useI18n();
	const subjects = t.assistant.services;
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		subject: subjects[0],
		message: ""
	});
	(0, import_react.useEffect)(() => {
		const saved = sessionStorage.getItem("evo-contact-prefill");
		if (!saved) return;
		sessionStorage.removeItem("evo-contact-prefill");
		try {
			const prefill = JSON.parse(saved);
			setForm((current) => ({
				...current,
				name: prefill.name ?? current.name,
				subject: subjects.includes(prefill.subject ?? "") ? prefill.subject : subjects[0],
				message: prefill.message ?? current.message
			}));
		} catch {
			sessionStorage.removeItem("evo-contact-prefill");
		}
	}, [subjects]);
	function handleSubmit(e) {
		e.preventDefault();
		const name = form.name.trim();
		const email = form.email.trim();
		const message = form.message.trim();
		if (!name || !email || !message) {
			toast.error("Por favor, preencha todos os campos obrigatórios.");
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			toast.error("Informe um e-mail corporativo válido.");
			return;
		}
		const text = `Olá, vim pelo site da Evolves!\n\nNome: ${name}\nE-mail: ${email}\nAssunto: ${form.subject}\n\nMensagem:\n${message}`;
		const url = `https://wa.me/5513981326869?text=${encodeURIComponent(text)}`;
		window.open(url, "_blank");
		toast.success("Abrindo WhatsApp para enviar a proposta diretamente.");
	}
	const field = "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		"aria-labelledby": "contact-heading",
		className: "border-t border-border/60 bg-surface/30 py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-mono uppercase tracking-widest text-primary",
						children: t.contact.eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
						id: "contact-heading",
						className: "mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-5xl text-foreground",
						children: t.contact.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base text-muted-foreground sm:text-lg",
						children: t.contact.description
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-8 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-6 shadow-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 text-primary mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-mono uppercase tracking-wider text-muted-foreground",
										children: "E-mail Corporativo"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:contato@evolvestecnologia.com.br",
									className: "text-base font-semibold text-foreground hover:text-primary transition-colors",
									children: "contato@evolvestecnologia.com.br"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Retorno formal em até 24h úteis."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-6 shadow-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 text-emerald-500 mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-mono uppercase tracking-wider text-muted-foreground",
										children: "WhatsApp Comercial"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://wa.me/5513981326869",
									target: "_blank",
									rel: "noreferrer",
									className: "text-base font-semibold text-foreground hover:text-emerald-500 transition-colors",
									children: "+55 (13) 98132-6869"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: "Atendimento direto com engenheiro de projetos."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border bg-card p-6 shadow-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 text-primary mb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-mono uppercase tracking-wider text-muted-foreground",
										children: t.footer.opsTitle
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm font-medium text-foreground",
									children: [
										"🇵🇹 ",
										t.footer.countryPT,
										" · 🇬🇧 ",
										t.footer.countryUK,
										" · 🇧🇷 ",
										t.footer.countryBR,
										" · 🇳🇿 ",
										t.footer.countryNZ
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted-foreground",
									children: t.footer.opsDesc
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "rounded-3xl border border-border bg-card p-8 md:col-span-7 shadow-xs space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "name",
							className: "block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2",
							children: t.contact.nameLabel
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "name",
							type: "text",
							required: true,
							value: form.name,
							onChange: (e) => setForm({
								...form,
								name: e.target.value
							}),
							placeholder: "Ex: Carlos Silva",
							className: field
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "email",
								className: "block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2",
								children: t.contact.emailLabel
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email",
								type: "email",
								required: true,
								value: form.email,
								onChange: (e) => setForm({
									...form,
									email: e.target.value
								}),
								placeholder: "carlos@empresa.com",
								className: field
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "subject",
								className: "block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2",
								children: t.contact.subjectLabel
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: "subject",
								value: form.subject,
								onChange: (e) => setForm({
									...form,
									subject: e.target.value
								}),
								className: field,
								children: subjects.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: s,
									children: s
								}, s))
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "message",
							className: "block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2",
							children: t.contact.messageLabel
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "message",
							rows: 4,
							required: true,
							value: form.message,
							onChange: (e) => setForm({
								...form,
								message: e.target.value
							}),
							placeholder: "Descreva o escopo, prazo desejado e requisitos...",
							className: field
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-3.5 text-sm font-medium text-background transition hover:opacity-90 shadow-sm cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.contact.submitButton }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							})]
						})
					]
				})]
			})]
		})
	});
}
//#endregion
export { Contact as t };
