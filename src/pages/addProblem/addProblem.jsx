
import Navbar from "../../components/Navbar/Navbar"
import { useState,useEffect } from "react";
import axios from 'axios'

import { useSelector,useDispatch } from "react-redux";
import { Dialpad } from "@mui/icons-material";
import {updateFirstTag, changeInTitle,changeIsClassical, addTags} from '../../store/addProblemSlice'
import TextEditor from "../../components/JoditTextEditor/JoditEditor";
;


const AddProblem=()=>{
  
  const {titleName,content,isClassical,difficulty,prevCompanies,tags,firstTag}=useSelector((state)=>
  {
    
    return state.addProblem
  }
  )
  const dispatch=useDispatch()

  // async function handleSubmit(){
  //   // let completeData={...data,data:text}
  //   console.log("here is he complete data",completeData);
  //  let response=await axios({
  //   method:"post",
  //   url:"http://localhost:5000/api/v1/problems/createProblem",
  //   data:completeData
  //  })
   
  // }

    return (<div>
        <Navbar />
        <input type="text" value={titleName} name="titleName" placeholder="Title Name" onChange={(e)=>{
          const val=e.target.value;
          
          dispatch(changeInTitle(val));
        }}></input>
        <input type="checkbox" value={isClassical} name="is classical problem or not" onClick={()=>{dispatch(changeIsClassical())}}></input>
       
        <input type="text" placeholder="enter tag" value={firstTag} onChange={(e)=>{
          const val=e.target.value;
          dispatch(updateFirstTag(val))
        }}></input>
     
        
        <button onClick={()=>{console.log(titleName,content,isClassical,difficulty,prevCompanies,tags)}}>submit</button>
        <TextEditor />
        {/* <button type="submit" onClick={handleSubmit}>submit</button> */}
    </div>)
}
export default AddProblem