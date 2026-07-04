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
	"/assets/Cases-tglq_xtv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"862-0Hig/uWYHKDjcPE/SUYrbB5NVcU\"",
		"mtime": "2026-07-04T02:33:13.825Z",
		"size": 2146,
		"path": "../public/assets/Cases-tglq_xtv.js"
	},
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"10bc-J91A6xjPa9BH38AYev0r1KOS+Pk\"",
		"mtime": "2026-07-04T02:33:14.053Z",
		"size": 4284,
		"path": "../public/favicon.png"
	},
	"/assets/About-Cg-s_cu4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2bfa-3TcaYsjJwtxGcRH9r9DIm3yRZ7E\"",
		"mtime": "2026-07-04T02:33:13.825Z",
		"size": 11258,
		"path": "../public/assets/About-Cg-s_cu4.js"
	},
	"/assets/Contact-E3UGUgCH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9913-atj1lmF1i6HooHmn+gLpB7KqXLw\"",
		"mtime": "2026-07-04T02:33:13.825Z",
		"size": 39187,
		"path": "../public/assets/Contact-E3UGUgCH.js"
	},
	"/assets/Footer-CetOsEjA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"355b-jGuuapJE6tOD3S1bp3TEyFramus\"",
		"mtime": "2026-07-04T02:33:13.825Z",
		"size": 13659,
		"path": "../public/assets/Footer-CetOsEjA.js"
	},
	"/assets/Services-DphAGiPF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b6c-yxzOLrYwCW6AnZt/xYuMmtoFfyM\"",
		"mtime": "2026-07-04T02:33:13.825Z",
		"size": 2924,
		"path": "../public/assets/Services-DphAGiPF.js"
	},
	"/assets/_slug-Bzl2TIos.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f0c-fMCY2r5McfR1/sz9dXUhdp2wUmY\"",
		"mtime": "2026-07-04T02:33:13.825Z",
		"size": 3852,
		"path": "../public/assets/_slug-Bzl2TIos.js"
	},
	"/assets/_slug-CfLw-7mF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"179b-oSP1qWs185lM2yLcQuxvjVTuQPU\"",
		"mtime": "2026-07-04T02:33:13.825Z",
		"size": 6043,
		"path": "../public/assets/_slug-CfLw-7mF.js"
	},
	"/assets/_slug-DZaqQRFy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"183f-fG0s98ZoZb2LXl2XkZcHc9xK77A\"",
		"mtime": "2026-07-04T02:33:13.825Z",
		"size": 6207,
		"path": "../public/assets/_slug-DZaqQRFy.js"
	},
	"/assets/about-B1IzqXoV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"663-rDFXMdaI1xFL1FHFp0c0Zf2H3jk\"",
		"mtime": "2026-07-04T02:33:13.826Z",
		"size": 1635,
		"path": "../public/assets/about-B1IzqXoV.js"
	},
	"/assets/arrow-right-fYWjPg4t.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a5-hKr/2g1MsQ+WSUj0I4qigqsHU4s\"",
		"mtime": "2026-07-04T02:33:13.826Z",
		"size": 165,
		"path": "../public/assets/arrow-right-fYWjPg4t.js"
	},
	"/assets/blog-Dj2GD_pn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1782-mFPGrutNCSa0+I9G4YcegkaadjM\"",
		"mtime": "2026-07-04T02:33:13.826Z",
		"size": 6018,
		"path": "../public/assets/blog-Dj2GD_pn.js"
	},
	"/assets/case-duimp-BwPsh2Am.png": {
		"type": "image/png",
		"etag": "\"315c8-Obu7dxS+IEjppyGZxZ3XrySoaio\"",
		"mtime": "2026-07-04T02:33:13.827Z",
		"size": 202184,
		"path": "../public/assets/case-duimp-BwPsh2Am.png"
	},
	"/assets/case-projecti-DmV8qQeA.png": {
		"type": "image/png",
		"etag": "\"29ee6-mWcdUEJtuSo4OIU4OZImAGSZDTw\"",
		"mtime": "2026-07-04T02:33:13.827Z",
		"size": 171750,
		"path": "../public/assets/case-projecti-DmV8qQeA.png"
	},
	"/assets/cases-b1Z-UGpW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"171-0fNtWt2Djx54szeHPKJGrg+qXGY\"",
		"mtime": "2026-07-04T02:33:13.826Z",
		"size": 369,
		"path": "../public/assets/cases-b1Z-UGpW.js"
	},
	"/assets/circle-check-Dn7vMXP-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-07Z1kuCYLrWb34PJ2hRkLX8UXM0\"",
		"mtime": "2026-07-04T02:33:13.826Z",
		"size": 178,
		"path": "../public/assets/circle-check-Dn7vMXP-.js"
	},
	"/assets/contact-Dgmb9Vxp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ad-jcG/WmqnVbufYXpXPqb+NZu9hbc\"",
		"mtime": "2026-07-04T02:33:13.826Z",
		"size": 429,
		"path": "../public/assets/contact-Dgmb9Vxp.js"
	},
	"/assets/cookies-CRwXo3hv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9dd-09vy6LWVWjVL/VwAUx1fj43ghO4\"",
		"mtime": "2026-07-04T02:33:13.826Z",
		"size": 2525,
		"path": "../public/assets/cookies-CRwXo3hv.js"
	},
	"/assets/case-zion-Dmah4KL0.png": {
		"type": "image/png",
		"etag": "\"2f3f8-sLcMZItsICXejoUlzl8cytz9Yfk\"",
		"mtime": "2026-07-04T02:33:13.827Z",
		"size": 193528,
		"path": "../public/assets/case-zion-Dmah4KL0.png"
	},
	"/assets/createLucideIcon-CW6GZV7f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22da-XfbbChxnHq5xmUqxOF8MhA0KkMM\"",
		"mtime": "2026-07-04T02:33:13.826Z",
		"size": 8922,
		"path": "../public/assets/createLucideIcon-CW6GZV7f.js"
	},
	"/assets/evolves-logo-B_KsYobp.png": {
		"type": "image/png",
		"etag": "\"5acf-NN3NsFdxYNOvcZfMYzhcKAqd+RE\"",
		"mtime": "2026-07-04T02:33:13.827Z",
		"size": 23247,
		"path": "../public/assets/evolves-logo-B_KsYobp.png"
	},
	"/assets/evolves-logo-gray-Ca0NJuQs.png": {
		"type": "image/png",
		"etag": "\"1dd6-6vFyC9EVlNw6IITT/hCJ7l4zxB4\"",
		"mtime": "2026-07-04T02:33:13.828Z",
		"size": 7638,
		"path": "../public/assets/evolves-logo-gray-Ca0NJuQs.png"
	},
	"/assets/evolves-logo-white-CMcF_Ob-.png": {
		"type": "image/png",
		"etag": "\"21c7-UgPr8ymROBmL0lRxgmuEiqAPGC8\"",
		"mtime": "2026-07-04T02:33:13.828Z",
		"size": 8647,
		"path": "../public/assets/evolves-logo-white-CMcF_Ob-.png"
	},
	"/assets/matchContext-DouxvFVB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c8-lcBeh+kqCWRRnKp/byb4vImH9D4\"",
		"mtime": "2026-07-04T02:33:13.826Z",
		"size": 712,
		"path": "../public/assets/matchContext-DouxvFVB.js"
	},
	"/assets/index-gc7edl0T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5a102-V473V2+/TAwd+/gGxyrxPwGK+NE\"",
		"mtime": "2026-07-04T02:33:13.825Z",
		"size": 368898,
		"path": "../public/assets/index-gc7edl0T.js"
	},
	"/assets/pen-tool-BqdZ8_nr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"272-Hs1J4rEzsFJnKy5mcTvLuE0vRNo\"",
		"mtime": "2026-07-04T02:33:13.826Z",
		"size": 626,
		"path": "../public/assets/pen-tool-BqdZ8_nr.js"
	},
	"/assets/privacy-CzFgjAMc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"94e-wjCbIcYpGFTarep/4aw/ldMDz5w\"",
		"mtime": "2026-07-04T02:33:13.826Z",
		"size": 2382,
		"path": "../public/assets/privacy-CzFgjAMc.js"
	},
	"/assets/routes-BTtTeeCL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d41-ug7QP8u+DByQ2ADBP5N9aqfrvsY\"",
		"mtime": "2026-07-04T02:33:13.826Z",
		"size": 3393,
		"path": "../public/assets/routes-BTtTeeCL.js"
	},
	"/assets/routes-SXTkdMFc.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"12d-jfkr+/1X+Y8rHGJesaSlz1Ry7pU\"",
		"mtime": "2026-07-04T02:33:13.828Z",
		"size": 301,
		"path": "../public/assets/routes-SXTkdMFc.css"
	},
	"/assets/search-Banrl6sN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae-1iYFZzYjkQjzv3sHjZD9LlaBZWg\"",
		"mtime": "2026-07-04T02:33:13.827Z",
		"size": 174,
		"path": "../public/assets/search-Banrl6sN.js"
	},
	"/assets/services-BE0Vst_o.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a-GKSW1yiqG6LrLzqOAiESwBSmM7s\"",
		"mtime": "2026-07-04T02:33:13.827Z",
		"size": 138,
		"path": "../public/assets/services-BE0Vst_o.js"
	},
	"/assets/services-BcsaU7ry.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16a-2E+UeH0p+AEWDy6qrOfOAji/Bao\"",
		"mtime": "2026-07-04T02:33:13.827Z",
		"size": 362,
		"path": "../public/assets/services-BcsaU7ry.js"
	},
	"/assets/styles-Bym8-rvc.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19e16-qQE05lzT99s7g3h1BWhPZ0uumrM\"",
		"mtime": "2026-07-04T02:33:13.828Z",
		"size": 106006,
		"path": "../public/assets/styles-Bym8-rvc.css"
	},
	"/assets/target-ZFPhtWb0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2-Qs1Jngx2xE2uhIvcdfVeR7v+b54\"",
		"mtime": "2026-07-04T02:33:13.827Z",
		"size": 226,
		"path": "../public/assets/target-ZFPhtWb0.js"
	},
	"/assets/useStore-DAs5vFz2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b50-gJVpJ72ZOwiLeFNrSvHPv8Rvm2k\"",
		"mtime": "2026-07-04T02:33:13.827Z",
		"size": 27472,
		"path": "../public/assets/useStore-DAs5vFz2.js"
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
var _lazy_jlWGRk = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_jlWGRk
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
