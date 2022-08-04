import { useState } from "react";
import { insertshippingMethod } from "../../../../redux-management/actions/actions";
import Button from "../../../custom/Button";
import Input from "../../../custom/Input";
import Radio from "../../../custom/Radio";
import { useDispatch, useSelector } from "react-redux";

const ShippingMethod = (props) => {

    let deliveryOption = useSelector(state => state.updateCartProduct.shippingDetails[0]);
    const [deliveryoption, setDeliveryoption] = useState(deliveryOption.shippingMethod.deliverymethod);
    const dispatch = useDispatch();


    const addshippingMethod = () => {
        dispatch(insertshippingMethod(
            {
                deliverymethod: deliveryoption,
                charge: deliveryoption == "Express Delivery (2-5 business days via USPS) $17.95" ? (17.95) : (deliveryoption == "Next Day Delivery (Next business days via FedEx) $53.61" ? 53.61 : 0)
            }
        ))

        activeSection();

    }



    const activeSection = () => {
        props.setForm(false);
        props.setDetails(true);
        props.setNext(true)

    }

    return (

        <>


            <div className="aem-Grid aem-Grid--12 align-to-left form-section bottom-margin-10" >


                {props.details ==false  && (
                    <div className={"aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 title "+(props.form==false && props.details==false?'border-inside-top-1 border-inside-bottom-1':'')}>
                        2. Shipping Methods
                    </div>
                )

                }



                {
                    props.form == true && (
                        <div className="form-section">
                            <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 list-section">
                                <ul >
                                    <li>
                                        <Radio label={"Standard Shipping (4-8 business days via USPS) FREE"} id={"std"} name={"std"} setValue={setDeliveryoption} isChecked={deliveryoption == "Standard Shipping (4-8 business days via USPS) FREE" ? true : false} />


                                    </li>

                                    <li>
                                        <Radio label={"Express Delivery (2-5 business days via USPS) $17.95"} id={"express"} name={"std"} setValue={setDeliveryoption} isChecked={deliveryoption == "Express Delivery (2-5 business days via USPS) $17.95" ? true : false} />



                                    </li>

                                    <li>
                                        <Radio label={"Next Day Delivery (Next business days via FedEx) $53.61"} id={"nxtday"} name={"std"} setValue={setDeliveryoption} isChecked={deliveryoption == "Next Day Delivery (Next business days via FedEx) $53.61" ? true : false} />



                                    </li>
                                </ul>
                            </div>







                            <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 button-section center-box">


                                <Button value={"Continue To Payment"} classname={['whitebtn']} CallParentEvent={addshippingMethod} />

                            </div>
                        </div>
                    )
                }




            </div>



            {
                props.details == true && (
                    <div className="aem-Grid aem-Grid--12 align-to-left saved-details-section bottom-margin-10">
                        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 padding10">

                            <div className="subhead">
                                Shopping Method

                            </div>

                            <div className="edit-details">
                                <a href="javascript:void(0)" role='button' aria-label='Edit Payment information'>
                                    <img src={require("../../../../assets/img/edit-2.png")} alt="edit" /><span className="tab-hide phone-hide">Edit</span>
                                </a>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 left-info left-padding10">
                            <div className="content">{deliveryoption}</div>
                            <div className="content">{"Free"}</div>

                        </div>


                    </div>
                )
            }



        </>


    )
}

export default ShippingMethod;