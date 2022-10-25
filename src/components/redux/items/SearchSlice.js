import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    search:[],
    loading:false,
    failed: false,
    sucess: false,
}

export const searchService = createAsyncThunk('search/products',  async (data) => {
    return fetch(`https://dummyjson.com/products/search?q=${data}`)
    .then(res=>res.json())
    .catch((err) => console.log(err))
} )

export const searchSlice = createSlice({
    name:'search',
    initialState,
    extraReducers:{
        [searchService.pending]: (state) => {
            state.loading = true
        },
        [searchService.fulfilled]: (state, action) => {
            state.search = action.payload.products
            state.sucess = true
            state.loading = false
        },
        [searchService.rejected]: (state) => {
            state.failed = true
            state.loading = false

        }
    }
})

export default searchSlice.reducer