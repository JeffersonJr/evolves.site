import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as BlogIndex } from "./_ssr/BlogIndex-BpKTrucX.mjs";
import { t as Route } from "./_termo-BakyDG8I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_termo-E6kFEJAi.js
var import_jsx_runtime = require_jsx_runtime();
function BlogSearchPage() {
	const { term } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogIndex, { initialTerm: term });
}
//#endregion
export { BlogSearchPage as component };
