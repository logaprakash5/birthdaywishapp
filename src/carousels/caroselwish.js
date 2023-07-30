
import w1 from '../images/wish1.jpg'
import w2 from '../images/wish2.jpg'
import w3 from '../images/wish3.jpg'
import w4 from '../images/wish4.jpg'
import w5 from '../images/wish5.jpg'
import w6 from '../images/wish6.jpg'
import w7 from '../images/wish7.jpg'
import w8 from '../images/wish8.jpg'
import w9 from '../images/wish9.jpg'
import w10 from '../images/wish10.jpg'
import w11 from '../images/wish11.jpg'
import w12 from '../images/wish12.jpg'
import w13 from '../images/wish13.jpg'
import w14 from '../images/wish14.jpg'
import React, { useState } from 'react';
import './carosel.css'

import Carousel from 'react-bootstrap/Carousel';

function Caroselwish() {
  const [visi,setvisi] = useState(false);
  const [cn,setcn] = useState(true);

  function visib()
  {
    setvisi(!visi);
    setcn(false);
  }
  return (
    <Carousel>
      <Carousel.Item>
        <div className='family'>
          <h1  className={cn?'fr':'fr2'} onClick={visib}>Friends</h1>
          <br></br>
          {visi && <h1 className='fr1'>Families.....</h1>}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={w1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={w2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={w3}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={w4}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={w5}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={w6}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={w7}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={w8}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={w12}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={w14}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={w11}
          alt="Second slide"
        />
      </Carousel.Item>

      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={w10}
          alt="Second slide"
        />
      </Carousel.Item> */}

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={w9}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={w13}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Caroselwish;