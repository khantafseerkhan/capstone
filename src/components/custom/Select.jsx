

const Select =(props)=>{


    return(
        <div className="form-group">
            <label for={props.id}>{props.label}</label>
            <select onChange={(e)=> props.setValue(e.target.value)} defaultValue={props.defaultValueSelected}>
                <option value={props.defaultOption.value}>{props.defaultOption.label}</option>
                {
                    props.options.map(element=>{
                        return(
                            <option value={element.value}>{element.label}</option>
                        )
                    })
                }
            </select>
               </div>
    )
}


export default Select;