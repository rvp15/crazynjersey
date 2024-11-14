import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image4.jpg'
import image3 from '../assets/image2.jpg'
import logo1 from '../assets/logo3.png'

const CarouselComponent = () => {
  return (
    <div>
       <Carousel interval={3000} fade>
      <Carousel.Item>
        <div className="carousel-image-container">
              <img
          src={image1}
          alt="First slide"
          className='slide-img'
        />
           <img
            src={logo1}
            alt="Overlay"
            className="overlay-image"
          />
        </div>
    
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="carousel-image-container">
              <img
          src={image2}
          alt="First slide"
          className='slide-img'
        />
           <img
            src={logo1}
            alt="Overlay"
            className="overlay-image"
          />
        </div>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="carousel-image-container">
              <img
          src={image3}
          alt="First slide"
          className='slide-img'
        />
           <img
            src={logo1}
            alt="Overlay"
            className="overlay-image"
          />
        </div>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselComponent
