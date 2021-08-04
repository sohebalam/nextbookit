self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
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
      if (!guests || !category) {
        return;
      }

      router.push("/?location=".concat(location, "&guests=").concat(guests, "&category=").concat(category));
    } else {
      router.push("/");
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Container, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      container: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Container, {
        component: "main",
        maxWidth: "xs",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          className: "shadow-lg",
          onSubmit: submitHandler,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
            container: true,
            spacing: 2,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
              item: true,
              xs: 12,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: "mb-3",
                children: "Search Rooms"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {
                  htmlFor: "location_field",
                  children: "Location"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TextField, {
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
                  lineNumber: 49,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {
                  htmlFor: "guest_field",
                  children: "No. of Guests"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {
                  className: "form-control",
                  id: "guest_field",
                  value: guests,
                  onChange: function onChange(e) {
                    return setGuests(e.target.value);
                  },
                  children: [1, 2, 3, 4, 5, 6].map(function (num) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MenuItem, {
                      value: num,
                      children: num
                    }, num, false, {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 23
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {
                  htmlFor: "room_type_field",
                  children: "Room Type"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {
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
                      lineNumber: 86,
                      columnNumber: 23
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
                type: "submit",
                className: "btn btn-block py-2",
                fullWidth: true,
                children: "Search"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, _this);
};

_s(Search, "tlSSaa5zH+cr7RPJNd9PcoXZ0Hg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = Search;
var __N_SSP = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZVN0YXRlIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImd1ZXN0cyIsInNldEd1ZXN0cyIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsInB1c2giLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIm51bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBVUE7O0FBSUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNhQywrQ0FBUSxDQUFDLEVBQUQsQ0FEckI7QUFBQSxNQUNaQyxRQURZO0FBQUEsTUFDRkMsV0FERTs7QUFBQSxtQkFFU0YsK0NBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFWkcsTUFGWTtBQUFBLE1BRUpDLFNBRkk7O0FBQUEsbUJBR2FKLCtDQUFRLENBQUMsRUFBRCxDQUhyQjtBQUFBLE1BR1pLLFFBSFk7QUFBQSxNQUdGQyxXQUhFOztBQUtuQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzNCQSxLQUFDLENBQUNDLGNBQUY7O0FBRUEsUUFBSVYsUUFBUSxDQUFDVyxJQUFULEVBQUosRUFBcUI7QUFDbkIsVUFBSSxDQUFDVCxNQUFELElBQVcsQ0FBQ0UsUUFBaEIsRUFBMEI7QUFDeEI7QUFDRDs7QUFDREUsWUFBTSxDQUFDTSxJQUFQLHNCQUNnQlosUUFEaEIscUJBQ21DRSxNQURuQyx1QkFDc0RFLFFBRHREO0FBR0QsS0FQRCxNQU9PO0FBQ0xFLFlBQU0sQ0FBQ00sSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUNGLEdBYkQ7O0FB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QTRCQyxHQUE1QixDQUFnQyxVQUFDWCxRQUFEO0FBQUEsd0NBQy9CO0FBQXVCLDJCQUFLLEVBQUVBLFFBQTlCO0FBQUEsZ0NBQ0dBO0FBREgsdUJBQWFBLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFEK0I7QUFBQSxtQkFBaEM7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaENGLGVBaURFLDhEQUFDLG1EQUFEO0FBQU0sa0JBQUksTUFBVjtBQUFXLGdCQUFFLEVBQUUsRUFBZjtBQUFBLHFDQUNFLDhEQUFDLHFEQUFEO0FBQVEsb0JBQUksRUFBQyxRQUFiO0FBQXNCLHlCQUFTLEVBQUMsb0JBQWhDO0FBQXFELHlCQUFTLE1BQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUVELENBdkZEOztHQUFNTixNO1VBS1dTLGtEOzs7S0FMWFQsTTs7QUFrR04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjJiYzcyYjgwZTkzNGM2ZWZiOGIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUdyb3VwLFxyXG4gIEZvcm1MYWJlbCxcclxuICBHcmlkLFxyXG4gIFNlbGVjdCxcclxuICBUZXh0RmllbGQsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IHsgSW5wdXRMYWJlbCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIlxyXG5pbXBvcnQgeyBnZXRSb29tcyB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL3Jvb21BY3Rpb25zXCJcclxuXHJcbmNvbnN0IFNlYXJjaCA9ICgpID0+IHtcclxuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2d1ZXN0cywgc2V0R3Vlc3RzXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIGlmIChsb2NhdGlvbi50cmltKCkpIHtcclxuICAgICAgaWYgKCFndWVzdHMgfHwgIWNhdGVnb3J5KSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgcm91dGVyLnB1c2goXHJcbiAgICAgICAgYC8/bG9jYXRpb249JHtsb2NhdGlvbn0mZ3Vlc3RzPSR7Z3Vlc3RzfSZjYXRlZ29yeT0ke2NhdGVnb3J5fWBcclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNoYWRvdy1sZ1wiIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0zXCI+U2VhcmNoIFJvb21zPC9oMj5cclxuICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cImxvY2F0aW9uX2ZpZWxkXCI+TG9jYXRpb248L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibG9jYXRpb25fZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibmV3IHlvcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExvY2F0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwiZ3Vlc3RfZmllbGRcIj5Oby4gb2YgR3Vlc3RzPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImd1ZXN0X2ZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z3Vlc3RzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0R3Vlc3RzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtbMSwgMiwgMywgNCwgNSwgNl0ubWFwKChudW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e251bX0gdmFsdWU9e251bX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtudW19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwicm9vbV90eXBlX2ZpZWxkXCI+Um9vbSBUeXBlPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInJvb21fdHlwZV9maWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge1tcIktpbmdcIiwgXCJTaW5nbGVcIiwgXCJUd2luc1wiXS5tYXAoKGNhdGVnb3J5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y2F0ZWdvcnl9IHZhbHVlPXtjYXRlZ29yeX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIHB5LTJcIiBmdWxsV2lkdGg+XHJcbiAgICAgICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKFxyXG4gIChzdG9yZSkgPT5cclxuICAgIGFzeW5jICh7IHJlcSwgcXVlcnkgfSkgPT4ge1xyXG4gICAgICBhd2FpdCBzdG9yZS5kaXNwYXRjaChcclxuICAgICAgICBnZXRSb29tcyhyZXEsIHF1ZXJ5LnBhZ2UsIHF1ZXJ5LmxvY2F0aW9uLCBxdWVyeS5ndWVzdHMsIHF1ZXJ5LmNhdGVnb3J5KVxyXG4gICAgICApXHJcbiAgICB9XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFxyXG4iXSwic291cmNlUm9vdCI6IiJ9