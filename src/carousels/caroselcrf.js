import React from 'react'
import crf from '../images/crf.jpg'
import crf1 from '../images/crf1.jpg'
import crf2 from '../images/crf2.jpg'
import crf3 from '../images/crf3.jpg'
import crf4 from '../images/crf4.jpg'
import './carosel.css'
import Carousel from 'react-bootstrap/Carousel';

function Caroselcrf() {
  return (
    <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={crf}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crf1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crf2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crf3}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={crf4}
          alt="Second slide"
        />
      </Carousel.Item>
      </Carousel>
  )
}

export default Caroselcrf;
