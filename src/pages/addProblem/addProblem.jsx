import MyEditor from "../../components/TextEditor/textEditor";
import AddProblemForm from "../../components/AddProblemForm/addProblemForm";
import Navbar from "../../components/Navbar/Navbar"
import { useState,useEffect } from "react";
import axios from 'axios'


const AddProblem=()=>{
    const [text, setText] = useState("")

    const [topicName, setTopicName] = useState('');
    const [problemName, setProblemName] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [companies, setCompanies] = useState('');
    const [isClassical, setIsClassical] = useState(false);
    

    

    let data={}
    data["topicName"]=topicName;
    data["problemName"]=problemName;
    data["difficulty"]=difficulty;
    data["companies"]=companies;
    data["isClassical"]=isClassical;

    console.log("inside problem data",data);

    console.log("add problem data here ",text);

 

  async function handleSubmit(){
    let completeData={...data,data:text}
    console.log("here is he complete data",completeData);
   let response=await axios({
    method:"post",
    url:"http://localhost:5000/api/v1/problems/createProblem",
    data:completeData
   })
   
  }

    return (<div>
        <Navbar />
        <AddProblemForm topicName={topicName} setTopicName={setTopicName} problemName={problemName} setProblemName={setProblemName} difficulty={difficulty} setDifficulty={setDifficulty} companies={companies} setCompanies={setCompanies} isClassical={isClassical} setIsClassical={setIsClassical}/>
        <MyEditor textData={text} setTextContent={setText} />
        <button type="submit" onClick={handleSubmit}>submit</button>
    </div>)
}
export default AddProblem