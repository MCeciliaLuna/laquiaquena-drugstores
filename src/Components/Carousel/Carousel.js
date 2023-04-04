import "./Carousel.css";
import hojas from "../assets/images/logo-carousel.png";

const Carousel = () => {
  return (
    <div className="carousel-height">
      <div className="logo-carousel w-100 d-flex justify-content-center align-items-center">
        <img src={hojas} className="hojas-carousel w-75" alt="" srcset="" />
      </div>
    </div>
  );
};

export default Carousel;
