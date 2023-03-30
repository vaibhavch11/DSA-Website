import { createSlice } from "@reduxjs/toolkit";



const addProblemSlice=createSlice({
    name:'addProblemData',
    initialState:{
        titleName:"",
        content:"",
        isClassical:false,
        difficulty:"Easy",
        prevCompanies:"",
        firstTag:"",
        tags:[],
        tagsData:[""]
        
    },
    reducers:{
        changeInContent:(state,action)=>{
            
             state.content=action.payload
             return state
        },
        changeInTitle:(state,action)=>{
            
            state.titleName=action.payload
            return state
        },
        changeIsClassical:(state,action)=>{
             state.isClassical=!state.isClassical
             return state
        },
        updateFirstTag:(state,action)=>{
            state.firstTag=action.payload
            return state
        },
        addTags:(state,action)=>{
          state.tags.push(<input key={state.tags.length+1} type="text" placeholder="enter tags"></input>) 
          state.tagsData.push("");
          return state 
        },
        updateTags:(state,action)=>{
            state.tagsData=state.tagsData.map((data,index)=>{
                if(index==action.payload.index){
                    return action.payload.text
                }
                return data
            })
            return state
        }
    }
})  

export const {changeInContent,changeInTitle,changeIsClassical,updateFirstTag,addTags,updateTags} =addProblemSlice.actions
export default addProblemSlice.reducer