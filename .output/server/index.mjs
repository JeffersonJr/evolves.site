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
		"mtime": "2026-10-27T13:22:00.224Z",
		"size": 4284,
		"path": "../public/favicon.png"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2633-ll0lDJJa/2UqEpeOw/Du09Hia2w\"",
		"mtime": "2026-10-27T13:22:00.223Z",
		"size": 9779,
		"path": "../public/llms.txt"
	},
	"/.well-known/brave-rewards-verification.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"94-HzeRMnaKSRBMvc6MrwDzMANxEaE\"",
		"mtime": "2026-10-27T13:22:00.224Z",
		"size": 148,
		"path": "../public/.well-known/brave-rewards-verification.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"9b2-BWWh9aj3NDq52Tke2j4jMzhzK5g\"",
		"mtime": "2026-10-27T13:22:00.223Z",
		"size": 2482,
		"path": "../public/sitemap.xml"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"46-wb7Uic3JNoSlfOKPg1HNZ9d3XtU\"",
		"mtime": "2026-10-27T13:22:00.224Z",
		"size": 70,
		"path": "../public/robots.txt"
	},
	"/assets/Cases-BWsDcaPN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b85-bugEhNGdKF9kFVVLAMbwQFzg0/s\"",
		"mtime": "2026-10-27T13:21:59.680Z",
		"size": 11141,
		"path": "../public/assets/Cases-BWsDcaPN.js"
	},
	"/assets/BlogIndex-DacIAj2c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1904-6hXXF+XjXTO3G7gsgyrsBi/ylWg\"",
		"mtime": "2026-10-27T13:21:59.680Z",
		"size": 6404,
		"path": "../public/assets/BlogIndex-DacIAj2c.js"
	},
	"/assets/Footer-SFBSne7k.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"44e4-c1jBIh07QhOP/h6XbOh8Nu7b/F8\"",
		"mtime": "2026-10-27T13:21:59.680Z",
		"size": 17636,
		"path": "../public/assets/Footer-SFBSne7k.js"
	},
	"/assets/Services-BbjzUoZr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c83-QrX80x6bZCS0oo2FEDSQUER1Ieg\"",
		"mtime": "2026-10-27T13:21:59.680Z",
		"size": 3203,
		"path": "../public/assets/Services-BbjzUoZr.js"
	},
	"/assets/_categoria-D0np6L7n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-mfvzFfC1hJ3xxffzZ8nWm/Jo8JI\"",
		"mtime": "2026-10-27T13:21:59.680Z",
		"size": 236,
		"path": "../public/assets/_categoria-D0np6L7n.js"
	},
	"/assets/Contact-DLGQ-ZWk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a1f-egB47GewnTTApZRvyXbiFHZGuSo\"",
		"mtime": "2026-10-27T13:21:59.680Z",
		"size": 39455,
		"path": "../public/assets/Contact-DLGQ-ZWk.js"
	},
	"/assets/_slug-BZBxWbjB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc8-1z3updTWJnHzMUwOUqfhzdaKn5I\"",
		"mtime": "2026-10-27T13:21:59.681Z",
		"size": 3528,
		"path": "../public/assets/_slug-BZBxWbjB.js"
	},
	"/assets/_slug-CITMLS3Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1231-oXtEZkr5fwruu1YtVS+wW/uSRiQ\"",
		"mtime": "2026-10-27T13:21:59.681Z",
		"size": 4657,
		"path": "../public/assets/_slug-CITMLS3Q.js"
	},
	"/assets/_slug-CYO4NEGh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1749-kk9sHkBxZzrnJMKXw6WXcDoDIOk\"",
		"mtime": "2026-10-27T13:21:59.683Z",
		"size": 5961,
		"path": "../public/assets/_slug-CYO4NEGh.js"
	},
	"/assets/_termo-BTN8sEYM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9-NIFh96hFtKpwIuw4FecHIuI7FMM\"",
		"mtime": "2026-10-27T13:21:59.683Z",
		"size": 233,
		"path": "../public/assets/_termo-BTN8sEYM.js"
	},
	"/assets/about-CR-a4ldK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"281f-EM6M2b0h06TUQeKVjb+OihFvLSI\"",
		"mtime": "2026-10-27T13:21:59.683Z",
		"size": 10271,
		"path": "../public/assets/about-CR-a4ldK.js"
	},
	"/assets/blog-DgMGDaD5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-3BbMv0k+yg3cLirsjGnMNdy7T5k\"",
		"mtime": "2026-10-27T13:21:59.683Z",
		"size": 150,
		"path": "../public/assets/blog-DgMGDaD5.js"
	},
	"/assets/I18nContext-CfWLIMO-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11187-2kNyTfldxAe+vLAdJPIJ3cXbQIY\"",
		"mtime": "2026-10-27T13:21:59.680Z",
		"size": 70023,
		"path": "../public/assets/I18nContext-CfWLIMO-.js"
	},
	"/assets/case-duimp-BwPsh2Am.png": {
		"type": "image/png",
		"etag": "\"315c8-Obu7dxS+IEjppyGZxZ3XrySoaio\"",
		"mtime": "2026-10-27T13:21:59.691Z",
		"size": 202184,
		"path": "../public/assets/case-duimp-BwPsh2Am.png"
	},
	"/assets/case-zion-Dmah4KL0.png": {
		"type": "image/png",
		"etag": "\"2f3f8-sLcMZItsICXejoUlzl8cytz9Yfk\"",
		"mtime": "2026-10-27T13:21:59.695Z",
		"size": 193528,
		"path": "../public/assets/case-zion-Dmah4KL0.png"
	},
	"/assets/cases-CugWlY4s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17e-VpL/g5w0cRtB5L5Uhl1Bov+FJGo\"",
		"mtime": "2026-10-27T13:21:59.683Z",
		"size": 382,
		"path": "../public/assets/cases-CugWlY4s.js"
	},
	"/assets/code-xml-XujMK-ZU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-zkA/IXVwuEDpygflxKCTDNtNRj4\"",
		"mtime": "2026-10-27T13:21:59.683Z",
		"size": 203,
		"path": "../public/assets/code-xml-XujMK-ZU.js"
	},
	"/assets/circle-check-B-ZkZkyg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-wzPyiNzDDkv17gpXs30MklqIy/k\"",
		"mtime": "2026-10-27T13:21:59.683Z",
		"size": 173,
		"path": "../public/assets/circle-check-B-ZkZkyg.js"
	},
	"/assets/case-hidrolinfa-DisHZZVC.png": {
		"type": "image/png",
		"etag": "\"62014-I8Q3nU4N20ufkfFL5SGD9n34VQk\"",
		"mtime": "2026-10-27T13:21:59.692Z",
		"size": 401428,
		"path": "../public/assets/case-hidrolinfa-DisHZZVC.png"
	},
	"/assets/case-projecti-DmV8qQeA.png": {
		"type": "image/png",
		"etag": "\"29ee6-mWcdUEJtuSo4OIU4OZImAGSZDTw\"",
		"mtime": "2026-10-27T13:21:59.694Z",
		"size": 171750,
		"path": "../public/assets/case-projecti-DmV8qQeA.png"
	},
	"/assets/contact-CESxMZiX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ba-dzzwEgZ5U8o68VJkIpjHKEJSIKY\"",
		"mtime": "2026-10-27T13:21:59.683Z",
		"size": 442,
		"path": "../public/assets/contact-CESxMZiX.js"
	},
	"/assets/cookies-DV6qLFVq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9ed-sDdOFFTzWA+5wyvgv4qCgKPYs0Q\"",
		"mtime": "2026-10-27T13:21:59.683Z",
		"size": 2541,
		"path": "../public/assets/cookies-DV6qLFVq.js"
	},
	"/assets/evolves-logo-C9HCsjhS.webp": {
		"type": "image/webp",
		"etag": "\"27b0-/RwuJKNGkG0Vcq4uIci0phtygdo\"",
		"mtime": "2026-10-27T13:21:59.696Z",
		"size": 10160,
		"path": "../public/assets/evolves-logo-C9HCsjhS.webp"
	},
	"/assets/evolves-logo-gray-Ca0NJuQs.png": {
		"type": "image/png",
		"etag": "\"1dd6-6vFyC9EVlNw6IITT/hCJ7l4zxB4\"",
		"mtime": "2026-10-27T13:21:59.696Z",
		"size": 7638,
		"path": "../public/assets/evolves-logo-gray-Ca0NJuQs.png"
	},
	"/assets/evolves-logo-white-DVzZ6EPG.webp": {
		"type": "image/webp",
		"etag": "\"1a7a-KeHikTEAblIWexxWiExVEspVrs4\"",
		"mtime": "2026-10-27T13:21:59.696Z",
		"size": 6778,
		"path": "../public/assets/evolves-logo-white-DVzZ6EPG.webp"
	},
	"/assets/globe-CxaQlzzk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed-ZDFBgNamyIJBWbiFBKZmu1FVzoM\"",
		"mtime": "2026-10-27T13:21:59.683Z",
		"size": 237,
		"path": "../public/assets/globe-CxaQlzzk.js"
	},
	"/assets/matchContext-BmN0_Z1Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"307-yw3IAHtFZCKuTu3NmJPOLsmrUkk\"",
		"mtime": "2026-10-27T13:21:59.683Z",
		"size": 775,
		"path": "../public/assets/matchContext-BmN0_Z1Z.js"
	},
	"/assets/privacy-DAONbGgK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95e-VYfrVQ8gI7XX5qNd2qY3fWbqVvI\"",
		"mtime": "2026-10-27T13:21:59.687Z",
		"size": 2398,
		"path": "../public/assets/privacy-DAONbGgK.js"
	},
	"/assets/related-content-BM0ITnbc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d41-EbXf2/Q/b6YDIS+G+CTlRKg409I\"",
		"mtime": "2026-10-27T13:21:59.689Z",
		"size": 3393,
		"path": "../public/assets/related-content-BM0ITnbc.js"
	},
	"/assets/services-kuML8cXs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a-JNx2hwnuAr8usu98I10EcA6hsyg\"",
		"mtime": "2026-10-27T13:21:59.689Z",
		"size": 138,
		"path": "../public/assets/services-kuML8cXs.js"
	},
	"/assets/services-DMpEeWj-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"181-kszATZsasmwZ25syDy3ko+H0SCs\"",
		"mtime": "2026-10-27T13:21:59.689Z",
		"size": 385,
		"path": "../public/assets/services-DMpEeWj-.js"
	},
	"/assets/shield-CzhBEZFO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"358-IQbUVS7VGFbmriDwk0fXh0U0azw\"",
		"mtime": "2026-10-27T13:21:59.689Z",
		"size": 856,
		"path": "../public/assets/shield-CzhBEZFO.js"
	},
	"/assets/target-DjXmp6Ly.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c6-U13CPVmn9sUaYGnJdRsednUUOxQ\"",
		"mtime": "2026-10-27T13:21:59.690Z",
		"size": 454,
		"path": "../public/assets/target-DjXmp6Ly.js"
	},
	"/assets/routes-Bn-03pC_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16b7a-9/S2qSPmG7DOAdZJ6jr1l+s+tC8\"",
		"mtime": "2026-10-27T13:21:59.689Z",
		"size": 93050,
		"path": "../public/assets/routes-Bn-03pC_.js"
	},
	"/assets/useStore-DAs5vFz2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b50-gJVpJ72ZOwiLeFNrSvHPv8Rvm2k\"",
		"mtime": "2026-10-27T13:21:59.690Z",
		"size": 27472,
		"path": "../public/assets/useStore-DAs5vFz2.js"
	},
	"/assets/styles-DLw6u0Ay.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1e5e8-S2/+SXRgkNMV4isybYyIbOL8pFw\"",
		"mtime": "2026-10-27T13:21:59.698Z",
		"size": 124392,
		"path": "../public/assets/styles-DLw6u0Ay.css"
	},
	"/assets/index-BIqGUW2N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"63be8-Jr6Pz6YsbBEVQLH3WUOPR4EmTjc\"",
		"mtime": "2026-10-27T13:21:59.678Z",
		"size": 408552,
		"path": "../public/assets/index-BIqGUW2N.js"
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
