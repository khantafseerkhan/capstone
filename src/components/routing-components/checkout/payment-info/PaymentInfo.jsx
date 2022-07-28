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
    }
    // cardholdername:"",
    // cardnumber:"",
    // expiry:"",
    // cvv:""
    //insertpaymentInfo
    return (
        <div className="aem-Grid aem-Grid--12 align-to-left form-section">



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
                        <Input label={"Name On Card"} name={"cardname"} id={"cardname"} value={""} setValue={setCardholdername} />

                    </div>


                    <div className="aem-GridColumn aem-GridColumn--default--12">
                        <Input label={"Credit Card Number"} name={"creditnumber"} id={"creditnumber"} value={""} setValue={setCardnumber} />

                    </div>


                    <div className="aem-GridColumn aem-GridColumn--default--8">
                        <Input label={"Expiry Date"} name={"creditexdate"} id={"creditexdate"} value={""} setValue={setExpiry} />

                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--4">
                        <Input label={"CVV"} name={"creditcvv"} id={"creditcvv"} value={""} setValue={setCvv} />

                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 center-box note">

                        Billing address same as shipping address
                    </div>
                </div>
            </div>








            <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 list-section">
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
    )
}

export default Paymentinfo;