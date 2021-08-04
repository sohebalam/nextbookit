(function() {
var exports = {};
exports.id = "pages/search";
exports.ids = ["pages/search"];
exports.modules = {

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var _redux_actions_roomActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/roomActions */ "./redux/actions/roomActions.js");

var _jsxFileName = "C:\\Projects\\nextbookit\\pages\\search.js";







const Search = () => {
  const {
    0: location,
    1: setLocation
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: guests,
    1: setGuests
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: category,
    1: setCategory
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const submitHandler = e => {
    e.preventDefault();

    if (location.trim()) {
      router.push(`/?location=${location}&guests=${guests}&category=${category}`);
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
                lineNumber: 44,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {
                  htmlFor: "location_field",
                  children: "Location"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TextField, {
                  type: "text",
                  className: "form-control",
                  id: "location_field",
                  placeholder: "new york",
                  value: location,
                  onChange: e => setLocation(e.target.value)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {
                  htmlFor: "guest_field",
                  children: "No. of Guests"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {
                  className: "form-control",
                  id: "guest_field",
                  value: guests,
                  onChange: e => setGuests(e.target.value),
                  children: [1, 2, 3, 4, 5, 6].map(num => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                    value: num,
                    children: num
                  }, num, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 23
                  }, undefined))
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.FormGroup, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.InputLabel, {
                  htmlFor: "room_type_field",
                  children: "Room Type"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Select, {
                  className: "form-control",
                  id: "room_type_field",
                  value: category,
                  onChange: e => setCategory(e.target.value),
                  children: ["King", "Single", "Twins"].map(category => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.MenuItem, {
                    value: category,
                    children: category
                  }, category, false, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 23
                  }, undefined))
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
                type: "submit",
                className: "btn btn-block py-2",
                fullWidth: true,
                children: "Search"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined);
};

const getServerSideProps = _redux_store__WEBPACK_IMPORTED_MODULE_4__.wrapper.getServerSideProps(store => async ({
  req,
  query
}) => {
  await store.dispatch((0,_redux_actions_roomActions__WEBPACK_IMPORTED_MODULE_5__.getRooms)(req, query.page, query.location, query.guests, query.category));
});
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./redux/actions/roomActions.js":
/*!**************************************!*\
  !*** ./redux/actions/roomActions.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRooms": function() { return /* binding */ getRooms; },
/* harmony export */   "clearErrors": function() { return /* binding */ clearErrors; },
/* harmony export */   "getRoomDetails": function() { return /* binding */ getRoomDetails; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-absolute-url */ "next-absolute-url");
/* harmony import */ var next_absolute_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_absolute_url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_roomTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/roomTypes */ "./redux/constants/roomTypes.js");



const getRooms = (req, currentPage = 1, location = "", guests, category) => async dispatch => {
  try {
    //absoluteUrl = for pre render all rooms provide absolute path
    const {
      origin
    } = next_absolute_url__WEBPACK_IMPORTED_MODULE_1___default()(req);
    let link = `${origin}/api/rooms/rooms?page=${currentPage}&location=${location}`;

    if (guests) {
      link = link.concat(`&guestCapacity=${guests}`);
    }

    if (category) {
      link = link.concat(`&category=${category}`);
    }

    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(link);
    dispatch({
      type: _constants_roomTypes__WEBPACK_IMPORTED_MODULE_2__.ALL_ROOMS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: _constants_roomTypes__WEBPACK_IMPORTED_MODULE_2__.ALL_ROOMS_FAIL,
      payload: error.response.data.message
    });
  }
};
const clearErrors = () => async dispatch => {
  dispatch({
    type: _constants_roomTypes__WEBPACK_IMPORTED_MODULE_2__.CLEAR_ERRORS
  });
};
const getRoomDetails = (req, id) => async dispatch => {
  const {
    origin
  } = next_absolute_url__WEBPACK_IMPORTED_MODULE_1___default()(req);
  let url = req;

  if (req) {
    url = `${origin}/api/rooms/${id}`;
  } else {
    url = `/api/rooms/${id}`;
  }

  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url);

  try {
    dispatch({
      type: _constants_roomTypes__WEBPACK_IMPORTED_MODULE_2__.ROOM_DETAILS_SUCCESS,
      payload: data.room
    });
  } catch (error) {
    dispatch({
      type: ROOM_DETAILS_FAIL,
      payload: error.response.data.message
    });
  }
};

/***/ }),

/***/ "./redux/constants/roomTypes.js":
/*!**************************************!*\
  !*** ./redux/constants/roomTypes.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_ROOMS_SUCCESS": function() { return /* binding */ ALL_ROOMS_SUCCESS; },
/* harmony export */   "ALL_ROOMS_FAIL": function() { return /* binding */ ALL_ROOMS_FAIL; },
/* harmony export */   "ROOM_DETAILS_SUCCESS": function() { return /* binding */ ROOM_DETAILS_SUCCESS; },
/* harmony export */   "ROOM_DETAILS_FAIL": function() { return /* binding */ ROOM_DETAILS_FAIL; },
/* harmony export */   "CLEAR_ERRORS": function() { return /* binding */ CLEAR_ERRORS; },
/* harmony export */   "NEW_REVIEW_REQUEST": function() { return /* binding */ NEW_REVIEW_REQUEST; },
/* harmony export */   "NEW_REVIEW_SUCCESS": function() { return /* binding */ NEW_REVIEW_SUCCESS; },
/* harmony export */   "NEW_REVIEW_RESET": function() { return /* binding */ NEW_REVIEW_RESET; },
/* harmony export */   "NEW_REVIEW_FAIL": function() { return /* binding */ NEW_REVIEW_FAIL; },
/* harmony export */   "REVIEW_AVAILABLE_REQUEST": function() { return /* binding */ REVIEW_AVAILABLE_REQUEST; },
/* harmony export */   "REVIEW_AVAILABLE_SUCCESS": function() { return /* binding */ REVIEW_AVAILABLE_SUCCESS; },
/* harmony export */   "REVIEW_AVAILABLE_FAIL": function() { return /* binding */ REVIEW_AVAILABLE_FAIL; },
/* harmony export */   "ADMIN_ROOMS_REQUEST": function() { return /* binding */ ADMIN_ROOMS_REQUEST; },
/* harmony export */   "ADMIN_ROOMS_SUCCESS": function() { return /* binding */ ADMIN_ROOMS_SUCCESS; },
/* harmony export */   "ADMIN_ROOMS_FAIL": function() { return /* binding */ ADMIN_ROOMS_FAIL; },
/* harmony export */   "NEW_ROOM_REQUEST": function() { return /* binding */ NEW_ROOM_REQUEST; },
/* harmony export */   "NEW_ROOM_SUCCESS": function() { return /* binding */ NEW_ROOM_SUCCESS; },
/* harmony export */   "NEW_ROOM_RESET": function() { return /* binding */ NEW_ROOM_RESET; },
/* harmony export */   "NEW_ROOM_FAIL": function() { return /* binding */ NEW_ROOM_FAIL; },
/* harmony export */   "UPDATE_ROOM_REQUEST": function() { return /* binding */ UPDATE_ROOM_REQUEST; },
/* harmony export */   "UPDATE_ROOM_SUCCESS": function() { return /* binding */ UPDATE_ROOM_SUCCESS; },
/* harmony export */   "UPDATE_ROOM_RESET": function() { return /* binding */ UPDATE_ROOM_RESET; },
/* harmony export */   "UPDATE_ROOM_FAIL": function() { return /* binding */ UPDATE_ROOM_FAIL; },
/* harmony export */   "DELETE_ROOM_REQUEST": function() { return /* binding */ DELETE_ROOM_REQUEST; },
/* harmony export */   "DELETE_ROOM_SUCCESS": function() { return /* binding */ DELETE_ROOM_SUCCESS; },
/* harmony export */   "DELETE_ROOM_RESET": function() { return /* binding */ DELETE_ROOM_RESET; },
/* harmony export */   "DELETE_ROOM_FAIL": function() { return /* binding */ DELETE_ROOM_FAIL; },
/* harmony export */   "GET_REVIEWS_REQUEST": function() { return /* binding */ GET_REVIEWS_REQUEST; },
/* harmony export */   "GET_REVIEWS_SUCCESS": function() { return /* binding */ GET_REVIEWS_SUCCESS; },
/* harmony export */   "GET_REVIEWS_FAIL": function() { return /* binding */ GET_REVIEWS_FAIL; },
/* harmony export */   "DELETE_REVIEW_REQUEST": function() { return /* binding */ DELETE_REVIEW_REQUEST; },
/* harmony export */   "DELETE_REVIEW_SUCCESS": function() { return /* binding */ DELETE_REVIEW_SUCCESS; },
/* harmony export */   "DELETE_REVIEW_RESET": function() { return /* binding */ DELETE_REVIEW_RESET; },
/* harmony export */   "DELETE_REVIEW_FAIL": function() { return /* binding */ DELETE_REVIEW_FAIL; }
/* harmony export */ });
const ALL_ROOMS_SUCCESS = "ALL_ROOMS_SUCCESS";
const ALL_ROOMS_FAIL = "ALL_ROOMS_FAIL";
const ROOM_DETAILS_SUCCESS = "ROOM_DETAILS_SUCCESS";
const ROOM_DETAILS_FAIL = "ROOM_DETAILS_FAIL";
const CLEAR_ERRORS = "CLEAR_ERRORS";
const NEW_REVIEW_REQUEST = "NEW_REVIEW_REQUEST";
const NEW_REVIEW_SUCCESS = "NEW_REVIEW_SUCCESS";
const NEW_REVIEW_RESET = "NEW_REVIEW_RESET";
const NEW_REVIEW_FAIL = "NEW_REVIEW_FAIL";
const REVIEW_AVAILABLE_REQUEST = "REVIEW_AVAILABLE_REQUEST";
const REVIEW_AVAILABLE_SUCCESS = "REVIEW_AVAILABLE_SUCCESS";
const REVIEW_AVAILABLE_FAIL = "REVIEW_AVAILABLE_FAIL";
const ADMIN_ROOMS_REQUEST = "ADMIN_ROOMS_REQUEST";
const ADMIN_ROOMS_SUCCESS = "ADMIN_ROOMS_SUCCESS";
const ADMIN_ROOMS_FAIL = "ADMIN_ROOMS_FAIL";
const NEW_ROOM_REQUEST = "NEW_ROOM_REQUEST";
const NEW_ROOM_SUCCESS = "NEW_ROOM_SUCCESS";
const NEW_ROOM_RESET = "NEW_ROOM_RESET";
const NEW_ROOM_FAIL = "NEW_ROOM_FAIL";
const UPDATE_ROOM_REQUEST = "UPDATE_ROOM_REQUEST";
const UPDATE_ROOM_SUCCESS = "UPDATE_ROOM_SUCCESS";
const UPDATE_ROOM_RESET = "UPDATE_ROOM_RESET";
const UPDATE_ROOM_FAIL = "UPDATE_ROOM_FAIL";
const DELETE_ROOM_REQUEST = "DELETE_ROOM_REQUEST";
const DELETE_ROOM_SUCCESS = "DELETE_ROOM_SUCCESS";
const DELETE_ROOM_RESET = "DELETE_ROOM_RESET";
const DELETE_ROOM_FAIL = "DELETE_ROOM_FAIL";
const GET_REVIEWS_REQUEST = "GET_REVIEWS_REQUEST";
const GET_REVIEWS_SUCCESS = "GET_REVIEWS_SUCCESS";
const GET_REVIEWS_FAIL = "GET_REVIEWS_FAIL";
const DELETE_REVIEW_REQUEST = "DELETE_REVIEW_REQUEST";
const DELETE_REVIEW_SUCCESS = "DELETE_REVIEW_SUCCESS";
const DELETE_REVIEW_RESET = "DELETE_REVIEW_RESET";
const DELETE_REVIEW_FAIL = "DELETE_REVIEW_FAIL";

/***/ }),

/***/ "./redux/reducers.js":
/*!***************************!*\
  !*** ./redux/reducers.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_roomReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/roomReducer */ "./redux/reducers/roomReducer.js");


const reducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  allRooms: _reducers_roomReducer__WEBPACK_IMPORTED_MODULE_1__.allRoomsReducer,
  roomDetails: _reducers_roomReducer__WEBPACK_IMPORTED_MODULE_1__.roomDetailsReducer
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./redux/reducers/roomReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/roomReducer.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allRoomsReducer": function() { return /* binding */ allRoomsReducer; },
/* harmony export */   "roomDetailsReducer": function() { return /* binding */ roomDetailsReducer; }
/* harmony export */ });
/* harmony import */ var _constants_roomTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/roomTypes */ "./redux/constants/roomTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const allRoomsReducer = (state = {
  rooms: []
}, action) => {
  switch (action.type) {
    case _constants_roomTypes__WEBPACK_IMPORTED_MODULE_0__.ALL_ROOMS_SUCCESS:
      return {
        roomsCount: action.payload.roomsCount,
        resPerPage: action.payload.resPerPage,
        filteredRoomsCount: action.payload.filteredRoomsCount,
        rooms: action.payload.rooms
      };

    case _constants_roomTypes__WEBPACK_IMPORTED_MODULE_0__.ALL_ROOMS_FAIL:
      return {
        error: action.payload
      };

    case _constants_roomTypes__WEBPACK_IMPORTED_MODULE_0__.CLEAR_ERRORS:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: null
      });

    default:
      return state;
  }
};
const roomDetailsReducer = (state = {
  room: {}
}, action) => {
  switch (action.type) {
    case _constants_roomTypes__WEBPACK_IMPORTED_MODULE_0__.ROOM_DETAILS_SUCCESS:
      return {
        room: action.payload
      };

    case _constants_roomTypes__WEBPACK_IMPORTED_MODULE_0__.ROOM_DETAILS_FAIL:
      return {
        error: action.payload
      };

    case _constants_roomTypes__WEBPACK_IMPORTED_MODULE_0__.CLEAR_ERRORS:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: null
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapper": function() { return /* binding */ wrapper; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./redux/reducers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const combineMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware));
  }

  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware);
};

const reducer = (state, action) => {
  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE) {
    const nextState = _objectSpread(_objectSpread({}, state), action.payload);

    return nextState;
  } else {
    return (0,_reducers__WEBPACK_IMPORTED_MODULE_3__.default)(state, action);
  }
};

const initStore = () => {
  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer, combineMiddleware([(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())]));
};

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(initStore);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next-absolute-url":
/*!************************************!*\
  !*** external "next-absolute-url" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-absolute-url");;

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/search.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0b2Z1Ly4vcGFnZXMvc2VhcmNoLmpzIiwid2VicGFjazovL25leHRvZnUvLi9yZWR1eC9hY3Rpb25zL3Jvb21BY3Rpb25zLmpzIiwid2VicGFjazovL25leHRvZnUvLi9yZWR1eC9jb25zdGFudHMvcm9vbVR5cGVzLmpzIiwid2VicGFjazovL25leHRvZnUvLi9yZWR1eC9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly9uZXh0b2Z1Ly4vcmVkdXgvcmVkdWNlcnMvcm9vbVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vbmV4dG9mdS8uL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovL25leHRvZnUvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL25leHRvZnUvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL25leHRvZnUvZXh0ZXJuYWwgXCJuZXh0LWFic29sdXRlLXVybFwiIiwid2VicGFjazovL25leHRvZnUvZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9uZXh0b2Z1L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9uZXh0b2Z1L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0b2Z1L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbmV4dG9mdS9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vbmV4dG9mdS9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovL25leHRvZnUvZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbIlNlYXJjaCIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJ1c2VTdGF0ZSIsImd1ZXN0cyIsInNldEd1ZXN0cyIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsInB1c2giLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIm51bSIsImdldFNlcnZlclNpZGVQcm9wcyIsIndyYXBwZXIiLCJzdG9yZSIsInJlcSIsInF1ZXJ5IiwiZGlzcGF0Y2giLCJnZXRSb29tcyIsInBhZ2UiLCJjdXJyZW50UGFnZSIsIm9yaWdpbiIsImFic29sdXRlVXJsIiwibGluayIsImNvbmNhdCIsImRhdGEiLCJheGlvcyIsInR5cGUiLCJBTExfUk9PTVNfU1VDQ0VTUyIsInBheWxvYWQiLCJlcnJvciIsIkFMTF9ST09NU19GQUlMIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiY2xlYXJFcnJvcnMiLCJDTEVBUl9FUlJPUlMiLCJnZXRSb29tRGV0YWlscyIsImlkIiwidXJsIiwiUk9PTV9ERVRBSUxTX1NVQ0NFU1MiLCJyb29tIiwiUk9PTV9ERVRBSUxTX0ZBSUwiLCJORVdfUkVWSUVXX1JFUVVFU1QiLCJORVdfUkVWSUVXX1NVQ0NFU1MiLCJORVdfUkVWSUVXX1JFU0VUIiwiTkVXX1JFVklFV19GQUlMIiwiUkVWSUVXX0FWQUlMQUJMRV9SRVFVRVNUIiwiUkVWSUVXX0FWQUlMQUJMRV9TVUNDRVNTIiwiUkVWSUVXX0FWQUlMQUJMRV9GQUlMIiwiQURNSU5fUk9PTVNfUkVRVUVTVCIsIkFETUlOX1JPT01TX1NVQ0NFU1MiLCJBRE1JTl9ST09NU19GQUlMIiwiTkVXX1JPT01fUkVRVUVTVCIsIk5FV19ST09NX1NVQ0NFU1MiLCJORVdfUk9PTV9SRVNFVCIsIk5FV19ST09NX0ZBSUwiLCJVUERBVEVfUk9PTV9SRVFVRVNUIiwiVVBEQVRFX1JPT01fU1VDQ0VTUyIsIlVQREFURV9ST09NX1JFU0VUIiwiVVBEQVRFX1JPT01fRkFJTCIsIkRFTEVURV9ST09NX1JFUVVFU1QiLCJERUxFVEVfUk9PTV9TVUNDRVNTIiwiREVMRVRFX1JPT01fUkVTRVQiLCJERUxFVEVfUk9PTV9GQUlMIiwiR0VUX1JFVklFV1NfUkVRVUVTVCIsIkdFVF9SRVZJRVdTX1NVQ0NFU1MiLCJHRVRfUkVWSUVXU19GQUlMIiwiREVMRVRFX1JFVklFV19SRVFVRVNUIiwiREVMRVRFX1JFVklFV19TVUNDRVNTIiwiREVMRVRFX1JFVklFV19SRVNFVCIsIkRFTEVURV9SRVZJRVdfRkFJTCIsInJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJhbGxSb29tcyIsImFsbFJvb21zUmVkdWNlciIsInJvb21EZXRhaWxzIiwicm9vbURldGFpbHNSZWR1Y2VyIiwic3RhdGUiLCJyb29tcyIsImFjdGlvbiIsInJvb21zQ291bnQiLCJyZXNQZXJQYWdlIiwiZmlsdGVyZWRSb29tc0NvdW50IiwiY29tYmluZU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInJlcXVpcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJIWURSQVRFIiwibmV4dFN0YXRlIiwicmVkdWNlcnMiLCJpbml0U3RvcmUiLCJjcmVhdGVTdG9yZSIsInRodW5rIiwiY3JlYXRlV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDbkIsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JGLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDRyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkosK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBRUEsUUFBTUssTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFFQSxRQUFNQyxhQUFhLEdBQUlDLENBQUQsSUFBTztBQUMzQkEsS0FBQyxDQUFDQyxjQUFGOztBQUVBLFFBQUlYLFFBQVEsQ0FBQ1ksSUFBVCxFQUFKLEVBQXFCO0FBQ25CTCxZ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QTJDO0FBQ3pDLFVBQU07QUFBRUM7QUFBRixRQUEwQkMsbUJBQU8sQ0FBQywwREFBRCxDQUF2Qzs7QUFDQSxXQUFPRCxtQkFBbUIsQ0FBQ0Usc0RBQWUsQ0FBQyxHQUFHSCxVQUFKLENBQWhCLENBQTFCO0FBQ0Q7O0FBQ0QsU0FBT0csc0RBQWUsQ0FBQyxHQUFHSCxVQUFKLENBQXRCO0FBQ0QsQ0FORDs7QUFRQSxNQUFNYixPQUFPLEdBQUcsQ0FBQ00sS0FBRCxFQUFRRSxNQUFSLEtBQW1CO0FBQ2pDLE1BQUlBLE1BQU0sQ0FBQ3BELElBQVAsS0FBZ0I2RCx1REFBcEIsRUFBNkI7QUFDM0IsVUFBTUMsU0FBUyxtQ0FDVlosS0FEVSxHQUVWRSxNQUFNLENBQUNsRCxPQUZHLENBQWY7O0FBSUEsV0FBTzRELFNBQVA7QUFDRCxHQU5ELE1BTU87QUFDTCxXQUFPQyxrREFBUSxDQUFDYixLQUFELEVBQVFFLE1BQVIsQ0FBZjtBQUNEO0FBQ0YsQ0FWRDs7QUFZQSxNQUFNWSxTQUFTLEdBQUcsTUFBTTtBQUN0QixTQUFPQyxrREFBVyxDQUFDckIsT0FBRCxFQUFVWSxpQkFBaUIsQ0FBQyxDQUFDVSxvREFBRCxDQUFELENBQTNCLENBQWxCO0FBQ0QsQ0FGRDs7QUFJTyxNQUFNaEYsT0FBTyxHQUFHaUYsaUVBQWEsQ0FBQ0gsU0FBRCxDQUE3QixDOzs7Ozs7Ozs7OztBQzdCUCwrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9zZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbixcclxuICBDb250YWluZXIsXHJcbiAgRm9ybUNvbnRyb2wsXHJcbiAgRm9ybUdyb3VwLFxyXG4gIEZvcm1MYWJlbCxcclxuICBHcmlkLFxyXG4gIE1lbnVJdGVtLFxyXG4gIFNlbGVjdCxcclxuICBUZXh0RmllbGQsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCJcclxuaW1wb3J0IHsgSW5wdXRMYWJlbCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiXHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIlxyXG5pbXBvcnQgeyBnZXRSb29tcyB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL3Jvb21BY3Rpb25zXCJcclxuXHJcbmNvbnN0IFNlYXJjaCA9ICgpID0+IHtcclxuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2d1ZXN0cywgc2V0R3Vlc3RzXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIGlmIChsb2NhdGlvbi50cmltKCkpIHtcclxuICAgICAgcm91dGVyLnB1c2goXHJcbiAgICAgICAgYC8/bG9jYXRpb249JHtsb2NhdGlvbn0mZ3Vlc3RzPSR7Z3Vlc3RzfSZjYXRlZ29yeT0ke2NhdGVnb3J5fWBcclxuICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgIDxDb250YWluZXIgY29tcG9uZW50PVwibWFpblwiIG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNoYWRvdy1sZ1wiIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi0zXCI+U2VhcmNoIFJvb21zPC9oMj5cclxuICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cImxvY2F0aW9uX2ZpZWxkXCI+TG9jYXRpb248L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibG9jYXRpb25fZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibmV3IHlvcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsb2NhdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExvY2F0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwiZ3Vlc3RfZmllbGRcIj5Oby4gb2YgR3Vlc3RzPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImd1ZXN0X2ZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Z3Vlc3RzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0R3Vlc3RzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtbMSwgMiwgMywgNCwgNSwgNl0ubWFwKChudW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e251bX0gdmFsdWU9e251bX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtudW19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwicm9vbV90eXBlX2ZpZWxkXCI+Um9vbSBUeXBlPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInJvb21fdHlwZV9maWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge1tcIktpbmdcIiwgXCJTaW5nbGVcIiwgXCJUd2luc1wiXS5tYXAoKGNhdGVnb3J5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtjYXRlZ29yeX0gdmFsdWU9e2NhdGVnb3J5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBweS0yXCIgZnVsbFdpZHRoPlxyXG4gICAgICAgICAgICAgICAgICBTZWFyY2hcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhcclxuICAoc3RvcmUpID0+XHJcbiAgICBhc3luYyAoeyByZXEsIHF1ZXJ5IH0pID0+IHtcclxuICAgICAgYXdhaXQgc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgZ2V0Um9vbXMocmVxLCBxdWVyeS5wYWdlLCBxdWVyeS5sb2NhdGlvbiwgcXVlcnkuZ3Vlc3RzLCBxdWVyeS5jYXRlZ29yeSlcclxuICAgICAgKVxyXG4gICAgfVxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgYWJzb2x1dGVVcmwgZnJvbSBcIm5leHQtYWJzb2x1dGUtdXJsXCJcbmltcG9ydCB7XG4gIEFETUlOX1JPT01TX0ZBSUwsXG4gIEFETUlOX1JPT01TX1JFUVVFU1QsXG4gIEFETUlOX1JPT01TX1NVQ0NFU1MsXG4gIEFMTF9ST09NU19GQUlMLFxuICBBTExfUk9PTVNfU1VDQ0VTUyxcbiAgQ0xFQVJfRVJST1JTLFxuICBERUxFVEVfUkVWSUVXX0ZBSUwsXG4gIERFTEVURV9SRVZJRVdfUkVRVUVTVCxcbiAgREVMRVRFX1JFVklFV19TVUNDRVNTLFxuICBERUxFVEVfUk9PTV9GQUlMLFxuICBERUxFVEVfUk9PTV9SRVFVRVNULFxuICBERUxFVEVfUk9PTV9TVUNDRVNTLFxuICBHRVRfUkVWSUVXU19GQUlMLFxuICBHRVRfUkVWSUVXU19SRVFVRVNULFxuICBHRVRfUkVWSUVXU19TVUNDRVNTLFxuICBORVdfUkVWSUVXX0ZBSUwsXG4gIE5FV19SRVZJRVdfUkVRVUVTVCxcbiAgTkVXX1JFVklFV19TVUNDRVNTLFxuICBORVdfUk9PTV9GQUlMLFxuICBORVdfUk9PTV9SRVFVRVNULFxuICBORVdfUk9PTV9TVUNDRVNTLFxuICBSRVZJRVdfQVZBSUxBQkxFX0ZBSUwsXG4gIFJFVklFV19BVkFJTEFCTEVfUkVRVUVTVCxcbiAgUkVWSUVXX0FWQUlMQUJMRV9TVUNDRVNTLFxuICBST09NX0RFVEFJTFNfU1VDQ0VTUyxcbiAgVVBEQVRFX1JPT01fRkFJTCxcbiAgVVBEQVRFX1JPT01fUkVRVUVTVCxcbiAgVVBEQVRFX1JPT01fU1VDQ0VTUyxcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9yb29tVHlwZXNcIlxuXG5leHBvcnQgY29uc3QgZ2V0Um9vbXMgPVxuICAocmVxLCBjdXJyZW50UGFnZSA9IDEsIGxvY2F0aW9uID0gXCJcIiwgZ3Vlc3RzLCBjYXRlZ29yeSkgPT5cbiAgYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vYWJzb2x1dGVVcmwgPSBmb3IgcHJlIHJlbmRlciBhbGwgcm9vbXMgcHJvdmlkZSBhYnNvbHV0ZSBwYXRoXG5cbiAgICAgIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpXG5cbiAgICAgIGxldCBsaW5rID0gYCR7b3JpZ2lufS9hcGkvcm9vbXMvcm9vbXM/cGFnZT0ke2N1cnJlbnRQYWdlfSZsb2NhdGlvbj0ke2xvY2F0aW9ufWBcblxuICAgICAgaWYgKGd1ZXN0cykge1xuICAgICAgICBsaW5rID0gbGluay5jb25jYXQoYCZndWVzdENhcGFjaXR5PSR7Z3Vlc3RzfWApXG4gICAgICB9XG4gICAgICBpZiAoY2F0ZWdvcnkpIHtcbiAgICAgICAgbGluayA9IGxpbmsuY29uY2F0KGAmY2F0ZWdvcnk9JHtjYXRlZ29yeX1gKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChsaW5rKVxuXG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEFMTF9ST09NU19TVUNDRVNTLFxuICAgICAgICBwYXlsb2FkOiBkYXRhLFxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBTExfUk9PTVNfRkFJTCwgcGF5bG9hZDogZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlIH0pXG4gICAgfVxuICB9XG5cbmV4cG9ydCBjb25zdCBjbGVhckVycm9ycyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogQ0xFQVJfRVJST1JTLFxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Um9vbURldGFpbHMgPSAocmVxLCBpZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpXG5cbiAgbGV0IHVybCA9IHJlcVxuXG4gIGlmIChyZXEpIHtcbiAgICB1cmwgPSBgJHtvcmlnaW59L2FwaS9yb29tcy8ke2lkfWBcbiAgfSBlbHNlIHtcbiAgICB1cmwgPSBgL2FwaS9yb29tcy8ke2lkfWBcbiAgfVxuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KHVybClcbiAgdHJ5IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFJPT01fREVUQUlMU19TVUNDRVNTLCBwYXlsb2FkOiBkYXRhLnJvb20gfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBST09NX0RFVEFJTFNfRkFJTCxcbiAgICAgIHBheWxvYWQ6IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICB9KVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgQUxMX1JPT01TX1NVQ0NFU1MgPSBcIkFMTF9ST09NU19TVUNDRVNTXCJcbmV4cG9ydCBjb25zdCBBTExfUk9PTVNfRkFJTCA9IFwiQUxMX1JPT01TX0ZBSUxcIlxuXG5leHBvcnQgY29uc3QgUk9PTV9ERVRBSUxTX1NVQ0NFU1MgPSBcIlJPT01fREVUQUlMU19TVUNDRVNTXCJcbmV4cG9ydCBjb25zdCBST09NX0RFVEFJTFNfRkFJTCA9IFwiUk9PTV9ERVRBSUxTX0ZBSUxcIlxuZXhwb3J0IGNvbnN0IENMRUFSX0VSUk9SUyA9IFwiQ0xFQVJfRVJST1JTXCJcblxuZXhwb3J0IGNvbnN0IE5FV19SRVZJRVdfUkVRVUVTVCA9IFwiTkVXX1JFVklFV19SRVFVRVNUXCJcbmV4cG9ydCBjb25zdCBORVdfUkVWSUVXX1NVQ0NFU1MgPSBcIk5FV19SRVZJRVdfU1VDQ0VTU1wiXG5leHBvcnQgY29uc3QgTkVXX1JFVklFV19SRVNFVCA9IFwiTkVXX1JFVklFV19SRVNFVFwiXG5leHBvcnQgY29uc3QgTkVXX1JFVklFV19GQUlMID0gXCJORVdfUkVWSUVXX0ZBSUxcIlxuXG5leHBvcnQgY29uc3QgUkVWSUVXX0FWQUlMQUJMRV9SRVFVRVNUID0gXCJSRVZJRVdfQVZBSUxBQkxFX1JFUVVFU1RcIlxuZXhwb3J0IGNvbnN0IFJFVklFV19BVkFJTEFCTEVfU1VDQ0VTUyA9IFwiUkVWSUVXX0FWQUlMQUJMRV9TVUNDRVNTXCJcbmV4cG9ydCBjb25zdCBSRVZJRVdfQVZBSUxBQkxFX0ZBSUwgPSBcIlJFVklFV19BVkFJTEFCTEVfRkFJTFwiXG5cbmV4cG9ydCBjb25zdCBBRE1JTl9ST09NU19SRVFVRVNUID0gXCJBRE1JTl9ST09NU19SRVFVRVNUXCJcbmV4cG9ydCBjb25zdCBBRE1JTl9ST09NU19TVUNDRVNTID0gXCJBRE1JTl9ST09NU19TVUNDRVNTXCJcbmV4cG9ydCBjb25zdCBBRE1JTl9ST09NU19GQUlMID0gXCJBRE1JTl9ST09NU19GQUlMXCJcblxuZXhwb3J0IGNvbnN0IE5FV19ST09NX1JFUVVFU1QgPSBcIk5FV19ST09NX1JFUVVFU1RcIlxuZXhwb3J0IGNvbnN0IE5FV19ST09NX1NVQ0NFU1MgPSBcIk5FV19ST09NX1NVQ0NFU1NcIlxuZXhwb3J0IGNvbnN0IE5FV19ST09NX1JFU0VUID0gXCJORVdfUk9PTV9SRVNFVFwiXG5leHBvcnQgY29uc3QgTkVXX1JPT01fRkFJTCA9IFwiTkVXX1JPT01fRkFJTFwiXG5cbmV4cG9ydCBjb25zdCBVUERBVEVfUk9PTV9SRVFVRVNUID0gXCJVUERBVEVfUk9PTV9SRVFVRVNUXCJcbmV4cG9ydCBjb25zdCBVUERBVEVfUk9PTV9TVUNDRVNTID0gXCJVUERBVEVfUk9PTV9TVUNDRVNTXCJcbmV4cG9ydCBjb25zdCBVUERBVEVfUk9PTV9SRVNFVCA9IFwiVVBEQVRFX1JPT01fUkVTRVRcIlxuZXhwb3J0IGNvbnN0IFVQREFURV9ST09NX0ZBSUwgPSBcIlVQREFURV9ST09NX0ZBSUxcIlxuXG5leHBvcnQgY29uc3QgREVMRVRFX1JPT01fUkVRVUVTVCA9IFwiREVMRVRFX1JPT01fUkVRVUVTVFwiXG5leHBvcnQgY29uc3QgREVMRVRFX1JPT01fU1VDQ0VTUyA9IFwiREVMRVRFX1JPT01fU1VDQ0VTU1wiXG5leHBvcnQgY29uc3QgREVMRVRFX1JPT01fUkVTRVQgPSBcIkRFTEVURV9ST09NX1JFU0VUXCJcbmV4cG9ydCBjb25zdCBERUxFVEVfUk9PTV9GQUlMID0gXCJERUxFVEVfUk9PTV9GQUlMXCJcblxuZXhwb3J0IGNvbnN0IEdFVF9SRVZJRVdTX1JFUVVFU1QgPSBcIkdFVF9SRVZJRVdTX1JFUVVFU1RcIlxuZXhwb3J0IGNvbnN0IEdFVF9SRVZJRVdTX1NVQ0NFU1MgPSBcIkdFVF9SRVZJRVdTX1NVQ0NFU1NcIlxuZXhwb3J0IGNvbnN0IEdFVF9SRVZJRVdTX0ZBSUwgPSBcIkdFVF9SRVZJRVdTX0ZBSUxcIlxuXG5leHBvcnQgY29uc3QgREVMRVRFX1JFVklFV19SRVFVRVNUID0gXCJERUxFVEVfUkVWSUVXX1JFUVVFU1RcIlxuZXhwb3J0IGNvbnN0IERFTEVURV9SRVZJRVdfU1VDQ0VTUyA9IFwiREVMRVRFX1JFVklFV19TVUNDRVNTXCJcbmV4cG9ydCBjb25zdCBERUxFVEVfUkVWSUVXX1JFU0VUID0gXCJERUxFVEVfUkVWSUVXX1JFU0VUXCJcbmV4cG9ydCBjb25zdCBERUxFVEVfUkVWSUVXX0ZBSUwgPSBcIkRFTEVURV9SRVZJRVdfRkFJTFwiXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIlxuaW1wb3J0IHsgYWxsUm9vbXNSZWR1Y2VyLCByb29tRGV0YWlsc1JlZHVjZXIgfSBmcm9tIFwiLi9yZWR1Y2Vycy9yb29tUmVkdWNlclwiXG5cbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBhbGxSb29tczogYWxsUm9vbXNSZWR1Y2VyLFxuICByb29tRGV0YWlsczogcm9vbURldGFpbHNSZWR1Y2VyLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuIiwiaW1wb3J0IHtcbiAgQUxMX1JPT01TX0ZBSUwsXG4gIEFMTF9ST09NU19TVUNDRVNTLFxuICBST09NX0RFVEFJTFNfU1VDQ0VTUyxcbiAgUk9PTV9ERVRBSUxTX0ZBSUwsXG4gIENMRUFSX0VSUk9SUyxcbiAgTkVXX1JFVklFV19TVUNDRVNTLFxuICBORVdfUkVWSUVXX0ZBSUwsXG4gIE5FV19SRVZJRVdfUkVTRVQsXG4gIE5FV19SRVZJRVdfUkVRVUVTVCxcbiAgUkVWSUVXX0FWQUlMQUJMRV9SRVFVRVNULFxuICBSRVZJRVdfQVZBSUxBQkxFX1NVQ0NFU1MsXG4gIFJFVklFV19BVkFJTEFCTEVfRkFJTCxcbiAgQURNSU5fUk9PTVNfUkVRVUVTVCxcbiAgQURNSU5fUk9PTVNfRkFJTCxcbiAgQURNSU5fUk9PTVNfU1VDQ0VTUyxcbiAgTkVXX1JPT01fUkVRVUVTVCxcbiAgTkVXX1JPT01fU1VDQ0VTUyxcbiAgTkVXX1JPT01fRkFJTCxcbiAgTkVXX1JPT01fUkVTRVQsXG4gIFVQREFURV9ST09NX1JFUVVFU1QsXG4gIFVQREFURV9ST09NX1NVQ0NFU1MsXG4gIFVQREFURV9ST09NX0ZBSUwsXG4gIFVQREFURV9ST09NX1JFU0VULFxuICBERUxFVEVfUk9PTV9SRVFVRVNULFxuICBERUxFVEVfUk9PTV9TVUNDRVNTLFxuICBERUxFVEVfUk9PTV9GQUlMLFxuICBERUxFVEVfUk9PTV9SRVNFVCxcbiAgR0VUX1JFVklFV1NfUkVRVUVTVCxcbiAgR0VUX1JFVklFV1NfU1VDQ0VTUyxcbiAgR0VUX1JFVklFV1NfRkFJTCxcbiAgREVMRVRFX1JFVklFV19SRVFVRVNULFxuICBERUxFVEVfUkVWSUVXX1NVQ0NFU1MsXG4gIERFTEVURV9SRVZJRVdfRkFJTCxcbiAgREVMRVRFX1JFVklFV19SRVNFVCxcbn0gZnJvbSBcIi4uL2NvbnN0YW50cy9yb29tVHlwZXNcIlxuXG5leHBvcnQgY29uc3QgYWxsUm9vbXNSZWR1Y2VyID0gKHN0YXRlID0geyByb29tczogW10gfSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFMTF9ST09NU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm9vbXNDb3VudDogYWN0aW9uLnBheWxvYWQucm9vbXNDb3VudCxcbiAgICAgICAgcmVzUGVyUGFnZTogYWN0aW9uLnBheWxvYWQucmVzUGVyUGFnZSxcbiAgICAgICAgZmlsdGVyZWRSb29tc0NvdW50OiBhY3Rpb24ucGF5bG9hZC5maWx0ZXJlZFJvb21zQ291bnQsXG4gICAgICAgIHJvb21zOiBhY3Rpb24ucGF5bG9hZC5yb29tcyxcbiAgICAgIH1cbiAgICBjYXNlIEFMTF9ST09NU19GQUlMOlxuICAgICAgcmV0dXJuIHsgZXJyb3I6IGFjdGlvbi5wYXlsb2FkIH1cbiAgICBjYXNlIENMRUFSX0VSUk9SUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvcjogbnVsbCB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJvb21EZXRhaWxzUmVkdWNlciA9IChzdGF0ZSA9IHsgcm9vbToge30gfSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJPT01fREVUQUlMU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsgcm9vbTogYWN0aW9uLnBheWxvYWQgfVxuICAgIGNhc2UgUk9PTV9ERVRBSUxTX0ZBSUw6XG4gICAgICByZXR1cm4geyBlcnJvcjogYWN0aW9uLnBheWxvYWQgfVxuICAgIGNhc2UgQ0xFQVJfRVJST1JTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBudWxsIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiXG5pbXBvcnQgeyBIWURSQVRFLCBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCJcbmltcG9ydCByZWR1Y2VycyBmcm9tIFwiLi9yZWR1Y2Vyc1wiXG5cbmNvbnN0IGNvbWJpbmVNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmUpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbnN0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9ID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKVxuICAgIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcbiAgfVxuICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpXG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcbiAgICBjb25zdCBuZXh0U3RhdGUgPSB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgIH1cbiAgICByZXR1cm4gbmV4dFN0YXRlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlZHVjZXJzKHN0YXRlLCBhY3Rpb24pXG4gIH1cbn1cblxuY29uc3QgaW5pdFN0b3JlID0gKCkgPT4ge1xuICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgY29tYmluZU1pZGRsZXdhcmUoW3RodW5rXSkpXG59XG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihpbml0U3RvcmUpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYWJzb2x1dGUtdXJsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==