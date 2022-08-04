
import { useDispatch, useSelector } from "react-redux";

const Ordersuccess = (props) => {
    let cartData = useSelector(state => state.updateCartProduct.cartProduct);
    let shippingDetails = useSelector(state => state.updateCartProduct.shippingDetails[0]);


    return (
        <div className="aem-Grid aem-Grid--12">


            <div className="aem-GridColumn aem-GridColumn--default--10 unset-float center-box">



                <div className="aem-Grid aem-Grid--12 ">
                    <div className="aem-GridColumn aem-GridColumn--default--12 page-title">
                        <div>
                            Order Successful!
                            <hr />
                        </div>

                    </div>


                </div>
                <div className="aem-Grid aem-Grid--12 ">
                    <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn aem-GridColumn--tabler--12 aem-GridColumn aem-GridColumn--phone--12 align-to-left order-details ">
                        <div className="order-title">Order Number #1749434</div>
                        <div className="aem-Grid aem-Grid--12 align-to-left shipping-details-container bottom-margin-10">

                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                                <div className="container">
                                    <h6>Shipping Information</h6>
                                    <div className="content">{shippingDetails.shippingInfo.email}</div>
                                    <div className="content">{shippingDetails.shippingInfo.phone}</div>





                                </div>

                                <div className="container">


                                    <div className="content">{shippingDetails.shippingInfo.fname} {shippingDetails.shippingInfo.lname}</div>
                                    <div className="content">{shippingDetails.shippingInfo.address1} </div>
                                    <div className="content">{shippingDetails.shippingInfo.address2} </div>
                                    <div className="content">{shippingDetails.shippingInfo.city} </div>
                                    <div className="content">{shippingDetails.shippingInfo.state1} {shippingDetails.shippingInfo.zip} </div>
                                    <div className="content">{shippingDetails.shippingInfo.country} </div>




                                </div>
                            </div>

                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                                <div className="container">
                                    <h6>Shipping Method</h6>
                                    <div className="content">{shippingDetails.shippingMethod.deliverymethod}</div>





                                </div>

                                <div className="container">
                                    <h6>Payment Information</h6>
                                    <div className="content">Credit Cart</div>
                                    <div className="content">Visa ending in {shippingDetails.paymentInfo.cardnumber.substr(shippingDetails.paymentInfo.cardnumber.length - 4)}</div>






                                </div>
                            </div>





                        </div>


                        <div className="aem-Grid aem-Grid--12 align-to-left succssorder-container bottom-margin-10 top-margin-10" >

                            <div className="subhead">
                                {cartData.length} Items in your order
                            </div>

                            {
                                cartData.map(element => {
                                    return (
                                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 item-card">
                                            <div className="aem-Grid aem-Grid--12 align-to-left ">
                                                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--3 img-container">
                                                    <img src={element.image} alt="product img" />

                                                </div>
                                                <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--tablet--9 aem-GridColumn--phone--9 detail-container">
                                                    <ul>
                                                        <li>{element.title}</li>
                                                        {(element.category == "women's clothing" || element.category == "men's clothing") && (
                                                            <>
                                                                <li>Size<span>:</span>{element.size.name}</li>
                                                                <li>Color<span>:</span>{element.color.name}</li>
                                                            </>
                                                        )}
                                                        <li>Quantity<span>:</span>{element.quantity}</li>

                                                    </ul>

                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                            }




                        </div>


                        <div className="aem-Grid aem-Grid--12 align-to-left succssorder-container bottom-margin-10 order-status-note-section">
                            <p>
                                You will also receive an email with the details and we will let you know when your order has shipped.
                            </p>


                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.
                            </p>
                        </div>

                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--4 align-to-left bottom-margin-10 tab-hide phone-hide">
                        <div className="poster">
                            <div className="poster-title">Give us a follow to SAVE 20% on your next order.</div>

                            <ul>
                                <li><a href="javascript:void(0)" role='button' aria-label='Instagram'  ><img src={require("../../../assets/img/instagram_w.png")} alt="Instagram" /></a></li>
                                <li><a href="javascript:void(0)" role='button' aria-label='Facebook'  ><img src={require("../../../assets/img/facebook_w.png")} alt="Facebook" /></a></li>

                                <li><a href="javascript:void(0)" role='button' aria-label='Twiter'><img src={require("../../../assets/img/twitter_w.png")} alt="Twitter" /></a></li>

                            </ul>
                        </div>

                    </div>
                </div>


            </div>





        </div >
    )
}
export default Ordersuccess;