import React from 'react'
import fm from '../images/fm.jpg'
import fm1 from '../images/fm1.jpg'
import fm2 from '../images/fm2.jpg'
import fm3 from '../images/fm3.jpg'
import fm4 from '../images/fm4.jpg'
import fm5 from '../images/fm5.jpg'
import './carosel.css'
import Carousel from 'react-bootstrap/Carousel';

function Caroselea() {
  return (
    <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={fm}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fm1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fm2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fm3}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fm4}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fm5}
          alt="Second slide"
        />
      </Carousel.Item>
      </Carousel>
  )
}

export default Caroselea;
