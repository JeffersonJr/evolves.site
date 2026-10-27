import { n as __toESM } from "../_runtime.mjs";
import { s as performance_default } from "../_libs/h3+rou3+srvx+unenv.mjs";
import { a as pageHead, c as siteUrl, i as organizationSchema, l as websiteSchema, n as breadcrumbSchema } from "./seo-CfNvlcX9.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$10 } from "../_categoria-BzYpYOt4.mjs";
import { n as RegionProvider, r as useI18n, t as I18nProvider } from "./I18nContext-CciqnXLk.mjs";
import { J as ArrowUpRight, K as Bug, R as Cookie, S as MessageCircle, X as ArrowLeft, Y as ArrowRight, c as Skull, g as RefreshCcw, i as Trophy, m as Rocket, n as X, q as Bot } from "../_libs/lucide-react.mjs";
import { t as Route$11 } from "../_slug-BSEd0_jp.mjs";
import { t as Route$12 } from "../_slug-Dt9CGNwa.mjs";
import { t as Route$13 } from "../_slug-7d5onBJA.mjs";
import { t as Route$14 } from "../_termo-KPa9wJW8.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-bliKtqMi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BxxanLsQ.css";
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
	(0, import_react.useEffect)(() => {
		if (!localStorage.getItem(STORAGE_KEY$1)) {
			const timer = setTimeout(() => setShow(true), 800);
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
							to: "/privacy",
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
			className: "absolute inset-0 bg-foreground/20 backdrop-blur-sm",
			onClick: dismiss,
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-lg animate-fade-up overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: dismiss,
					className: "absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground cursor-pointer",
					"aria-label": "Fechar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-8 pb-8 pt-8 sm:px-10 sm:pb-10 sm:pt-9",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-mono uppercase tracking-widest text-primary",
							children: t.exitModal.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "exit-modal-headline",
							className: "mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
							children: t.exitModal.headline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: t.exitModal.subtext
						}),
						submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col items-center gap-3 py-6 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									className: "h-6 w-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 6 9 17l-5-5" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-foreground",
								children: "Mensagem enviada com sucesso!"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "mt-7 space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-col gap-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "exit-name",
											required: true,
											value: formData.name,
											onChange: (e) => setFormData({
												...formData,
												name: e.target.value
											}),
											className: "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20",
											placeholder: t.exitModal.namePlaceholder
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-col gap-1",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "exit-email",
											type: "email",
											required: true,
											value: formData.email,
											onChange: (e) => setFormData({
												...formData,
												email: e.target.value
											}),
											className: "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20",
											placeholder: t.exitModal.emailPlaceholder
										})
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
									className: "w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20",
									placeholder: t.exitModal.messagePlaceholder
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-2 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										className: "inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:opacity-90",
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
function NotFoundGame() {
	const [renderTick, setRenderTick] = (0, import_react.useState)(0);
	const gameState = (0, import_react.useRef)({
		playerX: 50,
		enemies: [],
		projectiles: [],
		score: 0,
		isPlaying: false,
		gameOver: false,
		highScore: 0
	});
	const requestRef = (0, import_react.useRef)(0);
	const lastTimeRef = (0, import_react.useRef)(0);
	const containerRef = (0, import_react.useRef)(null);
	const PLAYER_WIDTH = 12;
	const ENEMY_SIZE = 8;
	const PROJECTILE_SPEED = .08;
	const ENEMY_PROJECTILE_SPEED = .05;
	const startGame = (0, import_react.useCallback)(() => {
		gameState.current.isPlaying = true;
		gameState.current.gameOver = false;
		gameState.current.score = 0;
		gameState.current.enemies = [];
		gameState.current.projectiles = [];
		gameState.current.playerX = 50;
		lastTimeRef.current = 0;
		setRenderTick((t) => t + 1);
		if (requestRef.current) cancelAnimationFrame(requestRef.current);
		requestRef.current = requestAnimationFrame(gameLoop);
	}, []);
	const stopGame = (0, import_react.useCallback)(() => {
		gameState.current.isPlaying = false;
		gameState.current.gameOver = true;
		if (gameState.current.score > gameState.current.highScore) gameState.current.highScore = gameState.current.score;
		cancelAnimationFrame(requestRef.current);
		setRenderTick((t) => t + 1);
	}, []);
	const lastFireTimeRef = (0, import_react.useRef)(0);
	const fireProjectile = (0, import_react.useCallback)(() => {
		if (!gameState.current.isPlaying || gameState.current.gameOver) return;
		const now = performance_default.now();
		if (now - lastFireTimeRef.current < 200) return;
		lastFireTimeRef.current = now;
		gameState.current.projectiles.push({
			id: Math.random(),
			x: gameState.current.playerX,
			y: 85,
			isEnemy: false
		});
	}, []);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (e.code === "Space") {
				e.preventDefault();
				fireProjectile();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [fireProjectile]);
	const handlePointerDown = (0, import_react.useCallback)((e) => {
		if (!gameState.current.isPlaying || gameState.current.gameOver) return;
		if (e.target.tagName.toLowerCase() === "button") return;
		fireProjectile();
	}, [fireProjectile]);
	const handlePointerMove = (0, import_react.useCallback)((e) => {
		if (!gameState.current.isPlaying || gameState.current.gameOver || !containerRef.current) return;
		e.preventDefault();
		const rect = containerRef.current.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width * 100;
		gameState.current.playerX = Math.max(PLAYER_WIDTH / 2, Math.min(100 - PLAYER_WIDTH / 2, x));
	}, []);
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		if (container) {
			container.addEventListener("pointermove", handlePointerMove, { passive: false });
			container.addEventListener("pointerdown", handlePointerDown);
		}
		return () => {
			if (container) {
				container.removeEventListener("pointermove", handlePointerMove);
				container.removeEventListener("pointerdown", handlePointerDown);
			}
		};
	}, [handlePointerMove, handlePointerDown]);
	const gameLoop = (0, import_react.useCallback)((time) => {
		if (!gameState.current.isPlaying) return;
		if (lastTimeRef.current === 0) lastTimeRef.current = time;
		const deltaTime = time - lastTimeRef.current;
		lastTimeRef.current = time;
		const state = gameState.current;
		let isGameOver = false;
		let scoreToAdd = 0;
		const spawnRate = Math.max(400, 1500 - state.score * 20);
		if (Math.random() < deltaTime / spawnRate) {
			let type = "bug";
			let hp = 1;
			let rand = Math.random();
			if (state.score > 300 && rand > .85) {
				type = "boss";
				hp = 3;
			} else if (state.score > 100 && rand > .6) type = "drone";
			const initialX = Math.random() * 90 + 5;
			state.enemies.push({
				id: Math.random(),
				type,
				initialX,
				x: initialX,
				y: -10,
				speed: Math.random() * .02 + .015 + state.score * 3e-4,
				rotation: type === "bug" ? Math.random() * 360 : 0,
				hp,
				lastShotTime: time,
				flashEndTime: 0
			});
		}
		for (let i = state.projectiles.length - 1; i >= 0; i--) {
			const p = state.projectiles[i];
			p.y = p.isEnemy ? p.y + ENEMY_PROJECTILE_SPEED * deltaTime : p.y - PROJECTILE_SPEED * deltaTime;
			if (p.y < -10 || p.y > 110) state.projectiles.splice(i, 1);
		}
		for (let i = state.enemies.length - 1; i >= 0; i--) {
			const e = state.enemies[i];
			if (e.type === "bug") {
				e.y += e.speed * deltaTime;
				e.rotation += 1;
			} else if (e.type === "drone") {
				e.y += e.speed * 1.5 * deltaTime;
				e.x = e.initialX + Math.sin(time / 200) * 15;
			} else if (e.type === "boss") {
				e.y += e.speed * .5 * deltaTime;
				if (time - e.lastShotTime > 1500 && e.y > 0 && e.y < 80) {
					state.projectiles.push({
						id: Math.random(),
						x: e.x,
						y: e.y + 5,
						isEnemy: true
					});
					e.lastShotTime = time;
				}
			}
			if (e.y > 80 && e.y < 95) {
				const hitRadius = e.type === "boss" ? ENEMY_SIZE * 1.5 : ENEMY_SIZE;
				if (Math.abs(e.x - state.playerX) < PLAYER_WIDTH / 2 + hitRadius / 2) isGameOver = true;
			}
			if (e.y > 110) state.enemies.splice(i, 1);
		}
		for (let i = state.projectiles.length - 1; i >= 0; i--) {
			const proj = state.projectiles[i];
			let projDestroyed = false;
			if (proj.isEnemy) {
				if (proj.y > 80 && proj.y < 95) {
					if (Math.abs(proj.x - state.playerX) < PLAYER_WIDTH / 2) {
						isGameOver = true;
						projDestroyed = true;
					}
				}
			} else for (let j = state.enemies.length - 1; j >= 0; j--) {
				const enemy = state.enemies[j];
				const hitRadius = enemy.type === "boss" ? ENEMY_SIZE * 1.5 : ENEMY_SIZE;
				if (Math.abs(proj.x - enemy.x) < hitRadius && Math.abs(proj.y - enemy.y) < hitRadius) {
					projDestroyed = true;
					enemy.hp -= 1;
					enemy.flashEndTime = time + 100;
					if (enemy.hp <= 0) {
						state.enemies.splice(j, 1);
						if (enemy.type === "boss") scoreToAdd += 50;
						else if (enemy.type === "drone") scoreToAdd += 20;
						else scoreToAdd += 10;
					}
					break;
				}
			}
			if (projDestroyed) state.projectiles.splice(i, 1);
		}
		if (scoreToAdd > 0) state.score += scoreToAdd;
		if (isGameOver) {
			stopGame();
			return;
		}
		setRenderTick((t) => t + 1);
		requestRef.current = requestAnimationFrame(gameLoop);
	}, [stopGame]);
	(0, import_react.useEffect)(() => {
		return () => {
			if (requestRef.current) cancelAnimationFrame(requestRef.current);
		};
	}, []);
	const renderEnemy = (enemy, time) => {
		const isFlashing = enemy.flashEndTime > time;
		const baseClass = "absolute will-change-transform flex items-center justify-center transition-all duration-75";
		let content = null;
		let scale = 1;
		if (enemy.type === "bug") content = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `p-3 rounded-xl border transition-colors duration-75 ${isFlashing ? "bg-white text-destructive border-white" : "bg-destructive/10 text-destructive border-destructive/30"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bug, { className: "w-8 h-8" })
		});
		else if (enemy.type === "drone") content = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `p-3 rounded-full border transition-colors duration-75 ${isFlashing ? "bg-white text-purple-500 border-white" : "bg-purple-500/20 text-purple-500 border-purple-500/40"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bot, { className: "w-8 h-8" })
		});
		else if (enemy.type === "boss") {
			scale = 1.5;
			content = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `p-4 rounded-2xl border transition-colors duration-75 ${isFlashing ? "bg-white text-orange-500 border-white" : "bg-orange-500/20 text-orange-500 border-orange-500/40"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skull, { className: "w-10 h-10" })
			});
		}
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: baseClass,
			style: {
				left: `${enemy.x}%`,
				top: `${enemy.y}%`,
				transform: `translate(-50%, -50%) rotate(${enemy.rotation}deg) scale(${scale})`
			},
			children: content
		}, enemy.id);
	};
	const { isPlaying, gameOver, score, highScore, projectiles, enemies, playerX } = gameState.current;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background relative overflow-hidden select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-sm z-50 border-b border-border flex items-center px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Voltar para a Home"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 flex flex-col items-center justify-center pt-20 px-4 relative z-10",
				children: [
					!isPlaying && !gameOver && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-2xl animate-fade-up",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-8xl sm:text-9xl font-bold tracking-tighter text-primary mb-6 drop-shadow-2xl",
								children: "404"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl sm:text-4xl font-bold mb-4",
								children: "Invasão Crítica no Sistema"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg text-muted-foreground mb-12 leading-relaxed",
								children: "O ciberespaço está sob ataque! Toque na tela ou aperte ESPAÇO para atirar. Arraste para mover a nave e limpe a rede."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: startGame,
								className: "inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 shadow-xl shadow-primary/25",
								children: "Iniciar Missão"
							})
						]
					}),
					gameOver && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center z-50 bg-card/80 backdrop-blur-xl p-10 rounded-4xl border border-border shadow-[var(--shadow-card)] animate-scale-in pointer-events-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-4xl font-bold text-destructive mb-2",
								children: "Sistema Corrompido!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mb-8",
								children: "A nave não suportou os danos."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-center gap-8 mb-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted-foreground font-medium mb-1",
											children: "Pontuação Final"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-5xl font-bold text-primary",
											children: score
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-16 bg-border" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted-foreground font-medium mb-1 flex items-center justify-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trophy, { className: "w-4 h-4 text-yellow-500" }), "Recorde"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-5xl font-bold",
											children: highScore
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col sm:flex-row items-center justify-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: startGame,
									className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCcw, { className: "w-4 h-4" }), "Tentar novamente"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/",
									className: "w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur-sm px-8 py-3 text-sm font-medium text-foreground transition-all hover:bg-accent hover:text-accent-foreground",
									children: "Voltar para o site"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: containerRef,
						className: `absolute inset-x-0 bottom-0 top-20 overflow-hidden cursor-crosshair touch-none ${isPlaying || gameOver ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-500`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-0 bg-background overflow-hidden -z-20 pointer-events-none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-50 animate-slide-down" })]
							}),
							isPlaying && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-6 right-6 z-40 bg-card/80 backdrop-blur-md border border-border px-6 py-3 rounded-full shadow-[var(--shadow-soft)] flex items-center gap-4 font-bold text-xl pointer-events-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Score: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: score
								})] })
							}),
							projectiles.map((proj) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `absolute w-2 h-8 rounded-full will-change-transform pointer-events-none ${proj.isEnemy ? "bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)]" : "bg-primary shadow-[0_0_15px_rgba(var(--primary),0.8)]"}`,
								style: {
									left: `${proj.x}%`,
									top: `${proj.y}%`,
									transform: `translate(-50%, -50%)`
								}
							}, proj.id)),
							enemies.map((e) => renderEnemy(e, performance_default.now())),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-8 will-change-transform pointer-events-none",
								style: {
									left: `${playerX}%`,
									transform: "translateX(-50%)"
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex flex-col items-center justify-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-primary bg-primary/10 p-3 rounded-full border border-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.2)] backdrop-blur-sm z-10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "w-10 h-10 -rotate-45" })
									}), isPlaying && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-4 h-12 bg-gradient-to-t from-transparent via-orange-500 to-yellow-300 blur-sm rounded-full absolute -bottom-8 animate-pulse" })]
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: `
        @keyframes slide-down {
          from { background-position: 0 0; }
          to { background-position: 0 1000px; }
        }
        .animate-slide-down {
          animation: slide-down 20s linear infinite;
        }
      ` } })
		]
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
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
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
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Evolves® · Web Engineering & Cloud Infrastructure" },
			{
				name: "author",
				content: "Evolves Tecnologia"
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
				name: "twitter:card",
				content: "summary_large_image"
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
		lang: "pt-BR",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `(function(){try{var t=localStorage.getItem('evolves_theme');if(t==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();` } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
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
var $$splitComponentImporter$8 = () => import("./services-C5swur1F.mjs");
var Route$8 = createFileRoute("/services")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./privacy-kmpoWtj8.mjs");
var Route$7 = createFileRoute("/privacy")({
	head: () => pageHead("/privacy"),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./cookies-B_PJargY.mjs");
var Route$6 = createFileRoute("/cookies")({
	head: () => pageHead("/cookies"),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./contact-HBvv14zS.mjs");
var Route$5 = createFileRoute("/contact")({
	head: () => pageHead("/contact", [{
		"@context": "https://schema.org",
		"@type": "ContactPage",
		name: "Contato e propostas para projetos digitais",
		url: new URL("/contact", siteUrl).href,
		mainEntity: {
			"@type": "Organization",
			name: "Evolves Tecnologia",
			email: "contato@evolves.site",
			telephone: "+55-13-98132-6869"
		}
	}, breadcrumbSchema([{
		name: "Início",
		path: "/"
	}, {
		name: "Contato",
		path: "/contact"
	}])]),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./about-CmOlcJnl.mjs");
var Route$4 = createFileRoute("/about")({
	head: () => pageHead("/about", [{
		"@context": "https://schema.org",
		"@type": "AboutPage",
		name: "Sobre a Evolves® · Estúdio de Engenharia Digital",
		url: new URL("/about", siteUrl).href,
		about: organizationSchema
	}, breadcrumbSchema([{
		name: "Início",
		path: "/"
	}, {
		name: "Sobre",
		path: "/about"
	}])]),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./routes-AiffWFzz.mjs");
var Route$3 = createFileRoute("/")({
	head: () => pageHead("/", [organizationSchema, websiteSchema], {
		title: "Evolves® · Engenharia Digital & Plataformas Web de Alta Performance",
		description: "Estúdio de desenvolvimento de websites corporativos, landing pages de alta conversão e infraestrutura em nuvem de alta velocidade para empresas na Europa e no Brasil."
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./services-sBbhUSnP.mjs");
var Route$2 = createFileRoute("/services/")({
	head: () => pageHead("/services", [{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Serviços da Evolves",
		description: "Criação de sites, sistemas customizados, SEO técnico, hospedagem cloud, branding B2B, UX/UI e soluções digitais para empresas.",
		url: new URL("/services", siteUrl).href
	}, breadcrumbSchema([{
		name: "Início",
		path: "/"
	}, {
		name: "Serviços",
		path: "/services"
	}])]),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./cases-IGNJzZ3h.mjs");
var Route$1 = createFileRoute("/cases/")({
	head: () => pageHead("/cases", [{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Cases da Evolves",
		description: "Projetos de sites, sistemas e branding com desafios, soluções e resultados.",
		url: new URL("/cases", siteUrl).href
	}, breadcrumbSchema([{
		name: "Início",
		path: "/"
	}, {
		name: "Cases",
		path: "/cases"
	}])]),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./blog-vPOQm21j.mjs");
var Route = createFileRoute("/blog/")({
	head: () => pageHead("/blog", [{
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Blog Evolves",
		description: "Artigos de tecnologia, SEO, design, inteligência artificial e negócios digitais.",
		url: new URL("/blog", siteUrl).href
	}, {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [{
			"@type": "ListItem",
			position: 1,
			name: "Início",
			item: new URL("/", siteUrl).href
		}, {
			"@type": "ListItem",
			position: 2,
			name: "Blog",
			item: new URL("/blog", siteUrl).href
		}]
	}]),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ServicesRoute = Route$8.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$9
});
var PrivacyRoute = Route$7.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$9
});
var CookiesRoute = Route$6.update({
	id: "/cookies",
	path: "/cookies",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$5.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$4.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var IndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var ServicesIndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => ServicesRoute
});
var CasesIndexRoute = Route$1.update({
	id: "/cases/",
	path: "/cases/",
	getParentRoute: () => Route$9
});
var BlogIndexRoute = Route.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$9
});
var ServicesSlugRoute = Route$12.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ServicesRoute
});
var CasesSlugRoute = Route$13.update({
	id: "/cases/$slug",
	path: "/cases/$slug",
	getParentRoute: () => Route$9
});
var BlogSlugRoute = Route$11.update({
	id: "/blog/$slug",
	path: "/blog/$slug",
	getParentRoute: () => Route$9
});
var BlogCategoriaCategoriaRoute = Route$10.update({
	id: "/blog/categoria/$categoria",
	path: "/blog/categoria/$categoria",
	getParentRoute: () => Route$9
});
var BlogBuscaTermoRoute = Route$14.update({
	id: "/blog/busca/$termo",
	path: "/blog/busca/$termo",
	getParentRoute: () => Route$9
});
var ServicesRouteChildren = {
	ServicesSlugRoute,
	ServicesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	CookiesRoute,
	PrivacyRoute,
	ServicesRoute: ServicesRoute._addFileChildren(ServicesRouteChildren),
	BlogSlugRoute,
	CasesSlugRoute,
	BlogIndexRoute,
	CasesIndexRoute,
	BlogBuscaTermoRoute,
	BlogCategoriaCategoriaRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		trailingSlash: "never",
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
