import React, { useState }from 'react'
import {IoIosArrowDropdown} from 'react-icons/io'
import {BsPatchPlus} from 'react-icons/bs'
import {AiFillStar, AiFillHeart} from 'react-icons/ai'
import { getItems } from '../redux/items/itemsSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation, A11y } from 'swiper';
import {Link} from 'react-router-dom'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
export const Products = () => {
  const dispatch = useDispatch()
  const {items, isload} = useSelector((state) => state.item)
  const stars = [<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
  const stars2 = [<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar className="text-icon"/>]
  const star5 = stars.map((star) => {
    return <span className='text-orange-500'>{star}</span>
})
  const star4 = stars2.map((star) => {
    return <span className='text-orange-500'>{star}</span>
})
  const [on, setOn] = useState(false)
  const toggle = (i)=>{
      if(i >= 0 ){
        setOn(!on)
      }
  }
  localStorage.setItem('items', JSON.stringify(items))
  useEffect(() => {
    dispatch(getItems(""))
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
      <Link to='/category' className='px-3 flex no-underline items-center justify-between text-black'>
        <h3 className='' >Top Products</h3>
        <IoIosArrowDropdown className='-rotate-90' size={25}/></Link>
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
        1024: {
          width: 576,
          slidesPerView: 3,
          },
      }}
    
    
      modules={[ Navigation, A11y,]}
      spaceBetween={50}
      slidesPerView={2}
      navigation={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
      {items.map((item, i) => {
        if(i < 20){
          return <SwiperSlide>  
      <div key={item.id} className='rounded-lg w-max h-[300px] md:h-[320px] shadow shadow-black pt-2 pb-4 px-2 relative bg-white '>
            <div className=' w-[200px] md:w-[250px] max-h-[300px] h-[70%] mx-auto '> 
              <div className='flex items-center justify-between bg-white px-2'>
               <h2>...</h2> 
               <div onClick={() =>toggle(i)} className={on? `bg-red-500 p-2 rounded-[50%] cursor-pointer`: `bg-icon p-2 rounded-[50%] cursor-pointer`}>
                <AiFillHeart color='white'/>
               </div>
              </div> 
              <img src={item.thumbnail} alt={item.title} className=' w-[200px] md:w-full max-h-[300px] h-[80%] mx-auto ' /> 
            </div>
            <div className='p-2 h-[50%] flex'>
            <div >
              <div className='px-2'>
                <p>{item.title.length < 20 ? item.title : `${item.title.substring(0, 17)}...`}</p>
              </div>
              <h3>${item.price}</h3>
              <div className='flex'>
                {item.rating < 4.5 ?
                  star4 : star5 }
              </div>
            </div>
            <Link to={{pathname: `/product/${item.id}`,}} state={{from: item}}
             className="bg-blue w-max h-max absolute bottom-0 right-0 p-4 rounded-br-lg rounded-tl-lg ">
            <BsPatchPlus className='text-white' size={20}/>
           </Link>
          </div>
      </div>
      </SwiperSlide>
        }
        
      })}

    </Swiper>
   
    </div>
  )
}

