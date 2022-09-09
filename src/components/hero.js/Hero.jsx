import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import watch from '../../assest/couple-winter-cloths-studio.jpg'
import first from '../../assest/arturo-rey-5yP83RhaFGA-unsplash.jpg'
import woman from '../../assest/young-woman-casual-wear-posing-street.jpg'
import Electronics from '../../assest/workplace-business-modern-male-accessories-laptop-black-background.jpg'

export const Hero = () => {
  return (
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 md:max-h-[550px]"
          src={Electronics}
          alt="Second slide"
        />
        <Carousel.Caption className='text-[12px] md:text-[20px] font-semibold'>
          <h3><w className='font-bold'>Shopping</w> Just Got Easier</h3>
          <p className=''>Shop now with Eradz store which saves<br/> you the hassel of stepping out to get what you need </p>
          <button className='border-2 py-1 px-2 rounded-[20px]'>Get started</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md:max-h-[550px]"
          src={watch}
          alt="First slide"
        />
        <Carousel.Caption className='text-[12px] md:text-[20px] font-semibold'>
          <h3><w className='md:font-bold'>Shopping</w> Just Got Easier</h3>
          <p className=''>Shop now with Eradz store which saves<br/> you the hassel of stepping out to get what you need </p>
          <button className='border-2 py-1 px-2 rounded-[20px]'>Get started</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md:max-h-[550px] "
          src={first}
          alt="main slide"
        />
        <Carousel.Caption className='text-[12px] md:text-[20px] font-semibold'>
          <h3><w className='font-bold'>Shopping</w> Just Got Easier</h3>
          <p className=''>Shop now with Eradz store which saves<br/> you the hassel of stepping out to get what you need </p>
          <button className='border-2 py-1 px-2 rounded-[20px]'>Get started</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md:max-h-[550px]"
          src={woman}
          alt="Third slide"
        />
        <Carousel.Caption className='text-[12px] md:text-[20px] font-semibold'>
          <h3><w className='font-bold'>Shopping</w> Just Got Easier</h3>
          <p className=''>Shop now with Eradz store which saves<br/> you the hassel of stepping out to get what you need </p>
          <button className='border-2 py-1 px-2 rounded-[20px]'>Get started</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>  )
}
