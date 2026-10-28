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
		"mtime": "2026-10-28T14:40:26.836Z",
		"size": 4284,
		"path": "../public/favicon.png"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2f7e-kz9zWVd5COJBBXc0p1j8h1vJu1s\"",
		"mtime": "2026-10-28T14:40:26.836Z",
		"size": 12158,
		"path": "../public/llms.txt"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"46-wb7Uic3JNoSlfOKPg1HNZ9d3XtU\"",
		"mtime": "2026-10-28T14:40:26.835Z",
		"size": 70,
		"path": "../public/robots.txt"
	},
	"/.well-known/brave-rewards-verification.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"94-HzeRMnaKSRBMvc6MrwDzMANxEaE\"",
		"mtime": "2026-10-28T14:40:26.834Z",
		"size": 148,
		"path": "../public/.well-known/brave-rewards-verification.txt"
	},
	"/assets/Cases-CE7WwNln.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3fe8-xcGTa/lDYneAk0W6HJUvS+g452E\"",
		"mtime": "2026-10-28T14:40:26.015Z",
		"size": 16360,
		"path": "../public/assets/Cases-CE7WwNln.js"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"9b49-Q/YmVYXLY0zctGegY2KQx5Y5UvE\"",
		"mtime": "2026-10-28T14:40:26.836Z",
		"size": 39753,
		"path": "../public/sitemap.xml"
	},
	"/assets/Footer-CZzsMEbQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"69f7-Qr+jYMY4Ibgif76EX+av3tN2rm4\"",
		"mtime": "2026-10-28T14:40:26.015Z",
		"size": 27127,
		"path": "../public/assets/Footer-CZzsMEbQ.js"
	},
	"/assets/Contact-BK6hXpPD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b41-hXu1yJQfWsl0jw9Y7tK8JGZQYek\"",
		"mtime": "2026-10-28T14:40:26.015Z",
		"size": 39745,
		"path": "../public/assets/Contact-BK6hXpPD.js"
	},
	"/assets/BlogIndex-CX1bDyxt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1976-D1xg1AySiwMTHXidICI2oAXz/vI\"",
		"mtime": "2026-10-28T14:40:26.015Z",
		"size": 6518,
		"path": "../public/assets/BlogIndex-CX1bDyxt.js"
	},
	"/assets/I18nContext-DnDEKxLe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11456-826XWt1a11itOIx/g8nxBaE4oRs\"",
		"mtime": "2026-10-28T14:40:26.015Z",
		"size": 70742,
		"path": "../public/assets/I18nContext-DnDEKxLe.js"
	},
	"/assets/_categoria-4bZAPOGp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f4-MA4KILULhX2wUx2M1Tki9IPgWTw\"",
		"mtime": "2026-10-28T14:40:26.015Z",
		"size": 244,
		"path": "../public/assets/_categoria-4bZAPOGp.js"
	},
	"/assets/_locale-ByDo2pjk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"17124-h3etVmi/ThK9kmbD8/PUd5RxYck\"",
		"mtime": "2026-10-28T14:40:26.016Z",
		"size": 94500,
		"path": "../public/assets/_locale-ByDo2pjk.js"
	},
	"/assets/_locale-D-wHZbSM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-YpoO0B2WJ91sYhqCJYjUGVZrUhM\"",
		"mtime": "2026-10-28T14:40:26.016Z",
		"size": 141,
		"path": "../public/assets/_locale-D-wHZbSM.js"
	},
	"/assets/Services-BH8SLeSY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d9e-9K8yDplAlngADmg7LmN78liHVbA\"",
		"mtime": "2026-10-28T14:40:26.015Z",
		"size": 3486,
		"path": "../public/assets/Services-BH8SLeSY.js"
	},
	"/assets/_slug-BajlYzOh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2a-97HixX+isy4NDG1zZ/2rnORIrDw\"",
		"mtime": "2026-10-28T14:40:26.016Z",
		"size": 3626,
		"path": "../public/assets/_slug-BajlYzOh.js"
	},
	"/assets/_slug-B06M--zS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3b88-DhhPkxnVhGKISoo7saQtrAF+Rs0\"",
		"mtime": "2026-10-28T14:40:26.016Z",
		"size": 15240,
		"path": "../public/assets/_slug-B06M--zS.js"
	},
	"/assets/_termo-DZwWY3cy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e7-yvVSByVYzcJykQo9bIxh+cTt0qQ\"",
		"mtime": "2026-10-28T14:40:26.016Z",
		"size": 231,
		"path": "../public/assets/_termo-DZwWY3cy.js"
	},
	"/assets/_slug-C9SdmZkZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14a9-mgdaZ22EWMST6b/rq3Wdui8zY0w\"",
		"mtime": "2026-10-28T14:40:26.016Z",
		"size": 5289,
		"path": "../public/assets/_slug-C9SdmZkZ.js"
	},
	"/assets/blog-kjYTPrmu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-s4fSjnini2W3CKJs4OLtKzdhx+o\"",
		"mtime": "2026-10-28T14:40:26.016Z",
		"size": 153,
		"path": "../public/assets/blog-kjYTPrmu.js"
	},
	"/assets/about-79Z1kW2v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29ff-TD3tfNi2TPbWaykMRWb4Y2FHilg\"",
		"mtime": "2026-10-28T14:40:26.016Z",
		"size": 10751,
		"path": "../public/assets/about-79Z1kW2v.js"
	},
	"/assets/case-glebra-D4d1_AwH.webp": {
		"type": "image/webp",
		"etag": "\"910c-R/25gwAULNcGhRiAqS4zqQmgRJc\"",
		"mtime": "2026-10-28T14:40:26.017Z",
		"size": 37132,
		"path": "../public/assets/case-glebra-D4d1_AwH.webp"
	},
	"/assets/case-glebra-sm-B8pfWzqv.webp": {
		"type": "image/webp",
		"etag": "\"38f6-hkztkOPtfjWqKVqbVyixVzWQXzI\"",
		"mtime": "2026-10-28T14:40:26.017Z",
		"size": 14582,
		"path": "../public/assets/case-glebra-sm-B8pfWzqv.webp"
	},
	"/assets/case-hidrolinfa-sm-ZUYKJm7x.webp": {
		"type": "image/webp",
		"etag": "\"45da-ngrsVrJS1oyur9OBgXxCOQfgxRs\"",
		"mtime": "2026-10-28T14:40:26.018Z",
		"size": 17882,
		"path": "../public/assets/case-hidrolinfa-sm-ZUYKJm7x.webp"
	},
	"/assets/case-hidrolinfa-DDNNP4CB.webp": {
		"type": "image/webp",
		"etag": "\"a24a-vxTZFhBuQYVePEMk0EmIG0DCt34\"",
		"mtime": "2026-10-28T14:40:26.017Z",
		"size": 41546,
		"path": "../public/assets/case-hidrolinfa-DDNNP4CB.webp"
	},
	"/assets/case-kura-terapias-Cw3Z7eWl.webp": {
		"type": "image/webp",
		"etag": "\"282ba-1IGW0Oe1xgOCEaPxVyVXhLOQF4s\"",
		"mtime": "2026-10-28T14:40:26.018Z",
		"size": 164538,
		"path": "../public/assets/case-kura-terapias-Cw3Z7eWl.webp"
	},
	"/assets/case-kura-terapias-sm-CoiCwAuO.webp": {
		"type": "image/webp",
		"etag": "\"1dc0-ZPmuUb/KcQcdJj8PULMnal5oSRw\"",
		"mtime": "2026-10-28T14:40:26.018Z",
		"size": 7616,
		"path": "../public/assets/case-kura-terapias-sm-CoiCwAuO.webp"
	},
	"/assets/case-uniaofraternal-CF9oo6l7.webp": {
		"type": "image/webp",
		"etag": "\"7aaa-dhktndYcqE5UGN3kq2GP8C+KWzQ\"",
		"mtime": "2026-10-28T14:40:26.018Z",
		"size": 31402,
		"path": "../public/assets/case-uniaofraternal-CF9oo6l7.webp"
	},
	"/assets/case-uniaofraternal-sm-BS3crqxX.webp": {
		"type": "image/webp",
		"etag": "\"321a-hpe0DgEBW9q9rXobUf0sy2U8kNc\"",
		"mtime": "2026-10-28T14:40:26.018Z",
		"size": 12826,
		"path": "../public/assets/case-uniaofraternal-sm-BS3crqxX.webp"
	},
	"/assets/cases-e1OX8DPm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"181-kr2vJzv4gcdIeT7+0YdXuFGjGW8\"",
		"mtime": "2026-10-28T14:40:26.016Z",
		"size": 385,
		"path": "../public/assets/cases-e1OX8DPm.js"
	},
	"/assets/circle-check-Dk6W42ql.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-SzZJuXhml2QhEdfn8bXG8sBphqE\"",
		"mtime": "2026-10-28T14:40:26.016Z",
		"size": 173,
		"path": "../public/assets/circle-check-Dk6W42ql.js"
	},
	"/assets/code-xml-BM0ehcQv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-feKZXfZvprVks+FtsMRZVN22V+Y\"",
		"mtime": "2026-10-28T14:40:26.016Z",
		"size": 203,
		"path": "../public/assets/code-xml-BM0ehcQv.js"
	},
	"/assets/contact-b4NwrJPC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bd-xeYr6nvQlaMLVBfeRHdrQk1cuhk\"",
		"mtime": "2026-10-28T14:40:26.016Z",
		"size": 445,
		"path": "../public/assets/contact-b4NwrJPC.js"
	},
	"/assets/cookies-7sG2Vr_g.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f0-pdFR+2twhXzLYzMbiwlX4crCy9U\"",
		"mtime": "2026-10-28T14:40:26.017Z",
		"size": 2544,
		"path": "../public/assets/cookies-7sG2Vr_g.js"
	},
	"/assets/evolves-logo-gray-Ca0NJuQs.png": {
		"type": "image/png",
		"etag": "\"1dd6-6vFyC9EVlNw6IITT/hCJ7l4zxB4\"",
		"mtime": "2026-10-28T14:40:26.018Z",
		"size": 7638,
		"path": "../public/assets/evolves-logo-gray-Ca0NJuQs.png"
	},
	"/assets/globe-B2IYwLZb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed-pMdn7fh1mZ91BU6xKiF7YpGB6pg\"",
		"mtime": "2026-10-28T14:40:26.017Z",
		"size": 237,
		"path": "../public/assets/globe-B2IYwLZb.js"
	},
	"/assets/privacy-UmKiL4HV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"961-sBKwI9bLbiZGgnRnB3PJq//VFfI\"",
		"mtime": "2026-10-28T14:40:26.017Z",
		"size": 2401,
		"path": "../public/assets/privacy-UmKiL4HV.js"
	},
	"/assets/layers-BeyeqZuX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a0-pV6VrD4lzALjaqGWpvqgG8HPuqo\"",
		"mtime": "2026-10-28T14:40:26.017Z",
		"size": 416,
		"path": "../public/assets/layers-BeyeqZuX.js"
	},
	"/assets/related-content-B4ir2jqG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"eaf-LZuhuWOPtgF3U5+/6AvLjq0v8as\"",
		"mtime": "2026-10-28T14:40:26.017Z",
		"size": 3759,
		"path": "../public/assets/related-content-B4ir2jqG.js"
	},
	"/assets/services-6731GJKR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"184-/lN6fAjVs5xtpApMpp2u2nAdu2Y\"",
		"mtime": "2026-10-28T14:40:26.017Z",
		"size": 388,
		"path": "../public/assets/services-6731GJKR.js"
	},
	"/assets/index-Cfckjbqd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5f74e-B15nurYriQxCr62ovRM9KrnPqfw\"",
		"mtime": "2026-10-28T14:40:26.015Z",
		"size": 390990,
		"path": "../public/assets/index-Cfckjbqd.js"
	},
	"/assets/services-D-wHZbSM.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-YpoO0B2WJ91sYhqCJYjUGVZrUhM\"",
		"mtime": "2026-10-28T14:40:26.017Z",
		"size": 141,
		"path": "../public/assets/services-D-wHZbSM.js"
	},
	"/assets/shield-C9Cdsl7q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"358-7CdNNTwtc2RHwRLduYHq6Boc7PI\"",
		"mtime": "2026-10-28T14:40:26.017Z",
		"size": 856,
		"path": "../public/assets/shield-C9Cdsl7q.js"
	},
	"/assets/styles-ofqa5HjK.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1f9dc-ssEZJVfL/+sbHMwvGb/lLwMLaB4\"",
		"mtime": "2026-10-28T14:40:26.020Z",
		"size": 129500,
		"path": "../public/assets/styles-ofqa5HjK.css"
	},
	"/assets/target-CYBVkU-z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c6-sTh/sfA+aHXvw2L8i4K8MlaZd9U\"",
		"mtime": "2026-10-28T14:40:26.017Z",
		"size": 454,
		"path": "../public/assets/target-CYBVkU-z.js"
	},
	"/assets/zap-D8AIgW9S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"19a-ug2w5/Ja6FkgG9BlZN8/hphN4gI\"",
		"mtime": "2026-10-28T14:40:26.017Z",
		"size": 410,
		"path": "../public/assets/zap-D8AIgW9S.js"
	},
	"/assets/useSelector-BlYk6fFJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11121-nLs/BOA+hs08XS1tk3rwBPRRLLk\"",
		"mtime": "2026-10-28T14:40:26.017Z",
		"size": 69921,
		"path": "../public/assets/useSelector-BlYk6fFJ.js"
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
