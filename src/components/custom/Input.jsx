import { useState } from "react";


const Input =(props)=>{

    const [inputvalue,setInputvalue]=useState(props.value)
    return(
        <div className="form-group">
            <label for={props.id}>{props.label}</label>
            <input type="text" className="check-inputbox" placeholder={props.placeholder} value={inputvalue} onChange={(e)=>{setInputvalue(e.target.value);props.setValue(e.target.value)}}/>
        </div>
    )
}


export default Input;