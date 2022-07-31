import { useEffect } from "react";
import { homeData } from "./home_data";
import { useNavigate } from "react-router-dom";

const Home = () => {

    // console.log(homeData);
    let navigate = useNavigate();


    const redirect = (type) => {
        navigate("/productcategory/" + type);


    }


    return (
        <div className='center-box'>
            <div className="aem-Grid aem-Grid--12">

                {/* Banner section */}

                <div className="aem-GridColumn aem-GridColumn--default--12 top-banner">

                    <div className="aem-Grid aem-Grid--12 tab-show phone-show">
                        <div className="aem-GridColumn aem-GridColumn--tablet--12  aem-GridColumn--phone--12  image-section">
                            <img alt="banner image" src={require("../../../assets/img/bannerimg_1.png")} />

                            <div className="phone-details-section">
                                <div className="title">{homeData.banner1.title}</div>
                                <div className="subtitle">{homeData.banner1.subtitle}</div>


                                <div className="aem-GridColumn aem-GridColumn--default--6 btn-section">
                                    <button type="button" className="orangebtn">Shop Now</button>


                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="aem-Grid aem-Grid--12  tab-hide phone-hide">

                        {/* Banner section */}

                        <div className="aem-GridColumn aem-GridColumn--default--6 detail-section">

                            <div className="title">{homeData.banner1.title}</div>
                            <div className="subtitle">{homeData.banner1.subtitle}</div>


                            <div className="aem-Grid aem-Grid--12 ">


                                <div className="aem-GridColumn aem-GridColumn--default--6 btn-section">
                                    <button type="button" className="orangebtn">Shop Now</button>


                                </div>

                            </div>
                        </div>

                        <div className="aem-GridColumn aem-GridColumn--default--6 image-section">
                            <img alt="banner image" src={require("../../../assets/img/bannerimg_1.png")} />
                        </div>
                    </div>
                </div>

            </div>


            {/* product category  section */}


            <div className="aem-Grid aem-Grid--12">


                <div className="aem-GridColumn aem-GridColumn--default--10 aem-GridColumn aem-GridColumn--tablet--11 aem-GridColumn--phone--12 unset-float center-box">
                    <div className="aem-Grid aem-Grid--12 ">

                        {/* Banner section */}

                        {
                            homeData.displayproduct.map((element) => {
                                return (
                                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn aem-GridColumn--tablet--6 aem-GridColumn aem-GridColumn--phone--12" role="button" aria-label={element.title} onClick={() => redirect(element.category)}>
                                        <div className="product-category-card-container">
                                            <img src={element.img} alt={element.title} />

                                            <div className="footer-section">
                                                <div className="title">{element.title}</div>
                                                <div className="sub-title">{element.subtitle}</div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }


                    </div>
                </div>

            </div>

            {/* banner 2 */}


            <div className="aem-Grid aem-Grid--12">


                <div className="aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--tablet--11 aem-GridColumn--phone--12 unset-float center-box">
                    <div className="aem-Grid aem-Grid--12 banner2-section">

                        {/* Banner section */}

                        <div className="aem-GridColumn aem-GridColumn--tablet--12 aem-GridColumn--phone--12 tab-show phone-show ">
                            <div className="img-section">
                                <img src={require("../../../assets/img/bannerimg_2.png")} alt="Banner 2" />

                            </div>

                        </div>


                        <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 ">
                            <div className="text-section">
                                <div className="title">{homeData.banner2.title}</div>
                                <div className="subtitle">{homeData.banner2.subtitle}</div>
                                <div className="para">{homeData.banner2.para}</div>


                                <div className="aem-Grid aem-Grid--12 ">


                                    <div className="aem-GridColumn aem-GridColumn--default--6 btn-section">
                                        <button type="button" className="transparent">Shop Now</button>


                                    </div>

                                    <div className="aem-GridColumn aem-GridColumn--default--6 btn-section">
                                        <button type="button" className="orangebtn">Shop Now</button>


                                    </div>

                                    <hr />

                                </div>
                            </div>


                        </div>

                        <div className="aem-GridColumn aem-GridColumn--default--5 tab-hide phone-hide ">
                            <div className="img-section">
                                <img src={require("../../../assets/img/bannerimg_2.png")} alt="Banner 2" />

                            </div>

                        </div>



                    </div>
                </div>

            </div>

            {/* banner 3 */}

            <div className="aem-Grid aem-Grid--12">


                <div className="aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--tablet--11 aem-GridColumn--phone--12 unset-float center-box">
                    <div className="aem-Grid aem-Grid--12 banner3-section">

                        {/* Banner section */}
                        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                            <div className="img-section">
                                <img src={require("../../../assets/img/bannerimg_3.png")} alt="Banner 2" />



                            </div>

                           <div className="tab-show phone-show">
                           <div className="text-section">
                                <div className="title">{homeData.banner3.title}</div>
                                <div className="subtitle">{homeData.banner3.subtitle}</div>


                                <div className="aem-Grid aem-Grid--12 ">


                                    <div className="aem-GridColumn aem-GridColumn--default--6 btn-section">
                                        <button type="button" className="transparent">Shop Now</button>


                                    </div>



                                    {/* <hr /> */}

                                </div>
                            </div>
                           </div>


                        </div>

                        <div className="aem-GridColumn aem-GridColumn--default--4 tab-hide phone">
                            <div className="text-section">
                                <div className="title">{homeData.banner3.title}</div>
                                <div className="subtitle">{homeData.banner3.subtitle}</div>


                                <div className="aem-Grid aem-Grid--12 ">


                                    <div className="aem-GridColumn aem-GridColumn--default--6 btn-section">
                                        <button type="button" className="transparent">Shop Now</button>


                                    </div>



                                    {/* <hr /> */}

                                </div>
                            </div>


                        </div>





                    </div>
                </div>

            </div>




        </div>

    )
}
export default Home;