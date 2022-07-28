import { useState } from "react";
import CheckoutPrice from "./checkoutprice/CheckoutPrice";
import Orderitems from "./order-items/Orderitems";
import Paymentinfo from "./payment-info/PaymentInfo";
import ShippingInfo from "./shipping-info/ShippingInfo";
import ShippingMethod from "./shipping-method/ShippingMethod";
import SignInOption from "./sigin-option/SignInOption";

const Checkout = (props) => {

const [sinfoForm,setSinfoForm]=useState(true);
const [sinfoDetails,setSingoDetails]=useState(false);
const [smethodForm,setSmethodForm]=useState(false);
const [smethodDetails,setSmethodDetails]=useState(false);
const [spaymentForm,setSpaymentForm]=useState(false);
const [spaymentDetails,setSpaymentDetails]=useState(false);
const [orderchart,setOrderchart]=useState(false);
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

                        {/* const [sinfoForm,setSinfoForm]=useState(true);
const [sinfoDetails,setSingoDetails]=useState(true);
const [smethodForm,setSmethodForm]=useState(true);
const [smethodDetails,setSmethodDetails]=useState(true);
const [spaymentForm,setSpaymentForm]=useState(true);
const [spaymentDetails,setSpaymentDetails]=useState(true); */}
                        <ShippingInfo  form={sinfoForm} details={sinfoDetails} setForm={setSinfoForm} setDetails={setSingoDetails} setNext={setSmethodForm}/>
                        <ShippingMethod  form={smethodForm} details={smethodDetails} setForm={setSmethodForm} setDetails={setSmethodDetails} setNext={setSpaymentForm}/>
                        <Paymentinfo   form={spaymentForm} details={spaymentDetails} setForm={setSpaymentForm} setDetails={setSpaymentDetails} setNext={setOrderchart}/>
                        <Orderitems orderChart={orderchart}/>
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