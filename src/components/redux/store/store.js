import {configureStore} from '@reduxjs/toolkit'
import itemReducer from '../items/itemsSlice'
import elecReducer from '../items/eleSlice'

export  const store = configureStore({
    reducer:{
        item: itemReducer,
        elec: elecReducer
    }
})
export default store