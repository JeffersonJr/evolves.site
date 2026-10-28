import { r as __toESM } from "../_runtime.mjs";
import { o as performance_default } from "../_libs/h3+rou3+srvx+unenv.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { S as useRouter, W as redirect, _ as createFileRoute, d as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, q as notFound, u as Scripts, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as locationRewrite, i as isLocale, p as useLocale, r as htmlLang, s as localizedPath, t as CONTENT_DEFAULT_LOCALE } from "./ssr.mjs";
import { a as organizationSchema, l as siteUrl, n as breadcrumbSchema, o as pageHead, u as websiteSchema } from "./seo-L22duNSO.mjs";
import { t as Route$12 } from "../_categoria-DWC-W2nb.mjs";
import { i as useI18n, n as RegionProvider, t as I18nProvider } from "./I18nContext-DZ0CQ5_Q.mjs";
import { G as ArrowUpRight, K as ArrowRight, L as Cookie, h as RefreshCcw, i as Trophy, n as X, q as ArrowLeft, s as Sparkles, x as MessageCircle } from "../_libs/lucide-react.mjs";
import { t as Route$13 } from "../_slug-V6peNRLE.mjs";
import { t as Route$14 } from "../_slug-Dej0x3bG.mjs";
import { t as Route$15 } from "../_slug-BzIz6FB1.mjs";
import { t as Route$16 } from "../_termo-DfSXBFW_.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as SpeedInsights } from "../_libs/vercel__speed-insights.mjs";
import { t as Analytics } from "../_libs/vercel__analytics.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-fpLmGRct.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DqrhPEOx.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var STORAGE_KEY$1 = "lgpd_consent";
function LgpdModal() {
	const [show, setShow] = (0, import_react.useState)(false);
	const locale = useLocale();
	(0, import_react.useEffect)(() => {
		if (!localStorage.getItem(STORAGE_KEY$1)) {
			const timer = setTimeout(() => setShow(true), 2500);
			return () => clearTimeout(timer);
		}
	}, []);
	const accept = () => {
		localStorage.setItem(STORAGE_KEY$1, "accepted");
		setShow(false);
	};
	const decline = () => {
		localStorage.setItem(STORAGE_KEY$1, "declined");
		setShow(false);
	};
	if (!show) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-[300] w-[calc(100%-2rem)] max-w-xl animate-fade-up",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-start gap-4 rounded-2xl border border-border bg-card/95 px-5 py-4 backdrop-blur-xl sm:flex-row sm:items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cookie, { className: "h-5 w-5 text-primary shrink-0 mt-0.5 sm:mt-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground leading-relaxed flex-1",
					children: [
						"Usamos cookies para melhorar sua experiência.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/$locale/privacy",
							params: { locale },
							className: "text-primary font-medium underline underline-offset-2 hover:text-primary/80",
							children: "Saiba mais"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 shrink-0 w-full sm:w-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: decline,
						className: "cursor-pointer flex-1 sm:flex-none rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary",
						children: "Recusar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: accept,
						className: "cursor-pointer flex-1 sm:flex-none rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground transition-transform hover:scale-[1.02]",
						children: "Aceitar"
					})]
				})
			]
		})
	});
}
var WHATSAPP_NUMBER = "5513981326869";
var STORAGE_KEY = "evolves_exit_dismissed";
function ExitIntentModal() {
	const { t } = useI18n();
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const dismiss = (0, import_react.useCallback)(() => {
		setIsOpen(false);
		sessionStorage.setItem(STORAGE_KEY, "1");
	}, []);
	(0, import_react.useEffect)(() => {
		if (sessionStorage.getItem(STORAGE_KEY)) return;
		let triggered = false;
		const handleMouseLeave = (e) => {
			if (e.clientY <= 5 && !triggered) {
				triggered = true;
				setIsOpen(true);
			}
		};
		const timer = setTimeout(() => {
			document.addEventListener("mouseleave", handleMouseLeave);
		}, 3e3);
		return () => {
			clearTimeout(timer);
			document.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);
	const handleSubmit = (e) => {
		e.preventDefault();
		const text = `${formData.name}\n${formData.email}\n\n${formData.message}`;
		const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
		window.open(url, "_blank");
		setSubmitted(true);
		setTimeout(() => {
			dismiss();
			setFormData({
				name: "",
				email: "",
				message: ""
			});
			setSubmitted(false);
		}, 1800);
	};
	if (!isOpen) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "exit-modal-headline",
		className: "fixed inset-0 z-[200] flex items-end justify-center p-4 sm:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-black/40 backdrop-blur-md",
			onClick: dismiss,
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-xl animate-fade-up overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[0_32px_80px_rgba(0,0,0,0.28)] dark:shadow-[0_32px_80px_rgba(0,0,0,0.6)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[3px] w-full bg-gradient-to-r from-primary/0 via-primary to-primary/0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: dismiss,
					className: "absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-all hover:bg-secondary hover:text-foreground hover:rotate-90 cursor-pointer duration-200",
					"aria-label": "Fechar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-7 pb-7 pt-7 sm:px-9 sm:pb-9 sm:pt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
									className: "h-5 w-5",
									strokeWidth: 1.5
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] font-mono uppercase tracking-[0.2em] text-primary",
										children: t.exitModal.eyebrow
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										id: "exit-modal-headline",
										className: "mt-1 text-xl font-semibold tracking-tight text-foreground sm:text-2xl",
										children: t.exitModal.headline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
										children: t.exitModal.subtext
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-6 h-px bg-border/60" }),
						submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-3 py-8 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									className: "h-7 w-7",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 6 9 17l-5-5" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-foreground",
								children: "Mensagem enviada!"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "Em breve entraremos em contato."
							})] })]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "exit-name",
										required: true,
										value: formData.name,
										onChange: (e) => setFormData({
											...formData,
											name: e.target.value
										}),
										className: "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/15",
										placeholder: t.exitModal.namePlaceholder
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "exit-email",
										type: "email",
										required: true,
										value: formData.email,
										onChange: (e) => setFormData({
											...formData,
											email: e.target.value
										}),
										className: "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/15",
										placeholder: t.exitModal.emailPlaceholder
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "exit-msg",
									required: true,
									value: formData.message,
									onChange: (e) => setFormData({
										...formData,
										message: e.target.value
									}),
									rows: 3,
									className: "w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/15",
									placeholder: t.exitModal.messagePlaceholder
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										className: "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:opacity-90 active:scale-[0.98]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.exitModal.submitBtn }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: dismiss,
										className: "w-full cursor-pointer py-2 text-center text-xs text-muted-foreground transition-colors hover:text-foreground",
										children: t.exitModal.dismissBtn
									})]
								})
							]
						})
					]
				})
			]
		})]
	});
}
function EvoAvatar({ small = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-sm ${small ? "h-8 w-8" : "h-12 w-12"}`,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 40 40",
			className: small ? "h-6 w-6" : "h-9 w-9",
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M20 5v4",
					stroke: "currentColor",
					strokeWidth: "2",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "20",
					cy: "4",
					r: "2",
					fill: "currentColor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "8",
					y: "11",
					width: "24",
					height: "21",
					rx: "9",
					fill: "white",
					fillOpacity: ".96"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "15.5",
					cy: "20",
					r: "2",
					fill: "#3978D8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "24.5",
					cy: "20",
					r: "2",
					fill: "#3978D8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M15.5 25c1.2 1.4 2.7 2 4.5 2s3.3-.6 4.5-2",
					stroke: "#3978D8",
					strokeWidth: "1.8",
					strokeLinecap: "round"
				})
			]
		})
	});
}
function EvoAssistant() {
	const { t, language } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [stage, setStage] = (0, import_react.useState)("services");
	const [messages, setMessages] = (0, import_react.useState)([{
		from: "evo",
		text: t.assistant.initialGreeting
	}]);
	const [interest, setInterest] = (0, import_react.useState)("");
	const [otherDetail, setOtherDetail] = (0, import_react.useState)("");
	const [customDetail, setCustomDetail] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [nameDraft, setNameDraft] = (0, import_react.useState)("");
	const messagesEndRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (stage === "services" && messages.length <= 1) setMessages([{
			from: "evo",
			text: t.assistant.initialGreeting
		}]);
	}, [
		language,
		t.assistant.initialGreeting,
		stage,
		messages.length
	]);
	(0, import_react.useEffect)(() => {
		if (open) messagesEndRef.current?.scrollIntoView({ block: "end" });
	}, [
		messages,
		stage,
		open
	]);
	function answer(text) {
		setMessages((current) => [...current, {
			from: "visitor",
			text
		}]);
	}
	function chooseService(service) {
		setInterest(service);
		answer(service);
		const lastServiceIndex = t.assistant.services.length - 1;
		if (service === t.assistant.services[lastServiceIndex]) {
			setMessages((current) => [...current, {
				from: "evo",
				text: t.assistant.whichClosest
			}]);
			setStage("other");
			return;
		}
		setMessages((current) => [...current, {
			from: "evo",
			text: t.assistant.howToCallYou
		}]);
		setStage("name");
	}
	function chooseOther(option) {
		answer(option);
		const lastOptionIndex = t.assistant.otherOptions.length - 1;
		if (option === t.assistant.otherOptions[lastOptionIndex]) {
			setMessages((current) => [...current, {
				from: "evo",
				text: t.assistant.tellInFewWords
			}]);
			setStage("other-details");
			return;
		}
		setOtherDetail(option);
		setMessages((current) => [...current, {
			from: "evo",
			text: t.assistant.howToCallYou
		}]);
		setStage("name");
	}
	function submitCustomDetail(event) {
		event.preventDefault();
		const detail = customDetail.trim();
		if (!detail) return;
		setOtherDetail(detail);
		answer(detail);
		setMessages((current) => [...current, {
			from: "evo",
			text: t.assistant.thanksExplaining
		}]);
		setStage("name");
	}
	function submitName(event) {
		event.preventDefault();
		const firstName = nameDraft.trim().split(/\s+/)[0];
		if (!firstName) return;
		setName(firstName);
		answer(firstName);
		setMessages((current) => [...current, {
			from: "evo",
			text: `${t.assistant.pleasedMeeting}, ${firstName}! ${t.assistant.channelsPrompt}`
		}]);
		setStage("channels");
	}
	const fullInterest = otherDetail ? `${interest} — ${otherDetail}` : interest;
	const whatsappMessage = [
		t.assistant.whatsappIntro,
		"",
		`Nome: ${name}`,
		`Interesse / Scope: ${fullInterest}`,
		`Idioma: ${language}`
	].join("\n");
	const whatsappUrl = `https://wa.me/5513981326869?text=${encodeURIComponent(whatsappMessage)}`;
	function openContactForm() {
		const message = [
			t.assistant.whatsappIntro,
			`Interesse: ${fullInterest}`,
			""
		].join("\n");
		sessionStorage.setItem("evo-contact-prefill", JSON.stringify({
			name,
			subject: interest,
			message
		}));
		window.location.assign("/contact#contact");
	}
	function restart() {
		setMessages([{
			from: "evo",
			text: t.assistant.initialGreeting
		}]);
		setStage("services");
		setInterest("");
		setOtherDetail("");
		setCustomDetail("");
		setName("");
		setNameDraft("");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-5 right-5 z-[150]",
		children: [open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "absolute bottom-[4.5rem] right-0 flex h-[min(42rem,calc(100dvh-7.5rem))] w-[min(24rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-[0_20px_70px_-24px_rgba(15,23,42,.38)] backdrop-blur-2xl",
			"aria-label": t.assistant.agentTitle,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center gap-3 border-b border-border/70 px-4 py-3 bg-surface/50",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvoAvatar, { small: true }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: t.assistant.agentTitle
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: t.assistant.agentSub
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: restart,
						className: "rounded-full px-2.5 py-1 text-xs text-muted-foreground transition hover:bg-secondary hover:text-foreground cursor-pointer",
						children: t.assistant.restart
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen(false),
						"aria-label": t.assistant.close,
						className: "flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:bg-secondary hover:text-foreground cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-3 overflow-y-auto px-4 py-4",
				"aria-live": "polite",
				role: "log",
				children: [
					messages.map((message, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex items-end gap-2 ${message.from === "visitor" ? "justify-end" : "justify-start"}`,
						children: [message.from === "evo" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvoAvatar, { small: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${message.from === "evo" ? "rounded-bl-md bg-secondary text-foreground" : "rounded-br-md bg-primary text-primary-foreground font-medium"}`,
							children: message.text
						})]
					}, `${index}-${message.text}`)),
					stage === "services" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1.5 pt-2",
						children: t.assistant.services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => chooseService(service),
							className: "flex w-full items-center justify-between rounded-xl border border-border bg-card px-3.5 py-2.5 text-left text-xs font-medium text-foreground transition hover:border-primary/50 hover:bg-secondary/60 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: service }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 text-muted-foreground" })]
						}, service))
					}),
					stage === "other" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1.5 pt-2",
						children: t.assistant.otherOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => chooseOther(opt),
							className: "flex w-full items-center justify-between rounded-xl border border-border bg-card px-3.5 py-2.5 text-left text-xs font-medium text-foreground transition hover:border-primary/50 hover:bg-secondary/60 cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: opt }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 text-muted-foreground" })]
						}, opt))
					}),
					stage === "other-details" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
						onSubmit: submitCustomDetail,
						className: "pt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: customDetail,
								onChange: (e) => setCustomDetail(e.target.value),
								placeholder: t.assistant.placeholder,
								className: "flex-1 rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-none",
								autoFocus: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "rounded-xl bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:brightness-105 cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })
							})]
						})
					}),
					stage === "name" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
						onSubmit: submitName,
						className: "pt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: nameDraft,
								onChange: (e) => setNameDraft(e.target.value),
								placeholder: t.contact.nameLabel,
								className: "flex-1 rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-none",
								autoFocus: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "rounded-xl bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:brightness-105 cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })
							})]
						})
					}),
					stage === "channels" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-medium text-white transition hover:brightness-105 shadow-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.assistant.continueWhatsapp })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: openContactForm,
							className: "flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-medium text-foreground transition hover:bg-secondary cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.assistant.fillForm })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: messagesEndRef })
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((prev) => !prev),
			"aria-label": t.assistant.agentTitle,
			"aria-expanded": open,
			className: "relative flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-white shadow-[0_8px_28px_-12px_rgba(15,23,42,.45)] transition-transform hover:scale-105 dark:border-border dark:bg-card cursor-pointer",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvoAvatar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-emerald-500" })]
		})]
	});
}
var HS_KEY = "evolves-404-asteroids-hs";
var TWO_PI = Math.PI * 2;
var THRUST = 420;
var TURN = 4.2;
var FRICTION = .992;
var MAX_SPEED = 520;
var BULLET_SPEED = 560;
var BULLET_LIFE = .7;
var FIRE_COOLDOWN = .18;
var SHIP_R = 11;
function wrap(v, max) {
	if (v < 0) return v + max;
	if (v >= max) return v - max;
	return v;
}
function dist2(a, b) {
	const dx = a.x - b.x;
	const dy = a.y - b.y;
	return dx * dx + dy * dy;
}
function asteroidVerts(radius) {
	const n = 8 + Math.floor(Math.random() * 5);
	const verts = [];
	for (let i = 0; i < n; i++) {
		const a = i / n * TWO_PI;
		const r = radius * (.72 + Math.random() * .36);
		verts.push({
			x: Math.cos(a) * r,
			y: Math.sin(a) * r
		});
	}
	return verts;
}
function spawnAsteroid(w, h, size, around) {
	const radius = size === 3 ? 42 : size === 2 ? 24 : 13;
	let x;
	let y;
	if (around) {
		const a = Math.random() * TWO_PI;
		x = around.x + Math.cos(a) * 8;
		y = around.y + Math.sin(a) * 8;
	} else {
		x = Math.random() * w;
		y = Math.random() * h;
		const cx = w / 2;
		const cy = h / 2;
		if (Math.hypot(x - cx, y - cy) < 140) {
			x = wrap(cx + 180 + Math.random() * 80, w);
			y = wrap(cy + (Math.random() - .5) * 220, h);
		}
	}
	const speed = (size === 3 ? 38 : size === 2 ? 62 : 90) * (.7 + Math.random());
	const dir = Math.random() * TWO_PI;
	return {
		x,
		y,
		vx: Math.cos(dir) * speed,
		vy: Math.sin(dir) * speed,
		angle: Math.random() * TWO_PI,
		spin: (Math.random() - .5) * 1.4,
		radius,
		size,
		verts: asteroidVerts(radius)
	};
}
function makeShip(w, h, invulnUntil) {
	return {
		x: w / 2,
		y: h / 2,
		vx: 0,
		vy: 0,
		angle: 0,
		invulnUntil
	};
}
function readHighScore() {
	if (typeof window === "undefined") return 0;
	const n = Number(window.localStorage.getItem(HS_KEY));
	return Number.isFinite(n) ? n : 0;
}
function oklchToRgb(l, c, hDeg) {
	const hr = hDeg * Math.PI / 180;
	const a = c * Math.cos(hr);
	const b = c * Math.sin(hr);
	const l_ = l + .3963377774 * a + .2158037573 * b;
	const m_ = l - .1055613458 * a - .0638541728 * b;
	const s_ = l - .0894841775 * a - 1.291485548 * b;
	const lmsL = l_ * l_ * l_;
	const lmsM = m_ * m_ * m_;
	const lmsS = s_ * s_ * s_;
	const toSrgb = (x) => {
		const v = Math.min(1, Math.max(0, x));
		return v <= .0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - .055;
	};
	const r = toSrgb(4.0767416621 * lmsL - 3.3077115913 * lmsM + .2309699292 * lmsS);
	const g = toSrgb(-1.2684380046 * lmsL + 2.6097574011 * lmsM - .3413193965 * lmsS);
	const bl = toSrgb(-.0041960863 * lmsL - .7034186147 * lmsM + 1.707614701 * lmsS);
	return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(bl * 255)})`;
}
function resolveCssColor(value, fallback) {
	const m = value.trim().match(/^oklch\(\s*([\d.]+)(%?)\s+([\d.]+)\s+([\d.]+)/i);
	if (m) {
		let l = Number(m[1]);
		if (m[2] === "%") l /= 100;
		return oklchToRgb(l, Number(m[3]), Number(m[4]));
	}
	if (value.startsWith("rgb") || value.startsWith("#") || value.startsWith("hsl")) return value;
	return fallback;
}
function NotFoundGame() {
	const locale = useLocale();
	const canvasRef = (0, import_react.useRef)(null);
	const wrapRef = (0, import_react.useRef)(null);
	const primarySwatchRef = (0, import_react.useRef)(null);
	const paletteRef = (0, import_react.useRef)({
		fg: "#111111",
		bg: "#ffffff",
		primary: "#5b5bd6"
	});
	const rafRef = (0, import_react.useRef)(0);
	const lastRef = (0, import_react.useRef)(0);
	const fireAtRef = (0, import_react.useRef)(0);
	const keysRef = (0, import_react.useRef)({
		left: false,
		right: false,
		thrust: false,
		fire: false
	});
	const shipRef = (0, import_react.useRef)(null);
	const bulletsRef = (0, import_react.useRef)([]);
	const asteroidsRef = (0, import_react.useRef)([]);
	const particlesRef = (0, import_react.useRef)([]);
	const starsRef = (0, import_react.useRef)([]);
	const playingRef = (0, import_react.useRef)(false);
	const livesRef = (0, import_react.useRef)(3);
	const scoreRef = (0, import_react.useRef)(0);
	const waveRef = (0, import_react.useRef)(1);
	const sizeRef = (0, import_react.useRef)({
		w: 1,
		h: 1,
		dpr: 1
	});
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [gameOver, setGameOver] = (0, import_react.useState)(false);
	const [score, setScore] = (0, import_react.useState)(0);
	const [lives, setLives] = (0, import_react.useState)(3);
	const [highScore, setHighScore] = (0, import_react.useState)(0);
	const burst = (0, import_react.useCallback)((x, y, n, speed) => {
		for (let i = 0; i < n; i++) {
			const a = Math.random() * TWO_PI;
			const s = speed * (.35 + Math.random());
			const life = .25 + Math.random() * .45;
			particlesRef.current.push({
				x,
				y,
				vx: Math.cos(a) * s,
				vy: Math.sin(a) * s,
				life,
				maxLife: life
			});
		}
	}, []);
	const seedField = (0, import_react.useCallback)((w, h, count) => {
		asteroidsRef.current = [];
		for (let i = 0; i < count; i++) asteroidsRef.current.push(spawnAsteroid(w, h, 3));
	}, []);
	const endGame = (0, import_react.useCallback)(() => {
		playingRef.current = false;
		shipRef.current = null;
		keysRef.current = {
			left: false,
			right: false,
			thrust: false,
			fire: false
		};
		setPlaying(false);
		setGameOver(true);
		setHighScore((hs) => {
			const next = Math.max(hs, scoreRef.current);
			window.localStorage.setItem(HS_KEY, String(next));
			return next;
		});
	}, []);
	const startGame = (0, import_react.useCallback)(() => {
		const { w, h } = sizeRef.current;
		playingRef.current = true;
		scoreRef.current = 0;
		livesRef.current = 3;
		waveRef.current = 1;
		bulletsRef.current = [];
		particlesRef.current = [];
		shipRef.current = makeShip(w, h, performance_default.now() / 1e3 + 2);
		seedField(w, h, 4);
		lastRef.current = 0;
		fireAtRef.current = 0;
		setScore(0);
		setLives(3);
		setGameOver(false);
		setPlaying(true);
	}, [seedField]);
	(0, import_react.useEffect)(() => {
		setHighScore(readHighScore());
	}, []);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const wrap = wrapRef.current;
		if (!canvas || !wrap) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const refreshPalette = () => {
			const canvasCs = getComputedStyle(canvas);
			const swatch = primarySwatchRef.current;
			paletteRef.current = {
				fg: resolveCssColor(canvasCs.color, "#111111"),
				bg: resolveCssColor(canvasCs.backgroundColor, "#ffffff"),
				primary: resolveCssColor(swatch ? getComputedStyle(swatch).color : "", "#5b5bd6")
			};
		};
		const resize = () => {
			const rect = wrap.getBoundingClientRect();
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			sizeRef.current = {
				w: rect.width,
				h: rect.height,
				dpr
			};
			canvas.width = Math.max(1, Math.floor(rect.width * dpr));
			canvas.height = Math.max(1, Math.floor(rect.height * dpr));
			canvas.style.width = `${rect.width}px`;
			canvas.style.height = `${rect.height}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			const stars = [];
			const n = Math.floor(rect.width * rect.height / 14e3);
			for (let i = 0; i < n; i++) stars.push({
				x: Math.random() * rect.width,
				y: Math.random() * rect.height
			});
			starsRef.current = stars;
			refreshPalette();
			if (!playingRef.current && asteroidsRef.current.length === 0) seedField(rect.width, rect.height, 5);
		};
		resize();
		const ro = new ResizeObserver(resize);
		ro.observe(wrap);
		const themeObserver = new MutationObserver(refreshPalette);
		themeObserver.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class", "style"]
		});
		const drawWrapped = (x, y, r, w, h, draw) => {
			draw(x, y);
			if (x < r) draw(x + w, y);
			if (x > w - r) draw(x - w, y);
			if (y < r) draw(x, y + h);
			if (y > h - r) draw(x, y - h);
		};
		const loop = (nowMs) => {
			const now = nowMs / 1e3;
			if (!lastRef.current) lastRef.current = now;
			let dt = now - lastRef.current;
			lastRef.current = now;
			if (dt > .05) dt = .05;
			const { w, h } = sizeRef.current;
			const pal = paletteRef.current;
			const keys = keysRef.current;
			const ship = shipRef.current;
			const playingNow = playingRef.current;
			if (playingNow && ship) {
				if (keys.left) ship.angle -= TURN * dt;
				if (keys.right) ship.angle += TURN * dt;
				if (keys.thrust) {
					ship.vx += Math.sin(ship.angle) * THRUST * dt;
					ship.vy -= Math.cos(ship.angle) * THRUST * dt;
				}
				const speed = Math.hypot(ship.vx, ship.vy);
				if (speed > MAX_SPEED) {
					ship.vx = ship.vx / speed * MAX_SPEED;
					ship.vy = ship.vy / speed * MAX_SPEED;
				}
				ship.vx *= FRICTION;
				ship.vy *= FRICTION;
				ship.x = wrap(ship.x + ship.vx * dt, w);
				ship.y = wrap(ship.y + ship.vy * dt, h);
				if (keys.fire && now - fireAtRef.current > FIRE_COOLDOWN) {
					fireAtRef.current = now;
					const nx = Math.sin(ship.angle);
					const ny = -Math.cos(ship.angle);
					bulletsRef.current.push({
						x: ship.x + nx * 14,
						y: ship.y + ny * 14,
						vx: ship.vx + nx * BULLET_SPEED,
						vy: ship.vy + ny * BULLET_SPEED,
						life: BULLET_LIFE
					});
				}
			}
			const bullets = bulletsRef.current;
			for (let i = bullets.length - 1; i >= 0; i--) {
				const b = bullets[i];
				b.x = wrap(b.x + b.vx * dt, w);
				b.y = wrap(b.y + b.vy * dt, h);
				b.life -= dt;
				if (b.life <= 0) bullets.splice(i, 1);
			}
			const asteroids = asteroidsRef.current;
			for (const a of asteroids) {
				a.x = wrap(a.x + a.vx * dt, w);
				a.y = wrap(a.y + a.vy * dt, h);
				a.angle += a.spin * dt;
			}
			const particles = particlesRef.current;
			for (let i = particles.length - 1; i >= 0; i--) {
				const p = particles[i];
				p.x += p.vx * dt;
				p.y += p.vy * dt;
				p.life -= dt;
				if (p.life <= 0) particles.splice(i, 1);
			}
			if (playingNow && ship) {
				let scored = 0;
				for (let i = bullets.length - 1; i >= 0; i--) {
					const b = bullets[i];
					for (let j = asteroids.length - 1; j >= 0; j--) {
						const a = asteroids[j];
						if (dist2(b, a) < a.radius * a.radius) {
							bullets.splice(i, 1);
							asteroids.splice(j, 1);
							burst(a.x, a.y, 6 + a.size * 3, 80 + a.size * 30);
							scored += a.size === 3 ? 20 : a.size === 2 ? 50 : 100;
							if (a.size > 1) {
								const next = a.size - 1;
								asteroids.push(spawnAsteroid(w, h, next, a));
								asteroids.push(spawnAsteroid(w, h, next, a));
							}
							break;
						}
					}
				}
				if (scored) {
					scoreRef.current += scored;
					setScore(scoreRef.current);
				}
				if (asteroids.length === 0) {
					waveRef.current += 1;
					seedField(w, h, Math.min(4 + waveRef.current, 9));
				}
				if (now >= ship.invulnUntil) {
					for (const a of asteroids) if (dist2(ship, a) < (a.radius + SHIP_R) * (a.radius + SHIP_R)) {
						burst(ship.x, ship.y, 18, 160);
						livesRef.current -= 1;
						setLives(livesRef.current);
						if (livesRef.current <= 0) endGame();
						else shipRef.current = makeShip(w, h, now + 2.2);
						break;
					}
				}
			}
			ctx.fillStyle = pal.bg;
			ctx.fillRect(0, 0, w, h);
			ctx.fillStyle = pal.fg;
			ctx.globalAlpha = .22;
			for (const s of starsRef.current) ctx.fillRect(s.x, s.y, 1.2, 1.2);
			ctx.globalAlpha = 1;
			ctx.strokeStyle = pal.fg;
			ctx.lineWidth = 1.5;
			ctx.lineJoin = "round";
			for (const a of asteroids) drawWrapped(a.x, a.y, a.radius + 2, w, h, (ox, oy) => {
				ctx.beginPath();
				a.verts.forEach((v, i) => {
					const c = Math.cos(a.angle);
					const s = Math.sin(a.angle);
					const px = ox + v.x * c - v.y * s;
					const py = oy + v.x * s + v.y * c;
					if (i === 0) ctx.moveTo(px, py);
					else ctx.lineTo(px, py);
				});
				ctx.closePath();
				ctx.stroke();
			});
			ctx.fillStyle = pal.primary;
			for (const b of bullets) {
				ctx.globalAlpha = Math.min(1, b.life / .15);
				ctx.beginPath();
				ctx.arc(b.x, b.y, 1.8, 0, TWO_PI);
				ctx.fill();
			}
			ctx.globalAlpha = 1;
			ctx.fillStyle = pal.fg;
			for (const p of particles) {
				ctx.globalAlpha = p.life / p.maxLife;
				ctx.fillRect(p.x, p.y, 1.5, 1.5);
			}
			ctx.globalAlpha = 1;
			const liveShip = shipRef.current;
			if (playingNow && liveShip) {
				if (!(now < liveShip.invulnUntil && Math.floor(now * 12) % 2 === 0)) {
					ctx.strokeStyle = pal.primary;
					ctx.lineWidth = 1.5;
					const drawShip = (ox, oy) => {
						const c = Math.cos(liveShip.angle);
						const s = Math.sin(liveShip.angle);
						const tip = {
							x: 0,
							y: -14
						};
						const left = {
							x: -9,
							y: 10
						};
						const right = {
							x: 9,
							y: 10
						};
						const rot = (p) => ({
							x: ox + p.x * c - p.y * s,
							y: oy + p.x * s + p.y * c
						});
						const t = rot(tip);
						const l = rot(left);
						const r = rot(right);
						ctx.beginPath();
						ctx.moveTo(t.x, t.y);
						ctx.lineTo(l.x, l.y);
						ctx.lineTo(r.x, r.y);
						ctx.closePath();
						ctx.stroke();
						if (keys.thrust) {
							const flame = rot({
								x: 0,
								y: 16 + Math.random() * 5
							});
							ctx.beginPath();
							ctx.moveTo(rot({
								x: -4,
								y: 10
							}).x, rot({
								x: -4,
								y: 10
							}).y);
							ctx.lineTo(flame.x, flame.y);
							ctx.lineTo(rot({
								x: 4,
								y: 10
							}).x, rot({
								x: 4,
								y: 10
							}).y);
							ctx.stroke();
						}
					};
					drawWrapped(liveShip.x, liveShip.y, 18, w, h, drawShip);
				}
			}
			rafRef.current = requestAnimationFrame(loop);
		};
		rafRef.current = requestAnimationFrame(loop);
		return () => {
			cancelAnimationFrame(rafRef.current);
			ro.disconnect();
			themeObserver.disconnect();
		};
	}, [
		burst,
		endGame,
		seedField
	]);
	(0, import_react.useEffect)(() => {
		const mapKey = (code, down) => {
			const keys = keysRef.current;
			if (code === "ArrowLeft" || code === "KeyA") keys.left = down;
			else if (code === "ArrowRight" || code === "KeyD") keys.right = down;
			else if (code === "ArrowUp" || code === "KeyW") keys.thrust = down;
			else if (code === "Space") keys.fire = down;
		};
		const onDown = (e) => {
			if ([
				"ArrowLeft",
				"ArrowRight",
				"ArrowUp",
				"ArrowDown",
				"Space"
			].includes(e.code)) e.preventDefault();
			if (e.code === "Space" && !playingRef.current) {
				startGame();
				return;
			}
			mapKey(e.code, true);
		};
		const onUp = (e) => mapKey(e.code, false);
		const onBlur = () => {
			keysRef.current = {
				left: false,
				right: false,
				thrust: false,
				fire: false
			};
		};
		window.addEventListener("keydown", onDown);
		window.addEventListener("keyup", onUp);
		window.addEventListener("blur", onBlur);
		return () => {
			window.removeEventListener("keydown", onDown);
			window.removeEventListener("keyup", onUp);
			window.removeEventListener("blur", onBlur);
		};
	}, [startGame]);
	const hold = (key, pressed) => {
		keysRef.current[key] = pressed;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-screen flex-col overflow-hidden bg-background select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-0 left-0 right-0 z-50 flex h-20 items-center px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/$locale/",
					params: { locale },
					className: "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Voltar para a Home"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: wrapRef,
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					ref: primarySwatchRef,
					className: "sr-only text-primary"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
					ref: canvasRef,
					className: "block h-full w-full bg-background text-foreground"
				})]
			}),
			playing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute top-24 left-6 right-6 z-40 flex items-start justify-between font-mono text-sm tracking-widest text-foreground/80",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase text-muted-foreground",
					children: "Score"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xl tabular-nums text-primary",
					children: score
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2 pt-5",
					"aria-label": `${lives} vidas`,
					children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `inline-block h-0 w-0 border-x-[5px] border-b-[10px] border-x-transparent ${i < lives ? "border-b-primary" : "border-b-border"}` }, i))
				})]
			}),
			!playing && !gameOver && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mb-4 text-8xl font-bold tracking-tighter text-primary sm:text-9xl",
							children: "404"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-3 text-2xl font-bold sm:text-3xl",
							children: "Página perdida no espaço"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-muted-foreground leading-relaxed",
							children: "Este endereço não existe. Enquanto isso, um asteroids mínimo."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-10 font-mono text-xs uppercase tracking-widest text-muted-foreground/80",
							children: "← → girar · ↑ acelerar · espaço atirar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: startGame,
							className: "inline-flex items-center rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:scale-105 hover:bg-primary/90",
							children: "Jogar"
						})
					]
				})
			}),
			gameOver && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full max-w-md rounded-3xl border border-border bg-background/70 p-10 text-center shadow-[var(--shadow-card)] backdrop-blur-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mb-2 text-3xl font-bold",
							children: "Nave destruída"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-8 text-muted-foreground",
							children: "Os asteroides ficaram com a rota."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-10 flex items-center justify-center gap-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-1 text-sm font-medium text-muted-foreground",
									children: "Pontuação"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-5xl font-bold text-primary",
									children: score
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 w-px bg-border" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mb-1 flex items-center justify-center gap-1 text-sm font-medium text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "h-4 w-4 text-yellow-500" }), "Recorde"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-5xl font-bold",
									children: highScore
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center justify-center gap-4 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: startGame,
								className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90 sm:w-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCcw, { className: "h-4 w-4" }), "Jogar de novo"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/$locale/",
								params: { locale },
								className: "inline-flex w-full items-center justify-center rounded-full border border-input bg-background/50 px-8 py-3 text-sm font-medium transition-all hover:bg-accent sm:w-auto",
								children: "Voltar para o site"
							})]
						})
					]
				})
			}),
			playing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-6 z-40 flex items-end justify-between px-5 sm:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoldButton, {
						label: "Girar esquerda",
						onHold: (v) => hold("left", v),
						children: "←"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoldButton, {
						label: "Girar direita",
						onHold: (v) => hold("right", v),
						children: "→"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoldButton, {
						label: "Acelerar",
						onHold: (v) => hold("thrust", v),
						children: "↑"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HoldButton, {
						label: "Atirar",
						onHold: (v) => hold("fire", v),
						children: "●"
					})]
				})]
			})
		]
	});
}
function HoldButton({ label, onHold, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		className: "flex h-16 w-16 items-center justify-center rounded-full border border-border/80 bg-background/40 font-mono text-lg text-foreground/90 backdrop-blur-sm active:bg-primary/20",
		onPointerDown: (e) => {
			e.preventDefault();
			e.currentTarget.setPointerCapture(e.pointerId);
			onHold(true);
		},
		onPointerUp: () => onHold(false),
		onPointerCancel: () => onHold(false),
		children
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", {
		name: "robots",
		content: "noindex, follow"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotFoundGame, {})] });
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	const locale = useLocale();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		role: "alert",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/$locale/",
						params: { locale },
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Evolves® · Web Engineering & Cloud Infrastructure" },
			{
				name: "description",
				content: "Evolves: Engenharia web e infraestrutura cloud de alta performance. Desenvolvimento de sites, sistemas customizados, SEO técnico e hospedagem cloud para empresas B2B."
			},
			{
				name: "author",
				content: "Evolves Tecnologia"
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:site_name",
				content: "Evolves"
			},
			{
				property: "og:locale",
				content: "pt_BR"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@evolvestech"
			},
			{
				name: "theme-color",
				content: "#fbfbfd"
			}
		],
		links: [
			{
				rel: "dns-prefetch",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "dns-prefetch",
				href: "https://fonts.gstatic.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=optional",
				media: "print",
				onload: "this.media='all'"
			},
			{
				rel: "describedby",
				href: "/llms.txt",
				type: "text/plain"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: htmlLang(useLocale()),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TQZF3PXK');` } }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `(function(){try{var t=localStorage.getItem('evolves_theme');if(t==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();` } })
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("noscript", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				src: "https://www.googletagmanager.com/ns.html?id=GTM-TQZF3PXK",
				height: "0",
				width: "0",
				style: {
					display: "none",
					visibility: "hidden"
				}
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main-content",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground",
				children: "Pular para o conteúdo principal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "main-content",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpeedInsights, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Analytics, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I18nProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvoAssistant, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LgpdModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExitIntentModal, {})
		] }) })
	});
}
var Route$10 = createFileRoute("/")({ beforeLoad: () => {
	throw redirect({
		href: `/${CONTENT_DEFAULT_LOCALE}`,
		statusCode: 301
	});
} });
var $$splitComponentImporter$9 = () => import("../_locale-BXcAV58D.mjs");
var Route$9 = createFileRoute("/$locale")({
	beforeLoad: ({ params }) => {
		if (!isLocale(params.locale)) throw notFound();
	},
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("../_locale-CQM0Z6rT.mjs");
var Route$8 = createFileRoute("/$locale/")({
	head: ({ params }) => pageHead(params.locale, "home", [organizationSchema, websiteSchema]),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./about-8f994g1T.mjs");
var Route$7 = createFileRoute("/$locale/about")({
	head: ({ params }) => {
		const locale = params.locale;
		return pageHead(locale, "about", [{
			"@context": "https://schema.org",
			"@type": "AboutPage",
			name: "Sobre a Evolves® · Estúdio de Engenharia Digital",
			url: new URL(localizedPath(locale, "about"), siteUrl).href,
			about: organizationSchema
		}, breadcrumbSchema([{
			name: "Início",
			path: localizedPath(locale, "home")
		}, {
			name: "Sobre",
			path: localizedPath(locale, "about")
		}])]);
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./contact-CsY80ieb.mjs");
var Route$6 = createFileRoute("/$locale/contact")({
	head: ({ params }) => {
		const locale = params.locale;
		return pageHead(locale, "contact", [{
			"@context": "https://schema.org",
			"@type": "ContactPage",
			name: "Contato e propostas para projetos digitais",
			url: new URL(localizedPath(locale, "contact"), siteUrl).href,
			mainEntity: {
				"@type": "Organization",
				name: "Evolves Tecnologia",
				email: "contato@evolves.site",
				telephone: "+55-13-98132-6869"
			}
		}, breadcrumbSchema([{
			name: "Início",
			path: localizedPath(locale, "home")
		}, {
			name: "Contato",
			path: localizedPath(locale, "contact")
		}])]);
	},
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./cookies-DtYvxW0g.mjs");
var Route$5 = createFileRoute("/$locale/cookies")({
	head: ({ params }) => pageHead(params.locale, "cookies"),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./privacy-CmjMgn6a.mjs");
var Route$4 = createFileRoute("/$locale/privacy")({
	head: ({ params }) => pageHead(params.locale, "privacy"),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./services-G8Cs7nod.mjs");
var Route$3 = createFileRoute("/$locale/services")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./blog-B6Jl_KI1.mjs");
var Route$2 = createFileRoute("/$locale/blog/")({
	head: ({ params }) => {
		const locale = params.locale;
		const home = new URL(localizedPath(locale, "home"), siteUrl).href;
		const blog = new URL(localizedPath(locale, "blog"), siteUrl).href;
		return pageHead(locale, "blog", [{
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			name: "Blog Evolves",
			description: "Artigos de tecnologia, SEO, design, inteligência artificial e negócios digitais.",
			url: blog
		}, {
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [{
				"@type": "ListItem",
				position: 1,
				name: "Início",
				item: home
			}, {
				"@type": "ListItem",
				position: 2,
				name: "Blog",
				item: blog
			}]
		}]);
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./cases-U8SnSaIB.mjs");
var Route$1 = createFileRoute("/$locale/cases/")({
	head: ({ params }) => {
		const locale = params.locale;
		return pageHead(locale, "cases", [{
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			name: "Cases da Evolves",
			description: "Projetos de sites, sistemas e branding com desafios, soluções e resultados.",
			url: new URL(localizedPath(locale, "cases"), siteUrl).href
		}, breadcrumbSchema([{
			name: "Início",
			path: localizedPath(locale, "home")
		}, {
			name: "Cases",
			path: localizedPath(locale, "cases")
		}])]);
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services-CpugwMJn2.mjs");
var Route = createFileRoute("/$locale/services/")({
	head: ({ params }) => {
		const locale = params.locale;
		return pageHead(locale, "services", [{
			"@context": "https://schema.org",
			"@type": "CollectionPage",
			name: "Serviços da Evolves",
			description: "Criação de sites, sistemas customizados, SEO técnico, hospedagem cloud, branding B2B, UX/UI e soluções digitais para empresas.",
			url: new URL(localizedPath(locale, "services"), siteUrl).href
		}, breadcrumbSchema([{
			name: "Início",
			path: localizedPath(locale, "home")
		}, {
			name: "Serviços",
			path: localizedPath(locale, "services")
		}])]);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var LocaleRoute = Route$9.update({
	id: "/$locale",
	path: "/$locale",
	getParentRoute: () => Route$11
});
var LocaleIndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => LocaleRoute
});
var LocaleAboutRoute = Route$7.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => LocaleRoute
});
var LocaleContactRoute = Route$6.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => LocaleRoute
});
var LocaleCookiesRoute = Route$5.update({
	id: "/cookies",
	path: "/cookies",
	getParentRoute: () => LocaleRoute
});
var LocalePrivacyRoute = Route$4.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => LocaleRoute
});
var LocaleServicesRoute = Route$3.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => LocaleRoute
});
var LocaleBlogIndexRoute = Route$2.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => LocaleRoute
});
var LocaleBlogSlugRoute = Route$14.update({
	id: "/blog/$slug",
	path: "/blog/$slug",
	getParentRoute: () => LocaleRoute
});
var LocaleCasesIndexRoute = Route$1.update({
	id: "/cases/",
	path: "/cases/",
	getParentRoute: () => LocaleRoute
});
var LocaleCasesSlugRoute = Route$13.update({
	id: "/cases/$slug",
	path: "/cases/$slug",
	getParentRoute: () => LocaleRoute
});
var LocaleServicesIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => LocaleServicesRoute
});
var LocaleServicesSlugRoute = Route$15.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => LocaleServicesRoute
});
var LocaleBlogBuscaTermoRoute = Route$16.update({
	id: "/blog/busca/$termo",
	path: "/blog/busca/$termo",
	getParentRoute: () => LocaleRoute
});
var LocaleBlogCategoriaCategoriaRoute = Route$12.update({
	id: "/blog/categoria/$categoria",
	path: "/blog/categoria/$categoria",
	getParentRoute: () => LocaleRoute
});
var LocaleServicesRouteChildren = {
	LocaleServicesSlugRoute,
	LocaleServicesIndexRoute
};
var LocaleRouteChildren = {
	LocaleAboutRoute,
	LocaleContactRoute,
	LocaleCookiesRoute,
	LocalePrivacyRoute,
	LocaleServicesRoute: LocaleServicesRoute._addFileChildren(LocaleServicesRouteChildren),
	LocaleIndexRoute,
	LocaleBlogSlugRoute,
	LocaleCasesSlugRoute,
	LocaleBlogIndexRoute,
	LocaleCasesIndexRoute,
	LocaleBlogBuscaTermoRoute,
	LocaleBlogCategoriaCategoriaRoute
};
var rootRouteChildren = {
	IndexRoute,
	LocaleRoute: LocaleRoute._addFileChildren(LocaleRouteChildren)
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		trailingSlash: "never",
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
		rewrite: locationRewrite
	});
};
//#endregion
export { getRouter };
