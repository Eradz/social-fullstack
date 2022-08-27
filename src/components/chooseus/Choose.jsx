import React from 'react'
import {BsBox, BsChatLeftText} from 'react-icons/bs'
import {FaRegMoneyBillAlt} from 'react-icons/fa'

export const Choose = () => {
  return (
    <div className='mt-5'>
      <h1 className="font-bold mb-4 text-center">Why choose us</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-3'>
        <div className="flex justify-center w-[70%] mx-auto items-center gap-2 shadow shadow-black p-3 rounded-[20px] bg-white">
        <div className="bg-blue rounded-[50%] w-12 h-12 relative">
          <BsBox className='absolute top-[25%] left-[25%]' size={25}/>
        </div>
        <div className="flex flex-col justify-center pt-3" >
          <h6 className="mb-[-3px] font-semibold">Free Shipping</h6>
          <p className="font-light">Free on all orders over $50</p>
        </div>
        </div>
        <div className="flex justify-center w-[70%] mx-[15%] items-center gap-2 shadow shadow-black p-3 rounded-[20px] bg-white">
        <div className="bg-green-700 rounded-[50%] w-12 h-12 relative">
          <FaRegMoneyBillAlt className='absolute top-[25%] left-[25%]' size={25}/>
        </div>
        <div className="flex flex-col justify-center pt-3" >
          <h6 className="mb-[-5px] font-semibold">Money Quarantee</h6>
          <p className="font-light">30 Days Money Back</p>
        </div>
        </div>
        <div className="flex justify-start  w-[70%] mx-[15%] items-center gap-2 shadow shadow-black  py-3 pr-3 pl-7 rounded-[20px] bg-white">
        <div className="bg-purple-700 rounded-[50%] w-12 h-12 relative">
          <BsChatLeftText className='absolute top-[25%] left-[25%]' size={25}/>
        </div>
        <div className="flex flex-col justify-center pt-3" >
          <h6 className="mb-[-5px] font-semibold">24/7 Support</h6>
          <p className="font-light">Friendly support 24/7</p>
        </div>
        </div>
      </div>
      </div>
  )
}
