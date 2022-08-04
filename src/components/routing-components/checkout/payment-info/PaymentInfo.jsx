import Button from "../../../custom/Button";
import Input from "../../../custom/Input";
import Radio from "../../../custom/Radio";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { insertpaymentInfo } from "../../../../redux-management/actions/actions";

const Paymentinfo = (props) => {
    const dispatch = useDispatch();

    let paymentInfo = useSelector(state => state.updateCartProduct.shippingDetails[0]);
    const [cardholdername, setCardholdername] = useState(paymentInfo.paymentInfo.cardholdername);
    const [cardnumber, setCardnumber] = useState(paymentInfo.paymentInfo.cardnumber);useState(paymentInfo.paymentInfo.cardnumber);
    const [expiry, setExpiry] =useState(paymentInfo.paymentInfo.expiry);
    const [cvv, setCvv] = useState(paymentInfo.paymentInfo.cvv);

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
        props.setNext(true);
        props.setPlacorder(true);

    }

    // cardholdername:"",
    // cardnumber:"",
    // expiry:"",
    // cvv:""
    //insertpaymentInfo
    return (
        <>

                    <div className="aem-Grid aem-Grid--12 align-to-left form-section bottom-margin-10">



                       { props.details==false &&
                        (
                            <div className={"aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 title "+(props.form==false && props.details==false?'border-inside-top-1 border-inside-bottom-1':'')}>
                            3. Payment Information
                        </div>
                        )
                       }


                        {
                            props.form==true && (
                                <div className="form-section">



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

                            )
                        }



                    </div>

            {
                props.details == true && (

                    <div className="aem-Grid aem-Grid--12 align-to-left saved-details-section bottom-margin-10">

                        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 padding10 ">

                            <div className="subhead">
                                Payment Information


                            </div>

                            <div className="edit-details">
                                <a href="javascript:void(0)" role='button' aria-label='Edit Payment information'>
                                <img src={require("../../../../assets/img/edit-2.png")} alt="edit"/><span className="tab-hide phone-hide">Edit</span>
                                </a>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 left-info left-padding10">
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