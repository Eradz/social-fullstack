import React from 'react'
import { useState } from 'react'
import {AiOutlineDown, AiOutlineUp} from 'react-icons/ai'
import {faqs} from './faqs'
const Faq = () => {
  const [open, setOpen] = useState(false)

  const toogle = () => {
    setOpen(!open)
  }
  return (
    <div className='mt-5'>
        <h3 className='mb-4 text-center'>Frequently Asked Questions (FAQ)</h3>
        <div className='grid grid-cols-2'>{faqs.map((faq) => {
          return <div onClick={toogle} className='mb-4 bg-bg shadow shadow-black'>
          <div key={faq.id} className='flex justify-between item-center p-2'>
            <h5 className='text-[16px] font-semibold'>{faq.q}</h5>
           {!open? <AiOutlineDown className='mt-[1%]' size={25}/>
            :<AiOutlineUp className='mt-[1%]' size={25}/>}
          </div>
          <p className={open && faq.id? 'text-[14px]' : "hidden"}>{faq.a}</p>
            </div>  
        })}
          
        </div> 
    </div>
  )
}

export default Faq