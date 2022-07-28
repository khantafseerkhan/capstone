import CheckoutPrice from "./checkoutprice/CheckoutPrice";
import Paymentinfo from "./payment-info/PaymentInfo";
import ShippingInfo from "./shipping-info/ShippingInfo";
import ShippingMethod from "./shipping-method/ShippingMethod";
import SignInOption from "./sigin-option/SignInOption";

const Checkout = (props) => {


    return (
        <div className="aem-Grid aem-Grid--12">


            <div className="aem-GridColumn aem-GridColumn--default--10 unset-float center-box">

            <div className="aem-Grid aem-Grid--12 ">
                    <div className="aem-GridColumn aem-GridColumn--default--12 page-title">
                        <div>
                            Checkout
                            <hr /> 
                            </div>
                        
                    </div>


                </div>


                <div className="aem-Grid aem-Grid--12 align-to-left">
                    <div className="aem-GridColumn aem-GridColumn--default--8">
                        <ShippingInfo  />
                        <ShippingMethod  />
                        <Paymentinfo  />
                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--4">
                        <div className="aem-Grid aem-Grid--12 align-to-left">
                           <SignInOption />
                           <CheckoutPrice />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;