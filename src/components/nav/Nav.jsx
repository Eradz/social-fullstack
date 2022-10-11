import React, { useState } from 'react'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {FaBars, FaRegUser, FaTimes} from 'react-icons/fa'
import {IoIosArrowDropdown} from 'react-icons/io'
import {BsSearch, BsStar, BsInfoCircle} from 'react-icons/bs'
import {BiCategory} from 'react-icons/bi'
import { useSelector} from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { Search } from '../search/Search'


export const Nav = () => {
  const {cartItem} = useSelector((state) => state.item)
  const {elec} = useSelector((state) => state.elec)
  const menu =[
    {id: 1, name: 'All products', link: '/category'},
    {id: 7, name: 'Male wears', link: '/men'},
    {id: 2, name: 'Female wears', link: '/women'},
    {id: 3, name: 'Wrist-watches', link: '/watches'},
    {id: 6, name: 'Jeweries', link: '/jewelry'},
    {id: 4, name: 'Electronics and computers', link: '/electronics'},
    {id: 5, name: 'Furniture', link: '/furniture'},
  ]

  

  const [nav, setNav] = useState(false)
  const [show, setShow] = useState(false)

  const toogle = () =>{
    setNav(!nav)
  }
  const toogles = () =>{
    setShow(!show)
  }
  const category = menu.map((cate) => {
    return <div key={cate.id} className="bg-gray-200">
       <Link onClick={toogle} className='no-underline text-black font-light ' to={cate.link}>
    <div  className='flex p-2 items-center gap-2 hover:bg-blue'>
     {cate.name}</div>
     </Link>
    </div>
  })

  let [find, setFind] = useState('') 
  const searching = (e)=>{
    setFind(e.target.value)
  }
 
  const finding = elec.filter((item) =>{
    if(item.title.toLowerCase().includes(find) || item.description.toLowerCase().includes(find)){
      return item
    }
    return item
   })

  
  return (
    <>
    <div className='z-30 bg-white sticky w-full top-0 left-0'>
    <div className=' flex md:justify-around justify-between items-center text-lg font-bold px- gap-[-2rem] p-1 relative'>
        <h2 className='text-3xl'><Link to='/' className='no-underline text-black'>  Eradz </Link></h2>
        <div className=' w-6/12 '>
              <div className='items-center justify-center gap-[-2rem] hidden md:flex'>
                <div className='relative w-7/12 '>
                  <input onChange={searching} className='px-9 py-2 relative w-full  text-xs bg-gray-200 rounded-[10px]' type='search' placeholder='Search products, brands and categories' value={find}/>
                  <BsSearch className='absolute top-2 left-3 ' />
                </div>
                  <button className='text-white border-4 bg-blue py-1 lg:px-4 md:px-2  rounded-xl'>Search</button>
              </div>
        </div>
        <div className='md:flex hidden ml-[-5rem] relative lg:text-[20px] md:text-[14px]'> 
            <ul className='flex justify-between items-center md:gap-2 lg:gap-4 mt-2 font-medium '>
              <NavLink className='no-underline text-black hover:text-blue'  to='/'><li className='hover:text-blue'>Home </li></NavLink>
              <div onClick={toogles} className='relative flex justify-between items-center gap-1 hover:text-blue hover:cursor-pointer'>
                  <li className='hover:text-blue'>Category</li>
                  <IoIosArrowDropdown className={!show?'rotate-180 duration-1000': 'duration-1000'}/>
              </div>
              <NavLink className='no-underline text-black hover:text-blue'  to='/'><li className='hover:text-blue'>Promo </li></NavLink>
              <NavLink className='no-underline text-black hover:text-blue'  to='/'><li className='hover:text-blue'>About us </li></NavLink>
            </ul>
            <div className={show? 'flex flex-col text-center gap-y-3 absolute w-[100%] bg-white top-11 duration-1000 scale-100' : 'absolute w-full text-center top-[-1000px] duration-1000 scale-0'}>
           {menu.map((item) => {
            return (
              <Link onClick={toogles} key={item.id} className='text-black no-underline hover:bg-blue py-2' to={item.link}>{item.name}</Link>
            )
           })} 
            </div>
        </div>
            <div className='flex gap-3 items-center justify-center'>
              <Link to={{pathname: "/register"}} className='text-black'>
                <FaRegUser  className='hover:text-blue  hover:cursor-pointer'/>
                </Link>
                <div className='flex justify-center items-center hover:text-blue  hover:cursor-pointer'>
                    <Link to='/cart' className="text-black cursor-pointer"> <HiOutlineShoppingCart  size={25} className='hover:text-blue'/></Link>
                    <p className=' text-center rounded-full text-sm p-1 bg-gray-200'>{cartItem.length}</p>
                </div>
                <div onClick={toogle} className='p-2 md:hidden'>
                {nav? <FaTimes className='animate-bounce text-red-500' size={25}/> :  <FaBars size={25}/>}
                </div>
            </div>
            <div  className={find.length > 1 ? "hidden md:block absolute top-[60px] left-[16%] w-[40%]" : "hidden"}>
                <Search  data={finding} value={setFind}/>
              </div>
    </div>
    <div>
    <div className='relative max-w-[900px] md:hidden w-[98%] mx-auto '>
        <input onChange={searching} className='px-9 py-2 relative w-full  text-xs bg-gray-200 rounded-[10px]' type='search' placeholder='Search products, brands and categories' value={find}/>
        <BsSearch className='absolute top-2 left-3 ' />
    </div>
    <div className={find.length > 1 ? "" : "hidden"}>
    <Search data={finding} value={setFind}/>
    </div>
    </div>
    <div className={nav? 'fixed top-0 left-0 h-screen bg-white w-[60%] flex flex-col md:hidden duration-[1500] ease-in scale-100' : 'left-[-100px] hidden duration-500 scale-0 ease-in'}>
    <h2 className='text-3xl font-bold p-3'> Eradz </h2>
    <div className='flex flex-col gap-y-3 text-[21px]'>
      <Link onClick={toogle} className='text-black no-underline font-light hover:bg-blue' to='/register'>
              <div className="flex p-2 items-center justify-between">
                <div className="flex items-center gap-2">
                <FaRegUser/>
                <div><span className='text-black no-underline font-light' to='register'>My account</span></div>
                </div>
                <IoIosArrowDropdown size={22} className='-rotate-90'/>
              </div>
          </Link>
              <div onClick={toogles}  className="cursor-pointer hover:bg-blue flex p-2 items-center justify-between">
                <div className="flex items-center gap-2">
                <BiCategory/>
                <div >Categories</div>
                </div>
                <IoIosArrowDropdown   className={show? 'duration-700 ease-linear cursor-pointer': 'duration-700 ease-linear -rotate-90 cursor-pointer' } size={22}/>
              </div>
              <div className={!show? 'hidden duration-700 ease-in-out': 'duration-700 ease-in-out'}> 
                {category}
              </div>
              <div className="flex p-2 items-center gap-2 hover:bg-blue">
                <BsStar size={20}/>
                <Link className='text-black no-underline font-light' to='#'>Promos</Link>
              </div>
              <div className=' flex items-center gap-2 p-2 hover:bg-blue'>
                <BsInfoCircle/>
                <Link className='text-black no-underline font-light' to='#'>About us</Link></div>
    </div>
    </div>
    </div>
    </>
  )
}
