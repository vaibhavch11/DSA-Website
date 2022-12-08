import AddTopicSidebar from "./addTopicSidebar"
import Navbar from "../../components/Navbar/Navbar"
import MyEditor from "../../components/TextEditor/textEditor"
import { useState,useEffect } from "react"
import "./addTopic.scss"
import "./addTopicSidebar.scss"
import axios from 'axios'
const AddTopic=()=>{
    const [textContent, setTextContent] = useState("");
    function handleSubmit(){
        
    }
  function getFormData(value){
    console.log("reached in getForm data and value is ",value)
    setTextContent((prevText)=>{
        
        return value
    })
  }
  function setFormData(){

  }
return (<div className="main-div">
    <Navbar></Navbar>
    <div className="content-div">
    <AddTopicSidebar getFormData={getFormData}/>
    <MyEditor textData={textContent}/>
    
    </div>
    <button type="submit" onClick={handleSubmit}>Submit!</button>
    
    
</div>)
}
export default AddTopic