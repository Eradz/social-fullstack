import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsSearch } from 'react-icons/bs'
import {FiTwitter,FiGithub} from 'react-icons/fi'
function Footer() {
  return (
    <div className='bg-ft text-white h-max md:flex md:justify-between p-4 flex-cols'>
        <div className='h-max pb-4'>
            <h3 className='text-center mb-4'>Eradz</h3>
            <div className='flex justify-center gap-x-2'>
            <a href='https://www.instagram.com/andrewanagu' className='text-white bg-icon p-1 rounded-[50%]'><AiOutlineInstagram/></a>
            <a href='https://twitter.com/anaguchidi35?t=7w-IG_UxIgwHm4ulrzpDSA&s=08' className='text-white  bg-icon p-1 rounded-[50%]'><FiTwitter/></a>
            <a href='https://github.com/eradz' className='text-white  bg-icon p-1 rounded-[50%]'><FiGithub/></a>
            </div>
        </div>
        <div className='flex justify-between gap-x-3'>
        <div>
            <h5>About Us</h5>
            <div className='text-text'>
                <p>Blog</p>
                <p>Return Policy</p>
                <p>Limited Warranty</p>
                <p>Accessibility</p>
                <p>Patents</p>
            </div>
        </div>
        <div>
            <h5>Categories</h5>
            <div className='text-text'>
                <p>Men</p>
                <p>Women</p>
                <p>Electronics</p>
                <p>Furniture</p>
                <p>Jewelries</p>
            </div>
        </div>
        <div>
            <h5>Support</h5>
            <div className='text-text'>
                <p>Help center</p>
                <p>Terms of service</p>
                <p>Legal</p>
                <p>Privacy policy</p>
                <p>Status</p>
            </div>
         </div>
        </div>
        <div>
            <h5>Search Product</h5>
            <div className='relative '>
                <input className='px-9 py-2 relative w-full bg-icon text-xs border-solid border-2 border-stone-900 rounded-[20px]' type='search' placeholder='Search'/>
                <BsSearch className='absolute top-3 left-3 ' />
            </div>
        </div>
    </div>
  )
}

export default Footer