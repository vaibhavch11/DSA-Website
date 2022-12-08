import { useState } from "react"
const MyForm=(props)=>{
    console.log(props)
const [formData, setFormData] = useState("")

    function onFormChange(event){
        const value=event.target.value;
        console.log("change occuring in form data")
        setFormData((prevValue)=>{
            console.log(value)
            props.updateTextEditor(value);
            return value;
        })
        }
    return(
        <div>
            <input name="segment"
            type="text"
            placeholder="Add Segment"
            value={formData}
            onChange={onFormChange}
            onKeyDown={onFormChange}
            />
            <button type="button" onClick={props.onRemoveClick} className="segment-remove-button" id={props.uniqueId} >-</button>
        </div>
    )
}
export default MyForm