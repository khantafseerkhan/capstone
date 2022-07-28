"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCartProduct = exports.updateproductslist = exports.changeTheState = void 0;
var initialstate = {
  value: 10,
  allproductdata: [],
  cartProduct: localStorage.getItem("cartdata") ? JSON.parse(localStorage.getItem("cartdata")) : [],
  totalOfall: localStorage.getItem("totalofall") ? localStorage.getItem("totalofall") : 0,
  coupon: 20,
  giftCard: 10,
  etax: 50,
  shippingCharge: 0,
  cartCount: 0,
  shippingDetails: [{
    shippingInfo: {
      email: "",
      phone: "",
      country: "",
      fname: "",
      lname: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: ""
    },
    shippingMethod: {
      deliverymethod: "",
      charge: 0
    },
    paymentInfo: {
      cardholdername: "",
      cardnumber: "",
      expiry: "",
      cvv: ""
    }
  }]
};

var changeTheState = function changeTheState() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialstate;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'Increament':
      return {
        value: state.value + 1
      };

    case 'Decrement':
      return {
        value: state.value - 1
      };

    default:
      return state;
  }
};

exports.changeTheState = changeTheState;

var updateproductslist = function updateproductslist() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialstate;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type == "updateproductslist") {
    console.log("length   =" + action.data.length);
    return {
      value: state.value,
      allproductdata: action.data
    };
  } else {
    return state;
  }
};

exports.updateproductslist = updateproductslist;

var updateCartProduct = function updateCartProduct() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialstate;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type == "add") {
    var temparray = state.cartProduct;
    var index = temparray.findIndex(function (x) {
      return x.id == action.data.id;
    });

    if (index != -1) {
      temparray[index].quantity = temparray[index].quantity + action.data.quantity;
      localStorage.setItem("cartdata", JSON.stringify(temparray));
      localStorage.setItem("totalofall", calPriceSummary(temparray));
      return {
        value: state.value,
        allproductdata: state.allproductdata,
        cartProduct: temparray,
        totalOfall: calPriceSummary(temparray),
        coupon: state.coupon,
        giftCard: state.giftCard,
        etax: state.etax,
        shippingCharge: state.shippingDetails,
        cartCount: temparray.length,
        shippingDetails: state.shippingDetails
      };
    } else {
      temparray.push(action.data);
      localStorage.setItem("cartdata", JSON.stringify(temparray));
      localStorage.setItem("totalofall", calPriceSummary(temparray));
      return {
        value: state.value,
        allproductdata: state.allproductdata,
        cartProduct: temparray,
        totalOfall: calPriceSummary(temparray),
        coupon: state.coupon,
        giftCard: state.giftCard,
        etax: state.etax,
        shippingCharge: state.shippingCharge,
        cartCount: temparray.length,
        shippingDetails: state.shippingDetails
      };
    }
  } else if (action.type == "update") {
    return state;
  } else if (action.type == "remove") {
    var _temparray = state.cartProduct;

    if (action.data != -1) {
      _temparray.splice(action.data, 1);

      localStorage.setItem("cartdata", JSON.stringify(_temparray));
      localStorage.setItem("totalofall", calPriceSummary(_temparray));
      return {
        value: state.value,
        allproductdata: state.allproductdata,
        cartProduct: _temparray,
        totalOfall: calPriceSummary(_temparray),
        coupon: state.coupon,
        giftCard: state.giftCard,
        etax: state.etax,
        shippingCharge: state.shippingCharge,
        cartCount: _temparray.length,
        shippingDetails: state.shippingDetails
      };
    } else {
      return state;
    }
  } else if (action.type == "incQuantity") {
    var _temparray2 = state.cartProduct;

    var _index = _temparray2.findIndex(function (x) {
      return x.id == action.data;
    });

    _temparray2[_index].quantity = _temparray2[_index].quantity + 1;
    localStorage.setItem("cartdata", JSON.stringify(_temparray2));
    localStorage.setItem("totalofall", calPriceSummary(_temparray2));
    return {
      value: state.value,
      allproductdata: state.allproductdata,
      cartProduct: _temparray2,
      totalOfall: calPriceSummary(_temparray2),
      coupon: state.coupon,
      giftCard: state.giftCard,
      etax: state.etax,
      shippingCharge: state.shippingCharge,
      cartCount: _temparray2.length,
      shippingDetails: state.shippingDetails
    };
  } else if (action.type == "decQuantity") {
    var _temparray3 = state.cartProduct;

    var _index2 = _temparray3.findIndex(function (x) {
      return x.id == action.data;
    });

    if (_temparray3[_index2].quantity > 1) {
      _temparray3[_index2].quantity = _temparray3[_index2].quantity - 1;
      localStorage.setItem("cartdata", JSON.stringify(_temparray3));
      localStorage.setItem("totalofall", calPriceSummary(_temparray3));
      return {
        value: state.value,
        allproductdata: state.allproductdata,
        cartProduct: _temparray3,
        totalOfall: calPriceSummary(_temparray3),
        coupon: state.coupon,
        giftCard: state.giftCard,
        etax: state.etax,
        shippingCharge: state.shippingCharge,
        cartCount: _temparray3.length,
        shippingDetails: state.shippingDetails
      };
    }
  } else if (action.type == "insetshippingInfo") {
    var temp = state.shippingDetails;
    temp[0].shippingInfo = action.data;
    return {
      value: state.value,
      allproductdata: state.allproductdata,
      cartProduct: state.cartProduct,
      totalOfall: state.totalOfall,
      coupon: state.coupon,
      giftCard: state.giftCard,
      etax: state.etax,
      shippingCharge: state.shippingCharge,
      cartCount: state.cartCount,
      shippingDetails: temp
    };
  } else if (action.type == "insertshippingMethod") {
    var _temp = state.shippingDetails;
    _temp[0].shippingMethod = action.data; // email: state.value,
    // phone: state.allproductdata,
    // country: temparray,
    // fname: calPriceSummary(temparray),
    // lname: state.coupon,
    // address1: state.giftCard,
    // address2: state.etax,
    // city: state.shippingCharge,
    // state: temparray.length,
    // zip:state.shippingDetails

    return {
      value: state.value,
      allproductdata: state.allproductdata,
      cartProduct: state.cartProduct,
      totalOfall: state.totalOfall,
      coupon: state.coupon,
      giftCard: state.giftCard,
      etax: state.etax,
      shippingCharge: _temp[0].shippingMethod.charge,
      cartCount: state.cartCount,
      shippingDetails: _temp
    };
  } else if (action.type == "insertpaymentInfo") {
    var _temp2 = state.shippingDetails;
    _temp2[0].paymentInfo = action.data;
    return {
      value: state.value,
      allproductdata: state.allproductdata,
      cartProduct: state.cartProduct,
      totalOfall: state.totalOfall,
      coupon: state.coupon,
      giftCard: state.giftCard,
      etax: state.etax,
      shippingCharge: state.shippingCharge,
      cartCount: state.cartCount,
      shippingDetails: _temp2
    };
  } else {
    return state;
  }
};

exports.updateCartProduct = updateCartProduct;

var calPriceSummary = function calPriceSummary(inputdata) {
  var totalOfall = 0;
  inputdata.forEach(function (element) {
    totalOfall = totalOfall + element.price * element.quantity;
  });
  return totalOfall;
};
//# sourceMappingURL=inc-decReducer.dev.js.map
