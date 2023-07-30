import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/adapongada.jpg'
import img2 from '../images/enadi.....jpg'
import img3 from '../images/othukamudyadhu.jpg'
import img4 from '../images/hmphh.jpg'
import React from 'react';
import './carosel.css'

function UncontrolledExample() {
  return (
    <Carousel className='Carousel' >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='logcap'>Adhela Othuka mudyaadhu...</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='logcap'>Innaa diiii.....</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='logcap'>HMPHHH!!!! maaduuu maaduuu</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='logcap'>Ada ponga da iva inaiku pota maari dha</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;