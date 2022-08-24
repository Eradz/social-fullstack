import React, { useState } from 'react'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {FaBars, FaRegUser, FaTimes} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'

export const Nav = () => {
  const menu = [
    {id: 1, name: 'Home', link: '#'},
    {id: 2, name: 'Categories', link: '#', items:[
      {id: 2, name: 'Men', link: '#'},
      {id: 3, name: 'Women', link: '#'},
      {id: 4, name: 'Jeweries', link: '#'},
      {id: 5, name: 'Electronics', link: '#'},
    ]},
    {id: 3, name: 'Men', link: '#'},
    {id: 4, name: 'Women', link: '#'},
    {id: 5, name: 'Jeweries', link: '#'},
    {id: 6, name: 'Electronics', link: '#'},
    {id: 9, name: 'About', link: '#'},
    {id: 10, name: 'Contact us', link: '#'},
    {id: 7, name: 'Sign up', link: '#'},
    {id: 8, name: 'Login', link: '#'},
  ]

  

  const [nav, setNav] = useState(false)
  const [show, setShow] = useState(false)

  const toogle = () =>{
    setNav(!nav)
  }
  return (
    <>
    <div className='sticky w-full top-0 left-0'>
    <div className=' flex md:justify-around justify-between items-center text-lg font-bold px- gap-[-2rem] p-1'>
        <h2 className='text-3xl'> Eradz </h2>
        <div className=' w-6/12 items-center justify-center gap-[-2rem] hidden md:flex'>
          <div className='relative w-7/12 '>
            <input className='px-9 py-2 relative w-full text-xs border-solid border-2 border-stone-900 ' type='search' placeholder='Search products, brands and categories'/>
            <BsSearch className='absolute top-2 left-3 ' />
          </div>
            <button className='border-4 bg-blue py-2 px-4 rounded-xl'>SEARCH</button>
        </div>
        <div className='md:flex hidden ml-[-5rem] relative'> 
        {menu.map((link) =>{ 
          if(link.id !== 7 && link.id !== 8 && link.id !== 3 && link.id !== 4 && link.id !== 5 && link.id !== 6   ){
          return <div className='mr-1' key={link.id}>
            <ul >
              <li onClick={() =>{
                  if(link.id === 2){
                    setShow(!show)
                  }
              }} className='pl-4 '><a href={link.link}>{link.name}</a></li>
            </ul>
          </div>}
        })}
        <div className={show? 'absolute top-9 left-[90px] duration-700 ease-in-out' : 'top-[-300px] left-[90px] absolute duration-700 ease-in-out'}>
      {menu[1].items.map((categories) => {
        return <div className='hidden md:block '>{categories.name}</div>
      })}
    </div>
    </div>
    
             <div className='flex gap-3 items-center justify-center'>
              <FaRegUser/>
                <div className='flex justify-center items-center'>
                     <HiOutlineShoppingCart size={25}/>
                     <p className=' text-center rounded-full text-sm '>0</p>
                </div>
                <div onClick={toogle} className='p-2 md:hidden'>
                {nav? <FaTimes size={25}/> :  <FaBars size={25}/>}
                </div>
            </div>
    </div>
    <div className='relative max-w-[900px] md:hidden'>
            <input className='px-9 py-2 relative w-full text-xs border-solid border-2 border-stone-900 rounded-[20px]' type='search' placeholder='Search products, brands and categories'/>
            <BsSearch className='absolute top-3 left-3 ' />
    </div>
    <div className={nav? 'fixed top-0 left-0 h-screen bg-white w-[60%] flex flex-col md:hidden duration-[1500] ease-in scale-100' : 'left-[-100px] hidden duration-500 scale-0 ease-in'}>
    <h2 className='text-3xl font-bold p-3'> Eradz </h2>
        {menu.map((link) =>{
            if((link.id !== 2)){
          return <div className='pt-3' key={link.id}>
            <ul className='text-center p-3'>
              <li><a href={link.link}>{link.name}</a></li>
                <div className=' bg-gray-500 w-full h-1'/>
            </ul>
          </div>}
        })}
    </div>
    </div>
    </>
  )
}
