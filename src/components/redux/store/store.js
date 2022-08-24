import {configureStore} from '@reduxjs/toolkit'
import itemReducer from '../items/itemsSlice'

export  const store = configureStore({
    reducer:{
        item: itemReducer
    }
})
export default store