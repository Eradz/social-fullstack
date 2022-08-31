import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import watch from '../../assest/couple-winter-cloths-studio.jpg'
import first from '../../assest/arturo-rey-5yP83RhaFGA-unsplash.jpg'
import man from '../../assest/fashion-portrait-young-businessman-handsome-model-man-casual-cloth-suit-with-accessories-hands.jpg'
import woman from '../../assest/young-woman-casual-wear-posing-street.jpg'
import Electronics from '../../assest/workplace-business-modern-male-accessories-laptop-black-background.jpg'

export const Hero = () => {
  return (
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 md:max-h-[550px] "
          src={first}
          alt="main slide"
        />
        <Carousel.Caption className=''>
          <h3>Main slide label</h3>
          <p className=''>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md:max-h-[550px]"
          src={watch}
          alt="First slide"
        />
        <Carousel.Caption className=''>
          <h3>First slide label</h3>
          <p className=''>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md:max-h-[550px]"
          src={Electronics}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='text-red-500'>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className=''>
            <button className='px-3 py-2 rounded-[25px] bg-blue'>Shop now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md:max-h-[550px]"
          src={woman}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md:max-h-[550px]"
          src={man}
          alt="fourth slide"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>  )
}
