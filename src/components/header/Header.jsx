import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { hasClass } from "../../assets/customjs/custom";

const Header = (props) => {
    let navigate = useNavigate();
    const cartCount = useSelector(state => state.updateCartProduct.cartCount);


    const openNav = () => {
        let phonenav = document.getElementById("phonenav");
        if (hasClass(phonenav, "activenav")) {
            phonenav.classList.remove("activenav");
            document.getElementById("mainbody").style.overflow = "initial";

        } else {
            phonenav.classList.add("activenav");
            document.getElementById("mainbody").style.overflow = "hidden";

        }

    }
    const closeNav = () => {
        let phonenav = document.getElementById("phonenav");
        if (hasClass(phonenav, "activenav")) {
            phonenav.classList.remove("activenav");
            document.getElementById("mainbody").style.overflow = "initial";


        }
    }


    const goToCart = () => {
        navigate("/shoppingcart")
    }

    const activesection = (e) => {
        let el = e.target;
        let siblings = el.parentElement.parentElement.children;
        for (let i = 0; i < siblings.length; i++) {
            siblings[i].classList.remove("activenav-menu");
        }

        el.parentElement.classList.add("activenav-menu");


    }

    return (
        <>

            <div className="aem-Grid aem-Grid--12">
                <div className="aem-GridColumn aem-GridColumn--default--12">
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--1">
                            <div className="phone-hide">&nbsp;</div>
                            <button className="tab-show phone-show nav-button" onClick={() => openNav()}>
                                <img src={require("../../assets/img/menu.png")} alt="menu button " />

                            </button>
                        </div>

                        <div className="aem-GridColumn aem-GridColumn--default--10">
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--9 aem-GridColumn--phone--9">
                                    <div className="head-log">
                                        VENIA
                                    </div>
                                </div>


                                <div className="aem-GridColumn aem-GridColumn--default--6 tab-hide phone-hide">
                                    <nav className="menu">
                                        <ul>
                                            <li><a href="javascript:void(0)" onClick={(e) => { activesection(e);closeNav(); navigate("/"); }} role='button' aria-label='Home'>Home</a></li>
                                            <li><a href="javascript:void(0)" onClick={(e) => { activesection(e);closeNav(); navigate("/productcategory/women's clothing"); closeNav(); }} role='button' aria-label='Women'>Women</a></li>
                                            <li><a href="javascript:void(0)" onClick={(e) => { activesection(e);closeNav(); navigate("/productcategory/men's clothing"); closeNav(); }} role='button' aria-label='Men'>Men</a></li>
                                            <li><a href="javascript:void(0)" onClick={(e) => { activesection(e);closeNav(); navigate("/productcategory/electronics"); closeNav(); }} role='button' aria-label='Electronics'>Electronics</a></li>


                                            <li><a href="javascript:void(0)" onClick={(e) => { activesection(e); closeNav();navigate("/productcategory/jewelery") }} role='button' aria-label='Jewellery'>Jewellery</a></li>

                                        </ul>
                                    </nav>
                                </div>


                                <div className="aem-GridColumn aem-GridColumn--default--3">
                                    <div className="right-nav">
                                        <nav className="menu">
                                            <ul>
                                                <li>
                                                    <a href="javascript:void(0)" role='button' aria-label='Home' onClick={() => goToCart()} >
                                                        <img alt="Cart" src={require("../../assets/img/shopping-bag.png")} />
                                                    </a>
                                                    <div className="badge"><div>{cartCount}</div></div>
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


            <div className="aem-Grid aemGrid--12 tab-show shadow phone-show">
                <div className="aem-GridColumn aem-GridColumn--phone--12 head-phonenav" id="phonenav">
                    <div className="header">Shopping Category
                        <div>   <a onClick={() => closeNav()}>&#x2715;</a></div>
                    </div>
                    <nav role='navigation' aria-label='Mobile Menu'>
                        <ul>
                            <li><a href="javascript:void(0)" onClick={(e) => {activesection(e); closeNav();navigate("/");  }} role='button' aria-label='Home'>Home</a></li>
                            <li><a href="javascript:void(0)" onClick={(e) => {activesection(e); closeNav();navigate("/productcategory/women'snnclothing"); closeNav() }} role='button' aria-label='Women'>Women</a></li>
                            <li><a href="javascript:void(0)" onClick={(e) => { activesection(e);closeNav();navigate("/productcategory/men'snnclothing"); closeNav() }} role='button' aria-label='Men'>Men</a></li>
                            <li><a href="javascript:void(0)" onClick={(e) => {activesection(e); closeNav();navigate("/productcategory/electronics"); closeNav() }} role='button' aria-label='Electronics'>Electronics</a></li>


                            <li><a href="javascript:void(0)" onClick={(e) =>{activesection(e); closeNav();navigate("/productcategory/jewelery")}} role='button' aria-label='Jewellery'>Jewellery</a></li>

                        </ul>
                    </nav>

                    <div className="bottom-section shadow">
                        <div className="bottom-footer">
                            <div>
                                <img alt="Account" src={require("../../assets/img/user.png")} style={{ paddingRight: "10px" }} />
                                <a href="javascript:void(0)" role='button' aria-label='Account'>Account</a>
                            </div>

                            <div>
                                <a href="javascript:void(0)" role='button' aria-label='Sign in'>Sign in</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;