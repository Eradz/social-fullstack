import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsSearch } from 'react-icons/bs'
import {FiTwitter,FiGithub} from 'react-icons/fi'
function Footer() {
  return (
    <div className='bg-ft text-white h-max md:flex md:justify-between p-4 flex-cols font-poppins'>
        <div className='h-max pb-4'>
            <h3 className='text-center mb-4'>Eradz</h3>
            <div className='flex justify-center gap-x-2'>
            <a href='https://www.instagram.com/andrewanagu' className='text-white bg-icon p-1 rounded-[50%] w-[35px] h-[35px] flex justify-center items-center'><AiOutlineInstagram size={18}/></a>
            <a href='https://twitter.com/anaguchidi35?t=7w-IG_UxIgwHm4ulrzpDSA&s=08' className='text-white  bg-icon p-1 rounded-[50%] w-[35px] h-[35px] flex justify-center items-center'><FiTwitter size={18}/></a>
            <a href='https://github.com/eradz' className='text-white  bg-icon p-1 rounded-[50%] w-[35px] h-[35px] flex justify-center items-center'><FiGithub size={18}/></a>
            </div>
        </div>
        <div className='flex justify-between gap-x-3'>
        <div>
            <h5>About Us</h5>
            <div className='text-text cursor-pointer'>
                <p>Blog</p>
                <p>Return Policy</p>
                <p>Limited Warranty</p>
                <p>Accessibility</p>
                <p>Patents</p>
            </div>
        </div>
        <div>
            <h5>Categories</h5>
            <div className='text-text cursor-pointer'>
                <p>Men</p>
                <p>Women</p>
                <p>Electronics</p>
                <p>Furniture</p>
                <p>Jewelries</p>
            </div>
        </div>
        <div>
            <h5>Support</h5>
            <div className='text-text cursor-pointer'>
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
                <input className='px-9 py-2 relative w-full  text-xs bg-gray-700 rounded-[10px]' type='search' placeholder='Search products, brands and categories'/>
                <BsSearch className='absolute top-2 left-3 ' />
    </div>
        </div>
    </div>
  )
}

export default Footer