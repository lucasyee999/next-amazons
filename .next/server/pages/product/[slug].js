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
exports.id = "pages/product/[slug]";
exports.ids = ["pages/product/[slug]"];
exports.modules = {

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductScreen)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/data */ \"./utils/data.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/lucasyee/Documents/WebDev/next-amazons/pages/product/[slug].js\";\n\n\n\n\nfunction ProductScreen() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const {\n    slug\n  } = router.query;\n  const product = _utils_data__WEBPACK_IMPORTED_MODULE_2__.default.products.find(a => a.slug === slug);\n\n  if (!product) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      children: \"Product Not Found\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 12\n    }, this);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      children: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRWUsU0FBU0csYUFBVCxHQUF5QjtBQUN0QyxRQUFNQyxNQUFNLEdBQUdILHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFSSxJQUFBQTtBQUFGLE1BQVdELE1BQU0sQ0FBQ0UsS0FBeEI7QUFDQSxRQUFNQyxPQUFPLEdBQUdMLDhEQUFBLENBQW9CUSxDQUFELElBQU9BLENBQUMsQ0FBQ0wsSUFBRixLQUFXQSxJQUFyQyxDQUFoQjs7QUFDQSxNQUFJLENBQUNFLE9BQUwsRUFBYztBQUNaLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFDRCxzQkFDRTtBQUFBLDJCQUNFO0FBQUEsZ0JBQUtBLE9BQU8sQ0FBQ0k7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFtYXpvbnMvLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcz83MmUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi91dGlscy9kYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdFNjcmVlbigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBwcm9kdWN0ID0gZGF0YS5wcm9kdWN0cy5maW5kKChhKSA9PiBhLnNsdWcgPT09IHNsdWcpO1xuICBpZiAoIXByb2R1Y3QpIHtcbiAgICByZXR1cm4gPGRpdj5Qcm9kdWN0IE5vdCBGb3VuZDwvZGl2PjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e3Byb2R1Y3QubmFtZX08L2gxPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwiZGF0YSIsIlByb2R1Y3RTY3JlZW4iLCJyb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJmaW5kIiwiYSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n");

/***/ }),

/***/ "./utils/data.js":
/*!***********************!*\
  !*** ./utils/data.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst data = {\n  products: [{\n    name: 'Free Shirt',\n    slug: 'free-shirt',\n    category: 'Shirts',\n    image: '/images/shirt1.jpg',\n    price: 70,\n    brand: 'Nike',\n    rating: 4.5,\n    numReviews: 10,\n    countInStock: 20,\n    description: 'A popular shirt'\n  }, {\n    name: 'Fit Shirt',\n    slug: 'fit-shirt',\n    category: 'Shirts',\n    image: '/images/shirt2.jpg',\n    price: 80,\n    brand: 'Adidas',\n    rating: 4.2,\n    numReviews: 10,\n    countInStock: 20,\n    description: 'A popular shirt'\n  }, {\n    name: 'Slim Shirt',\n    slug: 'slim-shirt',\n    category: 'Shirts',\n    image: '/images/shirt3.jpg',\n    price: 90,\n    brand: 'Raymond',\n    rating: 4.5,\n    numReviews: 10,\n    countInStock: 20,\n    description: 'A popular shirt'\n  }, {\n    name: 'Golf Pants',\n    slug: 'golf-pants',\n    category: 'Pants',\n    image: '/images/pants1.jpg',\n    price: 90,\n    brand: 'Oliver',\n    rating: 4.5,\n    numReviews: 10,\n    countInStock: 20,\n    description: 'Smart looking pants'\n  }, {\n    name: 'Fit Pants',\n    slug: 'fit-pants',\n    category: 'Pants',\n    image: '/images/pants2.jpg',\n    price: 95,\n    brand: 'Zara',\n    rating: 4.5,\n    numReviews: 10,\n    countInStock: 20,\n    description: 'A popular pants'\n  }, {\n    name: 'Classic Pants',\n    slug: 'classic-pants',\n    category: 'Pants',\n    image: '/images/pants3.jpg',\n    price: 75,\n    brand: 'Casely',\n    rating: 4.5,\n    numReviews: 10,\n    countInStock: 20,\n    description: 'A popular pants'\n  }]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFEQyxDQUFiO0FBNEVBLGlFQUFlWCxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hbWF6b25zLy4vdXRpbHMvZGF0YS5qcz85ZmFiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRhdGEgPSB7XG4gIHByb2R1Y3RzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ0ZyZWUgU2hpcnQnLFxuICAgICAgc2x1ZzogJ2ZyZWUtc2hpcnQnLFxuICAgICAgY2F0ZWdvcnk6ICdTaGlydHMnLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3NoaXJ0MS5qcGcnLFxuICAgICAgcHJpY2U6IDcwLFxuICAgICAgYnJhbmQ6ICdOaWtlJyxcbiAgICAgIHJhdGluZzogNC41LFxuICAgICAgbnVtUmV2aWV3czogMTAsXG4gICAgICBjb3VudEluU3RvY2s6IDIwLFxuICAgICAgZGVzY3JpcHRpb246ICdBIHBvcHVsYXIgc2hpcnQnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0ZpdCBTaGlydCcsXG4gICAgICBzbHVnOiAnZml0LXNoaXJ0JyxcbiAgICAgIGNhdGVnb3J5OiAnU2hpcnRzJyxcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9zaGlydDIuanBnJyxcbiAgICAgIHByaWNlOiA4MCxcbiAgICAgIGJyYW5kOiAnQWRpZGFzJyxcbiAgICAgIHJhdGluZzogNC4yLFxuICAgICAgbnVtUmV2aWV3czogMTAsXG4gICAgICBjb3VudEluU3RvY2s6IDIwLFxuICAgICAgZGVzY3JpcHRpb246ICdBIHBvcHVsYXIgc2hpcnQnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1NsaW0gU2hpcnQnLFxuICAgICAgc2x1ZzogJ3NsaW0tc2hpcnQnLFxuICAgICAgY2F0ZWdvcnk6ICdTaGlydHMnLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3NoaXJ0My5qcGcnLFxuICAgICAgcHJpY2U6IDkwLFxuICAgICAgYnJhbmQ6ICdSYXltb25kJyxcbiAgICAgIHJhdGluZzogNC41LFxuICAgICAgbnVtUmV2aWV3czogMTAsXG4gICAgICBjb3VudEluU3RvY2s6IDIwLFxuICAgICAgZGVzY3JpcHRpb246ICdBIHBvcHVsYXIgc2hpcnQnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0dvbGYgUGFudHMnLFxuICAgICAgc2x1ZzogJ2dvbGYtcGFudHMnLFxuICAgICAgY2F0ZWdvcnk6ICdQYW50cycsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvcGFudHMxLmpwZycsXG4gICAgICBwcmljZTogOTAsXG4gICAgICBicmFuZDogJ09saXZlcicsXG4gICAgICByYXRpbmc6IDQuNSxcbiAgICAgIG51bVJldmlld3M6IDEwLFxuICAgICAgY291bnRJblN0b2NrOiAyMCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnU21hcnQgbG9va2luZyBwYW50cycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRml0IFBhbnRzJyxcbiAgICAgIHNsdWc6ICdmaXQtcGFudHMnLFxuICAgICAgY2F0ZWdvcnk6ICdQYW50cycsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvcGFudHMyLmpwZycsXG4gICAgICBwcmljZTogOTUsXG4gICAgICBicmFuZDogJ1phcmEnLFxuICAgICAgcmF0aW5nOiA0LjUsXG4gICAgICBudW1SZXZpZXdzOiAxMCxcbiAgICAgIGNvdW50SW5TdG9jazogMjAsXG4gICAgICBkZXNjcmlwdGlvbjogJ0EgcG9wdWxhciBwYW50cycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2xhc3NpYyBQYW50cycsXG4gICAgICBzbHVnOiAnY2xhc3NpYy1wYW50cycsXG4gICAgICBjYXRlZ29yeTogJ1BhbnRzJyxcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9wYW50czMuanBnJyxcbiAgICAgIHByaWNlOiA3NSxcbiAgICAgIGJyYW5kOiAnQ2FzZWx5JyxcbiAgICAgIHJhdGluZzogNC41LFxuICAgICAgbnVtUmV2aWV3czogMTAsXG4gICAgICBjb3VudEluU3RvY2s6IDIwLFxuICAgICAgZGVzY3JpcHRpb246ICdBIHBvcHVsYXIgcGFudHMnLFxuICAgIH0sXG4gIF0sXG59O1xuZXhwb3J0IGRlZmF1bHQgZGF0YTtcbiJdLCJuYW1lcyI6WyJkYXRhIiwicHJvZHVjdHMiLCJuYW1lIiwic2x1ZyIsImNhdGVnb3J5IiwiaW1hZ2UiLCJwcmljZSIsImJyYW5kIiwicmF0aW5nIiwibnVtUmV2aWV3cyIsImNvdW50SW5TdG9jayIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/data.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/product/[slug].js"));
module.exports = __webpack_exports__;

})();