"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getJson";
exports.ids = ["pages/api/getJson"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/getJson.ts":
/*!******************************!*\
  !*** ./pages/api/getJson.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nasync function handler(req, res) {\n    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"json\");\n    //Read the json data file data.json\n    const fileContents = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(jsonDirectory + \"/content.json\", \"utf8\");\n    const convertedContent = JSON.parse(fileContents);\n    res.status(200).json(convertedContent);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0SnNvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDZFQUE2RTtBQUVyRDtBQUNZO0FBRXJCLGVBQWVHLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFDQSxNQUFNQyxnQkFBZ0JOLGdEQUFTLENBQUNRLFFBQVFDLEdBQUcsSUFBSTtJQUMvQyxtQ0FBbUM7SUFDbkMsTUFBTUMsZUFBZSxNQUFNUixpREFBVyxDQUFDSSxnQkFBZ0IsaUJBQWlCO0lBQ3hFLE1BQU1NLG1CQUFtQkMsS0FBS0MsS0FBSyxDQUFDSjtJQUNwQ0wsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0o7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3lvdXR1YmVzaWRlYmFyLy4vcGFnZXMvYXBpL2dldEpzb24udHM/MWFmMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tICdmcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPEpTT04+XG4pIHtcbiAgY29uc3QganNvbkRpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnanNvbicpO1xuICAvL1JlYWQgdGhlIGpzb24gZGF0YSBmaWxlIGRhdGEuanNvblxuICBjb25zdCBmaWxlQ29udGVudHMgPSBhd2FpdCBmcy5yZWFkRmlsZShqc29uRGlyZWN0b3J5ICsgJy9jb250ZW50Lmpzb24nLCAndXRmOCcpO1xuICBjb25zdCBjb252ZXJ0ZWRDb250ZW50ID0gSlNPTi5wYXJzZShmaWxlQ29udGVudHMpXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNvbnZlcnRlZENvbnRlbnQpXG59XG4iXSwibmFtZXMiOlsicGF0aCIsInByb21pc2VzIiwiZnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwianNvbkRpcmVjdG9yeSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGUiLCJjb252ZXJ0ZWRDb250ZW50IiwiSlNPTiIsInBhcnNlIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getJson.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getJson.ts"));
module.exports = __webpack_exports__;

})();