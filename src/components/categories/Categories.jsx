import React from 'react'
import { Electronics } from './Electronics'
import { Men } from './Men'
import { Women } from './Women'


export default function Categories() {
  return (
    <div>
      <div>
        <h3 className='text-center'>Product Catogories</h3>
      </div>
        <div>
            <Men/>
            <Women/>
            <Electronics/>
        </div>
    </div>
  )
}
