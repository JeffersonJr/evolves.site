import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as Footer, r as Navbar } from "./Footer-BLyOiqG_.mjs";
import { t as Services } from "./Services-CkY8-TjJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-C0ocBi6-.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 pt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, { standalone: true })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { ServicesPage as component };
