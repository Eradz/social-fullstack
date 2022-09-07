import React from 'react'
import { BiArrowFromRight, BiMenu } from 'react-icons/bi'
import { Electronics } from './Electronics'
import { Men } from './Men'
import { Women } from './Women'

export default function Categories() {
  return (
    <div>
      <div className='flex items-center justify-between pt-1'>
        <BiArrowFromRight size={25}/>
        <h3 className='text-center font-semibold'>Product Catogories</h3>
        <BiMenu size={25}/>
      </div>
      <div>
            <Men/>
            <Women/>
            <Electronics/>
      </div>
    </div>
  )
}
