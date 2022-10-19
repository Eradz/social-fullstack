import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    items: [],
    cartItem: [],
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
    reducers:{
        addCart: (state, action) => {
            if(action.payload === "nothing"){
                state.message = "Item has already been added to cart"
            } else if (action.payload){
            state.cart = state.cart + 1
            state.cartItem.push(action.payload)
            } 
        },
        deleteCI: (state, action) => {
            state.cartItem.splice(action.payload,1)
        }
    }
    ,
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

export const { addCart, deleteCI} = itemSlice.actions
export default itemSlice.reducer