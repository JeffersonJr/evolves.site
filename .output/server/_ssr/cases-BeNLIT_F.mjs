import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Navbar, t as Footer } from "./Footer-CwF1ej6Q.mjs";
import { t as Cases } from "./Cases-DmqKdLb3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cases-BeNLIT_F.js
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
