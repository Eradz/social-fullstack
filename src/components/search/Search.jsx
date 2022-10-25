import React, { useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'
import {AiFillStar, AiFillHeart} from 'react-icons/ai'
import { FaRegEye } from 'react-icons/fa'
import { searchService } from '../redux/items/SearchSlice'
import { useSelector, useDispatch } from 'react-redux'

export const Search = ({data, value}) => {
    
    const yeah = () =>{
      value('')
    }
    
    return (
    <div className='bg-white  h-[300px] overflow-y-auto'>
    {data.map((item) =>{
    return (
        <Link 
        key={item.id}
        onClick={() =>{yeah()}} className='hover:bg-blue text-black no-underline' 
        to={{pathname: `/product/${item.id}`,}} state={{from: item}}>
        <div  className='hover:bg-blue'>
        <div className='flex px-3 py-2 items-center gap-2'>
        <img src={item.thumbnail} alt={item.title}  className='w-[70px] h-[70px]'/>
        <div>
        <h6>{item.title}</h6>
        <h6>{item.description.slice(0,30)}...</h6>
        </div>
        </div>
    </div>
    </Link>
    )  
    })}
    </div>
)
}
export const SearchC = () =>{
  const location = useLocation()
  const items = location.state.from
  const star = [<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
 console.log(items.length) 
 const {loading, search} = useSelector((state) => state.search)
 const dispatch = useDispatch()
 useEffect(() =>{
  dispatch(searchService(items))
 }, [dispatch, items])

 if(loading){
  return <h1>loading...</h1>
 }

  return(
    <>
    <div className='mt-2'>
       <div className="grid md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 p-3 gap-y-5">
        {search.map((item, i, arr) => {
            return (
              arr.length > 0 ? 
                <div key={item.title} className='rounded-lg w-[180px] md:w-[250px] h-[320px] max-w-max shadow shadow-black pt-2 pb-4 px-2 relative bg-white '>
                  <div className=' w-[150px] md:w-[220px] max-h-[300px] h-[70%] mx-auto '> 
                    <div className='flex items-center justify-between bg-white px-2'>
                     <h2>...</h2> 
                     <div className={item.on? `bg-red-500 p-2 rounded-[50%] cursor-pointer`: `bg-icon p-2 rounded-[50%] cursor-pointer`}>
                      <AiFillHeart color='white'/>
                     </div>
                    </div> 
                    <Link to={{pathname: `/product/${item.id}`,}} state={{from: item}} className='text-black no-underline'>
                    <img src={item.thumbnail} alt={item.title} className=' w-[130px] md:w-[250px] max-h-[300px] h-[80%] mx-auto ' /> 
                    </Link>
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
                  <Link to={{pathname: `/product/${item.id}`,}} state={{from: item}} className='text-black no-underline'>
                  <div className="bg-blue w-max h-max absolute bottom-0 right-0 p-4 rounded-br-lg rounded-tl-lg "> 
                  <FaRegEye className='text-white' size={20}/>
                  </div>
                  </Link>
                </div>
            </div> : 
            <div className='w-[300px] flex justify-center'>
              <h2 className='text-center flex'>Didn't find any Items,<br/> try a more specific search</h2>
              </div>
                 
              )
            })}
      
      </div>
         
          </div>
          </>
    
  )
}
