import { useState } from "react"
import MyForm from "../../components/Form/Form"
const AddTopicSidebar=(props)=>{
    const [topicName, setTopicName] = useState("")
    const [segment, setSegment] = useState([])
    

    function addSegment(event){
        setSegment((prevSegment)=>{
            let uniqueKey=Math.floor(Math.random() * 100000);
            return [...prevSegment,
            <div id={uniqueKey}><MyForm key={uniqueKey} uniqueId={uniqueKey} onRemoveClick={removeSegment} updateTextEditor={props.getFormData}/>
            
            </div>]
        })
    }
    function removeSegment(event){
        
        
        setSegment((prevSegment)=>{
            console.log(event.target.id);
            var newArr=prevSegment;
           for( var i=0;i<newArr.length;++i){
            console.log("reached here");
            if(newArr[i].props.id==event.target.id){
                newArr.splice(i,1);
            }
           }
            return [...newArr]
          
            
        })
    }
   
    
   
    function handleTopiChange(event){
        console.log("handeling changes")
        const value=event.target.value;
        console.log(event.target.value);
        
        setTopicName((prevtopicName)=>{
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
        value={topicName}
        onChange={handleTopiChange}
        />
        
    </form>
    <button type="button" onClick={addSegment} className="segment-add-button">+</button>
    <div>
    {segment}
    </div>
   
</div>)
}
export default AddTopicSidebar

