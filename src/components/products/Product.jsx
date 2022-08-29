import React from 'react'
import {IoIosArrowDropdown} from 'react-icons/io'
import { getItems } from '../redux/items/itemsSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper';
import couch from '../../assest/couch.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const Product = () => {
  const dispatch = useDispatch()
  const {items, isload} = useSelector((state) => state.item)

  
  useEffect(() => {
    dispatch(getItems("/"))
  }, [])
  if (isload){
    return(
      <div>
        <h1>loading ....</h1>
        </div>
    )
  }
   
  return (
    <div className='mt-5'>
      <div className='px-3 flex items-center justify-between'>
        <h1 className='font-bold' >Top Products</h1>
        <IoIosArrowDropdown className='-rotate-90' size={25}/>
      </div>
      <Swiper
      // install Swiper modules
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {items.map((item) => {
        return <SwiperSlide>  <div key={item.id} className=' w-[100%] max-w-max'>
        <div className='max-w-fit'>
          <img src={item.image} className='max-h-[300px] w-max' />
        </div>
        <div>
          <div>
            <p>{item.title}</p>
          </div>
          <h3>${item.price}</h3>
        </div>
      </div></SwiperSlide>
      })}
      
      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      ...
    </Swiper>
   
    </div>
  )
}
