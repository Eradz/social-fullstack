import React from 'react'
import {IoIosArrowDropdown} from 'react-icons/io'
import {BsPatchPlus} from 'react-icons/bs'
import {AiFillStar, AiFillHeart} from 'react-icons/ai'
import { getItems } from '../redux/items/itemsSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/scrollbar';
export const Product = () => {
  const dispatch = useDispatch()
  const {items, isload} = useSelector((state) => state.item)

  const star = [<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
  
  useEffect(() => {
    dispatch(getItems("?limit=14"))
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
      <Swiper className='pb-4'
      // install Swiper modules
      modules={[ Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {items.map((item) => {
        return <SwiperSlide >  
      <div key={item.id} className='rounded-lg w-[200px] md:w-[250px] h-[300px] max-w-max md:h-[450px] shadow shadow-black pb-4 px-2 relative bg-white'>
            <div className=' w-[200px] md:w-[250px] max-h-[300px] h-[70%] mx-auto '> 
              <div className='flex items-center justify-between bg-white px-2'>
               <h2>...</h2> 
               <div className='bg-red-500 p-2 rounded-[50%]'>
                <AiFillHeart color='white'/>
               </div>
              </div> 
              <img src={item.image} alt={item.title} className=' w-[200px] md:w-[250px] max-h-[300px] h-[80%] mx-auto ' /> 
            </div>
            <div className='p-2 h-[50%] flex  '>
            <div>
              <div className='px-2'>
                <p>{item.title.length < 20 ? item.title : `${item.title.substring(0, 17)}...`}</p>
              </div>
              <h3>${item.price}</h3>
              <div className="flex">
              {star.map((star) =>{
                return <span className='text-orange-500'>{star}</span>
              })}
              </div>
            </div>
           <div className="bg-blue w-max h-max absolute bottom-0 right-0 p-4 rounded-br-lg rounded-tl-lg "><BsPatchPlus className='text-white' size={20}/></div>
          </div>

      </div>
      </SwiperSlide>
      })}

    </Swiper>
   
    </div>
  )
}
