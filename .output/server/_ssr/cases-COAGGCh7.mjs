import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Footer, r as Navbar } from "./Footer-Di_-c1Tt.mjs";
import { t as Cases } from "./Cases-BJumND_S.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cases-COAGGCh7.js
var import_jsx_runtime = require_jsx_runtime();
function CasesIndexPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 pt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cases, { standalone: true })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { CasesIndexPage as component };
