import React from 'react'
import { getItems } from '../redux/items/itemsSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Product = () => {
  const dispatch = useDispatch()
  const {items, isload} = useSelector((state) => state.item)

  useEffect(() => {
    dispatch(getItems("/"))
  }, [])
  if (isload){
    return(
      <div>
        <h1>loading ....</h1>
        </div>
    )
  }
   
  return (
    <div>
        <h1 className='underline ' >product</h1>
    </div>
  )
}
