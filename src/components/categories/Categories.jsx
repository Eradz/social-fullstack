import React from 'react'
import Footer  from '../footer/Footer';
import { BiArrowFromRight, BiMenu } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { Nav } from '../nav/Nav'
import { Men } from './Men/Men'
import { Women } from './Women/Women'
import { Electronics } from './Electronics/Electronics'
import { Furniture } from './Furniture/Furniture';
import { Watches } from './Watches/Watches';

export default function Categories() {
  return (
    <div> 
       <Nav/>
      <div className='flex items-center justify-between pt-1'>
      <Link to='/' className='text-black'>
              <BiArrowFromRight size={25}/>
        </Link>
        <h3 className='text-center font-semibold'>Product Catogories</h3>
        <BiMenu size={25} className="invisible"/>
      </div>
      <div>
            <Men/>
            <Women/>
            <Electronics/>
            <Furniture/>
            <Watches/>
      </div>
      <Footer/>
    </div>
  )
}
