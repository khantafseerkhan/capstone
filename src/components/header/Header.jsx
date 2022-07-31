import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = (props) => {
    let navigate = useNavigate();
    const cartCount = useSelector(state => state.updateCartProduct.cartCount);

console.log("cartCount    === "+cartCount)

    const goToCart = () => {
        navigate("/shoppingcart")
    }

    return (


        <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--12">
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--1">
                    <div className="phone-hide">&nbsp;</div>
                    <button className="phone-show nav-button">
                      <img src={require("../../assets/img/menu.png")} alt="menu button " />

                    </button>
                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--10">
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--9">
                                <div className="head-log">
                                    VENIA
                                </div>
                            </div>


                            <div className="aem-GridColumn aem-GridColumn--default--6 phone-hide">
                                <nav className="menu">
                                    <ul>
                                        <li><a href="/" role='button' aria-label='Home'>Home</a></li>
                                        <li><a href="/productcategory/women'snnclothing" role='button' aria-label='Women'>Women</a></li>
                                        <li><a href="/productcategory/men'snnclothing" role='button' aria-label='Men'>Men</a></li>
                                        <li><a href="/productcategory/electronics" role='button' aria-label='Electronics'>Electronics</a></li>


                                        <li><a href="/productcategory/jewelery" role='button' aria-label='Jewellery'>Jewellery</a></li>

                                    </ul>
                                </nav>
                            </div>


                            <div className="aem-GridColumn aem-GridColumn--default--3">
                                <div className="right-nav">
                                    <nav className="menu">
                                        <ul>
                                            <li>
                                                <a href="javascript:void(0)" role='button' aria-label='Home'    onClick={() => goToCart()} >
                                                    <img alt="Cart" src={require("../../assets/img/shopping-bag.png")} />
                                                </a>
                                                <div className="badge">{cartCount}</div>
                                            </li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--1 phone-hide">
                    &nbsp; 
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Header;