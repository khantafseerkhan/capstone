import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decQuantity, incQuantity, removeProduct } from "../../../../redux-management/actions/actions";

const Addedproduct=(props)=>{

    const dispatch = useDispatch();
  const [selectedProducts, setSelectedProducts] = useState([]);
   let selectedProduct = useSelector(state => state.updateCartProduct.cartProduct);


    useEffect(() => {
       setSelectedProducts(selectedProduct);

    }, [])

    useEffect(() => {
 
     }, [selectedProducts])
    const quantInc=(element,index)=>{

        dispatch(incQuantity(element.id))

      //  const productData = useSelector(state => state.updateCartProduct.cartProduct);
     document.getElementById(element.id).value=selectedProducts[index].quantity;

       // setSelectedProducts(useSelector(state => state.updateCartProduct.cartProduct))

    }

    const quantDec=(element,index)=>{
        dispatch(decQuantity(element.id));

        document.getElementById(element.id).value=selectedProducts[index].quantity;

        //setSelectedProducts(useSelector(state => state.updateCartProduct.cartProduct))

    }


    const removeproduct=(index)=>{
        let tempcart=[...selectedProducts];

        tempcart.splice(index,1)
        dispatch(removeProduct(index));
        console.log(selectedProducts)

        setSelectedProducts(tempcart);

        props.setProductlist(tempcart)



    }
    return (
        <div className="">
      {selectedProducts.map((element,index)=>{
            return (
                  <div className="aem-Grid aem-Grid--12 productcontainer">
                    {/* image section */}
                <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn aem-GridColumn--tablet--2 aem-GridColumn aem-GridColumn--phone--2">

                    <div className="image-container">
                        <img src={element.image} alt={element.title} />
                        </div>
                </div>


                {/* centered details and quantity section */}
                <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn aem-GridColumn--tablet--9 aem-GridColumn aem-GridColumn--phone--9">


                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn aem-GridColumn--tablet--10 aem-GridColumn aem-GridColumn--phone--10 details padding18">
                            <div className="title-section">
                            <label for={element.id}>{element.title} </label>

                                </div>
                            <div className="sub-section">

                            {(element.category == "women's clothing" || element.category == "men's clothing") && (
                                                     <>
                                                      <span>size :</span><span>{element.size.name}</span><br />
                                                      <span>color :</span><span>{element.color.name}</span><br />      
                                                        
                                                     </>

                                                     )}
                               
                                <span>&#36; {element.price*element.quantity}</span>
                               </div>


                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn aem-GridColumn--tablet--10 aem-GridColumn aem-GridColumn--phone--10 quantitycontainer ">
                        <div className="quntity-section">
                        <label for={element.id}>&nbsp; </label>
                                   
                                 <button onClick={()=>quantDec(element,index)} type="button"  aria-label='Decreament'>-</button>
                               
                                 <input type="text" id={element.id} name={element.id} value={element.quantity}  disabled={true}/>
                                

                              
                                 <button onClick={()=>quantInc(element,index)} aria-label='Increament' type="button">+</button>
                            
                            
                             </div>
                        </div>
                    </div>
                </div>

                {/* edit section */}
                <div className="aem-GridColumn aem-GridColumn--default--2  aem-GridColumn aem-GridColumn--tablet--1 aem-GridColumn aem-GridColumn--phone--1 edit-section">
                   <ul className="tab-hide phone-hide">
                    <li>
                        <a role='button' aria-label='Edit Item' href="javascript:void(0)"><img src={require("../../../../assets/img/edit-2-1.png")} alt="Edit Item"/> <span>Edit item</span></a>
                    </li>

                    <li>
                        <a role='button' aria-label='Remove' href="javascript:void(0)" onClick={()=>removeproduct(index)}><img  src={require("../../../../assets/img/trash-2.png")}  alt="Remove"/> <span>Remove</span></a>
                    </li>


                    <li>
                        <a role='button' aria-label='Save for Later' href="javascript:void(0)"><img src={require("../../../../assets/img/heart.png")} alt="Save for Later" /> <span>Save for later</span></a>
                    </li>
                    </ul>
                    
                    <img src={require("../../../../assets/img/more-horizontal.png")} alt="menu options" className="tab-show phone-show"/>

                </div>
                {/* <div className="aem-GridColumn aem-GridColumn--default--4"></div> */}


            </div>
            )
          }

          )}
        </div>


    )

}
export default Addedproduct