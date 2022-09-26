import React, {useState, useEffect} from 'react'
import Footer  from '../footer/Footer';
import { AiFillHeart, AiFillStar } from 'react-icons/ai'
import { BiArrowFromRight } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation, A11y,Pagination } from 'swiper';
import { useSelector, useDispatch } from 'react-redux'
import { addCart } from '../redux/items/itemsSlice'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { Nav } from '../nav/Nav';



export const Product = () => {
  const location = useLocation()
  const item = location.state.from
  const dispatch = useDispatch()
  const {cartItem, message} = useSelector((state) => state.item)
  const last = cartItem[cartItem.length - 1]
  const [amount, setAmount] = useState(1)
  

  const stars = [<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
  const stars2 = [<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar className="text-icon"/>]
  const star5 = stars.map((star, i) => {
    return <span className='text-orange-500'>{star}</span>})
  const star4 = stars2.map((star, i) => {
    return <span className='text-orange-500'>{star}</span>})
  const [on, setOn] = useState(false)
  const toggle = ()=>{
          setOn(!on)
  }
  const addAmount = () => {
    setAmount(prevamount => prevamount + 1 )
  }
  const minusAmount = () => {
    setAmount(prevamount => prevamount - 1  )
  }
   const multiply =  amount * item.price

   const object = {...item, total: multiply, amount: amount}

  const push = ()=>{
   if(last === item){
    dispatch(addCart("nothing"))
    toast(message)

   }else{
    dispatch(addCart(object))
    toast(`${item.title} has been added to cart`)
   }
  }
  return (
    <div className='h-[100vh] flex flex-col gap-4 '>
      <Nav/>
    <div className='p-3 bg-bg' >
          <div className='flex justify-between '>
              <Link to='/category' className='text-black'>
              <BiArrowFromRight size={25}/>
              </Link>
            <h3 className='text-center'>{item.title}</h3>
              <AiFillHeart onClick={() =>toggle()} className={on? `text-red-500 cursor-pointer`: `text-icon cursor-pointer`} size={25}/>
          </div>
    <div className='md:grid md:grid-cols-2 pt-3'>
          <Swiper className='pb-4 md:w-[95%] md:h-[500px]'
          // install Swiper modules
          modules={[ Navigation, Pagination, A11y,]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
            {item.images.map((images) => {
            return <SwiperSlide className='w-[100%]'><img src={images} alt={item.title} className='w-full h-[300px] md:h-[500px] '/></SwiperSlide>
            })
            }
        </Swiper>
        <div className='md:w-[95%]'>
        <div>
            <div className='flex justify-between items-center'>
                <div>
                <h4 className='font-bold'>{item.brand}</h4>
                <div className='flex items-center gap-1'>
                  <span className='flex'>{item.rating < 4.5 ?
                    star4 : star5 }</span>
                  <span>{item.rating} reviews</span>
                </div>
                </div>
                <div>
              <h3 className='font-semibold'> ${`${item.price}`}.00</h3>
                </div>
            </div>
        </div>
        <div className='mt-2'>
          <h4 className='md:text-[26px] '>Description</h4>
          <p className='md:text-[20px] font-thin'>{item.description}</p>
          <div className='flex gap-3 items-start'>
          <h4 className='md:text-[26px] '>Currently in Stock:</h4>
          <h4 className=' text-text font-semibold mb-[-3px]'>{item.stock}</h4>
          </div>
          <div className=' items-start gap-3 flex mt-3'>
              <h5>Quantity:</h5>
              <div className=' flex justify-start gap-3 items-start'>
              <FaMinusCircle onClick={() => {minusAmount()}}  size={22} className="cursor-pointer"/>
              <div className='flex flex-col justify-center'>
              <h4 className='text-center text-text font-semibold mb-[-3px]'>{amount < 0 ? 0 : amount}</h4>
              <div className='w-12 h-[1px] bg-black hidden md:block'></div>
              </div>
              <FaPlusCircle onClick={() => {addAmount()}}  size={22} className="cursor-pointer"/>
              </div>
          </div>
        </div>
        <div className='flex justify-center gap-5 mt-4'>
        <Link to='/cart'><button className='px-3 py-2 text-blue border-blue border-2 cursor-pointer hover:text-black hover:bg-blue'>Checkout</button></Link>
        <button onClick={() => {push()}} className='px-3 py-2 bg-blue border-2 border-blue cursor-pointer hover:text-blue hover:bg-white'>Add to cart</button>
        </div>
        </div>
    </div>
    </div>
    
    </div>
  )
}
