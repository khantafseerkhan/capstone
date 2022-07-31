
const footerDetails = [
    {
        type: {
            title: "Account",
            list: [
                'Sign In',
                'Register',
                'Order Status',
            ]
        }

    },
    {
        type: {
            title: "About US",
            list: [
                'Our Story',
                'Careers',

            ]
        }

    },
    {
        type: {
            title: "Help",
            list: [
                'Contact US',
                'Order Status',
                'Returns',
            ]
        }

    },
    {
        type: {
            title: "Follow Us!",
            list: [
                'Lorem ipsum dolar sit amet ,' +
                ' consectetur adipiscing elite sed do eiusmod' +
                'tempor incididant ut labore et dolore',

            ]
        }

    },
]

const Footer = (props) => {
    return (

        <>
            {/* footer nav section */}
            <div className="aem-Grid aem-Grid--12 border-inside-top-1">

                <div className="aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--tablet--10 aem-GridColumn--phone--12  unset-float center-box">
                    <div className="aem-Grid aem-Grid--12">

                        {
                            footerDetails.map((element) => {
                                return (
                                    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                                        <div className="footer-nav">
                                            <div className="title">{element.type.title}</div>
                                            <nav>
                                                <ul>
                                                    {
                                                        element.type.list.map((item) => {
                                                            return (
                                                                <>
                                                                    <li><a href="javascript:void(0)" role='button' aria-label='{item}'>{item}</a></li>

                                                                    {element.type.title == "Follow Us!" &&
                                                                        (
                                                                            <li>
                                                                                <ul className="social-list">
                                                                                    <li><a href="javascript:void(0)" role='button' aria-label='Instagram'  ><img src={require("../../assets/img/instagram.png")} alt="Instagram" /></a></li>
                                                                                    <li><a href="javascript:void(0)" role='button' aria-label='Facebook'  ><img src={require("../../assets/img/facebook.png")} alt="Facebook" /></a></li>

                                                                                    <li><a href="javascript:void(0)" role='button' aria-label='Twiter'><img src={require("../../assets/img/twitter.png")} alt="Twitter" /></a></li>

                                                                                </ul>

                                                                            </li>
                                                                        )
                                                                    }
                                                                </>
                                                            )
                                                        })
                                                    }
                                                    {/* <li><a href="javascript:void(0)" role='button' aria-label='Sign In'>Sign In</a></li>
                                        <li><a href="javascript:void(0)" role='button' aria-label='Sign In'>Register</a></li>
                                        <li><a href="javascript:void(0)" role='button' aria-label='Sign In'>Order Status</a></li>
                                        <li><a href="javascript:void(0)" role='button' aria-label='Sign In'>Sign In</a></li> */}

                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>



            </div>




            {/* copy right section */}
            <div className="aem-Grid aem-Grid--12 footer-rights border-inside-top-1">

                <div className="aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--tablet--10 aem-GridColumn--phone--12  unset-float center-box">
                    <div className="aem-Grid aem-Grid--12 revertDiv">


                        <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                            <div className="footer-log tab-center phone-center">
                                <span className="logo"><span className="right-slash">\</span><span className="left-slash">/</span>ENIA</span>
                            </div>

                        </div>

                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                            <div className="copy-right-section tab-center phone-center ">
                                &#169; Company Name Address ,Ave ,City Name ,State ZIP
                            </div>

                        </div>

                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
                            <div className="policy-section tab-center phone-center">
                                <ul >
                                    <li><a href="javascript:void(0)" role='button' aria-label='Terms Of Use'>Terms Of Use</a></li>
                                    <li><a href="javascript:void(0)" role='button' aria-label='Privacy Policy'>Privacy Policy</a></li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        </>


    )
}

export default Footer;