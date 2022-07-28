const Description = (props) => {

    //productdata
    return (

        <>

            <div className="aem-Grid aem-Grid--12">

                <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                    <div className="product-description-head">{props.productdata.title}</div>

                </div>
            </div>
            <div className="aem-Grid aem-Grid--12">

                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                    <div className="product-description-section">
                        <div className="title tab-center phone-center">Description</div>

                        <div className="description">
                            {props.productdata.description}
                        </div>
                    </div>
                </div>




                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                    <div className="product-details-section">
                        <div className="title  tab-center phone-center">Details</div>

                        <div className="description">
                            <div className="containt-grid">
                                <div>Sweat wicking</div>
                                <div>Breathable</div>
                            </div>

                            <div className="containt-grid">
                                <div>Lightweight Fabric</div>
                                <div>69% nylon , 31% lycra</div>
                            </div>


                        </div>
                    </div>
                </div>

                {/* <div className="aem-GridColumn aem-GridColumn--default--4"></div> */}


            </div>
        </>


    )
};
export default Description;