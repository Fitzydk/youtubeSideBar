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
exports.id = "pages/api/updateJson";
exports.ids = ["pages/api/updateJson"];
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

/***/ "(api)/./pages/api/updateJson.ts":
/*!*********************************!*\
  !*** ./pages/api/updateJson.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nasync function handler(req, res) {\n    const reqData = JSON.stringify(req.body);\n    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"json\");\n    fs__WEBPACK_IMPORTED_MODULE_1__.promises.writeFile(jsonDirectory + \"/content.json\", reqData, (err)=>{\n        if (err) throw err;\n    });\n    res.status(200);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBkYXRlSnNvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDZFQUE2RTtBQUVyRDtBQUNZO0FBRXJCLGVBQWVHLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7SUFDQSxNQUFNQyxVQUFVQyxLQUFLQyxTQUFTLENBQUNKLElBQUlLLElBQUk7SUFDdkMsTUFBTUMsZ0JBQWdCVixnREFBUyxDQUFDWSxRQUFRQyxHQUFHLElBQUk7SUFDL0NYLGtEQUFZLENBQUNRLGdCQUFnQixpQkFBaUJKLFNBQVMsQ0FBQ1MsTUFBYTtRQUNuRSxJQUFJQSxLQUNGLE1BQU1BLElBQUs7SUFDZjtJQUNBVixJQUFJVyxNQUFNLENBQUM7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veW91dHViZXNpZGViYXIvLi9wYWdlcy9hcGkvdXBkYXRlSnNvbi50cz9mYjc4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBwcm9taXNlcyBhcyBmcyB9IGZyb20gJ2ZzJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8SlNPTj5cbikge1xuICBjb25zdCByZXFEYXRhID0gSlNPTi5zdHJpbmdpZnkocmVxLmJvZHkpXG4gIGNvbnN0IGpzb25EaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2pzb24nKTtcbiAgZnMud3JpdGVGaWxlKGpzb25EaXJlY3RvcnkgKyAnL2NvbnRlbnQuanNvbicsIHJlcURhdGEsIChlcnI6IGFueSkgPT4ge1xuICAgIGlmIChlcnIpXG4gICAgICB0aHJvdyhlcnIpO1xuICB9KTtcbiAgcmVzLnN0YXR1cygyMDApXG59XG4iXSwibmFtZXMiOlsicGF0aCIsInByb21pc2VzIiwiZnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVxRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJib2R5IiwianNvbkRpcmVjdG9yeSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwid3JpdGVGaWxlIiwiZXJyIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/updateJson.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/updateJson.ts"));
module.exports = __webpack_exports__;

})();