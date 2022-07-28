

const Input =(props)=>{


    return(
        <div className="form-group">
            <label for={props.id}>{props.label}</label>
            <input type="text" className="check-inputbox" placeholder={props.placeholder} onKeyUp={(e)=>props.setValue(e.target.value)}/>
        </div>
    )
}


export default Input;