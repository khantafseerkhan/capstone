import { insetshippingInfo } from "../../../../redux-management/actions/actions";
import Button from "../../../custom/Button";
import Input from "../../../custom/Input";
import Select from "../../../custom/Select";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ShippingInfo = (props) => {

    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [country,setCountry]=useState("");
    const [fname,setFname]=useState("");

    const [lname,setLname]=useState("");

    const [address1,setAddress1]=useState("");
    const [address2,setAddress2]=useState("");
    const [city,setCity]=useState("");

    const [state1,setState1]=useState("");
    const [zip,setZip]=useState("");

    let selectedProducts = useSelector(state => state.updateCartProduct.shippingDetails[0]);

    const dispatch = useDispatch();


    const [test,setTest]=useState(0);

    const addShippingInfo=()=>{
        dispatch(insetshippingInfo(
            {
                    email:email,
    phone:phone,
    country:country,
    fname: fname,
    lname:  lname,
    address1:  address1,
    address2:  address2,
    city: city,
    state: state1,
    zip: zip,
            }
        ))
    }

    useEffect(()=>{
        //addShippingInfo();
        console.log("selectedProducts   "+JSON.stringify(selectedProducts))
    },[])

    return (
        <div className="aem-Grid aem-Grid--12 align-to-left">
{test}
            <div className="aem-GridColumn aem-GridColumn--default--12">
                <div className="checkout-title">
                    Guest Checkout
                </div>

                <div className="contact-info">
                    <div className="title">Contact information</div>
                    <p>
                        We’ll use these details to keep you informed on your delivery.
                    </p>
                </div>

                <div className="aem-Grid aem-Grid--12 align-to-left form-section">



                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                        <Input label={"Email"} name={"email"} id={"email"} value={""} placeholder={"abc@xyz.com"} setValue={setEmail}/>
                    </div>


                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                        <Input label={"Phone Number"} name={"phone"} id={"phone"} value={""} placeholder={"22 22222222"}  setValue={setPhone}/>
                    </div>


                    <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 title">
                        1. Shipping Information
                    </div>


                    <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">

                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                                <Select defaultOption={{ label: "Country", value: "" }} options={[]} id={"country"} label={"Country"} setValue={setCountry}/>

                            </div>
                        </div>

                        {/* <Input label={"Phone Number"} name={"phone"} id={"phone"} value={""} placeholder={"22 22222222"} /> */}
                    </div>



                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                        <Input label={"First Name"} name={"fname"} id={"fname"} value={""} placeholder={""} setValue={setFname}/>
                    </div>


                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                        <Input label={"Last Name"} name={"lname"} id={"lname"} value={""} placeholder={""} setValue={setLname}/>
                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                        <Input label={"Street Address 1"} name={"saddress1"} id={"saddress1"} value={""} placeholder={""} setValue={setAddress1}/>
                    </div>


                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                        <Input label={"Street Address 2"} name={"saddress2"} id={"saddress2"} value={""} placeholder={""} setValue={setAddress2}/>
                    </div>


                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                        <Input label={"City"} name={"city"} id={"city"} value={""} placeholder={""} setValue={setCity}/>
                    </div>


                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">

                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">
                             <Select defaultOption={{ label: "State", value: "" }} options={[]} id={"state"} label={"State"} setValue={setState1}/> 

                            </div>

                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">
                            <Input label={"ZIP"} name={"zip"} id={"zip"} value={""} placeholder={""} setValue={setZip}/>
                 
                            </div>


                            

                            
                        </div>

                        {/* <Input label={"Phone Number"} name={"phone"} id={"phone"} value={""} placeholder={"22 22222222"} /> */}
                    </div>


                    <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 button-section center-box">
                            
                            
                            <Button value={"Continue To Shipping Method"} classname={['whitebtn']} CallParentEvent={addShippingInfo} /> 
            
                       </div>
                </div>


            </div>

        </div>
    )
}

export default ShippingInfo;