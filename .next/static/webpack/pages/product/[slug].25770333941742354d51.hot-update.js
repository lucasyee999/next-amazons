"use strict";
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/styles */ "./utils/styles.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Lucas\\Desktop\\webdev\\next-amazons\\components\\Layout.js",
    _s = $RefreshSig$();







function Layout(_ref) {
  _s();

  var title = _ref.title,
      description = _ref.description,
      children = _ref.children;
  var theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.createTheme)({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0"
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0"
      }
    },
    palette: {
      type: 'light'
    }
  });
  var classes = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_3__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("title", {
        children: title ? "".concat(title, " - Next Amazons") : "Next Amazons"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("meta", {
        name: "description",
        content: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 25
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {
      theme: theme,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.CssBaseline, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.AppBar, {
        position: "static",
        className: classes.navbar,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Toolbar, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: "/",
            passHref: true,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Link, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
                className: classes.brand,
                children: "amazons"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: classes.grow
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/cart",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Link, {
                children: "Cart"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/login",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Link, {
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Container, {
        className: classes.main,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("footer", {
        className: classes.footer,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Typography, {
          children: "All rights reserved. Next Amazona."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

_s(Layout, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [_utils_styles__WEBPACK_IMPORTED_MODULE_3__.default];
});

_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9bc2x1Z10uMjU3NzAzMzM5NDE3NDIzNTRkNTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVVBOztBQUVlLFNBQVNZLE1BQVQsT0FBa0Q7QUFBQTs7QUFBQSxNQUFoQ0MsS0FBZ0MsUUFBaENBLEtBQWdDO0FBQUEsTUFBekJDLFdBQXlCLFFBQXpCQSxXQUF5QjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUMvRCxNQUFNQyxLQUFLLEdBQUdSLDhEQUFXLENBQUM7QUFDeEJTLElBQUFBLFVBQVUsRUFBRTtBQUNWQyxNQUFBQSxFQUFFLEVBQUU7QUFDRkMsUUFBQUEsUUFBUSxFQUFFLFFBRFI7QUFFRkMsUUFBQUEsVUFBVSxFQUFFLEdBRlY7QUFHRkMsUUFBQUEsTUFBTSxFQUFFO0FBSE4sT0FETTtBQU1WQyxNQUFBQSxFQUFFLEVBQUU7QUFDRkgsUUFBQUEsUUFBUSxFQUFFLFFBRFI7QUFFRkMsUUFBQUEsVUFBVSxFQUFFLEdBRlY7QUFHRkMsUUFBQUEsTUFBTSxFQUFFO0FBSE47QUFOTSxLQURZO0FBYXhCRSxJQUFBQSxPQUFPLEVBQUU7QUFDUEMsTUFBQUEsSUFBSSxFQUFFO0FBREM7QUFiZSxHQUFELENBQXpCO0FBaUJBLE1BQU1DLE9BQU8sR0FBR2Qsc0RBQVMsRUFBekI7QUFDQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQSxrQkFBUUUsS0FBSyxhQUFNQSxLQUFOLHVCQUErQjtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR0MsV0FBVyxpQkFBSTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBRUE7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLDhEQUFDLDREQUFEO0FBQWUsV0FBSyxFQUFFRSxLQUF0QjtBQUFBLDhCQUNFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLHFEQUFEO0FBQVEsZ0JBQVEsRUFBQyxRQUFqQjtBQUEwQixpQkFBUyxFQUFFUyxPQUFPLENBQUNDLE1BQTdDO0FBQUEsK0JBQ0UsOERBQUMsc0RBQUQ7QUFBQSxrQ0FDRSw4REFBQyxrREFBRDtBQUFVLGdCQUFJLEVBQUMsR0FBZjtBQUFtQixvQkFBUSxNQUEzQjtBQUFBLG1DQUNFLDhEQUFDLG1EQUFEO0FBQUEscUNBQ0UsOERBQUMseURBQUQ7QUFBWSx5QkFBUyxFQUFFRCxPQUFPLENBQUNFLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFNRTtBQUFLLHFCQUFTLEVBQUVGLE9BQU8sQ0FBQ0c7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFORixlQU9FO0FBQUEsb0NBQ0UsOERBQUMsa0RBQUQ7QUFBVSxrQkFBSSxFQUFDLE9BQWY7QUFBdUIsc0JBQVEsTUFBL0I7QUFBQSxxQ0FDRSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFJRSw4REFBQyxrREFBRDtBQUFVLGtCQUFJLEVBQUMsUUFBZjtBQUF3QixzQkFBUSxNQUFoQztBQUFBLHFDQUNFLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBb0JFLDhEQUFDLHdEQUFEO0FBQVcsaUJBQVMsRUFBRUgsT0FBTyxDQUFDSSxJQUE5QjtBQUFBLGtCQUFxQ2Q7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCRixlQXFCRTtBQUFRLGlCQUFTLEVBQUVVLE9BQU8sQ0FBQ0ssTUFBM0I7QUFBQSwrQkFDRSw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQ0Q7O0dBcER1QmxCO1VBa0JORDs7O0tBbEJNQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtcclxuICBBcHBCYXIsXHJcbiAgVG9vbGJhcixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIENvbnRhaW5lcixcclxuICBMaW5rLFxyXG4gIGNyZWF0ZVRoZW1lLFxyXG4gIFRoZW1lUHJvdmlkZXIsXHJcbiAgQ3NzQmFzZWxpbmUsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSBcIi4uL3V0aWxzL3N0eWxlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XHJcbiAgICB0eXBvZ3JhcGh5OiB7XHJcbiAgICAgIGgxOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFwiMS42cmVtXCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICAgIG1hcmdpbjogXCIxcmVtIDBcIixcclxuICAgICAgfSxcclxuICAgICAgaDI6IHtcclxuICAgICAgICBmb250U2l6ZTogXCIxLjRyZW1cIixcclxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgICAgbWFyZ2luOiBcIjFyZW0gMFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHBhbGV0dGU6IHtcclxuICAgICAgdHlwZTogJ2xpZ2h0J1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPnt0aXRsZSA/IGAke3RpdGxlfSAtIE5leHQgQW1hem9uc2AgOiBcIk5leHQgQW1hem9uc1wifTwvdGl0bGU+XHJcbiAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufT48L21ldGE+fVxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZiYXJ9PlxyXG4gICAgICAgICAgPFRvb2xiYXI+XHJcbiAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmJyYW5kfT5hbWF6b25zPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3Jvd30+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvY2FydFwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPExpbms+Q2FydDwvTGluaz5cclxuICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2xvZ2luXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TGluaz5Mb2dpbjwvTGluaz5cclxuICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT57Y2hpbGRyZW59PC9Db250YWluZXI+XHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5PkFsbCByaWdodHMgcmVzZXJ2ZWQuIE5leHQgQW1hem9uYS48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZCIsIk5leHRMaW5rIiwiQXBwQmFyIiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJDb250YWluZXIiLCJMaW5rIiwiY3JlYXRlVGhlbWUiLCJUaGVtZVByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJ1c2VTdHlsZXMiLCJMYXlvdXQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2hpbGRyZW4iLCJ0aGVtZSIsInR5cG9ncmFwaHkiLCJoMSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbiIsImgyIiwicGFsZXR0ZSIsInR5cGUiLCJjbGFzc2VzIiwibmF2YmFyIiwiYnJhbmQiLCJncm93IiwibWFpbiIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=