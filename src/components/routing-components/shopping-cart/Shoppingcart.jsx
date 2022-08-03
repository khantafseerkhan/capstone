import Addedproduct from "./added-product/Addedproduct";
import Pricesummary from "./price-summary/Pricesummary";
import Shippingsection from "./shipping-section/Shippingsection";
import { useDispatch, useSelector } from "react-redux";


const ShoppingCart = () => {



    const selectedProducts = useSelector(state => state.updateCartProduct.cartProduct);



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
                {selectedProducts.length == 0 ?
                (

                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn aem-GridColumn--tablet--12 aem-GridColumn aem-GridColumn--phone--12">
                            <div className="msg">Nothing to show into cart.......</div>
                        </div>



                    </div>


                ) : ( <div className="aem-Grid aem-Grid--12 ">


                    <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 align-to-left">
                        <Addedproduct />
                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 align-to-left">
                        <Pricesummary />
                    </div>
                </div>
                )}


                <div className="aem-Grid aem-Grid--12 ">
                    <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 align-to-left">
                        <Shippingsection />
                    </div>
                </div>
            </div>

        </div>

    )
}


export default ShoppingCart;