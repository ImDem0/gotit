import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-rhpRa8T9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function loadScript(src) {
	return new Promise((resolve, reject) => {
		if (document.querySelector(`script[data-yasno="${src}"]`)) {
			resolve();
			return;
		}
		const script = document.createElement("script");
		script.src = src;
		script.async = false;
		script.dataset.yasno = src;
		script.onload = () => resolve();
		script.onerror = () => reject(new Error(src));
		document.body.appendChild(script);
	});
}
function Home() {
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		loadScript("/yasno/data.js").then(() => loadScript("/yasno/app.js")).then(() => {
			if (!cancelled) window.dispatchEvent(new Event("yasno-boot"));
		}).catch(() => {});
		return () => {
			cancelled = true;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { id: "yasno-root" });
}
//#endregion
export { Home as component };
