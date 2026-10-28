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
		"mtime": "2026-10-28T14:15:51.892Z",
		"size": 4284,
		"path": "../public/favicon.png"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"9b49-Q/YmVYXLY0zctGegY2KQx5Y5UvE\"",
		"mtime": "2026-10-28T14:15:51.892Z",
		"size": 39753,
		"path": "../public/sitemap.xml"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"46-wb7Uic3JNoSlfOKPg1HNZ9d3XtU\"",
		"mtime": "2026-10-28T14:15:51.892Z",
		"size": 70,
		"path": "../public/robots.txt"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2f7e-kz9zWVd5COJBBXc0p1j8h1vJu1s\"",
		"mtime": "2026-10-28T14:15:51.891Z",
		"size": 12158,
		"path": "../public/llms.txt"
	},
	"/assets/BlogIndex-Bg3AGNsl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1904-l02Wj8sMeEc3QaBasXSSDulBS38\"",
		"mtime": "2026-10-28T14:15:51.485Z",
		"size": 6404,
		"path": "../public/assets/BlogIndex-Bg3AGNsl.js"
	},
	"/assets/Cases-BBlrvlkW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f87-Sm+89faCPO9KXVkq2HRVzqkNYds\"",
		"mtime": "2026-10-28T14:15:51.486Z",
		"size": 16263,
		"path": "../public/assets/Cases-BBlrvlkW.js"
	},
	"/assets/Contact-C7n6EGL4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b3e-Ec9sphnUYAHzKX6AAQAWwqpGk/4\"",
		"mtime": "2026-10-28T14:15:51.486Z",
		"size": 39742,
		"path": "../public/assets/Contact-C7n6EGL4.js"
	},
	"/assets/Footer-y-2nmtrn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"68cd-/mgLK5Oj9S8or26/8bua02wbMBw\"",
		"mtime": "2026-10-28T14:15:51.486Z",
		"size": 26829,
		"path": "../public/assets/Footer-y-2nmtrn.js"
	},
	"/.well-known/brave-rewards-verification.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"94-HzeRMnaKSRBMvc6MrwDzMANxEaE\"",
		"mtime": "2026-10-28T14:15:51.891Z",
		"size": 148,
		"path": "../public/.well-known/brave-rewards-verification.txt"
	},
	"/assets/_slug--3AHcls8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14a1-qlUkawQSdUvEZfsGlm6Arvuf3g4\"",
		"mtime": "2026-10-28T14:15:51.486Z",
		"size": 5281,
		"path": "../public/assets/_slug--3AHcls8.js"
	},
	"/assets/I18nContext-DFGR9WDE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"122b8-JZOHoiodFnMtWx8zFlJuipUIn8w\"",
		"mtime": "2026-10-28T14:15:51.486Z",
		"size": 74424,
		"path": "../public/assets/I18nContext-DFGR9WDE.js"
	},
	"/assets/_locale-zata17HB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a-YIlaDt6pwWyP/JY1AFLa8S4VV5E\"",
		"mtime": "2026-10-28T14:15:51.486Z",
		"size": 138,
		"path": "../public/assets/_locale-zata17HB.js"
	},
	"/assets/_categoria-CWkLOFMK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-qD2McOgCin1N7Ta2PbvC8VzMXUc\"",
		"mtime": "2026-10-28T14:15:51.486Z",
		"size": 236,
		"path": "../public/assets/_categoria-CWkLOFMK.js"
	},
	"/assets/_slug-B6jdF3EO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b8a-WWyQIxwm9FxtZFbFyfEgMlXBJ58\"",
		"mtime": "2026-10-28T14:15:51.487Z",
		"size": 15242,
		"path": "../public/assets/_slug-B6jdF3EO.js"
	},
	"/assets/_slug-BNJw4VfS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e27-F/guNjWT1CtEeltFc0MY3jGCQow\"",
		"mtime": "2026-10-28T14:15:51.487Z",
		"size": 3623,
		"path": "../public/assets/_slug-BNJw4VfS.js"
	},
	"/assets/about-bQrkOZ8B.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29b3-gHDiF+PDZKRXOOOrGbc/2ZgOawg\"",
		"mtime": "2026-10-28T14:15:51.487Z",
		"size": 10675,
		"path": "../public/assets/about-bQrkOZ8B.js"
	},
	"/assets/Services-Bx0TXeFT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d67-U9LzOzq1eLci5aeYDuZa6oAI+Cs\"",
		"mtime": "2026-10-28T14:15:51.486Z",
		"size": 3431,
		"path": "../public/assets/Services-Bx0TXeFT.js"
	},
	"/assets/_termo-zBJUbIHB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9-Ohi6MjAMtiFQS0TUDfn2XZqYnHk\"",
		"mtime": "2026-10-28T14:15:51.487Z",
		"size": 233,
		"path": "../public/assets/_termo-zBJUbIHB.js"
	},
	"/assets/case-glebra-sm-B8pfWzqv.webp": {
		"type": "image/webp",
		"etag": "\"38f6-hkztkOPtfjWqKVqbVyixVzWQXzI\"",
		"mtime": "2026-10-28T14:15:51.489Z",
		"size": 14582,
		"path": "../public/assets/case-glebra-sm-B8pfWzqv.webp"
	},
	"/assets/case-hidrolinfa-DDNNP4CB.webp": {
		"type": "image/webp",
		"etag": "\"a24a-vxTZFhBuQYVePEMk0EmIG0DCt34\"",
		"mtime": "2026-10-28T14:15:51.489Z",
		"size": 41546,
		"path": "../public/assets/case-hidrolinfa-DDNNP4CB.webp"
	},
	"/assets/blog-BUOrluq1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-iNFPUYr5yKQlHuZVxVGO0Pqq2rU\"",
		"mtime": "2026-10-28T14:15:51.487Z",
		"size": 150,
		"path": "../public/assets/blog-BUOrluq1.js"
	},
	"/assets/case-hidrolinfa-sm-ZUYKJm7x.webp": {
		"type": "image/webp",
		"etag": "\"45da-ngrsVrJS1oyur9OBgXxCOQfgxRs\"",
		"mtime": "2026-10-28T14:15:51.489Z",
		"size": 17882,
		"path": "../public/assets/case-hidrolinfa-sm-ZUYKJm7x.webp"
	},
	"/assets/case-glebra-D4d1_AwH.webp": {
		"type": "image/webp",
		"etag": "\"910c-R/25gwAULNcGhRiAqS4zqQmgRJc\"",
		"mtime": "2026-10-28T14:15:51.488Z",
		"size": 37132,
		"path": "../public/assets/case-glebra-D4d1_AwH.webp"
	},
	"/assets/case-kura-terapias-Cw3Z7eWl.webp": {
		"type": "image/webp",
		"etag": "\"282ba-1IGW0Oe1xgOCEaPxVyVXhLOQF4s\"",
		"mtime": "2026-10-28T14:15:51.489Z",
		"size": 164538,
		"path": "../public/assets/case-kura-terapias-Cw3Z7eWl.webp"
	},
	"/assets/_locale-DBUXiIgl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"170e9-LkOZGy3gzrdqfoVhWbOZFagoXkE\"",
		"mtime": "2026-10-28T14:15:51.486Z",
		"size": 94441,
		"path": "../public/assets/_locale-DBUXiIgl.js"
	},
	"/assets/case-kura-terapias-sm-CoiCwAuO.webp": {
		"type": "image/webp",
		"etag": "\"1dc0-ZPmuUb/KcQcdJj8PULMnal5oSRw\"",
		"mtime": "2026-10-28T14:15:51.489Z",
		"size": 7616,
		"path": "../public/assets/case-kura-terapias-sm-CoiCwAuO.webp"
	},
	"/assets/cases-CIr9tyQD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17e-mNnLEPxwEEo6TYkS3e02EUiKazo\"",
		"mtime": "2026-10-28T14:15:51.487Z",
		"size": 382,
		"path": "../public/assets/cases-CIr9tyQD.js"
	},
	"/assets/circle-check-B9AeLZ7D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-UN5fSACdU4KuWNGbu+dQkoPORRE\"",
		"mtime": "2026-10-28T14:15:51.487Z",
		"size": 173,
		"path": "../public/assets/circle-check-B9AeLZ7D.js"
	},
	"/assets/case-uniaofraternal-sm-BS3crqxX.webp": {
		"type": "image/webp",
		"etag": "\"321a-hpe0DgEBW9q9rXobUf0sy2U8kNc\"",
		"mtime": "2026-10-28T14:15:51.490Z",
		"size": 12826,
		"path": "../public/assets/case-uniaofraternal-sm-BS3crqxX.webp"
	},
	"/assets/code-xml-d61962YN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-GraTSDBqIxrYQNJuPaGC2vWDGGQ\"",
		"mtime": "2026-10-28T14:15:51.487Z",
		"size": 203,
		"path": "../public/assets/code-xml-d61962YN.js"
	},
	"/assets/cookies-dT4MpX8U.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9ed-E7uIBFIt3EkmNcICKPp1IUOxDlI\"",
		"mtime": "2026-10-28T14:15:51.487Z",
		"size": 2541,
		"path": "../public/assets/cookies-dT4MpX8U.js"
	},
	"/assets/contact-d0ui19dR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ba-GFAxVC7kNHYqAUHrkqM04ucAniU\"",
		"mtime": "2026-10-28T14:15:51.487Z",
		"size": 442,
		"path": "../public/assets/contact-d0ui19dR.js"
	},
	"/assets/evolves-logo-gray-Ca0NJuQs.png": {
		"type": "image/png",
		"etag": "\"1dd6-6vFyC9EVlNw6IITT/hCJ7l4zxB4\"",
		"mtime": "2026-10-28T14:15:51.490Z",
		"size": 7638,
		"path": "../public/assets/evolves-logo-gray-Ca0NJuQs.png"
	},
	"/assets/globe-CmSF04OW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed-t2+mfbCcv8KlKiKXIgFoeIiPeqE\"",
		"mtime": "2026-10-28T14:15:51.487Z",
		"size": 237,
		"path": "../public/assets/globe-CmSF04OW.js"
	},
	"/assets/index-BPN_hX9S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"69304-cUafi1HG0o4KoAZwsoJSsRZzOtk\"",
		"mtime": "2026-10-28T14:15:51.484Z",
		"size": 430852,
		"path": "../public/assets/index-BPN_hX9S.js"
	},
	"/assets/privacy-DlpY3YHz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95e-5TyTTl57J/OCsYGHzMfUPnSR42M\"",
		"mtime": "2026-10-28T14:15:51.487Z",
		"size": 2398,
		"path": "../public/assets/privacy-DlpY3YHz.js"
	},
	"/assets/layers-Ceh5Vkoj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a0-gha2S5Lp6bqMQpchYkhkgm9m3vE\"",
		"mtime": "2026-10-28T14:15:51.487Z",
		"size": 416,
		"path": "../public/assets/layers-Ceh5Vkoj.js"
	},
	"/assets/related-content-BttsB0ho.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dee-PQcLQs0Qc5itSgemqdYDz3a5LZs\"",
		"mtime": "2026-10-28T14:15:51.488Z",
		"size": 3566,
		"path": "../public/assets/related-content-BttsB0ho.js"
	},
	"/assets/redirect-DnLf-3Zd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"284-OKGUrSof3kF11Yz1L80m8oAVyB4\"",
		"mtime": "2026-10-28T14:15:51.488Z",
		"size": 644,
		"path": "../public/assets/redirect-DnLf-3Zd.js"
	},
	"/assets/services-l601mVGH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"181-0wVj2SdY2zET11FYtimYLL1qNOc\"",
		"mtime": "2026-10-28T14:15:51.488Z",
		"size": 385,
		"path": "../public/assets/services-l601mVGH.js"
	},
	"/assets/shield-DHV9gtFK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"358-eihDr3TiNna7gug8IVobMjzESL0\"",
		"mtime": "2026-10-28T14:15:51.488Z",
		"size": 856,
		"path": "../public/assets/shield-DHV9gtFK.js"
	},
	"/assets/target-r1uhuQrW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c6-yv9ZUSqFLkRkBY2V6caDVSAuBJk\"",
		"mtime": "2026-10-28T14:15:51.488Z",
		"size": 454,
		"path": "../public/assets/target-r1uhuQrW.js"
	},
	"/assets/useStore-r0Kk5vzo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b96-KRAjimsw3XnR0vaEJXKXwDvpkWM\"",
		"mtime": "2026-10-28T14:15:51.488Z",
		"size": 27542,
		"path": "../public/assets/useStore-r0Kk5vzo.js"
	},
	"/assets/services-zata17HB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a-YIlaDt6pwWyP/JY1AFLa8S4VV5E\"",
		"mtime": "2026-10-28T14:15:51.488Z",
		"size": 138,
		"path": "../public/assets/services-zata17HB.js"
	},
	"/assets/zap-m1Gju1xI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19a-5OgVGm+V0IcAmM1MuPClmgBxyKA\"",
		"mtime": "2026-10-28T14:15:51.488Z",
		"size": 410,
		"path": "../public/assets/zap-m1Gju1xI.js"
	},
	"/assets/case-uniaofraternal-CF9oo6l7.webp": {
		"type": "image/webp",
		"etag": "\"7aaa-dhktndYcqE5UGN3kq2GP8C+KWzQ\"",
		"mtime": "2026-10-28T14:15:51.490Z",
		"size": 31402,
		"path": "../public/assets/case-uniaofraternal-CF9oo6l7.webp"
	},
	"/assets/styles-ofqa5HjK.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1f9dc-ssEZJVfL/+sbHMwvGb/lLwMLaB4\"",
		"mtime": "2026-10-28T14:15:51.491Z",
		"size": 129500,
		"path": "../public/assets/styles-ofqa5HjK.css"
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
