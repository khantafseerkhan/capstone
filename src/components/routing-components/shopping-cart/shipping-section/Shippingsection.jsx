const Shippingsection = (props) => {
    return (
        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn aem-GridColumn--tablet--12 aem-GridColumn aem-GridColumn--phone--12  shipping-section">
            <ul>
                <li className="border-inside-bottom-2">
                    <div className="left-section phone-flex tablet-flex ">
                        <div className="title">Estimate Your Shipping</div>
                        <div className="sub-title">Shipping to 91001</div>
                    </div>

                    <div className="right-section">
                        <img src={require("../../../../assets/img/chevron-down.png")} alt="collapse button"/>

                    </div>

                </li>
                <li className="border-inside-bottom-2">
                    <div className="left-section tablet-flex  phone-flex ">
                        <div className="title">Estimate Your Shipping</div>
                        <div className="sub-title">Shipping to 91001</div>
                    </div>

                    <div className="right-section">
                        <img src={require("../../../../assets/img/chevron-down.png")} alt="collapse button"/>

                    </div>

                </li> <li className="border-inside-bottom-2">
                    <div className="left-section tablet-flex  phone-flex ">
                        <div className="title">Estimate Your Shipping</div>
                        <div className="sub-title">Shipping to 91001</div>
                    </div>
                    <div className="right-section">
                        <img src={require("../../../../assets/img/chevron-down.png")} alt="collapse button"/>
                    </div>

                </li>
            </ul>
        </div>
    )
}

export default Shippingsection;