import React from 'react'
import woman from '../../assest/woman.jpg'
export const Search = () => {
  return (
    <>
        <div className='bg-red-500'>
            <div className='flex px-3 py-2 items-center gap-2'>
               <img src={woman} alt='woman'  className='w-[70px] h-[70px]'/>
               <h3>Product name</h3>
            </div>
            <div className='flex px-3 py-2 items-center gap-2'>
               <img src={woman} alt='woman'  className='w-[70px] h-[70px]'/>
               <h3>Product name</h3>
            </div>
            <div className='flex px-3 py-2 items-center gap-2'>
               <img src={woman} alt='woman'  className='w-[70px] h-[70px]'/>
               <h3>Product name</h3>
            </div>
            <div className='flex px-3 py-2 items-center gap-2'>
               <img src={woman} alt='woman'  className='w-[70px] h-[70px]'/>
               <h3>Product name</h3>
            </div>
        </div>
    </>
  )
}
