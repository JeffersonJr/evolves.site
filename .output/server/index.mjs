globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx+unenv.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"10bc-J91A6xjPa9BH38AYev0r1KOS+Pk\"",
		"mtime": "2026-10-27T23:19:24.095Z",
		"size": 4284,
		"path": "../public/favicon.png"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2e4d-yQmgGKQX9dTnwKIdmlDogVkZlKM\"",
		"mtime": "2026-10-27T23:19:24.095Z",
		"size": 11853,
		"path": "../public/llms.txt"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"46-wb7Uic3JNoSlfOKPg1HNZ9d3XtU\"",
		"mtime": "2026-10-27T23:19:24.095Z",
		"size": 70,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"20d7-gpYXbQKzTqZrmnM2kTtV1INUYC4\"",
		"mtime": "2026-10-27T23:19:24.095Z",
		"size": 8407,
		"path": "../public/sitemap.xml"
	},
	"/assets/BlogIndex-B5taqRqM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1904-N9HZGkjtwrILKdAPW9yXtRIHiJ8\"",
		"mtime": "2026-10-27T23:19:23.572Z",
		"size": 6404,
		"path": "../public/assets/BlogIndex-B5taqRqM.js"
	},
	"/.well-known/brave-rewards-verification.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"94-HzeRMnaKSRBMvc6MrwDzMANxEaE\"",
		"mtime": "2026-10-27T23:19:24.095Z",
		"size": 148,
		"path": "../public/.well-known/brave-rewards-verification.txt"
	},
	"/assets/Contact-DOV2RGfF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b3e-iv9TjuQU7nERgU7VWBhvA0o3ZnQ\"",
		"mtime": "2026-10-27T23:19:23.572Z",
		"size": 39742,
		"path": "../public/assets/Contact-DOV2RGfF.js"
	},
	"/assets/Cases-BU05C0Ww.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f87-jJfbykBovXIxESsOcGdKQQOfRLU\"",
		"mtime": "2026-10-27T23:19:23.572Z",
		"size": 16263,
		"path": "../public/assets/Cases-BU05C0Ww.js"
	},
	"/assets/Footer-DOffE7iZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"677f-1P0/uuqsOVj+kENOfes4W2ysLMs\"",
		"mtime": "2026-10-27T23:19:23.574Z",
		"size": 26495,
		"path": "../public/assets/Footer-DOffE7iZ.js"
	},
	"/assets/Services-Bi04EEbp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d62-RaXScybI+yYvYGs8nCj+t/CP0+w\"",
		"mtime": "2026-10-27T23:19:23.575Z",
		"size": 3426,
		"path": "../public/assets/Services-Bi04EEbp.js"
	},
	"/assets/_categoria-f6volo7G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-OQ2Dm2YrPzkX8rHM8EeiVz/LQvo\"",
		"mtime": "2026-10-27T23:19:23.575Z",
		"size": 236,
		"path": "../public/assets/_categoria-f6volo7G.js"
	},
	"/assets/_slug-CSDkkaHB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1429-6AvqzUp7UY2VMtGFAxF6UeJZQ7Q\"",
		"mtime": "2026-10-27T23:19:23.575Z",
		"size": 5161,
		"path": "../public/assets/_slug-CSDkkaHB.js"
	},
	"/assets/_slug-BWEGCbU9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc8-3fBOQVS179nsvcRgYSLe704allI\"",
		"mtime": "2026-10-27T23:19:23.575Z",
		"size": 3528,
		"path": "../public/assets/_slug-BWEGCbU9.js"
	},
	"/assets/I18nContext-Dg3bV1U6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11352-KkItbnWQC2UfCwCQYxe7J9/PC+k\"",
		"mtime": "2026-10-27T23:19:23.575Z",
		"size": 70482,
		"path": "../public/assets/I18nContext-Dg3bV1U6.js"
	},
	"/assets/_slug-D6_uSI6t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3af4-3BsZXqmnAC4TkNGJi3adV/w6/Kc\"",
		"mtime": "2026-10-27T23:19:23.576Z",
		"size": 15092,
		"path": "../public/assets/_slug-D6_uSI6t.js"
	},
	"/assets/_termo-Dj7mfahN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9-lcLBEdQXHdEXCcQZ+DLy0qU+gTY\"",
		"mtime": "2026-10-27T23:19:23.576Z",
		"size": 233,
		"path": "../public/assets/_termo-Dj7mfahN.js"
	},
	"/assets/blog-DtLDsphS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-M2qKfc+OqdjuvaHq2WORZ9NGWts\"",
		"mtime": "2026-10-27T23:19:23.576Z",
		"size": 150,
		"path": "../public/assets/blog-DtLDsphS.js"
	},
	"/assets/case-glebra-D4d1_AwH.webp": {
		"type": "image/webp",
		"etag": "\"910c-R/25gwAULNcGhRiAqS4zqQmgRJc\"",
		"mtime": "2026-10-27T23:19:23.580Z",
		"size": 37132,
		"path": "../public/assets/case-glebra-D4d1_AwH.webp"
	},
	"/assets/case-glebra-sm-B8pfWzqv.webp": {
		"type": "image/webp",
		"etag": "\"38f6-hkztkOPtfjWqKVqbVyixVzWQXzI\"",
		"mtime": "2026-10-27T23:19:23.580Z",
		"size": 14582,
		"path": "../public/assets/case-glebra-sm-B8pfWzqv.webp"
	},
	"/assets/case-hidrolinfa-DDNNP4CB.webp": {
		"type": "image/webp",
		"etag": "\"a24a-vxTZFhBuQYVePEMk0EmIG0DCt34\"",
		"mtime": "2026-10-27T23:19:23.580Z",
		"size": 41546,
		"path": "../public/assets/case-hidrolinfa-DDNNP4CB.webp"
	},
	"/assets/case-hidrolinfa-sm-ZUYKJm7x.webp": {
		"type": "image/webp",
		"etag": "\"45da-ngrsVrJS1oyur9OBgXxCOQfgxRs\"",
		"mtime": "2026-10-27T23:19:23.580Z",
		"size": 17882,
		"path": "../public/assets/case-hidrolinfa-sm-ZUYKJm7x.webp"
	},
	"/assets/case-uniaofraternal-CF9oo6l7.webp": {
		"type": "image/webp",
		"etag": "\"7aaa-dhktndYcqE5UGN3kq2GP8C+KWzQ\"",
		"mtime": "2026-10-27T23:19:23.580Z",
		"size": 31402,
		"path": "../public/assets/case-uniaofraternal-CF9oo6l7.webp"
	},
	"/assets/case-uniaofraternal-sm-BS3crqxX.webp": {
		"type": "image/webp",
		"etag": "\"321a-hpe0DgEBW9q9rXobUf0sy2U8kNc\"",
		"mtime": "2026-10-27T23:19:23.581Z",
		"size": 12826,
		"path": "../public/assets/case-uniaofraternal-sm-BS3crqxX.webp"
	},
	"/assets/cases-CljmjtiK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17e-x1kZ6pWyRIIee9TEavVIPb9zTZ4\"",
		"mtime": "2026-10-27T23:19:23.577Z",
		"size": 382,
		"path": "../public/assets/cases-CljmjtiK.js"
	},
	"/assets/about-DGSflNMd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2837-knuyXEtxdSVvJ8ljt2vqgBaovEc\"",
		"mtime": "2026-10-27T23:19:23.576Z",
		"size": 10295,
		"path": "../public/assets/about-DGSflNMd.js"
	},
	"/assets/circle-check-C0BsoI36.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-qsrqcJyxh6qbqVKvxmn6LvPwByQ\"",
		"mtime": "2026-10-27T23:19:23.577Z",
		"size": 173,
		"path": "../public/assets/circle-check-C0BsoI36.js"
	},
	"/assets/code-xml-Q1t8P0Lx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-sOl89vybxBY0w1lmgPwYb1BgVu4\"",
		"mtime": "2026-10-27T23:19:23.577Z",
		"size": 203,
		"path": "../public/assets/code-xml-Q1t8P0Lx.js"
	},
	"/assets/contact-9hEkXQFj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ba-j0ee9KAMtTp/KXiermP+BzQrH5U\"",
		"mtime": "2026-10-27T23:19:23.577Z",
		"size": 442,
		"path": "../public/assets/contact-9hEkXQFj.js"
	},
	"/assets/cookies-hAb0D4cE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9ed-hntSgTRl1FL54pvhPeRO4Yjcdfc\"",
		"mtime": "2026-10-27T23:19:23.577Z",
		"size": 2541,
		"path": "../public/assets/cookies-hAb0D4cE.js"
	},
	"/assets/evolves-logo-gray-Ca0NJuQs.png": {
		"type": "image/png",
		"etag": "\"1dd6-6vFyC9EVlNw6IITT/hCJ7l4zxB4\"",
		"mtime": "2026-10-27T23:19:23.581Z",
		"size": 7638,
		"path": "../public/assets/evolves-logo-gray-Ca0NJuQs.png"
	},
	"/assets/globe-CiGalcW1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed-4yU6u6P30QywsfFQPpqPUN0QEEk\"",
		"mtime": "2026-10-27T23:19:23.577Z",
		"size": 237,
		"path": "../public/assets/globe-CiGalcW1.js"
	},
	"/assets/layers-rmsE-5g_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a0-MUJ4SH6w5OtjqYfA0weCBTzdN30\"",
		"mtime": "2026-10-27T23:19:23.577Z",
		"size": 416,
		"path": "../public/assets/layers-rmsE-5g_.js"
	},
	"/assets/matchContext-BmN0_Z1Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"307-yw3IAHtFZCKuTu3NmJPOLsmrUkk\"",
		"mtime": "2026-10-27T23:19:23.578Z",
		"size": 775,
		"path": "../public/assets/matchContext-BmN0_Z1Z.js"
	},
	"/assets/privacy-BkUprHwN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95e-wS/r1p+UNP2fPApuFxh2TGqfLYw\"",
		"mtime": "2026-10-27T23:19:23.578Z",
		"size": 2398,
		"path": "../public/assets/privacy-BkUprHwN.js"
	},
	"/assets/related-content-BZrqKI7y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dee-KorfhvvRpi8VaF7ptTfI/g2UTao\"",
		"mtime": "2026-10-27T23:19:23.578Z",
		"size": 3566,
		"path": "../public/assets/related-content-BZrqKI7y.js"
	},
	"/assets/services-BTxJ3BfC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a-599vqkJ1Mno6OuSbo1zdMSp81o4\"",
		"mtime": "2026-10-27T23:19:23.578Z",
		"size": 138,
		"path": "../public/assets/services-BTxJ3BfC.js"
	},
	"/assets/services-CT4VH7fF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"181-BEzI03UDQFrzHh/CIf8PJMT7q+Q\"",
		"mtime": "2026-10-27T23:19:23.578Z",
		"size": 385,
		"path": "../public/assets/services-CT4VH7fF.js"
	},
	"/assets/shield-Bnncnv4K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"358-e/UALjgokS59l1b+RMS7foCCeAg\"",
		"mtime": "2026-10-27T23:19:23.578Z",
		"size": 856,
		"path": "../public/assets/shield-Bnncnv4K.js"
	},
	"/assets/target-BRYrUmFZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c6-BuIlrMFaFAQPxrD3fJvxxS/5mh0\"",
		"mtime": "2026-10-27T23:19:23.578Z",
		"size": 454,
		"path": "../public/assets/target-BRYrUmFZ.js"
	},
	"/assets/useStore-DAs5vFz2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b50-gJVpJ72ZOwiLeFNrSvHPv8Rvm2k\"",
		"mtime": "2026-10-27T23:19:23.579Z",
		"size": 27472,
		"path": "../public/assets/useStore-DAs5vFz2.js"
	},
	"/assets/zap-Ddg3AapJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"349-WvBewThsV7YAkzaYHOILtz0IgNs\"",
		"mtime": "2026-10-27T23:19:23.580Z",
		"size": 841,
		"path": "../public/assets/zap-Ddg3AapJ.js"
	},
	"/assets/routes-BmXPYo2i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"174fb-bKPKZyoMzRQO+y0c8FI5icvQNNM\"",
		"mtime": "2026-10-27T23:19:23.578Z",
		"size": 95483,
		"path": "../public/assets/routes-BmXPYo2i.js"
	},
	"/assets/styles-DrVricLF.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"20632-blC8y4ElGtTiL9WpD3BqKoPK4GI\"",
		"mtime": "2026-10-27T23:19:23.581Z",
		"size": 132658,
		"path": "../public/assets/styles-DrVricLF.css"
	},
	"/assets/index-Ck3qIiQL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65d3d-pis3Kh9EK+sb3RIGoQL0ZQ1hRbo\"",
		"mtime": "2026-10-27T23:19:23.572Z",
		"size": 417085,
		"path": "../public/assets/index-Ck3qIiQL.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_abbDio = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_abbDio
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
