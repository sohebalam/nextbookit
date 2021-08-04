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
          lineNumber: 38,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.Grid, {
        container: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: [room.name, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 33
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
          children: room.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
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
            lineNumber: 44,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
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
            lineNumber: 53,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: room.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_room_RoomFeatures__WEBPACK_IMPORTED_MODULE_7__.default, {
              room: room
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
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
                  lineNumber: 114,
                  columnNumber: 19
                }, _this), " / night"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "btn btn-block py-3 booking-btn",
                children: "Pay"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm9vbS9baWRdLmpzIl0sIm5hbWVzIjpbIlJvb21EZXRhaWxzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvb21EZXRhaWxzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImVycm9yIiwicm9vbSIsInVzZUVmZmVjdCIsInRvYXN0IiwiY2xlYXJFcnJvcnMiLCJuYW1lIiwiYWRkcmVzcyIsImltYWdlcyIsInVybCIsIm1hcmdpblRvcCIsIm51bU9mUmV2aWV3cyIsImRlc2NyaXB0aW9uIiwicHJpY2VQZXJOaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBRUEsTUFBTUMsV0FBVyxHQUFHQyx3REFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLFdBQWpCO0FBQUEsR0FBRCxDQUEvQjtBQUh3QixNQUloQkcsS0FKZ0IsR0FJQUgsV0FKQSxDQUloQkcsS0FKZ0I7QUFBQSxNQUlUQyxJQUpTLEdBSUFKLFdBSkEsQ0FJVEksSUFKUyxFQU14Qjs7QUFFQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUYsS0FBSixFQUFXO0FBQ1RHLDZEQUFBLENBQVlILEtBQVo7QUFDQUwsY0FBUSxDQUFDUyxtRUFBRCxDQUFSO0FBQ0Q7QUFDRixHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0Esc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyx3REFBRDtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQUEsK0JBQ0U7QUFBQSxxQkFBUUgsSUFBSSxDQUFDSSxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLDhEQUFDLG1EQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFBLGdDQUNFO0FBQUEscUJBQUtKLElBQUksQ0FBQ0ksSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsb0JBQ3dCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHhCLGVBRUU7QUFBQSxvQkFBS0osSUFBSSxDQUFDSztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSw4REFBQyxtREFBRDtBQUFNLG1CQUFTLE1BQWY7QUFBQSxpQ0FDRSw4REFBQyxtREFBRDtBQUNFLGVBQUcsRUFBRUwsSUFBSSxDQUFDTSxNQUFMLENBQVksQ0FBWixFQUFlQyxHQUR0QjtBQUVFLHFCQUFTLEVBQUMsNkNBRlo7QUFHRSxlQUFHLEVBQUMsT0FITjtBQUlFLGtCQUFNLEVBQUUsSUFKVjtBQUtFLGlCQUFLLEVBQUU7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQVlFLDhEQUFDLG1EQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsZUFBSyxFQUFFO0FBQUVDLHFCQUFTLEVBQUU7QUFBYixXQUFsQjtBQUFBLGlDQUNFLDhEQUFDLHlEQUFEO0FBQVksY0FBRSxFQUFDLGVBQWY7QUFBQSw0Q0FDb0IsTUFEcEIsRUFFR1IsSUFBSSxDQUFDUyxZQUFMLEdBQW9CVCxJQUFJLENBQUNTLFlBQXpCLEdBQXdDLG1CQUYzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBbUNFO0FBQUEsa0NBQ0U7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsd0JBQUlULElBQUksQ0FBQ1U7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBSUUsOERBQUMsa0VBQUQ7QUFBYyxrQkFBSSxFQUFFVjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQW9DRTtBQUFLLHFCQUFTLEVBQUMsMEJBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsNEJBQWY7QUFBQSxzQ0FDRTtBQUFHLHlCQUFTLEVBQUMsaUJBQWI7QUFBQSx3Q0FDRTtBQUFBLHFDQUFLQSxJQUFJLENBQUNXLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUtFO0FBQVEseUJBQVMsRUFBQyxnQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQWtIRCxDQWpJRDs7R0FBTWxCLFc7VUFDYUUsb0QsRUFFR0Usb0Q7OztLQUhoQkosVzs7QUF5SU4sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9baWRdLjQ5ZjhmMjVkOTgzMmM3YjJhNzQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5cbmltcG9ydCB7IGdldFJvb21EZXRhaWxzIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvcm9vbUFjdGlvbnNcIlxuXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uLy4uL3JlZHV4L3N0b3JlXCJcblxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxuaW1wb3J0IHsgY2xlYXJFcnJvcnMgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9yb29tQWN0aW9uc1wiXG5cbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXG5pbXBvcnQgUm9vbUZlYXR1cmVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Jvb20vUm9vbUZlYXR1cmVzXCJcblxuY29uc3QgUm9vbURldGFpbHMgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gIGNvbnN0IHJvb21EZXRhaWxzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5yb29tRGV0YWlscylcbiAgY29uc3QgeyBlcnJvciwgcm9vbSB9ID0gcm9vbURldGFpbHNcblxuICAvLyBjb25zb2xlLmxvZyhyb29tKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0b2FzdC5lcnJvcihlcnJvcilcbiAgICAgIGRpc3BhdGNoKGNsZWFyRXJyb3JzKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPntyb29tLm5hbWV9IC0gYm9va2l0PC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgPGgyPntyb29tLm5hbWV9IDwvaDI+IDxiciAvPlxuICAgICAgICAgIDxoNj57cm9vbS5hZGRyZXNzfTwvaDY+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17cm9vbS5pbWFnZXNbMF0udXJsfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwIHByb3BlcnR5LWRldGFpbHMtaW1hZ2UgbS1hdXRvXCJcbiAgICAgICAgICAgICAgYWx0PVwiSG90ZWxcIlxuICAgICAgICAgICAgICBoZWlnaHQ9ezE1MDB9XG4gICAgICAgICAgICAgIHdpZHRoPXsyNTAwfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJub19vZl9yZXZpZXdzXCI+XG4gICAgICAgICAgICAgIE51bWJlciBvZiBSZXZpZXdze1wiICAgIFwifVxuICAgICAgICAgICAgICB7cm9vbS5udW1PZlJldmlld3MgPyByb29tLm51bU9mUmV2aWV3cyA6IFwiICAgTm8gcmV2aWV3cyB5ZXRcIn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgey8qIDxHcmlkIGl0ZW0gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgIDxDYXJvdXNlbCBob3Zlcj1cInBhdXNlXCI+XG4gICAgICAgICAgICAgIHtyb29tLmltYWdlcyAmJlxuICAgICAgICAgICAgICAgIHJvb20uaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IChcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtIGtleT17aW1hZ2UucHVibGljX2lkfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI0NDBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayBtLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Jvb20ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICA8L0dyaWQ+ICovfVxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDM+RGVzY3JpcHRpb248L2gzPlxuICAgICAgICAgICAgICA8cD57cm9vbS5kZXNjcmlwdGlvbn08L3A+XG5cbiAgICAgICAgICAgICAgPFJvb21GZWF0dXJlcyByb29tPXtyb29tfSAvPlxuICAgICAgICAgICAgICB7LyogPGRpdj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWItNFwiPkZlYXR1cmVzOjwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb29tLWZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWNvZyBmYS1mdyBmYS11c2Vyc1wiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICAgICAgPHA+e3Jvb20uZ3Vlc3RDYXBhY2l0eX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb20tZmVhdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nIGZhLWZ3IGZhLWJlZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDxwPntyb29tLm51bU9mQmVkc308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb20tZmVhdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nIGZhLWZ3IGZhLWJhdGhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8cD4yIEJhdGhzPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb29tLWZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhIGZhLWNvZyBmYS1mdyBmYS1jdXRsZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgICAgICA8cD5LaXRjaGVuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29raW5nLWNhcmQgc2hhZG93LWxnIHAtNFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlLXBlci1uaWdodFwiPlxuICAgICAgICAgICAgICAgICAgPGI+wqN7cm9vbS5wcmljZVBlck5pZ2h0fTwvYj4gLyBuaWdodFxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBweS0zIGJvb2tpbmctYnRuXCI+UGF5PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3cyB3LTc1XCI+XG4gICAgICAgICAgICA8aDM+UmV2aWV3czo8L2gzPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1jYXJkIG15LTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctb3V0ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1pbm5lclwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmV2aWV3X3VzZXJcIj5ieSBKb2huPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXZpZXdfY29tbWVudFwiPkdvb2QgUXVhbGl0eTwvcD5cblxuICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1jYXJkIG15LTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctb3V0ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1pbm5lclwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmV2aWV3X3VzZXJcIj5ieSBKb2huPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXZpZXdfY29tbWVudFwiPkdvb2QgUXVhbGl0eTwvcD5cblxuICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKFxuICAoc3RvcmUpID0+XG4gICAgYXN5bmMgKHsgcmVxLCBxdWVyeSB9KSA9PiB7XG4gICAgICBhd2FpdCBzdG9yZS5kaXNwYXRjaChnZXRSb29tRGV0YWlscyhyZXEsIHF1ZXJ5LmlkKSlcbiAgICB9XG4pXG5leHBvcnQgZGVmYXVsdCBSb29tRGV0YWlsc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==