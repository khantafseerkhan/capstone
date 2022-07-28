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
        }else{
            id=id.replace("nn"," ");
            console.log(id)
        }
        // this.props.updateproductslist(['1']);
        //  try { activeloader() } catch (e) { }
        getFilteredDetails(id);
     


    }, [])

    const getFilteredDetails=(type)=>{
        
        const apires =type==""?getservice('https://fakestoreapi.com/products/'):getservice('https://fakestoreapi.com/products/category/'+type);
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




            <div className="aem-Grid aem-Grid--12">


                <div className="aem-GridColumn aem-GridColumn--default--10 unset-float center-box">
                    {/* header section */}

                    <div className="aem-Grid aem-Grid--12 product-head-section">
                        <div className="aem-GridColumn aem-GridColumn--default--3 align-to-left filters-flow">
                            Clothing / Women’s / Outerwear
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 align-to-left result">
                            38 Results
                        </div>

                        <div className="aem-GridColumn aem-GridColumn--default--2 align-to-left">
                            <select className="select">
                                <option value="" selected>Select</option>
                            </select>
                        </div>
                    </div>

                    <div className="aem-Grid aem-Grid--12 ">
                        {/* filter section */}
                        <div className="aem-GridColumn aem-GridColumn--default--3 align-to-left">
                            <Filter filterfunction={getFilteredDetails}/>

                        </div>


                        {/* products section */}

                        <div className="aem-GridColumn aem-GridColumn--default--8 align-to-left">
                            <div className="aem-Grid aem-Grid--12 ">
                            <Product allproducts={filteredData}/>

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
            )
}
            export default ProductCategory;