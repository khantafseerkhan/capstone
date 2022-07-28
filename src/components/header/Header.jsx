import { useNavigate } from "react-router-dom";


const Header = (props) => {
    let navigate = useNavigate();



    const goToCart = () => {
        navigate("/shoppingcart")
    }

    return (


        <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--12">
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--1">
                    <div className="phone-hide">&nbsp;</div>
                    <div className="phone-show">
                        menu button

                    </div>
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
                                        <li><a href="javascript:void(0)" role='button' aria-label='Home'>Home</a></li>
                                        <li><a href="javascript:void(0)" role='button' aria-label='Women'>Women</a></li>
                                        <li><a href="javascript:void(0)" role='button' aria-label='Men'>Men</a></li>
                                        <li><a href="javascript:void(0)" role='button' aria-label='Electronics'>Electronics</a></li>


                                        <li><a href="javascript:void(0)" role='button' aria-label='Jewellery'>Jewellery</a></li>

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