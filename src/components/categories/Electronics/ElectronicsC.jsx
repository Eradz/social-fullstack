import React, { useEffect} from 'react'
import {AiFillStar, AiFillHeart} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { getElec, fav, notFave } from '../../redux/items/eleSlice'
import { FaRegEye } from 'react-icons/fa'




export const ElectronicsC = () => {
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
      <>
    <div className='mt-2'>
        <div className='px-3 flex '>
          <h3 className='font-bold text-center' >Electronics</h3>
        </div>
       <div  className="grid md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 p-3 gap-y-5">
        {elec.map((item, i) => {
          if (i < 10 || i > 84){
          return (
            <div key={item.title} className='rounded-lg w-[180px] md:w-[250px] h-[320px] max-w-max shadow shadow-black pt-2 pb-4 px-2 relative bg-white '>
              <div className=' w-[150px] md:w-[220px] max-h-[300px] h-[70%] mx-auto '> 
                <div className='flex items-center justify-between bg-white px-2'>
                 <h2>...</h2> 
                 <div onClick={() =>{dispatch(toggle(i))}}  className={item.on? `bg-red-500 p-2 rounded-[50%] cursor-pointer`: `bg-icon p-2 rounded-[50%] cursor-pointer`}>
                  <AiFillHeart color='white'/>
                 </div>
                </div> 
                <img src={item.thumbnail} alt={item.title} className=' w-[130px] md:w-[250px] max-h-[300px] h-[80%] mx-auto ' /> 
              </div>
              <div className='p-2 h-[30%] flex '>
              <div>
                <div className='px-2'>
                  <p className='uppercase'>{item.title.length < 10 ? item.title : `${item.title.substring(0, 10)}...`}</p>
                </div>
                <h5>${item.price}</h5>
                <div className="flex ">
                {star.map((star) =>{
                  return <span className='text-orange-500 w-[11%]'>{star}</span>
                })}
                </div>
              </div>
              <Link to={{pathname: `/product/${item.id}`,}} state={{from: item}}
               className="bg-blue w-max h-max absolute bottom-0 right-0 p-4 rounded-br-lg rounded-tl-lg ">
              <FaRegEye className='text-white' size={20}/>
             </Link>
            </div>
        </div>
          )}
        })}
  
  </div>
     
      </div>
      </>
  
    )
  }
  

