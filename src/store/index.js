import { configureStore } from "@reduxjs/toolkit";
import addProblemReducer from '../store/addProblemSlice'
export default configureStore({
    reducer:{
        addProblem:addProblemReducer
    }
})