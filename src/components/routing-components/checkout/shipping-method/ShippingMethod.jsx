import { useState } from "react";
import { insertshippingMethod } from "../../../../redux-management/actions/actions";
import Button from "../../../custom/Button";
import Input from "../../../custom/Input";
import Radio from "../../../custom/Radio";
import { useDispatch, useSelector } from "react-redux";

const ShippingMethod = (props) => {
    const [deliveryoption, setDeliveryoption] = useState("");
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
            {

                props.form == true && (

                    <div className="aem-Grid aem-Grid--12 align-to-left form-section bottom-margin-10" >



                        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 title">
                            2. Shipping Methods
                        </div>






                        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 list-section">
                            <ul >
                                <li>
                                    <Radio label={"Standard Shipping (4-8 business days via USPS) FREE"} id={"std"} name={"std"} setValue={setDeliveryoption} />


                                </li>

                                <li>
                                    <Radio label={"Express Delivery (2-5 business days via USPS) $17.95"} id={"express"} name={"std"} setValue={setDeliveryoption} />



                                </li>

                                <li>
                                    <Radio label={"Next Day Delivery (Next business days via FedEx) $53.61"} id={"nxtday"} name={"std"} setValue={setDeliveryoption} />



                                </li>
                            </ul>
                        </div>







                        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 button-section center-box">


                            <Button value={"Continue To Payment"} classname={['whitebtn']} CallParentEvent={addshippingMethod} />

                        </div>
                    </div>

                )
            }

            {
                props.details == true && (
                    <div className="aem-Grid aem-Grid--12 align-to-left details-section bottom-margin-10">

                        <div className="subhead">
                            Shopping Method
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 left-info">
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