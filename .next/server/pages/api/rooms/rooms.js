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
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cloudinary */ "cloudinary");
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_errorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/errorHandler */ "./utils/errorHandler.js");
/* harmony import */ var _middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middlewares/catchAsyncErrors */ "./middlewares/catchAsyncErrors.js");
/* harmony import */ var _utils_apiFeatures__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/apiFeatures */ "./utils/apiFeatures.js");
 // import Booking from "../models/bookingModel"




 // Create all rooms   =>   /api/rooms

const allRooms = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_3__.default)(async (req, res) => {
  const resPerPage = 4;
  const roomsCount = await _models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.countDocuments();
  const apiFeatures = new _utils_apiFeatures__WEBPACK_IMPORTED_MODULE_4__.default(_models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.find(), req.query).search().filter();
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

const newRoom = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_3__.default)(async (req, res) => {
  const images = req.body.images;
  let imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary__WEBPACK_IMPORTED_MODULE_1___default().v2.uploader.upload(images[i], {
      folder: "bookit/rooms"
    });
    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url
    });
  }

  req.body.images = imagesLinks;
  req.body.user = req.user._id;
  const room = await _models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.create(req.body);
  res.status(200).json({
    success: true,
    room
  });
}); // Get room details   =>   /api/rooms/:id

const getSingleRoom = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_3__.default)(async (req, res, next) => {
  const room = await _models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.findById(req.query.id);

  if (!room) {
    return next(new _utils_errorHandler__WEBPACK_IMPORTED_MODULE_2__.default("Room not found with this ID", 404));
  }

  res.status(200).json({
    success: true,
    room
  });
}); // Update room details   =>   /api/rooms/:id

const updateRoom = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_3__.default)(async (req, res, next) => {
  console.log(req.body);
  let room = await _models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.findById(req.query.id);

  if (!room) {
    return next(new _utils_errorHandler__WEBPACK_IMPORTED_MODULE_2__.default("Room not found with this ID", 404));
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

const deleteRoom = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_3__.default)(async (req, res, next) => {
  const room = await _models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.findById(req.query.id);

  if (!room) {
    return next(new _utils_errorHandler__WEBPACK_IMPORTED_MODULE_2__.default("Room not found with this ID", 404));
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

const createRoomReview = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_3__.default)(async (req, res) => {
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
const checkReviewAuth = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_3__.default)(async (req, res) => {
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
const allAdminRooms = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_3__.default)(async (req, res) => {
  const rooms = await _models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.find();
  res.status(200).json({
    success: true,
    rooms
  });
});
const getRoomReviews = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_3__.default)(async (req, res) => {
  const room = await _models_roomModel__WEBPACK_IMPORTED_MODULE_0__.default.findById(req.query.id);
  res.status(200).json({
    success: true,
    reviews: room.reviews
  });
});
const deleteReview = (0,_middlewares_catchAsyncErrors__WEBPACK_IMPORTED_MODULE_3__.default)(async (req, res) => {
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

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("cloudinary");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0b2Z1Ly4vY29ubmVjdERCLmpzIiwid2VicGFjazovL25leHRvZnUvLi9jb250cm9sbGVycy9yb29tQ29udC5qcyIsIndlYnBhY2s6Ly9uZXh0b2Z1Ly4vbWlkZGxld2FyZXMvY2F0Y2hBc3luY0Vycm9ycy5qcyIsIndlYnBhY2s6Ly9uZXh0b2Z1Ly4vbWlkZGxld2FyZXMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vbmV4dG9mdS8uL21vZGVscy9yb29tTW9kZWwuanMiLCJ3ZWJwYWNrOi8vbmV4dG9mdS8uL3BhZ2VzL2FwaS9yb29tcy9yb29tcy5qcyIsIndlYnBhY2s6Ly9uZXh0b2Z1Ly4vdXRpbHMvYXBpRmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vbmV4dG9mdS8uL3V0aWxzL2Vycm9ySGFuZGxlci5qcyIsIndlYnBhY2s6Ly9uZXh0b2Z1L2V4dGVybmFsIFwiY2xvdWRpbmFyeVwiIiwid2VicGFjazovL25leHRvZnUvZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovL25leHRvZnUvZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIiJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJtb25nb29zZSIsInByb2Nlc3MiLCJlbnYiLCJEQiIsInVzZU5ld1VybFBhcnNlciIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VDcmVhdGVJbmRleCIsInVzZVVuaWZpZWRUb3BvbG9neSIsInRoZW4iLCJjb24iLCJjb25zb2xlIiwibG9nIiwiYWxsUm9vbXMiLCJjYXRjaEFzeW5jRXJyb3JzIiwicmVxIiwicmVzIiwicmVzUGVyUGFnZSIsInJvb21zQ291bnQiLCJSb29tIiwiYXBpRmVhdHVyZXMiLCJBUElGZWF0dXJlcyIsInF1ZXJ5Iiwic2VhcmNoIiwiZmlsdGVyIiwicm9vbXMiLCJmaWx0ZXJlZFJvb21zQ291bnQiLCJsZW5ndGgiLCJwYWdpbmF0aW9uIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJuZXdSb29tIiwiaW1hZ2VzIiwiYm9keSIsImltYWdlc0xpbmtzIiwiaSIsInJlc3VsdCIsImNsb3VkaW5hcnkiLCJmb2xkZXIiLCJwdXNoIiwicHVibGljX2lkIiwidXJsIiwic2VjdXJlX3VybCIsInVzZXIiLCJfaWQiLCJyb29tIiwiZ2V0U2luZ2xlUm9vbSIsIm5leHQiLCJpZCIsIkVycm9ySGFuZGxlciIsInVwZGF0ZVJvb20iLCJydW5WYWxpZGF0b3JzIiwiZGVsZXRlUm9vbSIsInJlbW92ZSIsIm1lc3NhZ2UiLCJjcmVhdGVSb29tUmV2aWV3IiwicmF0aW5nIiwiY29tbWVudCIsInJvb21JZCIsInJldmlldyIsIm5hbWUiLCJOdW1iZXIiLCJpc1Jldmlld2VkIiwicmV2aWV3cyIsImZpbmQiLCJyIiwidG9TdHJpbmciLCJmb3JFYWNoIiwibnVtT2ZSZXZpZXdzIiwicmF0aW5ncyIsInJlZHVjZSIsImFjYyIsIml0ZW0iLCJzYXZlIiwidmFsaWRhdGVCZWZvcmVTYXZlIiwiY2hlY2tSZXZpZXdBdXRoIiwiYm9va2luZ3MiLCJCb29raW5nIiwiaXNSZXZpZXdBdmFpbGFibGUiLCJhbGxBZG1pblJvb21zIiwiZ2V0Um9vbVJldmlld3MiLCJkZWxldGVSZXZpZXciLCJuZXciLCJmdW5jIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsImVyciIsInN0YXR1c0NvZGUiLCJlcnJvciIsInBhdGgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJtYXAiLCJ2YWx1ZSIsInN0YWNrIiwicm9vbVNjaGVtYSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJtYXhMZW5ndGgiLCJwcmljZVBlck5pZ2h0IiwiZGVmYXVsdCIsImRlc2NyaXB0aW9uIiwiYWRkcmVzcyIsImd1ZXN0Q2FwYWNpdHkiLCJudW1PZkJlZHMiLCJpbnRlcm5ldCIsIkJvb2xlYW4iLCJicmVha2Zhc3QiLCJhaXJDb25kaXRpb25lZCIsInBldHNBbGxvd2VkIiwicm9vbUNsZWFuaW5nIiwiY2F0ZWdvcnkiLCJlbnVtIiwicmVmIiwiY3JlYXRlZEF0IiwiRGF0ZSIsIm5vdyIsInJvdXRlciIsIm5jIiwib25FcnJvciIsImdldCIsInBvc3QiLCJjb25zdHJ1Y3RvciIsInF1ZXJ5U3RyIiwibG9jYXRpb24iLCIkcmVnZXgiLCIkb3B0aW9ucyIsInF1ZXJ5Q29weSIsInJlbW92ZUZpZWxkcyIsImVsIiwiZmlsdGVyUXVlcnkiLCJmaWVsZHNMZW5ndGgiLCJrZXlzIiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbHRlckZpZWxkIiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImZpZWxkVmFsdWUiLCJmaWx0ZXJPcGVyYXRvciIsImN1cnJlbnRQYWdlIiwicGFnZSIsInNraXAiLCJsaW1pdCIsIkVycm9yIiwiY2FwdHVyZVN0YWNrVHJhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsWUFBWTtBQUM1QixNQUFJQyx1RUFBQSxJQUFrQyxDQUF0QyxFQUF5QztBQUN2QztBQUNEOztBQUNEQSx5REFBQSxDQUNXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsRUFEdkIsRUFDMkI7QUFDdkJDLG1CQUFlLEVBQUUsSUFETTtBQUV2QkMsb0JBQWdCLEVBQUUsS0FGSztBQUd2QkMsa0JBQWMsRUFBRSxJQUhPO0FBSXZCQyxzQkFBa0IsRUFBRTtBQUpHLEdBRDNCLEVBT0dDLElBUEgsQ0FPU0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixDQVBqQjtBQVFELENBWkQ7O0FBY0EsK0RBQWVaLFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDZEE7O0FBRUE7QUFFQTtBQUNBO0NBR0E7O0FBQ0EsTUFBTWEsUUFBUSxHQUFHQyxzRUFBZ0IsQ0FBQyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDcEQsUUFBTUMsVUFBVSxHQUFHLENBQW5CO0FBRUEsUUFBTUMsVUFBVSxHQUFHLE1BQU1DLHFFQUFBLEVBQXpCO0FBRUEsUUFBTUMsV0FBVyxHQUFHLElBQUlDLHVEQUFKLENBQWdCRiwyREFBQSxFQUFoQixFQUE2QkosR0FBRyxDQUFDTyxLQUFqQyxFQUF3Q0MsTUFBeEMsR0FBaURDLE1BQWpELEVBQXBCO0FBRUEsTUFBSUMsS0FBSyxHQUFHLE1BQU1MLFdBQVcsQ0FBQ0UsS0FBOUI7QUFDQSxNQUFJSSxrQkFBa0IsR0FBR0QsS0FBSyxDQUFDRSxNQUEvQjtBQUVBUCxhQUFXLENBQUNRLFVBQVosQ0FBdUJYLFVBQXZCO0FBQ0FRLE9BQUssR0FBRyxNQUFNTCxXQUFXLENBQUNFLEtBQTFCO0FBRUFOLEtBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CQyxXQUFPLEVBQUUsSUFEVTtBQUVuQmIsY0FGbUI7QUFHbkJELGNBSG1CO0FBSW5CUyxzQkFKbUI7QUFLbkJEO0FBTG1CLEdBQXJCO0FBT0QsQ0FwQmdDLENBQWpDLEMsQ0FzQkE7O0FBQ0EsTUFBTU8sT0FBTyxHQUFHbEIsc0VBQWdCLENBQUMsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ25ELFFBQU1pQixNQUFNLEdBQUdsQixHQUFHLENBQUNtQixJQUFKLENBQVNELE1BQXhCO0FBRUEsTUFBSUUsV0FBVyxHQUFHLEVBQWxCOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsTUFBTSxDQUFDTixNQUEzQixFQUFtQ1MsQ0FBQyxFQUFwQyxFQUF3QztBQUN0QyxVQUFNQyxNQUFNLEdBQUcsTUFBTUMsb0VBQUEsQ0FBOEJMLE1BQU0sQ0FBQ0csQ0FBRCxDQUFwQyxFQUF5QztBQUM1REcsWUFBTSxFQUFFO0FBRG9ELEtBQXpDLENBQXJCO0FBSUFKLGVBQVcsQ0FBQ0ssSUFBWixDQUFpQjtBQUNmQyxlQUFTLEVBQUVKLE1BQU0sQ0FBQ0ksU0FESDtBQUVmQyxTQUFHLEVBQUVMLE1BQU0sQ0FBQ007QUFGRyxLQUFqQjtBQUlEOztBQUVENUIsS0FBRyxDQUFDbUIsSUFBSixDQUFTRCxNQUFULEdBQWtCRSxXQUFsQjtBQUNBcEIsS0FBRyxDQUFDbUIsSUFBSixDQUFTVSxJQUFULEdBQWdCN0IsR0FBRyxDQUFDNkIsSUFBSixDQUFTQyxHQUF6QjtBQUVBLFFBQU1DLElBQUksR0FBRyxNQUFNM0IsNkRBQUEsQ0FBWUosR0FBRyxDQUFDbUIsSUFBaEIsQ0FBbkI7QUFFQWxCLEtBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CQyxXQUFPLEVBQUUsSUFEVTtBQUVuQmU7QUFGbUIsR0FBckI7QUFJRCxDQXpCK0IsQ0FBaEMsQyxDQTJCQTs7QUFDQSxNQUFNQyxhQUFhLEdBQUdqQyxzRUFBZ0IsQ0FBQyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJnQyxJQUFqQixLQUEwQjtBQUMvRCxRQUFNRixJQUFJLEdBQUcsTUFBTTNCLCtEQUFBLENBQWNKLEdBQUcsQ0FBQ08sS0FBSixDQUFVMkIsRUFBeEIsQ0FBbkI7O0FBRUEsTUFBSSxDQUFDSCxJQUFMLEVBQVc7QUFDVCxXQUFPRSxJQUFJLENBQUMsSUFBSUUsd0RBQUosQ0FBaUIsNkJBQWpCLEVBQWdELEdBQWhELENBQUQsQ0FBWDtBQUNEOztBQUVEbEMsS0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDbkJDLFdBQU8sRUFBRSxJQURVO0FBRW5CZTtBQUZtQixHQUFyQjtBQUlELENBWHFDLENBQXRDLEMsQ0FhQTs7QUFDQSxNQUFNSyxVQUFVLEdBQUdyQyxzRUFBZ0IsQ0FBQyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJnQyxJQUFqQixLQUEwQjtBQUM1RHJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRyxHQUFHLENBQUNtQixJQUFoQjtBQUNBLE1BQUlZLElBQUksR0FBRyxNQUFNM0IsK0RBQUEsQ0FBY0osR0FBRyxDQUFDTyxLQUFKLENBQVUyQixFQUF4QixDQUFqQjs7QUFFQSxNQUFJLENBQUNILElBQUwsRUFBVztBQUNULFdBQU9FLElBQUksQ0FBQyxJQUFJRSx3REFBSixDQUFpQiw2QkFBakIsRUFBZ0QsR0FBaEQsQ0FBRCxDQUFYO0FBQ0QsR0FOMkQsQ0FRNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQSxNQUFJbEIsT0FBTyxHQUFHLE1BQU1iLHdFQUFBLENBQXVCSixHQUFHLENBQUNPLEtBQUosQ0FBVTJCLEVBQWpDLEVBQXFDbEMsR0FBRyxDQUFDbUIsSUFBekMsRUFBK0M7QUFDakVrQixpQkFBYSxFQUFFLElBRGtEO0FBRWpFOUMsb0JBQWdCLEVBQUU7QUFGK0MsR0FBL0MsQ0FBcEI7QUFLQVUsS0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDbkJDLFdBQU8sRUFBRSxJQURVO0FBRW5CQztBQUZtQixHQUFyQjtBQUlELENBeENrQyxDQUFuQyxDLENBMENBOztBQUNBLE1BQU1xQixVQUFVLEdBQUd2QyxzRUFBZ0IsQ0FBQyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJnQyxJQUFqQixLQUEwQjtBQUM1RCxRQUFNRixJQUFJLEdBQUcsTUFBTTNCLCtEQUFBLENBQWNKLEdBQUcsQ0FBQ08sS0FBSixDQUFVMkIsRUFBeEIsQ0FBbkI7O0FBRUEsTUFBSSxDQUFDSCxJQUFMLEVBQVc7QUFDVCxXQUFPRSxJQUFJLENBQUMsSUFBSUUsd0RBQUosQ0FBaUIsNkJBQWpCLEVBQWdELEdBQWhELENBQUQsQ0FBWDtBQUNELEdBTDJELENBTzVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxRQUFNSixJQUFJLENBQUNRLE1BQUwsRUFBTjtBQUVBdEMsS0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDbkJDLFdBQU8sRUFBRSxJQURVO0FBRW5Cd0IsV0FBTyxFQUFFO0FBRlUsR0FBckI7QUFJRCxDQWxCa0MsQ0FBbkMsQyxDQW9CQTs7QUFDTyxNQUFNQyxnQkFBZ0IsR0FBRzFDLHNFQUFnQixDQUFDLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNuRSxRQUFNO0FBQUV5QyxVQUFGO0FBQVVDLFdBQVY7QUFBbUJDO0FBQW5CLE1BQThCNUMsR0FBRyxDQUFDbUIsSUFBeEM7QUFFQSxRQUFNMEIsTUFBTSxHQUFHO0FBQ2JoQixRQUFJLEVBQUU3QixHQUFHLENBQUM2QixJQUFKLENBQVNDLEdBREY7QUFFYmdCLFFBQUksRUFBRTlDLEdBQUcsQ0FBQzZCLElBQUosQ0FBU2lCLElBRkY7QUFHYkosVUFBTSxFQUFFSyxNQUFNLENBQUNMLE1BQUQsQ0FIRDtBQUliQztBQUphLEdBQWY7QUFPQSxRQUFNWixJQUFJLEdBQUcsTUFBTTNCLCtEQUFBLENBQWN3QyxNQUFkLENBQW5CO0FBRUEsUUFBTUksVUFBVSxHQUFHakIsSUFBSSxDQUFDa0IsT0FBTCxDQUFhQyxJQUFiLENBQ2hCQyxDQUFELElBQU9BLENBQUMsQ0FBQ3RCLElBQUYsQ0FBT3VCLFFBQVAsT0FBc0JwRCxHQUFHLENBQUM2QixJQUFKLENBQVNDLEdBQVQsQ0FBYXNCLFFBQWIsRUFEWixDQUFuQjs7QUFJQSxNQUFJSixVQUFKLEVBQWdCO0FBQ2RqQixRQUFJLENBQUNrQixPQUFMLENBQWFJLE9BQWIsQ0FBc0JSLE1BQUQsSUFBWTtBQUMvQixVQUFJQSxNQUFNLENBQUNoQixJQUFQLENBQVl1QixRQUFaLE9BQTJCcEQsR0FBRyxDQUFDNkIsSUFBSixDQUFTQyxHQUFULENBQWFzQixRQUFiLEVBQS9CLEVBQXdEO0FBQ3REUCxjQUFNLENBQUNGLE9BQVAsR0FBaUJBLE9BQWpCO0FBQ0FFLGNBQU0sQ0FBQ0gsTUFBUCxHQUFnQkEsTUFBaEI7QUFDRDtBQUNGLEtBTEQ7QUFNRCxHQVBELE1BT087QUFDTFgsUUFBSSxDQUFDa0IsT0FBTCxDQUFheEIsSUFBYixDQUFrQm9CLE1BQWxCO0FBQ0FkLFFBQUksQ0FBQ3VCLFlBQUwsR0FBb0J2QixJQUFJLENBQUNrQixPQUFMLENBQWFyQyxNQUFqQztBQUNEOztBQUVEbUIsTUFBSSxDQUFDd0IsT0FBTCxHQUNFeEIsSUFBSSxDQUFDa0IsT0FBTCxDQUFhTyxNQUFiLENBQW9CLENBQUNDLEdBQUQsRUFBTUMsSUFBTixLQUFlQSxJQUFJLENBQUNoQixNQUFMLEdBQWNlLEdBQWpELEVBQXNELENBQXRELElBQ0ExQixJQUFJLENBQUNrQixPQUFMLENBQWFyQyxNQUZmO0FBSUEsUUFBTW1CLElBQUksQ0FBQzRCLElBQUwsQ0FBVTtBQUFFQyxzQkFBa0IsRUFBRTtBQUF0QixHQUFWLENBQU47QUFFQTNELEtBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CQyxXQUFPLEVBQUU7QUFEVSxHQUFyQjtBQUdELENBckMrQyxDQUF6QztBQXVDQSxNQUFNNkMsZUFBZSxHQUFHOUQsc0VBQWdCLENBQUMsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2xFLFFBQU07QUFBRTJDO0FBQUYsTUFBYTVDLEdBQUcsQ0FBQ08sS0FBdkI7QUFFQSxRQUFNdUQsUUFBUSxHQUFHLE1BQU1DLE9BQU8sQ0FBQ2IsSUFBUixDQUFhO0FBQUVyQixRQUFJLEVBQUU3QixHQUFHLENBQUM2QixJQUFKLENBQVNDLEdBQWpCO0FBQXNCQyxRQUFJLEVBQUVhO0FBQTVCLEdBQWIsQ0FBdkI7QUFFQSxNQUFJb0IsaUJBQWlCLEdBQUcsS0FBeEI7QUFDQSxNQUFJRixRQUFRLENBQUNsRCxNQUFULEdBQWtCLENBQXRCLEVBQXlCb0QsaUJBQWlCLEdBQUcsSUFBcEI7QUFFekIvRCxLQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxXQUFPLEVBQUUsSUFBWDtBQUFpQmdEO0FBQWpCLEdBQXJCO0FBQ0QsQ0FUOEMsQ0FBeEM7QUFXQSxNQUFNQyxhQUFhLEdBQUdsRSxzRUFBZ0IsQ0FBQyxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDaEUsUUFBTVMsS0FBSyxHQUFHLE1BQU1OLDJEQUFBLEVBQXBCO0FBQ0FILEtBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFdBQU8sRUFBRSxJQUFYO0FBQWlCTjtBQUFqQixHQUFyQjtBQUNELENBSDRDLENBQXRDO0FBS0EsTUFBTXdELGNBQWMsR0FBR25FLHNFQUFnQixDQUFDLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqRSxRQUFNOEIsSUFBSSxHQUFHLE1BQU0zQiwrREFBQSxDQUFjSixHQUFHLENBQUNPLEtBQUosQ0FBVTJCLEVBQXhCLENBQW5CO0FBQ0FqQyxLQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxXQUFPLEVBQUUsSUFBWDtBQUFpQmlDLFdBQU8sRUFBRWxCLElBQUksQ0FBQ2tCO0FBQS9CLEdBQXJCO0FBQ0QsQ0FINkMsQ0FBdkM7QUFLQSxNQUFNa0IsWUFBWSxHQUFHcEUsc0VBQWdCLENBQUMsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9ELFFBQU04QixJQUFJLEdBQUcsTUFBTTNCLCtEQUFBLENBQWNKLEdBQUcsQ0FBQ08sS0FBSixDQUFVcUMsTUFBeEIsQ0FBbkI7QUFFQSxRQUFNSyxPQUFPLEdBQUdsQixJQUFJLENBQUNrQixPQUFMLENBQWF4QyxNQUFiLENBQ2JvQyxNQUFELElBQVlBLE1BQU0sQ0FBQ2YsR0FBUCxDQUFXc0IsUUFBWCxPQUEwQnBELEdBQUcsQ0FBQ08sS0FBSixDQUFVMkIsRUFBVixDQUFha0IsUUFBYixFQUR4QixDQUFoQjtBQUlBLFFBQU1FLFlBQVksR0FBR0wsT0FBTyxDQUFDckMsTUFBN0I7QUFFQSxRQUFNMkMsT0FBTyxHQUNYeEIsSUFBSSxDQUFDa0IsT0FBTCxDQUFhTyxNQUFiLENBQW9CLENBQUNDLEdBQUQsRUFBTUMsSUFBTixLQUFlQSxJQUFJLENBQUNoQixNQUFMLEdBQWNlLEdBQWpELEVBQXNELENBQXRELElBQTJEUixPQUFPLENBQUNyQyxNQURyRTtBQUdBLFFBQU1SLHdFQUFBLENBQ0pKLEdBQUcsQ0FBQ08sS0FBSixDQUFVcUMsTUFETixFQUVKO0FBQ0VLLFdBREY7QUFFRU0sV0FGRjtBQUdFRDtBQUhGLEdBRkksRUFPSjtBQUNFYyxPQUFHLEVBQUUsSUFEUDtBQUVFL0IsaUJBQWEsRUFBRSxJQUZqQjtBQUdFOUMsb0JBQWdCLEVBQUU7QUFIcEIsR0FQSSxDQUFOO0FBY0FVLEtBQUcsQ0FBQ2EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CQyxXQUFPLEVBQUU7QUFEVSxHQUFyQjtBQUdELENBN0IyQyxDQUFyQzs7Ozs7Ozs7Ozs7OztBQ3hNUCwrREFBZ0JxRCxJQUFELElBQVUsQ0FBQ3JFLEdBQUQsRUFBTUMsR0FBTixFQUFXZ0MsSUFBWCxLQUN2QnFDLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkYsSUFBSSxDQUFDckUsR0FBRCxFQUFNQyxHQUFOLEVBQVdnQyxJQUFYLENBQXBCLEVBQXNDdUMsS0FBdEMsQ0FBNEN2QyxJQUE1QyxDQURGLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBLCtEQUFlLENBQUN3QyxHQUFELEVBQU16RSxHQUFOLEVBQVdDLEdBQVgsRUFBZ0JnQyxJQUFoQixLQUF5QjtBQUN0Q3dDLEtBQUcsQ0FBQ0MsVUFBSixHQUFpQkQsR0FBRyxDQUFDQyxVQUFKLElBQWtCLEdBQW5DOztBQUVBLE1BQUlDLEtBQUsscUJBQVFGLEdBQVIsQ0FBVDs7QUFFQUUsT0FBSyxDQUFDbkMsT0FBTixHQUFnQmlDLEdBQUcsQ0FBQ2pDLE9BQXBCLENBTHNDLENBT3RDOztBQUNBLE1BQUlpQyxHQUFHLENBQUMzQixJQUFKLEtBQWEsV0FBakIsRUFBOEI7QUFDNUIsVUFBTU4sT0FBTyxHQUFJLGdDQUErQmlDLEdBQUcsQ0FBQ0csSUFBSyxFQUF6RDtBQUNBRCxTQUFLLEdBQUcsSUFBSXhDLHdEQUFKLENBQWlCSyxPQUFqQixFQUEwQixHQUExQixDQUFSO0FBQ0QsR0FYcUMsQ0FhdEM7OztBQUNBLE1BQUlpQyxHQUFHLENBQUMzQixJQUFKLEtBQWEsaUJBQWpCLEVBQW9DO0FBQ2xDLFVBQU1OLE9BQU8sR0FBR3FDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxHQUFHLENBQUNNLE1BQWxCLEVBQTBCQyxHQUExQixDQUErQkMsS0FBRCxJQUFXQSxLQUFLLENBQUN6QyxPQUEvQyxDQUFoQjtBQUNBbUMsU0FBSyxHQUFHLElBQUl4Qyx3REFBSixDQUFpQkssT0FBakIsRUFBMEIsR0FBMUIsQ0FBUjtBQUNEOztBQUVEdkMsS0FBRyxDQUFDYSxNQUFKLENBQVcyRCxHQUFHLENBQUNDLFVBQWYsRUFBMkIzRCxJQUEzQixDQUFnQztBQUM5QkMsV0FBTyxFQUFFLEtBRHFCO0FBRTlCMkQsU0FGOEI7QUFHOUJuQyxXQUFPLEVBQUVtQyxLQUFLLENBQUNuQyxPQUhlO0FBSTlCMEMsU0FBSyxFQUFFUCxLQUFLLENBQUNPO0FBSmlCLEdBQWhDO0FBTUQsQ0F6QkQsRTs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVBLE1BQU1DLFVBQVUsR0FBRyxJQUFJakcsd0RBQUosQ0FBb0I7QUFDckM0RCxNQUFJLEVBQUU7QUFDSnNDLFFBQUksRUFBRUMsTUFERjtBQUVKQyxZQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU8sd0JBQVAsQ0FGTjtBQUdKQyxRQUFJLEVBQUUsSUFIRjtBQUlKQyxhQUFTLEVBQUUsQ0FBQyxHQUFELEVBQU0sd0NBQU47QUFKUCxHQUQrQjtBQU9yQ0MsZUFBYSxFQUFFO0FBQ2JMLFFBQUksRUFBRXJDLE1BRE87QUFFYnVDLFlBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyxtQ0FBUCxDQUZHO0FBR2JFLGFBQVMsRUFBRSxDQUFDLENBQUQsRUFBSSxzQ0FBSixDQUhFO0FBSWJFLFdBQU8sRUFBRTtBQUpJLEdBUHNCO0FBYXJDQyxhQUFXLEVBQUU7QUFDWFAsUUFBSSxFQUFFQyxNQURLO0FBRVhDLFlBQVEsRUFBRSxDQUFDLElBQUQsRUFBTywrQkFBUDtBQUZDLEdBYndCO0FBaUJyQ00sU0FBTyxFQUFFO0FBQ1BSLFFBQUksRUFBRUMsTUFEQztBQUVQQyxZQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU8sMkJBQVA7QUFGSCxHQWpCNEI7QUFxQnJDTyxlQUFhLEVBQUU7QUFDYlQsUUFBSSxFQUFFckMsTUFETztBQUVidUMsWUFBUSxFQUFFLENBQUMsSUFBRCxFQUFPLGtDQUFQO0FBRkcsR0FyQnNCO0FBeUJyQ1EsV0FBUyxFQUFFO0FBQ1RWLFFBQUksRUFBRXJDLE1BREc7QUFFVHVDLFlBQVEsRUFBRSxDQUFDLElBQUQsRUFBTyxxQ0FBUDtBQUZELEdBekIwQjtBQTZCckNTLFVBQVEsRUFBRTtBQUNSWCxRQUFJLEVBQUVZLE9BREU7QUFFUk4sV0FBTyxFQUFFO0FBRkQsR0E3QjJCO0FBaUNyQ08sV0FBUyxFQUFFO0FBQ1RiLFFBQUksRUFBRVksT0FERztBQUVUTixXQUFPLEVBQUU7QUFGQSxHQWpDMEI7QUFxQ3JDUSxnQkFBYyxFQUFFO0FBQ2RkLFFBQUksRUFBRVksT0FEUTtBQUVkTixXQUFPLEVBQUU7QUFGSyxHQXJDcUI7QUF5Q3JDUyxhQUFXLEVBQUU7QUFDWGYsUUFBSSxFQUFFWSxPQURLO0FBRVhOLFdBQU8sRUFBRTtBQUZFLEdBekN3QjtBQTZDckNVLGNBQVksRUFBRTtBQUNaaEIsUUFBSSxFQUFFWSxPQURNO0FBRVpOLFdBQU8sRUFBRTtBQUZHLEdBN0N1QjtBQWlEckNuQyxTQUFPLEVBQUU7QUFDUDZCLFFBQUksRUFBRXJDLE1BREM7QUFFUDJDLFdBQU8sRUFBRTtBQUZGLEdBakQ0QjtBQXFEckNwQyxjQUFZLEVBQUU7QUFDWjhCLFFBQUksRUFBRXJDLE1BRE07QUFFWjJDLFdBQU8sRUFBRTtBQUZHLEdBckR1QjtBQXlEckN4RSxRQUFNLEVBQUUsQ0FDTjtBQUNFUSxhQUFTLEVBQUU7QUFDVDBELFVBQUksRUFBRUMsTUFERztBQUVUQyxjQUFRLEVBQUU7QUFGRCxLQURiO0FBS0UzRCxPQUFHLEVBQUU7QUFDSHlELFVBQUksRUFBRUMsTUFESDtBQUVIQyxjQUFRLEVBQUU7QUFGUDtBQUxQLEdBRE0sQ0F6RDZCO0FBcUVyQ2UsVUFBUSxFQUFFO0FBQ1JqQixRQUFJLEVBQUVDLE1BREU7QUFFUkMsWUFBUSxFQUFFLENBQUMsSUFBRCxFQUFPLDRCQUFQLENBRkY7QUFHUmdCLFFBQUksRUFBRTtBQUNKeEIsWUFBTSxFQUFFLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsT0FBbkIsQ0FESjtBQUVKdEMsYUFBTyxFQUFFO0FBRkw7QUFIRSxHQXJFMkI7QUE2RXJDUyxTQUFPLEVBQUUsQ0FDUDtBQUNFcEIsUUFBSSxFQUFFO0FBQ0p1RCxVQUFJLEVBQUVsRyxpRUFERjtBQUVKcUgsU0FBRyxFQUFFLE1BRkQ7QUFHSmpCLGNBQVEsRUFBRTtBQUhOLEtBRFI7QUFNRXhDLFFBQUksRUFBRTtBQUNKc0MsVUFBSSxFQUFFQyxNQURGO0FBRUpDLGNBQVEsRUFBRTtBQUZOLEtBTlI7QUFVRTVDLFVBQU0sRUFBRTtBQUNOMEMsVUFBSSxFQUFFckMsTUFEQTtBQUVOdUMsY0FBUSxFQUFFO0FBRkosS0FWVjtBQWNFM0MsV0FBTyxFQUFFO0FBQ1B5QyxVQUFJLEVBQUVDLE1BREM7QUFFUEMsY0FBUSxFQUFFO0FBRkg7QUFkWCxHQURPLENBN0U0QjtBQWtHckN6RCxNQUFJLEVBQUU7QUFDSnVELFFBQUksRUFBRWxHLGlFQURGO0FBRUpxSCxPQUFHLEVBQUUsTUFGRCxDQUdKOztBQUhJLEdBbEcrQjtBQXVHckNDLFdBQVMsRUFBRTtBQUNUcEIsUUFBSSxFQUFFcUIsSUFERztBQUVUZixXQUFPLEVBQUVlLElBQUksQ0FBQ0M7QUFGTDtBQXZHMEIsQ0FBcEIsQ0FBbkI7QUE2R0EsTUFBTXRHLElBQUksR0FBR2xCLDZEQUFBLElBQXdCQSxxREFBQSxDQUFlLE1BQWYsRUFBdUJpRyxVQUF2QixDQUFyQztBQUVBLCtEQUFlL0UsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUNBO0FBQ0E7QUFDQTtBQUVBbkIsbURBQVM7QUFFVCxNQUFNMEgsTUFBTSxHQUFHQyxtREFBRSxDQUFDO0FBQUVDLFNBQU9BO0FBQVQsQ0FBRCxDQUFqQjtBQUVBRixNQUFNLENBQUNHLEdBQVAsQ0FBV2hILDJEQUFYO0FBQ0E2RyxNQUFNLENBQUNJLElBQVAsQ0FBWTlGLDBEQUFaO0FBRUEsK0RBQWUwRixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBLE1BQU1yRyxXQUFOLENBQWtCO0FBQ2hCMEcsYUFBVyxDQUFDekcsS0FBRCxFQUFRMEcsUUFBUixFQUFrQjtBQUMzQixTQUFLMUcsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBSzBHLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7O0FBRUR6RyxRQUFNLEdBQUc7QUFDUCxVQUFNMEcsUUFBUSxHQUFHLEtBQUtELFFBQUwsQ0FBY0MsUUFBZCxHQUNiO0FBQ0V0QixhQUFPLEVBQUU7QUFDUHVCLGNBQU0sRUFBRSxLQUFLRixRQUFMLENBQWNDLFFBRGY7QUFFUEUsZ0JBQVEsRUFBRTtBQUZIO0FBRFgsS0FEYSxHQU9iLEVBUEo7QUFTQSxTQUFLN0csS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBVzJDLElBQVgsbUJBQXFCZ0UsUUFBckIsRUFBYjtBQUNBLFdBQU8sSUFBUDtBQUNEOztBQUVEekcsUUFBTSxHQUFHO0FBQ1AsVUFBTTRHLFNBQVMscUJBQVEsS0FBS0osUUFBYixDQUFmLENBRE8sQ0FHUDs7O0FBQ0EsVUFBTUssWUFBWSxHQUFHLENBQUMsVUFBRCxFQUFhLE1BQWIsQ0FBckI7QUFDQUEsZ0JBQVksQ0FBQ2pFLE9BQWIsQ0FBc0JrRSxFQUFELElBQVEsT0FBT0YsU0FBUyxDQUFDRSxFQUFELENBQTdDLEVBTE8sQ0FPUDs7QUFDQSxRQUFJQyxXQUFXLEdBQUcsRUFBbEI7QUFDQSxVQUFNQyxZQUFZLEdBQUc1QyxNQUFNLENBQUM2QyxJQUFQLENBQVlMLFNBQVosRUFBdUJ6RyxNQUE1Qzs7QUFFQSxTQUFLLElBQUlTLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdvRyxZQUFwQixFQUFrQ3BHLENBQUMsRUFBbkMsRUFBdUM7QUFDckMsVUFBSTRGLFFBQVEsR0FBR1UsSUFBSSxDQUFDQyxTQUFMLENBQWUvQyxNQUFNLENBQUM2QyxJQUFQLENBQVlMLFNBQVosRUFBdUJoRyxDQUF2QixDQUFmLENBQWY7QUFDQSxZQUFNd0csV0FBVyxHQUFHWixRQUFRLENBQUNhLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0JiLFFBQVEsQ0FBQ2MsT0FBVCxDQUFpQixHQUFqQixDQUF0QixDQUFwQjs7QUFFQSxVQUFJRixXQUFXLENBQUNqSCxNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQzFCLGNBQU1vSCxVQUFVLEdBQUduRCxNQUFNLENBQUNDLE1BQVAsQ0FBY3VDLFNBQWQsRUFBeUIsQ0FBekIsQ0FBbkI7QUFFQSxjQUFNWSxjQUFjLEdBQUdoQixRQUFRLENBQUNhLFNBQVQsQ0FDckJiLFFBQVEsQ0FBQ2MsT0FBVCxDQUFpQixHQUFqQixJQUF3QixDQURILEVBRXJCZCxRQUFRLENBQUNjLE9BQVQsQ0FBaUIsR0FBakIsQ0FGcUIsQ0FBdkI7QUFLQVAsbUJBQVcsbUNBQ05BLFdBRE07QUFFVCxXQUFDSyxXQUFELEdBQWU7QUFBRSxhQUFFLElBQUdJLGNBQWUsRUFBcEIsR0FBd0JEO0FBQTFCO0FBRk4sVUFBWDtBQUlELE9BWkQsTUFZTztBQUNMUixtQkFBVyxtQ0FDTkEsV0FETTtBQUVULFdBQUMzQyxNQUFNLENBQUM2QyxJQUFQLENBQVlMLFNBQVosRUFBdUJoRyxDQUF2QixDQUFELEdBQTZCd0QsTUFBTSxDQUFDQyxNQUFQLENBQWN1QyxTQUFkLEVBQXlCaEcsQ0FBekI7QUFGcEIsVUFBWDtBQUlEO0FBQ0Y7O0FBRUQsU0FBS2QsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBVzJDLElBQVgsQ0FBZ0JzRSxXQUFoQixDQUFiO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQzRyxZQUFVLENBQUNYLFVBQUQsRUFBYTtBQUNyQixVQUFNZ0ksV0FBVyxHQUFHbkYsTUFBTSxDQUFDLEtBQUtrRSxRQUFMLENBQWNrQixJQUFmLENBQU4sSUFBOEIsQ0FBbEQ7QUFDQSxVQUFNQyxJQUFJLEdBQUdsSSxVQUFVLElBQUlnSSxXQUFXLEdBQUcsQ0FBbEIsQ0FBdkI7QUFFQSxTQUFLM0gsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBVzhILEtBQVgsQ0FBaUJuSSxVQUFqQixFQUE2QmtJLElBQTdCLENBQWtDQSxJQUFsQyxDQUFiO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7O0FBakVlOztBQW9FbEIsK0RBQWU5SCxXQUFmLEU7Ozs7Ozs7Ozs7OztBQ3BFQSxNQUFNNkIsWUFBTixTQUEyQm1HLEtBQTNCLENBQWlDO0FBQy9CdEIsYUFBVyxDQUFDeEUsT0FBRCxFQUFVa0MsVUFBVixFQUFzQjtBQUMvQixVQUFNbEMsT0FBTjtBQUNBLFNBQUtrQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUVBNEQsU0FBSyxDQUFDQyxpQkFBTixDQUF3QixJQUF4QixFQUE4QixLQUFLdkIsV0FBbkM7QUFDRDs7QUFOOEI7O0FBU2pDLCtEQUFlN0UsWUFBZixFOzs7Ozs7Ozs7OztBQ1RBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InBhZ2VzL2FwaS9yb29tcy9yb29tcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIlxuXG5jb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPj0gMSkge1xuICAgIHJldHVyblxuICB9XG4gIG1vbmdvb3NlXG4gICAgLmNvbm5lY3QocHJvY2Vzcy5lbnYuREIsIHtcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgfSlcbiAgICAudGhlbigoY29uKSA9PiBjb25zb2xlLmxvZyhcImNvbm5lY3RlZCB0byBEQlwiKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCXG4iLCJpbXBvcnQgUm9vbSBmcm9tIFwiLi4vbW9kZWxzL3Jvb21Nb2RlbFwiXG5cbi8vIGltcG9ydCBCb29raW5nIGZyb20gXCIuLi9tb2RlbHMvYm9va2luZ01vZGVsXCJcblxuaW1wb3J0IGNsb3VkaW5hcnkgZnJvbSBcImNsb3VkaW5hcnlcIlxuXG5pbXBvcnQgRXJyb3JIYW5kbGVyIGZyb20gXCIuLi91dGlscy9lcnJvckhhbmRsZXJcIlxuaW1wb3J0IGNhdGNoQXN5bmNFcnJvcnMgZnJvbSBcIi4uL21pZGRsZXdhcmVzL2NhdGNoQXN5bmNFcnJvcnNcIlxuaW1wb3J0IEFQSUZlYXR1cmVzIGZyb20gXCIuLi91dGlscy9hcGlGZWF0dXJlc1wiXG5cbi8vIENyZWF0ZSBhbGwgcm9vbXMgICA9PiAgIC9hcGkvcm9vbXNcbmNvbnN0IGFsbFJvb21zID0gY2F0Y2hBc3luY0Vycm9ycyhhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgcmVzUGVyUGFnZSA9IDRcblxuICBjb25zdCByb29tc0NvdW50ID0gYXdhaXQgUm9vbS5jb3VudERvY3VtZW50cygpXG5cbiAgY29uc3QgYXBpRmVhdHVyZXMgPSBuZXcgQVBJRmVhdHVyZXMoUm9vbS5maW5kKCksIHJlcS5xdWVyeSkuc2VhcmNoKCkuZmlsdGVyKClcblxuICBsZXQgcm9vbXMgPSBhd2FpdCBhcGlGZWF0dXJlcy5xdWVyeVxuICBsZXQgZmlsdGVyZWRSb29tc0NvdW50ID0gcm9vbXMubGVuZ3RoXG5cbiAgYXBpRmVhdHVyZXMucGFnaW5hdGlvbihyZXNQZXJQYWdlKVxuICByb29tcyA9IGF3YWl0IGFwaUZlYXR1cmVzLnF1ZXJ5XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgcm9vbXNDb3VudCxcbiAgICByZXNQZXJQYWdlLFxuICAgIGZpbHRlcmVkUm9vbXNDb3VudCxcbiAgICByb29tcyxcbiAgfSlcbn0pXG5cbi8vIENyZWF0ZSBuZXcgcm9vbSAgID0+ICAgL2FwaS9yb29tc1xuY29uc3QgbmV3Um9vbSA9IGNhdGNoQXN5bmNFcnJvcnMoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IGltYWdlcyA9IHJlcS5ib2R5LmltYWdlc1xuXG4gIGxldCBpbWFnZXNMaW5rcyA9IFtdXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbG91ZGluYXJ5LnYyLnVwbG9hZGVyLnVwbG9hZChpbWFnZXNbaV0sIHtcbiAgICAgIGZvbGRlcjogXCJib29raXQvcm9vbXNcIixcbiAgICB9KVxuXG4gICAgaW1hZ2VzTGlua3MucHVzaCh7XG4gICAgICBwdWJsaWNfaWQ6IHJlc3VsdC5wdWJsaWNfaWQsXG4gICAgICB1cmw6IHJlc3VsdC5zZWN1cmVfdXJsLFxuICAgIH0pXG4gIH1cblxuICByZXEuYm9keS5pbWFnZXMgPSBpbWFnZXNMaW5rc1xuICByZXEuYm9keS51c2VyID0gcmVxLnVzZXIuX2lkXG5cbiAgY29uc3Qgcm9vbSA9IGF3YWl0IFJvb20uY3JlYXRlKHJlcS5ib2R5KVxuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICBzdWNjZXNzOiB0cnVlLFxuICAgIHJvb20sXG4gIH0pXG59KVxuXG4vLyBHZXQgcm9vbSBkZXRhaWxzICAgPT4gICAvYXBpL3Jvb21zLzppZFxuY29uc3QgZ2V0U2luZ2xlUm9vbSA9IGNhdGNoQXN5bmNFcnJvcnMoYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IHJvb20gPSBhd2FpdCBSb29tLmZpbmRCeUlkKHJlcS5xdWVyeS5pZClcblxuICBpZiAoIXJvb20pIHtcbiAgICByZXR1cm4gbmV4dChuZXcgRXJyb3JIYW5kbGVyKFwiUm9vbSBub3QgZm91bmQgd2l0aCB0aGlzIElEXCIsIDQwNCkpXG4gIH1cblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgc3VjY2VzczogdHJ1ZSxcbiAgICByb29tLFxuICB9KVxufSlcblxuLy8gVXBkYXRlIHJvb20gZGV0YWlscyAgID0+ICAgL2FwaS9yb29tcy86aWRcbmNvbnN0IHVwZGF0ZVJvb20gPSBjYXRjaEFzeW5jRXJyb3JzKGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zb2xlLmxvZyhyZXEuYm9keSlcbiAgbGV0IHJvb20gPSBhd2FpdCBSb29tLmZpbmRCeUlkKHJlcS5xdWVyeS5pZClcblxuICBpZiAoIXJvb20pIHtcbiAgICByZXR1cm4gbmV4dChuZXcgRXJyb3JIYW5kbGVyKFwiUm9vbSBub3QgZm91bmQgd2l0aCB0aGlzIElEXCIsIDQwNCkpXG4gIH1cblxuICAvLyBpZiAocmVxLmJvZHkuaW1hZ2VzKSB7XG4gIC8vICAgLy8gRGVsZXRlIGltYWdlcyBhc3NvY2lhdGVkIHdpdGggdGhlIHJvb21cbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb20uaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gIC8vICAgICBhd2FpdCBjbG91ZGluYXJ5LnYyLnVwbG9hZGVyLmRlc3Ryb3kocm9vbS5pbWFnZXNbaV0ucHVibGljX2lkKVxuICAvLyAgIH1cblxuICAvLyAgIGxldCBpbWFnZXNMaW5rcyA9IFtdXG4gIC8vICAgY29uc3QgaW1hZ2VzID0gcmVxLmJvZHkuaW1hZ2VzXG5cbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAvLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xvdWRpbmFyeS52Mi51cGxvYWRlci51cGxvYWQoaW1hZ2VzW2ldLCB7XG4gIC8vICAgICAgIGZvbGRlcjogXCJib29raXQvcm9vbXNcIixcbiAgLy8gICAgIH0pXG5cbiAgLy8gICAgIGltYWdlc0xpbmtzLnB1c2goe1xuICAvLyAgICAgICBwdWJsaWNfaWQ6IHJlc3VsdC5wdWJsaWNfaWQsXG4gIC8vICAgICAgIHVybDogcmVzdWx0LnNlY3VyZV91cmwsXG4gIC8vICAgICB9KVxuICAvLyAgIH1cblxuICAvLyByZXEuYm9keS5pbWFnZXMgPSBpbWFnZXNMaW5rc1xuICAvLyB9XG5cbiAgbGV0IG5ld1Jvb20gPSBhd2FpdCBSb29tLmZpbmRCeUlkQW5kVXBkYXRlKHJlcS5xdWVyeS5pZCwgcmVxLmJvZHksIHtcbiAgICBydW5WYWxpZGF0b3JzOiB0cnVlLFxuICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICB9KVxuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICBzdWNjZXNzOiB0cnVlLFxuICAgIG5ld1Jvb20sXG4gIH0pXG59KVxuXG4vLyBEZWxldGUgcm9vbSAgID0+ICAgL2FwaS9yb29tcy86aWRcbmNvbnN0IGRlbGV0ZVJvb20gPSBjYXRjaEFzeW5jRXJyb3JzKGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCByb29tID0gYXdhaXQgUm9vbS5maW5kQnlJZChyZXEucXVlcnkuaWQpXG5cbiAgaWYgKCFyb29tKSB7XG4gICAgcmV0dXJuIG5leHQobmV3IEVycm9ySGFuZGxlcihcIlJvb20gbm90IGZvdW5kIHdpdGggdGhpcyBJRFwiLCA0MDQpKVxuICB9XG5cbiAgLy8gRGVsZXRlIGltYWdlcyBhc3NvY2lhdGVkIHdpdGggdGhlIHJvb21cbiAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCByb29tLmltYWdlcy5sZW5ndGg7IGkrKykge1xuICAvLyAgIGF3YWl0IGNsb3VkaW5hcnkudjIudXBsb2FkZXIuZGVzdHJveShyb29tLmltYWdlc1tpXS5wdWJsaWNfaWQpXG4gIC8vIH1cblxuICBhd2FpdCByb29tLnJlbW92ZSgpXG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgbWVzc2FnZTogXCJSb29tIGlzIGRlbGV0ZWQuXCIsXG4gIH0pXG59KVxuXG4vLyBDcmVhdGUgYSBuZXcgcmV2aWV3ICAgPT4gICAvYXBpL3Jldmlld3NcbmV4cG9ydCBjb25zdCBjcmVhdGVSb29tUmV2aWV3ID0gY2F0Y2hBc3luY0Vycm9ycyhhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyByYXRpbmcsIGNvbW1lbnQsIHJvb21JZCB9ID0gcmVxLmJvZHlcblxuICBjb25zdCByZXZpZXcgPSB7XG4gICAgdXNlcjogcmVxLnVzZXIuX2lkLFxuICAgIG5hbWU6IHJlcS51c2VyLm5hbWUsXG4gICAgcmF0aW5nOiBOdW1iZXIocmF0aW5nKSxcbiAgICBjb21tZW50LFxuICB9XG5cbiAgY29uc3Qgcm9vbSA9IGF3YWl0IFJvb20uZmluZEJ5SWQocm9vbUlkKVxuXG4gIGNvbnN0IGlzUmV2aWV3ZWQgPSByb29tLnJldmlld3MuZmluZChcbiAgICAocikgPT4gci51c2VyLnRvU3RyaW5nKCkgPT09IHJlcS51c2VyLl9pZC50b1N0cmluZygpXG4gIClcblxuICBpZiAoaXNSZXZpZXdlZCkge1xuICAgIHJvb20ucmV2aWV3cy5mb3JFYWNoKChyZXZpZXcpID0+IHtcbiAgICAgIGlmIChyZXZpZXcudXNlci50b1N0cmluZygpID09PSByZXEudXNlci5faWQudG9TdHJpbmcoKSkge1xuICAgICAgICByZXZpZXcuY29tbWVudCA9IGNvbW1lbnRcbiAgICAgICAgcmV2aWV3LnJhdGluZyA9IHJhdGluZ1xuICAgICAgfVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgcm9vbS5yZXZpZXdzLnB1c2gocmV2aWV3KVxuICAgIHJvb20ubnVtT2ZSZXZpZXdzID0gcm9vbS5yZXZpZXdzLmxlbmd0aFxuICB9XG5cbiAgcm9vbS5yYXRpbmdzID1cbiAgICByb29tLnJldmlld3MucmVkdWNlKChhY2MsIGl0ZW0pID0+IGl0ZW0ucmF0aW5nICsgYWNjLCAwKSAvXG4gICAgcm9vbS5yZXZpZXdzLmxlbmd0aFxuXG4gIGF3YWl0IHJvb20uc2F2ZSh7IHZhbGlkYXRlQmVmb3JlU2F2ZTogZmFsc2UgfSlcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgc3VjY2VzczogdHJ1ZSxcbiAgfSlcbn0pXG5cbmV4cG9ydCBjb25zdCBjaGVja1Jldmlld0F1dGggPSBjYXRjaEFzeW5jRXJyb3JzKGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCB7IHJvb21JZCB9ID0gcmVxLnF1ZXJ5XG5cbiAgY29uc3QgYm9va2luZ3MgPSBhd2FpdCBCb29raW5nLmZpbmQoeyB1c2VyOiByZXEudXNlci5faWQsIHJvb206IHJvb21JZCB9KVxuXG4gIGxldCBpc1Jldmlld0F2YWlsYWJsZSA9IGZhbHNlXG4gIGlmIChib29raW5ncy5sZW5ndGggPiAwKSBpc1Jldmlld0F2YWlsYWJsZSA9IHRydWVcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGlzUmV2aWV3QXZhaWxhYmxlIH0pXG59KVxuXG5leHBvcnQgY29uc3QgYWxsQWRtaW5Sb29tcyA9IGNhdGNoQXN5bmNFcnJvcnMoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHJvb21zID0gYXdhaXQgUm9vbS5maW5kKClcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCByb29tcyB9KVxufSlcblxuZXhwb3J0IGNvbnN0IGdldFJvb21SZXZpZXdzID0gY2F0Y2hBc3luY0Vycm9ycyhhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qgcm9vbSA9IGF3YWl0IFJvb20uZmluZEJ5SWQocmVxLnF1ZXJ5LmlkKVxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIHJldmlld3M6IHJvb20ucmV2aWV3cyB9KVxufSlcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVJldmlldyA9IGNhdGNoQXN5bmNFcnJvcnMoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHJvb20gPSBhd2FpdCBSb29tLmZpbmRCeUlkKHJlcS5xdWVyeS5yb29tSWQpXG5cbiAgY29uc3QgcmV2aWV3cyA9IHJvb20ucmV2aWV3cy5maWx0ZXIoXG4gICAgKHJldmlldykgPT4gcmV2aWV3Ll9pZC50b1N0cmluZygpICE9PSByZXEucXVlcnkuaWQudG9TdHJpbmcoKVxuICApXG5cbiAgY29uc3QgbnVtT2ZSZXZpZXdzID0gcmV2aWV3cy5sZW5ndGhcblxuICBjb25zdCByYXRpbmdzID1cbiAgICByb29tLnJldmlld3MucmVkdWNlKChhY2MsIGl0ZW0pID0+IGl0ZW0ucmF0aW5nICsgYWNjLCAwKSAvIHJldmlld3MubGVuZ3RoXG5cbiAgYXdhaXQgUm9vbS5maW5kQnlJZEFuZFVwZGF0ZShcbiAgICByZXEucXVlcnkucm9vbUlkLFxuICAgIHtcbiAgICAgIHJldmlld3MsXG4gICAgICByYXRpbmdzLFxuICAgICAgbnVtT2ZSZXZpZXdzLFxuICAgIH0sXG4gICAge1xuICAgICAgbmV3OiB0cnVlLFxuICAgICAgcnVuVmFsaWRhdG9yczogdHJ1ZSxcbiAgICAgIHVzZUZpbmRBbmRNb2RpZnk6IGZhbHNlLFxuICAgIH1cbiAgKVxuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICBzdWNjZXNzOiB0cnVlLFxuICB9KVxufSlcblxuZXhwb3J0IHsgYWxsUm9vbXMsIG5ld1Jvb20sIGdldFNpbmdsZVJvb20sIHVwZGF0ZVJvb20sIGRlbGV0ZVJvb20gfVxuIiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmMpID0+IChyZXEsIHJlcywgbmV4dCkgPT5cbiAgUHJvbWlzZS5yZXNvbHZlKGZ1bmMocmVxLCByZXMsIG5leHQpKS5jYXRjaChuZXh0KVxuIiwiaW1wb3J0IEVycm9ySGFuZGxlciBmcm9tIFwiLi4vdXRpbHMvZXJyb3JIYW5kbGVyXCJcblxuZXhwb3J0IGRlZmF1bHQgKGVyciwgcmVxLCByZXMsIG5leHQpID0+IHtcbiAgZXJyLnN0YXR1c0NvZGUgPSBlcnIuc3RhdHVzQ29kZSB8fCA1MDBcblxuICBsZXQgZXJyb3IgPSB7IC4uLmVyciB9XG5cbiAgZXJyb3IubWVzc2FnZSA9IGVyci5tZXNzYWdlXG5cbiAgLy8gV3JvbmcgTW9uZ29vc2UgT2JqZWN0IElEIEVycm9yXG4gIGlmIChlcnIubmFtZSA9PT0gXCJDYXN0RXJyb3JcIikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgUmVzb3VyY2Ugbm90IGZvdW5kLiBJbnZhbGlkOiAke2Vyci5wYXRofWBcbiAgICBlcnJvciA9IG5ldyBFcnJvckhhbmRsZXIobWVzc2FnZSwgNDAwKVxuICB9XG5cbiAgLy8gSGFuZGxpbmcgbW9uZ29vc2UgVmFsaWRhdGlvbiBlcnJvclxuICBpZiAoZXJyLm5hbWUgPT09IFwiVmFsaWRhdGlvbkVycm9yXCIpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gT2JqZWN0LnZhbHVlcyhlcnIuZXJyb3JzKS5tYXAoKHZhbHVlKSA9PiB2YWx1ZS5tZXNzYWdlKVxuICAgIGVycm9yID0gbmV3IEVycm9ySGFuZGxlcihtZXNzYWdlLCA0MDApXG4gIH1cblxuICByZXMuc3RhdHVzKGVyci5zdGF0dXNDb2RlKS5qc29uKHtcbiAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICBlcnJvcixcbiAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlLFxuICAgIHN0YWNrOiBlcnJvci5zdGFjayxcbiAgfSlcbn1cbiIsImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIlxuXG5jb25zdCByb29tU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIG5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciByb29tIG5hbWVcIl0sXG4gICAgdHJpbTogdHJ1ZSxcbiAgICBtYXhMZW5ndGg6IFsxMDAsIFwiUm9vbSBuYW1lIGNhbm5vdCBleGNlZWQgMTAwIGNoYXJhY3RlcnNcIl0sXG4gIH0sXG4gIHByaWNlUGVyTmlnaHQ6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciByb29tIHByaWNlIHBlciBuaWdodFwiXSxcbiAgICBtYXhMZW5ndGg6IFs0LCBcIlJvb20gbmFtZSBjYW5ub3QgZXhjZWVkIDQgY2hhcmFjdGVyc1wiXSxcbiAgICBkZWZhdWx0OiAwLjAsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgZW50ZXIgcm9vbSBkZXNjcmlwdGlvblwiXSxcbiAgfSxcbiAgYWRkcmVzczoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIHJvb20gYWRkcmVzc1wiXSxcbiAgfSxcbiAgZ3Vlc3RDYXBhY2l0eToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIHJvb20gZ3Vlc3QgY2FwYWNpdHlcIl0sXG4gIH0sXG4gIG51bU9mQmVkczoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIG51bWJlciBvZiBiZWRzIGluIHJvb21cIl0sXG4gIH0sXG4gIGludGVybmV0OiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgYnJlYWtmYXN0OiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgYWlyQ29uZGl0aW9uZWQ6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICBwZXRzQWxsb3dlZDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIHJvb21DbGVhbmluZzoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIHJhdGluZ3M6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMCxcbiAgfSxcbiAgbnVtT2ZSZXZpZXdzOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDAsXG4gIH0sXG4gIGltYWdlczogW1xuICAgIHtcbiAgICAgIHB1YmxpY19pZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHVybDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxuICBjYXRlZ29yeToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIHJvb20gY2F0ZWdvcnlcIl0sXG4gICAgZW51bToge1xuICAgICAgdmFsdWVzOiBbXCJLaW5nXCIsIFwiU2luZ2xlXCIsIFwiVHdpbnNcIl0sXG4gICAgICBtZXNzYWdlOiBcIlBsZWFzZSBzZWxlY3QgY29ycmVjdCBjYXRlZ29yeSBmb3Igcm9vbVwiLFxuICAgIH0sXG4gIH0sXG4gIHJldmlld3M6IFtcbiAgICB7XG4gICAgICB1c2VyOiB7XG4gICAgICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5PYmplY3RJZCxcbiAgICAgICAgcmVmOiBcIlVzZXJcIixcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB9LFxuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHJhdGluZzoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGNvbW1lbnQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgdXNlcjoge1xuICAgIHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5PYmplY3RJZCxcbiAgICByZWY6IFwiVXNlclwiLFxuICAgIC8vIHJlcXVpcmVkOiBmYWxzZSxcbiAgfSxcbiAgY3JlYXRlZEF0OiB7XG4gICAgdHlwZTogRGF0ZSxcbiAgICBkZWZhdWx0OiBEYXRlLm5vdyxcbiAgfSxcbn0pXG5cbmNvbnN0IFJvb20gPSBtb25nb29zZS5tb2RlbHMuUm9vbSB8fCBtb25nb29zZS5tb2RlbChcIlJvb21cIiwgcm9vbVNjaGVtYSlcblxuZXhwb3J0IGRlZmF1bHQgUm9vbVxuIiwiaW1wb3J0IG5jIGZyb20gXCJuZXh0LWNvbm5lY3RcIlxuaW1wb3J0IHsgYWxsUm9vbXMsIG5ld1Jvb20gfSBmcm9tIFwiLi4vLi4vLi4vY29udHJvbGxlcnMvcm9vbUNvbnRcIlxuaW1wb3J0IGNvbm5lY3REQiBmcm9tIFwiLi4vLi4vLi4vY29ubmVjdERCXCJcbmltcG9ydCBvbkVycm9yIGZyb20gXCIuLi8uLi8uLi9taWRkbGV3YXJlcy9lcnJvclwiXG5cbmNvbm5lY3REQigpXG5cbmNvbnN0IHJvdXRlciA9IG5jKHsgb25FcnJvciB9KVxuXG5yb3V0ZXIuZ2V0KGFsbFJvb21zKVxucm91dGVyLnBvc3QobmV3Um9vbSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXG4iLCJjbGFzcyBBUElGZWF0dXJlcyB7XG4gIGNvbnN0cnVjdG9yKHF1ZXJ5LCBxdWVyeVN0cikge1xuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMucXVlcnlTdHIgPSBxdWVyeVN0clxuICB9XG5cbiAgc2VhcmNoKCkge1xuICAgIGNvbnN0IGxvY2F0aW9uID0gdGhpcy5xdWVyeVN0ci5sb2NhdGlvblxuICAgICAgPyB7XG4gICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgJHJlZ2V4OiB0aGlzLnF1ZXJ5U3RyLmxvY2F0aW9uLFxuICAgICAgICAgICAgJG9wdGlvbnM6IFwiaVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIDoge31cblxuICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5LmZpbmQoeyAuLi5sb2NhdGlvbiB9KVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBmaWx0ZXIoKSB7XG4gICAgY29uc3QgcXVlcnlDb3B5ID0geyAuLi50aGlzLnF1ZXJ5U3RyIH1cblxuICAgIC8vIFJlbW92ZSBmaWVsZHMgZnJvbSBxdWVyeVxuICAgIGNvbnN0IHJlbW92ZUZpZWxkcyA9IFtcImxvY2F0aW9uXCIsIFwicGFnZVwiXVxuICAgIHJlbW92ZUZpZWxkcy5mb3JFYWNoKChlbCkgPT4gZGVsZXRlIHF1ZXJ5Q29weVtlbF0pXG5cbiAgICAvLyBBZHZhbmNlIGZpbHRlcmluZyB3aXRoIGd0LCBndGUgZXRjXG4gICAgbGV0IGZpbHRlclF1ZXJ5ID0ge31cbiAgICBjb25zdCBmaWVsZHNMZW5ndGggPSBPYmplY3Qua2V5cyhxdWVyeUNvcHkpLmxlbmd0aFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHNMZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHF1ZXJ5U3RyID0gSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMocXVlcnlDb3B5KVtpXSlcbiAgICAgIGNvbnN0IGZpbHRlckZpZWxkID0gcXVlcnlTdHIuc3Vic3RyaW5nKDEsIHF1ZXJ5U3RyLmluZGV4T2YoXCJbXCIpKVxuXG4gICAgICBpZiAoZmlsdGVyRmllbGQubGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gT2JqZWN0LnZhbHVlcyhxdWVyeUNvcHkpWzBdXG5cbiAgICAgICAgY29uc3QgZmlsdGVyT3BlcmF0b3IgPSBxdWVyeVN0ci5zdWJzdHJpbmcoXG4gICAgICAgICAgcXVlcnlTdHIuaW5kZXhPZihcIltcIikgKyAxLFxuICAgICAgICAgIHF1ZXJ5U3RyLmluZGV4T2YoXCJdXCIpXG4gICAgICAgIClcblxuICAgICAgICBmaWx0ZXJRdWVyeSA9IHtcbiAgICAgICAgICAuLi5maWx0ZXJRdWVyeSxcbiAgICAgICAgICBbZmlsdGVyRmllbGRdOiB7IFtgJCR7ZmlsdGVyT3BlcmF0b3J9YF06IGZpZWxkVmFsdWUgfSxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsdGVyUXVlcnkgPSB7XG4gICAgICAgICAgLi4uZmlsdGVyUXVlcnksXG4gICAgICAgICAgW09iamVjdC5rZXlzKHF1ZXJ5Q29weSlbaV1dOiBPYmplY3QudmFsdWVzKHF1ZXJ5Q29weSlbaV0sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5maW5kKGZpbHRlclF1ZXJ5KVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBwYWdpbmF0aW9uKHJlc1BlclBhZ2UpIHtcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IE51bWJlcih0aGlzLnF1ZXJ5U3RyLnBhZ2UpIHx8IDFcbiAgICBjb25zdCBza2lwID0gcmVzUGVyUGFnZSAqIChjdXJyZW50UGFnZSAtIDEpXG5cbiAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeS5saW1pdChyZXNQZXJQYWdlKS5za2lwKHNraXApXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBUElGZWF0dXJlc1xuIiwiY2xhc3MgRXJyb3JIYW5kbGVyIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBzdGF0dXNDb2RlKSB7XG4gICAgc3VwZXIobWVzc2FnZSlcbiAgICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlXG5cbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9ySGFuZGxlclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xvdWRpbmFyeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==