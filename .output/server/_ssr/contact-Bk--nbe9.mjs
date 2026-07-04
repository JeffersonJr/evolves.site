import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Navbar, t as Footer } from "./Footer-BXwmlAwJ.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Contact } from "./Contact-DAYqPaIH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-Bk--nbe9.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 pt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "top-center",
				richColors: true
			})
		]
	});
}
//#endregion
export { ContactPage as component };
