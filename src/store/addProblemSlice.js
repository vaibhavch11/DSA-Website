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
        handlingTags:(state, action)=> {
            
            switch (action.payload.type) {
              case 'ADD_INPUT':
                console.log("inside add input")
                return {
                    ...state,
                  tags: [...state.tags, action.payload.payload],
                };
                case 'UPDATE_INPUT':
                    return {
                        ...state,
                        tags: action.payload.payload,
                      };
              default:
                return state;
            }
          },
          changeDifficulty:(state,action)=>{
            state.difficulty=action.payload;
            return state
          },
          changeInComapny:(state,action)=>{
            state.prevCompanies=action.payload
            return state
          }
    }
})  

export const {changeInContent,changeInTitle,changeIsClassical,updateFirstTag,addTags,updateTags,handlingTags,changeDifficulty,changeInComapny} =addProblemSlice.actions
export default addProblemSlice.reducer