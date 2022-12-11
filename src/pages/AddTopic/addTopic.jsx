import AddTopicSidebar from "./addTopicSidebar"
import Navbar from "../../components/Navbar/Navbar"
import MyEditor from "../../components/TextEditor/textEditor"
import { useState,useEffect } from "react"
import "./addTopic.scss"
import "./addTopicSidebar.scss"
import axios from 'axios'
const AddTopic=()=>{
    const [textContent, setTextContent] = useState("");
    const [formArr,setFormArr]=useState([]);
    const [topicName, setTopicName] = useState("");
    const [submitState, setsubmitState] = useState(false);
    const [formData, setformData] = useState([])

    console.log("form data array",formData);
    console.log("here is the text content of ",textContent);
    
    //...............handeling submit button...................................
    function handleSubmit(){
       console.log("here is the form arr",formArr[0].props.children.props);
       
       setsubmitState((prevValue)=>{
        
        return prevValue;
       })
       console.log("here is the topic name",topicName);
    }
    //...................getting form data to render on the text editor not workint currently..................................
  function getFormData(value){
    console.log("reached in getForm data and value is ",value)
    
    setTextContent((prevText)=>{
        
        return value
    })
  }
//.....................will be triggered when submit is called and will get array of all the form data................................
  
  
return (<div className="main-div">
    <Navbar></Navbar>
    <div className="content-div">
    <AddTopicSidebar getFormData={getFormData} setFormArr={setFormArr} formArr={formArr} topicName={topicName} setTopicName={setTopicName} submitState={submitState} setsubmitState={setsubmitState} formData={formData} setformData={setformData}/>
    <MyEditor textData={textContent} setTextContent={setTextContent}/>
    
    </div>
    <button type="submit" onClick={handleSubmit}>Submit!</button>
    
    
</div>)
}
export default AddTopic