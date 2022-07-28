"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _incDecReducer = require("./inc-decReducer");

var _redux = require("redux");

var rootReducer = (0, _redux.combineReducers)({
  changeTheState: _incDecReducer.changeTheState,
  updateproductslist: _incDecReducer.updateproductslist,
  updateCartProduct: _incDecReducer.updateCartProduct
});
var _default = rootReducer;
exports.default = _default;
//# sourceMappingURL=index.dev.js.map
