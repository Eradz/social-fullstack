import React from 'react'
import watch from '../../assest/watch.png'

function Category() {
  return (
    <div>
        <h1>All Categories</h1>
        <div className="category-list">
            <div className="bg-blue flex">
                <div className="category-name">
                <h2>Wrist-watches</h2>
                <button className='px-3 py-2 rounded-[25px] bg-white' >View products</button>
                </div>
                <img className='w-[200px] h-[200px]' src={watch} alt='watch'/>
            </div>
        </div>
    </div>
  )
}

export default Category