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
		"mtime": "2026-10-27T23:58:47.690Z",
		"size": 4284,
		"path": "../public/favicon.png"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2f7e-kz9zWVd5COJBBXc0p1j8h1vJu1s\"",
		"mtime": "2026-10-27T23:58:47.689Z",
		"size": 12158,
		"path": "../public/llms.txt"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"46-wb7Uic3JNoSlfOKPg1HNZ9d3XtU\"",
		"mtime": "2026-10-27T23:58:47.690Z",
		"size": 70,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"217a-Ldr3mtISJ74gpkOxYvlKOw1ddGw\"",
		"mtime": "2026-10-27T23:58:47.690Z",
		"size": 8570,
		"path": "../public/sitemap.xml"
	},
	"/.well-known/brave-rewards-verification.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"94-HzeRMnaKSRBMvc6MrwDzMANxEaE\"",
		"mtime": "2026-10-27T23:58:47.690Z",
		"size": 148,
		"path": "../public/.well-known/brave-rewards-verification.txt"
	},
	"/assets/BlogIndex-CdmZCi1-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1904-6Ucr291TNisz1eaHytuBDUitcok\"",
		"mtime": "2026-10-27T23:58:47.228Z",
		"size": 6404,
		"path": "../public/assets/BlogIndex-CdmZCi1-.js"
	},
	"/assets/Contact-CbyBfz-Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b3e-AtjANh4Aky2ODefoHsT8wBELapY\"",
		"mtime": "2026-10-27T23:58:47.228Z",
		"size": 39742,
		"path": "../public/assets/Contact-CbyBfz-Y.js"
	},
	"/assets/Cases-BRZiFrBm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f87-wu/N7iFoguREEtqfICOvGetrOlk\"",
		"mtime": "2026-10-27T23:58:47.228Z",
		"size": 16263,
		"path": "../public/assets/Cases-BRZiFrBm.js"
	},
	"/assets/_categoria-CnBdeec7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ec-hELhFvsTwpq32Z4MEjl7mv3VYNY\"",
		"mtime": "2026-10-27T23:58:47.230Z",
		"size": 236,
		"path": "../public/assets/_categoria-CnBdeec7.js"
	},
	"/assets/Footer-DOffE7iZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"677f-1P0/uuqsOVj+kENOfes4W2ysLMs\"",
		"mtime": "2026-10-27T23:58:47.229Z",
		"size": 26495,
		"path": "../public/assets/Footer-DOffE7iZ.js"
	},
	"/assets/_slug-BVKb--_4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc8-+0PCi12zoC934QBjSYetw6doonk\"",
		"mtime": "2026-10-27T23:58:47.230Z",
		"size": 3528,
		"path": "../public/assets/_slug-BVKb--_4.js"
	},
	"/assets/_slug-R9tZ-9ho.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1424-wsuLTp+RfEh/73wleBR64baTBkk\"",
		"mtime": "2026-10-27T23:58:47.231Z",
		"size": 5156,
		"path": "../public/assets/_slug-R9tZ-9ho.js"
	},
	"/assets/Services-DOG2XghV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d62-j+glVnofOPN3sBdzF2uGRZ+pQrA\"",
		"mtime": "2026-10-27T23:58:47.230Z",
		"size": 3426,
		"path": "../public/assets/Services-DOG2XghV.js"
	},
	"/assets/I18nContext-Dg3bV1U6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11352-KkItbnWQC2UfCwCQYxe7J9/PC+k\"",
		"mtime": "2026-10-27T23:58:47.230Z",
		"size": 70482,
		"path": "../public/assets/I18nContext-Dg3bV1U6.js"
	},
	"/assets/_termo-B-5nDolA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e9-hajrflnHpF+HZgFHCVogEo1tR0Q\"",
		"mtime": "2026-10-27T23:58:47.231Z",
		"size": 233,
		"path": "../public/assets/_termo-B-5nDolA.js"
	},
	"/assets/blog-BCqwEGGn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96-74X45Zr8J6Cxb/ilFB85twU5jgo\"",
		"mtime": "2026-10-27T23:58:47.231Z",
		"size": 150,
		"path": "../public/assets/blog-BCqwEGGn.js"
	},
	"/assets/about-C2gsXmuo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2837-cxaXcTcMZc+2yRsiM6fqdEnKKEc\"",
		"mtime": "2026-10-27T23:58:47.231Z",
		"size": 10295,
		"path": "../public/assets/about-C2gsXmuo.js"
	},
	"/assets/_slug-DTfL-YIT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3af4-bsm/wwDzSSHxGewE5hBTyxsREnY\"",
		"mtime": "2026-10-27T23:58:47.230Z",
		"size": 15092,
		"path": "../public/assets/_slug-DTfL-YIT.js"
	},
	"/assets/case-glebra-sm-B8pfWzqv.webp": {
		"type": "image/webp",
		"etag": "\"38f6-hkztkOPtfjWqKVqbVyixVzWQXzI\"",
		"mtime": "2026-10-27T23:58:47.233Z",
		"size": 14582,
		"path": "../public/assets/case-glebra-sm-B8pfWzqv.webp"
	},
	"/assets/case-glebra-D4d1_AwH.webp": {
		"type": "image/webp",
		"etag": "\"910c-R/25gwAULNcGhRiAqS4zqQmgRJc\"",
		"mtime": "2026-10-27T23:58:47.233Z",
		"size": 37132,
		"path": "../public/assets/case-glebra-D4d1_AwH.webp"
	},
	"/assets/case-hidrolinfa-DDNNP4CB.webp": {
		"type": "image/webp",
		"etag": "\"a24a-vxTZFhBuQYVePEMk0EmIG0DCt34\"",
		"mtime": "2026-10-27T23:58:47.234Z",
		"size": 41546,
		"path": "../public/assets/case-hidrolinfa-DDNNP4CB.webp"
	},
	"/assets/case-hidrolinfa-sm-ZUYKJm7x.webp": {
		"type": "image/webp",
		"etag": "\"45da-ngrsVrJS1oyur9OBgXxCOQfgxRs\"",
		"mtime": "2026-10-27T23:58:47.234Z",
		"size": 17882,
		"path": "../public/assets/case-hidrolinfa-sm-ZUYKJm7x.webp"
	},
	"/assets/case-kura-terapias-Cw3Z7eWl.webp": {
		"type": "image/webp",
		"etag": "\"282ba-1IGW0Oe1xgOCEaPxVyVXhLOQF4s\"",
		"mtime": "2026-10-27T23:58:47.234Z",
		"size": 164538,
		"path": "../public/assets/case-kura-terapias-Cw3Z7eWl.webp"
	},
	"/assets/case-kura-terapias-sm-CoiCwAuO.webp": {
		"type": "image/webp",
		"etag": "\"1dc0-ZPmuUb/KcQcdJj8PULMnal5oSRw\"",
		"mtime": "2026-10-27T23:58:47.234Z",
		"size": 7616,
		"path": "../public/assets/case-kura-terapias-sm-CoiCwAuO.webp"
	},
	"/assets/case-uniaofraternal-CF9oo6l7.webp": {
		"type": "image/webp",
		"etag": "\"7aaa-dhktndYcqE5UGN3kq2GP8C+KWzQ\"",
		"mtime": "2026-10-27T23:58:47.234Z",
		"size": 31402,
		"path": "../public/assets/case-uniaofraternal-CF9oo6l7.webp"
	},
	"/assets/code-xml-Q1t8P0Lx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-sOl89vybxBY0w1lmgPwYb1BgVu4\"",
		"mtime": "2026-10-27T23:58:47.232Z",
		"size": 203,
		"path": "../public/assets/code-xml-Q1t8P0Lx.js"
	},
	"/assets/contact-BqgXz8NU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1ba-bTRW+PkDQ4ERwscvmRxzrhNWNA0\"",
		"mtime": "2026-10-27T23:58:47.232Z",
		"size": 442,
		"path": "../public/assets/contact-BqgXz8NU.js"
	},
	"/assets/cookies-hAb0D4cE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9ed-hntSgTRl1FL54pvhPeRO4Yjcdfc\"",
		"mtime": "2026-10-27T23:58:47.232Z",
		"size": 2541,
		"path": "../public/assets/cookies-hAb0D4cE.js"
	},
	"/assets/evolves-logo-gray-Ca0NJuQs.png": {
		"type": "image/png",
		"etag": "\"1dd6-6vFyC9EVlNw6IITT/hCJ7l4zxB4\"",
		"mtime": "2026-10-27T23:58:47.234Z",
		"size": 7638,
		"path": "../public/assets/evolves-logo-gray-Ca0NJuQs.png"
	},
	"/assets/globe-CiGalcW1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed-4yU6u6P30QywsfFQPpqPUN0QEEk\"",
		"mtime": "2026-10-27T23:58:47.232Z",
		"size": 237,
		"path": "../public/assets/globe-CiGalcW1.js"
	},
	"/assets/circle-check-C0BsoI36.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-qsrqcJyxh6qbqVKvxmn6LvPwByQ\"",
		"mtime": "2026-10-27T23:58:47.232Z",
		"size": 173,
		"path": "../public/assets/circle-check-C0BsoI36.js"
	},
	"/assets/index-BYVaXpyf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"67060-wEHyYV8qTpZSn8dmUT+NjFcji0E\"",
		"mtime": "2026-10-27T23:58:47.226Z",
		"size": 421984,
		"path": "../public/assets/index-BYVaXpyf.js"
	},
	"/assets/matchContext-BmN0_Z1Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"307-yw3IAHtFZCKuTu3NmJPOLsmrUkk\"",
		"mtime": "2026-10-27T23:58:47.232Z",
		"size": 775,
		"path": "../public/assets/matchContext-BmN0_Z1Z.js"
	},
	"/assets/privacy-BkUprHwN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"95e-wS/r1p+UNP2fPApuFxh2TGqfLYw\"",
		"mtime": "2026-10-27T23:58:47.232Z",
		"size": 2398,
		"path": "../public/assets/privacy-BkUprHwN.js"
	},
	"/assets/related-content-BZrqKI7y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dee-KorfhvvRpi8VaF7ptTfI/g2UTao\"",
		"mtime": "2026-10-27T23:58:47.232Z",
		"size": 3566,
		"path": "../public/assets/related-content-BZrqKI7y.js"
	},
	"/assets/case-uniaofraternal-sm-BS3crqxX.webp": {
		"type": "image/webp",
		"etag": "\"321a-hpe0DgEBW9q9rXobUf0sy2U8kNc\"",
		"mtime": "2026-10-27T23:58:47.234Z",
		"size": 12826,
		"path": "../public/assets/case-uniaofraternal-sm-BS3crqxX.webp"
	},
	"/assets/services-BBpz4FN-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"181-oLRkyioqzEgXfrrUwpLLhrJEKyg\"",
		"mtime": "2026-10-27T23:58:47.232Z",
		"size": 385,
		"path": "../public/assets/services-BBpz4FN-.js"
	},
	"/assets/services-zf4xfRRy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a-ZpBvrvBSaGG2cE2BtSsEOH1KGts\"",
		"mtime": "2026-10-27T23:58:47.233Z",
		"size": 138,
		"path": "../public/assets/services-zf4xfRRy.js"
	},
	"/assets/shield-Bnncnv4K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"358-e/UALjgokS59l1b+RMS7foCCeAg\"",
		"mtime": "2026-10-27T23:58:47.233Z",
		"size": 856,
		"path": "../public/assets/shield-Bnncnv4K.js"
	},
	"/assets/routes-O4AjmB3O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"170df-SJ3nGMFvrgB0akGIg5u1jEydIuQ\"",
		"mtime": "2026-10-27T23:58:47.232Z",
		"size": 94431,
		"path": "../public/assets/routes-O4AjmB3O.js"
	},
	"/assets/target-BRYrUmFZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c6-BuIlrMFaFAQPxrD3fJvxxS/5mh0\"",
		"mtime": "2026-10-27T23:58:47.233Z",
		"size": 454,
		"path": "../public/assets/target-BRYrUmFZ.js"
	},
	"/assets/zap-Td1N2YYk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19a-lBxlEeZzk9GDWYS+NQzGpXzNBs4\"",
		"mtime": "2026-10-27T23:58:47.233Z",
		"size": 410,
		"path": "../public/assets/zap-Td1N2YYk.js"
	},
	"/assets/useStore-DAs5vFz2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b50-gJVpJ72ZOwiLeFNrSvHPv8Rvm2k\"",
		"mtime": "2026-10-27T23:58:47.233Z",
		"size": 27472,
		"path": "../public/assets/useStore-DAs5vFz2.js"
	},
	"/assets/layers-rmsE-5g_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a0-MUJ4SH6w5OtjqYfA0weCBTzdN30\"",
		"mtime": "2026-10-27T23:58:47.232Z",
		"size": 416,
		"path": "../public/assets/layers-rmsE-5g_.js"
	},
	"/assets/cases-C5NrNEn0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17e-wJSFMcyEANCWCd4dCEvw/jb1RvY\"",
		"mtime": "2026-10-27T23:58:47.232Z",
		"size": 382,
		"path": "../public/assets/cases-C5NrNEn0.js"
	},
	"/assets/styles-Ctw-TDcQ.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"20b31-7KAq2kE0kLZpl7ydr2n97RDRHCs\"",
		"mtime": "2026-10-27T23:58:47.234Z",
		"size": 133937,
		"path": "../public/assets/styles-Ctw-TDcQ.css"
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
