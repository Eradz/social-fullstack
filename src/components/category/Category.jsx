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
            <div className="bg-blue shadow-3xl shadow-black  w-[100%] flex justify-between pl-1 rounded-[50px]">
                <div className="my-auto">
                <h2 className='font-semibold pl-2'>Wrist-watches</h2>
                <button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={watch} alt='watch'/>
            </div>
            <div className="bg-green-900 shadow-3xl shadow-black  w-[100%] flex justify-between pl-1 rounded-[50px]">
                <div className="my-auto">
                <h2 className='font-semibold pl-2'>Furnitures</h2>
                <button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={couch} alt='watch'/>
            </div>
            <div className="bg-purple-700 shadow-3xl shadow-black w-[100%] flex justify-between pl-1 rounded-[50px]">
                <div className="my-auto">
                <h2 className='font-semibold pl-2'>Jewelry</h2>
                <button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={jewelry} alt='watch'/>
            </div>
            <div className="bg-orange-900 shadow-3xl shadow-black w-[100%] flex justify-between pl-1 rounded-[50px]">
                <div className="my-auto">
                <h2 className='font-semibold pl-2'>Electronics</h2>
                <button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={tv} alt='watch'/>
            </div>
            <div className="bg-orange-700 shadow-3xl shadow-black w-[100%] flex justify-between pl-1 rounded-[50px]">
                <div className="my-auto">
                <h2 className='font-semibold pl-2'>Men's Wears</h2>
                <button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={men} alt='watch'/>
            </div>
            <div className="bg-gray-600 shadow-3xl shadow-black w-[100%] flex justify-between pl-1 rounded-[50px]">
                <div className="my-auto">
                <h2 className='font-semibold pl-2'>Female Wears</h2>
                <button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={woman} alt='watch'/>
            </div>
        </div>
    </div>
  )
}

export default Category