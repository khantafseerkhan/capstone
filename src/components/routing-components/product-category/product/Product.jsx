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
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--6 aem-GridColumn--phone--6 center-box " >
                            <div className="product-container" onClick={() => redirect(element)}>
                                <div className="body">
                                    <img src={element.image} alt={element.title}/>    
                                </div>
                                <div className="footer">
                                    <div className="title">
                                        {element.title}
                                    </div>

                                    <div className="price">
                                        {element.price}
                                    </div>

                                    <div className="favourite">
                                        <img src={require("../../../../assets/img/heart.png")} alt="Favourite" />
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