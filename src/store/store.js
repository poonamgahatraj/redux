import { configureStore } from "@reduxjs/toolkit";
import studentListReducer from "../slice/studentListslice"
export const store = configureStore({
    reducer:{
        studentList:studentListReducer,
    }
})