import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {FaFacebook, FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Nav } from '../nav/Nav'


export default function Register() {
  const [signup, setSignup] = useState(true)
  const [show, setShow] = useState(false)


  return (
    <div>
      <Nav/>
    <div className='h-[100vh] py-9 md:w-[80%] mx-auto '>
      <div className='flex justify-center gap-4'>
        <h2 onClick={() => setSignup(true)} className={signup? 'cursor-pointer font-semibold text-blue': 'cursor-pointer font-semibold'}>Sign-up</h2>
        <h2 onClick={() => setSignup(false)} className={!signup? 'cursor-pointer font-semibold text-blue': 'cursor-pointer font-semibold'}>Login</h2>
      </div>
      <span className='flex justify-center'>{signup? <h3>Sign-up</h3>: <h3>login</h3>}</span>
      <div className='flex flex-col gap-4  w-[90%] mx-auto md:w-[98%]'>
        <input type="text" placeholder='Name' name='name' className={signup? 'p-2 bg-gray-200': 'hidden'} />
        <input type="email" placeholder='Email' name='email' className='p-2 bg-gray-200' />
        <div className='relative'>
        <input type={!show? "password": 'text'} placeholder='Password' name='password' className='p-2 bg-gray-200 w-[100%]' />
        {
          !show? <AiOutlineEye onClick={() => setShow(!show)} size={25} className='absolute right-2 top-[8px] cursor-pointer '/>
          :<AiOutlineEyeInvisible onClick={() => setShow(!show)} size={25} className='absolute right-2 top-[8px]  cursor-pointer'/>
        }
        </div>
        <div className={signup? 'relative': 'hidden'}>
        <input type={!show? "password": 'text'} placeholder='Confirm Password' name='password' className='p-2 bg-gray-200 w-[100%]' />
        {
          !show? <AiOutlineEye onClick={() => setShow(!show)} size={25} className='absolute right-2 top-[8px]  cursor-pointer'/>
          :<AiOutlineEyeInvisible onClick={() => setShow(!show)} size={25} className='absolute right-2 top-[8px] cursor-pointer '/>
        }
        </div>
      </div>
      <div className="flex flex-col w-[90%] mx-auto ">
        <label for="agree" className='text-[13px] ' >
        <input type="checkbox" name="agree" />
          <span className='ml-2'>I agree to the <Link to='/register' className='text-blue cursor-pointer no-underline'>Terms and Conditions</Link> of Eradz co.</span>
        </label>
      <button className='bg-blue py-2 w-[70%] mx-auto text-white font-semibold mt-2'>{signup?  <span>Sign Up</span>: <span>Login</span>}</button>
      </div>
      <div className='mt-3 mb-5'>
      <div className="text-center text-black flex justify-center">
            <hr className='w-[35%] border-[4px] mr-2  rounded-[5px]'/>
            <span>OR</span>
            <hr className='w-[35%] ml-2 border-[4px] rounded-[5px]' />
      </div>
      {signup? <h6 className='text-center'>Sign up with</h6>: <h6 className='text-center'>Sign in with</h6>}
      <div className='flex justify-between items-center w-[75%] mx-auto '>
        <FaFacebook size={30} className='text-blue cursor-pointer'/>
        <FcGoogle size={30} className=' cursor-pointer'/>
        <FaTwitter size={30} className='text-blue cursor-pointer'/>
      </div>
      </div>
      <span className='flex justify-center'>{signup? <span>Already Have An Account?<span onClick={() => setSignup(false)} className="text-blue cursor-pointer"> Sign in</span></span>: <span>Not a member? <span onClick={() => setSignup(true)} className="text-blue cursor-pointer">Sign up</span></span>}</span>
    </div>
    </div>
  )
}
