
import Navbar from "../../components/Navbar/Navbar"
import { useState,useEffect } from "react";
import axios from 'axios'

import { useSelector,useDispatch } from "react-redux";
import { Dialpad } from "@mui/icons-material";
import {updateFirstTag, changeInTitle,changeIsClassical, handlingTags,changeDifficulty,changeInComapny} from '../../store/addProblemSlice'
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

  const handleAddInput = () => {
    
    dispatch(handlingTags({
      type: 'ADD_INPUT',
      payload: '',
    }));
  };

  const handleChangeInput = (index, value) => {
    const newInputs = [...tags];
    newInputs[index] = value;
    dispatch(handlingTags({
      type: 'UPDATE_INPUT',
      payload: newInputs,
    }));
  };

  const handleDifficulty=(e)=>{
    dispatch(changeDifficulty(e.target.value))
  }

  const handleCompanyChange=(e)=>{
    dispatch(changeInComapny(e.target.value));
  }

  const handleSubmit=(event,data)=>{
    
    
    async function uploadData(data){
      let response=await axios({
        method:'post',
        data,
        url:'http://localhost:5000/api/v1/problems/createProblem'
      })
      console.log(response);
    }
    uploadData(data).then((res)=>{
      console.log(res);
    })
  }

    return (<div>
        {/* <Navbar /> */}
        <input type="text" value={titleName} name="titleName" placeholder="Title Name" onChange={(e)=>{
          const val=e.target.value;
          
          dispatch(changeInTitle(val));
        }}></input>
        <input type="checkbox" value={isClassical} name="is classical problem or not" onClick={()=>{dispatch(changeIsClassical())}}></input>
       
        <input type="text" placeholder="enter tag" value={firstTag} onChange={(e)=>{
          const val=e.target.value;
          dispatch(updateFirstTag(val))
        }}></input>
     
        
        <button onClick={(e)=>{
          let data={
            title:titleName,
            content:content,
            isClassical:isClassical,
            difficulty,
            companies:prevCompanies,
            tags:[firstTag,...tags],
            }
            handleSubmit(e,data) 
        }}>submit</button>
        <button onClick={handleAddInput}>Add Tags</button>
      {tags.map((input, index) => (
        <input
          key={index}
          value={input}
          onChange={(event) => handleChangeInput(index, event.target.value)}
        />
      ))}
      <select value={difficulty} onChange={handleDifficulty}>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <input type="text" placeholder="enter companies if any" onChange={handleCompanyChange}></input>
        <TextEditor />
        {/* <button type="submit" onClick={handleSubmit}>submit</button> */}
    </div>)
}
export default AddProblem