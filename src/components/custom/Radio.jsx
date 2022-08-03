
const Radio=(props)=>{


    return(
        <div className="form-group">
           
            <input type="radio" checked={props.isChecked} name={props.name} value={props.label} onChange={(e)=>props.setValue(e.target.value)}/> <label for={props.id}>{props.label}</label>
        </div>
    )
}
export default Radio;