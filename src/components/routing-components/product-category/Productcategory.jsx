import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getservice } from "../../../assets/apiservice/customservice";
import { activeloader, GetSortOrder } from "../../../assets/customjs/custom";
import Pagination from "../../paginations/pagination";
import Filter from "./filter/Filter";
import Product from "./product/Product";


let PageSize = 5;

const ProductCategory = () => {


    const [productDetails, setProductDetails] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;

        setFilteredData(productDetails.slice(firstPageIndex, lastPageIndex));
        //return productDetails.slice(firstPageIndex, lastPageIndex);


    }, [currentPage]);

    // console.log("param    "+useParams().id);
    let id = useParams().id;



    useEffect(() => {
        if (!id) {
            id = ""
        } else {
            id = id.replace("nn", " ");
            console.log(id)
        }
        // this.props.updateproductslist(['1']);
        //  try { activeloader() } catch (e) { }
        getFilteredDetails(id);



    }, [])

    const getFilteredDetails = (type) => {

        const apires = type == "" ? getservice('https://fakestoreapi.com/products/') : getservice('https://fakestoreapi.com/products/category/' + type);
        apires.then(json => {


            setProductDetails(json)

            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;

            setFilteredData(json.slice(firstPageIndex, lastPageIndex));

        });
    }



    const sortChange = (event) => {

        if (event.target.value === "lowest") {
            let sortedData = productDetails.sort(GetSortOrder("price"));


            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;

            setFilteredData(sortedData.slice(firstPageIndex, lastPageIndex));
        } else if (event.target.value === "highest") {

            // productDetails.sort(GetReverseSort("price"));
            let sortedData = productDetails.slice().sort((a, b) => b.price - a.price);

            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;

            setFilteredData(sortedData.slice(firstPageIndex, lastPageIndex));

        }

    }



    return (

        <>

            {/* head banner */}
            <div className="aem-Grid aem-Grid--12">


                <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--11 aem-GridColumn--phone--12 unset-float center-box">
                    <div className="aem-Grid aem-Grid--12 product-banner-section">

                        {/* Banner section */}
                        <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                            <div className="img-section">
                                <img src={require("../../../assets/img/productcategoryBanner.png")} alt="Banner 2" />



                            </div>

                            <div className="tab-show phone-show">
                            <div className="text-section ">
                                <div className="title">
                                    Women's were
                                </div>


                                
                            </div>
                            </div>


                        </div>

                        <div className="aem-GridColumn aem-GridColumn--default--4 tab-hide phone-hide">
                            <div className="text-section">
                            <div className="title">Women's were</div>                              
                            </div>


                        </div>





                    </div>
                </div>

            </div>




            {/* product sections */}
            <div className="aem-Grid aem-Grid--12">





                <div className="aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--tablet--11 aem-GridColumn--phone--12 unset-float center-box">
                    {/* header section */}

                    <div className="aem-Grid aem-Grid--12 product-head-section">
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 align-to-left filters-flow">
                            Clothing / Women’s / Outerwear
                        </div>

                        <div className="aem-GridColumn aem-GridColumn--tablet--12 aem-GridColumn--phone--12 tab-show phone-show">
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--6 filter-option-section">
                                    <a href="javascript:void(0)" role='button' aria-label='Filter'  >
                                        <img src={require("../../../assets/img/sliders.png")} alt="Sort" />Filters</a>
                                </div>

                                <div className="aem-GridColumn aem-GridColumn--default--6 filter-option-section">
                                    <a href="javascript:void(0)" role='button' aria-label='Filter'  >
                                        <img src={require("../../../assets/img/arrow-up.png")} alt="Sort" />

                                        <img src={require("../../../assets/img/arrow-down.png")} alt="Sort" />

                                        Sort By
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12  align-to-left result">
                            {productDetails.length} Results
                        </div>

                        <div className="aem-GridColumn aem-GridColumn--default--2 align-to-left tab-hide phone-hide">
                            <select className="select">
                                <option value="" selected>Select</option>
                            </select>
                        </div>
                    </div>

                    <div className="aem-Grid aem-Grid--12 ">
                        {/* filter section */}
                        <div className="aem-GridColumn aem-GridColumn--default--3 align-to-left tab-hide phone-hide">
                            <Filter filterfunction={getFilteredDetails} />

                        </div>


                        {/* products section */}

                        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 align-to-left">
                            <div className="aem-Grid aem-Grid--12 ">
                                <Product allproducts={filteredData} />

                            </div>
                        </div>
                    </div>
                </div>



                <div className='pagination-section'>

                    {filteredData.length > 0 &&
                        // (<div>sdfsfsdfsdf</div>)
                        (<Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={productDetails.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}
                        />)

                    }

                </div>
            </div>
        </>




    )
}
export default ProductCategory;