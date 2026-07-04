import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Navbar, t as Footer } from "./Footer-BXwmlAwJ.mjs";
import { t as Cases } from "./Cases-5UDNnjuX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cases-C6-EX9Cf.js
var import_jsx_runtime = require_jsx_runtime();
function CasesIndexPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 pt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cases, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { CasesIndexPage as component };
