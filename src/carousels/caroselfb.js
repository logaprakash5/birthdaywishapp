import React from 'react'
import fb from '../images/fb.jpg'
import fb1 from '../images/fb1.jpg'
import fb2 from '../images/fb2.jpg'
import fb3 from '../images/fb3.jpg'
import fb4 from '../images/fb4.jpg'
import fb5 from '../images/fb5.jpg'
import './carosel.css'
import Carousel from 'react-bootstrap/Carousel';

function Caroselfb() {
  return (
    <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={fb}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fb1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fb2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fb3}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fb4}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fb5}
          alt="Second slide"
        />
      </Carousel.Item>
      </Carousel>
  )
}

export default Caroselfb;
