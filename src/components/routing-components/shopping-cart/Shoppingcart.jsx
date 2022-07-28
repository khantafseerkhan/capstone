import Addedproduct from "./added-product/Addedproduct";
import Pricesummary from "./price-summary/Pricesummary";
import Shippingsection from "./shipping-section/Shippingsection";


const ShoppingCart = () => {
    return (
        <div className="aem-Grid aem-Grid--12">


            <div className="aem-GridColumn aem-GridColumn--default--10 unset-float center-box">



                <div className="aem-Grid aem-Grid--12 ">
                    <div className="aem-GridColumn aem-GridColumn--default--12 page-title">
                        <div>
                            Your Shopping Bag
                            <hr /> 
                            </div>
                        
                    </div>


                </div>
                <div className="aem-Grid aem-Grid--12 ">
                    <div className="aem-GridColumn aem-GridColumn--default--8 align-to-left">
                        <Addedproduct />
                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--4 align-to-left">
                        <Pricesummary />
                    </div>
                </div>


                <div className="aem-Grid aem-Grid--12 ">
                    <div className="aem-GridColumn aem-GridColumn--default--8 align-to-left">
                        <Shippingsection />
                    </div>
                </div>
            </div>

        </div>

    )
}


export default ShoppingCart;