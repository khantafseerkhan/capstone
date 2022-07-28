import {changeTheState , updateproductslist,updateCartProduct} from "./inc-decReducer";
import { combineReducers } from "redux";

const rootReducer=combineReducers({
    changeTheState,updateproductslist,updateCartProduct
})

export default rootReducer;