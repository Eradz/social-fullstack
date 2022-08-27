import React from 'react'
import watch from '../../assest/watch.png'
import jewelry from '../../assest/jewelry.png'
import tv from '../../assest/tvs.png'
import men from '../../assest/man2.png'
import woman from '../../assest/womann.png'
import couch from '../../assest/couch.png'
function Category() {
  return (
    <div className='flex justify-center items-center flex-col mt-5'>
        <h1 className='font-bold mb-4'>All Categories</h1>
        <div className="grid md:grid-cols-3  gap-4">
            <div className="bg-cyan-400 shadow shadow-black  w-[100%] flex justify-between pl-8 rounded-[50px]">
                <div className="my-auto">
                <h5 className='font-semibold pl-2'>Wrist-watches</h5>
                <button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={watch} alt='watch'/>
            </div>
            <div className="bg-green-300 shadow shadow-black  w-[100%] flex justify-between pl-8 rounded-[50px]">
                <div className="my-auto">
                <h5 className='font-semibold pl-2'>Furnitures</h5>
                <button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={couch} alt='watch'/>
            </div>
            <div className="bg-purple-400 shadow shadow-black w-[100%] flex justify-between pl-8 rounded-[50px]">
                <div className="my-auto">
                <h5 className='font-semibold pl-2'>Jewelry</h5>
                <button className=' mt-2 px-3 py-2.5 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={jewelry} alt='watch'/>
            </div>
            <div className="bg-orange-300 shadow shadow-black w-[100%] flex justify-between pl-8 rounded-[50px]">
                <div className="my-auto">
                <h5 className='font-semibold pl-2'>Electronics</h5>
                <button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={tv} alt='watch'/>
            </div>
            <div className="bg-orange-400 shadow shadow-black w-[100%] flex justify-between pl-8 rounded-[50px]">
                <div className="my-auto">
                <h5 className='font-semibold pl-2'>Men's Wears</h5>
                <button className='mt-2 px-2 py-2 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={men} alt='watch'/>
            </div>
            <div className="bg-gray-400 shadow shadow-black w-[100%] flex justify-between pl-8 rounded-[50px]">
                <div className="my-auto">
                <h5 className='font-semibold pl-2'>Female Wears</h5>
                <button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={woman} alt='watch'/>
            </div>
        </div>
    </div>
  )
}

export default Category