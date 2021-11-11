"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductScreen; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/data */ \"./utils/data.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/styles */ \"./utils/styles.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/lucasyee/Documents/WebDev/next-amazons/pages/product/[slug].js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction ProductScreen() {\n  _s();\n\n  var classes = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_5__.default)();\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var slug = router.query.slug;\n  var product = _utils_data__WEBPACK_IMPORTED_MODULE_2__.default.products.find(function (a) {\n    return a.slug === slug;\n  });\n\n  if (!product) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      children: \"Product Not Found\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {\n    title: product.name,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n      className: classes.section,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: \"/\",\n        passHref: true,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Link, {\n          children: \"back to products\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n      container: true,\n      spacing: 1,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n        item: true,\n        md: 6,\n        xs: 12,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n          src: product.image,\n          alt: product.name,\n          width: 640,\n          height: 640,\n          layout: \"responsive\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n        item: true,\n        md: 3,\n        xs: 12,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.List, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n              children: \"Category:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 15\n            }, this), \" \", product.category]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n              children: [\"Brand: \", product.brand]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n              children: [\"Rating: \", product.rating, \" stars (\", product.numReviews, \" reviews)\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n            children: [\"Description: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n              children: product.description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 28\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ProductScreen, \"y+nxznVgQ96pr4dCg1EC6WdujUg=\", false, function () {\n  return [_utils_styles__WEBPACK_IMPORTED_MODULE_5__.default, next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = ProductScreen;\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductScreen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxVQURGO0FBc0NEOztHQTlDdUJoQjtVQUNORixvREFDRFQ7OztLQUZPVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcz83MmUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi91dGlscy9kYXRhJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBMaW5rLCBHcmlkLCBMaXN0LCBMaXN0SXRlbSwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi4vLi4vdXRpbHMvc3R5bGVzJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdFNjcmVlbigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBzbHVnIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IHByb2R1Y3QgPSBkYXRhLnByb2R1Y3RzLmZpbmQoKGEpID0+IGEuc2x1ZyA9PT0gc2x1Zyk7XG4gIGlmICghcHJvZHVjdCkge1xuICAgIHJldHVybiA8ZGl2PlByb2R1Y3QgTm90IEZvdW5kPC9kaXY+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT17cHJvZHVjdC5uYW1lfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICA8TGluaz5iYWNrIHRvIHByb2R1Y3RzPC9MaW5rPlxuICAgICAgICA8L05leHRMaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XG4gICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2V9XG4gICAgICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICAgIHdpZHRoPXs2NDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezY0MH1cbiAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgID48L0ltYWdlPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9IHhzPXsxMn0+XG4gICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkNhdGVnb3J5OjwvVHlwb2dyYXBoeT4ge3Byb2R1Y3QuY2F0ZWdvcnl9XG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5CcmFuZDoge3Byb2R1Y3QuYnJhbmR9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgUmF0aW5nOiB7cHJvZHVjdC5yYXRpbmd9IHN0YXJzICh7cHJvZHVjdC5udW1SZXZpZXdzfSByZXZpZXdzKVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogPFR5cG9ncmFwaHk+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsImRhdGEiLCJMYXlvdXQiLCJOZXh0TGluayIsIkxpbmsiLCJHcmlkIiwiTGlzdCIsIkxpc3RJdGVtIiwiVHlwb2dyYXBoeSIsInVzZVN0eWxlcyIsIkltYWdlIiwiUHJvZHVjdFNjcmVlbiIsImNsYXNzZXMiLCJyb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJmaW5kIiwiYSIsIm5hbWUiLCJzZWN0aW9uIiwiaW1hZ2UiLCJjYXRlZ29yeSIsImJyYW5kIiwicmF0aW5nIiwibnVtUmV2aWV3cyIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n");

/***/ })

});