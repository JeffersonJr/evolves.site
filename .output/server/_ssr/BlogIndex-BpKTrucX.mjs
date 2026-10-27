import { n as __toESM } from "../_runtime.mjs";
import { t as blogPosts } from "./blog-9_pvUS2w.mjs";
import { n as toFriendlySlug } from "./blog-url-DLeBvoZZ.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Y as ArrowRight, p as Search } from "../_libs/lucide-react.mjs";
import { n as Navbar, t as Footer } from "./Footer-C173oQp8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BlogIndex-BpKTrucX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BlogIndex({ initialTerm = "", initialCategory = "" }) {
	const navigate = useNavigate();
	const [searchQuery, setSearchQuery] = (0, import_react.useState)(initialTerm);
	const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
	const categories = Array.from(new Set(blogPosts.map((p) => p.category)));
	const filteredPosts = blogPosts.filter((p) => {
		const matchesCategory = !initialCategory || p.category === initialCategory;
		const query = normalize(initialTerm);
		const content = normalize(`${p.title} ${p.excerpt} ${p.category}`);
		const matchesSearch = !query || query.split(" ").every((word) => content.includes(word));
		return matchesCategory && matchesSearch;
	});
	const featuredPost = filteredPosts.length > 0 && !initialTerm && !initialCategory ? filteredPosts[0] : null;
	const remainingPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;
	function submitSearch(event) {
		event.preventDefault();
		const term = toFriendlySlug(searchQuery);
		if (!term) {
			navigate({ to: "/blog" });
			return;
		}
		navigate({
			to: "/blog/busca/$termo",
			params: { termo: term }
		});
	}
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
							className: "mb-4 text-5xl font-semibold tracking-tight sm:text-6xl",
							children: initialTerm ? `Resultados para “${initialTerm}”` : initialCategory ? `Artigos sobre ${initialCategory}` : "Blog Evolves"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-muted-foreground max-w-2xl",
							children: "Artigos, tendências e dicas sobre desenvolvimento, design, IA e SEO para alavancar o seu negócio digital."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12 flex flex-col gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-x-5 gap-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/blog",
								className: `text-sm font-medium transition-colors ${!initialCategory ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
								children: "Todos"
							}), categories.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/blog/categoria/$categoria",
								params: { categoria: toFriendlySlug(cat) },
								className: `text-sm font-medium transition-colors ${initialCategory === cat ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
								children: cat
							}, cat))]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: submitSearch,
							className: "relative w-full sm:w-96",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "w-4 h-4 text-muted-foreground" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: searchQuery,
									maxLength: 80,
									onChange: (e) => setSearchQuery(e.target.value),
									className: "block w-full rounded-full border border-border bg-background py-2.5 pl-10 pr-24 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary",
									placeholder: "Buscar artigos..."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "absolute inset-y-1.5 right-1.5 rounded-full bg-primary px-4 text-xs font-medium text-primary-foreground transition hover:brightness-105",
									children: "Buscar"
								})
							]
						})]
					}),
					(initialCategory || initialTerm) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted-foreground mb-8",
						children: [
							filteredPosts.length,
							" ",
							filteredPosts.length === 1 ? "artigo encontrado" : "artigos encontrados",
							initialCategory && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								" ",
								"em",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: initialCategory
								})
							] }),
							initialTerm && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								" ",
								"para \"",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground",
									children: initialTerm
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
							className: "group flex flex-col gap-8 rounded-4xl bg-[#f5f5f7] p-6 transition-colors hover:bg-[#efeff2] dark:bg-surface dark:hover:bg-secondary/70 md:flex-row sm:p-10",
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
									width: 800,
									height: 450,
									fetchPriority: "high",
									decoding: "async",
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
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							className: "mt-4 inline-block text-primary font-medium hover:underline",
							to: "/blog",
							children: "Limpar filtros"
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
						children: remainingPosts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog/$slug",
							params: { slug: post.slug },
							className: "group flex flex-col justify-between overflow-hidden rounded-3xl bg-[#f5f5f7] transition-colors hover:bg-[#efeff2] dark:bg-surface dark:hover:bg-secondary/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-48 w-full shrink-0 overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										width: 800,
										height: 450,
										loading: "lazy",
										decoding: "async",
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
export { BlogIndex as t };
