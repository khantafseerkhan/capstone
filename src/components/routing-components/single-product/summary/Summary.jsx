import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux-management/actions/actions";


const Summary = (props) => {
    //productdata


    const [filterDescription, setFilterDescription] = useState(true);



    //  props.productdata.rating;
    const dispatch = useDispatch();
    const [quantity, setQauntity] = useState(1);

    const readmore = () => {
        setFilterDescription(false);
    };
    const lessmore = () => {
        setFilterDescription(true);
    };

    


    const incQuantity = () => {
        setQauntity(quantity + 1);

    }

    const decQuantity = () => {
        if (quantity > 1) {
            setQauntity(quantity - 1);

        }
    }
    const AddProduct = (inputdata) => {
        // const productData = useSelector(state => state.updateCartProduct);
        let obj = {
            id: inputdata.id,
            price: inputdata.price,
            description: inputdata.description,
            title: inputdata.title,
            rating: inputdata.rating,
            category: inputdata.category,
            image: inputdata.image,
            quantity: quantity
        }
        dispatch(addToCart(obj));
    }
    return (

        <div className="aem-Grid aem-Grid--12">

            {props.productdata && (
                <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12  aem-GridColumn--phone--12">
                    <div className="aem-Grid aem-Grid--12 product-summary">
                        <div className="aem-GridColumn aem-GridColumn--default--12">
                            <div className="flow"></div>
                            <div className="productdetails-section border-inside-bottom-3">
                                <div className="title-section">{props.productdata.title}</div>
                                <div className="price-section">&#36; {props.productdata.price}</div>
                                <div className="rating-section">
                                    <span ></span>
                                    <span></span>
                                    <span ></span>
                                    <span></span>
                                    <span ></span>

                                    <label>{232
                                    }</label>

                                </div>
                                {props.productdata.description && (
                                    <div className="summary-section">

                                        {props.productdata.description.length > 150 ? (filterDescription == true ? props.productdata.description.substring(0, 150) : props.productdata.description) : props.productdata.description}

                                        {props.productdata.description.length > 150 && filterDescription == true && (
                                            <a href="javascript:void(0)" role='button' aria-label='Home' onClick={() => readmore()}>Read Me</a>
                                        )}

                                        {props.productdata.description.length > 150 && filterDescription == false && (
                                            <a href="javascript:void(0)" role='button' aria-label='Home' onClick={() => lessmore()}>Less More</a>
                                        )}
                                    </div>

                                )}

                            </div>

                            <div className="selection-section ">


                                <div className="quntity-section">
                                    {/* <div className="title-section">Quantity</div> */}
                                    <label className="title-section" for="quantityvalue">Quantity</label>
                                    <br /><br />

                                    <div className="quantiy-input-section">
                                        <button type="button" aria-label='Quantity Decreament' onClick={() => decQuantity()}>-</button>


                                        <input type="text" id="quantityvalue" value={quantity} name="quantityvalue" />
                                        <button onClick={() => incQuantity()} type="button" aria-label='Quantity Increament'>+</button>

                                    </div>

                                </div>


                                <div className="add-section tab-center phone-center">

                                    <button type="button" onClick={() => AddProduct(props.productdata)} aria-label='Add To Cart'>Add To Cart</button>

                                    <div>
                                        <a href="javascript:void(0)" role='button' aria-label='Save for Later'><img alt="save for later" src={require("../../../../assets/img/heart.png")} /><span>Save</span></a>
                                        <a href="javascript:void(0)" role='button' aria-label='Share'><img alt="Share" src={require("../../../../assets/img/share-2.png")} /><span>Share</span></a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}


            {/* <div className="aem-GridColumn aem-GridColumn--default--4"></div> */}


        </div>


    )
}


export default Summary;