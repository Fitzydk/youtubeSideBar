/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/edit"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cangel%5CDesktop%5CProgramming%5CNext%5CyoutubeSideBar2%5Cpages%5Cedit.tsx&page=%2Fedit!":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cangel%5CDesktop%5CProgramming%5CNext%5CyoutubeSideBar2%5Cpages%5Cedit.tsx&page=%2Fedit! ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/edit\",\n      function () {\n        return __webpack_require__(/*! ./pages/edit.tsx */ \"./pages/edit.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/edit\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDVXNlcnMlNUNhbmdlbCU1Q0Rlc2t0b3AlNUNQcm9ncmFtbWluZyU1Q05leHQlNUN5b3V0dWJlU2lkZUJhcjIlNUNwYWdlcyU1Q2VkaXQudHN4JnBhZ2U9JTJGZWRpdCEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQywwQ0FBa0I7QUFDekM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvP2Q1MzkiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9lZGl0XCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9lZGl0LnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvZWRpdFwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cangel%5CDesktop%5CProgramming%5CNext%5CyoutubeSideBar2%5Cpages%5Cedit.tsx&page=%2Fedit!\n"));

/***/ }),

/***/ "./pages/edit.tsx":
/*!************************!*\
  !*** ./pages/edit.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Edit = ()=>{\n    _s();\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"./api/getJson\").then((resp)=>{\n            return resp.json();\n        }).then((data)=>{\n            setContent(data);\n        }).catch((err)=>{\n            console.error(err);\n        });\n    }, []);\n    const updateJson = async (content)=>{\n        await fetch(\"./api/updateJson\", {\n            method: \"POST\",\n            mode: \"cors\",\n            cache: \"no-cache\",\n            credentials: \"same-origin\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(content)\n        });\n    };\n    const upBubble = ()=>{\n        let tempContent = content;\n        for(var i = 0; i < tempContent.length; i++){\n            if (tempContent[i].isActive == true) {\n                if (i == 0) {\n                    tempContent[i].isActive = false;\n                    tempContent[tempContent.length - 1].isActive = true;\n                    break;\n                } else {\n                    tempContent[i].isActive = false;\n                    tempContent[i - 1].isActive = true;\n                    break;\n                }\n            }\n        }\n        setContent([\n            ...tempContent\n        ]);\n        updateJson(tempContent);\n    };\n    const downBubble = ()=>{\n        let tempContent = content;\n        for(var i = 0; i < tempContent.length; i++){\n            if (tempContent[i].isActive == true) {\n                if (i == tempContent.length - 1) {\n                    tempContent[i].isActive = false;\n                    tempContent[0].isActive = true;\n                    break;\n                } else {\n                    tempContent[i].isActive = false;\n                    tempContent[i + 1].isActive = true;\n                    break;\n                }\n            }\n        }\n        setContent([\n            ...tempContent\n        ]);\n        updateJson(tempContent);\n    };\n    const updateDifficulty = (id)=>{\n        let tempContent = content;\n        let diff = tempContent[id].difficulty;\n        tempContent[id].difficulty = diff == \"easy\" ? \"medium\" : diff == \"medium\" ? \"hard\" : diff == \"hard\" ? \"easy\" : \"\";\n        setContent([\n            ...tempContent\n        ]);\n        updateJson(tempContent);\n    };\n    const changeBubbleText = (id, value)=>{\n        let tempContent = content;\n        tempContent[id].content = value;\n        updateJson(tempContent);\n    };\n    const removeBubble = (id)=>{\n        let tempContent = content;\n        tempContent.splice(id, 1);\n        setContent([\n            ...tempContent\n        ]);\n        updateJson(tempContent);\n    };\n    const addBubble = ()=>{\n        let tempContent = content;\n        tempContent[tempContent.length] = {\n            content: \"\",\n            isActive: false,\n            difficulty: \"easy\"\n        };\n        setContent([\n            ...tempContent\n        ]);\n        updateJson(tempContent);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Side bar Application\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\edit.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\edit.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-end items-start h-screen w-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-fit\",\n                    children: [\n                        content.map((data, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex relative border-solid border border-slate-800 mb-2 mr-1 rounded-2xl flex-row p-8 items-center justify-center \".concat(data.isActive ? \"bg-amber-300\" : \"bg-amber-500\"),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"cursor-pointer bg-red-500 absolute top-2 right-2 rounded-full px-2 text-white font-black\",\n                                            onClick: ()=>{\n                                                removeBubble(index);\n                                            },\n                                            children: \"X\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\edit.tsx\",\n                                            lineNumber: 132,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"uppercase font-bold text-xl antialiased w-full\",\n                                            contentEditable: \"true\",\n                                            placeholder: \"test\",\n                                            suppressContentEditableWarning: true,\n                                            onInput: (e)=>{\n                                                changeBubbleText(index, e.target.innerText);\n                                            },\n                                            children: data.content\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\edit.tsx\",\n                                            lineNumber: 140,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"rounded-full cursor-pointer \".concat(data.difficulty == \"easy\" ? \"bg-green-600\" : data.difficulty == \"medium\" ? \"bg-orange-600\" : data.difficulty == \"hard\" ? \"bg-red-600\" : \"bg-gray-400\", \" w-6 h-6 absolute bottom-auto left-1\"),\n                                            onClick: ()=>{\n                                                updateDifficulty(index);\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\edit.tsx\",\n                                            lineNumber: 151,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\edit.tsx\",\n                                    lineNumber: 127,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\edit.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 15\n                            }, undefined);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-1 items-center justify-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"cursor-pointer bg-gray-400 rounded-full p-3 w-1/3 items-center justify-center flex\",\n                                    onClick: ()=>{\n                                        addBubble();\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-2xl text-white\",\n                                        children: \"Add\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\edit.tsx\",\n                                        lineNumber: 176,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\edit.tsx\",\n                                    lineNumber: 170,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"cursor-pointer bg-gray-400 rounded-full p-3 w-1/3 items-center justify-center flex\",\n                                    onClick: ()=>{\n                                        upBubble();\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-2xl text-white\",\n                                        children: \"UP\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\edit.tsx\",\n                                        lineNumber: 184,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\edit.tsx\",\n                                    lineNumber: 178,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"cursor-pointer bg-gray-400 rounded-full p-3 w-1/3 items-center justify-center flex\",\n                                    onClick: ()=>{\n                                        downBubble();\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-2xl text-white\",\n                                        children: \"DOWN\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\edit.tsx\",\n                                        lineNumber: 192,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\edit.tsx\",\n                                    lineNumber: 186,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\edit.tsx\",\n                            lineNumber: 169,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\edit.tsx\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\angel\\\\Desktop\\\\Programming\\\\Next\\\\youtubeSideBar2\\\\pages\\\\edit.tsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Edit, \"gRb/xpZ2tFPFe5xJrmrGOH9fIlI=\");\n_c = Edit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Edit);\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDQXZCLEtBQUt1QixVQUFVLElBQUksU0FDbkIsZUFDQSxhQUFhLEVBQ2xCOzRDQUNEVyxTQUFTLElBQU07Z0RBQ2JkLGlCQUFpQmE7NENBQ25COzs7Ozs7Ozs7Ozs7K0JBckNJQTs7Ozs7d0JBMENkO3NDQUNBLDhEQUFDSDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUNDQyxXQUFVO29DQUNWRyxTQUFTLElBQU07d0NBQ2JOO29DQUNGOzhDQUVBLDRFQUFDTzt3Q0FBRUosV0FBVTtrREFBc0I7Ozs7Ozs7Ozs7OzhDQUVyQyw4REFBQ0Q7b0NBQ0NDLFdBQVU7b0NBQ1ZHLFNBQVMsSUFBTTt3Q0FDYnBCO29DQUNGOzhDQUVBLDRFQUFDcUI7d0NBQUVKLFdBQVU7a0RBQXNCOzs7Ozs7Ozs7Ozs4Q0FFckMsOERBQUNEO29DQUNDQyxXQUFVO29DQUNWRyxTQUFTLElBQU07d0NBQ2JmO29DQUNGOzhDQUVBLDRFQUFDZ0I7d0NBQUVKLFdBQVU7a0RBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakQ7R0E1TE10QztLQUFBQTtBQThMTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9lZGl0LnRzeD9hOWQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIGJ1YmJsZU9iaiA9IHtcbiAgY29udGVudDogc3RyaW5nO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbiAgZGlmZmljdWx0eTogc3RyaW5nO1xufTtcblxuY29uc3QgRWRpdDogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlPGJ1YmJsZU9ialtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcIi4vYXBpL2dldEpzb25cIilcbiAgICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXRDb250ZW50KGRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgdXBkYXRlSnNvbiA9IGFzeW5jIChjb250ZW50OiBidWJibGVPYmpbXSkgPT4ge1xuICAgIGF3YWl0IGZldGNoKFwiLi9hcGkvdXBkYXRlSnNvblwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxuICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29udGVudCksXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXBCdWJibGUgPSAoKSA9PiB7XG4gICAgbGV0IHRlbXBDb250ZW50OiBidWJibGVPYmpbXSA9IGNvbnRlbnQ7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wQ29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRlbXBDb250ZW50W2ldLmlzQWN0aXZlID09IHRydWUpIHtcbiAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgIHRlbXBDb250ZW50W2ldLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgdGVtcENvbnRlbnRbdGVtcENvbnRlbnQubGVuZ3RoIC0gMV0uaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBDb250ZW50W2ldLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgdGVtcENvbnRlbnRbaSAtIDFdLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRDb250ZW50KFsuLi50ZW1wQ29udGVudF0pO1xuICAgIHVwZGF0ZUpzb24odGVtcENvbnRlbnQpO1xuICB9O1xuXG4gIGNvbnN0IGRvd25CdWJibGUgPSAoKSA9PiB7XG4gICAgbGV0IHRlbXBDb250ZW50OiBidWJibGVPYmpbXSA9IGNvbnRlbnQ7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZW1wQ29udGVudC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRlbXBDb250ZW50W2ldLmlzQWN0aXZlID09IHRydWUpIHtcbiAgICAgICAgaWYgKGkgPT0gdGVtcENvbnRlbnQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIHRlbXBDb250ZW50W2ldLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgdGVtcENvbnRlbnRbMF0uaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBDb250ZW50W2ldLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgdGVtcENvbnRlbnRbaSArIDFdLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRDb250ZW50KFsuLi50ZW1wQ29udGVudF0pO1xuICAgIHVwZGF0ZUpzb24odGVtcENvbnRlbnQpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZURpZmZpY3VsdHkgPSAoaWQ6IG51bWJlcikgPT4ge1xuICAgIGxldCB0ZW1wQ29udGVudDogYnViYmxlT2JqW10gPSBjb250ZW50O1xuICAgIGxldCBkaWZmID0gdGVtcENvbnRlbnRbaWRdLmRpZmZpY3VsdHk7XG4gICAgdGVtcENvbnRlbnRbaWRdLmRpZmZpY3VsdHkgPVxuICAgICAgZGlmZiA9PSBcImVhc3lcIlxuICAgICAgICA/IFwibWVkaXVtXCJcbiAgICAgICAgOiBkaWZmID09IFwibWVkaXVtXCJcbiAgICAgICAgPyBcImhhcmRcIlxuICAgICAgICA6IGRpZmYgPT0gXCJoYXJkXCJcbiAgICAgICAgPyBcImVhc3lcIlxuICAgICAgICA6IFwiXCI7XG4gICAgc2V0Q29udGVudChbLi4udGVtcENvbnRlbnRdKTtcbiAgICB1cGRhdGVKc29uKHRlbXBDb250ZW50KTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VCdWJibGVUZXh0ID0gKGlkOiBudW1iZXIsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBsZXQgdGVtcENvbnRlbnQ6IGJ1YmJsZU9ialtdID0gY29udGVudDtcbiAgICB0ZW1wQ29udGVudFtpZF0uY29udGVudCA9IHZhbHVlO1xuICAgIHVwZGF0ZUpzb24odGVtcENvbnRlbnQpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUJ1YmJsZSA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgbGV0IHRlbXBDb250ZW50OiBidWJibGVPYmpbXSA9IGNvbnRlbnQ7XG4gICAgdGVtcENvbnRlbnQuc3BsaWNlKGlkLCAxKTtcbiAgICBzZXRDb250ZW50KFsuLi50ZW1wQ29udGVudF0pO1xuICAgIHVwZGF0ZUpzb24odGVtcENvbnRlbnQpO1xuICB9O1xuXG4gIGNvbnN0IGFkZEJ1YmJsZSA9ICgpID0+IHtcbiAgICBsZXQgdGVtcENvbnRlbnQ6IGJ1YmJsZU9ialtdID0gY29udGVudDtcbiAgICB0ZW1wQ29udGVudFt0ZW1wQ29udGVudC5sZW5ndGhdID0ge1xuICAgICAgY29udGVudDogXCJcIixcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgIGRpZmZpY3VsdHk6IFwiZWFzeVwiLFxuICAgIH07XG4gICAgc2V0Q29udGVudChbLi4udGVtcENvbnRlbnRdKTtcbiAgICB1cGRhdGVKc29uKHRlbXBDb250ZW50KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlNpZGUgYmFyIEFwcGxpY2F0aW9uPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZCBpdGVtcy1zdGFydCBoLXNjcmVlbiB3LXNjcmVlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZml0XCI+XG4gICAgICAgICAge2NvbnRlbnQubWFwKChkYXRhOiBidWJibGVPYmosIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCByZWxhdGl2ZSBib3JkZXItc29saWQgYm9yZGVyIGJvcmRlci1zbGF0ZS04MDAgbWItMiBtci0xIHJvdW5kZWQtMnhsIGZsZXgtcm93IHAtOCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pc0FjdGl2ZSA/IFwiYmctYW1iZXItMzAwXCIgOiBcImJnLWFtYmVyLTUwMFwiXG4gICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGJnLXJlZC01MDAgYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiByb3VuZGVkLWZ1bGwgcHgtMiB0ZXh0LXdoaXRlIGZvbnQtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQnViYmxlKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgWFxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQteGwgYW50aWFsaWFzZWQgdy1mdWxsYH1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudEVkaXRhYmxlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtcInRlc3RcIn1cbiAgICAgICAgICAgICAgICAgICAgc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvbklucHV0PXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUJ1YmJsZVRleHQoaW5kZXgsIGUudGFyZ2V0LmlubmVyVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLmRpZmZpY3VsdHkgPT0gXCJlYXN5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1ncmVlbi02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhLmRpZmZpY3VsdHkgPT0gXCJtZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJnLW9yYW5nZS02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRhLmRpZmZpY3VsdHkgPT0gXCJoYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1yZWQtNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJiZy1ncmF5LTQwMFwiXG4gICAgICAgICAgICAgICAgICAgIH0gdy02IGgtNiBhYnNvbHV0ZSBib3R0b20tYXV0byBsZWZ0LTFgfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGlmZmljdWx0eShpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgYmctZ3JheS00MDAgcm91bmRlZC1mdWxsIHAtMyB3LTEvMyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBhZGRCdWJibGUoKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC13aGl0ZVwiPkFkZDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBiZy1ncmF5LTQwMCByb3VuZGVkLWZ1bGwgcC0zIHctMS8zIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHVwQnViYmxlKCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtd2hpdGVcIj5VUDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBiZy1ncmF5LTQwMCByb3VuZGVkLWZ1bGwgcC0zIHctMS8zIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmbGV4XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvd25CdWJibGUoKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC13aGl0ZVwiPkRPV048L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXQ7XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRWRpdCIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiZmV0Y2giLCJ0aGVuIiwicmVzcCIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJ1cGRhdGVKc29uIiwibWV0aG9kIiwibW9kZSIsImNhY2hlIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cEJ1YmJsZSIsInRlbXBDb250ZW50IiwiaSIsImxlbmd0aCIsImlzQWN0aXZlIiwiZG93bkJ1YmJsZSIsInVwZGF0ZURpZmZpY3VsdHkiLCJpZCIsImRpZmYiLCJkaWZmaWN1bHR5IiwiY2hhbmdlQnViYmxlVGV4dCIsInZhbHVlIiwicmVtb3ZlQnViYmxlIiwic3BsaWNlIiwiYWRkQnViYmxlIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsIm9uQ2xpY2siLCJwIiwiY29udGVudEVkaXRhYmxlIiwicGxhY2Vob2xkZXIiLCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmciLCJvbklucHV0IiwiZSIsInRhcmdldCIsImlubmVyVGV4dCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/edit.tsx\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5Cangel%5CDesktop%5CProgramming%5CNext%5CyoutubeSideBar2%5Cpages%5Cedit.tsx&page=%2Fedit!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);