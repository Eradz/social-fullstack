import React from 'react'
import { RiDeleteBin2Line } from 'react-icons/ri'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useSelector,  } from 'react-redux'
import { Nav } from '../nav/Nav';

export function Cart() {
    const {cartItem, cart} = useSelector((state) => state.item)
    localStorage.setItem('cart', JSON.stringify(cartItem))
    const items = JSON.parse(localStorage.getItem('cart')) 

    const quantity = 2

  return (
    <div className='bg-bg'>
        <Nav/>
        <div>
            <div className='relative md:flex  py-3 bg-white'>
                <IoMdArrowRoundBack size={31} className="ml-6 cursor-pointer"/>
                <h3 className='right-[40%] md:right-[50%] top-5 font-semibold absolute'>My Cart</h3>
            </div>
            <p className='pt-2 pl-6 font-semibold text-text'>My Cart summary</p>
            <div className='flex justify-between bg-white mt-[-10px] px-4 py-3 '>
                <div>
                    <h4 className='font-semibold'>Subtotal</h4>
                    <p className='text-text text-[12px]'>Delivery fees not included yet</p>
                </div>
                <h4 className='font-semibold'>$3000</h4>
            </div>
            <p className='text-text pl-6 font-semibold pt-2'>CART({cart})</p>
            <div className='bg-bg flex flex-col gap-5'>
               {items.map((item) => {
                return <div key={item.id} className='bg-white px-4 py-3' >
                        <div className=' flex justify-between '>
                        <div className='flex gap-3'>
                            <img src={item.thumbnail} alt="watch" className='w-[150px] md:h-[200px] h-[150px] md:w-[200px]'/>
                            <div className='pt-3 text-[14px]'>
                                <h5 className='text-[14px]'>{item.title}</h5>
                                <h6 className='text-[14px]'>{item.brand}</h6>
                                <p>{item.category}</p>
                                <h4 className='font-semibold'>${item.price}</h4>
                                <p className='text-text text-[12px]'>$15000</p>
                            </div>
                        </div>
                        <div className='flex flex-col-reverse justify-center gap-3 md:flex-row items-center'>
                            <FaMinusCircle size={22} className="cursor-pointer"/>
                            <div className='flex flex-col justify-center'>
                                <h4 className='text-center text-text font-semibold mb-[-3px]'>{quantity}</h4>
                                <div className='w-12 h-[1px] bg-black hidden md:block'></div>
                            </div>
                            <FaPlusCircle size={22} className="cursor-pointer"/>
                        </div>
                    </div>
                    <div className="text-red-500 flex gap-3 items-center cursor-pointer pt-2">
                        <RiDeleteBin2Line size={20}/>
                        <span>Remove</span>
                    </div>
                </div>
               })} 
            </div>
        </div>
    </div>
  )
}

