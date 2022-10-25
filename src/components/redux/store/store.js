import {configureStore} from '@reduxjs/toolkit'
import itemReducer from '../items/itemsSlice'
import elecReducer from '../items/eleSlice'
import searchReducer from '../items/SearchSlice'

export  const store = configureStore({
    reducer:{
        item: itemReducer,
        elec: elecReducer,
        search: searchReducer
    }
})
export default store