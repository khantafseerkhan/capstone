import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getservice } from "../../../assets/apiservice/customservice";
import Description from "./description/Description";
import PresentationImages from "./presentation-images/PresentationImages";
import Summary from "./summary/Summary";

const SingleProduct = () => {
    const [singleProductdata, setSingleProductdata] = useState({});

    const id = useParams().id;
    useEffect(() => {

        // this.props.updateproductslist(['1']);
        //  try { activeloader() } catch (e) { }

        const apires = getservice('https://fakestoreapi.com/products/' + id);
        apires.then(json => {

            // try { removeloader() } catch (e) { }

            // this.props.updateproductslist(json);
            // setSingleProductdata(json)
            let temp = [];
            //temp.push(json)
            //   console.log(temp)
            console.log(json)
            setSingleProductdata(json);

        });



        // setTimeout(() => {
        //  //   this.props.updateproductslist(['1','2']);

        // }, 10000);
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);



    return (
        <div className="aem-Grid aem-Grid--12">


            <div className="aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 unset-float center-box">


                <div className="aem-Grid aem-Grid--12 phone-show">
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn aem-GridColumn--tablet--6 aem-GridColumn aem-GridColumn--phone--12">
                        <div className="product-top"> Clothing / Women’s / Outerwear</div>

                    </div>

                </div>

                <div className="aem-Grid aem-Grid--12 ">
                    {/* filter section */}
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 align-to-left">
                        <PresentationImages propductimg={singleProductdata.image} />
                    </div>


                    {/* products section */}

                    <div className="aem-GridColumn aem-GridColumn--default--6  aem-GridColumn--tablet--12 aem-GridColumn--phone--12 align-to-left">
                        <div className="aem-Grid aem-Grid--12 ">
                        <div className="product-top  phone-hide" style={{paddingLeft:"30px"}}> Clothing / Women’s / Outerwear</div>

                          
                            <Summary productdata={singleProductdata} />

                        </div>
                    </div>
                </div>

                <div className="aem-Grid aem-Grid--12 ">
                    {/* filter section */}
                    <div className="aem-GridColumn aem-GridColumn--default--12 align-to-left">

                        <Description productdata={singleProductdata} />
                    </div>

                </div>
            </div>

        </div>

    )
}
export default SingleProduct;