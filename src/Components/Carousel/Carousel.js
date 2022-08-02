import React from 'react';
import './Carousel.css';
import hojas from '../assets/images/logo-carousel.png';

const Carousel = () => {
  return (
      <div>
        <div className="logo-carousel w-100 d-flex justify-content-center align-items-center">
         <img src={hojas} className="hojas-carousel w-75" alt="" srcset="" />
        </div>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-height carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/39828/paper-colorful-color-loose-39828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/39828/paper-colorful-color-loose-39828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/39828/paper-colorful-color-loose-39828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
    </div>
  </div>
</div>
</div>
  );
};

export default Carousel;