import React from 'react'
import {IoIosArrowDropdown} from 'react-icons/io'
import { getItems } from '../redux/items/itemsSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const Product = () => {
  const dispatch = useDispatch()
  const {items, isload} = useSelector((state) => state.item)

  
  useEffect(() => {
    dispatch(getItems("/"))
  }, [dispatch])
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
        return <SwiperSlide>  
      <div key={item.id} className=' w-[130px] md:w-[300px] h-[300px] max-w-max md:h-[450px] shadow-3xl'>
              <img src={item.image} alt={item.title} className='max-h-[300px] w-[130px] h-[50%]  md:w-[300px]' />
            <div className='p-2 h-[50%] '>
            <div>
              <div>
                <p>{item.title.length < 20? item.title : `${item.title.substring(0, 20)}...`}</p>
              </div>
              <h3>${item.price}</h3>
            </div>
            <button className='border-[1px] border-black p-1 hover:bg-slate-700  font-thin'>ADD TO CART</button>
          </div>
      </div>
      </SwiperSlide>
      })}
      
      {/* <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      ...
    </Swiper>
   
    </div>
  )
}
