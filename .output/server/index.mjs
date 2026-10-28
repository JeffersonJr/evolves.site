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
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs").then((n) => n.d)) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"10bc-J91A6xjPa9BH38AYev0r1KOS+Pk\"",
		"mtime": "2026-10-28T17:05:44.891Z",
		"size": 4284,
		"path": "../public/favicon.png"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2f7e-kz9zWVd5COJBBXc0p1j8h1vJu1s\"",
		"mtime": "2026-10-28T17:05:44.890Z",
		"size": 12158,
		"path": "../public/llms.txt"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"46-wb7Uic3JNoSlfOKPg1HNZ9d3XtU\"",
		"mtime": "2026-10-28T17:05:44.890Z",
		"size": 70,
		"path": "../public/robots.txt"
	},
	"/assets/BlogIndex-DpT_vZ81.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1976-9goXKUPzZFpT0OWkRkoJuqz6mLE\"",
		"mtime": "2026-10-28T17:05:44.438Z",
		"size": 6518,
		"path": "../public/assets/BlogIndex-DpT_vZ81.js"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"cc42-O8ZCNKPopaOXXXsWxy+ihWz1FmI\"",
		"mtime": "2026-10-28T17:05:44.890Z",
		"size": 52290,
		"path": "../public/sitemap.xml"
	},
	"/.well-known/brave-rewards-verification.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"94-HzeRMnaKSRBMvc6MrwDzMANxEaE\"",
		"mtime": "2026-10-28T17:05:44.890Z",
		"size": 148,
		"path": "../public/.well-known/brave-rewards-verification.txt"
	},
	"/assets/Contact-DobwGqyw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b80-ZsOlb/WcCQspjud70Ds9Byp1pQc\"",
		"mtime": "2026-10-28T17:05:44.439Z",
		"size": 39808,
		"path": "../public/assets/Contact-DobwGqyw.js"
	},
	"/assets/Cases-zwJx9OW9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fe8-SzB/hGQhARXo7/ZUL5QVp+kx7js\"",
		"mtime": "2026-10-28T17:05:44.439Z",
		"size": 16360,
		"path": "../public/assets/Cases-zwJx9OW9.js"
	},
	"/assets/Footer-Kh0QuOpR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6bb7-cqZZXS4yLPifl+DXKXJc2o1yflE\"",
		"mtime": "2026-10-28T17:05:44.439Z",
		"size": 27575,
		"path": "../public/assets/Footer-Kh0QuOpR.js"
	},
	"/assets/Services-B-JCKaKG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d9e-hcysyGPRoyM+yGYekIHF8A/JToo\"",
		"mtime": "2026-10-28T17:05:44.439Z",
		"size": 3486,
		"path": "../public/assets/Services-B-JCKaKG.js"
	},
	"/assets/_locale-rAaLrAP9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-jl8YAsNWl5e+vQwJmkSIhwIx1Zk\"",
		"mtime": "2026-10-28T17:05:44.439Z",
		"size": 141,
		"path": "../public/assets/_locale-rAaLrAP9.js"
	},
	"/assets/I18nContext-DZ8V8Sla.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13bf9-dTrKgZjUTCpK9XyfC9Mwag/bAWk\"",
		"mtime": "2026-10-28T17:05:44.439Z",
		"size": 80889,
		"path": "../public/assets/I18nContext-DZ8V8Sla.js"
	},
	"/assets/_slug-Di9_CIS6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b88-ZtP/5z3zmBrSf44jVt//VhG72Bw\"",
		"mtime": "2026-10-28T17:05:44.439Z",
		"size": 15240,
		"path": "../public/assets/_slug-Di9_CIS6.js"
	},
	"/assets/_categoria-CGGpPc9U.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f4-7G101qYB76Ng3cHBPVr4jy95OD8\"",
		"mtime": "2026-10-28T17:05:44.439Z",
		"size": 244,
		"path": "../public/assets/_categoria-CGGpPc9U.js"
	},
	"/assets/_slug-_f31I4dN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2a-V0NwrffRolMwVCEt9CqEIhb6kGE\"",
		"mtime": "2026-10-28T17:05:44.439Z",
		"size": 3626,
		"path": "../public/assets/_slug-_f31I4dN.js"
	},
	"/assets/_termo-BmGJoELD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e7-yWsKBvLx6o6vXk3c3QDIuFcqCEg\"",
		"mtime": "2026-10-28T17:05:44.439Z",
		"size": 231,
		"path": "../public/assets/_termo-BmGJoELD.js"
	},
	"/assets/_slug-BNDYH5uL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14a9-ZciLqQqiv1NialgOhMNYGRMvliA\"",
		"mtime": "2026-10-28T17:05:44.439Z",
		"size": 5289,
		"path": "../public/assets/_slug-BNDYH5uL.js"
	},
	"/assets/about-Cox0YmpF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29ff-ppjpe17IggB+x58WCvyaIcagkjs\"",
		"mtime": "2026-10-28T17:05:44.439Z",
		"size": 10751,
		"path": "../public/assets/about-Cox0YmpF.js"
	},
	"/assets/_locale-D10ENGGp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1714b-LqUZy68O0MUnIH2bHGf5R1qyT8k\"",
		"mtime": "2026-10-28T17:05:44.439Z",
		"size": 94539,
		"path": "../public/assets/_locale-D10ENGGp.js"
	},
	"/assets/blog-BqDGImCP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-zKiI0OO8kgcTLRngT8gx+4inPY0\"",
		"mtime": "2026-10-28T17:05:44.440Z",
		"size": 153,
		"path": "../public/assets/blog-BqDGImCP.js"
	},
	"/assets/case-glebra-sm-B8pfWzqv.webp": {
		"type": "image/webp",
		"etag": "\"38f6-hkztkOPtfjWqKVqbVyixVzWQXzI\"",
		"mtime": "2026-10-28T17:05:44.441Z",
		"size": 14582,
		"path": "../public/assets/case-glebra-sm-B8pfWzqv.webp"
	},
	"/assets/case-glebra-D4d1_AwH.webp": {
		"type": "image/webp",
		"etag": "\"910c-R/25gwAULNcGhRiAqS4zqQmgRJc\"",
		"mtime": "2026-10-28T17:05:44.441Z",
		"size": 37132,
		"path": "../public/assets/case-glebra-D4d1_AwH.webp"
	},
	"/assets/case-hidrolinfa-sm-ZUYKJm7x.webp": {
		"type": "image/webp",
		"etag": "\"45da-ngrsVrJS1oyur9OBgXxCOQfgxRs\"",
		"mtime": "2026-10-28T17:05:44.442Z",
		"size": 17882,
		"path": "../public/assets/case-hidrolinfa-sm-ZUYKJm7x.webp"
	},
	"/assets/case-kura-terapias-Cw3Z7eWl.webp": {
		"type": "image/webp",
		"etag": "\"282ba-1IGW0Oe1xgOCEaPxVyVXhLOQF4s\"",
		"mtime": "2026-10-28T17:05:44.442Z",
		"size": 164538,
		"path": "../public/assets/case-kura-terapias-Cw3Z7eWl.webp"
	},
	"/assets/case-hidrolinfa-DDNNP4CB.webp": {
		"type": "image/webp",
		"etag": "\"a24a-vxTZFhBuQYVePEMk0EmIG0DCt34\"",
		"mtime": "2026-10-28T17:05:44.442Z",
		"size": 41546,
		"path": "../public/assets/case-hidrolinfa-DDNNP4CB.webp"
	},
	"/assets/case-kura-terapias-sm-CoiCwAuO.webp": {
		"type": "image/webp",
		"etag": "\"1dc0-ZPmuUb/KcQcdJj8PULMnal5oSRw\"",
		"mtime": "2026-10-28T17:05:44.442Z",
		"size": 7616,
		"path": "../public/assets/case-kura-terapias-sm-CoiCwAuO.webp"
	},
	"/assets/case-uniaofraternal-CF9oo6l7.webp": {
		"type": "image/webp",
		"etag": "\"7aaa-dhktndYcqE5UGN3kq2GP8C+KWzQ\"",
		"mtime": "2026-10-28T17:05:44.442Z",
		"size": 31402,
		"path": "../public/assets/case-uniaofraternal-CF9oo6l7.webp"
	},
	"/assets/cases-cIgxMdDe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"181-ZHXvaRnsWd6rBSn41MBY5Ckgqhw\"",
		"mtime": "2026-10-28T17:05:44.440Z",
		"size": 385,
		"path": "../public/assets/cases-cIgxMdDe.js"
	},
	"/assets/circle-check-D571plDZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-SkqDAvSUUUbPGDWns79UunhJ0VQ\"",
		"mtime": "2026-10-28T17:05:44.440Z",
		"size": 173,
		"path": "../public/assets/circle-check-D571plDZ.js"
	},
	"/assets/contact-U2B8MTvR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bd-EHcsQK2tstvT8TWKtOj/8QVfpWM\"",
		"mtime": "2026-10-28T17:05:44.440Z",
		"size": 445,
		"path": "../public/assets/contact-U2B8MTvR.js"
	},
	"/assets/code-xml-B3R4xviC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-YqOMS4g8PTpulKCS76fGhz7gXaA\"",
		"mtime": "2026-10-28T17:05:44.440Z",
		"size": 203,
		"path": "../public/assets/code-xml-B3R4xviC.js"
	},
	"/assets/case-uniaofraternal-sm-BS3crqxX.webp": {
		"type": "image/webp",
		"etag": "\"321a-hpe0DgEBW9q9rXobUf0sy2U8kNc\"",
		"mtime": "2026-10-28T17:05:44.442Z",
		"size": 12826,
		"path": "../public/assets/case-uniaofraternal-sm-BS3crqxX.webp"
	},
	"/assets/cookies-CIkQhU6T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f0-sH4GI9Fhys7NNmjCH/LnChXiy+8\"",
		"mtime": "2026-10-28T17:05:44.440Z",
		"size": 2544,
		"path": "../public/assets/cookies-CIkQhU6T.js"
	},
	"/assets/globe-CxlLLAdB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed-xjyuwoaS3cFi1+SBoWNskb9r3vc\"",
		"mtime": "2026-10-28T17:05:44.440Z",
		"size": 237,
		"path": "../public/assets/globe-CxlLLAdB.js"
	},
	"/assets/layers-D1ynE277.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a0-JhgkZ4EG+Xr/xImnYNe/zl+/J2M\"",
		"mtime": "2026-10-28T17:05:44.440Z",
		"size": 416,
		"path": "../public/assets/layers-D1ynE277.js"
	},
	"/assets/privacy-CEVW_9Md.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"961-iGT05nhfZzFlEL1ypHEvUYzWKRw\"",
		"mtime": "2026-10-28T17:05:44.440Z",
		"size": 2401,
		"path": "../public/assets/privacy-CEVW_9Md.js"
	},
	"/assets/related-content-DTPBxL00.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"eaf-CKvHWij8GFfgI8S8GmW29STPZTQ\"",
		"mtime": "2026-10-28T17:05:44.440Z",
		"size": 3759,
		"path": "../public/assets/related-content-DTPBxL00.js"
	},
	"/assets/services-Dz604l-g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"184-aKbgwByyFkyywi6+odKdhIn7PHE\"",
		"mtime": "2026-10-28T17:05:44.440Z",
		"size": 388,
		"path": "../public/assets/services-Dz604l-g.js"
	},
	"/assets/evolves-logo-gray-Ca0NJuQs.png": {
		"type": "image/png",
		"etag": "\"1dd6-6vFyC9EVlNw6IITT/hCJ7l4zxB4\"",
		"mtime": "2026-10-28T17:05:44.443Z",
		"size": 7638,
		"path": "../public/assets/evolves-logo-gray-Ca0NJuQs.png"
	},
	"/assets/services-rAaLrAP9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-jl8YAsNWl5e+vQwJmkSIhwIx1Zk\"",
		"mtime": "2026-10-28T17:05:44.440Z",
		"size": 141,
		"path": "../public/assets/services-rAaLrAP9.js"
	},
	"/assets/index-r2U-exX3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6041e-TL1fmCEZzA3wKsyXa6/XZy9i7ss\"",
		"mtime": "2026-10-28T17:05:44.437Z",
		"size": 394270,
		"path": "../public/assets/index-r2U-exX3.js"
	},
	"/assets/shield-Eb11WcxM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"358-2j3/6uB8u0tsESRimUfB8s+w1jg\"",
		"mtime": "2026-10-28T17:05:44.440Z",
		"size": 856,
		"path": "../public/assets/shield-Eb11WcxM.js"
	},
	"/assets/styles-DFUIjkH5.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1fd0b-1jo2zi9m8FUOsAMBr9RkxV2CAsM\"",
		"mtime": "2026-10-28T17:05:44.444Z",
		"size": 130315,
		"path": "../public/assets/styles-DFUIjkH5.css"
	},
	"/assets/target-CBEIHw2r.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c6-nMbPrDuYYuj2v9ocYUki6A3YePk\"",
		"mtime": "2026-10-28T17:05:44.441Z",
		"size": 454,
		"path": "../public/assets/target-CBEIHw2r.js"
	},
	"/assets/useSelector-BlYk6fFJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11121-nLs/BOA+hs08XS1tk3rwBPRRLLk\"",
		"mtime": "2026-10-28T17:05:44.441Z",
		"size": 69921,
		"path": "../public/assets/useSelector-BlYk6fFJ.js"
	},
	"/assets/zap-BCFB5Y2u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19a-IKUoE5I9F0T3Kjvi5NgmVfJlpsI\"",
		"mtime": "2026-10-28T17:05:44.441Z",
		"size": 410,
		"path": "../public/assets/zap-BCFB5Y2u.js"
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
