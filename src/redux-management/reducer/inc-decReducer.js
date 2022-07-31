
let initialstate = {

  value: 10,
  allproductdata: [],
  cartProduct: localStorage.getItem("cartdata") ? JSON.parse(localStorage.getItem("cartdata")) : [],
  totalOfall: localStorage.getItem("totalofall") ? localStorage.getItem("totalofall") : 0,
  coupon: 20,
  giftCard: 10,
  etax: 50,
  shippingCharge: 0,
  cartCount: localStorage.getItem("cartdata") ? JSON.parse(localStorage.getItem("cartdata")).length :0,
  shippingDetails: [
    {
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
        zip: "",
      },
      shippingMethod:{
        deliverymethod:"",
        charge:0
      },
      paymentInfo:{
        cardholdername:"",
        cardnumber:"",
        expiry:"",
        cvv:""
      }
    }

  ]

}




export const changeTheState = (state = initialstate, action) => {
  switch (action.type) {
    case 'Increament':
      return { value: state.value + 1 }
    case 'Decrement':
      return { value: state.value - 1 }
    default:
      return state
  }
}


export const updateproductslist = (state = initialstate, action) => {

  if (action.type == "updateproductslist") {
    console.log("length   =" + action.data.length)
    return {
      value: state.value,
      allproductdata: action.data
    }
  } else {
    return state;
  }
}
export const updateCartProduct = (state = initialstate, action) => {


  if (action.type == "add") {
    let temparray = state.cartProduct;

    let index = temparray.findIndex(x => x.id == action.data.id);
    if (index != -1) {

      temparray[index].quantity = temparray[index].quantity + action.data.quantity;

      localStorage.setItem("cartdata", JSON.stringify(temparray))
      localStorage.setItem("totalofall", calPriceSummary(temparray))

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

      }



    } else {
      temparray.push(action.data);

      localStorage.setItem("cartdata", JSON.stringify(temparray))
      localStorage.setItem("totalofall", calPriceSummary(temparray))
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



      }

    }
  } else if (action.type == "update") {
    return state
  } else if (action.type == "remove") {
    let temparray = state.cartProduct;

    if (action.data != -1) {

      temparray.splice(action.data, 1);

      localStorage.setItem("cartdata", JSON.stringify(temparray))
      localStorage.setItem("totalofall", calPriceSummary(temparray))

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


      }
    } else {
      return state;
    }
  } else if (action.type == "incQuantity") {
    let temparray = state.cartProduct;
    let index = temparray.findIndex(x => x.id == action.data);
    temparray[index].quantity = temparray[index].quantity + 1;

    localStorage.setItem("cartdata", JSON.stringify(temparray))
    localStorage.setItem("totalofall", calPriceSummary(temparray))

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



    }
  } else if (action.type == "decQuantity") {
    let temparray = state.cartProduct;
    let index = temparray.findIndex(x => x.id == action.data);
    if (temparray[index].quantity > 1) {
      temparray[index].quantity = temparray[index].quantity - 1;

      localStorage.setItem("cartdata", JSON.stringify(temparray))
      localStorage.setItem("totalofall", calPriceSummary(temparray))

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




      }
    }

  } else if (action.type == "insetshippingInfo") {
    let temp = state.shippingDetails;
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



    }
  }else if (action.type == "insertshippingMethod") {
    let temp = state.shippingDetails;
    temp[0].shippingMethod = action.data;
    // email: state.value,
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
      shippingCharge: temp[0].shippingMethod.charge,
      cartCount: state.cartCount,
      shippingDetails: temp



    }
  }else if (action.type == "insertpaymentInfo") {
    let temp = state.shippingDetails;
    temp[0].paymentInfo = action.data;
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



    }
  }

  else {
    return state;
  }
}
const calPriceSummary = (inputdata) => {

  let totalOfall = 0;
  inputdata.forEach(element => {
    totalOfall = totalOfall + (element.price * element.quantity);
  });
  return totalOfall;
}

