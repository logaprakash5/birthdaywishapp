import React from 'react'
import crs from '../images/crs.jpg'
import crs1 from '../images/crs1.jpg'
import crs2 from '../images/crs2.jpg'
import crs3 from '../images/crs3.jpg'
import crs4 from '../images/crs4.jpg'
import crs5 from '../images/crs5.jpg'
import './carosel.css'
import Carousel from 'react-bootstrap/Carousel';

function Caroselcrs() {
  return (
    <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={crs}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crs1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crs2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crs3}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crs4}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crs5}
          alt="Second slide"
        />
      </Carousel.Item>
      </Carousel>
  )
}

export default Caroselcrs;
