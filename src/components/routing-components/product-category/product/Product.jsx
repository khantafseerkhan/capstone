import { useNavigate } from "react-router-dom";

const Product = (props) => {


    let navigate = useNavigate();

    const redirect = (element) => {
        navigate("/singleproduct/" + element.id);
    };

    return (
        <>
            {
                props.allproducts.map((element) => {
                    return (
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--6 aem-GridColumn--phone--6 align-to-left " onClick={() => redirect(element)}>
                            <div className="product-container">
                                <div className="body">
                                    <img src={element.image}/>    
                                </div>
                                <div className="footer">
                                    <div className="title">
                                        {element.title}
                                    </div>

                                    <div className="price">
                                        {element.price}
                                    </div>

                                    <div className="favourite">
                                        <img src={require("../../../../assets/img/heart.png")}  />
                                    </div>
                                </div>
                            </div>

                        </div >
                    )
                })
            }
        </>

    )
}

export default Product;