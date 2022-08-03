import { useDispatch, useSelector } from "react-redux";
import Button from "../../../custom/Button";
import { useNavigate } from "react-router-dom";


const Orderitems = (props) => {
    let navigate=useNavigate();
    let cartData = useSelector(state => state.updateCartProduct.cartProduct);

    const placeOrder=()=>{
        navigate("/orderSuccess")
    }
    return (
        <>
            {
                props.orderChart==true && (
                    <>
                    <div className="aem-Grid aem-Grid--12 align-to-left order-container bottom-margin-10">
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
                                            <li>Name</li>
                                            <li>Size<span>:</span>L</li>
                                            <li>Color<span>:</span>Red</li>
                                            <li>Quantity<span>:</span>3</li>

                                        </ul>

                                    </div>
                                </div>
                            </div>

                        )
                    })
                }

            </div>


           
                    </>
                )
            }
            

                

        </>


    )
}

export default Orderitems;