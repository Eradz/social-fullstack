import React from 'react'
import {Link} from 'react-router-dom'
export const Search = ({data}) => {
    return (
    <div className='bg-white'>
    {data.map((item) =>{
    return (
        <Link className='hover:bg-blue text-black no-underline' to={{pathname: `/product/${item.id}`,}} state={{from: item}}>
        <div className='hover:bg-blue'>
        <div className='flex px-3 py-2 items-center gap-2'>
        <img src={item.thumbnail} alt='woman'  className='w-[70px] h-[70px]'/>
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
