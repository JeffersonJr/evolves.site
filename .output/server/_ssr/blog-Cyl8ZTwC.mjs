import { n as __toESM } from "../_runtime.mjs";
import { t as blogPosts } from "./blog-BWxN5Vt2.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as ArrowRight, d as Search } from "../_libs/lucide-react.mjs";
import { n as Navbar, t as Footer } from "./Footer-BXwmlAwJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-Cyl8ZTwC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BlogIndex() {
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)(null);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const categories = Array.from(new Set(blogPosts.map((p) => p.category)));
	const filteredPosts = blogPosts.filter((p) => {
		const matchesCategory = !selectedCategory || p.category === selectedCategory;
		const query = searchQuery.trim().toLowerCase();
		const matchesSearch = !query || p.title.toLowerCase().includes(query) || p.excerpt.toLowerCase().includes(query) || p.category.toLowerCase().includes(query);
		return matchesCategory && matchesSearch;
	});
	const featuredPost = filteredPosts.length > 0 && !searchQuery && !selectedCategory ? filteredPosts[0] : null;
	const remainingPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 mx-auto max-w-6xl px-6 py-32 sm:py-40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12 text-center sm:text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-4xl font-bold tracking-tight sm:text-5xl mb-4",
							children: "Blog Evolves"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-muted-foreground max-w-2xl",
							children: "Artigos, tendências e dicas sobre desenvolvimento, design, IA e SEO para alavancar o seu negócio digital."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12 flex flex-col gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSelectedCategory(null),
								className: `cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all ${selectedCategory === null ? "bg-primary text-primary-foreground shadow-sm" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`,
								children: "Todos"
							}), categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSelectedCategory(selectedCategory === cat ? null : cat),
								className: `cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-all ${selectedCategory === cat ? "bg-primary text-primary-foreground shadow-sm" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`,
								children: cat
							}, cat))]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-full sm:w-72",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4 text-muted-foreground" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: searchQuery,
								onChange: (e) => setSearchQuery(e.target.value),
								className: "w-full block p-2.5 pl-10 text-sm rounded-full border border-border bg-background focus:ring-primary focus:border-primary outline-none transition-all",
								placeholder: "Buscar artigos..."
							})]
						})]
					}),
					(selectedCategory || searchQuery) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground mb-8",
						children: [
							filteredPosts.length,
							" ",
							filteredPosts.length === 1 ? "artigo encontrado" : "artigos encontrados",
							selectedCategory && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [" em ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: selectedCategory
							})] }),
							searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								" para \"",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: searchQuery
								}),
								"\""
							] })
						]
					}),
					featuredPost && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog/$slug",
							params: { slug: featuredPost.slug },
							className: "group flex flex-col md:flex-row gap-8 rounded-4xl border border-border bg-surface p-6 sm:p-10 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 flex flex-col justify-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 mb-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20",
											children: ["Destaque · ", featuredPost.category]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm text-muted-foreground",
											children: [featuredPost.readTime, " leitura"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-3xl sm:text-4xl font-bold mb-4 group-hover:text-primary transition-colors",
										children: featuredPost.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg text-muted-foreground mb-8 line-clamp-3",
										children: featuredPost.excerpt
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center text-sm font-medium text-primary mt-auto",
										children: ["Ler artigo completo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" })]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 hidden md:block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: featuredPost.image,
									alt: featuredPost.title,
									className: "w-full h-full object-cover rounded-3xl"
								})
							})]
						})
					}),
					filteredPosts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xl text-muted-foreground",
							children: "Nenhum artigo encontrado."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setSelectedCategory(null);
								setSearchQuery("");
							},
							className: "mt-4 text-primary font-medium cursor-pointer hover:underline",
							children: "Limpar filtros"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
						children: remainingPosts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog/$slug",
							params: { slug: post.slug },
							className: "group flex flex-col justify-between rounded-3xl border border-border bg-card overflow-hidden shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-48 w-full shrink-0 overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: post.image,
										alt: post.title,
										className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-6 flex-1 flex flex-col",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 mb-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground",
												children: post.category
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs text-muted-foreground",
												children: [post.readTime, " leitura"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2",
											children: post.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted-foreground line-clamp-3 mb-6",
											children: post.excerpt
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-6 pb-6 mt-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-sm font-medium pt-4 border-t border-border/50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary",
											children: "Ler artigo"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-primary transition-transform group-hover:translate-x-1" })]
									})
								})
							]
						}, post.slug))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { BlogIndex as component };
