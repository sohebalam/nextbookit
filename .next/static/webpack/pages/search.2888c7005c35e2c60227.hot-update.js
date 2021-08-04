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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("2"),
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
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
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

_s(Search, "Ky8AJHGpNM4Wu5xIwX0zG80FP20=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZVN0YXRlIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImd1ZXN0cyIsInNldEd1ZXN0cyIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsInB1c2giLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIm51bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBVUE7O0FBSUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNhQywrQ0FBUSxDQUFDLEVBQUQsQ0FEckI7QUFBQSxNQUNaQyxRQURZO0FBQUEsTUFDRkMsV0FERTs7QUFBQSxtQkFFU0YsK0NBQVEsQ0FBQyxHQUFELENBRmpCO0FBQUEsTUFFWkcsTUFGWTtBQUFBLE1BRUpDLFNBRkk7O0FBQUEsbUJBR2FKLCtDQUFRLENBQUMsRUFBRCxDQUhyQjtBQUFBLE1BR1pLLFFBSFk7QUFBQSxNQUdGQyxXQUhFOztBQUtuQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzNCQSxLQUFDLENBQUNDLGNBQUY7O0FBRUEsUUFBSVYsUUFBUSxDQUFDVyxJQUFULEVBQUosRUFBcUI7QUFDbkIsVUFBSSxDQUFDVCxNQUFELElBQVcsQ0FBQ0UsUUFBaEIsRUFBMEI7QUFDeEI7QUFDRDs7QUFDREUsWUFBTSxDQUFDTSxJQUFQLHNCQUNnQlosUUFEaEIscUJBQ21DRSxNQURuQyx1QkFDc0RFLFFBRHREO0FBR0QsS0FQRCxNQU9PO0FBQ0xFLFlBQU0sQ0FBQ00sSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUNGLEdBYkQ7O0FBZUEsc0JBQ0UsOERBQUMsd0RBQUQ7QUFBQSwyQkFDRSw4REFBQyxtREFBRDtBQUFNLGVBQVMsTUFBZjtBQUFBLDZCQUNFLDhEQUFDLHdEQUFEO0FBQVcsaUJBQVMsRUFBQyxNQUFyQjtBQUE0QixnQkFBUSxFQUFDLElBQXJDO0FBQUEsK0JBQ0U7QUFBTSxtQkFBUyxFQUFDLFdBQWhCO0FBQTRCLGtCQUFRLEVBQUVKLGFBQXRDO0FBQUEsaUNBQ0UsOERBQUMsbURBQUQ7QUFBTSxxQkFBUyxNQUFmO0FBQWdCLG1CQUFPLEVBQUUsQ0FBekI7QUFBQSxvQ0FDRSw4REFBQyxtREFBRDtBQUFNLGtCQUFJLE1BQVY7QUFBVyxnQkFBRSxFQUFFLEVBQWY7QUFBQSxzQ0FDRTtBQUFJLHlCQUFTLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFLDhEQUFDLHdEQUFEO0FBQUEsd0NBQ0UsOERBQUMsd0RBQUQ7QUFBVyx5QkFBTyxFQUFDLGdCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFLDhEQUFDLHdEQUFEO0FBQ0Usc0JBQUksRUFBQyxNQURQO0FBRUUsMkJBQVMsRUFBQyxjQUZaO0FBR0Usb0JBQUUsRUFBQyxnQkFITDtBQUlFLDZCQUFXLEVBQUMsVUFKZDtBQUtFLHVCQUFLLEVBQUVSLFFBTFQ7QUFNRSwwQkFBUSxFQUFFLGtCQUFDUyxDQUFEO0FBQUEsMkJBQU9SLFdBQVcsQ0FBQ1EsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQTtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQWVFLDhEQUFDLG1EQUFEO0FBQU0sa0JBQUksTUFBVjtBQUFXLGdCQUFFLEVBQUUsRUFBZjtBQUFBLHFDQUNFLDhEQUFDLHdEQUFEO0FBQUEsd0NBQ0UsOERBQUMseURBQUQ7QUFBWSx5QkFBTyxFQUFDLGFBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUUsOERBQUMscURBQUQ7QUFDRSwyQkFBUyxFQUFDLGNBRFo7QUFFRSxvQkFBRSxFQUFDLGFBRkw7QUFHRSx1QkFBSyxFQUFFWixNQUhUO0FBSUUsMEJBQVEsRUFBRSxrQkFBQ08sQ0FBRDtBQUFBLDJCQUFPTixTQUFTLENBQUNNLENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUFWLENBQWhCO0FBQUEsbUJBSlo7QUFBQSw0QkFNRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CQyxHQUFuQixDQUF1QixVQUFDQyxHQUFEO0FBQUEsd0NBQ3RCO0FBQWtCLDJCQUFLLEVBQUVBLEdBQXpCO0FBQUEsZ0NBQ0dBO0FBREgsdUJBQWFBLEdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFEc0I7QUFBQSxtQkFBdkI7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZkYsZUFnQ0UsOERBQUMsbURBQUQ7QUFBTSxrQkFBSSxNQUFWO0FBQVcsZ0JBQUUsRUFBRSxFQUFmO0FBQUEscUNBQ0UsOERBQUMsd0RBQUQ7QUFBQSx3Q0FDRSw4REFBQyx5REFBRDtBQUFZLHlCQUFPLEVBQUMsaUJBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUUsOERBQUMscURBQUQ7QUFDRSwyQkFBUyxFQUFDLGNBRFo7QUFFRSxvQkFBRSxFQUFDLGlCQUZMO0FBR0UsdUJBQUssRUFBRVosUUFIVDtBQUlFLDBCQUFRLEVBQUUsa0JBQUNLLENBQUQ7QUFBQSwyQkFBT0osV0FBVyxDQUFDSSxDQUFDLENBQUNJLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBLG1CQUpaO0FBQUEsNEJBTUcsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixPQUFuQixFQUE0QkMsR0FBNUIsQ0FBZ0MsVUFBQ1gsUUFBRDtBQUFBLHdDQUMvQjtBQUF1QiwyQkFBSyxFQUFFQSxRQUE5QjtBQUFBLGdDQUNHQTtBQURILHVCQUFhQSxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRCtCO0FBQUEsbUJBQWhDO0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWhDRixlQWlERSw4REFBQyxtREFBRDtBQUFNLGtCQUFJLE1BQVY7QUFBVyxnQkFBRSxFQUFFLEVBQWY7QUFBQSxxQ0FDRSw4REFBQyxxREFBRDtBQUFRLG9CQUFJLEVBQUMsUUFBYjtBQUFzQix5QkFBUyxFQUFDLG9CQUFoQztBQUFxRCx5QkFBUyxNQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlFRCxDQXZGRDs7R0FBTU4sTTtVQUtXUyxrRDs7O0tBTFhULE07O0FBa0dOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC4yODg4YzcwMDVjMzVlMmM2MDIyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ29udGFpbmVyLFxyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1Hcm91cCxcclxuICBGb3JtTGFiZWwsXHJcbiAgR3JpZCxcclxuICBTZWxlY3QsXHJcbiAgVGV4dEZpZWxkLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCB7IElucHV0TGFiZWwgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCJcclxuaW1wb3J0IHsgZ2V0Um9vbXMgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9yb29tQWN0aW9uc1wiXHJcblxyXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IFtndWVzdHMsIHNldEd1ZXN0c10gPSB1c2VTdGF0ZShcIjJcIilcclxuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgaWYgKGxvY2F0aW9uLnRyaW0oKSkge1xyXG4gICAgICBpZiAoIWd1ZXN0cyB8fCAhY2F0ZWdvcnkpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICByb3V0ZXIucHVzaChcclxuICAgICAgICBgLz9sb2NhdGlvbj0ke2xvY2F0aW9ufSZndWVzdHM9JHtndWVzdHN9JmNhdGVnb3J5PSR7Y2F0ZWdvcnl9YFxyXG4gICAgICApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJ4c1wiPlxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic2hhZG93LWxnXCIgb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTNcIj5TZWFyY2ggUm9vbXM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwibG9jYXRpb25fZmllbGRcIj5Mb2NhdGlvbjwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJsb2NhdGlvbl9maWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJuZXcgeW9ya1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9jYXRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJndWVzdF9maWVsZFwiPk5vLiBvZiBHdWVzdHM8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZ3Vlc3RfZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtndWVzdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRHdWVzdHMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge1sxLCAyLCAzLCA0LCA1LCA2XS5tYXAoKG51bSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e251bX0gdmFsdWU9e251bX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtudW19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cInJvb21fdHlwZV9maWVsZFwiPlJvb20gVHlwZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJyb29tX3R5cGVfZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtbXCJLaW5nXCIsIFwiU2luZ2xlXCIsIFwiVHdpbnNcIl0ubWFwKChjYXRlZ29yeSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2NhdGVnb3J5fSB2YWx1ZT17Y2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBweS0yXCIgZnVsbFdpZHRoPlxyXG4gICAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhcclxuICAoc3RvcmUpID0+XHJcbiAgICBhc3luYyAoeyByZXEsIHF1ZXJ5IH0pID0+IHtcclxuICAgICAgYXdhaXQgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgZ2V0Um9vbXMocmVxLCBxdWVyeS5wYWdlLCBxdWVyeS5sb2NhdGlvbiwgcXVlcnkuZ3Vlc3RzLCBxdWVyeS5jYXRlZ29yeSlcclxuICAgICAgKVxyXG4gICAgfVxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==