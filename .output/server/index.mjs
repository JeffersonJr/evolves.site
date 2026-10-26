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
		"mtime": "2026-10-26T21:02:36.090Z",
		"size": 4284,
		"path": "../public/favicon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"46-wb7Uic3JNoSlfOKPg1HNZ9d3XtU\"",
		"mtime": "2026-10-26T21:02:36.089Z",
		"size": 70,
		"path": "../public/robots.txt"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2633-ll0lDJJa/2UqEpeOw/Du09Hia2w\"",
		"mtime": "2026-10-26T21:02:36.089Z",
		"size": 9779,
		"path": "../public/llms.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"9b2-BWWh9aj3NDq52Tke2j4jMzhzK5g\"",
		"mtime": "2026-10-26T21:02:36.089Z",
		"size": 2482,
		"path": "../public/sitemap.xml"
	},
	"/.well-known/brave-rewards-verification.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"94-HzeRMnaKSRBMvc6MrwDzMANxEaE\"",
		"mtime": "2026-10-26T21:02:36.089Z",
		"size": 148,
		"path": "../public/.well-known/brave-rewards-verification.txt"
	},
	"/assets/BlogIndex-P6F4OLIP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1904-/IeVgLZzF/SI75P346bck+xPUtQ\"",
		"mtime": "2026-10-26T21:02:35.711Z",
		"size": 6404,
		"path": "../public/assets/BlogIndex-P6F4OLIP.js"
	},
	"/assets/Contact-BvM7TW_t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97af-IL+3gote4X5W/eOSckEisHFZlaI\"",
		"mtime": "2026-10-26T21:02:35.712Z",
		"size": 38831,
		"path": "../public/assets/Contact-BvM7TW_t.js"
	},
	"/assets/I18nContext-C4g-IfEw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10557-GypF7U52RAxS9cFIif8Nue2GGKg\"",
		"mtime": "2026-10-26T21:02:35.712Z",
		"size": 66903,
		"path": "../public/assets/I18nContext-C4g-IfEw.js"
	},
	"/assets/Cases-BmLeYJgP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f58-FYXLzbFOwdKqX9MB9OHZR4gOX/c\"",
		"mtime": "2026-10-26T21:02:35.712Z",
		"size": 8024,
		"path": "../public/assets/Cases-BmLeYJgP.js"
	},
	"/assets/Services-D9EgCT8n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bb4-8byeqqFd13UBVDcUJcSKmFp7BD8\"",
		"mtime": "2026-10-26T21:02:35.712Z",
		"size": 2996,
		"path": "../public/assets/Services-D9EgCT8n.js"
	},
	"/assets/_slug-BGDZrZX0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1744-7conweBSsYzh4uHtoNIotc3mxiA\"",
		"mtime": "2026-10-26T21:02:35.712Z",
		"size": 5956,
		"path": "../public/assets/_slug-BGDZrZX0.js"
	},
	"/assets/_slug-BKQMhCwS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1227-TmUeeAFfxUqgYh9PEUEOYXUJqcc\"",
		"mtime": "2026-10-26T21:02:35.713Z",
		"size": 4647,
		"path": "../public/assets/_slug-BKQMhCwS.js"
	},
	"/assets/Footer-0hxFrdln.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4115-bpshVa84Wl5VpOKWHBuIP/mZamk\"",
		"mtime": "2026-10-26T21:02:35.712Z",
		"size": 16661,
		"path": "../public/assets/Footer-0hxFrdln.js"
	},
	"/assets/_slug-D_VNsiP-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc8-/mK7xPQxsFi8JcKL245jdV+E8PU\"",
		"mtime": "2026-10-26T21:02:35.713Z",
		"size": 3528,
		"path": "../public/assets/_slug-D_VNsiP-.js"
	},
	"/assets/_termo-COhxyaQF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9-2OvTlgUm4mru5oO7feWwi1MZYfs\"",
		"mtime": "2026-10-26T21:02:35.713Z",
		"size": 233,
		"path": "../public/assets/_termo-COhxyaQF.js"
	},
	"/assets/blog-BJ8balYq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-GpddvDt/83YKw/8AUJq0uiZKIG0\"",
		"mtime": "2026-10-26T21:02:35.713Z",
		"size": 150,
		"path": "../public/assets/blog-BJ8balYq.js"
	},
	"/assets/about-D8hYrC9X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"281f-yzbnFJQ4bmIbE9rIRHQRbfMW92M\"",
		"mtime": "2026-10-26T21:02:35.713Z",
		"size": 10271,
		"path": "../public/assets/about-D8hYrC9X.js"
	},
	"/assets/case-duimp-BwPsh2Am.png": {
		"type": "image/png",
		"etag": "\"315c8-Obu7dxS+IEjppyGZxZ3XrySoaio\"",
		"mtime": "2026-10-26T21:02:35.714Z",
		"size": 202184,
		"path": "../public/assets/case-duimp-BwPsh2Am.png"
	},
	"/assets/case-hidrolinfa-DisHZZVC.png": {
		"type": "image/png",
		"etag": "\"62014-I8Q3nU4N20ufkfFL5SGD9n34VQk\"",
		"mtime": "2026-10-26T21:02:35.715Z",
		"size": 401428,
		"path": "../public/assets/case-hidrolinfa-DisHZZVC.png"
	},
	"/assets/cases-jXUvDYkV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17e-N7lHRGKZaji1UccVcO74s8tm6lw\"",
		"mtime": "2026-10-26T21:02:35.713Z",
		"size": 382,
		"path": "../public/assets/cases-jXUvDYkV.js"
	},
	"/assets/circle-check-B5nCWWRP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-cuVD4QzdcrRk3Ntw1tW48/V3bC8\"",
		"mtime": "2026-10-26T21:02:35.713Z",
		"size": 173,
		"path": "../public/assets/circle-check-B5nCWWRP.js"
	},
	"/assets/_categoria-CPQ9u-Qe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-hgaKlRHW3Lphd0WC3RrpzyHJIxU\"",
		"mtime": "2026-10-26T21:02:35.712Z",
		"size": 236,
		"path": "../public/assets/_categoria-CPQ9u-Qe.js"
	},
	"/assets/case-zion-Dmah4KL0.png": {
		"type": "image/png",
		"etag": "\"2f3f8-sLcMZItsICXejoUlzl8cytz9Yfk\"",
		"mtime": "2026-10-26T21:02:35.716Z",
		"size": 193528,
		"path": "../public/assets/case-zion-Dmah4KL0.png"
	},
	"/assets/case-projecti-DmV8qQeA.png": {
		"type": "image/png",
		"etag": "\"29ee6-mWcdUEJtuSo4OIU4OZImAGSZDTw\"",
		"mtime": "2026-10-26T21:02:35.716Z",
		"size": 171750,
		"path": "../public/assets/case-projecti-DmV8qQeA.png"
	},
	"/assets/code-xml-CgmYopAX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-Qgduw7r/nu4P3MeEiOuzqVMano8\"",
		"mtime": "2026-10-26T21:02:35.713Z",
		"size": 203,
		"path": "../public/assets/code-xml-CgmYopAX.js"
	},
	"/assets/cookies-DfrVsc60.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9ed-7SQzLmtz7cg173g+7laKzpGhWxE\"",
		"mtime": "2026-10-26T21:02:35.714Z",
		"size": 2541,
		"path": "../public/assets/cookies-DfrVsc60.js"
	},
	"/assets/contact-CwM-yXxN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ba-r0IuSkIbn2H4i5Kd5BplelSlHSI\"",
		"mtime": "2026-10-26T21:02:35.714Z",
		"size": 442,
		"path": "../public/assets/contact-CwM-yXxN.js"
	},
	"/assets/evolves-logo-C9HCsjhS.webp": {
		"type": "image/webp",
		"etag": "\"27b0-/RwuJKNGkG0Vcq4uIci0phtygdo\"",
		"mtime": "2026-10-26T21:02:35.716Z",
		"size": 10160,
		"path": "../public/assets/evolves-logo-C9HCsjhS.webp"
	},
	"/assets/evolves-logo-gray-Ca0NJuQs.png": {
		"type": "image/png",
		"etag": "\"1dd6-6vFyC9EVlNw6IITT/hCJ7l4zxB4\"",
		"mtime": "2026-10-26T21:02:35.717Z",
		"size": 7638,
		"path": "../public/assets/evolves-logo-gray-Ca0NJuQs.png"
	},
	"/assets/evolves-logo-white-DVzZ6EPG.webp": {
		"type": "image/webp",
		"etag": "\"1a7a-KeHikTEAblIWexxWiExVEspVrs4\"",
		"mtime": "2026-10-26T21:02:35.718Z",
		"size": 6778,
		"path": "../public/assets/evolves-logo-white-DVzZ6EPG.webp"
	},
	"/assets/globe-B5GdbEOf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed-3b1+EGlbjyv8ZK9MpwtCpiX00SI\"",
		"mtime": "2026-10-26T21:02:35.714Z",
		"size": 237,
		"path": "../public/assets/globe-B5GdbEOf.js"
	},
	"/assets/matchContext-BmN0_Z1Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"307-yw3IAHtFZCKuTu3NmJPOLsmrUkk\"",
		"mtime": "2026-10-26T21:02:35.714Z",
		"size": 775,
		"path": "../public/assets/matchContext-BmN0_Z1Z.js"
	},
	"/assets/privacy-ip2GyxmT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95e-g4YqNpvA4YeXmmwOa6C6yq4iQGA\"",
		"mtime": "2026-10-26T21:02:35.714Z",
		"size": 2398,
		"path": "../public/assets/privacy-ip2GyxmT.js"
	},
	"/assets/related-content-BM0ITnbc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d41-EbXf2/Q/b6YDIS+G+CTlRKg409I\"",
		"mtime": "2026-10-26T21:02:35.714Z",
		"size": 3393,
		"path": "../public/assets/related-content-BM0ITnbc.js"
	},
	"/assets/routes-CBuU4qwc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1401b-txaGHITtwPrKhgdrs5X7rB4Y6Kw\"",
		"mtime": "2026-10-26T21:02:35.714Z",
		"size": 81947,
		"path": "../public/assets/routes-CBuU4qwc.js"
	},
	"/assets/services-C4Bh-_MU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a-cCqhGaoUtRKyE9Y3KUYcdRkVbeY\"",
		"mtime": "2026-10-26T21:02:35.714Z",
		"size": 138,
		"path": "../public/assets/services-C4Bh-_MU.js"
	},
	"/assets/index-BXsZwEM8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"63606-FJFcg7tBY0uUD82PZfdxSyI8kQY\"",
		"mtime": "2026-10-26T21:02:35.710Z",
		"size": 407046,
		"path": "../public/assets/index-BXsZwEM8.js"
	},
	"/assets/services-mfHBsMwa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"181-zbkDuW+4p59y5WP1+FJdUY0nvhg\"",
		"mtime": "2026-10-26T21:02:35.714Z",
		"size": 385,
		"path": "../public/assets/services-mfHBsMwa.js"
	},
	"/assets/shield-DoMylvFV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"358-35QPsCiIICAk4tdW0QWYWLqnrwM\"",
		"mtime": "2026-10-26T21:02:35.714Z",
		"size": 856,
		"path": "../public/assets/shield-DoMylvFV.js"
	},
	"/assets/useStore-DAs5vFz2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b50-gJVpJ72ZOwiLeFNrSvHPv8Rvm2k\"",
		"mtime": "2026-10-26T21:02:35.714Z",
		"size": 27472,
		"path": "../public/assets/useStore-DAs5vFz2.js"
	},
	"/assets/styles-CdfLfK8a.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1bbaa-n5OEMoV4m83J71wVAtUPwgXkzQ8\"",
		"mtime": "2026-10-26T21:02:35.718Z",
		"size": 113578,
		"path": "../public/assets/styles-CdfLfK8a.css"
	},
	"/assets/target-BU79tzzn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c6-EdVf38P6UZgqOhhqyO+oqMXJYmU\"",
		"mtime": "2026-10-26T21:02:35.714Z",
		"size": 454,
		"path": "../public/assets/target-BU79tzzn.js"
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
