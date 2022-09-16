import React, {useState} from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BiArrowFromRight } from 'react-icons/bi'
import { useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export const Product = () => {
  const location = useLocation()
  console.log(location.state.from)
  const item = location.state.from
  

  const [on, setOn] = useState(false)
  const toggle = ()=>{
          setOn(!on)
  }
  return (
    <div>
      <div className='flex justify-between'>
        <BiArrowFromRight size={25}/>
        <span>{item.title}</span>
        <div onClick={() =>toggle()} className={on? `bg-red-500 p-2 rounded-[50%] cursor-pointer`: `bg-icon p-2 rounded-[50%] cursor-pointer`}>
          <AiFillHeart color='white'/>
        </div>
      </div>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} >
        {item.images.map((images) => {
         return <SwiperSlide className='w-[200px] h-[200px]'><img src={images} alt={item.title} className='w-full h-[300px]'/></SwiperSlide>
        })
    
        }
    </Swiper>
    </div>
  )
}
