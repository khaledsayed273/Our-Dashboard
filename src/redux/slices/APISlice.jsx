import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchingData = createAsyncThunk("users" , async () => {
    try{
        
        const data = axios.get('https://api.escuelajs.co/api/v1/users')
        return data

    }catch(error){
        return error
    }
})

const initialState = {
    data: [],
    loading: false
}


const APISclice = createSlice({
    name: "API",
    initialState,
    extraReducers: (builder) => {
        
        builder.addCase(FetchingData.pending , state => {
            state.loading = true
        })
        builder.addCase(FetchingData.fulfilled , (state , action) => {
            state.loading = false;
            state.data = action.payload.data;
        })
        builder.addCase(FetchingData.rejected , (state , action) => {
            state.loading = false;
            state.data = action.payload;
        })
    }
})


export default APISclice.reducer