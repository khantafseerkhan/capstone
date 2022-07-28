import Button from "../../../custom/Button";
import Input from "../../../custom/Input";
import Radio from "../../../custom/Radio";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { insertpaymentInfo } from "../../../../redux-management/actions/actions";

const Paymentinfo = (props) => {
    const dispatch = useDispatch();
    const [cardholdername, setCardholdername] = useState("");
    const [cardnumber, setCardnumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");

    const addpaymentInfo = () => {
        dispatch(insertpaymentInfo(
            {

                cardholdername: cardholdername,
                cardnumber: cardnumber,
                expiry: expiry,
                cvv: cvv

            }
        ))

        activeSection();
    }


    const activeSection = () => {
        props.setForm(false);
        props.setDetails(true);
        props.setNext(true)

    }

    // cardholdername:"",
    // cardnumber:"",
    // expiry:"",
    // cvv:""
    //insertpaymentInfo
    return (
        <>
            {
                props.form == true && (

                    <div className="aem-Grid aem-Grid--12 align-to-left form-section bottom-margin-10">



                        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 title">
                            3. Payment Information
                        </div>






                        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 list-section">
                            <ul >
                                <li>
                                    <Radio label={"Credit Card"} id={"credit"} name={"credit"} />
                                </li>
                            </ul>
                        </div>


                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">

                            <div className="aem-Grid aem-Grid--12 align-to-left">


                                <div className="aem-GridColumn aem-GridColumn--default--12">
                                    <Input label={"Name On Card"} name={"cardname"} id={"cardname"} value={cardholdername} setValue={setCardholdername} />

                                </div>


                                <div className="aem-GridColumn aem-GridColumn--default--12">
                                    <Input label={"Credit Card Number"} name={"creditnumber"} id={cardnumber} value={cardnumber} setValue={setCardnumber} />

                                </div>


                                <div className="aem-GridColumn aem-GridColumn--default--8">
                                    <Input label={"Expiry Date"} name={"creditexdate"} id={"creditexdate"} value={expiry} setValue={setExpiry} />

                                </div>

                                <div className="aem-GridColumn aem-GridColumn--default--4">
                                    <Input label={"CVV"} name={"creditcvv"} id={"creditcvv"} value={cvv} setValue={setCvv} />

                                </div>

                                <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 center-box note">

                                    Billing address same as shipping address
                                </div>
                            </div>
                        </div>








                        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 list-section ">
                            <ul >
                                <li>
                                    <Radio label={"Pay Pal"} id={"paypal"} name={"paypal"} />
                                </li>
                            </ul>
                        </div>

                        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 button-section center-box">


                            <Button value={"Continue To Payment"} classname={['whitebtn']} CallParentEvent={addpaymentInfo} />

                        </div>
                    </div>
                )}

            {
                props.details == true && (

                    <div className="aem-Grid aem-Grid--12 align-to-left details-section bottom-margin-10">
                        <div className="subhead">
                            Payment Information
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 left-info">
                            <div className="content">{"Credit Card"}</div>
                            <div className="content">Visa ending in {cardnumber.substr(cardnumber.length - 4)}</div>

                        </div>


                    </div>
                )
            }
        </>
    )
}

export default Paymentinfo;