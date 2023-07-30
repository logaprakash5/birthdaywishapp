import React from 'react'
import crt from '../images/crt.jpg'
import crt1 from '../images/crt1.jpg'
import crt6 from '../images/crt6.jpg'
import crt3 from '../images/crt3.jpg'
import crt4 from '../images/crt4.jpg'
import crt5 from '../images/crt5.jpg'
import './carosel.css'
import Carousel from 'react-bootstrap/Carousel';

function Caroselcrt() {
  return (
    <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={crt}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crt1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crt6}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crt3}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crt4}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crt5}
          alt="Second slide"
        />
      </Carousel.Item>
      </Carousel>
  )
}

export default Caroselcrt;
