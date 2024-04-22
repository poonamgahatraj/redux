import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudentList = createAsyncThunk ('fetchStudentList',async()=>{
   await axios.get(" http://127.0.0.1:8000/api/getAll")
    .then((response) => {
        console.log(response.status);
        console.log(response.data.data);
    
})
})


 const studentSlice = createSlice ({
    name:"studentList",
    initialState:{
        isLoading:false,
        
        data:[],
        error:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchStudentList.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        })
        builder.addCase(fetchStudentList.pending,(state,action)=>{
            state.isLoading=true;
        
        })
        builder.addCase(fetchStudentList.error,(state,action)=>{
            state.isLoading=false;
            state.error=true;
            console.log("error",action.payload)
        
        })
    }
 })

 export default studentSlice.reducer