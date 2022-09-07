import React from 'react'
import Category from './category/Category'
import { Choose } from './chooseus/Choose'
import Faq from './faq/Faq'
import { Hero } from './hero.js/Hero'
import { Nav } from './nav/Nav'
import { Product } from './products/Product'

function Home() {
  return (
    <div className='bg-bg'>
    <Nav/>
    <Hero/>
    <Category />
    <Choose/>
    <Product/>
    <Faq/>
  </div>
  )
}

export default Home