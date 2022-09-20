import React from 'react'
import {IoIosArrowDropdown} from 'react-icons/io'
import {BsPatchPlus} from 'react-icons/bs'
import {AiFillStar, AiFillHeart} from 'react-icons/ai'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Scrollbar, A11y } from 'swiper';
import {Link} from 'react-router-dom'

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/scrollbar';
import { getElec } from '../redux/items/eleSlice'
export const Men = () => {
  const dispatch = useDispatch()
  const {elec, isload} = useSelector((state) => state.elec)

  const star = [<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
  
  useEffect(() => {
    dispatch(getElec(""))
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
        <h3 className='font-bold' >Men</h3>
        <IoIosArrowDropdown className='-rotate-90' size={25}/>
      </div>
      <Swiper className='pb-4'
      // install Swiper modules
      breakpoints={{
        576: {
          width: 576,
          slidesPerView: 3,
        },
        768: {
          width: 768,
          slidesPerView: 3,
        },
      }}
    
    
      modules={[ Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {elec.map((item, i) => {
        if (i >= 50 && i < 66 ){
        return <SwiperSlide >  
      <div key={item.id} className='rounded-lg w-max md:w-[250px] h-[300px] max-w-max shadow shadow-black pt-2 pb-4 px-2 relative bg-white '>
            <div className=' w-[200px] md:w-[220px] max-h-[300px] h-[70%] mx-auto '> 
              <div className='flex items-center justify-between bg-white px-2'>
               <h2>...</h2> 
               <div className='bg-red-500 p-2 rounded-[50%]'>
                <AiFillHeart color='white'/>
               </div>
              </div> 
              <img src={item.thumbnail} alt={item.title} className=' w-[200px] md:w-[250px] max-h-[300px] h-[80%] mx-auto ' /> 
            </div>
            <div className='p-2 h-[50%] flex '>
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
            <Link to={{pathname: `/product/${item.id}`,}} state={{from: item}}
             className="bg-blue w-max h-max absolute bottom-0 right-0 p-4 rounded-br-lg rounded-tl-lg ">
            <BsPatchPlus className='text-white' size={20}/>
           </Link>
          </div>

      </div>
      </SwiperSlide>}
      })}

    </Swiper>
   
    </div>
  )
}
