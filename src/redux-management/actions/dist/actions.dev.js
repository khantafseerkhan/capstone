"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insertpaymentInfo = exports.insertshippingMethod = exports.insetshippingInfo = exports.decQuantity = exports.incQuantity = exports.removeProduct = exports.addToCart = exports.updateproductslist = exports.decrement = exports.increament = void 0;

var increament = function increament() {
  return {
    type: "Increament"
  };
};

exports.increament = increament;

var decrement = function decrement() {
  return {
    type: "Decrement"
  };
};

exports.decrement = decrement;

var updateproductslist = function updateproductslist(inputdata) {
  return {
    type: "updateproductslist",
    data: inputdata
  };
}; //===============================


exports.updateproductslist = updateproductslist;

var addToCart = function addToCart(inputdata) {
  console.log("obj   " + inputdata);
  return {
    type: "add",
    data: inputdata
  };
};

exports.addToCart = addToCart;

var removeProduct = function removeProduct(id) {
  return {
    type: "remove",
    data: id
  };
};

exports.removeProduct = removeProduct;

var incQuantity = function incQuantity(id) {
  return {
    type: "incQuantity",
    data: id
  };
};

exports.incQuantity = incQuantity;

var decQuantity = function decQuantity(id) {
  return {
    type: "decQuantity",
    data: id
  };
};

exports.decQuantity = decQuantity;

var insetshippingInfo = function insetshippingInfo(data) {
  return {
    type: "insetshippingInfo",
    data: data
  };
};

exports.insetshippingInfo = insetshippingInfo;

var insertshippingMethod = function insertshippingMethod(data) {
  return {
    type: "insertshippingMethod",
    data: data
  };
}; // deliverymethod


exports.insertshippingMethod = insertshippingMethod;

var insertpaymentInfo = function insertpaymentInfo(data) {
  return {
    type: "insertpaymentInfo",
    data: data
  };
};

exports.insertpaymentInfo = insertpaymentInfo;
//# sourceMappingURL=actions.dev.js.map
