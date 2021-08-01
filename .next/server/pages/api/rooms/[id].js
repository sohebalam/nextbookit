(function() {
var exports = {};
exports.id = "pages/api/rooms/[id]";
exports.ids = ["pages/api/rooms/[id]"];
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

/***/ "./pages/api/rooms/[id].js":
/*!*********************************!*\
  !*** ./pages/api/rooms/[id].js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _connectDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../connectDB */ "./connectDB.js");
/* harmony import */ var _controllers_roomCont__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../controllers/roomCont */ "./controllers/roomCont.js");
/* harmony import */ var _middlewares_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../middlewares/error */ "./middlewares/error.js");



 // import { isAuthenticatedUser } from "../../../middlewares/auth"

const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()({
  onError: _middlewares_error__WEBPACK_IMPORTED_MODULE_3__.default
});
(0,_connectDB__WEBPACK_IMPORTED_MODULE_1__.default)();
handler.get(_controllers_roomCont__WEBPACK_IMPORTED_MODULE_2__.getSingleRoom);
handler.put(_controllers_roomCont__WEBPACK_IMPORTED_MODULE_2__.updateRoom);
handler.delete(_controllers_roomCont__WEBPACK_IMPORTED_MODULE_2__.deleteRoom);
/* harmony default export */ __webpack_exports__["default"] = (handler);

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/rooms/[id].js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0b2Z1Ly4vY29ubmVjdERCLmpzIiwid2VicGFjazovL25leHRvZnUvLi9jb250cm9sbGVycy9yb29tQ29udC5qcyIsIndlYnBhY2s6Ly9uZXh0b2Z1Ly4vbWlkZGxld2FyZXMvY2F0Y2hBc3luY0Vycm9ycy5qcyIsIndlYnBhY2s6Ly9uZXh0b2Z1Ly4vbWlkZGxld2FyZXMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vbmV4dG9mdS8uL21vZGVscy9yb29tTW9kZWwuanMiLCJ3ZWJwYWNrOi8vbmV4dG9mdS8uL3BhZ2VzL2FwaS9yb29tcy9baWRdLmpzIiwid2VicGFjazovL25leHRvZnUvLi91dGlscy9hcGlGZWF0dXJlcy5qcyIsIndlYnBhY2s6Ly9uZXh0b2Z1Ly4vdXRpbHMvZXJyb3JIYW5kbGVyLmpzIiwid2VicGFjazovL25leHRvZnUvZXh0ZXJuYWwgXCJjbG91ZGluYXJ5XCIiLCJ3ZWJwYWNrOi8vbmV4dG9mdS9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vbmV4dG9mdS9leHRlcm5hbCBcIm5leHQtY29ubmVjdFwiIl0sIm5hbWVzIjpbImNvbm5lY3REQiIsIm1vbmdvb3NlIiwicHJvY2VzcyIsImVudiIsIkRCIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlRmluZEFuZE1vZGlmeSIsInVzZUNyZWF0ZUluZGV4IiwidXNlVW5pZmllZFRvcG9sb2d5IiwidGhlbiIsImNvbiIsImNvbnNvbGUiLCJsb2ciLCJhbGxSb29tcyIsImNhdGNoQXN5bmNFcnJvcnMiLCJyZXEiLCJyZXMiLCJyZXNQZXJQYWdlIiwicm9vbXNDb3VudCIsIlJvb20iLCJhcGlGZWF0dXJlcyIsIkFQSUZlYXR1cmVzIiwicXVlcnkiLCJzZWFyY2giLCJmaWx0ZXIiLCJyb29tcyIsImZpbHRlcmVkUm9vbXNDb3VudCIsImxlbmd0aCIsInBhZ2luYXRpb24iLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsIm5ld1Jvb20iLCJpbWFnZXMiLCJib2R5IiwiaW1hZ2VzTGlua3MiLCJpIiwicmVzdWx0IiwiY2xvdWRpbmFyeSIsImZvbGRlciIsInB1c2giLCJwdWJsaWNfaWQiLCJ1cmwiLCJzZWN1cmVfdXJsIiwidXNlciIsIl9pZCIsInJvb20iLCJnZXRTaW5nbGVSb29tIiwibmV4dCIsImlkIiwiRXJyb3JIYW5kbGVyIiwidXBkYXRlUm9vbSIsInJ1blZhbGlkYXRvcnMiLCJkZWxldGVSb29tIiwicmVtb3ZlIiwibWVzc2FnZSIsImNyZWF0ZVJvb21SZXZpZXciLCJyYXRpbmciLCJjb21tZW50Iiwicm9vbUlkIiwicmV2aWV3IiwibmFtZSIsIk51bWJlciIsImlzUmV2aWV3ZWQiLCJyZXZpZXdzIiwiZmluZCIsInIiLCJ0b1N0cmluZyIsImZvckVhY2giLCJudW1PZlJldmlld3MiLCJyYXRpbmdzIiwicmVkdWNlIiwiYWNjIiwiaXRlbSIsInNhdmUiLCJ2YWxpZGF0ZUJlZm9yZVNhdmUiLCJjaGVja1Jldmlld0F1dGgiLCJib29raW5ncyIsIkJvb2tpbmciLCJpc1Jldmlld0F2YWlsYWJsZSIsImFsbEFkbWluUm9vbXMiLCJnZXRSb29tUmV2aWV3cyIsImRlbGV0ZVJldmlldyIsIm5ldyIsImZ1bmMiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwiZXJyIiwic3RhdHVzQ29kZSIsImVycm9yIiwicGF0aCIsIk9iamVjdCIsInZhbHVlcyIsImVycm9ycyIsIm1hcCIsInZhbHVlIiwic3RhY2siLCJyb29tU2NoZW1hIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidHJpbSIsIm1heExlbmd0aCIsInByaWNlUGVyTmlnaHQiLCJkZWZhdWx0IiwiZGVzY3JpcHRpb24iLCJhZGRyZXNzIiwiZ3Vlc3RDYXBhY2l0eSIsIm51bU9mQmVkcyIsImludGVybmV0IiwiQm9vbGVhbiIsImJyZWFrZmFzdCIsImFpckNvbmRpdGlvbmVkIiwicGV0c0FsbG93ZWQiLCJyb29tQ2xlYW5pbmciLCJjYXRlZ29yeSIsImVudW0iLCJyZWYiLCJjcmVhdGVkQXQiLCJEYXRlIiwibm93IiwiaGFuZGxlciIsIm5jIiwib25FcnJvciIsImdldCIsInB1dCIsImRlbGV0ZSIsImNvbnN0cnVjdG9yIiwicXVlcnlTdHIiLCJsb2NhdGlvbiIsIiRyZWdleCIsIiRvcHRpb25zIiwicXVlcnlDb3B5IiwicmVtb3ZlRmllbGRzIiwiZWwiLCJmaWx0ZXJRdWVyeSIsImZpZWxkc0xlbmd0aCIsImtleXMiLCJKU09OIiwic3RyaW5naWZ5IiwiZmlsdGVyRmllbGQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiZmllbGRWYWx1ZSIsImZpbHRlck9wZXJhdG9yIiwiY3VycmVudFBhZ2UiLCJwYWdlIiwic2tpcCIsImxpbWl0IiwiRXJyb3IiLCJjYXB0dXJlU3RhY2tUcmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFNBQVMsR0FBRyxZQUFZO0FBQzVCLE1BQUlDLHVFQUFBLElBQWtDLENBQXRDLEVBQXlDO0FBQ3ZDO0FBQ0Q7O0FBQ0RBLHlEQUFBLENBQ1dDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxFQUR2QixFQUMyQjtBQUN2QkMsbUJBQWUsRUFBRSxJQURNO0FBRXZCQyxvQkFBZ0IsRUFBRSxLQUZLO0FBR3ZCQyxrQkFBYyxFQUFFLElBSE87QUFJdkJDLHNCQUFrQixFQUFFO0FBSkcsR0FEM0IsRUFPR0MsSUFQSCxDQU9TQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLENBUGpCO0FBUUQsQ0FaRDs7QUFjQSwrREFBZVosU0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NkQTs7QUFFQTtBQUVBO0FBQ0E7Q0FHQTs7QUFDQSxNQUFNYSxRQUFRLEdBQUdDLHNFQUFnQixDQUFDLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNwRCxRQUFNQyxVQUFVLEdBQUcsQ0FBbkI7QUFFQSxRQUFNQyxVQUFVLEdBQUcsTUFBTUMscUVBQUEsRUFBekI7QUFFQSxRQUFNQyxXQUFXLEdBQUcsSUFBSUMsdURBQUosQ0FB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LFVBQWpCLEVBQTZCbUksSUFBN0IsQ0FBa0NBLElBQWxDLENBQWI7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFqRWU7O0FBb0VsQiwrREFBZS9ILFdBQWYsRTs7Ozs7Ozs7Ozs7O0FDcEVBLE1BQU02QixZQUFOLFNBQTJCb0csS0FBM0IsQ0FBaUM7QUFDL0J0QixhQUFXLENBQUN6RSxPQUFELEVBQVVrQyxVQUFWLEVBQXNCO0FBQy9CLFVBQU1sQyxPQUFOO0FBQ0EsU0FBS2tDLFVBQUwsR0FBa0JBLFVBQWxCO0FBRUE2RCxTQUFLLENBQUNDLGlCQUFOLENBQXdCLElBQXhCLEVBQThCLEtBQUt2QixXQUFuQztBQUNEOztBQU44Qjs7QUFTakMsK0RBQWU5RSxZQUFmLEU7Ozs7Ozs7Ozs7O0FDVEEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMEMiLCJmaWxlIjoicGFnZXMvYXBpL3Jvb21zL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCJcblxuY29uc3QgY29ubmVjdERCID0gYXN5bmMgKCkgPT4ge1xuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID49IDEpIHtcbiAgICByZXR1cm5cbiAgfVxuICBtb25nb29zZVxuICAgIC5jb25uZWN0KHByb2Nlc3MuZW52LkRCLCB7XG4gICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbiAgICAgIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH0pXG4gICAgLnRoZW4oKGNvbikgPT4gY29uc29sZS5sb2coXCJjb25uZWN0ZWQgdG8gREJcIikpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQlxuIiwiaW1wb3J0IFJvb20gZnJvbSBcIi4uL21vZGVscy9yb29tTW9kZWxcIlxuXG4vLyBpbXBvcnQgQm9va2luZyBmcm9tIFwiLi4vbW9kZWxzL2Jvb2tpbmdNb2RlbFwiXG5cbmltcG9ydCBjbG91ZGluYXJ5IGZyb20gXCJjbG91ZGluYXJ5XCJcblxuaW1wb3J0IEVycm9ySGFuZGxlciBmcm9tIFwiLi4vdXRpbHMvZXJyb3JIYW5kbGVyXCJcbmltcG9ydCBjYXRjaEFzeW5jRXJyb3JzIGZyb20gXCIuLi9taWRkbGV3YXJlcy9jYXRjaEFzeW5jRXJyb3JzXCJcbmltcG9ydCBBUElGZWF0dXJlcyBmcm9tIFwiLi4vdXRpbHMvYXBpRmVhdHVyZXNcIlxuXG4vLyBDcmVhdGUgYWxsIHJvb21zICAgPT4gICAvYXBpL3Jvb21zXG5jb25zdCBhbGxSb29tcyA9IGNhdGNoQXN5bmNFcnJvcnMoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHJlc1BlclBhZ2UgPSA0XG5cbiAgY29uc3Qgcm9vbXNDb3VudCA9IGF3YWl0IFJvb20uY291bnREb2N1bWVudHMoKVxuXG4gIGNvbnN0IGFwaUZlYXR1cmVzID0gbmV3IEFQSUZlYXR1cmVzKFJvb20uZmluZCgpLCByZXEucXVlcnkpLnNlYXJjaCgpLmZpbHRlcigpXG5cbiAgbGV0IHJvb21zID0gYXdhaXQgYXBpRmVhdHVyZXMucXVlcnlcbiAgbGV0IGZpbHRlcmVkUm9vbXNDb3VudCA9IHJvb21zLmxlbmd0aFxuXG4gIGFwaUZlYXR1cmVzLnBhZ2luYXRpb24ocmVzUGVyUGFnZSlcbiAgcm9vbXMgPSBhd2FpdCBhcGlGZWF0dXJlcy5xdWVyeVxuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICBzdWNjZXNzOiB0cnVlLFxuICAgIHJvb21zQ291bnQsXG4gICAgcmVzUGVyUGFnZSxcbiAgICBmaWx0ZXJlZFJvb21zQ291bnQsXG4gICAgcm9vbXMsXG4gIH0pXG59KVxuXG4vLyBDcmVhdGUgbmV3IHJvb20gICA9PiAgIC9hcGkvcm9vbXNcbmNvbnN0IG5ld1Jvb20gPSBjYXRjaEFzeW5jRXJyb3JzKGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCBpbWFnZXMgPSByZXEuYm9keS5pbWFnZXNcblxuICBsZXQgaW1hZ2VzTGlua3MgPSBbXVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xvdWRpbmFyeS52Mi51cGxvYWRlci51cGxvYWQoaW1hZ2VzW2ldLCB7XG4gICAgICBmb2xkZXI6IFwiYm9va2l0L3Jvb21zXCIsXG4gICAgfSlcblxuICAgIGltYWdlc0xpbmtzLnB1c2goe1xuICAgICAgcHVibGljX2lkOiByZXN1bHQucHVibGljX2lkLFxuICAgICAgdXJsOiByZXN1bHQuc2VjdXJlX3VybCxcbiAgICB9KVxuICB9XG5cbiAgcmVxLmJvZHkuaW1hZ2VzID0gaW1hZ2VzTGlua3NcbiAgcmVxLmJvZHkudXNlciA9IHJlcS51c2VyLl9pZFxuXG4gIGNvbnN0IHJvb20gPSBhd2FpdCBSb29tLmNyZWF0ZShyZXEuYm9keSlcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgc3VjY2VzczogdHJ1ZSxcbiAgICByb29tLFxuICB9KVxufSlcblxuLy8gR2V0IHJvb20gZGV0YWlscyAgID0+ICAgL2FwaS9yb29tcy86aWRcbmNvbnN0IGdldFNpbmdsZVJvb20gPSBjYXRjaEFzeW5jRXJyb3JzKGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCByb29tID0gYXdhaXQgUm9vbS5maW5kQnlJZChyZXEucXVlcnkuaWQpXG5cbiAgaWYgKCFyb29tKSB7XG4gICAgcmV0dXJuIG5leHQobmV3IEVycm9ySGFuZGxlcihcIlJvb20gbm90IGZvdW5kIHdpdGggdGhpcyBJRFwiLCA0MDQpKVxuICB9XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgcm9vbSxcbiAgfSlcbn0pXG5cbi8vIFVwZGF0ZSByb29tIGRldGFpbHMgICA9PiAgIC9hcGkvcm9vbXMvOmlkXG5jb25zdCB1cGRhdGVSb29tID0gY2F0Y2hBc3luY0Vycm9ycyhhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc29sZS5sb2cocmVxLmJvZHkpXG4gIGxldCByb29tID0gYXdhaXQgUm9vbS5maW5kQnlJZChyZXEucXVlcnkuaWQpXG5cbiAgaWYgKCFyb29tKSB7XG4gICAgcmV0dXJuIG5leHQobmV3IEVycm9ySGFuZGxlcihcIlJvb20gbm90IGZvdW5kIHdpdGggdGhpcyBJRFwiLCA0MDQpKVxuICB9XG5cbiAgLy8gaWYgKHJlcS5ib2R5LmltYWdlcykge1xuICAvLyAgIC8vIERlbGV0ZSBpbWFnZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSByb29tXG4gIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb29tLmltYWdlcy5sZW5ndGg7IGkrKykge1xuICAvLyAgICAgYXdhaXQgY2xvdWRpbmFyeS52Mi51cGxvYWRlci5kZXN0cm95KHJvb20uaW1hZ2VzW2ldLnB1YmxpY19pZClcbiAgLy8gICB9XG5cbiAgLy8gICBsZXQgaW1hZ2VzTGlua3MgPSBbXVxuICAvLyAgIGNvbnN0IGltYWdlcyA9IHJlcS5ib2R5LmltYWdlc1xuXG4gIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsb3VkaW5hcnkudjIudXBsb2FkZXIudXBsb2FkKGltYWdlc1tpXSwge1xuICAvLyAgICAgICBmb2xkZXI6IFwiYm9va2l0L3Jvb21zXCIsXG4gIC8vICAgICB9KVxuXG4gIC8vICAgICBpbWFnZXNMaW5rcy5wdXNoKHtcbiAgLy8gICAgICAgcHVibGljX2lkOiByZXN1bHQucHVibGljX2lkLFxuICAvLyAgICAgICB1cmw6IHJlc3VsdC5zZWN1cmVfdXJsLFxuICAvLyAgICAgfSlcbiAgLy8gICB9XG5cbiAgLy8gcmVxLmJvZHkuaW1hZ2VzID0gaW1hZ2VzTGlua3NcbiAgLy8gfVxuXG4gIGxldCBuZXdSb29tID0gYXdhaXQgUm9vbS5maW5kQnlJZEFuZFVwZGF0ZShyZXEucXVlcnkuaWQsIHJlcS5ib2R5LCB7XG4gICAgcnVuVmFsaWRhdG9yczogdHJ1ZSxcbiAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbiAgfSlcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgc3VjY2VzczogdHJ1ZSxcbiAgICBuZXdSb29tLFxuICB9KVxufSlcblxuLy8gRGVsZXRlIHJvb20gICA9PiAgIC9hcGkvcm9vbXMvOmlkXG5jb25zdCBkZWxldGVSb29tID0gY2F0Y2hBc3luY0Vycm9ycyhhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3Qgcm9vbSA9IGF3YWl0IFJvb20uZmluZEJ5SWQocmVxLnF1ZXJ5LmlkKVxuXG4gIGlmICghcm9vbSkge1xuICAgIHJldHVybiBuZXh0KG5ldyBFcnJvckhhbmRsZXIoXCJSb29tIG5vdCBmb3VuZCB3aXRoIHRoaXMgSURcIiwgNDA0KSlcbiAgfVxuXG4gIC8vIERlbGV0ZSBpbWFnZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSByb29tXG4gIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcm9vbS5pbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgLy8gICBhd2FpdCBjbG91ZGluYXJ5LnYyLnVwbG9hZGVyLmRlc3Ryb3kocm9vbS5pbWFnZXNbaV0ucHVibGljX2lkKVxuICAvLyB9XG5cbiAgYXdhaXQgcm9vbS5yZW1vdmUoKVxuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICBzdWNjZXNzOiB0cnVlLFxuICAgIG1lc3NhZ2U6IFwiUm9vbSBpcyBkZWxldGVkLlwiLFxuICB9KVxufSlcblxuLy8gQ3JlYXRlIGEgbmV3IHJldmlldyAgID0+ICAgL2FwaS9yZXZpZXdzXG5leHBvcnQgY29uc3QgY3JlYXRlUm9vbVJldmlldyA9IGNhdGNoQXN5bmNFcnJvcnMoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgcmF0aW5nLCBjb21tZW50LCByb29tSWQgfSA9IHJlcS5ib2R5XG5cbiAgY29uc3QgcmV2aWV3ID0ge1xuICAgIHVzZXI6IHJlcS51c2VyLl9pZCxcbiAgICBuYW1lOiByZXEudXNlci5uYW1lLFxuICAgIHJhdGluZzogTnVtYmVyKHJhdGluZyksXG4gICAgY29tbWVudCxcbiAgfVxuXG4gIGNvbnN0IHJvb20gPSBhd2FpdCBSb29tLmZpbmRCeUlkKHJvb21JZClcblxuICBjb25zdCBpc1Jldmlld2VkID0gcm9vbS5yZXZpZXdzLmZpbmQoXG4gICAgKHIpID0+IHIudXNlci50b1N0cmluZygpID09PSByZXEudXNlci5faWQudG9TdHJpbmcoKVxuICApXG5cbiAgaWYgKGlzUmV2aWV3ZWQpIHtcbiAgICByb29tLnJldmlld3MuZm9yRWFjaCgocmV2aWV3KSA9PiB7XG4gICAgICBpZiAocmV2aWV3LnVzZXIudG9TdHJpbmcoKSA9PT0gcmVxLnVzZXIuX2lkLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgcmV2aWV3LmNvbW1lbnQgPSBjb21tZW50XG4gICAgICAgIHJldmlldy5yYXRpbmcgPSByYXRpbmdcbiAgICAgIH1cbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHJvb20ucmV2aWV3cy5wdXNoKHJldmlldylcbiAgICByb29tLm51bU9mUmV2aWV3cyA9IHJvb20ucmV2aWV3cy5sZW5ndGhcbiAgfVxuXG4gIHJvb20ucmF0aW5ncyA9XG4gICAgcm9vbS5yZXZpZXdzLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBpdGVtLnJhdGluZyArIGFjYywgMCkgL1xuICAgIHJvb20ucmV2aWV3cy5sZW5ndGhcblxuICBhd2FpdCByb29tLnNhdmUoeyB2YWxpZGF0ZUJlZm9yZVNhdmU6IGZhbHNlIH0pXG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIHN1Y2Nlc3M6IHRydWUsXG4gIH0pXG59KVxuXG5leHBvcnQgY29uc3QgY2hlY2tSZXZpZXdBdXRoID0gY2F0Y2hBc3luY0Vycm9ycyhhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyByb29tSWQgfSA9IHJlcS5xdWVyeVxuXG4gIGNvbnN0IGJvb2tpbmdzID0gYXdhaXQgQm9va2luZy5maW5kKHsgdXNlcjogcmVxLnVzZXIuX2lkLCByb29tOiByb29tSWQgfSlcblxuICBsZXQgaXNSZXZpZXdBdmFpbGFibGUgPSBmYWxzZVxuICBpZiAoYm9va2luZ3MubGVuZ3RoID4gMCkgaXNSZXZpZXdBdmFpbGFibGUgPSB0cnVlXG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBpc1Jldmlld0F2YWlsYWJsZSB9KVxufSlcblxuZXhwb3J0IGNvbnN0IGFsbEFkbWluUm9vbXMgPSBjYXRjaEFzeW5jRXJyb3JzKGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCByb29tcyA9IGF3YWl0IFJvb20uZmluZCgpXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgcm9vbXMgfSlcbn0pXG5cbmV4cG9ydCBjb25zdCBnZXRSb29tUmV2aWV3cyA9IGNhdGNoQXN5bmNFcnJvcnMoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHJvb20gPSBhd2FpdCBSb29tLmZpbmRCeUlkKHJlcS5xdWVyeS5pZClcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCByZXZpZXdzOiByb29tLnJldmlld3MgfSlcbn0pXG5cbmV4cG9ydCBjb25zdCBkZWxldGVSZXZpZXcgPSBjYXRjaEFzeW5jRXJyb3JzKGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBjb25zdCByb29tID0gYXdhaXQgUm9vbS5maW5kQnlJZChyZXEucXVlcnkucm9vbUlkKVxuXG4gIGNvbnN0IHJldmlld3MgPSByb29tLnJldmlld3MuZmlsdGVyKFxuICAgIChyZXZpZXcpID0+IHJldmlldy5faWQudG9TdHJpbmcoKSAhPT0gcmVxLnF1ZXJ5LmlkLnRvU3RyaW5nKClcbiAgKVxuXG4gIGNvbnN0IG51bU9mUmV2aWV3cyA9IHJldmlld3MubGVuZ3RoXG5cbiAgY29uc3QgcmF0aW5ncyA9XG4gICAgcm9vbS5yZXZpZXdzLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBpdGVtLnJhdGluZyArIGFjYywgMCkgLyByZXZpZXdzLmxlbmd0aFxuXG4gIGF3YWl0IFJvb20uZmluZEJ5SWRBbmRVcGRhdGUoXG4gICAgcmVxLnF1ZXJ5LnJvb21JZCxcbiAgICB7XG4gICAgICByZXZpZXdzLFxuICAgICAgcmF0aW5ncyxcbiAgICAgIG51bU9mUmV2aWV3cyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5ldzogdHJ1ZSxcbiAgICAgIHJ1blZhbGlkYXRvcnM6IHRydWUsXG4gICAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZSxcbiAgICB9XG4gIClcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgc3VjY2VzczogdHJ1ZSxcbiAgfSlcbn0pXG5cbmV4cG9ydCB7IGFsbFJvb21zLCBuZXdSb29tLCBnZXRTaW5nbGVSb29tLCB1cGRhdGVSb29tLCBkZWxldGVSb29tIH1cbiIsImV4cG9ydCBkZWZhdWx0IChmdW5jKSA9PiAocmVxLCByZXMsIG5leHQpID0+XG4gIFByb21pc2UucmVzb2x2ZShmdW5jKHJlcSwgcmVzLCBuZXh0KSkuY2F0Y2gobmV4dClcbiIsImltcG9ydCBFcnJvckhhbmRsZXIgZnJvbSBcIi4uL3V0aWxzL2Vycm9ySGFuZGxlclwiXG5cbmV4cG9ydCBkZWZhdWx0IChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGVyci5zdGF0dXNDb2RlID0gZXJyLnN0YXR1c0NvZGUgfHwgNTAwXG5cbiAgbGV0IGVycm9yID0geyAuLi5lcnIgfVxuXG4gIGVycm9yLm1lc3NhZ2UgPSBlcnIubWVzc2FnZVxuXG4gIC8vIFdyb25nIE1vbmdvb3NlIE9iamVjdCBJRCBFcnJvclxuICBpZiAoZXJyLm5hbWUgPT09IFwiQ2FzdEVycm9yXCIpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFJlc291cmNlIG5vdCBmb3VuZC4gSW52YWxpZDogJHtlcnIucGF0aH1gXG4gICAgZXJyb3IgPSBuZXcgRXJyb3JIYW5kbGVyKG1lc3NhZ2UsIDQwMClcbiAgfVxuXG4gIC8vIEhhbmRsaW5nIG1vbmdvb3NlIFZhbGlkYXRpb24gZXJyb3JcbiAgaWYgKGVyci5uYW1lID09PSBcIlZhbGlkYXRpb25FcnJvclwiKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IE9iamVjdC52YWx1ZXMoZXJyLmVycm9ycykubWFwKCh2YWx1ZSkgPT4gdmFsdWUubWVzc2FnZSlcbiAgICBlcnJvciA9IG5ldyBFcnJvckhhbmRsZXIobWVzc2FnZSwgNDAwKVxuICB9XG5cbiAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzQ29kZSkuanNvbih7XG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgZXJyb3IsXG4gICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICBzdGFjazogZXJyb3Iuc3RhY2ssXG4gIH0pXG59XG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCJcblxuY29uc3Qgcm9vbVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBuYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgZW50ZXIgcm9vbSBuYW1lXCJdLFxuICAgIHRyaW06IHRydWUsXG4gICAgbWF4TGVuZ3RoOiBbMTAwLCBcIlJvb20gbmFtZSBjYW5ub3QgZXhjZWVkIDEwMCBjaGFyYWN0ZXJzXCJdLFxuICB9LFxuICBwcmljZVBlck5pZ2h0OiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgZW50ZXIgcm9vbSBwcmljZSBwZXIgbmlnaHRcIl0sXG4gICAgbWF4TGVuZ3RoOiBbNCwgXCJSb29tIG5hbWUgY2Fubm90IGV4Y2VlZCA0IGNoYXJhY3RlcnNcIl0sXG4gICAgZGVmYXVsdDogMC4wLFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGVudGVyIHJvb20gZGVzY3JpcHRpb25cIl0sXG4gIH0sXG4gIGFkZHJlc3M6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciByb29tIGFkZHJlc3NcIl0sXG4gIH0sXG4gIGd1ZXN0Q2FwYWNpdHk6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciByb29tIGd1ZXN0IGNhcGFjaXR5XCJdLFxuICB9LFxuICBudW1PZkJlZHM6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciBudW1iZXIgb2YgYmVkcyBpbiByb29tXCJdLFxuICB9LFxuICBpbnRlcm5ldDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGJyZWFrZmFzdDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gIH0sXG4gIGFpckNvbmRpdGlvbmVkOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgfSxcbiAgcGV0c0FsbG93ZWQ6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICByb29tQ2xlYW5pbmc6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICB9LFxuICByYXRpbmdzOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDAsXG4gIH0sXG4gIG51bU9mUmV2aWV3czoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAwLFxuICB9LFxuICBpbWFnZXM6IFtcbiAgICB7XG4gICAgICBwdWJsaWNfaWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB1cmw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgY2F0ZWdvcnk6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBlbnRlciByb29tIGNhdGVnb3J5XCJdLFxuICAgIGVudW06IHtcbiAgICAgIHZhbHVlczogW1wiS2luZ1wiLCBcIlNpbmdsZVwiLCBcIlR3aW5zXCJdLFxuICAgICAgbWVzc2FnZTogXCJQbGVhc2Ugc2VsZWN0IGNvcnJlY3QgY2F0ZWdvcnkgZm9yIHJvb21cIixcbiAgICB9LFxuICB9LFxuICByZXZpZXdzOiBbXG4gICAge1xuICAgICAgdXNlcjoge1xuICAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuT2JqZWN0SWQsXG4gICAgICAgIHJlZjogXCJVc2VyXCIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICByYXRpbmc6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjb21tZW50OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG4gIHVzZXI6IHtcbiAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuT2JqZWN0SWQsXG4gICAgcmVmOiBcIlVzZXJcIixcbiAgICAvLyByZXF1aXJlZDogZmFsc2UsXG4gIH0sXG4gIGNyZWF0ZWRBdDoge1xuICAgIHR5cGU6IERhdGUsXG4gICAgZGVmYXVsdDogRGF0ZS5ub3csXG4gIH0sXG59KVxuXG5jb25zdCBSb29tID0gbW9uZ29vc2UubW9kZWxzLlJvb20gfHwgbW9uZ29vc2UubW9kZWwoXCJSb29tXCIsIHJvb21TY2hlbWEpXG5cbmV4cG9ydCBkZWZhdWx0IFJvb21cbiIsImltcG9ydCBuYyBmcm9tIFwibmV4dC1jb25uZWN0XCJcbmltcG9ydCBjb25uZWN0REIgZnJvbSBcIi4uLy4uLy4uL2Nvbm5lY3REQlwiXG5cbmltcG9ydCB7XG4gIGdldFNpbmdsZVJvb20sXG4gIHVwZGF0ZVJvb20sXG4gIGRlbGV0ZVJvb20sXG59IGZyb20gXCIuLi8uLi8uLi9jb250cm9sbGVycy9yb29tQ29udFwiXG5cbmltcG9ydCBvbkVycm9yIGZyb20gXCIuLi8uLi8uLi9taWRkbGV3YXJlcy9lcnJvclwiXG4vLyBpbXBvcnQgeyBpc0F1dGhlbnRpY2F0ZWRVc2VyIH0gZnJvbSBcIi4uLy4uLy4uL21pZGRsZXdhcmVzL2F1dGhcIlxuXG5jb25zdCBoYW5kbGVyID0gbmMoeyBvbkVycm9yIH0pXG5cbmNvbm5lY3REQigpXG5cbmhhbmRsZXIuZ2V0KGdldFNpbmdsZVJvb20pXG5cbmhhbmRsZXIucHV0KHVwZGF0ZVJvb20pXG5cbmhhbmRsZXIuZGVsZXRlKGRlbGV0ZVJvb20pXG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXJcbiIsImNsYXNzIEFQSUZlYXR1cmVzIHtcbiAgY29uc3RydWN0b3IocXVlcnksIHF1ZXJ5U3RyKSB7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5xdWVyeVN0ciA9IHF1ZXJ5U3RyXG4gIH1cblxuICBzZWFyY2goKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSB0aGlzLnF1ZXJ5U3RyLmxvY2F0aW9uXG4gICAgICA/IHtcbiAgICAgICAgICBhZGRyZXNzOiB7XG4gICAgICAgICAgICAkcmVnZXg6IHRoaXMucXVlcnlTdHIubG9jYXRpb24sXG4gICAgICAgICAgICAkb3B0aW9uczogXCJpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgOiB7fVxuXG4gICAgdGhpcy5xdWVyeSA9IHRoaXMucXVlcnkuZmluZCh7IC4uLmxvY2F0aW9uIH0pXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGZpbHRlcigpIHtcbiAgICBjb25zdCBxdWVyeUNvcHkgPSB7IC4uLnRoaXMucXVlcnlTdHIgfVxuXG4gICAgLy8gUmVtb3ZlIGZpZWxkcyBmcm9tIHF1ZXJ5XG4gICAgY29uc3QgcmVtb3ZlRmllbGRzID0gW1wibG9jYXRpb25cIiwgXCJwYWdlXCJdXG4gICAgcmVtb3ZlRmllbGRzLmZvckVhY2goKGVsKSA9PiBkZWxldGUgcXVlcnlDb3B5W2VsXSlcblxuICAgIC8vIEFkdmFuY2UgZmlsdGVyaW5nIHdpdGggZ3QsIGd0ZSBldGNcbiAgICBsZXQgZmlsdGVyUXVlcnkgPSB7fVxuICAgIGNvbnN0IGZpZWxkc0xlbmd0aCA9IE9iamVjdC5rZXlzKHF1ZXJ5Q29weSkubGVuZ3RoXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkc0xlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgcXVlcnlTdHIgPSBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhxdWVyeUNvcHkpW2ldKVxuICAgICAgY29uc3QgZmlsdGVyRmllbGQgPSBxdWVyeVN0ci5zdWJzdHJpbmcoMSwgcXVlcnlTdHIuaW5kZXhPZihcIltcIikpXG5cbiAgICAgIGlmIChmaWx0ZXJGaWVsZC5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSBPYmplY3QudmFsdWVzKHF1ZXJ5Q29weSlbMF1cblxuICAgICAgICBjb25zdCBmaWx0ZXJPcGVyYXRvciA9IHF1ZXJ5U3RyLnN1YnN0cmluZyhcbiAgICAgICAgICBxdWVyeVN0ci5pbmRleE9mKFwiW1wiKSArIDEsXG4gICAgICAgICAgcXVlcnlTdHIuaW5kZXhPZihcIl1cIilcbiAgICAgICAgKVxuXG4gICAgICAgIGZpbHRlclF1ZXJ5ID0ge1xuICAgICAgICAgIC4uLmZpbHRlclF1ZXJ5LFxuICAgICAgICAgIFtmaWx0ZXJGaWVsZF06IHsgW2AkJHtmaWx0ZXJPcGVyYXRvcn1gXTogZmllbGRWYWx1ZSB9LFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWx0ZXJRdWVyeSA9IHtcbiAgICAgICAgICAuLi5maWx0ZXJRdWVyeSxcbiAgICAgICAgICBbT2JqZWN0LmtleXMocXVlcnlDb3B5KVtpXV06IE9iamVjdC52YWx1ZXMocXVlcnlDb3B5KVtpXSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5LmZpbmQoZmlsdGVyUXVlcnkpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHBhZ2luYXRpb24ocmVzUGVyUGFnZSkge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gTnVtYmVyKHRoaXMucXVlcnlTdHIucGFnZSkgfHwgMVxuICAgIGNvbnN0IHNraXAgPSByZXNQZXJQYWdlICogKGN1cnJlbnRQYWdlIC0gMSlcblxuICAgIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5LmxpbWl0KHJlc1BlclBhZ2UpLnNraXAoc2tpcClcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFQSUZlYXR1cmVzXG4iLCJjbGFzcyBFcnJvckhhbmRsZXIgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHN0YXR1c0NvZGUpIHtcbiAgICBzdXBlcihtZXNzYWdlKVxuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGVcblxuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JIYW5kbGVyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbG91ZGluYXJ5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb25uZWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9