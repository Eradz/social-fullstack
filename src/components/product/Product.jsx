import React from 'react'
import { useLocation } from 'react-router-dom'

export const Product = (props) => {
  console.log(props)
  const location = useLocation()
  console.log(location)
  return (
    <div>Product</div>
  )
}
