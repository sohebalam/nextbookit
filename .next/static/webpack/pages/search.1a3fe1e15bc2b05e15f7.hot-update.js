self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Projects\\nextbookit\\pages\\search.js",
    _this = undefined,
    _s = $RefreshSig$();





var Search = function Search() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      location = _useState[0],
      setLocation = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      guests = _useState2[0],
      setGuests = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      category = _useState3[0],
      setCategory = _useState3[1];

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  var submitHandler = function submitHandler(e) {
    e.preventDefault();

    if (location.trim()) {
      router.push("/?location=".concat(location, "&guests=").concat(guests, "&category=").concat(category));
    } else {
      router.push("/");
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      container: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
        item: true,
        xs: 10,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          className: "shadow-lg",
          onSubmit: submitHandler,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            className: "mb-3",
            children: "Search Rooms"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "form-group",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              htmlFor: "location_field",
              children: "Location"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              type: "text",
              className: "form-control",
              id: "location_field",
              placeholder: "new york",
              value: location,
              onChange: function onChange(e) {
                return setLocation(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "guest_field",
            children: "No. of Guests"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
            className: "form-control",
            id: "guest_field",
            value: guests,
            onChange: function onChange(e) {
              return setGuests(e.target.value);
            },
            children: [1, 2, 3, 4, 5, 6].map(function (num) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: num,
                children: num
              }, num, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            htmlFor: "room_type_field",
            children: "Room Type"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
            className: "form-control",
            id: "room_type_field",
            value: category,
            onChange: function onChange(e) {
              return setCategory(e.target.value);
            },
            children: ["King", "Single", "Twins"].map(function (category) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
                value: category,
                children: category
              }, category, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
            type: "submit",
            className: "btn btn-block py-2",
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(Search, "tlSSaa5zH+cr7RPJNd9PcoXZ0Hg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Search;
/* harmony default export */ __webpack_exports__["default"] = (Search);

var _c;

$RefreshReg$(_c, "Search");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZVN0YXRlIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImd1ZXN0cyIsInNldEd1ZXN0cyIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsInB1c2giLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIm51bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFDYUMsK0NBQVEsQ0FBQyxFQUFELENBRHJCO0FBQUEsTUFDWkMsUUFEWTtBQUFBLE1BQ0ZDLFdBREU7O0FBQUEsbUJBRVNGLCtDQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRVpHLE1BRlk7QUFBQSxNQUVKQyxTQUZJOztBQUFBLG1CQUdhSiwrQ0FBUSxDQUFDLEVBQUQsQ0FIckI7QUFBQSxNQUdaSyxRQUhZO0FBQUEsTUFHRkMsV0FIRTs7QUFLbkIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBTztBQUMzQkEsS0FBQyxDQUFDQyxjQUFGOztBQUVBLFFBQUlWLFFBQVEsQ0FBQ1csSUFBVCxFQUFKLEVBQXFCO0FBQ25CTCxZQUFNLENBQUNNLElBQVAsc0JBQ2dCWixRQURoQixxQkFDbUNFLE1BRG5DLHVCQUNzREUsUUFEdEQ7QUFHRCxLQUpELE1BSU87QUFDTEUsWUFBTSxDQUFDTSxJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0YsR0FWRDs7QUFZQSxzQkFDRSw4REFBQyx3REFBRDtBQUFBLDJCQUNFLDhEQUFDLG1EQUFEO0FBQU0sZUFBUyxNQUFmO0FBQUEsNkJBQ0UsOERBQUMsbURBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFBLCtCQUNFO0FBQU0sbUJBQVMsRUFBQyxXQUFoQjtBQUE0QixrQkFBUSxFQUFFSixhQUF0QztBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxvQ0FDRTtBQUFPLHFCQUFPLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUNFLGtCQUFJLEVBQUMsTUFEUDtBQUVFLHVCQUFTLEVBQUMsY0FGWjtBQUdFLGdCQUFFLEVBQUMsZ0JBSEw7QUFJRSx5QkFBVyxFQUFDLFVBSmQ7QUFLRSxtQkFBSyxFQUFFUixRQUxUO0FBTUUsc0JBQVEsRUFBRSxrQkFBQ1MsQ0FBRDtBQUFBLHVCQUFPUixXQUFXLENBQUNRLENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUE7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQWFFO0FBQU8sbUJBQU8sRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWJGLGVBY0U7QUFDRSxxQkFBUyxFQUFDLGNBRFo7QUFFRSxjQUFFLEVBQUMsYUFGTDtBQUdFLGlCQUFLLEVBQUVaLE1BSFQ7QUFJRSxvQkFBUSxFQUFFLGtCQUFDTyxDQUFEO0FBQUEscUJBQU9OLFNBQVMsQ0FBQ00sQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFBQSxhQUpaO0FBQUEsc0JBTUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQkMsR0FBbkIsQ0FBdUIsVUFBQ0MsR0FBRDtBQUFBLGtDQUN0QjtBQUFrQixxQkFBSyxFQUFFQSxHQUF6QjtBQUFBLDBCQUNHQTtBQURILGlCQUFhQSxHQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRHNCO0FBQUEsYUFBdkI7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWRGLGVBMkJFO0FBQU8sbUJBQU8sRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkEzQkYsZUE0QkU7QUFDRSxxQkFBUyxFQUFDLGNBRFo7QUFFRSxjQUFFLEVBQUMsaUJBRkw7QUFHRSxpQkFBSyxFQUFFWixRQUhUO0FBSUUsb0JBQVEsRUFBRSxrQkFBQ0ssQ0FBRDtBQUFBLHFCQUFPSixXQUFXLENBQUNJLENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUEsYUFKWjtBQUFBLHNCQU1HLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsT0FBbkIsRUFBNEJDLEdBQTVCLENBQWdDLFVBQUNYLFFBQUQ7QUFBQSxrQ0FDL0I7QUFBdUIscUJBQUssRUFBRUEsUUFBOUI7QUFBQSwwQkFDR0E7QUFESCxpQkFBYUEsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUQrQjtBQUFBLGFBQWhDO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE1QkYsZUF5Q0UsOERBQUMscURBQUQ7QUFBUSxnQkFBSSxFQUFDLFFBQWI7QUFBc0IscUJBQVMsRUFBQyxvQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBekNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcURELENBeEVEOztHQUFNTixNO1VBS1dTLGtEOzs7S0FMWFQsTTtBQTBFTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2guMWEzZmUxZTE1YmMyYjA1ZTE1ZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuXHJcbmNvbnN0IFNlYXJjaCA9ICgpID0+IHtcclxuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2d1ZXN0cywgc2V0R3Vlc3RzXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIGlmIChsb2NhdGlvbi50cmltKCkpIHtcclxuICAgICAgcm91dGVyLnB1c2goXHJcbiAgICAgICAgYC8/bG9jYXRpb249JHtsb2NhdGlvbn0mZ3Vlc3RzPSR7Z3Vlc3RzfSZjYXRlZ29yeT0ke2NhdGVnb3J5fWBcclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNoYWRvdy1sZ1wiIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTNcIj5TZWFyY2ggUm9vbXM8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvY2F0aW9uX2ZpZWxkXCI+TG9jYXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIGlkPVwibG9jYXRpb25fZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJuZXcgeW9ya1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExvY2F0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJndWVzdF9maWVsZFwiPk5vLiBvZiBHdWVzdHM8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBpZD1cImd1ZXN0X2ZpZWxkXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Z3Vlc3RzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0R3Vlc3RzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtbMSwgMiwgMywgNCwgNSwgNl0ubWFwKChudW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtudW19IHZhbHVlPXtudW19PlxyXG4gICAgICAgICAgICAgICAgICB7bnVtfVxyXG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyb29tX3R5cGVfZmllbGRcIj5Sb29tIFR5cGU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBpZD1cInJvb21fdHlwZV9maWVsZFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge1tcIktpbmdcIiwgXCJTaW5nbGVcIiwgXCJUd2luc1wiXS5tYXAoKGNhdGVnb3J5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y2F0ZWdvcnl9IHZhbHVlPXtjYXRlZ29yeX0+XHJcbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2sgcHktMlwiPlxyXG4gICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=