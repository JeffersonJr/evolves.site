//#region node_modules/.nitro/vite/services/ssr/assets/seo-Bjqzx_4V.js
var site_default = {
	url: "https://www.evolves.site",
	name: "Evolves Tecnologia",
	image: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/fb55e15d-dd84-4441-8254-64bd5127bd10",
	pages: [
		{
			"path": "/",
			"title": "Criação de Sites, Sistemas e Soluções Digitais | Evolves",
			"description": "A Evolves cria sites profissionais, sistemas customizados e produtos digitais para empresas, com desenvolvimento web, UX/UI, SEO técnico, hospedagem cloud e branding B2B."
		},
		{
			"path": "/about",
			"title": "Sobre a Evolves | Tecnologia e Design para Empresas",
			"description": "Conheça a Evolves Tecnologia e nossa abordagem de desenvolvimento web, inteligência artificial e design para negócios digitais."
		},
		{
			"path": "/services",
			"title": "Sites, Sistemas, SEO e Design Digital | Serviços Evolves",
			"description": "Conheça os serviços da Evolves para empresas: criação de sites, sistemas customizados, SEO técnico, hospedagem cloud, UX/UI, inteligência artificial e branding B2B."
		},
		{
			"path": "/cases",
			"title": "Cases de Sites, Sistemas e Branding | Evolves",
			"description": "Explore os projetos da Evolves para Zion Tecnologia, DuimpWeb e ProjecTi: desafios, soluções, tecnologias e resultados apresentados em cada case."
		},
		{
			"path": "/blog",
			"title": "Blog de Tecnologia, SEO e Design | Evolves",
			"description": "Artigos sobre desenvolvimento web, SEO, inteligência artificial, UX/UI, hospedagem e branding para ajudar sua empresa a planejar projetos digitais."
		},
		{
			"path": "/contact",
			"title": "Contato e Propostas para Projetos Digitais | Evolves",
			"description": "Converse com a Evolves sobre seu projeto de site, sistema, hospedagem ou branding. Conte suas necessidades e solicite uma proposta."
		},
		{
			"path": "/privacy",
			"title": "Política de Privacidade | Evolves",
			"description": "Saiba como a Evolves trata informações pessoais, quais são as finalidades da coleta e como entrar em contato sobre sua privacidade."
		},
		{
			"path": "/cookies",
			"title": "Política de Cookies | Evolves",
			"description": "Entenda o uso de cookies no site da Evolves, suas finalidades e as opções para gerenciar suas preferências de navegação."
		}
	]
};
var siteUrl = site_default.url;
function seoHead({ title, description, path, image = site_default.image, type = "website", structuredData }) {
	const url = `${site_default.url}${path === "/" ? "/" : path.replace(/\/$/, "")}`;
	const schemaEntries = [{
		"@type": "WebPage",
		"@id": `${url}#webpage`,
		url,
		name: title,
		description,
		inLanguage: "pt-BR",
		isPartOf: { "@id": `${site_default.url}/#website` },
		...type === "article" ? { mainEntity: { "@id": `${url}#article` } } : {}
	}, ...Array.isArray(structuredData) ? structuredData : structuredData ? [structuredData] : []];
	return {
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:url",
				content: url
			},
			{
				property: "og:type",
				content: type
			},
			{
				property: "og:site_name",
				content: site_default.name
			},
			{
				property: "og:locale",
				content: "pt_BR"
			},
			{
				property: "og:image",
				content: new URL(image, site_default.url).href
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: description
			},
			{
				name: "twitter:image",
				content: new URL(image, site_default.url).href
			},
			{ "script:ld+json": {
				"@context": "https://schema.org",
				"@graph": schemaEntries
			} }
		],
		links: [{
			rel: "canonical",
			href: url
		}]
	};
}
function breadcrumbSchema(items) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: new URL(item.path, site_default.url).href
		}))
	};
}
var organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"@id": `${site_default.url}/#organization`,
	name: site_default.name,
	alternateName: "Evolves",
	url: site_default.url,
	logo: new URL("/favicon.png", site_default.url).href,
	email: "contato@evolves.site",
	telephone: "+55-13-98132-6869",
	contactPoint: {
		"@type": "ContactPoint",
		contactType: "sales",
		email: "contato@evolves.site",
		telephone: "+55-13-98132-6869",
		availableLanguage: ["Portuguese"]
	},
	sameAs: ["https://www.linkedin.com/company/71072104/"],
	areaServed: {
		"@type": "Country",
		name: "Brasil"
	},
	knowsAbout: [
		"Criação de sites",
		"Sistemas customizados",
		"Hospedagem cloud",
		"SEO técnico",
		"Branding B2B",
		"Inteligência artificial aplicada a produtos digitais",
		"Design UI/UX",
		"Consultoria tech",
		"Desenvolvimento web",
		"Lojas virtuais",
		"Acessibilidade digital",
		"Alta performance web"
	]
};
var websiteSchema = {
	"@type": "WebSite",
	"@id": `${site_default.url}/#website`,
	name: "Evolves",
	alternateName: site_default.name,
	url: site_default.url,
	inLanguage: "pt-BR",
	publisher: { "@id": `${site_default.url}/#organization` }
};
function blogPostingSchema(post) {
	const monthNumber = {
		jan: "01",
		fev: "02",
		feb: "02",
		mar: "03",
		abr: "04",
		apr: "04",
		mai: "05",
		may: "05",
		jun: "06",
		jul: "07",
		ago: "08",
		aug: "08",
		set: "09",
		sep: "09",
		out: "10",
		oct: "10",
		nov: "11",
		dez: "12",
		dec: "12"
	};
	const [, day, month, year] = post.date.match(/^(\d{1,2})\s+([\p{L}.]+)\s+(\d{4})$/u) ?? [];
	const monthValue = month ? monthNumber[month.slice(0, 3).toLowerCase()] : void 0;
	const published = day && year && monthValue ? `${year}-${monthValue}-${day.padStart(2, "0")}` : void 0;
	const [, modifiedDay, modifiedMonth, modifiedYear] = post.dateModified ? post.dateModified.match(/^(\d{1,2})\s+([\p{L}.]+)\s+(\d{4})$/u) ?? [] : [];
	const modifiedMonthValue = modifiedMonth ? monthNumber[modifiedMonth.slice(0, 3).toLowerCase()] : void 0;
	const modified = modifiedDay && modifiedYear && modifiedMonthValue ? `${modifiedYear}-${modifiedMonthValue}-${modifiedDay.padStart(2, "0")}` : void 0;
	const url = new URL(`/blog/${post.slug}`, site_default.url).href;
	return {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"@id": `${url}#article`,
		headline: post.title,
		description: post.excerpt,
		image: new URL(post.image, site_default.url).href,
		url,
		mainEntityOfPage: url,
		inLanguage: "pt-BR",
		articleSection: post.category,
		...published ? { datePublished: published } : {},
		...modified ? { dateModified: modified } : {},
		author: {
			"@type": "Person",
			name: post.author,
			url: "https://www.linkedin.com/in/jeffersonjunior/"
		},
		publisher: {
			"@type": "Organization",
			name: site_default.name,
			url: site_default.url,
			logo: {
				"@type": "ImageObject",
				url: new URL("/favicon.png", site_default.url).href
			}
		}
	};
}
function noIndexHead(title, description, path) {
	const head = seoHead({
		title,
		description,
		path
	});
	return {
		...head,
		meta: [...head.meta, {
			name: "robots",
			content: "noindex, follow"
		}]
	};
}
function pageHead(path, structuredData) {
	const page = site_default.pages.find((page) => page.path === path);
	if (!page) throw new Error(`Missing SEO metadata for ${path}`);
	return seoHead({
		...page,
		structuredData
	});
}
//#endregion
export { pageHead as a, websiteSchema as c, organizationSchema as i, breadcrumbSchema as n, seoHead as o, noIndexHead as r, siteUrl as s, blogPostingSchema as t };
