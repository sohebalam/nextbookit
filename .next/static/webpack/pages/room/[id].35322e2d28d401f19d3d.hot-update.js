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
            lineNumber: 54,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: "Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: room.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_room_RoomFeatures__WEBPACK_IMPORTED_MODULE_7__.default, {
              room: room
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
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
                  lineNumber: 117,
                  columnNumber: 19
                }, _this), " / night"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "btn btn-block py-3 booking-btn",
                children: "Pay"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm9vbS9baWRdLmpzIl0sIm5hbWVzIjpbIlJvb21EZXRhaWxzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvb21EZXRhaWxzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImVycm9yIiwicm9vbSIsInVzZUVmZmVjdCIsInRvYXN0IiwiY2xlYXJFcnJvcnMiLCJuYW1lIiwiYWRkcmVzcyIsImltYWdlcyIsInVybCIsIm1hcmdpblRvcCIsIm51bU9mUmV2aWV3cyIsImRlc2NyaXB0aW9uIiwicHJpY2VQZXJOaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBRUEsTUFBTUMsV0FBVyxHQUFHQyx3REFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLFdBQWpCO0FBQUEsR0FBRCxDQUEvQjtBQUh3QixNQUloQkcsS0FKZ0IsR0FJQUgsV0FKQSxDQUloQkcsS0FKZ0I7QUFBQSxNQUlUQyxJQUpTLEdBSUFKLFdBSkEsQ0FJVEksSUFKUyxFQU14Qjs7QUFFQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUYsS0FBSixFQUFXO0FBQ1RHLDZEQUFBLENBQVlILEtBQVo7QUFDQUwsY0FBUSxDQUFDUyxtRUFBRCxDQUFSO0FBQ0Q7QUFDRixHQUxRLEVBS04sRUFMTSxDQUFUO0FBT0Esc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyx3REFBRDtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQUEsK0JBQ0U7QUFBQSxxQkFBUUgsSUFBSSxDQUFDSSxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFLDhEQUFDLG1EQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFBLGdDQUNFO0FBQUEscUJBQUtKLElBQUksQ0FBQ0ksSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLG9CQUFLSixJQUFJLENBQUNLO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFLDhEQUFDLG1EQUFEO0FBQU0sbUJBQVMsTUFBZjtBQUFBLGlDQUNFLDhEQUFDLG1EQUFEO0FBQ0UsZUFBRyxFQUFFTCxJQUFJLENBQUNNLE1BQUwsQ0FBWSxDQUFaLEVBQWVDLEdBRHRCO0FBRUUscUJBQVMsRUFBQyw2Q0FGWjtBQUdFLGVBQUcsRUFBQyxPQUhOO0FBSUUsa0JBQU0sRUFBRSxJQUpWO0FBS0UsaUJBQUssRUFBRTtBQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBYUUsOERBQUMsbURBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxlQUFLLEVBQUU7QUFBRUMscUJBQVMsRUFBRTtBQUFiLFdBQWxCO0FBQUEsaUNBQ0UsOERBQUMseURBQUQ7QUFBWSxjQUFFLEVBQUMsZUFBZjtBQUFBLDRDQUNvQixNQURwQixFQUVHUixJQUFJLENBQUNTLFlBQUwsR0FBb0JULElBQUksQ0FBQ1MsWUFBekIsR0FBd0MsbUJBRjNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkYsZUFzQ0U7QUFBQSxrQ0FDRTtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBQSx3QkFBSVQsSUFBSSxDQUFDVTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFJRSw4REFBQyxrRUFBRDtBQUFjLGtCQUFJLEVBQUVWO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBb0NFO0FBQUsscUJBQVMsRUFBQywwQkFBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyw0QkFBZjtBQUFBLHNDQUNFO0FBQUcseUJBQVMsRUFBQyxpQkFBYjtBQUFBLHdDQUNFO0FBQUEscUNBQUtBLElBQUksQ0FBQ1csYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBS0U7QUFBUSx5QkFBUyxFQUFDLGdDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBc0hELENBcklEOztHQUFNbEIsVztVQUNhRSxvRCxFQUVHRSxvRDs7O0tBSGhCSixXOztBQTZJTiwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yb29tL1tpZF0uMzUzMjJlMmQyOGQ0MDFmMTlkM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcblxuaW1wb3J0IHsgZ2V0Um9vbURldGFpbHMgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9yb29tQWN0aW9uc1wiXG5cbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vLi4vcmVkdXgvc3RvcmVcIlxuXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXG5pbXBvcnQgeyBjbGVhckVycm9ycyB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3Jvb21BY3Rpb25zXCJcblxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcbmltcG9ydCBSb29tRmVhdHVyZXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcm9vbS9Sb29tRmVhdHVyZXNcIlxuXG5jb25zdCBSb29tRGV0YWlscyA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5cbiAgY29uc3Qgcm9vbURldGFpbHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJvb21EZXRhaWxzKVxuICBjb25zdCB7IGVycm9yLCByb29tIH0gPSByb29tRGV0YWlsc1xuXG4gIC8vIGNvbnNvbGUubG9nKHJvb20pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRvYXN0LmVycm9yKGVycm9yKVxuICAgICAgZGlzcGF0Y2goY2xlYXJFcnJvcnMpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e3Jvb20ubmFtZX0gLSBib29raXQ8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICA8aDI+e3Jvb20ubmFtZX0gPC9oMj5cbiAgICAgICAgICA8aDY+e3Jvb20uYWRkcmVzc308L2g2PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e3Jvb20uaW1hZ2VzWzBdLnVybH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBwcm9wZXJ0eS1kZXRhaWxzLWltYWdlIG0tYXV0b1wiXG4gICAgICAgICAgICAgIGFsdD1cIkhvdGVsXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNTAwfVxuICAgICAgICAgICAgICB3aWR0aD17MjUwMH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgPEdyaWQgaXRlbSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJub19vZl9yZXZpZXdzXCI+XG4gICAgICAgICAgICAgIE51bWJlciBvZiBSZXZpZXdze1wiICAgIFwifVxuICAgICAgICAgICAgICB7cm9vbS5udW1PZlJldmlld3MgPyByb29tLm51bU9mUmV2aWV3cyA6IFwiICAgTm8gcmV2aWV3cyB5ZXRcIn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICB7LyogPEdyaWQgaXRlbSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgPENhcm91c2VsIGhvdmVyPVwicGF1c2VcIj5cbiAgICAgICAgICAgICAge3Jvb20uaW1hZ2VzICYmXG4gICAgICAgICAgICAgICAgcm9vbS5pbWFnZXMubWFwKChpbWFnZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPENhcm91c2VsLkl0ZW0ga2V5PXtpbWFnZS5wdWJsaWNfaWR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjQ0MHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIG0tYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cm9vbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgIDwvR3JpZD4gKi99XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgzPkRlc2NyaXB0aW9uPC9oMz5cbiAgICAgICAgICAgICAgPHA+e3Jvb20uZGVzY3JpcHRpb259PC9wPlxuXG4gICAgICAgICAgICAgIDxSb29tRmVhdHVyZXMgcm9vbT17cm9vbX0gLz5cbiAgICAgICAgICAgICAgey8qIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTRcIj5GZWF0dXJlczo8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbS1mZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1jb2cgZmEtZncgZmEtdXNlcnNcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICAgIDxwPntyb29tLmd1ZXN0Q2FwYWNpdHl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb29tLWZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZyBmYS1mdyBmYS1iZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8cD57cm9vbS5udW1PZkJlZHN9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb29tLWZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZyBmYS1mdyBmYS1iYXRoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPHA+MiBCYXRoczwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbS1mZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1jb2cgZmEtZncgZmEtY3V0bGVyeVwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICAgICAgPHA+S2l0Y2hlbjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1jYXJkIHNoYWRvdy1sZyBwLTRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcmljZS1wZXItbmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIDxiPsKje3Jvb20ucHJpY2VQZXJOaWdodH08L2I+IC8gbmlnaHRcbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2sgcHktMyBib29raW5nLWJ0blwiPlBheTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3cyB3LTc1XCI+XG4gICAgICAgICAgICA8aDM+UmV2aWV3czo8L2gzPlxuICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1jYXJkIG15LTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctb3V0ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1pbm5lclwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmV2aWV3X3VzZXJcIj5ieSBKb2huPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXZpZXdfY29tbWVudFwiPkdvb2QgUXVhbGl0eTwvcD5cblxuICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1jYXJkIG15LTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctb3V0ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZy1pbm5lclwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmV2aWV3X3VzZXJcIj5ieSBKb2huPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZXZpZXdfY29tbWVudFwiPkdvb2QgUXVhbGl0eTwvcD5cblxuICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKFxuICAoc3RvcmUpID0+XG4gICAgYXN5bmMgKHsgcmVxLCBxdWVyeSB9KSA9PiB7XG4gICAgICBhd2FpdCBzdG9yZS5kaXNwYXRjaChnZXRSb29tRGV0YWlscyhyZXEsIHF1ZXJ5LmlkKSlcbiAgICB9XG4pXG5leHBvcnQgZGVmYXVsdCBSb29tRGV0YWlsc1xuIl0sInNvdXJjZVJvb3QiOiIifQ==