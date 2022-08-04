import { useState } from "react";
import Button from "../../custom/Button";
import CheckoutPrice from "./checkoutprice/CheckoutPrice";
import Orderitems from "./order-items/Orderitems";
import Paymentinfo from "./payment-info/PaymentInfo";
import ShippingInfo from "./shipping-info/ShippingInfo";
import ShippingMethod from "./shipping-method/ShippingMethod";
import SignInOption from "./sigin-option/SignInOption";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = (props) => {

    const [sinfoForm, setSinfoForm] = useState(true);
    const [sinfoDetails, setSingoDetails] = useState(false);
    const [smethodForm, setSmethodForm] = useState(false);
    const [smethodDetails, setSmethodDetails] = useState(false);
    const [spaymentForm, setSpaymentForm] = useState(false);
    const [spaymentDetails, setSpaymentDetails] = useState(false);
    const [orderchart, setOrderchart] = useState(false);
    const [placorder, setPlacorder] = useState(false);

    

    let navigate=useNavigate();
    let cartData = useSelector(state => state.updateCartProduct.cartProduct);

    const placeOrder=()=>{
        alert("come ")
        navigate("/orderSuccess");
    }
    return (
        <div className="aem-Grid aem-Grid--12">


            <div className="aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--tablet--11 aem-GridColumn--phone--12 unset-float center-box">

                <div className="aem-Grid aem-Grid--12 ">
                    <div className="aem-GridColumn aem-GridColumn--default--12 page-title">
                        <div>
                            Checkout
                            <hr />
                        </div>

                    </div>


                </div>


                <div className="aem-Grid aem-Grid--12 align-to-left">
                    <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 right-padding30">

                        <ShippingInfo form={sinfoForm} details={sinfoDetails} setForm={setSinfoForm} setDetails={setSingoDetails} setNext={setSmethodForm} />
                         <ShippingMethod form={smethodForm} details={smethodDetails} setForm={setSmethodForm} setDetails={setSmethodDetails} setNext={setSpaymentForm} />
                        <Paymentinfo form={spaymentForm} details={spaymentDetails} setForm={setSpaymentForm} setDetails={setSpaymentDetails} setNext={setOrderchart} setPlacorder={setPlacorder}      />    
                           <Orderitems orderChart={orderchart} /> 
                    </div>

                  <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                        <div className="aem-Grid aem-Grid--12 align-to-left">
                            <SignInOption />
                            <CheckoutPrice />

                        </div>
                    </div> 

{
    placorder==true && (
        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
        <div className="aem-Grid aem-Grid--12 align-to-left ">
            <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 center-box button-section">
                <Button value={"Place Order"} classname={['orangebtn']} CallParentEvent={placeOrder} />

                <div className="note ">
                    By clicking confirm order you agree to our <a href="javascript:void(0)">  Terms and Conditions </a>

                </div>
            </div>


        </div>

    </div>
    )
}
                   

                </div>
            </div>
        </div>
    )
}

export default Checkout;