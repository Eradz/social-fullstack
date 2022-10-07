import React from 'react'
import Footer  from './footer/Footer';
import Category from './category/Category'
import { Choose } from './chooseus/Choose'
import Faq from './faq/Faq'
import { Hero } from './hero.js/Hero'
import { Products } from './products/Products'

function Home() {
  return (
    <div className='bg-bg font-poppins'>
    <Hero/>
    <Category />
    <Choose/>
    <Products/>
    <Faq/>
    <Footer/>
  </div>
  )
}

export default Home