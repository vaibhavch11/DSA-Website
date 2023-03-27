import { createSlice } from "@reduxjs/toolkit";

const addProblemSlice=createSlice({
    name:'addProblemData',
    initialState:{
        titleName:"",
        content:"",
        isClassical:false,
        difficulty:"Easy",
        prevCompanies:"",
        tags:[]
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
        }
    }
})  

export const {changeInContent,changeInTitle,changeIsClassical} =addProblemSlice.actions
export default addProblemSlice.reducer