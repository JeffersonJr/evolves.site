import { s as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Route } from "./_categoria-DWC-W2nb.mjs";
import { t as BlogIndex } from "./_ssr/BlogIndex-BI0DBxqQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_categoria-BiapffCX.js
var import_jsx_runtime = require_jsx_runtime();
function BlogCategoryPage() {
	const { category } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogIndex, { initialCategory: category });
}
//#endregion
export { BlogCategoryPage as component };
