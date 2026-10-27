import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as BlogIndex } from "./_ssr/BlogIndex-CRaEDBID.mjs";
import { t as Route } from "./_termo-TZaTttG7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_termo-C4eJDSYa.js
var import_jsx_runtime = require_jsx_runtime();
function BlogSearchPage() {
	const { term } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogIndex, { initialTerm: term });
}
//#endregion
export { BlogSearchPage as component };
