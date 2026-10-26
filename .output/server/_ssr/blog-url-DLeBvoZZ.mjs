//#region node_modules/.nitro/vite/services/ssr/assets/blog-url-DLeBvoZZ.js
function toFriendlySlug(value) {
	return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function fromFriendlySlug(value) {
	return value.replace(/-/g, " ").trim();
}
//#endregion
export { toFriendlySlug as n, fromFriendlySlug as t };
