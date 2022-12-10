import { useState } from "react"
import MyForm from "../../components/Form/Form"
import FormGenerator from "../../components/FormGenerator/FormGenerator"
const AddTopicSidebar=(props)=>{
    
   


   
    
   
    function handleTopiChange(event){
        console.log("handeling changes")
        const value=event.target.value;
        console.log(event.target.value);
        
        props.setTopicName((prevtopicName)=>{
            console.log(value);
            return value;
        })
    }
    
return (<div>
    <form>
        <input id="topic-name"
        name="topic-name"
        type="text"
        placeholder="Enter Topic Name"
        value={props.topicName}
        onChange={handleTopiChange}
        />
        
    </form>
    
    <FormGenerator />
   
</div>)
}
export default AddTopicSidebar

