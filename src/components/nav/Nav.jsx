import React, { useState } from 'react'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {FaBars, FaRegUser, FaTimes} from 'react-icons/fa'
import {IoIosArrowDropdown} from 'react-icons/io'
import {BsSearch, BsStar, BsInfoCircle} from 'react-icons/bs'
import {BiCategory} from 'react-icons/bi'


export const Nav = () => {
  const menu =[
    {id: 1, name: 'Male wears', link: '#'},
    {id: 2, name: 'Female wears', link: '#'},
    {id: 3, name: 'Wrist-watches and Jeweries', link: '#'},
    {id: 4, name: 'Electronics and computers', link: '#'},
    {id: 5, name: 'Furniture', link: '#'},
  ]

  
  const category = menu.map((cate) => {
      return <div key={cate.id}>
      <div  className='flex p-2 items-center gap-2'>
        <a className='no-underline text-black font-light' href={cate.link}>{cate.name}</a></div>
      </div>
    })
  

  const [nav, setNav] = useState(false)
  const [show, setShow] = useState(false)

  const toogle = () =>{
    setNav(!nav)
  }
  const toogles = () =>{
    setShow(!show)
  }
  return (
    <>
    <div className='z-30 bg-white sticky w-full top-0 left-0'>
    <div className=' flex md:justify-around justify-between items-center text-lg font-bold px- gap-[-2rem] p-1'>
        <h2 className='text-3xl'> Eradz </h2>
              <div className=' w-6/12 items-center justify-center gap-[-2rem] hidden md:flex'>
                <div className='relative w-7/12 '>
                  <input className='px-9 py-2 relative w-full text-xs border-solid border-[1px] border-stone-700 rounded-[20px]' type='search' placeholder='Search products, brands and categories'/>
                  <BsSearch className='absolute top-2 left-3 ' />
                </div>
                  <button className='border-4 bg-blue py-2 px-4 rounded-xl'>SEARCH</button>
              </div>
        <div className='md:flex hidden ml-[-5rem] relative'> 
            <ul className='flex justify-between items-center gap-4 mt-2 font-medium '>
              <li className='hover:text-blue'><a className='no-underline text-black'  href='#'>Home</a></li>
              <div onClick={toogles} className='relative flex justify-between items-center gap-1 hover:text-blue hover:cursor-pointer'>
                  <li className='hover:text-blue'><a className='no-underline text-black' href='#'>Category</a></li>
                  <IoIosArrowDropdown className={!show?'rotate-180 duration-1000': 'duration-1000'}/>
              </div>
              <li className=''><a className='no-underline hover:text-blue text-black' href='#'>Promo</a></li>
              <li className='text-black'><a className='no-underline  hover:text-blue ' href='#'>About us</a></li>
            </ul>
            <ul className={show? 'flex flex-col absolute w-[100%] bg-white top-11 duration-1000 scale-100' : 'absolute w-full text-center top-[-1000px] duration-1000 scale-0'}>
              <li><a className='text-black no-underline' href='#'>Men</a></li>
              <li><a className='text-black no-underline' href='#'>Women</a></li>
              <li><a className='text-black no-underline' href='#'>Watch and Jewelry</a></li>
              <li><a className='text-black no-underline' href='#'>Furniture</a></li>
            </ul>
        </div>
             <div className='flex gap-3 items-center justify-center'>
              <a href='register' className='text-black'><FaRegUser  className='hover:text-blue  hover:cursor-pointer'/></a>
                <div className='flex justify-center items-center hover:text-blue  hover:cursor-pointer'>
                     <HiOutlineShoppingCart  size={25}/>
                     <p className=' text-center rounded-full text-sm '>0</p>
                </div>
                <div onClick={toogle} className='p-2 md:hidden'>
                {nav? <FaTimes size={25}/> :  <FaBars size={25}/>}
                </div>
            </div>
    </div>
    <div className='relative max-w-[900px] md:hidden w-[98%] mx-auto '>
                <input className='px-9 py-2 relative w-full  text-xs bg-gray-200 rounded-[10px]' type='search' placeholder='Search products, brands and categories'/>
                <BsSearch className='absolute top-2 left-3 ' />
    </div>
    <div className={nav? 'fixed top-0 left-0 h-screen bg-white w-[60%] flex flex-col md:hidden duration-[1500] ease-in scale-100' : 'left-[-100px] hidden duration-500 scale-0 ease-in'}>
    <h2 className='text-3xl font-bold p-3'> Eradz </h2>
    <div className=''>
      <a className='text-black no-underline font-light' href='register'>
              <div className="flex p-2 items-end justify-between">
                <div className="flex items-center gap-2">
                <FaRegUser/>
                <div><a className='text-black no-underline font-light' href='register'>My account</a></div>
                </div>
                <IoIosArrowDropdown size={20} className='-rotate-90'/>
              </div>
          </a>
              <div onClick={toogles} className=" flex p-2 items-end justify-between">
                <div className="flex items-center gap-2">
                <BiCategory/>
                <div><a className='text-black no-underline font-light' href='#'>Categories</a></div>
                </div>
                <IoIosArrowDropdown className={show? '-rotate-90 duration-1000 ease-linear': '' } size={20}/>
              </div>
              <div className={!show? 'hidden duration-700 ease-in-out': 'duration-700 ease-in-out'}> 
                {category}
              </div>
              <div className="flex p-2 items-center gap-2">
                <BsStar size={20}/>
                <a className='text-black no-underline font-light' href='#'>Promos</a></div>
              <div className=' flex items-center gap-2 p-2'>
                <BsInfoCircle/>
                <a className='text-black no-underline font-light' href='#'>About us</a></div>
    </div>
    </div>
    </div>
    </>
  )
}
