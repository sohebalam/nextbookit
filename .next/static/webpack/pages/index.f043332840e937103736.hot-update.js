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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_room_RoomItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/room/RoomItem */ "./components/room/RoomItem.js");
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-js-pagination */ "./node_modules/react-js-pagination/dist/Pagination.js");
/* harmony import */ var _redux_actions_roomActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/roomActions */ "./redux/actions/roomActions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Projects\\nextbookit\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();













var Home = function Home() {
  _s();

  var allRooms = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.allRooms;
  });
  var rooms = allRooms.rooms,
      resPerPage = allRooms.resPerPage,
      roomsCount = allRooms.roomsCount,
      filteredRoomsCount = allRooms.filteredRoomsCount,
      error = allRooms.error;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  var _router$query = router.query,
      location = _router$query.location,
      _router$query$page = _router$query.page,
      page = _router$query$page === void 0 ? 1 : _router$query$page;
  page = Number(page);
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    react_toastify__WEBPACK_IMPORTED_MODULE_9__.toast.error(error);
    dispatch((0,_redux_actions_roomActions__WEBPACK_IMPORTED_MODULE_5__.clearErrors)());
  }, []);

  var handlePagination = function handlePagination(pageNumber) {
    if (location) {
      var url = window.location.search;
      url.includes("&page") ? url = url.replace(/(page=)[^\&]+/, "$1" + pageNumber) : url = url.concat("&page=".concat(pageNumber));
      router.push(url);
    } else {
      router.push("/?page=".concat(pageNumber)); // window.location.href = `/?page=${pageNumber}`
    }
  };

  var count = roomsCount;

  if (location) {
    count = filteredRoomsCount;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Container, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "mb-3 ml-2 stays-heading",
        children: location ? "Rooms in ".concat(location) : "All Rooms"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
        href: "/search",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "ml-2 back-to-search",
          children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "fa fa-arrow-left"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this), "Back to Search"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {
        container: true,
        style: {
          marginTop: "1rem"
        },
        alignItems: "flex-end",
        direction: "row",
        children: rooms && rooms.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "alert alert-danger mt-5 w-100",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
            children: "No Rooms."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, _this) : rooms && rooms.map(function (room) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Grid, {
            item: true,
            sm: 3,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Card, {
              style: {
                height: "100%",
                padding: "0.75rem"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_room_RoomItem__WEBPACK_IMPORTED_MODULE_3__.default, {
                room: room
              }, room._id, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 17
            }, _this)
          }, room._id, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this), resPerPage < count && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "menu",
      className: "center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_js_pagination__WEBPACK_IMPORTED_MODULE_4__.default, {
            activePage: page,
            itemsCountPerPage: resPerPage,
            totalItemsCount: roomsCount,
            onChange: handlePagination,
            nextPageText: "Next",
            prevPageText: "Prev",
            firstPageText: "First",
            lastPageText: "Last",
            itemClass: "page-item",
            linkClass: "page-link"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, _this);
};

_s(Home, "EzX4FNiCHhHbT5k2NKY+31rQesQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter, react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFsbFJvb21zIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJvb21zIiwicmVzUGVyUGFnZSIsInJvb21zQ291bnQiLCJmaWx0ZXJlZFJvb21zQ291bnQiLCJlcnJvciIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwibG9jYXRpb24iLCJwYWdlIiwiTnVtYmVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInRvYXN0IiwiY2xlYXJFcnJvcnMiLCJoYW5kbGVQYWdpbmF0aW9uIiwicGFnZU51bWJlciIsInVybCIsIndpbmRvdyIsInNlYXJjaCIsImluY2x1ZGVzIiwicmVwbGFjZSIsImNvbmNhdCIsInB1c2giLCJjb3VudCIsIm1hcmdpblRvcCIsImxlbmd0aCIsIm1hcCIsInJvb20iLCJoZWlnaHQiLCJwYWRkaW5nIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLFFBQWpCO0FBQUEsR0FBRCxDQUE1QjtBQURpQixNQUVURyxLQUZTLEdBRW9ESCxRQUZwRCxDQUVURyxLQUZTO0FBQUEsTUFFRkMsVUFGRSxHQUVvREosUUFGcEQsQ0FFRkksVUFGRTtBQUFBLE1BRVVDLFVBRlYsR0FFb0RMLFFBRnBELENBRVVLLFVBRlY7QUFBQSxNQUVzQkMsa0JBRnRCLEdBRW9ETixRQUZwRCxDQUVzQk0sa0JBRnRCO0FBQUEsTUFFMENDLEtBRjFDLEdBRW9EUCxRQUZwRCxDQUUwQ08sS0FGMUM7QUFJakIs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O0FBQUE7QUFBQSxhQURGLEVBa0NHL0IsVUFBVSxHQUFHd0IsS0FBYixpQkFDQztBQUFLLFFBQUUsRUFBQyxNQUFSO0FBQWUsZUFBUyxFQUFDLFFBQXpCO0FBQUEsNkJBQ0U7QUFBQSwrQkFDRTtBQUFBLGlDQUNFLDhEQUFDLHdEQUFEO0FBQ0Usc0JBQVUsRUFBRWhCLElBRGQ7QUFFRSw2QkFBaUIsRUFBRVIsVUFGckI7QUFHRSwyQkFBZSxFQUFFQyxVQUhuQjtBQUlFLG9CQUFRLEVBQUVjLGdCQUpaO0FBS0Usd0JBQVksRUFBRSxNQUxoQjtBQU1FLHdCQUFZLEVBQUUsTUFOaEI7QUFPRSx5QkFBYSxFQUFFLE9BUGpCO0FBUUUsd0JBQVksRUFBRSxNQVJoQjtBQVNFLHFCQUFTLEVBQUMsV0FUWjtBQVVFLHFCQUFTLEVBQUM7QUFWWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeURELENBNUZEOztHQUFNcEIsSTtVQUNhRSxvRCxFQUdGUSxrRCxFQUlFTSxvRDs7O0tBUmJoQixJOztBQThHTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMDQzMzMyODQwZTkzNzEwMzczNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBHcmlkLCBDYXJkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBSb29tSXRlbSBmcm9tIFwiLi4vY29tcG9uZW50cy9yb29tL1Jvb21JdGVtXCJcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCJyZWFjdC1qcy1wYWdpbmF0aW9uXCJcbmltcG9ydCB7IGNsZWFyRXJyb3JzLCBnZXRSb29tcyB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL3Jvb21BY3Rpb25zXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgYWxsUm9vbXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFsbFJvb21zKVxuICBjb25zdCB7IHJvb21zLCByZXNQZXJQYWdlLCByb29tc0NvdW50LCBmaWx0ZXJlZFJvb21zQ291bnQsIGVycm9yIH0gPSBhbGxSb29tc1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGxldCB7IGxvY2F0aW9uLCBwYWdlID0gMSB9ID0gcm91dGVyLnF1ZXJ5XG4gIHBhZ2UgPSBOdW1iZXIocGFnZSlcblxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRvYXN0LmVycm9yKGVycm9yKVxuICAgIGRpc3BhdGNoKGNsZWFyRXJyb3JzKCkpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGhhbmRsZVBhZ2luYXRpb24gPSAocGFnZU51bWJlcikgPT4ge1xuICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2hcblxuICAgICAgdXJsLmluY2x1ZGVzKFwiJnBhZ2VcIilcbiAgICAgICAgPyAodXJsID0gdXJsLnJlcGxhY2UoLyhwYWdlPSlbXlxcJl0rLywgXCIkMVwiICsgcGFnZU51bWJlcikpXG4gICAgICAgIDogKHVybCA9IHVybC5jb25jYXQoYCZwYWdlPSR7cGFnZU51bWJlcn1gKSlcblxuICAgICAgcm91dGVyLnB1c2godXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByb3V0ZXIucHVzaChgLz9wYWdlPSR7cGFnZU51bWJlcn1gKVxuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgLz9wYWdlPSR7cGFnZU51bWJlcn1gXG4gICAgfVxuICB9XG5cbiAgbGV0IGNvdW50ID0gcm9vbXNDb3VudFxuICBpZiAobG9jYXRpb24pIHtcbiAgICBjb3VudCA9IGZpbHRlcmVkUm9vbXNDb3VudFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTMgbWwtMiBzdGF5cy1oZWFkaW5nXCI+XG4gICAgICAgICAge2xvY2F0aW9uID8gYFJvb21zIGluICR7bG9jYXRpb259YCA6IFwiQWxsIFJvb21zXCJ9XG4gICAgICAgIDwvaDI+XG5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9zZWFyY2hcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJtbC0yIGJhY2stdG8tc2VhcmNoXCI+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1sZWZ0XCI+PC9pPkJhY2sgdG8gU2VhcmNoXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjFyZW1cIiB9fVxuICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiXG4gICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgPlxuICAgICAgICAgIHtyb29tcyAmJiByb29tcy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlciBtdC01IHctMTAwXCI+XG4gICAgICAgICAgICAgIDxiPk5vIFJvb21zLjwvYj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICByb29tcyAmJlxuICAgICAgICAgICAgcm9vbXMubWFwKChyb29tKSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gc209ezN9IGtleT17cm9vbS5faWR9PlxuICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIsIHBhZGRpbmc6IFwiMC43NXJlbVwiIH19PlxuICAgICAgICAgICAgICAgICAgPFJvb21JdGVtIGtleT17cm9vbS5faWR9IHJvb209e3Jvb219IC8+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAge3Jlc1BlclBhZ2UgPCBjb3VudCAmJiAoXG4gICAgICAgIDxkaXYgaWQ9XCJtZW51XCIgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2U9e3BhZ2V9XG4gICAgICAgICAgICAgICAgaXRlbXNDb3VudFBlclBhZ2U9e3Jlc1BlclBhZ2V9XG4gICAgICAgICAgICAgICAgdG90YWxJdGVtc0NvdW50PXtyb29tc0NvdW50fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQYWdpbmF0aW9ufVxuICAgICAgICAgICAgICAgIG5leHRQYWdlVGV4dD17XCJOZXh0XCJ9XG4gICAgICAgICAgICAgICAgcHJldlBhZ2VUZXh0PXtcIlByZXZcIn1cbiAgICAgICAgICAgICAgICBmaXJzdFBhZ2VUZXh0PXtcIkZpcnN0XCJ9XG4gICAgICAgICAgICAgICAgbGFzdFBhZ2VUZXh0PXtcIkxhc3RcIn1cbiAgICAgICAgICAgICAgICBpdGVtQ2xhc3M9XCJwYWdlLWl0ZW1cIlxuICAgICAgICAgICAgICAgIGxpbmtDbGFzcz1cInBhZ2UtbGlua1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoXG4gIChzdG9yZSkgPT5cbiAgICBhc3luYyAoeyByZXEsIHF1ZXJ5IH0pID0+IHtcbiAgICAgIGF3YWl0IHN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBnZXRSb29tcyhcbiAgICAgICAgICByZXEsXG4gICAgICAgICAgcXVlcnkucGFnZSxcbiAgICAgICAgICBxdWVyeS5sb2NhdGlvbixcbiAgICAgICAgICBxdWVyeS5ndWVzdHMsXG5cbiAgICAgICAgICBxdWVyeT8uY2F0ZWdvcnlcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH1cbilcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==