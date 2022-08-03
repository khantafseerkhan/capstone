import { useState } from "react";


const Input =(props)=>{

    const [inputvalue,setInputvalue]=useState(props.value)
    return(
        <div className="form-group">
            <label for={props.id}>{props.label}</label>
            <input required={props.isRequire?props.isRequire:false} type="text" className="check-inputbox" id={props.id} placeholder={props.placeholder} value={inputvalue} onChange={(e)=>{setInputvalue(e.target.value);props.setValue(e.target.value)}}/>
        </div>
    )
}


export default Input;