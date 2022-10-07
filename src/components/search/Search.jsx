import React from 'react'
export const Search = ({data}) => {
  
    const result = data.map((item) =>{
        if(item)
     return (
        <div className='hover:bg-blue'>
        <div className='flex px-3 py-2 items-center gap-2'>
           <img src={item.thumbnail} alt='woman'  className='w-[70px] h-[70px]'/>
           <div>
           <h6>{item.title}</h6>
           <h6>{item.description.slice(0,30)}...</h6>
           </div>
        </div>
    </div>
     )  
    })
    return (
    
    <>
    { result}

    </>
  )
}
