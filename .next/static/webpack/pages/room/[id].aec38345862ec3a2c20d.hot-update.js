self["webpackHotUpdate_N_E"]("pages/room/[id]",{

/***/ "./pages/room/[id].js":
/*!****************************!*\
  !*** ./pages/room/[id].js ***!
  \****************************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _redux_actions_roomActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/roomActions */ "./redux/actions/roomActions.js");
/* harmony import */ var _components_room_RoomFeatures__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/room/RoomFeatures */ "./components/room/RoomFeatures.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Projects\\nextbookit\\pages\\room\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();













var RoomDetails = function RoomDetails() {
  _s();

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var roomDetails = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.roomDetails;
  });
  var error = roomDetails.error,
      room = roomDetails.room; // console.log(room)

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (error) {
      react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error(error);
      dispatch(_redux_actions_roomActions__WEBPACK_IMPORTED_MODULE_6__.clearErrors);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          children: [room.name, " - bookit"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
        container: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Box, {
          style: {
            display: "block"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
            children: [room.name, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          children: room.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
          container: true,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: room.images[0].url,
            className: "d-block w-100 property-details-image m-auto",
            alt: "Hotel",
            height: 1500,
            width: 2500
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
          item: true,
          style: {
            marginTop: "1rem"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Typography, {
            id: "no_of_reviews",
            children: ["Number of Reviews", "    ", room.numOfReviews ? room.numOfReviews : "   No reviews yet"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: room.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_room_RoomFeatures__WEBPACK_IMPORTED_MODULE_7__.default, {
              room: room
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-12 col-md-6 col-lg-4",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "booking-card shadow-lg p-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "price-per-night",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                  children: ["\xA3", room.pricePerNight]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 118,
                  columnNumber: 19
                }, _this), " / night"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "btn btn-block py-3 booking-btn",
                children: "Pay"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(RoomDetails, "HNrCbGASYnOaBNGq30LMUK0Eqd4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];
});

_c = RoomDetails;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (RoomDetails);

var _c;

$RefreshReg$(_c, "RoomDetails");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm9vbS9baWRdLmpzIl0sIm5hbWVzIjpbIlJvb21EZXRhaWxzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvb21EZXRhaWxzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImVycm9yIiwicm9vbSIsInVzZUVmZmVjdCIsInRvYXN0IiwiY2xlYXJFcnJvcnMiLCJuYW1lIiwiZGlzcGxheSIsImFkZHJlc3MiLCJpbWFnZXMiLCJ1cmwiLCJtYXJnaW5Ub3AiLCJudW1PZlJldmlld3MiLCJkZXNjcmlwdGlvbiIsInByaWNlUGVyTmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBRUEsTUFBTUMsV0FBVyxHQUFHQyx3REFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLFdBQWpCO0FBQUEsR0FBRCxDQUEvQjtBQUh3QixNQUloQkcsS0FKZ0IsR0FJQUgsV0FKQSxDQUloQkcsS0FKZ0I7QUFBQSxNQUlUQyxJQUpTLEdBSUFKLFdBSkEsQ0FJVEksSUFKUyxFQU14Qjs7QUFFQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUYsS0FBSixFQUFXO0FBQ1RHLDZEQUFBLENBQVlILEtBQVo7QUFDQUwsY0FBUSxDQUFDUyxtRUFBRCxDQUFSO0FBQ0Q7QUFDRixHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0Esc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyx3REFBRDtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQUEsK0JBQ0U7QUFBQSxxQkFBUUgsSUFBSSxDQUFDSSxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLDhEQUFDLG1EQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFBLGdDQUNFLDhEQUFDLGtEQUFEO0FBQUssZUFBSyxFQUFFO0FBQUVDLG1CQUFPLEVBQUU7QUFBWCxXQUFaO0FBQUEsaUNBQ0U7QUFBQSx1QkFBS0wsSUFBSSxDQUFDSSxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBS0U7QUFBQSxvQkFBS0osSUFBSSxDQUFDTTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFNRSw4REFBQyxtREFBRDtBQUFNLG1CQUFTLE1BQWY7QUFBQSxpQ0FDRSw4REFBQyxtREFBRDtBQUNFLGVBQUcsRUFBRU4sSUFBSSxDQUFDTyxNQUFMLENBQVksQ0FBWixFQUFlQyxHQUR0QjtBQUVFLHFCQUFTLEVBQUMsNkNBRlo7QUFHRSxlQUFHLEVBQUMsT0FITjtBQUlFLGtCQUFNLEVBQUUsSUFKVjtBQUtFLGlCQUFLLEVBQUU7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQWVFLDhEQUFDLG1EQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsZUFBSyxFQUFFO0FBQUVDLHFCQUFTLEVBQUU7QUFBYixXQUFsQjtBQUFBLGlDQUNFLDhEQUFDLHlEQUFEO0FBQVksY0FBRSxFQUFDLGVBQWY7QUFBQSw0Q0FDb0IsTUFEcEIsRUFFR1QsSUFBSSxDQUFDVSxZQUFMLEdBQW9CVixJQUFJLENBQUNVLFlBQXpCLEdBQXdDLG1CQUYzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZGLGVBc0NFO0FBQUEsa0NBQ0U7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsd0JBQUlWLElBQUksQ0FBQ1c7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBSUUsOERBQUMsa0VBQUQ7QUFBYyxrQkFBSSxFQUFFWDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQW9DRTtBQUFLLHFCQUFTLEVBQUMsMEJBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsNEJBQWY7QUFBQSxzQ0FDRTtBQUFHLHlCQUFTLEVBQUMsaUJBQWI7QUFBQSx3Q0FDRTtBQUFBLHFDQUFLQSxJQUFJLENBQUNZLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUtFO0FBQVEseUJBQVMsRUFBQyxnQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXFIRCxDQXBJRDs7R0FBTW5CLFc7VUFDYUUsb0QsRUFFR0Usb0Q7OztLQUhoQkosVzs7QUE0SU4sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9baWRdLmFlYzM4MzQ1ODYyZWMzYTJjMjBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5cbmltcG9ydCB7IGdldFJvb21EZXRhaWxzIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvcm9vbUFjdGlvbnNcIlxuXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uLy4uL3JlZHV4L3N0b3JlXCJcblxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxuaW1wb3J0IHsgY2xlYXJFcnJvcnMgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9yb29tQWN0aW9uc1wiXG5cbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXG5pbXBvcnQgUm9vbUZlYXR1cmVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Jvb20vUm9vbUZlYXR1cmVzXCJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXG5cbmNvbnN0IFJvb21EZXRhaWxzID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcblxuICBjb25zdCByb29tRGV0YWlscyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucm9vbURldGFpbHMpXG4gIGNvbnN0IHsgZXJyb3IsIHJvb20gfSA9IHJvb21EZXRhaWxzXG5cbiAgLy8gY29uc29sZS5sb2cocm9vbSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdG9hc3QuZXJyb3IoZXJyb3IpXG4gICAgICBkaXNwYXRjaChjbGVhckVycm9ycylcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57cm9vbS5uYW1lfSAtIGJvb2tpdDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgIDxCb3ggc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19PlxuICAgICAgICAgICAgPGgyPntyb29tLm5hbWV9IDwvaDI+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGg2Pntyb29tLmFkZHJlc3N9PC9oNj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtyb29tLmltYWdlc1swXS51cmx9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDAgcHJvcGVydHktZGV0YWlscy1pbWFnZSBtLWF1dG9cIlxuICAgICAgICAgICAgICBhbHQ9XCJIb3RlbFwiXG4gICAgICAgICAgICAgIGhlaWdodD17MTUwMH1cbiAgICAgICAgICAgICAgd2lkdGg9ezI1MDB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm5vX29mX3Jldmlld3NcIj5cbiAgICAgICAgICAgICAgTnVtYmVyIG9mIFJldmlld3N7XCIgICAgXCJ9XG4gICAgICAgICAgICAgIHtyb29tLm51bU9mUmV2aWV3cyA/IHJvb20ubnVtT2ZSZXZpZXdzIDogXCIgICBObyByZXZpZXdzIHlldFwifVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICB7LyogPEdyaWQgaXRlbSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgPENhcm91c2VsIGhvdmVyPVwicGF1c2VcIj5cbiAgICAgICAgICAgICAge3Jvb20uaW1hZ2VzICYmXG4gICAgICAgICAgICAgICAgcm9vbS5pbWFnZXMubWFwKChpbWFnZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsLkl0ZW0ga2V5PXtpbWFnZS5wdWJsaWNfaWR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjQ0MHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIG0tYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cm9vbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgIDwvR3JpZD4gKi99XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMz5EZXNjcmlwdGlvbjwvaDM+XG4gICAgICAgICAgICAgIDxwPntyb29tLmRlc2NyaXB0aW9ufTwvcD5cblxuICAgICAgICAgICAgICA8Um9vbUZlYXR1cmVzIHJvb209e3Jvb219IC8+XG4gICAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi00XCI+RmVhdHVyZXM6PC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb20tZmVhdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtY29nIGZhLWZ3IGZhLXVzZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgICAgICA8cD57cm9vbS5ndWVzdENhcGFjaXR5fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbS1mZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb2cgZmEtZncgZmEtYmVkXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPHA+e3Jvb20ubnVtT2ZCZWRzfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbS1mZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jb2cgZmEtZncgZmEtYmF0aFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDxwPjIgQmF0aHM8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb20tZmVhdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtY29nIGZhLWZ3IGZhLWN1dGxlcnlcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICAgIDxwPktpdGNoZW48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctY2FyZCBzaGFkb3ctbGcgcC00XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2UtcGVyLW5pZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8Yj7Co3tyb29tLnByaWNlUGVyTmlnaHR9PC9iPiAvIG5pZ2h0XG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIHB5LTMgYm9va2luZy1idG5cIj5QYXk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdzIHctNzVcIj5cbiAgICAgICAgICAgIDxoMz5SZXZpZXdzOjwvaDM+XG4gICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNhcmQgbXktM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1vdXRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWlubmVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXZpZXdfdXNlclwiPmJ5IEpvaG48L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJldmlld19jb21tZW50XCI+R29vZCBRdWFsaXR5PC9wPlxuXG4gICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNhcmQgbXktM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1vdXRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWlubmVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXZpZXdfdXNlclwiPmJ5IEpvaG48L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJldmlld19jb21tZW50XCI+R29vZCBRdWFsaXR5PC9wPlxuXG4gICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoXG4gIChzdG9yZSkgPT5cbiAgICBhc3luYyAoeyByZXEsIHF1ZXJ5IH0pID0+IHtcbiAgICAgIGF3YWl0IHN0b3JlLmRpc3BhdGNoKGdldFJvb21EZXRhaWxzKHJlcSwgcXVlcnkuaWQpKVxuICAgIH1cbilcbmV4cG9ydCBkZWZhdWx0IFJvb21EZXRhaWxzXG4iXSwic291cmNlUm9vdCI6IiJ9