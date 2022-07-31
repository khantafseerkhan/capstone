const filterBy=[];

const Filter = (props) => {
    const filterList = [
        {
            type: "Categories",
            list: [
                {
                    key:"jewelery",
                    label:"Jewellery",
                },
                {
                    key:"electronics",
                    label:"Electronics",
                },
                {
                    key:"men's clothing",
                    label:"Men's Clothing",
                },
                {
                    key:"women's clothing",
                    label:"Women's Clothing",
                },
            ]
        }
    ];
    
    const filteringData=(e,type)=>{
           var myCheckbox = document.getElementsByName("filteringCheck");
           console.log("check or not  "+e.target.checked)
            Array.prototype.forEach.call(myCheckbox,function(el){
                el.checked = false;
            });
            e.target.checked = true;
            // if(e.target.checked==true && !filterBy.includes(type)){
            //     filterBy.push(type);
            // }else{
            //     if(filterBy.includes(type)){
            //         filterBy.splice(filterBy.indexOf(type), 1);

            //     }


            // }
          
             props.filterfunction(type);
    
            
          }
    



    return (
        <div className="aem-Grid aem-Grid--12 ">
            <div className="aem-GridColumn aem-GridColumn--default--12 align-to-left filters">
                <div className="head border-inside-bottom-2">Filters</div>

                {
                    filterList.map(element => {
                        return(
                            <div className="filter-section border-inside-bottom-1">
                            <div className="title">{element.type}</div>
                            <ul>
                            {
                                element.list.map(item => {
                                    return(
                                        <li>
                                            <input type="checkbox" name="filteringCheck" onChange={(e)=>filteringData(e,item.key)}/> <span>{item.label}</span>
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

    )
}

export default Filter;