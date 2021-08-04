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
            display: block
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcm9vbS9baWRdLmpzIl0sIm5hbWVzIjpbIlJvb21EZXRhaWxzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvb21EZXRhaWxzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImVycm9yIiwicm9vbSIsInVzZUVmZmVjdCIsInRvYXN0IiwiY2xlYXJFcnJvcnMiLCJuYW1lIiwiZGlzcGxheSIsImJsb2NrIiwiYWRkcmVzcyIsImltYWdlcyIsInVybCIsIm1hcmdpblRvcCIsIm51bU9mUmV2aWV3cyIsImRlc2NyaXB0aW9uIiwicHJpY2VQZXJOaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7QUFFQSxNQUFNQyxXQUFXLEdBQUdDLHdEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0YsV0FBakI7QUFBQSxHQUFELENBQS9CO0FBSHdCLE1BSWhCRyxLQUpnQixHQUlBSCxXQUpBLENBSWhCRyxLQUpnQjtBQUFBLE1BSVRDLElBSlMsR0FJQUosV0FKQSxDQUlUSSxJQUpTLEVBTXhCOztBQUVBQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRixLQUFKLEVBQVc7QUFDVEcsNkRBQUEsQ0FBWUgsS0FBWjtBQUNBTCxjQUFRLENBQUNTLG1FQUFELENBQVI7QUFDRDtBQUNGLEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLHdEQUFEO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSwrQkFDRTtBQUFBLHFCQUFRSCxJQUFJLENBQUNJLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUsOERBQUMsbURBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQUEsZ0NBQ0UsOERBQUMsa0RBQUQ7QUFBSyxlQUFLLEVBQUU7QUFBRUMsbUJBQU8sRUFBRUM7QUFBWCxXQUFaO0FBQUEsaUNBQ0U7QUFBQSx1QkFBS04sSUFBSSxDQUFDSSxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBS0U7QUFBQSxvQkFBS0osSUFBSSxDQUFDTztBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFNRSw4REFBQyxtREFBRDtBQUFNLG1CQUFTLE1BQWY7QUFBQSxpQ0FDRSw4REFBQyxtREFBRDtBQUNFLGVBQUcsRUFBRVAsSUFBSSxDQUFDUSxNQUFMLENBQVksQ0FBWixFQUFlQyxHQUR0QjtBQUVFLHFCQUFTLEVBQUMsNkNBRlo7QUFHRSxlQUFHLEVBQUMsT0FITjtBQUlFLGtCQUFNLEVBQUUsSUFKVjtBQUtFLGlCQUFLLEVBQUU7QUFMVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixlQWVFLDhEQUFDLG1EQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsZUFBSyxFQUFFO0FBQUVDLHFCQUFTLEVBQUU7QUFBYixXQUFsQjtBQUFBLGlDQUNFLDhEQUFDLHlEQUFEO0FBQVksY0FBRSxFQUFDLGVBQWY7QUFBQSw0Q0FDb0IsTUFEcEIsRUFFR1YsSUFBSSxDQUFDVyxZQUFMLEdBQW9CWCxJQUFJLENBQUNXLFlBQXpCLEdBQXdDLG1CQUYzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZGLGVBc0NFO0FBQUEsa0NBQ0U7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUEsd0JBQUlYLElBQUksQ0FBQ1k7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBSUUsOERBQUMsa0VBQUQ7QUFBYyxrQkFBSSxFQUFFWjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQW9DRTtBQUFLLHFCQUFTLEVBQUMsMEJBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsNEJBQWY7QUFBQSxzQ0FDRTtBQUFHLHlCQUFTLEVBQUMsaUJBQWI7QUFBQSx3Q0FDRTtBQUFBLHFDQUFLQSxJQUFJLENBQUNhLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUtFO0FBQVEseUJBQVMsRUFBQyxnQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQXFIRCxDQXBJRDs7R0FBTXBCLFc7VUFDYUUsb0QsRUFFR0Usb0Q7OztLQUhoQkosVzs7QUE0SU4sK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcm9vbS9baWRdLjNiMWU3NzQ3ZTNlMGY0NDU4NjljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5cbmltcG9ydCB7IGdldFJvb21EZXRhaWxzIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvcm9vbUFjdGlvbnNcIlxuXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uLy4uL3JlZHV4L3N0b3JlXCJcblxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcblxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxuaW1wb3J0IHsgY2xlYXJFcnJvcnMgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9yb29tQWN0aW9uc1wiXG5cbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXG5pbXBvcnQgUm9vbUZlYXR1cmVzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3Jvb20vUm9vbUZlYXR1cmVzXCJcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXG5cbmNvbnN0IFJvb21EZXRhaWxzID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcblxuICBjb25zdCByb29tRGV0YWlscyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucm9vbURldGFpbHMpXG4gIGNvbnN0IHsgZXJyb3IsIHJvb20gfSA9IHJvb21EZXRhaWxzXG5cbiAgLy8gY29uc29sZS5sb2cocm9vbSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdG9hc3QuZXJyb3IoZXJyb3IpXG4gICAgICBkaXNwYXRjaChjbGVhckVycm9ycylcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57cm9vbS5uYW1lfSAtIGJvb2tpdDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgIDxCb3ggc3R5bGU9e3sgZGlzcGxheTogYmxvY2sgfX0+XG4gICAgICAgICAgICA8aDI+e3Jvb20ubmFtZX0gPC9oMj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8aDY+e3Jvb20uYWRkcmVzc308L2g2PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e3Jvb20uaW1hZ2VzWzBdLnVybH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMCBwcm9wZXJ0eS1kZXRhaWxzLWltYWdlIG0tYXV0b1wiXG4gICAgICAgICAgICAgIGFsdD1cIkhvdGVsXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNTAwfVxuICAgICAgICAgICAgICB3aWR0aD17MjUwMH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0gc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibm9fb2ZfcmV2aWV3c1wiPlxuICAgICAgICAgICAgICBOdW1iZXIgb2YgUmV2aWV3c3tcIiAgICBcIn1cbiAgICAgICAgICAgICAge3Jvb20ubnVtT2ZSZXZpZXdzID8gcm9vbS5udW1PZlJldmlld3MgOiBcIiAgIE5vIHJldmlld3MgeWV0XCJ9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIHsvKiA8R3JpZCBpdGVtIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICA8Q2Fyb3VzZWwgaG92ZXI9XCJwYXVzZVwiPlxuICAgICAgICAgICAgICB7cm9vbS5pbWFnZXMgJiZcbiAgICAgICAgICAgICAgICByb29tLmltYWdlcy5tYXAoKGltYWdlKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbSBrZXk9e2ltYWdlLnB1YmxpY19pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiNDQwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgbS1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2UudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtyb29tLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWwuSXRlbT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgPC9HcmlkPiAqL31cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgzPkRlc2NyaXB0aW9uPC9oMz5cbiAgICAgICAgICAgICAgPHA+e3Jvb20uZGVzY3JpcHRpb259PC9wPlxuXG4gICAgICAgICAgICAgIDxSb29tRmVhdHVyZXMgcm9vbT17cm9vbX0gLz5cbiAgICAgICAgICAgICAgey8qIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTRcIj5GZWF0dXJlczo8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbS1mZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1jb2cgZmEtZncgZmEtdXNlcnNcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICAgIDxwPntyb29tLmd1ZXN0Q2FwYWNpdHl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb29tLWZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZyBmYS1mdyBmYS1iZWRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8cD57cm9vbS5udW1PZkJlZHN9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb29tLWZlYXR1cmVcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNvZyBmYS1mdyBmYS1iYXRoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPHA+MiBCYXRoczwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vbS1mZWF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS1jb2cgZmEtZncgZmEtY3V0bGVyeVwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICAgICAgPHA+S2l0Y2hlbjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1jYXJkIHNoYWRvdy1sZyBwLTRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcmljZS1wZXItbmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgIDxiPsKje3Jvb20ucHJpY2VQZXJOaWdodH08L2I+IC8gbmlnaHRcbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2sgcHktMyBib29raW5nLWJ0blwiPlBheTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJldmlld3Mgdy03NVwiPlxuICAgICAgICAgICAgPGgzPlJldmlld3M6PC9oMz5cbiAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY2FyZCBteS0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLW91dGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctaW5uZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJldmlld191c2VyXCI+YnkgSm9objwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmV2aWV3X2NvbW1lbnRcIj5Hb29kIFF1YWxpdHk8L3A+XG5cbiAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY2FyZCBteS0zXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLW91dGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctaW5uZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJldmlld191c2VyXCI+YnkgSm9objwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmV2aWV3X2NvbW1lbnRcIj5Hb29kIFF1YWxpdHk8L3A+XG5cbiAgICAgICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhcbiAgKHN0b3JlKSA9PlxuICAgIGFzeW5jICh7IHJlcSwgcXVlcnkgfSkgPT4ge1xuICAgICAgYXdhaXQgc3RvcmUuZGlzcGF0Y2goZ2V0Um9vbURldGFpbHMocmVxLCBxdWVyeS5pZCkpXG4gICAgfVxuKVxuZXhwb3J0IGRlZmF1bHQgUm9vbURldGFpbHNcbiJdLCJzb3VyY2VSb290IjoiIn0=