import React from 'react'
import watch from '../../assest/watch.png'
import jewelry from '../../assest/jewelry.png'
import tv from '../../assest/tvs.png'
import men from '../../assest/man2.png'
import woman from '../../assest/womann.png'
import couch from '../../assest/couch.png'
import { motion } from "framer-motion"
function Category() {
    const categories = [
        {id:1, name: 'Wrist-watches', button: 'View products', img: watch },
        {id:2, name: 'Furnitures', button: 'View products', img: couch },
        {id:3, name: 'Jewelry', button: 'View products', img: jewelry  },
        {id:4, name: 'Electronics', button: 'View products', img: tv },
        {id:5, name: 'Male wears', button: 'View products', img: men },
        {id:6, name: 'Female wears', button: 'View products', img: woman },
    ]
    

  return (
    <div className='flex justify-center items-center flex-col mt-5'>
        <h1 className='font-bold mb-4'>All Categories</h1>
        <div className="grid md:grid-cols-3  gap-4">
           { categories.map((item, i) => {
           return <div key={item.id} className= "bg-gray-400 shadow shadow-black w-[100%] flex justify-between pl-8 rounded-[50px]">
            <div className="my-auto">
            <h5 className='font-semibold pl-2'>{item.name}</h5>
            <button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white' >{item.button}</button>
            </div>
            <img className='w-[200px] h-[200px]' src={item.img} alt={item.name}/>
        </div>
           }) 
            }
        </div>
    </div>
  )
}

export default Category