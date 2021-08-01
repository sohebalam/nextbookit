(function() {
var exports = {};
exports.id = "pages/api/rooms/rooms";
exports.ids = ["pages/api/rooms/rooms"];
exports.modules = {

/***/ "./connectDB.js":
/*!**********************!*\
  !*** ./connectDB.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


const connectDB = async () => {
  if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) >= 1) {
    return;
  }

  mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.DB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  }).then(con => console.log("connected to DB"));
};

/* harmony default export */ __webpack_exports__["default"] = (connectDB);

/***/ }),

/***/ "./controllers/roomCont.js":
/*!*********************************!*\
  !*** ./controllers/roomCont.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRoomReview": function() { return /* binding */ createRoomReview; },
/* harmony export */   "checkReviewAuth": function() { return /* binding */ checkReviewAuth; },
/* harmony export */   "allAdminRooms": function() { return /* binding */ allAdminRooms; },
/* harmony export */   "getRoomReviews": function() { return /* binding */ getRoomReviews; },
/* harmony export */   "deleteReview": function() { return /* binding */ deleteReview; },
/* harmony export */   "allRooms": function() { return /* binding */ allRooms; },
/* harmony export */   "newRoom": function() { return /* binding */ newRoom; },
/* harmony export */   "getSingleRoom": function() { return /* binding */ getSingleRoom; },
/* harmony export */   "updateRoom": function() { return /* binding */ updateRoom; },
/* harmony export */   "deleteRoom": function() { return /* binding */ deleteRoom; }
/* harmony export */ });
/* harmony import */ var _models_roomModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/roomModel */ "./models/roomModel.js");
/* harmony import */ var _utils_errorHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/errorHandler */ "./utils/errorHandler.js");
/* harmony import */ var _middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middlewares/catchAsyncErrors */ "./middlewares/catchAsyncErrors.js");
/* harmony import */ var _utils_apiFeatures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/apiFeatures */ "./utils/apiFeatures.js");
 // import Booking from "../models/bookingModel"
// import cloudinary from "cloudinary"



 // Create all rooms   =>   /api/rooms

const allRooms = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_2__.default)(async (req, res) => {
  const resPerPage = 4;
  const roomsCount = await _models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.countDocuments();
  const apiFeatures = new _utils_apiFeatures__WEBPACK_IMPORTED_MODULE_3__.default(_models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.find(), req.query).search().filter();
  let rooms = await apiFeatures.query;
  let filteredRoomsCount = rooms.length;
  apiFeatures.pagination(resPerPage);
  rooms = await apiFeatures.query;
  res.status(200).json({
    success: true,
    roomsCount,
    resPerPage,
    filteredRoomsCount,
    rooms
  });
}); // Create new room   =>   /api/rooms

const newRoom = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_2__.default)(async (req, res) => {
  // const images = req.body.images
  // let imagesLinks = []
  // for (let i = 0; i < images.length; i++) {
  //   const result = await cloudinary.v2.uploader.upload(images[i], {
  //     folder: "bookit/rooms",
  //   })
  //   imagesLinks.push({
  //     public_id: result.public_id,
  //     url: result.secure_url,
  //   })
  // }
  // req.body.images = imagesLinks
  // req.body.user = req.user._id
  const room = await _models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.create(req.body);
  res.status(200).json({
    success: true,
    room
  });
}); // Get room details   =>   /api/rooms/:id

const getSingleRoom = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_2__.default)(async (req, res, next) => {
  const room = await _models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.findById(req.query.id);

  if (!room) {
    return next(new _utils_errorHandler__WEBPACK_IMPORTED_MODULE_1__.default("Room not found with this ID", 404));
  }

  res.status(200).json({
    success: true,
    room
  });
}); // Update room details   =>   /api/rooms/:id

const updateRoom = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_2__.default)(async (req, res, next) => {
  console.log(req.body);
  let room = await _models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.findById(req.query.id);

  if (!room) {
    return next(new _utils_errorHandler__WEBPACK_IMPORTED_MODULE_1__.default("Room not found with this ID", 404));
  } // if (req.body.images) {
  //   // Delete images associated with the room
  //   for (let i = 0; i < room.images.length; i++) {
  //     await cloudinary.v2.uploader.destroy(room.images[i].public_id)
  //   }
  //   let imagesLinks = []
  //   const images = req.body.images
  //   for (let i = 0; i < images.length; i++) {
  //     const result = await cloudinary.v2.uploader.upload(images[i], {
  //       folder: "bookit/rooms",
  //     })
  //     imagesLinks.push({
  //       public_id: result.public_id,
  //       url: result.secure_url,
  //     })
  //   }
  // req.body.images = imagesLinks
  // }


  let newRoom = await _models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.findByIdAndUpdate(req.query.id, req.body, {
    runValidators: true,
    useFindAndModify: false
  });
  res.status(200).json({
    success: true,
    newRoom
  });
}); // Delete room   =>   /api/rooms/:id

const deleteRoom = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_2__.default)(async (req, res, next) => {
  const room = await _models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.findById(req.query.id);

  if (!room) {
    return next(new _utils_errorHandler__WEBPACK_IMPORTED_MODULE_1__.default("Room not found with this ID", 404));
  } // Delete images associated with the room
  // for (let i = 0; i < room.images.length; i++) {
  //   await cloudinary.v2.uploader.destroy(room.images[i].public_id)
  // }


  await room.remove();
  res.status(200).json({
    success: true,
    message: "Room is deleted."
  });
}); // Create a new review   =>   /api/reviews

const createRoomReview = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_2__.default)(async (req, res) => {
  const {
    rating,
    comment,
    roomId
  } = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment
  };
  const room = await _models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.findById(roomId);
  const isReviewed = room.reviews.find(r => r.user.toString() === req.user._id.toString());

  if (isReviewed) {
    room.reviews.forEach(review => {
      if (review.user.toString() === req.user._id.toString()) {
        review.comment = comment;
        review.rating = rating;
      }
    });
  } else {
    room.reviews.push(review);
    room.numOfReviews = room.reviews.length;
  }

  room.ratings = room.reviews.reduce((acc, item) => item.rating + acc, 0) / room.reviews.length;
  await room.save({
    validateBeforeSave: false
  });
  res.status(200).json({
    success: true
  });
});
const checkReviewAuth = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_2__.default)(async (req, res) => {
  const {
    roomId
  } = req.query;
  const bookings = await Booking.find({
    user: req.user._id,
    room: roomId
  });
  let isReviewAvailable = false;
  if (bookings.length > 0) isReviewAvailable = true;
  res.status(200).json({
    success: true,
    isReviewAvailable
  });
});
const allAdminRooms = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_2__.default)(async (req, res) => {
  const rooms = await _models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.find();
  res.status(200).json({
    success: true,
    rooms
  });
});
const getRoomReviews = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_2__.default)(async (req, res) => {
  const room = await _models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.findById(req.query.id);
  res.status(200).json({
    success: true,
    reviews: room.reviews
  });
});
const deleteReview = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_2__.default)(async (req, res) => {
  const room = await _models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.findById(req.query.roomId);
  const reviews = room.reviews.filter(review => review._id.toString() !== req.query.id.toString());
  const numOfReviews = reviews.length;
  const ratings = room.reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;
  await _models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.findByIdAndUpdate(req.query.roomId, {
    reviews,
    ratings,
    numOfReviews
  }, {
    new: true,
    runValidators: true,
    useFindAndModify: false
  });
  res.status(200).json({
    success: true
  });
});


/***/ }),

/***/ "./middlewares/catchAsyncErrors.js":
/*!*****************************************!*\
  !*** ./middlewares/catchAsyncErrors.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (func => (req, res, next) => Promise.resolve(func(req, res, next)).catch(next));

/***/ }),

/***/ "./middlewares/error.js":
/*!******************************!*\
  !*** ./middlewares/error.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_errorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/errorHandler */ "./utils/errorHandler.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  let error = _objectSpread({}, err);

  error.message = err.message; // Wrong Mongoose Object ID Error

  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    error = new _utils_errorHandler__WEBPACK_IMPORTED_MODULE_0__.default(message, 400);
  } // Handling mongoose Validation error


  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map(value => value.message);
    error = new _utils_errorHandler__WEBPACK_IMPORTED_MODULE_0__.default(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack
  });
});

/***/ }),

/***/ "./models/roomModel.js":
/*!*****************************!*\
  !*** ./models/roomModel.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const roomSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  name: {
    type: String,
    required: [true, "Please enter room name"],
    trim: true,
    maxLength: [100, "Room name cannot exceed 100 characters"]
  },
  pricePerNight: {
    type: Number,
    required: [true, "Please enter room price per night"],
    maxLength: [4, "Room name cannot exceed 4 characters"],
    default: 0.0
  },
  description: {
    type: String,
    required: [true, "Please enter room description"]
  },
  address: {
    type: String,
    required: [true, "Please enter room address"]
  },
  guestCapacity: {
    type: Number,
    required: [true, "Please enter room guest capacity"]
  },
  numOfBeds: {
    type: Number,
    required: [true, "Please enter number of beds in room"]
  },
  internet: {
    type: Boolean,
    default: false
  },
  breakfast: {
    type: Boolean,
    default: false
  },
  airConditioned: {
    type: Boolean,
    default: false
  },
  petsAllowed: {
    type: Boolean,
    default: false
  },
  roomCleaning: {
    type: Boolean,
    default: false
  },
  ratings: {
    type: Number,
    default: 0
  },
  numOfReviews: {
    type: Number,
    default: 0
  },
  images: [{
    public_id: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }],
  category: {
    type: String,
    required: [true, "Please enter room category"],
    enum: {
      values: ["King", "Single", "Twins"],
      message: "Please select correct category for room"
    }
  },
  reviews: [{
    user: {
      type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.ObjectId),
      ref: "User",
      required: true
    },
    name: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  }],
  user: {
    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.ObjectId),
    ref: "User" // required: false,

  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const Room = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Room) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Room", roomSchema);
/* harmony default export */ __webpack_exports__["default"] = (Room);

/***/ }),

/***/ "./pages/api/rooms/rooms.js":
/*!**********************************!*\
  !*** ./pages/api/rooms/rooms.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_roomCont__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../controllers/roomCont */ "./controllers/roomCont.js");
/* harmony import */ var _connectDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../connectDB */ "./connectDB.js");
/* harmony import */ var _middlewares_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../middlewares/error */ "./middlewares/error.js");




(0,_connectDB__WEBPACK_IMPORTED_MODULE_2__.default)();
const router = next_connect__WEBPACK_IMPORTED_MODULE_0___default()({
  onError: _middlewares_error__WEBPACK_IMPORTED_MODULE_3__.default
});
router.get(_controllers_roomCont__WEBPACK_IMPORTED_MODULE_1__.allRooms);
router.post(_controllers_roomCont__WEBPACK_IMPORTED_MODULE_1__.newRoom);
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./utils/apiFeatures.js":
/*!******************************!*\
  !*** ./utils/apiFeatures.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const location = this.queryStr.location ? {
      address: {
        $regex: this.queryStr.location,
        $options: "i"
      }
    } : {};
    this.query = this.query.find(_objectSpread({}, location));
    return this;
  }

  filter() {
    const queryCopy = _objectSpread({}, this.queryStr); // Remove fields from query


    const removeFields = ["location", "page"];
    removeFields.forEach(el => delete queryCopy[el]); // Advance filtering with gt, gte etc

    let filterQuery = {};
    const fieldsLength = Object.keys(queryCopy).length;

    for (let i = 0; i < fieldsLength; i++) {
      let queryStr = JSON.stringify(Object.keys(queryCopy)[i]);
      const filterField = queryStr.substring(1, queryStr.indexOf("["));

      if (filterField.length > 1) {
        const fieldValue = Object.values(queryCopy)[0];
        const filterOperator = queryStr.substring(queryStr.indexOf("[") + 1, queryStr.indexOf("]"));
        filterQuery = _objectSpread(_objectSpread({}, filterQuery), {}, {
          [filterField]: {
            [`$${filterOperator}`]: fieldValue
          }
        });
      } else {
        filterQuery = _objectSpread(_objectSpread({}, filterQuery), {}, {
          [Object.keys(queryCopy)[i]]: Object.values(queryCopy)[i]
        });
      }
    }

    this.query = this.query.find(filterQuery);
    return this;
  }

  pagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);
    this.query = this.query.limit(resPerPage).skip(skip);
    return this;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (APIFeatures);

/***/ }),

/***/ "./utils/errorHandler.js":
/*!*******************************!*\
  !*** ./utils/errorHandler.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ErrorHandler);

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-connect");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/rooms/rooms.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0b2Z1Ly4vY29ubmVjdERCLmpzIiwid2VicGFjazovL25leHRvZnUvLi9jb250cm9sbGVycy9yb29tQ29udC5qcyIsIndlYnBhY2s6Ly9uZXh0b2Z1Ly4vbWlkZGxld2FyZXMvY2F0Y2hBc3luY0Vycm9ycy5qcyIsIndlYnBhY2s6Ly9uZXh0b2Z1Ly4vbWlkZGxld2FyZXMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vbmV4dG9mdS8uL21vZGVscy9yb29tTW9kZWwuanMiLCJ3ZWJwYWNrOi8vbmV4dG9mdS8uL3BhZ2VzL2FwaS9yb29tcy9yb29tcy5qcyIsIndlYnBhY2s6Ly9uZXh0b2Z1Ly4vdXRpbHMvYXBpRmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vbmV4dG9mdS8uL3V0aWxzL2Vycm9ySGFuZGxlci5qcyIsIndlYnBhY2s6Ly9uZXh0b2Z1L2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly9uZXh0b2Z1L2V4dGVybmFsIFwibmV4dC1jb25uZWN0XCIiXSwibmFtZXMiOlsiY29ubmVjdERCIiwibW9uZ29vc2UiLCJwcm9jZXNzIiwiZW52IiwiREIiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlQ3JlYXRlSW5kZXgiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ0aGVuIiwiY29uIiwiY29uc29sZSIsImxvZyIsImFsbFJvb21zIiwiY2F0Y2hBc3luY0Vycm9ycyIsInJlcSIsInJlcyIsInJlc1BlclBhZ2UiLCJyb29tc0NvdW50IiwiUm9vbSIsImFwaUZlYXR1cmVzIiwiQVBJRmVhdHVyZXMiLCJxdWVyeSIsInNlYXJjaCIsImZpbHRlciIsInJvb21zIiwiZmlsdGVyZWRSb29tc0NvdW50IiwibGVuZ3RoIiwicGFnaW5hdGlvbiIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwibmV3Um9vbSIsInJvb20iLCJib2R5IiwiZ2V0U2luZ2xlUm9vbSIsIm5leHQiLCJpZCIsIkVycm9ySGFuZGxlciIsInVwZGF0ZVJvb20iLCJydW5WYWxpZGF0b3JzIiwiZGVsZXRlUm9vbSIsInJlbW92ZSIsIm1lc3NhZ2UiLCJjcmVhdGVSb29tUmV2aWV3IiwicmF0aW5nIiwiY29tbWVudCIsInJvb21JZCIsInJldmlldyIsInVzZXIiLCJfaWQiLCJuYW1lIiwiTnVtYmVyIiwiaXNSZXZpZXdlZCIsInJldmlld3MiLCJmaW5kIiwiciIsInRvU3RyaW5nIiwiZm9yRWFjaCIsInB1c2giLCJudW1PZlJldmlld3MiLCJyYXRpbmdzIiwicmVkdWNlIiwiYWNjIiwiaXRlbSIsInNhdmUiLCJ2YWxpZGF0ZUJlZm9yZVNhdmUiLCJjaGVja1Jldmlld0F1dGgiLCJib29raW5ncyIsIkJvb2tpbmciLCJpc1Jldmlld0F2YWlsYWJsZSIsImFsbEFkbWluUm9vbXMiLCJnZXRSb29tUmV2aWV3cyIsImRlbGV0ZVJldmlldyIsIm5ldyIsImZ1bmMiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwiZXJyIiwic3RhdHVzQ29kZSIsImVycm9yIiwicGF0aCIsIk9iamVjdCIsInZhbHVlcyIsImVycm9ycyIsIm1hcCIsInZhbHVlIiwic3RhY2siLCJyb29tU2NoZW1hIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidHJpbSIsIm1heExlbmd0aCIsInByaWNlUGVyTmlnaHQiLCJkZWZhdWx0IiwiZGVzY3JpcHRpb24iLCJhZGRyZXNzIiwiZ3Vlc3RDYXBhY2l0eSIsIm51bU9mQmVkcyIsImludGVybmV0IiwiQm9vbGVhbiIsImJyZWFrZmFzdCIsImFpckNvbmRpdGlvbmVkIiwicGV0c0FsbG93ZWQiLCJyb29tQ2xlYW5pbmciLCJpbWFnZXMiLCJwdWJsaWNfaWQiLCJ1cmwiLCJjYXRlZ29yeSIsImVudW0iLCJyZWYiLCJjcmVhdGVkQXQiLCJEYXRlIiwibm93Iiwicm91dGVyIiwibmMiLCJvbkVycm9yIiwiZ2V0IiwicG9zdCIsImNvbnN0cnVjdG9yIiwicXVlcnlTdHIiLCJsb2NhdGlvbiIsIiRyZWdleCIsIiRvcHRpb25zIiwicXVlcnlDb3B5IiwicmVtb3ZlRmllbGRzIiwiZWwiLCJmaWx0ZXJRdWVyeSIsImZpZWxkc0xlbmd0aCIsImtleXMiLCJpIiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbHRlckZpZWxkIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImZpZWxkVmFsdWUiLCJmaWx0ZXJPcGVyYXRvciIsImN1cnJlbnRQYWdlIiwicGFnZSIsInNraXAiLCJsaW1pdCIsIkVycm9yIiwiY2FwdHVyZVN0YWNrVHJhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsWUFBWTtBQUM1QixNQUFJQyx1RUFBQSxJQUFrQyxDQUF0QyxFQUF5QztBQUN2QztBQUNEOztBQUNEQSx5REFBQSxDQUNXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsRUFEdkIsRUFDMkI7QUFDdkJDLG1CQUFlLEVBQUUsSUFETTtBQUV2QkMsb0JBQWdCLEVBQUUsS0FGSztBQUd2QkMsa0JBQWMsRUFBRSxJQUhPO0FBSXZCQyxzQkFBa0IsRUFBRTtBQUpHLEdBRDNCLEVBT0dDLElBUEgsQ0FPU0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixDQVBqQjtBQVFELENBWkQ7O0FBY0EsK0RBQWVaLFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ2RBO0FBRUE7O0FBRUE7QUFDQTtDQUdBOztBQUNBLE1BQU1hLFFBQVEsR0FBR0Msc0VBQWdCLENBQUMsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3BELFFBQU1DLFVBQVUsR0FBRyxDQUFuQjtBQUVBLFFBQU1DLFVBQVUsR0FBRyxNQUFNQyxxRUFBQSxFQUF6QjtBQUVBLFFBQU1DLFdBQVcsR0FBRyxJQUFJQyx1REFBSixDQUFnQkYsMkRBQUEsRUFBaEIsRUFBNkJKLEdBQUcsQ0FBQ08sS0FBakMsRUFBd0NDLE1BQXhDLEdBQWlEQyxNQUFqRCxFQUFwQjtBQUVBLE1BQUlDLEtBQUssR0FBRyxNQUFNTCxXQUFXLENBQUNFLEtB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QUFhLEtBQUtBLEtBQUwsQ0FBV2lDLElBQVgsQ0FBZ0IwRSxXQUFoQixDQUFiO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRURyRyxZQUFVLENBQUNYLFVBQUQsRUFBYTtBQUNyQixVQUFNMkgsV0FBVyxHQUFHeEYsTUFBTSxDQUFDLEtBQUtzRSxRQUFMLENBQWNtQixJQUFmLENBQU4sSUFBOEIsQ0FBbEQ7QUFDQSxVQUFNQyxJQUFJLEdBQUc3SCxVQUFVLElBQUkySCxXQUFXLEdBQUcsQ0FBbEIsQ0FBdkI7QUFFQSxTQUFLdEgsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV3lILEtBQVgsQ0FBaUI5SCxVQUFqQixFQUE2QjZILElBQTdCLENBQWtDQSxJQUFsQyxDQUFiO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBakVlOztBQW9FbEIsK0RBQWV6SCxXQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BFQSxNQUFNaUIsWUFBTixTQUEyQjBHLEtBQTNCLENBQWlDO0FBQy9CdkIsYUFBVyxDQUFDOUUsT0FBRCxFQUFVcUMsVUFBVixFQUFzQjtBQUMvQixVQUFNckMsT0FBTjtBQUNBLFNBQUtxQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUVBZ0UsU0FBSyxDQUFDQyxpQkFBTixDQUF3QixJQUF4QixFQUE4QixLQUFLeEIsV0FBbkM7QUFDRDs7QUFOOEI7O0FBU2pDLCtEQUFlbkYsWUFBZixFOzs7Ozs7Ozs7OztBQ1RBLHNDOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InBhZ2VzL2FwaS9yb29tcy9yb29tcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIlxuXG5jb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPj0gMSkge1xuICAgIHJldHVyblxuICB9XG4gIG1vbmdvb3NlXG4gICAgLmNvbm5lY3QocHJvY2Vzcy5lbnYuREIsIHtcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgfSlcbiAgICAudGhlbigoY29uKSA9PiBjb25zb2xlLmxvZyhcImNvbm5lY3RlZCB0byBEQlwiKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCXG4iLCJpbXBvcnQgUm9vbSBmcm9tIFwiLi4vbW9kZWxzL3Jvb21Nb2RlbFwiXG5cbi8vIGltcG9ydCBCb29raW5nIGZyb20gXCIuLi9tb2RlbHMvYm9va2luZ01vZGVsXCJcblxuLy8gaW1wb3J0IGNsb3VkaW5hcnkgZnJvbSBcImNsb3VkaW5hcnlcIlxuXG5pbXBvcnQgRXJyb3JIYW5kbGVyIGZyb20gXCIuLi91dGlscy9lcnJvckhhbmRsZXJcIlxuaW1wb3J0IGNhdGNoQXN5bmNFcnJvcnMgZnJvbSBcIi4uL21pZGRsZXdhcmVzL2NhdGNoQXN5bmNFcnJvcnNcIlxuaW1wb3J0IEFQSUZlYXR1cmVzIGZyb20gXCIuLi91dGlscy9hcGlGZWF0dXJlc1wiXG5cbi8vIENyZWF0ZSBhbGwgcm9vbXMgICA9PiAgIC9hcGkvcm9vbXNcbmNvbnN0IGFsbFJvb21zID0gY2F0Y2hBc3luY0Vycm9ycyhhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgcmVzUGVyUGFnZSA9IDRcblxuICBjb25zdCByb29tc0NvdW50ID0gYXdhaXQgUm9vbS5jb3VudERvY3VtZW50cygpXG5cbiAgY29uc3QgYXBpRmVhdHVyZXMgPSBuZXcgQVBJRmVhdHVyZXMoUm9vbS5maW5kKCksIHJlcS5xdWVyeSkuc2VhcmNoKCkuZmlsdGVyKClcblxuICBsZXQgcm9vbXMgPSBhd2FpdCBhcGlGZWF0dXJlcy5xdWVyeVxuICBsZXQgZmlsdGVyZWRSb29tc0NvdW50ID0gcm9vbXMubGVuZ3RoXG5cbiAgYXBpRmVhdHVyZXMucGFnaW5hdGlvbihyZXNQZXJQYWdlKVxuICByb29tcyA9IGF3YWl0IGFwaUZlYXR1cmVzLnF1ZXJ5XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgcm9vbXNDb3VudCxcbiAgICByZXNQZXJQYWdlLFxuICAgIGZpbHRlcmVkUm9vbXNDb3VudCxcbiAgICByb29tcyxcbiAgfSlcbn0pXG5cbi8vIENyZWF0ZSBuZXcgcm9vbSAgID0+ICAgL2FwaS9yb29tc1xuY29uc3QgbmV3Um9vbSA9IGNhdGNoQXN5bmNFcnJvcnMoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIC8vIGNvbnN0IGltYWdlcyA9IHJlcS5ib2R5LmltYWdlc1xuXG4gIC8vIGxldCBpbWFnZXNMaW5rcyA9IFtdXG5cbiAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgLy8gICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbG91ZGluYXJ5LnYyLnVwbG9hZGVyLnVwbG9hZChpbWFnZXNbaV0sIHtcbiAgLy8gICAgIGZvbGRlcjogXCJib29raXQvcm9vbXNcIixcbiAgLy8gICB9KVxuXG4gIC8vICAgaW1hZ2VzTGlua3MucHVzaCh7XG4gIC8vICAgICBwdWJsaWNfaWQ6IHJlc3VsdC5wdWJsaWNfaWQsXG4gIC8vICAgICB1cmw6IHJlc3VsdC5zZWN1cmVfdXJsLFxuICAvLyAgIH0pXG4gIC8vIH1cblxuICAvLyByZXEuYm9keS5pbWFnZXMgPSBpbWFnZXNMaW5rc1xuICAvLyByZXEuYm9keS51c2VyID0gcmVxLnVzZXIuX2lkXG5cbiAgY29uc3Qgcm9vbSA9IGF3YWl0IFJvb20uY3JlYXRlKHJlcS5ib2R5KVxuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICBzdWNjZXNzOiB0cnVlLFxuICAgIHJvb20sXG4gIH0pXG59KVxuXG4vLyBHZXQgcm9vbSBkZXRhaWxzICAgPT4gICAvYXBpL3Jvb21zLzppZFxuY29uc3QgZ2V0U2luZ2xlUm9vbSA9IGNhdGNoQXN5bmNFcnJvcnMoYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IHJvb20gPSBhd2FpdCBSb29tLmZpbmRCeUlkKHJlcS5xdWVyeS5pZClcblxuICBpZiAoIXJvb20pIHtcbiAgICByZXR1cm4gbmV4dChuZXcgRXJyb3JIYW5kbGVyKFwiUm9vbSBub3QgZm91bmQgd2l0aCB0aGlzIElEXCIsIDQwNCkpXG4gIH1cblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgc3VjY2VzczogdHJ1ZSxcbiAgICByb29tLFxuICB9KVxufSlcblxuLy8gVXBkYXRlIHJvb20gZGV0YWlscyAgID0+ICAgL2FwaS9yb29tcy86aWRcbmNvbnN0IHVwZGF0ZVJvb20gPSBjYXRjaEFzeW5jRXJyb3JzKGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zb2xlLmxvZyhyZXEuYm9keSlcbiAgbGV0IHJvb20gPSBhd2FpdCBSb29tLmZpbmRCeUlkKHJlcS5xdWVyeS5pZClcblxuICBpZiAoIXJvb20pIHtcbiAgICByZXR1cm4gbmV4dChuZXcgRXJyb3JIYW5kbGVyKFwiUm9vbSBub3QgZm91bmQgd2l0aCB0aGlzIElEXCIsIDQwNCkpXG4gIH1cblxuICAvLyBpZiAocmVxLmJvZHkuaW1hZ2VzKSB7XG4gIC8vICAgLy8gRGVsZXRlIGltYWdlcyBhc3NvY2lhdGVkIHdpdGggdGhlIHJvb21cbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb20uaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gIC8vICAgICBhd2FpdCBjbG91ZGluYXJ5LnYyLnVwbG9hZGVyLmRlc3Ryb3kocm9vbS5pbWFnZXNbaV0ucHVibGljX2lkKVxuICAvLyAgIH1cblxuICAvLyAgIGxldCBpbWFnZXNMaW5rcyA9IFtdXG4gIC8vICAgY29uc3QgaW1hZ2VzID0gcmVxLmJvZHkuaW1hZ2VzXG5cbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAvLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xvdWRpbmFyeS52Mi51cGxvYWRlci51cGxvYWQoaW1hZ2VzW2ldLCB7XG4gIC8vICAgICAgIGZvbGRlcjogXCJib29raXQvcm9vbXNcIixcbiAgLy8gICAgIH0pXG5cbiAgLy8gICAgIGltYWdlc0xpbmtzLnB1c2goe1xuICAvLyAgICAgICBwdWJsaWNfaWQ6IHJlc3VsdC5wdWJsaWNfaWQsXG4gIC8vICAgICAgIHVybDogcmVzdWx0LnNlY3VyZV91cmwsXG4gIC8vICAgICB9KVxuICAvLyAgIH1cblxuICAvLyByZXEuYm9keS5pbWFnZXMgPSBpbWFnZXNMaW5rc1xuICAvLyB9XG5cbiAgbGV0IG5ld1Jvb20gPSBhd2FpdCBSb29tLmZpbmRCeUlkQW5kVXBkYXRlKHJlcS5xdWVyeS5pZCwgcmVxLmJvZHksIHtcbiAgICBydW5WYWxpZGF0b3JzOiB0cnVlLFxuICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICB9KVxuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICBzdWNjZXNzOiB0cnVlLFxuICAgIG5ld1Jvb20sXG4gIH0pXG59KVxuXG4vLyBEZWxldGUgcm9vbSAgID0+ICAgL2FwaS9yb29tcy86aWRcbmNvbnN0IGRlbGV0ZVJvb20gPSBjYXRjaEFzeW5jRXJyb3JzKGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCByb29tID0gYXdhaXQgUm9vbS5maW5kQnlJZChyZXEucXVlcnkuaWQpXG5cbiAgaWYgKCFyb29tKSB7XG4gICAgcmV0dXJuIG5leHQobmV3IEVycm9ySGFuZGxlcihcIlJvb20gbm90IGZvdW5kIHdpdGggdGhpcyBJRFwiLCA0MDQpKVxuICB9XG5cbiAgLy8gRGVsZXRlIGltYWdlcyBhc3NvY2lhdGVkIHdpdGggdGhlIHJvb21cbiAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCByb29tLmltYWdlcy5sZW5ndGg7IGkrKykge1xuICAvLyAgIGF3YWl0IGNsb3VkaW5hcnkudjIudXBsb2FkZXIuZGVzdHJveShyb29tLmltYWdlc1tpXS5wdWJsaWNfaWQpXG4gIC8vIH1cblxuICBhd2FpdCByb29tLnJlbW92ZSgpXG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgbWVzc2FnZTogXCJSb29tIGlzIGRlbGV0ZWQuXCIsXG4gIH0pXG59KVxuXG4vLyBDcmVhdGUgYSBuZXcgcmV2aWV3ICAgPT4gICAvYXBpL3Jldmlld3NcbmV4cG9ydCBjb25zdCBjcmVhdGVSb29tUmV2aWV3ID0gY2F0Y2hBc3luY0Vycm9ycyhhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyByYXRpbmcsIGNvbW1lbnQsIHJvb21JZCB9ID0gcmVxLmJvZHlcblxuICBjb25zdCByZXZpZXcgPSB7XG4gICAgdXNlcjogcmVxLnVzZXIuX2lkLFxuICAgIG5hbWU6IHJlcS51c2VyLm5hbWUsXG4gICAgcmF0aW5nOiBOdW1iZXIocmF0aW5nKSxcbiAgICBjb21tZW50LFxuICB9XG5cbiAgY29uc3Qgcm9vbSA9IGF3YWl0IFJvb20uZmluZEJ5SWQocm9vbUlkKVxuXG4gIGNvbnN0IGlzUmV2aWV3ZWQgPSByb29tLnJldmlld3MuZmluZChcbiAgICAocikgPT4gci51c2VyLnRvU3RyaW5nKCkgPT09IHJlcS51c2VyLl9pZC50b1N0cmluZygpXG4gIClcblxuICBpZiAoaXNSZXZpZXdlZCkge1xuICAgIHJvb20ucmV2aWV3cy5mb3JFYWNoKChyZXZpZXcpID0+IHtcbiAgICAgIGlmIChyZXZpZXcudXNlci50b1N0cmluZygpID09PSByZXEudXNlci5faWQudG9TdHJpbmcoKSkge1xuICAgICAgICByZXZpZXcuY29tbWVudCA9IGNvbW1lbnRcbiAgICAgICAgcmV2aWV3LnJhdGluZyA9IHJhdGluZ1xuICAgICAgfVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgcm9vbS5yZXZpZXdzLnB1c2gocmV2aWV3KVxuICAgIHJvb20ubnVtT2ZSZXZpZXdzID0gcm9vbS5yZXZpZXdzLmxlbmd0aFxuICB9XG5cbiAgcm9vbS5yYXRpbmdzID1cbiAgICByb29tLnJldmlld3MucmVkdWNlKChhY2MsIGl0ZW0pID0+IGl0ZW0ucmF0aW5nICsgYWNjLCAwKSAvXG4gICAgcm9vbS5yZXZpZXdzLmxlbmd0aFxuXG4gIGF3YWl0IHJvb20uc2F2ZSh7IHZhbGlkYXRlQmVmb3JlU2F2ZTogZmFsc2UgfSlcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgc3VjY2VzczogdHJ1ZSxcbiAgfSlcbn0pXG5cbmV4cG9ydCBjb25zdCBjaGVja1Jldmlld0F1dGggPSBjYXRjaEFzeW5jRXJyb3JzKGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IHJvb21JZCB9ID0gcmVxLnF1ZXJ5XG5cbiAgY29uc3QgYm9va2luZ3MgPSBhd2FpdCBCb29raW5nLmZpbmQoeyB1c2VyOiByZXEudXNlci5faWQsIHJvb206IHJvb21JZCB9KVxuXG4gIGxldCBpc1Jldmlld0F2YWlsYWJsZSA9IGZhbHNlXG4gIGlmIChib29raW5ncy5sZW5ndGggPiAwKSBpc1Jldmlld0F2YWlsYWJsZSA9IHRydWVcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGlzUmV2aWV3QXZhaWxhYmxlIH0pXG59KVxuXG5leHBvcnQgY29uc3QgYWxsQWRtaW5Sb29tcyA9IGNhdGNoQXN5bmNFcnJvcnMoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHJvb21zID0gYXdhaXQgUm9vbS5maW5kKClcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCByb29tcyB9KVxufSlcblxuZXhwb3J0IGNvbnN0IGdldFJvb21SZXZpZXdzID0gY2F0Y2hBc3luY0Vycm9ycyhhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qgcm9vbSA9IGF3YWl0IFJvb20uZmluZEJ5SWQocmVxLnF1ZXJ5LmlkKVxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIHJldmlld3M6IHJvb20ucmV2aWV3cyB9KVxufSlcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVJldmlldyA9IGNhdGNoQXN5bmNFcnJvcnMoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHJvb20gPSBhd2FpdCBSb29tLmZpbmRCeUlkKHJlcS5xdWVyeS5yb29tSWQpXG5cbiAgY29uc3QgcmV2aWV3cyA9IHJvb20ucmV2aWV3cy5maWx0ZXIoXG4gICAgKHJldmlldykgPT4gcmV2aWV3Ll9pZC50b1N0cmluZygpICE9PSByZXEucXVlcnkuaWQudG9TdHJpbmcoKVxuICApXG5cbiAgY29uc3QgbnVtT2ZSZXZpZXdzID0gcmV2aWV3cy5sZW5ndGhcblxuICBjb25zdCByYXRpbmdzID1cbiAgICByb29tLnJldmlld3MucmVkdWNlKChhY2MsIGl0ZW0pID0+IGl0ZW0ucmF0aW5nICsgYWNjLCAwKSAvIHJldmlld3MubGVuZ3RoXG5cbiAgYXdhaXQgUm9vbS5maW5kQnlJZEFuZFVwZGF0ZShcbiAgICByZXEucXVlcnkucm9vbUlkLFxuICAgIHtcbiAgICAgIHJldmlld3MsXG4gICAgICByYXRpbmdzLFxuICAgICAgbnVtT2ZSZXZpZXdzLFxuICAgIH0sXG4gICAge1xuICAgICAgbmV3OiB0cnVlLFxuICAgICAgcnVuVmFsaWRhdG9yczogdHJ1ZSxcbiAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICAgIH1cbiAgKVxuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICBzdWNjZXNzOiB0cnVlLFxuICB9KVxufSlcblxuZXhwb3J0IHsgYWxsUm9vbXMsIG5ld1Jvb20sIGdldFNpbmdsZVJvb20sIHVwZGF0ZVJvb20sIGRlbGV0ZVJvb20gfVxuIiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmMpID0+IChyZXEsIHJlcywgbmV4dCkgPT5cbiAgUHJvbWlzZS5yZXNvbHZlKGZ1bmMocmVxLCByZXMsIG5leHQpKS5jYXRjaChuZXh0KVxuIiwiaW1wb3J0IEVycm9ySGFuZGxlciBmcm9tIFwiLi4vdXRpbHMvZXJyb3JIYW5kbGVyXCJcblxuZXhwb3J0IGRlZmF1bHQgKGVyciwgcmVxLCByZXMsIG5leHQpID0+IHtcbiAgZXJyLnN0YXR1c0NvZGUgPSBlcnIuc3RhdHVzQ29kZSB8fCA1MDBcblxuICBsZXQgZXJyb3IgPSB7IC4uLmVyciB9XG5cbiAgZXJyb3IubWVzc2FnZSA9IGVyci5tZXNzYWdlXG5cbiAgLy8gV3JvbmcgTW9uZ29vc2UgT2JqZWN0IElEIEVycm9yXG4gIGlmIChlcnIubmFtZSA9PT0gXCJDYXN0RXJyb3JcIikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgUmVzb3VyY2Ugbm90IGZvdW5kLiBJbnZhbGlkOiAke2Vyci5wYXRofWBcbiAgICBlcnJvciA9IG5ldyBFcnJvckhhbmRsZXIobWVzc2FnZSwgNDAwKVxuICB9XG5cbiAgLy8gSGFuZGxpbmcgbW9uZ29vc2UgVmFsaWRhdGlvbiBlcnJvclxuICBpZiAoZXJyLm5hbWUgPT09IFwiVmFsaWRhdGlvbkVycm9yXCIpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gT2JqZWN0LnZhbHVlcyhlcnIuZXJyb3JzKS5tYXAoKHZhbHVlKSA9PiB2YWx1ZS5tZXNzYWdlKVxuICAgIGVycm9yID0gbmV3IEVycm9ySGFuZGxlcihtZXNzYWdlLCA0MDApXG4gIH1cblxuICByZXMuc3RhdHVzKGVyci5zdGF0dXNDb2RlKS5qc29uKHtcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICBlcnJvcixcbiAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgIHN0YWNrOiBlcnJvci5zdGFjayxcbiAgfSlcbn1cbiIsImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIlxuXG5jb25zdCByb29tU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIG5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciByb29tIG5hbWVcIl0sXG4gICAgdHJpbTogdHJ1ZSxcbiAgICBtYXhMZW5ndGg6IFsxMDAsIFwiUm9vbSBuYW1lIGNhbm5vdCBleGNlZWQgMTAwIGNoYXJhY3RlcnNcIl0sXG4gIH0sXG4gIHByaWNlUGVyTmlnaHQ6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciByb29tIHByaWNlIHBlciBuaWdodFwiXSxcbiAgICBtYXhMZW5ndGg6IFs0LCBcIlJvb20gbmFtZSBjYW5ub3QgZXhjZWVkIDQgY2hhcmFjdGVyc1wiXSxcbiAgICBkZWZhdWx0OiAwLjAsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgZW50ZXIgcm9vbSBkZXNjcmlwdGlvblwiXSxcbiAgfSxcbiAgYWRkcmVzczoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIHJvb20gYWRkcmVzc1wiXSxcbiAgfSxcbiAgZ3Vlc3RDYXBhY2l0eToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIHJvb20gZ3Vlc3QgY2FwYWNpdHlcIl0sXG4gIH0sXG4gIG51bU9mQmVkczoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIG51bWJlciBvZiBiZWRzIGluIHJvb21cIl0sXG4gIH0sXG4gIGludGVybmV0OiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgYnJlYWtmYXN0OiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgYWlyQ29uZGl0aW9uZWQ6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBwZXRzQWxsb3dlZDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIHJvb21DbGVhbmluZzoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIHJhdGluZ3M6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMCxcbiAgfSxcbiAgbnVtT2ZSZXZpZXdzOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDAsXG4gIH0sXG4gIGltYWdlczogW1xuICAgIHtcbiAgICAgIHB1YmxpY19pZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHVybDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBjYXRlZ29yeToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIHJvb20gY2F0ZWdvcnlcIl0sXG4gICAgZW51bToge1xuICAgICAgdmFsdWVzOiBbXCJLaW5nXCIsIFwiU2luZ2xlXCIsIFwiVHdpbnNcIl0sXG4gICAgICBtZXNzYWdlOiBcIlBsZWFzZSBzZWxlY3QgY29ycmVjdCBjYXRlZ29yeSBmb3Igcm9vbVwiLFxuICAgIH0sXG4gIH0sXG4gIHJldmlld3M6IFtcbiAgICB7XG4gICAgICB1c2VyOiB7XG4gICAgICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5PYmplY3RJZCxcbiAgICAgICAgcmVmOiBcIlVzZXJcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHJhdGluZzoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNvbW1lbnQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgdXNlcjoge1xuICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5PYmplY3RJZCxcbiAgICByZWY6IFwiVXNlclwiLFxuICAgIC8vIHJlcXVpcmVkOiBmYWxzZSxcbiAgfSxcbiAgY3JlYXRlZEF0OiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICBkZWZhdWx0OiBEYXRlLm5vdyxcbiAgfSxcbn0pXG5cbmNvbnN0IFJvb20gPSBtb25nb29zZS5tb2RlbHMuUm9vbSB8fCBtb25nb29zZS5tb2RlbChcIlJvb21cIiwgcm9vbVNjaGVtYSlcblxuZXhwb3J0IGRlZmF1bHQgUm9vbVxuIiwiaW1wb3J0IG5jIGZyb20gXCJuZXh0LWNvbm5lY3RcIlxuaW1wb3J0IHsgYWxsUm9vbXMsIG5ld1Jvb20gfSBmcm9tIFwiLi4vLi4vLi4vY29udHJvbGxlcnMvcm9vbUNvbnRcIlxuaW1wb3J0IGNvbm5lY3REQiBmcm9tIFwiLi4vLi4vLi4vY29ubmVjdERCXCJcbmltcG9ydCBvbkVycm9yIGZyb20gXCIuLi8uLi8uLi9taWRkbGV3YXJlcy9lcnJvclwiXG5cbmNvbm5lY3REQigpXG5cbmNvbnN0IHJvdXRlciA9IG5jKHsgb25FcnJvciB9KVxuXG5yb3V0ZXIuZ2V0KGFsbFJvb21zKVxucm91dGVyLnBvc3QobmV3Um9vbSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXG4iLCJjbGFzcyBBUElGZWF0dXJlcyB7XG4gIGNvbnN0cnVjdG9yKHF1ZXJ5LCBxdWVyeVN0cikge1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMucXVlcnlTdHIgPSBxdWVyeVN0clxuICB9XG5cbiAgc2VhcmNoKCkge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gdGhpcy5xdWVyeVN0ci5sb2NhdGlvblxuICAgICAgPyB7XG4gICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgJHJlZ2V4OiB0aGlzLnF1ZXJ5U3RyLmxvY2F0aW9uLFxuICAgICAgICAgICAgJG9wdGlvbnM6IFwiaVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIDoge31cblxuICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5LmZpbmQoeyAuLi5sb2NhdGlvbiB9KVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBmaWx0ZXIoKSB7XG4gICAgY29uc3QgcXVlcnlDb3B5ID0geyAuLi50aGlzLnF1ZXJ5U3RyIH1cblxuICAgIC8vIFJlbW92ZSBmaWVsZHMgZnJvbSBxdWVyeVxuICAgIGNvbnN0IHJlbW92ZUZpZWxkcyA9IFtcImxvY2F0aW9uXCIsIFwicGFnZVwiXVxuICAgIHJlbW92ZUZpZWxkcy5mb3JFYWNoKChlbCkgPT4gZGVsZXRlIHF1ZXJ5Q29weVtlbF0pXG5cbiAgICAvLyBBZHZhbmNlIGZpbHRlcmluZyB3aXRoIGd0LCBndGUgZXRjXG4gICAgbGV0IGZpbHRlclF1ZXJ5ID0ge31cbiAgICBjb25zdCBmaWVsZHNMZW5ndGggPSBPYmplY3Qua2V5cyhxdWVyeUNvcHkpLmxlbmd0aFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHNMZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHF1ZXJ5U3RyID0gSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMocXVlcnlDb3B5KVtpXSlcbiAgICAgIGNvbnN0IGZpbHRlckZpZWxkID0gcXVlcnlTdHIuc3Vic3RyaW5nKDEsIHF1ZXJ5U3RyLmluZGV4T2YoXCJbXCIpKVxuXG4gICAgICBpZiAoZmlsdGVyRmllbGQubGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gT2JqZWN0LnZhbHVlcyhxdWVyeUNvcHkpWzBdXG5cbiAgICAgICAgY29uc3QgZmlsdGVyT3BlcmF0b3IgPSBxdWVyeVN0ci5zdWJzdHJpbmcoXG4gICAgICAgICAgcXVlcnlTdHIuaW5kZXhPZihcIltcIikgKyAxLFxuICAgICAgICAgIHF1ZXJ5U3RyLmluZGV4T2YoXCJdXCIpXG4gICAgICAgIClcblxuICAgICAgICBmaWx0ZXJRdWVyeSA9IHtcbiAgICAgICAgICAuLi5maWx0ZXJRdWVyeSxcbiAgICAgICAgICBbZmlsdGVyRmllbGRdOiB7IFtgJCR7ZmlsdGVyT3BlcmF0b3J9YF06IGZpZWxkVmFsdWUgfSxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsdGVyUXVlcnkgPSB7XG4gICAgICAgICAgLi4uZmlsdGVyUXVlcnksXG4gICAgICAgICAgW09iamVjdC5rZXlzKHF1ZXJ5Q29weSlbaV1dOiBPYmplY3QudmFsdWVzKHF1ZXJ5Q29weSlbaV0sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5maW5kKGZpbHRlclF1ZXJ5KVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwYWdpbmF0aW9uKHJlc1BlclBhZ2UpIHtcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IE51bWJlcih0aGlzLnF1ZXJ5U3RyLnBhZ2UpIHx8IDFcbiAgICBjb25zdCBza2lwID0gcmVzUGVyUGFnZSAqIChjdXJyZW50UGFnZSAtIDEpXG5cbiAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5saW1pdChyZXNQZXJQYWdlKS5za2lwKHNraXApXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBUElGZWF0dXJlc1xuIiwiY2xhc3MgRXJyb3JIYW5kbGVyIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBzdGF0dXNDb2RlKSB7XG4gICAgc3VwZXIobWVzc2FnZSlcbiAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlXG5cbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9ySGFuZGxlclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==