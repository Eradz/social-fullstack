import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import {faqs} from './faqs'
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
        <div className='grid grid-cols-1 w-[70%] mx-auto'>{faqs.map((faq, i) => {
          return <div onClick={() => toogle(i)} key={faq.id} className='mb-4 bg-white shadow-sm cursor-pointer'>
          <div   className='flex justify-between item-center p-2'>
            <h5 className='text-[16px] font-semibold'>{faq.q}</h5>
           {open === i? <AiOutlineMinus className='mt-[1%]' size={25}/>
            :<AiOutlinePlus className='mt-[1%]' size={25}/>}
          </div>
          <p className={open === i? "block" : 'hidden' }>{faq.a}</p>
            </div>  
        })} 
          
        </div> 
    </div>
  )
}

export default Faq