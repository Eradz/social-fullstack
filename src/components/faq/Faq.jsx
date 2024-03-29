import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import {faqs} from './faqs'
import { motion } from "framer-motion"
const Faq = () => {


  const [open, setOpen] = useState(null)

  const toogle = (i)=>{
    if (open === i){
      setOpen(null)
    } else{
      setOpen(i)
    }

  }

  return (
    <div className='mt-5'>
        <h3 className='mb-4 text-center'>Frequently Asked Questions (FAQ)</h3>
        <div className='grid grid-cols-1 w-[94%] md-w-[90%] mx-auto p-3'>{faqs.map((faq, i) => {
          return <motion.div
          transition= {{duration: 0.8}}
          animate={{ y:50 }}
          whileInView={{ y:0 }}
          onClick={() => toogle(i)} key={faq.id} className='mb-4 bg-white shadow-sm cursor-pointer px-3'>
          <div className='flex justify-between item-center gap-x-2 p-2'>
            <h5 className='text-[18px] '>{faq.q}</h5>
           {open === i? <AiOutlineMinus className='mt-[1%]' size={25}/>
            :<AiOutlinePlus className='mt-[1%]' size={25}/>}
          </div>
          <p className={open === i? "block text-subtext" : 'hidden' }>{faq.a}</p>
            </motion.div>  
        })} 
          
        </div> 
    </div>
  )
}

export default Faq