self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_layout_RoomItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/RoomItem */ "./components/layout/RoomItem.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Projects\\nextbookit\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();







var Home = function Home() {
  _s();

  var allRooms = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.allRooms;
  });
  var loading = allRooms.loading,
      error = allRooms.error,
      rooms = allRooms.rooms; // const router = useRouter()

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)(); // console.log(rooms)

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "mb-3 ml-2 stays-heading",
        children: "Stays in New York"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "#",
        className: "ml-2 back-to-search",
        children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fa fa-arrow-left"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this), " Back to Search"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
        container: true,
        style: {
          marginTop: "1rem"
        },
        direction: "column",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
          item: true,
          sm: 3,
          direction: "row",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Card, {
            style: {
              height: "100%",
              padding: "0.75rem"
            },
            children: rooms && rooms.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "alert alert-danger mt-5 w-100",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                children: "No Rooms."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 17
            }, _this) : rooms && rooms.map(function (room) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_RoomItem__WEBPACK_IMPORTED_MODULE_3__.default, {
                room: room
              }, room._id, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_s(Home, "CeBr7tan5KS5kAnICFypmPfzBkE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch];
});

_c = Home;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFsbFJvb21zIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImxvYWRpbmciLCJlcnJvciIsInJvb21zIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm1hcmdpblRvcCIsImhlaWdodCIsInBhZGRpbmciLCJsZW5ndGgiLCJtYXAiLCJyb29tIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1BLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLFFBQWpCO0FBQUEsR0FBRCxDQUE1QjtBQURpQixNQUVURyxPQUZTLEdBRWlCSCxRQUZqQixDQUVURyxPQUZTO0FBQUEsTUFFQUMsS0FGQSxHQUVpQkosUUFGakIsQ0FFQUksS0FGQTtBQUFBLE1BRU9DLEtBRlAsR0FFaUJMLFFBRmpCLENBRU9LLEtBRlAsRUFJakI7O0FBRUEsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1QixDQU5pQixDQVFqQjs7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLHdEQUFEO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFDLHlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFHRTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQVksaUJBQVMsRUFBQyxxQkFBdEI7QUFBQSxtQkFDRyxHQURILGVBRUU7QUFBRyxtQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQU9FLDhEQUFDLG1EQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixhQUFLLEVBQUU7QUFBRUMsbUJBQVMsRUFBRTtBQUFiLFNBQXZCO0FBQThDLGlCQUFTLEVBQUMsUUFBeEQ7QUFBQSwrQkFDRSw4REFBQyxtREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxDQUFmO0FBQWtCLG1CQUFTLEVBQUUsS0FBN0I7QUFBQSxpQ0FDRSw4REFBQyxtREFBRDtBQUFNLGlCQUFLLEVBQUU7QUFBRUMsb0JBQU0sRUFBRSxNQUFWO0FBQWtCQyxxQkFBTyxFQUFFO0FBQTNCLGFBQWI7QUFBQSxzQkFDR0wsS0FBSyxJQUFJQSxLQUFLLENBQUNNLE1BQU4sS0FBaUIsQ0FBMUIsZ0JBQ0M7QUFBSyx1QkFBUyxFQUFDLCtCQUFmO0FBQUEscUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELEdBS0NOLEtBQUssSUFDTEEsS0FBSyxDQUFDTyxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLGtDQUFVLDhEQUFDLGdFQUFEO0FBQXlCLG9CQUFJLEVBQUVBO0FBQS9CLGlCQUFlQSxJQUFJLENBQUNDLEdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQVY7QUFBQSxhQUFWO0FBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0ZELENBOUZEOztHQUFNZixJO1VBQ2FFLG9ELEVBS0FNLG9EOzs7S0FOYlIsSTs7QUFnSE4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTMxYzAyNTk5ZjViZWRhMGM3NTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgR3JpZCwgQ2FyZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgUm9vbUl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L1Jvb21JdGVtXCJcblxuaW1wb3J0IHsgZ2V0Um9vbXMgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9yb29tQWN0aW9uc1wiXG5cbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIlxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBhbGxSb29tcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYWxsUm9vbXMpXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIHJvb21zIH0gPSBhbGxSb29tc1xuXG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG5cbiAgLy8gY29uc29sZS5sb2cocm9vbXMpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTMgbWwtMiBzdGF5cy1oZWFkaW5nXCI+U3RheXMgaW4gTmV3IFlvcms8L2gyPlxuXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibWwtMiBiYWNrLXRvLXNlYXJjaFwiPlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1sZWZ0XCI+PC9pPiBCYWNrIHRvIFNlYXJjaFxuICAgICAgICA8L2E+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMXJlbVwiIH19IGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezN9IGRpcmVjdGlvbj17XCJyb3dcIn0+XG4gICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiLCBwYWRkaW5nOiBcIjAuNzVyZW1cIiB9fT5cbiAgICAgICAgICAgICAge3Jvb21zICYmIHJvb21zLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlciBtdC01IHctMTAwXCI+XG4gICAgICAgICAgICAgICAgICA8Yj5ObyBSb29tcy48L2I+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgcm9vbXMgJiZcbiAgICAgICAgICAgICAgICByb29tcy5tYXAoKHJvb20pID0+IDxSb29tSXRlbSBrZXk9e3Jvb20uX2lkfSByb29tPXtyb29tfSAvPilcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgey8qIDxHcmlkIGl0ZW0gc209ezN9PlxuICAgICAgICAgICAgPENhcmQgc3R5bGU9e3sgcGFkZGluZzogXCIxcmVtXCIgfX0+XG4gICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vYTAubXVzY2FjaGUuY29tL2ltL3BpY3R1cmVzLzIxMjFiMWUzLTFkMmItNDgyNC05MjY4LWViYTFlNTkzYmMyOC5qcGc/aW1fdz03MjBcIlxuICAgICAgICAgICAgICAgIHdpZHRoPXsyNTB9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsxNTB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+UGljdHVyZXNxdWUgMi1TdG9yeSBGYXJtaG91c2Ugdy9Qcml2YXRlIEhvdCBUdWI8L2E+XG4gICAgICAgICAgICAgICAgPC9oNT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5ncyBtdC1hdXRvIG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8Yj4kMTI8L2I+IC8gbmlnaHRcbiAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctb3V0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmctaW5uZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJub19vZl9yZXZpZXdzXCI+KDUgUmV2aWV3cyk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2sgdmlldy1idG5cIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+VmlldyBEZXRhaWxzPC9hPlxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0dyaWQ+ICovfVxuICAgICAgICAgIHsvKiA8R3JpZCBpdGVtIHNtPXszfT5cbiAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IHBhZGRpbmc6IFwiMXJlbVwiIH19PlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2EwLm11c2NhY2hlLmNvbS9pbS9waWN0dXJlcy80NTk5ZGUzMi01NDlmLTQxMjUtOGM5My1lZjk5Y2U1YjRjYjAuanBnP2ltX3c9NzIwXCJcbiAgICAgICAgICAgICAgICB3aWR0aD17MjUwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MTUwfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPkRvd250b3duIFBvcnRzbW91dGggUHJpdmF0ZSBHZXRhd2F5ISBIb3QgVHViPC9hPlxuICAgICAgICAgICAgICAgIDwvaDU+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ3MgbXQtYXV0byBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGI+JDEyPC9iPiAvIG5pZ2h0XG4gICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLW91dGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWlubmVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwibm9fb2ZfcmV2aWV3c1wiPig1IFJldmlld3MpPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIHZpZXctYnRuXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlZpZXcgRGV0YWlsczwvYT5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9HcmlkPiAqL31cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKFxuICAoc3RvcmUpID0+XG4gICAgYXN5bmMgKHsgcmVxLCBxdWVyeSB9KSA9PiB7XG4gICAgICBhd2FpdCBzdG9yZS5kaXNwYXRjaChcbiAgICAgICAgZ2V0Um9vbXMoXG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIHF1ZXJ5LnBhZ2UsXG4gICAgICAgICAgcXVlcnkubG9jYXRpb24sXG4gICAgICAgICAgcXVlcnkuZ3Vlc3RzLFxuXG4gICAgICAgICAgcXVlcnk/LmNhdGVnb3J5XG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=