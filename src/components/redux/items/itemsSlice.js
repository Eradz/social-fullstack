import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    items: [],
    isload: true,
    message: ''
}
export const getItems = createAsyncThunk(
    'items/getItems', 
   async (name) => {
    return fetch(`https://dummyjson.com/products?skip=0&limit=100${name}`)
    .then(res=>res.json())
    .catch((err) => console.log(err))
} )

export const itemSlice = createSlice({
    name: 'items',
    initialState,
    extraReducers: {
        [getItems.pending] : (state) => {
            state.items = []; 
            state.isload = true;
        },
        [getItems.fulfilled] : (state,action) => {
            console.log(action.payload.products)
            state.isload = false;
           state.items= action.payload.products;
        },
        [getItems.rejected] : (state,action) => {
            state.items = []
            state.message = action.payload;
            state.isload = false; 
        }
    }
})


export default itemSlice.reducer