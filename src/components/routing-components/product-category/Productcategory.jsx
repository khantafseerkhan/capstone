import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getservice } from "../../../assets/apiservice/customservice";
import { activeloader, GetSortOrder, hasClass } from "../../../assets/customjs/custom";
import Pagination from "../../paginations/pagination";
import Filter from "./filter/Filter";
import Product from "./product/Product";


let PageSize = 5;

const ProductCategory = () => {
    let location = useLocation();


    const [productDetails, setProductDetails] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [totalcount, setTotalcount] = useState(0);
    const [param,setParam]=useState()
    useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        
        setFilteredData(productDetails.slice(firstPageIndex, lastPageIndex));
        //return productDetails.slice(firstPageIndex, lastPageIndex);


    }, [currentPage]);

    const {id}=useParams();


    useEffect(() => {



        // this.props.updateproductslist(['1']);
        //  try { activeloader() } catch (e) { }
        getFilteredDetails([id]);



    }, [])

    useEffect(() => {

        multipleFilters([id]);
        
    }, [productDetails])

    useEffect(()=>{
 
        console.log(id)
        multipleFilters([id]);

    },[id])


    



    const openNav = () => {
        let phonenav = document.getElementById("absolute-postion");
        if (hasClass(phonenav, "activenav")) {
            phonenav.classList.remove("activenav");
            document.getElementById("mainbody").style.overflow = "initial";

        } else {
            document.getElementById("mainbody").style.overflow = "hidden";

            phonenav.classList.add("activenav");

        }

    }

    const getFilteredDetails = (type) => {
        // const apires = type == "" ? getservice('https://fakestoreapi.com/products/') : getservice('https://fakestoreapi.com/products/category/' + type);

        const apires = getservice('https://fakestoreapi.com/products').then(json => {


            setProductDetails(json);
            // console.log(json.length)
            // const firstPageIndex = (currentPage - 1) * PageSize;
            // const lastPageIndex = firstPageIndex + PageSize;
            // setTotalcount(json.length);
            // setFilteredData(json.slice(firstPageIndex, lastPageIndex));


        });
    }

    const multipleFilters = (filterBy) => {
        console.log("filterBy"+filterBy[0]);
        let categoryData = productDetails;
        if (filterBy.length > 0 && filterBy[0] != '') {
            if (filterBy.length == 1) {
                categoryData = categoryData.filter(x => (x.category == filterBy[0]));
            } else if (filterBy.length == 2) {
                categoryData = categoryData.filter(x => (x.category == filterBy[0]) || (x.category == filterBy[1]));

            } else if (filterBy.length == 3) {
                categoryData = categoryData.filter(x => (x.category == filterBy[0]) || (x.category == filterBy[1]) || (x.category == filterBy[2]));

            } else if (filterBy.length == 4) {
                categoryData = categoryData.filter(x => (x.category == filterBy[0]) || (x.category == filterBy[1]) || (x.category == filterBy[2]) || (x.category == filterBy[3]));

            } else if (filterBy.length == 5) {
                categoryData = categoryData.filter(x => (x.category == filterBy[0]) || (x.category == filterBy[1]) || (x.category == filterBy[2]) || (x.category == filterBy[3]) || (x.category == filterBy[4]));

            }

        } else {
            categoryData = productDetails;

        }

        setTotalcount(categoryData.length);

        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;

        setFilteredData(categoryData.slice(firstPageIndex, lastPageIndex));

    }


    const sortChange = (event) => {

        if (event.target.value === "lowest") {
            let sortedData = filteredData.sort(GetSortOrder("price"));


            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;

            setFilteredData(sortedData.slice(firstPageIndex, lastPageIndex));
        } else if (event.target.value === "highest") {

            // productDetails.sort(GetReverseSort("price"));
            let sortedData = filteredData.slice().sort((a, b) => b.price - a.price);

            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;

            setFilteredData(sortedData.slice(firstPageIndex, lastPageIndex));

        }

    }



    return (

        <>

            {/* head banner */}
            <div className="aem-Grid aem-Grid--12 bottom-margin-10">


                <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 unset-float center-box">
                    <div className="aem-Grid aem-Grid--12 product-banner-section">



                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4  phone-hide">
                            <div className="text-section">
                                <div className="title">
                                    Men's Outerwear
                                    <hr />
                                </div>
                            </div>


                        </div>
                        {/* Banner section */}
                        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--8 aem-GridColumn--phone--12">
                            <div className="img-section bannerimg ">
                                {/* <img src={require("../../../assets/img/productcategoryBanner.png")} alt="Banner 2" /> */}



                            </div>

                            <div className="phone-show">
                                <div className="text-section ">
                                    <div className="title">
                                        Men's Outerwear

                                        <hr />
                                    </div>



                                </div>
                            </div>


                        </div>






                    </div>
                </div>

            </div>




            {/* product sections */}
            <div className="aem-Grid aem-Grid--12">





                <div className="aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--tablet--11 aem-GridColumn--phone--12 unset-float center-box">
                    {/* header section */}

                    <div className="aem-Grid aem-Grid--12 product-head-section bottom-margin-10">
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 align-to-left filters-flow padding15 phone-left-padding10" >
                            Clothing / Women’s / Outerwear
                        </div>

                        <div className="aem-GridColumn aem-GridColumn--tablet--12 aem-GridColumn--phone--12 tab-show phone-show ">
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--6 filter-option-section padding15">
                                    <a href="javascript:void(0)" role='button' aria-label='Filter' onClick={() => openNav()}>
                                        <img src={require("../../../assets/img/sliders.png")} alt="Sort" />Filters</a>
                                </div>

                                <div className="aem-GridColumn aem-GridColumn--default--6 filter-option-section padding15">
                                    <a href="javascript:void(0)" role='button' aria-label='Filter'  >
                                        <img src={require("../../../assets/img/arrow-up.png")} alt="Sort" />

                                        <img src={require("../../../assets/img/arrow-down.png")} alt="Sort" />

                                        Sort By
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12  align-to-left result" >
                            {totalcount} Results
                        </div>

                        <div className="aem-GridColumn aem-GridColumn--default--2 align-to-left tab-hide phone-hide sort-select">
                            <select className="select" onChange={(e) => sortChange(e)}>
                                <option defaultValue="" >Select</option>
                                <option value="lowest" >Lowest Price</option>
                                <option value="highest" >Highest Price</option>

                            </select>
                        </div>
                    </div>

                    <div className="aem-Grid aem-Grid--12 ">
                        {/* filter section */}
                        <div className="aem-GridColumn aem-GridColumn--default--3 align-to-left ">
                            <Filter filterfunction={multipleFilters} totalCounts={totalcount} />

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
                            totalCount={totalcount}
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