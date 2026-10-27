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
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2e4d-yQmgGKQX9dTnwKIdmlDogVkZlKM\"",
		"mtime": "2026-10-27T18:54:25.943Z",
		"size": 11853,
		"path": "../public/llms.txt"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"10bc-J91A6xjPa9BH38AYev0r1KOS+Pk\"",
		"mtime": "2026-10-27T18:54:25.943Z",
		"size": 4284,
		"path": "../public/favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"46-wb7Uic3JNoSlfOKPg1HNZ9d3XtU\"",
		"mtime": "2026-10-27T18:54:25.943Z",
		"size": 70,
		"path": "../public/robots.txt"
	},
	"/.well-known/brave-rewards-verification.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"94-HzeRMnaKSRBMvc6MrwDzMANxEaE\"",
		"mtime": "2026-10-27T18:54:25.943Z",
		"size": 148,
		"path": "../public/.well-known/brave-rewards-verification.txt"
	},
	"/assets/BlogIndex-DAzS12q2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1904-Q3vTr9FsSr/KtK+POHnByu/U6ew\"",
		"mtime": "2026-10-27T18:54:25.184Z",
		"size": 6404,
		"path": "../public/assets/BlogIndex-DAzS12q2.js"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"20d7-gpYXbQKzTqZrmnM2kTtV1INUYC4\"",
		"mtime": "2026-10-27T18:54:25.943Z",
		"size": 8407,
		"path": "../public/sitemap.xml"
	},
	"/assets/Cases-DGzW783X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3e5a-TQnnFQaxdf53wwTTgi7vGYvXdS4\"",
		"mtime": "2026-10-27T18:54:25.185Z",
		"size": 15962,
		"path": "../public/assets/Cases-DGzW783X.js"
	},
	"/assets/Contact-DU5l2GVG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b3b-2Aah+c+V6Gj/+I+Fcw7fT9g/T0w\"",
		"mtime": "2026-10-27T18:54:25.185Z",
		"size": 39739,
		"path": "../public/assets/Contact-DU5l2GVG.js"
	},
	"/assets/Footer-BsrTwghG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"43cf-9WJBW8XTrtP1FJM3vyiVorjA5KI\"",
		"mtime": "2026-10-27T18:54:25.185Z",
		"size": 17359,
		"path": "../public/assets/Footer-BsrTwghG.js"
	},
	"/assets/_categoria-DF0LOtv8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-l3tIbneB06uGDm+j2ZCGJwTSC9E\"",
		"mtime": "2026-10-27T18:54:25.186Z",
		"size": 236,
		"path": "../public/assets/_categoria-DF0LOtv8.js"
	},
	"/assets/_slug-9KkkRZjV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3a93-P8obSxvbfjR/Wo79YF++CLY0YW8\"",
		"mtime": "2026-10-27T18:54:25.186Z",
		"size": 14995,
		"path": "../public/assets/_slug-9KkkRZjV.js"
	},
	"/assets/_slug-DP3W0v3F.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc8-+V5m6wfbo2Cd/4swBMNPMlXHnzc\"",
		"mtime": "2026-10-27T18:54:25.187Z",
		"size": 3528,
		"path": "../public/assets/_slug-DP3W0v3F.js"
	},
	"/assets/Services-CUiRtJD-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d62-i2dFirnYc1HhTSptqAXUGWMaJfM\"",
		"mtime": "2026-10-27T18:54:25.185Z",
		"size": 3426,
		"path": "../public/assets/Services-CUiRtJD-.js"
	},
	"/assets/I18nContext-CfWLIMO-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11187-2kNyTfldxAe+vLAdJPIJ3cXbQIY\"",
		"mtime": "2026-10-27T18:54:25.185Z",
		"size": 70023,
		"path": "../public/assets/I18nContext-CfWLIMO-.js"
	},
	"/assets/_termo-CYBVxGui.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9-mJCnYjBOzH57c+C6FPpr3iWove4\"",
		"mtime": "2026-10-27T18:54:25.187Z",
		"size": 233,
		"path": "../public/assets/_termo-CYBVxGui.js"
	},
	"/assets/_slug-De-AMNx5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1231-jEKmSnV22Dswr3fL4uMEj5jxAAw\"",
		"mtime": "2026-10-27T18:54:25.187Z",
		"size": 4657,
		"path": "../public/assets/_slug-De-AMNx5.js"
	},
	"/assets/about-F26iW8kA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"281f-nnsukoKgkXl7B3uKkEh1rqxcG+s\"",
		"mtime": "2026-10-27T18:54:25.187Z",
		"size": 10271,
		"path": "../public/assets/about-F26iW8kA.js"
	},
	"/assets/blog-C9nUz_4s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-gKkcslebVOraNVdOdLcb2Mh6Mw8\"",
		"mtime": "2026-10-27T18:54:25.188Z",
		"size": 150,
		"path": "../public/assets/blog-C9nUz_4s.js"
	},
	"/assets/circle-check-B-ZkZkyg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-wzPyiNzDDkv17gpXs30MklqIy/k\"",
		"mtime": "2026-10-27T18:54:25.189Z",
		"size": 173,
		"path": "../public/assets/circle-check-B-ZkZkyg.js"
	},
	"/assets/case-glebra-D4d1_AwH.webp": {
		"type": "image/webp",
		"etag": "\"910c-R/25gwAULNcGhRiAqS4zqQmgRJc\"",
		"mtime": "2026-10-27T18:54:25.194Z",
		"size": 37132,
		"path": "../public/assets/case-glebra-D4d1_AwH.webp"
	},
	"/assets/case-hidrolinfa-DDNNP4CB.webp": {
		"type": "image/webp",
		"etag": "\"a24a-vxTZFhBuQYVePEMk0EmIG0DCt34\"",
		"mtime": "2026-10-27T18:54:25.194Z",
		"size": 41546,
		"path": "../public/assets/case-hidrolinfa-DDNNP4CB.webp"
	},
	"/assets/cases-CU--ISzp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17e-PQK+gOTxedf8pPkMjfMV1SJJIiQ\"",
		"mtime": "2026-10-27T18:54:25.188Z",
		"size": 382,
		"path": "../public/assets/cases-CU--ISzp.js"
	},
	"/assets/code-xml-XujMK-ZU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-zkA/IXVwuEDpygflxKCTDNtNRj4\"",
		"mtime": "2026-10-27T18:54:25.189Z",
		"size": 203,
		"path": "../public/assets/code-xml-XujMK-ZU.js"
	},
	"/assets/case-uniaofraternal-CF9oo6l7.webp": {
		"type": "image/webp",
		"etag": "\"7aaa-dhktndYcqE5UGN3kq2GP8C+KWzQ\"",
		"mtime": "2026-10-27T18:54:25.194Z",
		"size": 31402,
		"path": "../public/assets/case-uniaofraternal-CF9oo6l7.webp"
	},
	"/assets/contact-D_MVfXuI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ba-Kls22Ano9McH+z2DtvGlSptYPKw\"",
		"mtime": "2026-10-27T18:54:25.189Z",
		"size": 442,
		"path": "../public/assets/contact-D_MVfXuI.js"
	},
	"/assets/cookies-uZlZzWTc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9ed-4S8MSvCFT4RR79+dZXzMnBbAG58\"",
		"mtime": "2026-10-27T18:54:25.189Z",
		"size": 2541,
		"path": "../public/assets/cookies-uZlZzWTc.js"
	},
	"/assets/evolves-logo-gray-Ca0NJuQs.png": {
		"type": "image/png",
		"etag": "\"1dd6-6vFyC9EVlNw6IITT/hCJ7l4zxB4\"",
		"mtime": "2026-10-27T18:54:25.195Z",
		"size": 7638,
		"path": "../public/assets/evolves-logo-gray-Ca0NJuQs.png"
	},
	"/assets/evolves-logo-C9HCsjhS.webp": {
		"type": "image/webp",
		"etag": "\"27b0-/RwuJKNGkG0Vcq4uIci0phtygdo\"",
		"mtime": "2026-10-27T18:54:25.194Z",
		"size": 10160,
		"path": "../public/assets/evolves-logo-C9HCsjhS.webp"
	},
	"/assets/evolves-logo-white-DVzZ6EPG.webp": {
		"type": "image/webp",
		"etag": "\"1a7a-KeHikTEAblIWexxWiExVEspVrs4\"",
		"mtime": "2026-10-27T18:54:25.195Z",
		"size": 6778,
		"path": "../public/assets/evolves-logo-white-DVzZ6EPG.webp"
	},
	"/assets/globe-CxaQlzzk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed-ZDFBgNamyIJBWbiFBKZmu1FVzoM\"",
		"mtime": "2026-10-27T18:54:25.190Z",
		"size": 237,
		"path": "../public/assets/globe-CxaQlzzk.js"
	},
	"/assets/layers-DRNqu8Vj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a0-b1wt0p/Nnsynu4gQgF3uouSJjdU\"",
		"mtime": "2026-10-27T18:54:25.191Z",
		"size": 416,
		"path": "../public/assets/layers-DRNqu8Vj.js"
	},
	"/assets/matchContext-BmN0_Z1Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"307-yw3IAHtFZCKuTu3NmJPOLsmrUkk\"",
		"mtime": "2026-10-27T18:54:25.191Z",
		"size": 775,
		"path": "../public/assets/matchContext-BmN0_Z1Z.js"
	},
	"/assets/privacy-BhOdDFt9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95e-xNkp/LVwivW3ud8sMIWA3pXVDKM\"",
		"mtime": "2026-10-27T18:54:25.191Z",
		"size": 2398,
		"path": "../public/assets/privacy-BhOdDFt9.js"
	},
	"/assets/routes-B7xybe28.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1762b-ttj7AUlXHl4KCtu3HETXz685ztE\"",
		"mtime": "2026-10-27T18:54:25.192Z",
		"size": 95787,
		"path": "../public/assets/routes-B7xybe28.js"
	},
	"/assets/index-30TKo8Ya.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"65c56-/mjfothioFq4utcIOKWp2Ew2Y4I\"",
		"mtime": "2026-10-27T18:54:25.184Z",
		"size": 416854,
		"path": "../public/assets/index-30TKo8Ya.js"
	},
	"/assets/related-content-BZrqKI7y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dee-KorfhvvRpi8VaF7ptTfI/g2UTao\"",
		"mtime": "2026-10-27T18:54:25.192Z",
		"size": 3566,
		"path": "../public/assets/related-content-BZrqKI7y.js"
	},
	"/assets/services-BbtwyVVa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a-ysXD1oR5V7WI3obZ9JQJv+aPzi4\"",
		"mtime": "2026-10-27T18:54:25.192Z",
		"size": 138,
		"path": "../public/assets/services-BbtwyVVa.js"
	},
	"/assets/services-W4zO3qix.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"181-+srhI+AM/b9/V59By350EnlYNlY\"",
		"mtime": "2026-10-27T18:54:25.193Z",
		"size": 385,
		"path": "../public/assets/services-W4zO3qix.js"
	},
	"/assets/shield-CzhBEZFO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"358-IQbUVS7VGFbmriDwk0fXh0U0azw\"",
		"mtime": "2026-10-27T18:54:25.193Z",
		"size": 856,
		"path": "../public/assets/shield-CzhBEZFO.js"
	},
	"/assets/styles-DsXnJepd.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"20296-lHFC8y3kVTyUuI3a9rN6FJtC/nw\"",
		"mtime": "2026-10-27T18:54:25.195Z",
		"size": 131734,
		"path": "../public/assets/styles-DsXnJepd.css"
	},
	"/assets/target-DjXmp6Ly.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c6-U13CPVmn9sUaYGnJdRsednUUOxQ\"",
		"mtime": "2026-10-27T18:54:25.193Z",
		"size": 454,
		"path": "../public/assets/target-DjXmp6Ly.js"
	},
	"/assets/useStore-DAs5vFz2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b50-gJVpJ72ZOwiLeFNrSvHPv8Rvm2k\"",
		"mtime": "2026-10-27T18:54:25.193Z",
		"size": 27472,
		"path": "../public/assets/useStore-DAs5vFz2.js"
	},
	"/assets/zap-DzTLsnj3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"349-f2y+0IB2YqKbIhabMBBJLLCHgQk\"",
		"mtime": "2026-10-27T18:54:25.194Z",
		"size": 841,
		"path": "../public/assets/zap-DzTLsnj3.js"
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
