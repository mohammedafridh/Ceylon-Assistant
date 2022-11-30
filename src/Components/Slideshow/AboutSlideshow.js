import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './AboutSlideshow.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className = 'carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100 vehicleImg"
          src="https://www.itplusjapan.co.jp/vehicle_image/5309_163482342461716d00610aa.png"
          alt="Second slide"
        />

        <Carousel.Caption className = 'caption'>
          <h3 className = 'typeIntro'>Cars</h3>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 vehicleImg"
          src="https://lankaholidays.com/pics/48551/IMG-a575521d55ac53e978a52bca72245669-V.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className = 'caption'>
          <h3 className = 'typeIntro'>Vans</h3>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 vehicleImg"
          src="https://cdn.topcarnews.net/media/wp-content/uploads/2022/02/19165148/image-review-2022-toyota-raize-1-0-turbo-164523910865759.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className = 'caption'>
          <h3 className = 'typeIntro'>Mini Jeeps</h3>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel