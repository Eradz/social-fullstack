import React from 'react'
import watch from '../../assest/watch.png'
import jewelry from '../../assest/jewelry.png'
import tv from '../../assest/tvs.png'
import men from '../../assest/man2.png'
import woman from '../../assest/womann.png'

function Category() {
  return (
    <div className='flex justify-center items-center flex-col'>
        <h1>All Categories</h1>
        <div className="grid md:grid-cols-3  gap-4">
            <div className="bg-blue shadow-3xl shadow-black  w-[100%] flex justify-between pl-1 rounded-[50px]">
                <div className="my-auto">
                <h2>Wrist-watches</h2>
                <button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={watch} alt='watch'/>
            </div>
            <div className="bg-blue shadow-3xl shadow-black  w-[100%] flex justify-between pl-1 rounded-[50px]">
                <div className="my-auto">
                <h2>Wrist-watches</h2>
                <button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={watch} alt='watch'/>
            </div>
            <div className="bg-blue shadow-3xl shadow-black w-[100%] flex justify-between pl-1 rounded-[50px]">
                <div className="my-auto">
                <h2>Wrist-watches</h2>
                <button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={jewelry} alt='watch'/>
            </div>
            <div className="bg-blue shadow-3xl shadow-black w-[100%] flex justify-between pl-1 rounded-[50px]">
                <div className="my-auto">
                <h2>Wrist-watches</h2>
                <button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={tv} alt='watch'/>
            </div>
            <div className="bg-blue shadow-3xl shadow-black w-[100%] flex justify-between pl-1 rounded-[50px]">
                <div className="my-auto">
                <h2>Wrist-watches</h2>
                <button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={men} alt='watch'/>
            </div>
            <div className="bg-blue shadow-3xl shadow-black w-[100%] flex justify-between pl-1 rounded-[50px]">
                <div className="my-auto">
                <h2>Wrist-watches</h2>
                <button className='mt-2 px-3 py-2.5 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={woman} alt='watch'/>
            </div>
        </div>
    </div>
  )
}

export default Category