import { useSelector } from "react-redux";


const CheckoutPrice=(props)=>{
   
    let pricesummary={
     subtotal:useSelector(state => state.updateCartProduct.totalOfall),
     coupon:useSelector(state => state.updateCartProduct.coupon),
     giftCard:useSelector(state => state.updateCartProduct.giftCard),
     etax:useSelector(state => state.updateCartProduct.etax),
     shippingCharge:useSelector(state => state.updateCartProduct.shippingCharge),
    }
    

    return (
        <div className="aem-GridColumn aem-GridColumn--default--12">
        <div className="summary-card">
            <div className="title-section">Price summary</div>


            <div className="containt">
                <ul>
                    <li>
                        <div>Subtotal</div><div>&#36; {pricesummary.subtotal}</div>
                    </li>

                    <li>
                        <div>Coupon</div><div>&#36; - {pricesummary.coupon}</div>
                    </li>

                    <li>
                        <div>Gift Card</div><div>&#36; - {pricesummary.giftCard}</div>
                    </li>

                    <li >
                        <div>Estimated tax</div><div>&#36; {pricesummary.etax}</div>
                    </li>

                    <li>

                        <div>Estimated shipping</div><div>{pricesummary.shippingCharge==0?"FREE":pricesummary.shippingCharge}</div>
                    </li>

                    <li className="total">
                        <div>Estimated total</div><div> &#36; {pricesummary.subtotal-pricesummary.coupon-pricesummary.giftCard+pricesummary.shippingCharge+pricesummary.etax}</div>


                    </li>
                </ul>
            </div>

            {/* <div className="checkout center"><button type="button"  role='button' aria-label='Check Out'>checkout</button></div>
            <div className="pay center"  role='button' aria-label='Pay Pal'><img src={require("../../../../assets/img/PP_BTN.png")} alt="Pay Pal"/></div> */}


        </div>

        </div>
    )
}

export default CheckoutPrice;