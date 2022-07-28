

const Button =(props)=>{


    return(
        <div className="form-group">
            <button  className={props.classname} onClick={()=>props.CallParentEvent()}>{props.value}</button>
        </div>
    )
}


export default Button;