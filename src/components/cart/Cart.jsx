import React, { useState } from 'react'
import Footer  from '../footer/Footer';
import { RiDeleteBin2Line } from 'react-icons/ri'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import { Nav } from '../nav/Nav';
import { Link } from 'react-router-dom'
import { deleteCI } from '../redux/items/itemsSlice'
export function Cart() {
    const dispatch = useDispatch()
    const {cartItem, cart} = useSelector((state) => state.item)
    localStorage.setItem('cart', JSON.stringify(cartItem))
    const items = JSON.parse(localStorage.getItem('cart')) 

    const subtotal = cartItem.reduce((total, stuff) => {
       return  total + stuff.total
    }, 0)
    console.log(subtotal)

    const avalible = ''
  return (
    <div className='bg-bg relative'>
        <Nav/>
        <div>
            <div className='relative md:flex  py-3 bg-white'>
               <Link to='/category'> <IoMdArrowRoundBack size={31} className="ml-6 cursor-pointer text-black"/></Link>
                <h3 className='right-[40%] md:right-[50%] top-5 font-semibold absolute'>My Cart</h3>
            </div>
            <p className='pt-2 pl-6 font-semibold text-text'>My Cart summary</p>
            <div className='flex justify-between bg-white mt-[-10px] px-4 py-3 '>
                <div>
                    <h4 className='font-semibold'>Subtotal</h4>
                    <p className='text-text text-[12px]'>Delivery fees not included yet</p>
                </div>
                <h4 className='font-semibold'>${subtotal}</h4>
            </div>
            <p className='text-text pl-6 font-semibold pt-2'>CART({items.length})</p>
            <div className='bg-bg flex flex-col gap-5'>
              { cartItem.length > 0 ?  items.map((item, i) => {
                return <div key={item.id} className='bg-white px-4 py-3' >
                        <div className=' flex justify-between '>
                        <div className='flex gap-3'>
                            <img src={item.thumbnail} alt="watch" className='w-[150px] md:h-[200px] h-[150px] md:w-[200px]'/>
                            <div className='pt-3 text-[14px]'>
                                <h5 className='text-[14px]'>{item.title}</h5>
                                <h6 className='text-[14px]'>{item.brand}</h6>
                                <p>{item.category}</p>
                                <h4 className='font-semibold'>${item.total}</h4>
                                <p className='text-text text-[12px]'>${item.price}</p>
                            </div>
                        </div>
                        <div className='flex flex-col-reverse justify-center gap-3 md:flex-row items-center'>
                            <FaMinusCircle size={22} className="cursor-pointer"/>
                            <div className='flex flex-col justify-center'>
                                <h4 className='text-center text-text font-semibold mb-[-3px]'>{item.amount}</h4>
                                <div className='w-12 h-[1px] bg-black hidden md:block'></div>
                            </div>
                            <FaPlusCircle size={22} className="cursor-pointer"/>
                        </div>
                    </div>
                    <div onClick={() => {dispatch(deleteCI(i))}} className="text-red-500 flex gap-3 items-center cursor-pointer pt-2">
                        <RiDeleteBin2Line size={20}/>
                        <span>Remove</span>
                    </div>
                </div>
               }): 
               <div>
                <h1 className="text-uppercase text-center"> your cart is empty </h1> 
               <p className=" text-center" >Please add some items to cart before you checkout</p>
               </div>}
            </div>
        </div>
        <div className='hidden w-[100vw] h-[230vh] absolute top-0 left-0 bg-dim flex justify-center items-center'>
               <div className='w-[80%] h-[300px] absolute top-[10%] left-auto bg-bg'>

               </div>
        </div>
        <Footer/>
    </div>
  )
}

