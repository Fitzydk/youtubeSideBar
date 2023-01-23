"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/view",{

/***/ "./pages/view.tsx":
/*!************************!*\
  !*** ./pages/view.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_bubble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/bubble */ \"./components/bubble.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst View = ()=>{\n    _s();\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        dateHandle();\n        currentTime();\n        fetch(\"./api/getJson\").then((resp)=>{\n            return resp.json();\n        }).then((data)=>{\n            setContent(data);\n        }).catch((err)=>{\n            console.error(err);\n        });\n        const intervalFetch = setInterval(()=>{\n            fetch(\"./api/getJson\").then((resp)=>{\n                return resp.json();\n            }).then((data)=>{\n                setContent(data);\n            }).catch((err)=>{\n                console.error(err);\n            });\n        }, 1200);\n    }, [\n        currentTime,\n        dateHandle\n    ]);\n    const nth = (d)=>{\n        if (d > 3 && d < 21) return \"th\";\n        switch(d % 10){\n            case 1:\n                return \"st\";\n            case 2:\n                return \"nd\";\n            case 3:\n                return \"rd\";\n            default:\n                return \"th\";\n        }\n    };\n    const dateHandle = ()=>{\n        const months = [\n            \"January\",\n            \"February\",\n            \"March\",\n            \"April\",\n            \"May\",\n            \"June\",\n            \"July\",\n            \"August\",\n            \"September\",\n            \"October\",\n            \"November\",\n            \"December\"\n        ];\n        const t = new Date();\n        let month = months[t.getMonth()];\n        const numDay = new Date();\n        let numberOfDay = numDay.getDate();\n        const year = new Date();\n        let currYear = year.getFullYear();\n        setDate(numberOfDay + nth(numberOfDay) + \" \" + month + \" \" + currYear);\n    };\n    const currentTime = ()=>{\n        let date = new Date();\n        let hh = date.getHours();\n        let mm = date.getMinutes();\n        let session = \"AM\";\n        if (hh === 0) {\n            hh = 12;\n        }\n        if (hh > 12) {\n            hh = hh - 12;\n            session = \"PM\";\n        }\n        hh = hh < 10 ? \"0\" + hh : hh;\n        mm = mm < 10 ? \"0\" + mm : mm;\n        let time = hh + \":\" + mm + \" \" + session;\n        setTime(time);\n        let t = setTimeout(function() {\n            currentTime();\n        }, 5000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Side bar Application\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\view.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\view.tsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-end items-start h-screen w-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-fit h-screen text-white bg-zinc-900 p-5 font-['Bebas_Neue'] font-light\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col justify-start items-start mb-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-3xl text-center\",\n                                    children: time\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\view.tsx\",\n                                    lineNumber: 116,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-3xl text-center\",\n                                    children: date\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\view.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: \"/cryptoWarehouse.png\",\n                                    width: 200,\n                                    height: 100,\n                                    alt: \"Crypto Warehouse Logo\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\view.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\view.tsx\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, undefined),\n                        content.map((stuff, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_bubble__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                data: stuff\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\view.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 20\n                            }, undefined);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\view.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\view.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(View, \"RDSEqmO/HA1xD3bMaItBfZqLNAI=\");\n_c = View;\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\nvar _c;\n$RefreshReg$(_c, \"View\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQUlDLFdBQVU7OENBQXdCdEM7Ozs7Ozs4Q0FDdkMsOERBQUNQLG1EQUFLQTtvQ0FDSjhDLEtBQUk7b0NBQ0pDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JDLEtBQUk7Ozs7Ozs7Ozs7Ozt3QkFHUDVDLFFBQVE2QyxHQUFHLENBQUMsQ0FBQ0MsT0FBa0JDLFFBQWtCOzRCQUNoRCxxQkFBTyw4REFBQ2pELDBEQUFNQTtnQ0FBYWMsTUFBTWtDOytCQUFiQzs7Ozs7d0JBQ3RCOzs7Ozs7Ozs7Ozs7OztBQUtWO0dBdkhNaEQ7S0FBQUE7QUF5SE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmlldy50c3g/Y2JmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1YmJsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9idWJibGVcIjtcblxudHlwZSBidWJibGVPYmogPSB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgaXNBY3RpdmU6IGJvb2xlYW47XG4gIGRpZmZpY3VsdHk6IHN0cmluZztcbn07XG5cbmNvbnN0IFZpZXc6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtkYXRlLCBzZXREYXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRhdGVIYW5kbGUoKTtcbiAgICBjdXJyZW50VGltZSgpO1xuICAgIGZldGNoKFwiLi9hcGkvZ2V0SnNvblwiKVxuICAgICAgLnRoZW4oKHJlc3ApID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldENvbnRlbnQoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gICAgY29uc3QgaW50ZXJ2YWxGZXRjaCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGZldGNoKFwiLi9hcGkvZ2V0SnNvblwiKVxuICAgICAgICAudGhlbigocmVzcCkgPT4ge1xuICAgICAgICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBzZXRDb250ZW50KGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSwgMTIwMCk7XG4gIH0sIFtjdXJyZW50VGltZSwgZGF0ZUhhbmRsZV0pO1xuXG4gIGNvbnN0IG50aCA9IChkOiBudW1iZXIpID0+IHtcbiAgICBpZiAoZCA+IDMgJiYgZCA8IDIxKSByZXR1cm4gXCJ0aFwiO1xuICAgIHN3aXRjaCAoZCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBcInN0XCI7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBcIm5kXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcInJkXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJ0aFwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkYXRlSGFuZGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vbnRocyA9IFtcbiAgICAgIFwiSmFudWFyeVwiLFxuICAgICAgXCJGZWJydWFyeVwiLFxuICAgICAgXCJNYXJjaFwiLFxuICAgICAgXCJBcHJpbFwiLFxuICAgICAgXCJNYXlcIixcbiAgICAgIFwiSnVuZVwiLFxuICAgICAgXCJKdWx5XCIsXG4gICAgICBcIkF1Z3VzdFwiLFxuICAgICAgXCJTZXB0ZW1iZXJcIixcbiAgICAgIFwiT2N0b2JlclwiLFxuICAgICAgXCJOb3ZlbWJlclwiLFxuICAgICAgXCJEZWNlbWJlclwiLFxuICAgIF07XG4gICAgY29uc3QgdCA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IG1vbnRoID0gbW9udGhzW3QuZ2V0TW9udGgoKV07XG4gICAgY29uc3QgbnVtRGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgbnVtYmVyT2ZEYXkgPSBudW1EYXkuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBjdXJyWWVhciA9IHllYXIuZ2V0RnVsbFllYXIoKTtcblxuICAgIHNldERhdGUobnVtYmVyT2ZEYXkgKyBudGgobnVtYmVyT2ZEYXkpICsgXCIgXCIgKyBtb250aCArIFwiIFwiICsgY3VyclllYXIpO1xuICB9O1xuXG4gIGNvbnN0IGN1cnJlbnRUaW1lID0gKCkgPT4ge1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgaGg6IHN0cmluZyB8IG51bWJlciA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgbW06IHN0cmluZyB8IG51bWJlciA9IGRhdGUuZ2V0TWludXRlcygpO1xuICAgIGxldCBzZXNzaW9uID0gXCJBTVwiO1xuXG4gICAgaWYgKGhoID09PSAwKSB7XG4gICAgICBoaCA9IDEyO1xuICAgIH1cbiAgICBpZiAoaGggPiAxMikge1xuICAgICAgaGggPSBoaCAtIDEyO1xuICAgICAgc2Vzc2lvbiA9IFwiUE1cIjtcbiAgICB9XG5cbiAgICBoaCA9IGhoIDwgMTAgPyBcIjBcIiArIGhoIDogaGg7XG4gICAgbW0gPSBtbSA8IDEwID8gXCIwXCIgKyBtbSA6IG1tO1xuXG4gICAgbGV0IHRpbWUgPSBoaCArIFwiOlwiICsgbW0gKyBcIiBcIiArIHNlc3Npb247XG4gICAgc2V0VGltZSh0aW1lKTtcbiAgICBsZXQgdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY3VycmVudFRpbWUoKTtcbiAgICB9LCA1MDAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNpZGUgYmFyIEFwcGxpY2F0aW9uPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBpdGVtcy1zdGFydCBoLXNjcmVlbiB3LXNjcmVlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZml0IGgtc2NyZWVuIHRleHQtd2hpdGUgYmctemluYy05MDAgcC01IGZvbnQtWydCZWJhc19OZXVlJ10gZm9udC1saWdodFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLXN0YXJ0IG1iLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1jZW50ZXJcIj57dGltZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGwgdGV4dC1jZW50ZXJcIj57ZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCIvY3J5cHRvV2FyZWhvdXNlLnBuZ1wiXG4gICAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgICBhbHQ9XCJDcnlwdG8gV2FyZWhvdXNlIExvZ29cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7Y29udGVudC5tYXAoKHN0dWZmOiBidWJibGVPYmosIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8QnViYmxlIGtleT17aW5kZXh9IGRhdGE9e3N0dWZmfT48L0J1YmJsZT47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3O1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQnViYmxlIiwiVmlldyIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiZGF0ZSIsInNldERhdGUiLCJ0aW1lIiwic2V0VGltZSIsImRhdGVIYW5kbGUiLCJjdXJyZW50VGltZSIsImZldGNoIiwidGhlbiIsInJlc3AiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiaW50ZXJ2YWxGZXRjaCIsInNldEludGVydmFsIiwibnRoIiwiZCIsIm1vbnRocyIsInQiLCJEYXRlIiwibW9udGgiLCJnZXRNb250aCIsIm51bURheSIsIm51bWJlck9mRGF5IiwiZ2V0RGF0ZSIsInllYXIiLCJjdXJyWWVhciIsImdldEZ1bGxZZWFyIiwiaGgiLCJnZXRIb3VycyIsIm1tIiwiZ2V0TWludXRlcyIsInNlc3Npb24iLCJzZXRUaW1lb3V0IiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIm1hcCIsInN0dWZmIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/view.tsx\n"));

/***/ })

});