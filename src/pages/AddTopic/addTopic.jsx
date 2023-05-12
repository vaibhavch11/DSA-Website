import AddTopicSidebar from "./addTopicSidebar"
import Navbar from "../../components/Navbar/Navbar"
import MyEditor from "../../components/TextEditor/textEditor"
import { useState,useEffect } from "react"
import "./addTopic.scss"
import "./addTopicSidebar.scss"
import axios from 'axios'
import TextEditor from "../../components/JoditTextEditor/JoditEditor";
import { useSelector,useDispatch } from "react-redux";
const AddTopic=()=>{
 

    const [topicName, settopicName] = useState('')
    const [content,setConent]=useState('')
    const handleTopicChange=(e)=>{
      let val=e.target.value
      settopicName((prevVal)=>{
        
        return val
      })
    }
    const handleSubmit=()=>{
      axios.post('http://localhost:5000/api/v1/topics/createTopic', {
        topicName:topicName,
        data:content
    })
      .then(function (response) {
        console.log('here is the successful response',response);
      })
      .catch(function (error) {
        console.log('here is error',error);
      });
    }
    
    //...............handeling submit button...................................
  
    //...................getting form data to render on the text editor not workint currently..................................
 
//.....................will be triggered when submit is called and will get array of all the form data................................
  
  
return (<div className="main-div">
    <Navbar></Navbar>
    <div className="content-div">
    <input type="text" onChange={handleTopicChange}></input>
    
    <TextEditor notProblem={true} setContent={setConent}/>
    </div>
    <button type="submit" onClick={handleSubmit}>Submit!</button>
    
    
</div>)
}
export default AddTopic