import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    elec: [],
    isload: true,
    message: ''
}
export const getElec = createAsyncThunk(
    'items/getElec', 
   async (data) => {
    return fetch(`https://dummyjson.com/${data}`)
    .then(res=>res.json())
    .catch((err) => console.log(err))
} )

export const elecSlice = createSlice({
    name: 'items',
    initialState,
    extraReducers: {
        [getElec.pending] : (state) => {
            state.elec = []; 
            state.isload = true;
        },
        [getElec.fulfilled] : (state,action) => {
            console.log(action)
            state.isload = false;
           state.elec= action.payload.products;
        },
        [getElec.rejected] : (state,action) => {
            state.elec = []
            state.message = action.payload;
            state.isload = false; 
        }
    }
})


export default elecSlice.reducer