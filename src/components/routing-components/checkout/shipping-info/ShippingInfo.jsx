import { insetshippingInfo } from "../../../../redux-management/actions/actions";
import Button from "../../../custom/Button";
import Input from "../../../custom/Input";
import Select from "../../../custom/Select";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ShippingInfo = (props) => {


    let selectedProducts = useSelector(state => state.updateCartProduct.shippingDetails[0]);

    const [email, setEmail] = useState(selectedProducts.shippingInfo.email);
    const [phone, setPhone] = useState(selectedProducts.shippingInfo.phone);
    const [country, setCountry] = useState(selectedProducts.shippingInfo.country);
    const [fname, setFname] = useState(selectedProducts.shippingInfo.fname);
    const [lname, setLname] = useState(selectedProducts.shippingInfo.lname);
    const [address1, setAddress1] = useState(selectedProducts.shippingInfo.address1);
    const [address2, setAddress2] = useState(selectedProducts.shippingInfo.address2);
    const [city, setCity] = useState(selectedProducts.shippingInfo.city);
    const [state1, setState1] = useState(selectedProducts.shippingInfo.state1);
    const [zip, setZip] = useState(selectedProducts.shippingInfo.zip);

    const dispatch = useDispatch();
    const [test, setTest] = useState(0);
    const addShippingInfo = () => {

        dispatch(insetshippingInfo(
            {
                email: email,
                phone: phone,
                country: country,
                fname: fname,
                lname: lname,
                address1: address1,
                address2: address2,
                city: city,
                state: state1,
                zip: zip,
            }
        ))

        activeSection();

    }

    useEffect(() => {
        //addShippingInfo();
        console.log("selectedProducts   " + email)
    }, [])

    const activeSection = () => {
        props.setForm(false);
        props.setDetails(true);
        props.setNext(true);

    }

    return (
        <div className="aem-Grid aem-Grid--12 align-to-left bottom-margin-10">
            <div className="aem-GridColumn aem-GridColumn--default--12">
                <div className="checkout-title">
                    Guest Checkout
                </div>


                {
                    props.form == true && (
                        <div className="aem-Grid aem-Grid--12 align-to-left form-section">
                            <div className="subhead">Contact information</div>
                            <p>
                                We’ll use these details to keep you informed on your delivery.
                            </p>


                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                                <Input label={"Email"} name={"email"} id={"email"} value={email} placeholder={"abc@xyz.com"} setValue={setEmail} />
                            </div>


                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                                <Input label={"Phone Number"} name={"phone"} id={"phone"} value={phone} placeholder={"22 22222222"} setValue={setPhone} />
                            </div>


                            <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 title">
                                1. Shipping Information
                            </div>


                            <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">

                                <div className="aem-Grid aem-Grid--12">
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                                        <Select defaultOption={{ label: "Country", value: "" }} options={[]} id={"country"} label={"Country"} setValue={setCountry} />

                                    </div>
                                </div>

                                {/* <Input label={"Phone Number"} name={"phone"} id={"phone"} value={""} placeholder={"22 22222222"} /> */}
                            </div>



                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                                <Input label={"First Name"} name={"fname"} id={"fname"} value={fname} placeholder={""} setValue={setFname} />
                            </div>


                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                                <Input label={"Last Name"} name={"lname"} id={"lname"} value={lname} placeholder={""} setValue={setLname} />
                            </div>

                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                                <Input label={"Street Address 1"} name={"saddress1"} id={"saddress1"} value={address1} placeholder={""} setValue={setAddress1} />
                            </div>


                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                                <Input label={"Street Address 2"} name={"saddress2"} id={"saddress2"} value={address2} placeholder={""} setValue={setAddress2} />
                            </div>


                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                                <Input label={"City"} name={"city"} id={"city"} value={city} placeholder={""} setValue={setCity} />
                            </div>


                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">

                                <div className="aem-Grid aem-Grid--12">
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">
                                        <Select defaultOption={{ label: "State", value: "" }} options={[]} id={"state"} label={"State"} setValue={setState1} />

                                    </div>

                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">
                                        <Input label={"ZIP"} name={"zip"} id={"zip"} value={zip} placeholder={""} setValue={setZip} />

                                    </div>





                                </div>

                                {/* <Input label={"Phone Number"} name={"phone"} id={"phone"} value={""} placeholder={"22 22222222"} /> */}
                            </div>


                            <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 button-section center-box">


                                <Button value={"Continue To Shipping Method"} classname={['whitebtn']} CallParentEvent={addShippingInfo} />

                            </div>
                        </div>
                    )
                }


                {
                    props.details == true && (
                        <div className="aem-Grid aem-Grid--12 align-to-left details-section">
                            <div className="subhead">
                                Shopping Information
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 left-info">
                                <div className="content">{email}</div>
                                <div className="content">{phone}</div>

                            </div>

                            <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 right-info">
                                <div className="content">{fname} {lname}</div>
                                <div className="content">{address1} </div>
                                <div className="content">{address2} </div>
                                <div className="content">{city} {state1} {zip}</div>
                                <div className="content">{country} </div>





                            </div>
                        </div>
                    )
                }








            </div>

        </div>
    )
}

export default ShippingInfo;