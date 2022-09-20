import React, {useState} from 'react'
import { AiFillHeart, AiFillStar } from 'react-icons/ai'
import { BiArrowFromRight } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation, A11y,Pagination } from 'swiper';
import { useSelector, useDispatch } from 'react-redux'
import { addCart } from '../redux/items/itemsSlice'
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation';


export const Product = () => {
  const location = useLocation()
  const item = location.state.from
  const dispatch = useDispatch()
  const {cartItem} = useSelector((state) => state.item)
  const last = cartItem[cartItem.length - 1]
  

  const stars = [<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
  const stars2 = [<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar className="text-icon"/>]
  const star5 = stars.map((star, i) => {
    return <span className='text-orange-500'>{star}</span>
})
  const star4 = stars2.map((star, i) => {
    return <span className='text-orange-500'>{star}</span>
})
  const [on, setOn] = useState(false)
  const toggle = ()=>{
          setOn(!on)
  }
  return (
    <div className='h-[100vh] flex flex-col gap-4 '>
    <div className='p-3 bg-bg' >
          <div className='flex justify-between '>
              <Link to='/category' className='text-black'>
              <BiArrowFromRight size={25}/>
              </Link>
            <h3>{item.title}</h3>
              <AiFillHeart onClick={() =>toggle()} className={on? `text-red-500 cursor-pointer`: `text-icon cursor-pointer`} size={25}/>
          </div>
          <Swiper className='pb-4'
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
            return <SwiperSlide className='w-[200px] h-[150px] md:h-[200px]'><img src={images} alt={item.title} className='w-full h-[300px]'/></SwiperSlide>
            })
            }
        </Swiper>
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
    <div>
      <h4>Description</h4>
      <p>{item.description}</p>
    </div>
    <div className='flex justify-center gap-5'>
    <button className='px-3 py-2 text-blue border-blue border-2 cursor-pointer hover:text-black hover:bg-blue'>Checkout</button>
    <button onClick={() => {last === item ? dispatch(addCart("nothing")) : dispatch(addCart(item))}} className='px-3 py-2 bg-blue border-2 border-blue cursor-pointer hover:text-blue hover:bg-white'>Add to cart</button>
    </div>
    </div>
  )
}
