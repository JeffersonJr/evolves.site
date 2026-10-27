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
		"mtime": "2026-10-27T20:51:14.610Z",
		"size": 4284,
		"path": "../public/favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"46-wb7Uic3JNoSlfOKPg1HNZ9d3XtU\"",
		"mtime": "2026-10-27T20:51:14.609Z",
		"size": 70,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"20d7-gpYXbQKzTqZrmnM2kTtV1INUYC4\"",
		"mtime": "2026-10-27T20:51:14.609Z",
		"size": 8407,
		"path": "../public/sitemap.xml"
	},
	"/assets/BlogIndex-gpf7Cmsc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1904-q5G7PO/iv8Gq+K6rzsg3GVzGbOQ\"",
		"mtime": "2026-10-27T20:51:13.832Z",
		"size": 6404,
		"path": "../public/assets/BlogIndex-gpf7Cmsc.js"
	},
	"/assets/Cases-5IqePMbn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f87-xzzcTXmFKlKfsgl8Fn5zYUtV2CA\"",
		"mtime": "2026-10-27T20:51:13.832Z",
		"size": 16263,
		"path": "../public/assets/Cases-5IqePMbn.js"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2e4d-yQmgGKQX9dTnwKIdmlDogVkZlKM\"",
		"mtime": "2026-10-27T20:51:14.609Z",
		"size": 11853,
		"path": "../public/llms.txt"
	},
	"/assets/Contact-BNlzV50T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b3b-jjMi40TE62JH0lhXOyns5rLRQrA\"",
		"mtime": "2026-10-27T20:51:13.832Z",
		"size": 39739,
		"path": "../public/assets/Contact-BNlzV50T.js"
	},
	"/assets/I18nContext-CfWLIMO-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11187-2kNyTfldxAe+vLAdJPIJ3cXbQIY\"",
		"mtime": "2026-10-27T20:51:13.832Z",
		"size": 70023,
		"path": "../public/assets/I18nContext-CfWLIMO-.js"
	},
	"/assets/Services-C07-_ke0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d62-z+Sy9vG9EE/2s9YL0cG5h9im9gY\"",
		"mtime": "2026-10-27T20:51:13.832Z",
		"size": 3426,
		"path": "../public/assets/Services-C07-_ke0.js"
	},
	"/assets/Footer-BVXEdSlo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"677f-ou+iMk/lkMHsiXrNF6yP0WjngEQ\"",
		"mtime": "2026-10-27T20:51:13.832Z",
		"size": 26495,
		"path": "../public/assets/Footer-BVXEdSlo.js"
	},
	"/assets/_categoria-CTcHA7qy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-me6OFl8yHIK3Kt4wPdBCT4ODgwQ\"",
		"mtime": "2026-10-27T20:51:13.832Z",
		"size": 236,
		"path": "../public/assets/_categoria-CTcHA7qy.js"
	},
	"/assets/_slug-CgHtaHGV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1429-Z6Gzwu1wgJqC+QYMrxkb5Kpq8I0\"",
		"mtime": "2026-10-27T20:51:13.832Z",
		"size": 5161,
		"path": "../public/assets/_slug-CgHtaHGV.js"
	},
	"/assets/_slug-KFYN5ube.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3af4-uldutSvtcTFSpWaII7RjF94qBrI\"",
		"mtime": "2026-10-27T20:51:13.832Z",
		"size": 15092,
		"path": "../public/assets/_slug-KFYN5ube.js"
	},
	"/assets/_termo-D0bYP7Qg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9-2dC8FZPOc+n5QnUd1rMoOBEBgvg\"",
		"mtime": "2026-10-27T20:51:13.832Z",
		"size": 233,
		"path": "../public/assets/_termo-D0bYP7Qg.js"
	},
	"/assets/blog-D2fjfoYM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-KGnfe/z45K0ckPTFHgem/eRATcQ\"",
		"mtime": "2026-10-27T20:51:13.833Z",
		"size": 150,
		"path": "../public/assets/blog-D2fjfoYM.js"
	},
	"/assets/_slug-HfY1x3eY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc8-0wwda1qW16y3wLwrJKeTrTKJTLM\"",
		"mtime": "2026-10-27T20:51:13.832Z",
		"size": 3528,
		"path": "../public/assets/_slug-HfY1x3eY.js"
	},
	"/assets/case-glebra-sm-B8pfWzqv.webp": {
		"type": "image/webp",
		"etag": "\"38f6-hkztkOPtfjWqKVqbVyixVzWQXzI\"",
		"mtime": "2026-10-27T20:51:13.834Z",
		"size": 14582,
		"path": "../public/assets/case-glebra-sm-B8pfWzqv.webp"
	},
	"/assets/case-hidrolinfa-DDNNP4CB.webp": {
		"type": "image/webp",
		"etag": "\"a24a-vxTZFhBuQYVePEMk0EmIG0DCt34\"",
		"mtime": "2026-10-27T20:51:13.834Z",
		"size": 41546,
		"path": "../public/assets/case-hidrolinfa-DDNNP4CB.webp"
	},
	"/assets/case-hidrolinfa-sm-ZUYKJm7x.webp": {
		"type": "image/webp",
		"etag": "\"45da-ngrsVrJS1oyur9OBgXxCOQfgxRs\"",
		"mtime": "2026-10-27T20:51:13.834Z",
		"size": 17882,
		"path": "../public/assets/case-hidrolinfa-sm-ZUYKJm7x.webp"
	},
	"/assets/case-glebra-D4d1_AwH.webp": {
		"type": "image/webp",
		"etag": "\"910c-R/25gwAULNcGhRiAqS4zqQmgRJc\"",
		"mtime": "2026-10-27T20:51:13.834Z",
		"size": 37132,
		"path": "../public/assets/case-glebra-D4d1_AwH.webp"
	},
	"/assets/case-uniaofraternal-CF9oo6l7.webp": {
		"type": "image/webp",
		"etag": "\"7aaa-dhktndYcqE5UGN3kq2GP8C+KWzQ\"",
		"mtime": "2026-10-27T20:51:13.834Z",
		"size": 31402,
		"path": "../public/assets/case-uniaofraternal-CF9oo6l7.webp"
	},
	"/assets/circle-check-B-ZkZkyg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-wzPyiNzDDkv17gpXs30MklqIy/k\"",
		"mtime": "2026-10-27T20:51:13.833Z",
		"size": 173,
		"path": "../public/assets/circle-check-B-ZkZkyg.js"
	},
	"/assets/cases-Dhm7L7zs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17e-HmJ5yee3h0XLs2Y6DOlP5YA5BS8\"",
		"mtime": "2026-10-27T20:51:13.833Z",
		"size": 382,
		"path": "../public/assets/cases-Dhm7L7zs.js"
	},
	"/assets/case-uniaofraternal-sm-BS3crqxX.webp": {
		"type": "image/webp",
		"etag": "\"321a-hpe0DgEBW9q9rXobUf0sy2U8kNc\"",
		"mtime": "2026-10-27T20:51:13.834Z",
		"size": 12826,
		"path": "../public/assets/case-uniaofraternal-sm-BS3crqxX.webp"
	},
	"/assets/about-C-jCvKvB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2837-THnPYh8LvIG58lAMKwjeInrX0ro\"",
		"mtime": "2026-10-27T20:51:13.833Z",
		"size": 10295,
		"path": "../public/assets/about-C-jCvKvB.js"
	},
	"/assets/code-xml-XujMK-ZU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-zkA/IXVwuEDpygflxKCTDNtNRj4\"",
		"mtime": "2026-10-27T20:51:13.833Z",
		"size": 203,
		"path": "../public/assets/code-xml-XujMK-ZU.js"
	},
	"/assets/contact-CUAevy-g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ba-ZDULtPv13WjlbV6/sFrJ9bj2VU4\"",
		"mtime": "2026-10-27T20:51:13.833Z",
		"size": 442,
		"path": "../public/assets/contact-CUAevy-g.js"
	},
	"/assets/evolves-logo-gray-Ca0NJuQs.png": {
		"type": "image/png",
		"etag": "\"1dd6-6vFyC9EVlNw6IITT/hCJ7l4zxB4\"",
		"mtime": "2026-10-27T20:51:13.835Z",
		"size": 7638,
		"path": "../public/assets/evolves-logo-gray-Ca0NJuQs.png"
	},
	"/assets/globe-CxaQlzzk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed-ZDFBgNamyIJBWbiFBKZmu1FVzoM\"",
		"mtime": "2026-10-27T20:51:13.833Z",
		"size": 237,
		"path": "../public/assets/globe-CxaQlzzk.js"
	},
	"/assets/layers-DRNqu8Vj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a0-b1wt0p/Nnsynu4gQgF3uouSJjdU\"",
		"mtime": "2026-10-27T20:51:13.833Z",
		"size": 416,
		"path": "../public/assets/layers-DRNqu8Vj.js"
	},
	"/assets/matchContext-BmN0_Z1Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"307-yw3IAHtFZCKuTu3NmJPOLsmrUkk\"",
		"mtime": "2026-10-27T20:51:13.833Z",
		"size": 775,
		"path": "../public/assets/matchContext-BmN0_Z1Z.js"
	},
	"/assets/privacy-DCJ4_ueL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95e-X8R3iDKdjBDzOeJBxdROm8ojxGQ\"",
		"mtime": "2026-10-27T20:51:13.833Z",
		"size": 2398,
		"path": "../public/assets/privacy-DCJ4_ueL.js"
	},
	"/assets/related-content-BZrqKI7y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dee-KorfhvvRpi8VaF7ptTfI/g2UTao\"",
		"mtime": "2026-10-27T20:51:13.833Z",
		"size": 3566,
		"path": "../public/assets/related-content-BZrqKI7y.js"
	},
	"/assets/routes-Dis1jOrb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17643-nmdCxcus2C68x7gwb7o/RcrcPXc\"",
		"mtime": "2026-10-27T20:51:13.833Z",
		"size": 95811,
		"path": "../public/assets/routes-Dis1jOrb.js"
	},
	"/assets/services-Bk9oZtnP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a-aCfaE2bEeGGIe5FZ4UyZHsz91k0\"",
		"mtime": "2026-10-27T20:51:13.833Z",
		"size": 138,
		"path": "../public/assets/services-Bk9oZtnP.js"
	},
	"/assets/services-CDPqqjYr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"181-xuBRLtGmIcNItZdE78yt+onBRKo\"",
		"mtime": "2026-10-27T20:51:13.833Z",
		"size": 385,
		"path": "../public/assets/services-CDPqqjYr.js"
	},
	"/assets/shield-CzhBEZFO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"358-IQbUVS7VGFbmriDwk0fXh0U0azw\"",
		"mtime": "2026-10-27T20:51:13.834Z",
		"size": 856,
		"path": "../public/assets/shield-CzhBEZFO.js"
	},
	"/assets/target-DjXmp6Ly.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c6-U13CPVmn9sUaYGnJdRsednUUOxQ\"",
		"mtime": "2026-10-27T20:51:13.834Z",
		"size": 454,
		"path": "../public/assets/target-DjXmp6Ly.js"
	},
	"/assets/index-BtntPKJ4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65d3d-trN1MgAtIO9JKskcY8ZrDGMYZM4\"",
		"mtime": "2026-10-27T20:51:13.831Z",
		"size": 417085,
		"path": "../public/assets/index-BtntPKJ4.js"
	},
	"/assets/useStore-DAs5vFz2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b50-gJVpJ72ZOwiLeFNrSvHPv8Rvm2k\"",
		"mtime": "2026-10-27T20:51:13.834Z",
		"size": 27472,
		"path": "../public/assets/useStore-DAs5vFz2.js"
	},
	"/assets/zap-DzTLsnj3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"349-f2y+0IB2YqKbIhabMBBJLLCHgQk\"",
		"mtime": "2026-10-27T20:51:13.834Z",
		"size": 841,
		"path": "../public/assets/zap-DzTLsnj3.js"
	},
	"/assets/styles-DrVricLF.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"20632-blC8y4ElGtTiL9WpD3BqKoPK4GI\"",
		"mtime": "2026-10-27T20:51:13.835Z",
		"size": 132658,
		"path": "../public/assets/styles-DrVricLF.css"
	},
	"/.well-known/brave-rewards-verification.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"94-HzeRMnaKSRBMvc6MrwDzMANxEaE\"",
		"mtime": "2026-10-27T20:51:14.609Z",
		"size": 148,
		"path": "../public/.well-known/brave-rewards-verification.txt"
	},
	"/assets/cookies-XojFtMho.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9ed-1NFZExS/kacTYlZ6ca0RtE3e8vg\"",
		"mtime": "2026-10-27T20:51:13.833Z",
		"size": 2541,
		"path": "../public/assets/cookies-XojFtMho.js"
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
