import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
    elec: [],
    isload: true,
    yeah: [],
    message: ''
}
export const getElec = createAsyncThunk(
    'items/getElec', 
   async (data) => {
    return fetch(`https://dummyjson.com/products?skip=0&limit=100${data}`)
    .then(res=>res.json())
    .catch((err) => console.log(err))
} )

localStorage.setItem('dummyjson', getElec)
export const elecSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        fav: (state, action) => {
            state.yeah = [ state.elec[action.payload].on = true  ]
        },
        notFave: (state, action) => {
            state.yeah = [ state.elec[action.payload].on = false  ]
        }
    },
    extraReducers: {
        [getElec.pending] : (state) => {
            state.elec = []; 
            state.isload = true;
        },
        [getElec.fulfilled] : (state,action) => {
            state.isload = false;
           state.elec= action.payload.products;
        },
        [getElec.rejected] : (state,action) => {
            state.elec = []
            state.message = action.payload;
            state.isload = false; 
        },
    }
})

export const { fav, notFave } = elecSlice.actions
export default elecSlice.reducer