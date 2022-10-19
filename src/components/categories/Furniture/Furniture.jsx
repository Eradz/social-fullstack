import React, { useEffect} from 'react'
import {AiFillStar, AiFillHeart} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { getElec, fav, notFave } from '../../redux/items/eleSlice'
import { FaRegEye } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import { IoIosArrowDropdown } from 'react-icons/io'
export const Furniture = () => {
    const dispatch = useDispatch()
    const {elec, isload} = useSelector((state) => state.elec)
    const star = [<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
    const toggle = (i) => {
       if(elec[i].on){
        dispatch(notFave(i))
       }else{
        dispatch(fav(i))
       }
      
    }
    
    useEffect(() => {
        dispatch(getElec("") )
    }, [dispatch,])
    if (isload){
        return(
        <div>
            <h1>loading ....</h1>
            </div>
        )
    }
  return (
    <div className='mt-5'>
      <Link to='/furniture' className='no-underline text-black font-light'> 
      <div className='px-3 flex items-center justify-between'>
        <h3 className='font-bold' >Furnitures</h3>
        <IoIosArrowDropdown className='-rotate-90' size={25}/>
      </div>
      </Link>
      <Swiper className='pb-4'
      // install Swiper modules
      breakpoints={{
        576: {
          width: 576,
          slidesPerView: 2,
         
        },
        768: {
          width: 768,
          slidesPerView: 3,
        },
        1024: {
          width: 1024,
          slidesPerView: 4,
          navigation: { clickable: true }
        },
      }}
    
    
      modules={[ Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView=  {2}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {elec.map((item, i) => {
            return (
              ((i > 25 && i < 35) ||( i > 94)) ?  <SwiperSlide key={item.title} >  
              <div className='rounded-lg w-max md:w-[250px] h-[300px] max-w-max shadow shadow-black pt-2 pb-4 px-2 relative bg-white '>
                    <div className=' w-[180px] md:w-[220px] max-h-[300px] h-[70%] mx-auto '> 
                      <div className='flex items-center justify-between bg-white px-2'>
                       <h2>...</h2> 
                       <div onClick={() =>{dispatch(toggle(i))}}  className={item.on? `bg-red-500 p-2 rounded-[50%] cursor-pointer`: `bg-icon p-2 rounded-[50%] cursor-pointer`}>
                        <AiFillHeart color='white'/>
                       </div>
                      </div> 
                      <Link to={{pathname: `/product/${item.id}`,}} state={{from: item}} className='text-black no-underline'>
                          <img src={item.thumbnail} alt={item.title} className=' w-[130px] md:w-[250px] max-h-[300px] h-[80%] mx-auto ' /> 
                          </Link>
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
                    <FaRegEye className='text-white' size={20}/>
                   </Link>
                  </div>
        
              </div>
              </SwiperSlide> : ''
            )
           
            })}
      
          </Swiper>
         
          </div>
        )
      }
      
      