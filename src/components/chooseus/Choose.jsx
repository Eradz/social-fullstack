import React from 'react'
import {BsBox, BsChatLeftText} from 'react-icons/bs'
import {FaRegMoneyBillAlt} from 'react-icons/fa'
import { motion } from "framer-motion"
export const Choose = () => {

  const choice = [
    {name: "Free Shipping", detail:"Free on all orders over $50", icon: <BsBox/>, bg:'bg-blue' },
    {name: "Money Quarantee", detail:"30 Days Money Back", icon: <FaRegMoneyBillAlt/>, bg:'bg-green-700' },
    {name: "24/7 Support", detail:"Friendly support 24/7", icon: <BsChatLeftText/>, bg:'bg-purple-700'}
  ]
  return (
    <div className='mt-5'>
      <h1 className="font-bold mb-4 text-center">Why choose us</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-3'>
        {choice.map((item) => {
          return  <motion.div key={item.name}
          transition= {{duration: 0.8}}
          animate={{ x:50, opacity: 0.5}}
          whileInView={{ x:0, opacity: 1}}
          whileHover={{ scale: 1.08}}
          className="flex justify-start w-[70%] mx-[15%] items-center gap-2 shadow shadow-black p-3 rounded-[20px] bg-white">
          <div className={`${item.bg} rounded-[50%] w-12 h-12 relative`}>
          <div  className='absolute top-[25%] left-[25%] text-[25px]'>{item.icon}</div>
          </div>
          <div className="flex flex-col justify-center pt-3" >
            <h6 className="mb-[-3px] font-semibold">{item.name}</h6>
            <p className="font-light text-[15px]">{item.detail}</p>
          </div>
          </motion.div>
        })
       }
      </div>
    </div>
  )
}
