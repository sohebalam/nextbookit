self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layout/RoomItem.js":
/*!***************************************!*\
  !*** ./components/layout/RoomItem.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Projects\\nextbookit\\components\\layout\\RoomItem.js",
    _this = undefined;





var RoomItem = function RoomItem(_ref) {
  var room = _ref.room;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "col-sm-12 col-md-6 col-lg-3 my-3",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card p-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: "card-img-top mx-auto",
        src: room.images[0].url ? room.images[0].url : "https://a0.muscache.com/im/pictures/a8f6a489-d236-4d2d-a57b-a95d928970af.jpg?im_w=960",
        height: 170,
        width: 200
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card-body d-flex flex-column",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
          className: "card-title",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/room/".concat(room._id),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: room.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "ratings mt-auto mb-3",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "card-text",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
              children: ["$", room.pricePerNight]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, _this), " / night"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "rating-outer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "rating-inner",
              style: {
                width: "".concat(room.ratings / 5 * 100, "%")
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            id: "no_of_reviews",
            children: ["(", room.numOfReviews, " Reviews)"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: "btn btn-block view-btn",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/room/".concat(room._id),
            children: "View Details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = RoomItem;
/* harmony default export */ __webpack_exports__["default"] = (RoomItem);

var _c;

$RefreshReg$(_c, "RoomItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvUm9vbUl0ZW0uanMiXSwibmFtZXMiOlsiUm9vbUl0ZW0iLCJyb29tIiwiaW1hZ2VzIiwidXJsIiwiX2lkIiwibmFtZSIsInByaWNlUGVyTmlnaHQiLCJ3aWR0aCIsInJhdGluZ3MiLCJudW1PZlJldmlld3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzdCLHNCQUNFO0FBQUssYUFBUyxFQUFDLGtDQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDhCQUNFLDhEQUFDLG1EQUFEO0FBQ0UsaUJBQVMsRUFBQyxzQkFEWjtBQUVFLFdBQUcsRUFDREEsSUFBSSxDQUFDQyxNQUFMLENBQVksQ0FBWixFQUFlQyxHQUFmLEdBQ0lGLElBQUksQ0FBQ0MsTUFBTCxDQUFZLENBQVosRUFBZUMsR0FEbkIsR0FFSSx1RkFMUjtBQU9FLGNBQU0sRUFBRSxHQVBWO0FBUUUsYUFBSyxFQUFFO0FBUlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBV0U7QUFBSyxpQkFBUyxFQUFDLDhCQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLFlBQWQ7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLGtCQUFXRixJQUFJLENBQUNHLEdBQWhCLENBQVY7QUFBQSxtQ0FDRTtBQUFBLHdCQUFJSCxJQUFJLENBQUNJO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFBSyxtQkFBUyxFQUFDLHNCQUFmO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLFdBQWI7QUFBQSxvQ0FDRTtBQUFBLDhCQUFLSixJQUFJLENBQUNLLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQUsscUJBQVMsRUFBQyxjQUFmO0FBQUEsbUNBQ0U7QUFDRSx1QkFBUyxFQUFDLGNBRFo7QUFFRSxtQkFBSyxFQUFFO0FBQUVDLHFCQUFLLFlBQU1OLElBQUksQ0FBQ08sT0FBTCxHQUFlLENBQWhCLEdBQXFCLEdBQTFCO0FBQVA7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixlQVdFO0FBQU0sY0FBRSxFQUFDLGVBQVQ7QUFBQSw0QkFBMkJQLElBQUksQ0FBQ1EsWUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixlQXFCRTtBQUFRLG1CQUFTLEVBQUMsd0JBQWxCO0FBQUEsaUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxrQkFBV1IsSUFBSSxDQUFDRyxHQUFoQixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUNELENBMUNEOztLQUFNSixRO0FBNENOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjcyNWMzY2VmMWQxOGY3NmY4YjJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5jb25zdCBSb29tSXRlbSA9ICh7IHJvb20gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctMyBteS0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBwLTJcIj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcCBteC1hdXRvXCJcclxuICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgIHJvb20uaW1hZ2VzWzBdLnVybFxyXG4gICAgICAgICAgICAgID8gcm9vbS5pbWFnZXNbMF0udXJsXHJcbiAgICAgICAgICAgICAgOiBcImh0dHBzOi8vYTAubXVzY2FjaGUuY29tL2ltL3BpY3R1cmVzL2E4ZjZhNDg5LWQyMzYtNGQyZC1hNTdiLWE5NWQ5Mjg5NzBhZi5qcGc/aW1fdz05NjBcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaGVpZ2h0PXsxNzB9XHJcbiAgICAgICAgICB3aWR0aD17MjAwfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Jvb20vJHtyb29tLl9pZH1gfT5cclxuICAgICAgICAgICAgICA8YT57cm9vbS5uYW1lfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9oNT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MgbXQtYXV0byBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgICAgIDxiPiR7cm9vbS5wcmljZVBlck5pZ2h0fTwvYj4gLyBuaWdodFxyXG4gICAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1vdXRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJhdGluZy1pbm5lclwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7KHJvb20ucmF0aW5ncyAvIDUpICogMTAwfSVgIH19XHJcbiAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJub19vZl9yZXZpZXdzXCI+KHtyb29tLm51bU9mUmV2aWV3c30gUmV2aWV3cyk8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2sgdmlldy1idG5cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yb29tLyR7cm9vbS5faWR9YH0+VmlldyBEZXRhaWxzPC9MaW5rPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb29tSXRlbVxyXG4iXSwic291cmNlUm9vdCI6IiJ9