import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './header.css';
import ii2 from '../../img/iphone14.jpg';
import ii3 from '../../img/iphone15.jpg';

function Header() {
    return (
      
        <Carousel className="header-carousel" interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://multimart-ecommerce.onrender.com/static/media/hero-img.4cb525f5d6bac4b5af39.png"
            alt="First slide"
          />
          
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ii2}
            alt="Second slide"
          />
          
        </Carousel.Item>
  
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ii3}
            alt="Third slide"
          />
          
        </Carousel.Item>
      </Carousel>
    );
  }
export default Header;
