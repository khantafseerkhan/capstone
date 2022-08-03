import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hasClass } from "../../../../assets/customjs/custom";
import Button from "../../../custom/Button";

const filterBy = [];

const Filter = (props) => {

    let id = useParams().id;
    if (!id) {
        id = "";
        
    } else {
        id = id.replace("nn", " ");
    }
    const filterList = [
        {
            type: "Categories",
            list: [
                {
                    key: "jewelery",
                    label: "Jewellery",
                },
                {
                    key: "electronics",
                    label: "Electronics",
                },
                {
                    key: "men's clothing",
                    label: "Men's Clothing",
                },
                {
                    key: "women's clothing",
                    label: "Women's Clothing",
                },
            ]
        }
    ];

    useEffect(() => {
   
            if(id!=""){
                document.getElementById(id).checked=true;
                document.getElementById(id+"_mob").checked=true;

            }


},[])

    const filteringData = (e, type) => {
        var myCheckbox = document.getElementsByName("filteringCheck");
       
        if (e.target.checked == true && !filterBy.includes(type)) {
            filterBy.push(type);
            e.target.checked=true

        } else {
            e.target.checked=false;

            if (filterBy.includes(type)) {
                filterBy.splice(filterBy.indexOf(type), 1);

            }


        }

        props.filterfunction(filterBy);


    }

    const [colors, setColors] = useState([]);
    const [optionsArray, setOptionsArray] = useState([])








    const closeNav = () => {
        let phonenav = document.getElementById("absolute-postion");
        if (hasClass(phonenav, "activenav")) {
            phonenav.classList.remove("activenav");
            document.getElementById("mainbody").style.overflow = "initial";


        }
    }



    useEffect(() => {

        const color = [{
            colorname: "Black",
            colorcode: "#172026 0% 0% no-repeat padding-box",

        },
        {
            colorname: "White",
            colorcode: "#FFFFFF 0% 0% no-repeat padding-box",

        },
        {
            colorname: "Green",
            colorcode: "#2D9D78 0% 0% no-repeat padding-box",

        },
        {
            colorname: "Yellow",
            colorcode: "#FDBA5E 0% 0% no-repeat padding-box",

        },
        {
            colorname: "Blue",
            colorcode: "blue 0% 0% no-repeat padding-box",

        },
        {
            colorname: "Marrown",
            colorcode: "#E34850 0% 0% no-repeat padding-box",

        }
            ,
        {
            colorname: "Purple",
            colorcode: "#6408D3 0% 0% no-repeat padding-box",

        },
        {
            colorname: "Rose",
            colorcode: "#F9009A 0% 0% no-repeat padding-box",

        },
        {
            colorname: "Orange",
            colorcode: "#EB7327 0% 0% no-repeat padding-box",

        },
        {
            colorname: "Gradient",
            colorcode: "transparent linear-gradient(180deg, #AF52FF 0%, #7950E8 16%, #4F5ADA 29%, #57CB76 43%, #EBC250 56%, #FF8810 69%, #E32F0F 83%, #BF1919 100%) 0% 0% no-repeat padding-box",

        }



        ]




        const options = [
            {
                label: "Option1"
            }, {
                label: "Option2"
            }, {
                label: "Option3"
            }, {
                label: "Option4"
            }, {
                label: "Option5"
            }, {
                label: "Option6"
            }, {
                label: "Option7"
            }, {
                label: "Option8"
            }, {
                label: "Option9"
            },
        ]
        setColors(color);
        setOptionsArray(options)

    }, [])

    const showResults = () => {
        closeNav();
    }



    return (
        <>
            <div className="aem-Grid aem-Grid--12 tab-hide">
                <div className="aem-GridColumn aem-GridColumn--default--12 align-to-left filters tab-hide phone-hide">
                    <div className="head border-inside-bottom-2">Filters</div>

                    {
                        filterList.map(element => {
                            return (
                                <div className="filter-section border-inside-bottom-1">
                                    <div className="title">{element.type}</div>
                                    <ul>
                                        {
                                            element.list.map(item => {
                                                return (
                                                    <li>
                                                        <input type="checkbox" name={item.key} onChange={(e) => filteringData(e, item.key)} id={item.key}  /> <label for={item.key}>{item.label}</label>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>

                                </div>
                            )

                        })
                    }

                </div>
            </div>

            <div className="aem-Grid aemGrid--12 tab-show phone-show shadow  " >
                <div className="aem-GridColumn aem-GridColumn--phone--12 absolute-postion phonenav " id="absolute-postion">
                    <div className="aem-Grid aem-Grid--12 ">
                        <div className="aem-GridColumn aem-GridColumn--default--12 align-to-left filters">
                            {/* <div className="head border-inside-bottom-2">Filters</div> */}
                            <div className="header">Filters
                                <div>   <a role='button' aria-label='Close' href="javascript:void(0)" onClick={() => closeNav()}>&#x2715;</a></div>
                            </div>

                            <div className="clear-all-section">
                                <a href="javascript:void(0)"  role='button' aria-label='Clear Filters'>Clear all</a>
                            </div>
                            {
                                filterList.map(element => {
                                    return (
                                        <div className="filter-section border-inside-bottom-1">
                                            <div className="title padding10">{element.type}</div>
                                            <ul>
                                                {
                                                    element.list.map(item => {
                                                        return (
                                                            <li>
                                                                <input type="checkbox" name={item.key+"_mob"} onChange={(e) => filteringData(e, item.key)} id={item.key+"_mob"} /> <label for={item.key+"_mob"}>{item.label}</label>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>

                                        </div>


                                    )

                                })
                            }


                            <div className="btn-section">
                                <Button value={"See " + props.totalCounts + " Result "} classname={'button-show'} CallParentEvent={showResults} />
                            </div>

                        </div>
                    </div>


                    {/* <div className="header">Filters
                        <div>   <a role='button' aria-label='Close' href="javascript:void(0)" onClick={() => closeNav()}>&#x2715;</a></div>
                    </div>


                    <div className="filter-container ">
                        <div className="filter border-inside-bottom-1">
                            <div className="heading">
                                Attribute
                            </div>
                            <ul>
                                {

                                    optionsArray.slice(0, 4).map(element =>

                                        <li>
                                            <input type="checkbox" id={element.label + "att4"} value={element.label + "att4"} name={element.label + "att4"} />
                                            <label for={element.label + "att4"}>{element.label}</label>
                                        </li>
                                    )

                                }
                                <li><span className="showmore">Show more</span></li>



                            </ul>
                        </div>

                        <div className="filter border-inside-bottom-1">
                            <div className="heading">
                                Attribute
                            </div>
                            <ul>
                                {

                                    optionsArray.slice(0, 6).map(element =>

                                        <li>
                                            <input type="checkbox" id={element.label + "att5"} value={element.label + "att5"} name={element.label + "att5"} />
                                            <label for={element.label + "att5"}>{element.label}</label>

                                        </li>
                                    )
                                }

                            </ul>
                        </div>

                        <div className="filter border-inside-bottom-1">
                            <div className="heading">
                                Colors
                            </div>
                            <ul className="color-section">
                                {
                                    colors.map(element => {
                                        return (
                                            <li><div className="colordiv" style={{ background: element.colorcode }}></div></li>
                                        )
                                    })
                                }

                            </ul>
                        </div>


                        <div className="filter border-inside-bottom-1">
                            <div className="heading">
                                Attribute
                            </div>
                            <ul>
                                {

                                    optionsArray.slice(0, 8).map(element =>

                                        <li>
                                            <input type="checkbox" id={element.label + "att6"} value={element.label + "att6"} name={element.label + "att6"} />
                                            <label for={element.label + "att6"}>{element.label}</label>
                                        </li>
                                    )
                                }

                            </ul>
                        </div>


                    </div> */}



                </div>
            </div>
        </>

    )
}

export default Filter;