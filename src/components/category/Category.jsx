import React from 'react'
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
    {id:5, name: 'Male wears', button: 'Shop now', img: men, bg:'bg-orange-400' , link:"/men"},
    {id:6, name: 'Female wears', button: 'Shop now', img: woman, bg: 'bg-gray-400' , link:"/women"},
    {id:4, name: 'Electronics', button: 'Shop now', img: tv, bg: 'bg-orange-300', link:"/electronics"},
    {id:1, name: 'Watches', button: 'Shop now', img: watch, bg:'bg-cyan-400', link:"/watches"},
    {id:2, name: 'Furnitures', button: 'Shop now', img: couch, bg: 'bg-green-300', link:"/Furniture"},
    {id:3, name: 'Jewelry', button: 'Shop now', img: jewelry, bg: 'bg-purple-400', link:"/jewelry"},
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
            <h5 className='font-[590] pl-2 text-[15px] md:text-[20px]'>{item.name}</h5>
            <Link to={item.link} className='text-black'><button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white text-[15px] ' >{item.button}</button></Link>
            </div>
            <img className='w-[180px] md:w-[200px] h-[200px]' src={item.img} alt={item.name}/>
        </motion.div>
           }) 
            }
        </div>
    </div>
  )
}

export default Category