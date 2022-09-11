import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    man:[],
    elec: [],
    woman:[],
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
export const getWoman = createAsyncThunk(
    'items/getWoman', 
   async (data) => {
    return fetch(`https://dummyjson.com/${data}`)
    .then(res=>res.json())
    .catch((err) => console.log(err))
} )
export const getMan = createAsyncThunk(
    'items/getMan', 
   async (data) => {
    return fetch(`https://dummyjson.com/${data}`)
    .then(res=>res.json())
    .catch((err) => console.log(err))
} )

localStorage.setItem('dummyjson', getElec)
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
        },
        [getWoman.pending] : (state) => {
            state.woman = []; 
            state.isload = true;
        },
        [getWoman.fulfilled] : (state,action) => {
            console.log(action)
            state.isload = false;
           state.woman= action.payload.products;
        },
        [getWoman.rejected] : (state,action) => {
            state.woman = []
            state.message = action.payload;
            state.isload = false; 
        },
        [getMan.pending] : (state) => {
            state.man = []; 
            state.isload = true;
        },
        [getMan.fulfilled] : (state,action) => {
            console.log(action)
            state.isload = false;
           state.man= action.payload.products;
        },
        [getMan.rejected] : (state,action) => {
            state.man = []
            state.message = action.payload;
            state.isload = false; 
        }
    }
})


export default elecSlice.reducer