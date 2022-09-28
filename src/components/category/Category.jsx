import React, {useState} from 'react'
import watch from '../../assest/watch.png'
import jewelry from '../../assest/jewelry.png'
import tv from '../../assest/tvs.png'
import men from '../../assest/man2.png'
import woman from '../../assest/womann.png'
import couch from '../../assest/couch.png'
import { motion } from "framer-motion"
import {Link} from 'react-router-dom'

function Category() {
  const categories = [
        {id:1, name: 'Wrist-watches', button: 'View items', img: watch, bg:'bg-cyan-400' },
        {id:2, name: 'Furnitures', button: 'View items', img: couch, bg: 'bg-green-300'},
        {id:3, name: 'Jewelry', button: 'View items', img: jewelry, bg: 'bg-purple-400'},
        {id:4, name: 'Electronics', button: 'View items', img: tv, bg: 'bg-orange-300'},
        {id:5, name: 'Male wears', button: 'View items', img: men, bg:'bg-orange-400' },
        {id:6, name: 'Female wears', button: 'View items', img: woman, bg: 'bg-gray-400'},
  ]
    
   
  return (
    <div className='flex justify-center items-center flex-col mt-5 '>
        <h1 className='font-semibold mb-4'>All Categories</h1>
        <div className="grid md:grid-cols-3  gap-4 px-3 ">
           { categories.map((item) => {
           return <motion.div 
           transition={{duration: 0.8}}
           initial={{scale: 0, opacity: 0}}
           whileInView={{scale: 1, opacity: 1}}
           whileHover={{ scale:1.07 }}
           key={item.id} className= {`${item.bg} shadow shadow-black w-[100%] flex justify-between pl-8 rounded-[50px]`} >
            <div className="my-auto ">
            <h5 className='font-[590] pl-2 text-[15px]'>{item.name}</h5>
            <Link to='/category'><button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white text-[15px] ' >{item.button}</button></Link>
            </div>
            <img className='w-[200px] h-[200px]' src={item.img} alt={item.name}/>
        </motion.div>
           }) 
            }
        </div>
    </div>
  )
}

export default Category