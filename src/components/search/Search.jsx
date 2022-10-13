import React from 'react'
import {Link} from 'react-router-dom'
export const Search = ({data, value, find}) => {
    
    const yeah = () =>{
      value('')
    }
    
    return (
    <div className='bg-white h-[300px] overflow-y-auto'>
    {data.map((item,i,arr) =>{
      if(item.title.toLowerCase().includes(find) || item.description.toLowerCase().includes(find)){
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
      }
    })}
    </div>
)
}
