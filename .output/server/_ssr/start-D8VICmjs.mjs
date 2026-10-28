import { u as renderErrorPage } from "./ssr.mjs";
import { n as createStart, t as createMiddleware } from "./createStart-Cmi_QJV1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/start-D8VICmjs.js
var errorMiddleware = createMiddleware().server(async ({ next }) => {
	try {
		return await next();
	} catch (error) {
		if (error != null && typeof error === "object" && "statusCode" in error) throw error;
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
});
var startInstance = createStart(() => ({ requestMiddleware: [errorMiddleware] }));
//#endregion
export { startInstance };
