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
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"46-wb7Uic3JNoSlfOKPg1HNZ9d3XtU\"",
		"mtime": "2026-10-27T14:24:46.535Z",
		"size": 70,
		"path": "../public/robots.txt"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2633-ll0lDJJa/2UqEpeOw/Du09Hia2w\"",
		"mtime": "2026-10-27T14:24:46.535Z",
		"size": 9779,
		"path": "../public/llms.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"9b2-BWWh9aj3NDq52Tke2j4jMzhzK5g\"",
		"mtime": "2026-10-27T14:24:46.535Z",
		"size": 2482,
		"path": "../public/sitemap.xml"
	},
	"/assets/BlogIndex-COuwKtpP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1904-9+aO8DtULLtioFU3nciTKFp/wi8\"",
		"mtime": "2026-10-27T14:24:46.006Z",
		"size": 6404,
		"path": "../public/assets/BlogIndex-COuwKtpP.js"
	},
	"/.well-known/brave-rewards-verification.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"94-HzeRMnaKSRBMvc6MrwDzMANxEaE\"",
		"mtime": "2026-10-27T14:24:46.535Z",
		"size": 148,
		"path": "../public/.well-known/brave-rewards-verification.txt"
	},
	"/assets/Contact-BOcGqdxb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b44-mj1fPJjfov8onQ18Ih0Xzz+G3WY\"",
		"mtime": "2026-10-27T14:24:46.007Z",
		"size": 39748,
		"path": "../public/assets/Contact-BOcGqdxb.js"
	},
	"/assets/Footer-BicBWbCm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"464b-RYpcB/Kwikvlc3sP/Tb0H126FaE\"",
		"mtime": "2026-10-27T14:24:46.007Z",
		"size": 17995,
		"path": "../public/assets/Footer-BicBWbCm.js"
	},
	"/assets/Cases-CoJ0ijoL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ffc-riPL/HPChO1EGK4edFQLI1YmXlg\"",
		"mtime": "2026-10-27T14:24:46.006Z",
		"size": 12284,
		"path": "../public/assets/Cases-CoJ0ijoL.js"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"10bc-J91A6xjPa9BH38AYev0r1KOS+Pk\"",
		"mtime": "2026-10-27T14:24:46.535Z",
		"size": 4284,
		"path": "../public/favicon.png"
	},
	"/assets/_slug-BPur_fQB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1231-oKJKHxrA7XarzqhTpoflwZ6XzVk\"",
		"mtime": "2026-10-27T14:24:46.007Z",
		"size": 4657,
		"path": "../public/assets/_slug-BPur_fQB.js"
	},
	"/assets/Services-BlikuWM4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d65-+8Eyssmja7PD9iGG2lf7QinH3rE\"",
		"mtime": "2026-10-27T14:24:46.007Z",
		"size": 3429,
		"path": "../public/assets/Services-BlikuWM4.js"
	},
	"/assets/_categoria-D8qvAOMY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-IXHx8s3/Mk5nvC+mo/PrrUP+V0U\"",
		"mtime": "2026-10-27T14:24:46.007Z",
		"size": 236,
		"path": "../public/assets/_categoria-D8qvAOMY.js"
	},
	"/assets/_slug-F15qns6i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc8-VZo0sNTVqYb0Q0/prUdC42Z4rok\"",
		"mtime": "2026-10-27T14:24:46.007Z",
		"size": 3528,
		"path": "../public/assets/_slug-F15qns6i.js"
	},
	"/assets/_termo-B6RggQ4l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9-iIeJLnn3eCCzV25uGC1T454tZ+M\"",
		"mtime": "2026-10-27T14:24:46.008Z",
		"size": 233,
		"path": "../public/assets/_termo-B6RggQ4l.js"
	},
	"/assets/blog-DlZOZa_8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-f0HTYsLmO6mkxZ0J29+An/8l/QY\"",
		"mtime": "2026-10-27T14:24:46.008Z",
		"size": 150,
		"path": "../public/assets/blog-DlZOZa_8.js"
	},
	"/assets/about-BwCsKfx-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"281f-l3Yw5L/8bsSS27+rX1xAMMhjlhQ\"",
		"mtime": "2026-10-27T14:24:46.008Z",
		"size": 10271,
		"path": "../public/assets/about-BwCsKfx-.js"
	},
	"/assets/I18nContext-CfWLIMO-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11187-2kNyTfldxAe+vLAdJPIJ3cXbQIY\"",
		"mtime": "2026-10-27T14:24:46.007Z",
		"size": 70023,
		"path": "../public/assets/I18nContext-CfWLIMO-.js"
	},
	"/assets/_slug-RkkNHxca.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1749-KwmSg4FTjdk9q/ktMTH9CQUUq7I\"",
		"mtime": "2026-10-27T14:24:46.008Z",
		"size": 5961,
		"path": "../public/assets/_slug-RkkNHxca.js"
	},
	"/assets/case-hidrolinfa-DisHZZVC.png": {
		"type": "image/png",
		"etag": "\"62014-I8Q3nU4N20ufkfFL5SGD9n34VQk\"",
		"mtime": "2026-10-27T14:24:46.012Z",
		"size": 401428,
		"path": "../public/assets/case-hidrolinfa-DisHZZVC.png"
	},
	"/assets/case-zion-Dmah4KL0.png": {
		"type": "image/png",
		"etag": "\"2f3f8-sLcMZItsICXejoUlzl8cytz9Yfk\"",
		"mtime": "2026-10-27T14:24:46.012Z",
		"size": 193528,
		"path": "../public/assets/case-zion-Dmah4KL0.png"
	},
	"/assets/circle-check-B-ZkZkyg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-wzPyiNzDDkv17gpXs30MklqIy/k\"",
		"mtime": "2026-10-27T14:24:46.008Z",
		"size": 173,
		"path": "../public/assets/circle-check-B-ZkZkyg.js"
	},
	"/assets/case-duimp-BwPsh2Am.png": {
		"type": "image/png",
		"etag": "\"315c8-Obu7dxS+IEjppyGZxZ3XrySoaio\"",
		"mtime": "2026-10-27T14:24:46.012Z",
		"size": 202184,
		"path": "../public/assets/case-duimp-BwPsh2Am.png"
	},
	"/assets/code-xml-XujMK-ZU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-zkA/IXVwuEDpygflxKCTDNtNRj4\"",
		"mtime": "2026-10-27T14:24:46.008Z",
		"size": 203,
		"path": "../public/assets/code-xml-XujMK-ZU.js"
	},
	"/assets/case-projecti-DmV8qQeA.png": {
		"type": "image/png",
		"etag": "\"29ee6-mWcdUEJtuSo4OIU4OZImAGSZDTw\"",
		"mtime": "2026-10-27T14:24:46.012Z",
		"size": 171750,
		"path": "../public/assets/case-projecti-DmV8qQeA.png"
	},
	"/assets/cases-BniwI6GJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17e-nLuy5mJV7VvyyAOKK5fnq/WWqzA\"",
		"mtime": "2026-10-27T14:24:46.008Z",
		"size": 382,
		"path": "../public/assets/cases-BniwI6GJ.js"
	},
	"/assets/contact-c_KcuO7E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ba-5Xo6ou1MmPLY3hiEaa5eRHwTDeI\"",
		"mtime": "2026-10-27T14:24:46.008Z",
		"size": 442,
		"path": "../public/assets/contact-c_KcuO7E.js"
	},
	"/assets/cookies-Cazj8W7H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9ed-djNJ4gSDs8SKijyDqHVd4WJMr/M\"",
		"mtime": "2026-10-27T14:24:46.009Z",
		"size": 2541,
		"path": "../public/assets/cookies-Cazj8W7H.js"
	},
	"/assets/evolves-logo-white-DVzZ6EPG.webp": {
		"type": "image/webp",
		"etag": "\"1a7a-KeHikTEAblIWexxWiExVEspVrs4\"",
		"mtime": "2026-10-27T14:24:46.013Z",
		"size": 6778,
		"path": "../public/assets/evolves-logo-white-DVzZ6EPG.webp"
	},
	"/assets/evolves-logo-C9HCsjhS.webp": {
		"type": "image/webp",
		"etag": "\"27b0-/RwuJKNGkG0Vcq4uIci0phtygdo\"",
		"mtime": "2026-10-27T14:24:46.012Z",
		"size": 10160,
		"path": "../public/assets/evolves-logo-C9HCsjhS.webp"
	},
	"/assets/evolves-logo-gray-Ca0NJuQs.png": {
		"type": "image/png",
		"etag": "\"1dd6-6vFyC9EVlNw6IITT/hCJ7l4zxB4\"",
		"mtime": "2026-10-27T14:24:46.012Z",
		"size": 7638,
		"path": "../public/assets/evolves-logo-gray-Ca0NJuQs.png"
	},
	"/assets/globe-CxaQlzzk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed-ZDFBgNamyIJBWbiFBKZmu1FVzoM\"",
		"mtime": "2026-10-27T14:24:46.009Z",
		"size": 237,
		"path": "../public/assets/globe-CxaQlzzk.js"
	},
	"/assets/matchContext-BmN0_Z1Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"307-yw3IAHtFZCKuTu3NmJPOLsmrUkk\"",
		"mtime": "2026-10-27T14:24:46.011Z",
		"size": 775,
		"path": "../public/assets/matchContext-BmN0_Z1Z.js"
	},
	"/assets/privacy-Dsu_FSvE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95e-vcF+NxcqYsfYdbDL23dT4xQyt84\"",
		"mtime": "2026-10-27T14:24:46.011Z",
		"size": 2398,
		"path": "../public/assets/privacy-Dsu_FSvE.js"
	},
	"/assets/related-content-BM0ITnbc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d41-EbXf2/Q/b6YDIS+G+CTlRKg409I\"",
		"mtime": "2026-10-27T14:24:46.011Z",
		"size": 3393,
		"path": "../public/assets/related-content-BM0ITnbc.js"
	},
	"/assets/index-D4AX0M0e.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"63bd6-Dx3oSM+PTeJtsaBC8AfNexGM7Xs\"",
		"mtime": "2026-10-27T14:24:46.006Z",
		"size": 408534,
		"path": "../public/assets/index-D4AX0M0e.js"
	},
	"/assets/routes-B-ntThce.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17399-Y+YqeRxJtuC86qk2aGPKceh4tns\"",
		"mtime": "2026-10-27T14:24:46.011Z",
		"size": 95129,
		"path": "../public/assets/routes-B-ntThce.js"
	},
	"/assets/services-BFjQz9o7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"181-ECjYf3wbPjLLyL8xQPF70uj3zf8\"",
		"mtime": "2026-10-27T14:24:46.011Z",
		"size": 385,
		"path": "../public/assets/services-BFjQz9o7.js"
	},
	"/assets/services-BuWUVSDb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a-vZqL042AynGA9IktfqSQdPbrd8k\"",
		"mtime": "2026-10-27T14:24:46.011Z",
		"size": 138,
		"path": "../public/assets/services-BuWUVSDb.js"
	},
	"/assets/shield-CzhBEZFO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"358-IQbUVS7VGFbmriDwk0fXh0U0azw\"",
		"mtime": "2026-10-27T14:24:46.011Z",
		"size": 856,
		"path": "../public/assets/shield-CzhBEZFO.js"
	},
	"/assets/styles-CtxquN1A.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1f38c-bKrGiV+pfwNuxRlor9SlJY6BO+0\"",
		"mtime": "2026-10-27T14:24:46.013Z",
		"size": 127884,
		"path": "../public/assets/styles-CtxquN1A.css"
	},
	"/assets/useStore-DAs5vFz2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b50-gJVpJ72ZOwiLeFNrSvHPv8Rvm2k\"",
		"mtime": "2026-10-27T14:24:46.011Z",
		"size": 27472,
		"path": "../public/assets/useStore-DAs5vFz2.js"
	},
	"/assets/target-DjXmp6Ly.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c6-U13CPVmn9sUaYGnJdRsednUUOxQ\"",
		"mtime": "2026-10-27T14:24:46.011Z",
		"size": 454,
		"path": "../public/assets/target-DjXmp6Ly.js"
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
