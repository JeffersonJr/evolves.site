import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { h as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./_slug-C-sg-clT.mjs";
import { L as ArrowLeft, M as Calendar, O as Clock, n as User } from "./_libs/lucide-react.mjs";
import { n as Navbar, t as Footer } from "./_ssr/Footer-BXwmlAwJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CQ_UJNop.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPostPage() {
	const { post } = Route.useLoaderData();
	if (!post) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
						children: "Artigo não encontrado."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/blog",
						className: "rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors",
						children: "Voltar para o Blog"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 mx-auto max-w-3xl px-6 py-32 sm:py-40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog",
					className: "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Voltar para o Blog"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10 border-b border-border pb-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground mb-4",
								children: post.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-4xl font-bold tracking-tight sm:text-5xl mb-6",
								children: post.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-6 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: post.author })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: post.date })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [post.readTime, " leitura"] })]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "prose prose-neutral dark:prose-invert max-w-none prose-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead text-xl text-foreground font-medium mb-8",
							children: post.excerpt
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { dangerouslySetInnerHTML: { __html: post.content } })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 rounded-3xl bg-surface border border-border p-8 flex flex-col sm:flex-row items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-20 w-20 shrink-0 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-2xl font-bold",
							children: "JC"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center sm:text-left flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold mb-1",
									children: post.author
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground mb-4",
									children: "Desenvolvedor, entusiasta de tecnologia e fundador na Evolves Tecnologia. Apaixonado por criar soluções web de alta performance."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://www.linkedin.com/in/jeffersonjunior/",
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4",
									children: ["Conectar no LinkedIn ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "ml-1 h-3 w-3 rotate-[135deg]" })]
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
export { BlogPostPage as component };
