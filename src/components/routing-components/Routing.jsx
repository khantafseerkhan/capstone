import React from "react";

import { Routes, Route } from "react-router-dom";
import Checkout from "./checkout/Checkout";
import Home from "./home/Home";
import ProductCategory from "./product-category/Productcategory";
import ShoppingCart from "./shopping-cart/Shoppingcart";
import SingleProduct from "./single-product/Singleproduct";


export default class Routing extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <>


      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="productcategory" element={<ProductCategory />} />
      <Route path="productcategory/:id" element={<ProductCategory />} />

      {/* <Route path="singleproduct" element={<Singleproduct />} /> */}

      <Route path="singleproduct/:id" element={<SingleProduct /> } />
      <Route path="shoppingcart" element={<ShoppingCart /> } />
      <Route path="checkout" element={<Checkout /> } />

      

      

    
      </Routes>
    


            
            </>
        )
    }
}