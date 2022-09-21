import React from 'react'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useSelector,  } from 'react-redux'
import watch from '../../assest/watch.png'

export function Cart() {
    const {cart, cartItem} = useSelector((state) => state.item)
    console.log(cartItem[0])
  return (
    <div className='bg-bg'>
        <div>
            <div className='flex gap-[40%] py-3 bg-white'>
                <IoMdArrowRoundBack size={30} className="ml-6 cursor-pointer"/>
                <h3 className='text-center font-semibold'>My Cart</h3>
            </div>
            <p className='pt-2 pl-6 font-semibold text-text'>My Cart summary</p>
            <div className='flex justify-between bg-white mt-[-10px] px-4 py-3 '>
                <div>
                    <h4 className='font-semibold'>Subtotal</h4>
                    <p className='text-text text-[12px]'>Delivery fees not included yet</p>
                </div>
                <h4 className='font-semibold'>$3000</h4>
            </div>
            <p className='text-text pl-6 font-semibold pt-2'>CART(2)</p>
            <div className='bg-bg flex flex-col gap-5'>
                <div className='bg-white px-4 py-3' >
                    <div className=' flex justify-between '>
                        <div className='flex gap-3'>
                            <img src={watch} alt="watch" className='w-[150px] h-[200px]'/>
                            <div className='pt-3 text-[14px]'>
                                <h5 className='text-[14px]'>Fan</h5>
                                <h6 className='text-[14px]'>MerchantOwen</h6>
                                <p>tanding</p>
                                <h4 className='font-semibold'>$9000</h4>
                                <p className='text-text text-[12px]'>$15000</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 '>
                            <FaMinusCircle size={22}/>
                            <div className='flex flex-col justify-center'>
                                <h4 className='text-center text-text font-semibold mb-[-3px]'>1</h4>
                                <div className='w-12 h-[1px] bg-black'></div>
                            </div>
                            <FaPlusCircle size={22}/>
                        </div>
                    </div>
                    <div className="text-red-500 flex gap-3 items-center cursor-pointer">
                        <RiDeleteBin2Line size={20}/>
                        <span>Remove</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

