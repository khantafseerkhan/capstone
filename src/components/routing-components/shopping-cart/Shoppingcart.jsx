import Addedproduct from "./added-product/Addedproduct";
import Pricesummary from "./price-summary/Pricesummary";
import Shippingsection from "./shipping-section/Shippingsection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const ShoppingCart = () => {
    const selectedProducts = useSelector(state => state.updateCartProduct.cartProduct);

    const [productlist,setProductlist]=useState(selectedProducts);
    let navigate = useNavigate();





    return (
        <div className="aem-Grid aem-Grid--12">


            <div className="aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--tablet--11 aem-GridColumn--phone--12 unset-float center-box">



                <div className="aem-Grid aem-Grid--12 ">
                    <div className="aem-GridColumn aem-GridColumn--default--12 page-title">
                        <div>
                            Your Shopping Bag
                            <hr /> 
                            </div>
                        
                    </div>


                </div>
                {productlist.length == 0 ?
                (

                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn aem-GridColumn--tablet--12 aem-GridColumn aem-GridColumn--phone--12">
                            <div className="msg">Nothing to show into cart.......
                            <br />
                             <p>Go to Shopping Category<a href="javascript:void(0)" role='button' aria-label='Home' onClick={()=>navigate("/productcategory")}>Click here</a></p>
                            </div>
                        
                        </div>



                    </div>


                ) : ( <div className="aem-Grid aem-Grid--12 ">


                    <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 align-to-left">
                        <Addedproduct setProductlist={setProductlist}/>
                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 align-to-left">
                        <Pricesummary />
                    </div>
                </div>
                )}


            {productlist.length && (<div className="aem-Grid aem-Grid--12 ">
                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 align-to-left">
                    <Shippingsection />
                </div>
            </div>)}
            </div>

        </div>

    )
}


export default ShoppingCart;